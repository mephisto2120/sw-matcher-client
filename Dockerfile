FROM node:10-alpine as builder

# update packages
RUN apk update

# create root application folder
WORKDIR /app

# copy configs to /app folder
COPY package*.json ./
COPY tsconfig.json ./
# copy source code to /app/src folder
COPY src /app/src
COPY public /app/public

# check files list
RUN ls -a

RUN npm install
RUN npm run build

EXPOSE 3000

CMD [ "node", "./dist/main.js" ]

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
