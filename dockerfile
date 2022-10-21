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

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

