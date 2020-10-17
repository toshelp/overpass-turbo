FROM node:12.19.0-alpine3.12
MAINTAINER toshelp

WORKDIR /home/node
RUN apk add git && git clone https://github.com/toshelp/overpass-turbo.git
RUN cd overpass-turbo && yarn install && yarn build && npm install -g http-server

WORKDIR /home/node/overpass-turbo/build/
CMD ["http-server"]
EXPOSE 8080

