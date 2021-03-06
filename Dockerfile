FROM node
LABEL maintainer="amar"

WORKDIR /usr/app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm","test"]