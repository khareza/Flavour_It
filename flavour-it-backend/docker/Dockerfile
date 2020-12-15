FROM node:alpine as builder

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

RUN apk --no-cache add python make g++

COPY package*.json ./
RUN npm install

# Second stage
FROM node:alpine

WORKDIR /app
COPY --from=builder node_modules node_modules

COPY . .

CMD [ "npm", "run", "start:prod" ]