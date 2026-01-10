FROM oven/bun:1

WORKDIR /app
COPY . .

RUN bun install && bun run build

EXPOSE 4173
CMD ["bun", "preview"]
