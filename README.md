# laravel-vuejs-examples

## Installation

Install PHP dependencies via Composer.

```bash
composer install
```

> After running the command "`composer install`", the .env file is automatically copied from the .env.example file and the application key is also generated. You needn't to initialize them manually.

Set these environment variables (see .env file).

```txt
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```
Migrate and run the default seeder.

```bash
php artisan migrate --seed
```

Install node dependencies via yarn.

```bash
yarn install
```

Compile CSS, JavaScript files. (see webpack.mix.js file).

```bash
yarn run prod # or "yarn run dev" for development
```

Watch changes of files.

```bash
yarn run watch
```

Run the development PHP Built-in server.

> After running install, Application run in port 80. Visit http://localhost:8000/
