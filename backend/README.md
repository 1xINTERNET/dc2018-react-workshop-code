# Backend for the decoupled app

This backend is built using `docker4drupal` ([Visit project documentation](https://docs.wodby.com/stacks/drupal/local/))

To get it up and running you need to install `docker` and (`docker-composer` on Linux machines)

Start local development server (You will probably have to wait a couple of minutes, because importing the database can take a while.):

```bash
$ docker-compose up -d
```

Persist database changes (will be imported on next `docker-compose up -d`:

```bash
$ ./persist-db.sh
```

Stop local development server:

```bash
$ docker-compose down
```
