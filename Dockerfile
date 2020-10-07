FROM node:12

WORKDIR /ApiGateway

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]