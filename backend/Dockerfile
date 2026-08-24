# Stage 1: Build native dependencies & TypeScript
FROM node:20-alpine AS builder

# Install build dependencies for better-sqlite3 native compilation
RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Remove devDependencies to produce lean node_modules
RUN npm prune --omit=dev

# Stage 2: Production runtime
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3001
ENV DB_PATH=/app/data/shopee-affiliate.db

# Copy compiled files and production node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Create database directory for volume mounting
RUN mkdir -p /app/data

EXPOSE 3001

CMD ["node", "dist/main.js"]
