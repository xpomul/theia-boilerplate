FROM node:12
WORKDIR /theia

# required to satisfy Theia dependencies
RUN apt-get update \
    && apt-get install -y libsecret-1-0 

# install code generator for theia extensions
RUN npm install -g yo generator-theia-extension

EXPOSE 3000

ENTRYPOINT docker-entrypoint.sh 
