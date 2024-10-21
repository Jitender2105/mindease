
# Use Node.js official image for the frontend
FROM node:18-alpine

# Create and set the working directory inside the container
WORKDIR /usr/src/app

#testing comment

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Expose the port Next.js runs on
EXPOSE 3000

# Start the Next.js development server
CMD ["npm", "run", "dev"]