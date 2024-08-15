# Base Image
FROM node:18-alpine

# Set Working Directory
WORKDIR /app

# Copy Package Files and Install Dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy All Files
COPY . .

# Environment Variables
ENV PORT=5000

# Expose Port
EXPOSE 5000

# Start the Server
CMD ["node", "index.js"]
