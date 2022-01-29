FROM node:12

RUN apt-get update \
    && apt-get install -y g++ gcc make python2.7 pkg-config libx11-dev libxkbfile-dev libsecret-1-dev \
    && apt-get autoclean -y \
    && apt-get autoremove -y \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# install code generator for theia extensions
RUN npm install -g yo generator-theia-extension

USER node

EXPOSE 3000

ENTRYPOINT docker-entrypoint.sh 
