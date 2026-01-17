# Use Node.js 18 as the base image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json from payment-frontend
COPY payment-frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy all frontend source files
COPY payment-frontend/. .

# Expose port 3000 for the frontend
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
