> **Important! Please read!**
>
> The repository contains the `settings.php` file with the database credentials. This should NEVER be done with real-life projects.
>
> (Also the `sites/default/files` directory is under version control. This is probably also not a good idea in non-demo projects)

The backend is built using `docker4drupal` ([Visit project documentation](https://docs.wodby.com/stacks/drupal/local/))

You need to have the following dependencies installed:

- `docker`
- `composer`
- `docker-compose` on Linux

## Getting started

1. Go into the `./backend` directory:
   ```bash
   $ cd backend
   ```
2. Install backend dependencies:
   ```bash
   $ cd htdocs && composer install --ignore-platform-reqs && cd ..
   ```
3. Start local development server (You will probably have to wait a minute, because importing the database can take a while. Before this is complete you will see an `The website encountered an unexpected error. Please try again later.` error.):
   ```bash
   $ docker-compose up -d
   ```
4. Clean the cache
   ```bash
   $ docker-compose exec php drush cr -r /var/www/html/htdocs/web
   ```
5. You can access the backend by pointing your browser to [http://dc2018-react-backend.docker.localhost/](http://dc2018-react-backend.docker.localhost/) – The login details are: `admin`/`admin123`

6. Point the app to use the local backend by changing the property `apiBase` in `package.json` to the above URL.

## Persisting database changes

Persist database changes (will be imported on next `docker-compose up -d`:

```bash
# In ./backend/
$ ./persist-db.sh
```

## Stopping local development server

```bash
$ docker-compose down
```
