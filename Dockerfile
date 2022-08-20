# 有了node的基础环境
FROM node:14-alpine 
#工作目录
WORKDIR /code

ADD . /code

RUN yarn

CMD npm start 

EXPOSE 3000

