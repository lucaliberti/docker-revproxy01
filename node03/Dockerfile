FROM node:12
WORKDIR /usr/src
COPY package*.json ./
RUN npm install
COPY ./app /usr/src/app
EXPOSE 8080
ENV  SERVICENAME SERVICENAME_UNDEFINED
CMD [ "node", "app/server.js" ]
