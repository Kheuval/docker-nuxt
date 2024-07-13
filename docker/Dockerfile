ARG NODE_VERSION=20.10.0

FROM node:${NODE_VERSION} as base

ENV HOST='0.0.0.0'
ENV PORT='3000'

WORKDIR /srv

RUN npm install -g pnpm

CMD [ "pnpm", "run", "dev" ]