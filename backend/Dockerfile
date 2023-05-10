###################
# BUILD FOR LOCAL DEVELOPMENT
###################

#TODO: finish nestjs configuration

FROM node:18-alpine As development
WORKDIR /app

# Copy configuration files
COPY tsconfig*.json ./
COPY package*.json ./

# Install dependencies from package-lock.json, see https://docs.npmjs.com/cli/v7/commands/npm-ci
RUN npm install

# Copy application sources (.ts, .tsx, js)
COPY src/ src/

# Build application (produces dist/ folder)

# Expose application port
EXPOSE 3001

# Start application
CMD [ "npm", "run" , "start:dev"]
