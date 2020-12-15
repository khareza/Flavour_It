FROM node:14.15-alpine as builder

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install && npm install react-scripts@3.4.1 -g

COPY . .

RUN npm run build

FROM nginx

EXPOSE 3000

COPY ../nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html