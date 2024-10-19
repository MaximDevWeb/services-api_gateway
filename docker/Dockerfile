FROM node:alpine

COPY /site /user/www/site

WORKDIR /user/www/site

RUN npm install

CMD ["npm", "start"]