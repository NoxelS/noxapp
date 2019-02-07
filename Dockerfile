FROM node:8
WORKDIR /usr/src/noxelapp
VOLUME /usr/src/noxelapp
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9999:9999
CMD [ "npm", "start" ]
