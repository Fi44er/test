# Используем официальный образ Node.js как базовый
FROM node:lts

# Устанавливаем рабочий каталог в /app
WORKDIR /app

# Копируем файлы package.json и yarn.lock в контейнер
COPY package*.json package-lock.json ./

# Устанавливаем зависимости при помощи npm
RUN npm install

# Копируем исходный код приложения в контейнер
COPY . .


# Устанавливаем команду, которая будет запускать приложение
CMD ["node", "main.js"]