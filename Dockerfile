# Use an official Bun image or build from scratch
FROM oven/bun:latest

# Set the working directory
WORKDIR /app

# Copy project files
COPY . .

# Install dependencies
RUN bun install

# Expose the port
EXPOSE 3000

# Start the server
CMD ["bun", "run", "server.js"]
