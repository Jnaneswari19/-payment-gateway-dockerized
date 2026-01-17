const express = require('express');
const crypto = require('crypto');
const fs = require('fs');
const app = express();

const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || 'whsec_test_abc123';
const LOG_FILE = './webhook.log';

app.use(express.json({ type: '*/*' }));

function verifySignature(payload, signature) {
  const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET);
  const digest = hmac.update(JSON.stringify(payload)).digest('hex');

  if (!signature) return false;

  // Convert both to buffers
  const digestBuf = Buffer.from(digest, 'hex');
  const sigBuf = Buffer.from(signature, 'hex');

  // If lengths differ, return false instead of throwing
  if (digestBuf.length !== sigBuf.length) {
    return false;
  }

  return crypto.timingSafeEqual(digestBuf, sigBuf);
}

app.post('/webhook', (req, res) => {
  const signature = req.headers['x-webhook-signature'];
  const payload = req.body;

  const valid = verifySignature(payload, signature);
  const logEntry = `[${new Date().toISOString()}] signature=${signature} valid=${valid} payload=${JSON.stringify(payload)}\n`;
  fs.appendFileSync(LOG_FILE, logEntry);

  if (!valid) {
    return res.status(400).json({ ok: false, error: 'invalid_signature' });
  }
  return res.status(200).json({ ok: true });
});

const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`Webhook receiver listening on ${port}`));
