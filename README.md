# server
| NODE | EXPRESS | SEQUELIZE |


## This project use like dependence:

````
node : 16.14.0
cors : 2.8.5
express : 4.17.3
sequelize : 6.17.0
nodemon : 2.0.15
sqlite3 : 5.0.2
````

## To use this project you need:

### Install node 16.14.0:

```
    You can download this node version from nodejs web site:
    https://nodejs.org/en/download/
```

### Clone this repository:

```
    git clone https://github.com/TestMindMiners/server.git
```

### Open the terminal inside of this cloned folder and run:

```
    npm install
```

### To run this project you can use:

```
    npm index.js
    or
    nodemon index.js
    or 
    npm run start
```

## Project folders:

### controllers:

```
    contains all controller methods to call the specific service.
```

### db:

```
    contains:
    - all models from entitys to sqlite database.
    - all connection and db verification methods.
```

### entitys:

```
    contains all entitys classes with attributes and methods.
```

### routes:

```
    contains all routes configurations for all end points.
```

### services:

```
    contains all CRUD methods and preparations (using entitys methods) for the CRUD execution.
```

## Project links:

[Miro](https://miro.com/app/board/uXjVOJ_gH7w=/?invite_link_id=245127349888)
[Trello](https://trello.com/invite/b/A11AQHkK/4f83871db3e51970aa73af3d74fd0172/mindminers-test)
[heroku](https://mindminerstestserver.herokuapp.com/)