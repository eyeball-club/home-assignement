FROM phpdockerio/php:8.1-fpm
WORKDIR "/application"

RUN apt-get update; \
    apt-get -y --no-install-recommends install \
        git \ 
        php8.1-bcmath \ 
        php8.1-gd \ 
        php8.1-gmp \ 
        php8.1-igbinary \ 
        php8.1-imagick \ 
        php8.1-intl \ 
        php8.1-mcrypt \ 
        php8.1-mysql \ 
        php8.1-redis \ 
        php8.1-sqlite3 \ 
        php8.1-swoole \ 
        php8.1-xdebug; \
    apt-get clean; \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*

RUN composer self-update

RUN curl https://get.symfony.com/cli/installer  | bash
RUN mv /root/.symfony/bin/symfony /usr/local/bin/symfony

ARG UID=1000
ARG USER=app

RUN useradd -s /bin/bash -m ${USER}
RUN usermod -u ${UID} ${USER}