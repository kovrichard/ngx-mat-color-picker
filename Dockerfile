FROM node:16-alpine3.11

RUN apk update && apk upgrade
RUN apk add chromium && npm add -g @angular/cli

ENV CHROME_BIN=/usr/bin/chromium-browser

RUN mkdir -p /usr/src/app/
COPY ./ ./usr/src/app/
WORKDIR /usr/src/app/

RUN npm install && ng update
