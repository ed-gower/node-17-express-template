# Use the official lightweight Node.js image.
# https://hub.docker.com/_/node
FROM node:17

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json first, for efficient caching
COPY package*.json ./

# Install production dependencies.
RUN npm install

# Copy the local code to the container's workspace.
COPY . .

# Set the command to start the app
CMD ["npm", "start"]
