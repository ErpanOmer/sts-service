FROM node:16.11.1-alpine

# 若依赖下载较慢，可切换为阿里源
RUN npm config -g set registry https://registry.npm.taobao.org

WORKDIR /service

COPY package.json .
COPY index.js .
COPY secret.json .

RUN npm i

EXPOSE 8000
CMD ["node", "index.js"]