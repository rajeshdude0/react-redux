FROM i386/node:10.13-alpine
MAINTAINER f0rtyseven
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]