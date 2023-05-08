#Берем тот же node в котором писали
FROM node:18.15-alpine As development

#Создает дирректорию для контейнера
WORKDIR /opt/readme-users

#Копируем package.json
COPY ./dist/apps/users/package.json .

#Ставим зависимости
RUN npm install --omit=dev

#Копируем в нее собранный модуль
COPY ./dist/apps/users .



#Команда запуска сикросервиса
CMD ["node", "./main.js"]
