FROM node:18
WORKDIR /app

# Copy package.json and install dependencies from payment-frontend
COPY payment-frontend/package*.json ./
RUN npm install

# Copy all frontend files
COPY payment-frontend/. .

EXPOSE 3000
CMD ["npm", "start"]
