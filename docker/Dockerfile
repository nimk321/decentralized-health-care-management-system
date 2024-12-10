# Use the official Node.js image as the base image
FROM node:14

# Set working directory inside the container
WORKDIR /decentralized-health-care-management-system

# Copy package.json and package-lock.json first to leverage Docker caching for faster builds
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code (excluding files mentioned in .dockerignore)
COPY . .

# Expose the port your app runs on (default 3000 for Node.js apps)
EXPOSE 3000

# Run the application using the specified command
CMD ["npm", "start"]
