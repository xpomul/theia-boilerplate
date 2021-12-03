FROM node:12
WORKDIR /theia

RUN apt-get update \
    && apt-get install -y libsecret-1-0

EXPOSE 3000

ENTRYPOINT docker-entrypoint.sh 
