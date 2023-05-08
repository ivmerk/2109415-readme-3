#Берем тот же node в котором писали
FROM node:18.15-alpine As development

#Создает дирректорию для контейнера
WORKDIR /opt/readme-users


#Копируем в нее собранный модуль
COPY ./dist/apps/users .

#Ставим зависимости
RUN npm install --omit=dev

#Команда запуска сикросервиса
CMD ["node", "./main.js"]
