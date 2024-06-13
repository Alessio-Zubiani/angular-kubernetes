FROM nginx:alpine
COPY ./dist/angular-kubernetes ./usr/share/nginx/html
