# Stage 1: Build the React frontend
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Create the final image
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY --from=build /app/build ./build
COPY server.js .
EXPOSE 3001
CMD ["node", "server.js"]