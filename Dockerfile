# This was created on a 32 Bit System, that's why using node image from i386 repo
# Remove 'i386/' to use the official 64 bit image
FROM i386/node:10.13-alpine
MAINTAINER f0rtyseven
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
