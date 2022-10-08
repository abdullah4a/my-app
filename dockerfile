FROM node:16.17.0 as node_build

RUN mkdir /my-app

WORKDIR /my-app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
