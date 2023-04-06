FROM node:16

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
ADD src/* ./src/

RUN npm install
RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start" ]
