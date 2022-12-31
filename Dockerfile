# docker run -p 3000:3000 nestjs_api_dev
# docker build -t nestjs_api_dev .

FROM node:18-alpine As production

WORKDIR /usr/src/app

COPY ["package.json", "yarn.lock", "/usr/src/app/"]

RUN apk add git

RUN yarn

RUN yarn global add concurrently

COPY . .

EXPOSE 3000

RUN ls

CMD ["concurrently", "--raw", "yarn:start-prod-default", "yarn:start-prod-config", "yarn:start-prod-auth"]