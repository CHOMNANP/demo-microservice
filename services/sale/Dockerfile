FROM node:10.16.0

COPY . "/app/"

WORKDIR "/app/"
ADD package.json yarn.lock /app/
RUN yarn install

EXPOSE $NODE_PORT
CMD [ "node", "index.js" ]