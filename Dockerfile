FROM node:10-alpine as builder

# update packages
RUN apk update

WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .

# check files list
RUN ls -a

RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
