# Build stage
FROM node:18-alpine AS build-stage

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:18-alpine AS production-stage

WORKDIR /app

# Copy built assets from build stage
COPY --from=build-stage /app/.output /app/.output
COPY --from=build-stage /app/package*.json /app/

# Install production dependencies only
RUN npm install --production

# Expose the port the app runs on
EXPOSE 3001

# Start the application
CMD ["node", ".output/server/index.mjs"] 