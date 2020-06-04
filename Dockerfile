FROM node:lts as build-deps

ARG API_URL
ENV GATSBY_API_URL=$API_URL

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.15-alpine
COPY default.conf /etc/nginx/conf.d/
COPY --from=build-deps /usr/src/app/public /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]