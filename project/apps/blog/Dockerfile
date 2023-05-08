#Берем тот же node в котором писали чтобы работала prisma берем slim
FROM node:18.15.0-slim

#для работы prism
RUN apt-get update && apt-get install -y openssl libssl-dev

#Создает дирректорию для контейнера
WORKDIR /opt/readme-blog

#Копируем package.json
COPY ./dist/apps/blog/package.json .

#Ставим зависимости
RUN npm install --omit=dev

#копируем файл призмы
COPY ./dist/apps/blog/assets/prisma/schema.prisma ./schema.prisma

#генерируем клиента
RUN npx prisma generate --schema schema.prisma
RUN cp -R ../../node_modules/.prisma ./node_modules && rm -rf ../node_modules

#Копируем в нее собранный модуль
COPY ./dist/apps/blog .



#Команда запуска сикросервиса
CMD ["node", "./main.js"]
