#FROM node:18.11.0-alpine3.16 AS building
FROM node:16.18.0-alpine3.16 AS building

WORKDIR /home/app

COPY package.json .

RUN npm install

COPY . .

#build solid
RUN npm run build

FROM nginx:stable-alpine

COPY --from=building /home/app/dist /usr/share/nginx/html
COPY --from=building /home/app/sites.conf /etc/nginx/conf.d/sites-enabled/sites.conf
COPY --from=building /home/app/nginx.conf /etc/nginx/nginx.conf

RUN rm /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

