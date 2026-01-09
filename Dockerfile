# syntax=docker/dockerfile:1

FROM oven/bun:1.1.30 AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM oven/bun:1.1.30 AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

FROM oven/bun:1.1.30 AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=4173
COPY --from=build /app/dist ./dist
COPY --from=deps /app/node_modules ./node_modules
COPY package.json ./package.json
EXPOSE 4173
CMD ["bunx", "vite", "preview", "--host", "0.0.0.0", "--port", "4173"]
