FROM node:alpine

WORKDIR /app

COPY package*.json .
COPY .env .
COPY src src

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]
