# Use Node.js official image
FROM node:18-alpine

# Create and set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Start the Node.js backend
CMD ["npm", "start"]
