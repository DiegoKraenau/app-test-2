FROM node:14

COPY . /
ENV NODE_OPTIONS=--max_old_space_size=512
RUN npm install
EXPOSE 3001
CMD ["node", "index.js"]