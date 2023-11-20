COMPOSE = docker-compose -f src/docker-compose.yml

all: up

up: volumes
	$(COMPOSE) up -d

start:
	$(COMPOSE) start

down:
	$(COMPOSE) down

stop:
	$(COMPOSE) stop

volumes:
	mkdir -p ~/data/db

.PHONY: all up start down stop volumes
