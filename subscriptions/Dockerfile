FROM node:14.4.0-alpine3.11

RUN mkdir -p /opt/sns/app && \
    mkdir -p /opt/sns/logs

RUN  chgrp -R 0 /opt/sns && \
     chmod -R g=u /opt/sns

# USER 1001
# RUN chown -R 1001:0 /opt/sns

COPY config /opt/sns/app/config 
COPY controllers /opt/sns/app/controllers
COPY domain /opt/sns/app/domain
COPY repositories /opt/sns/app/repositories
COPY package*.json /opt/sns/app/
COPY server.js /opt/sns/app/
COPY docker-entrypoint.sh /opt/sns/app/

WORKDIR /opt/sns/app

RUN chmod 775 docker-entrypoint.sh && \
    dos2unix docker-entrypoint.sh && \
    npm install

EXPOSE 3001

ENTRYPOINT ["./docker-entrypoint.sh"]
