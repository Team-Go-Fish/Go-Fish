FROM node:14.15.1
 WORKDIR /go-fish
 COPY . .
 RUN npm install
 RUN ["apt-get", "update"]
 RUN ["apt-get", "-y", "install", "vim"]
 RUN npm run build

 EXPOSE 3005
 CMD ["node", "./server/index.js"]