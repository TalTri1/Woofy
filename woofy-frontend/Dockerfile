# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Set the NODE_ENV environment variable to 'production'
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]