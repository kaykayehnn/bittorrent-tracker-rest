FROM node:16-alpine

WORKDIR /usr/src/app

RUN apk add --no-cache --update dumb-init

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

USER node

CMD ["dumb-init", "--", "node", "src/index.js"]
