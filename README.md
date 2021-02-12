# "Movies explorer" (бэкенд)

## Описание API

### Auth
+ POST /signin - авторизовать пользователя

    Input

    Name     | Type   | Require | Unique | Min length | Max length
    -------- |:------:|:-------:|:------:|:----------:|:----------:
    email    | String | true    | true   | 0          | Infinity
    password | String | true    | false  | 8          | Infinity

    Output

    Name  | Type
    ----- |:---:
    name  | String
    email | String

+ POST /signup - зарегистрировать пользователя

    Input

    Name     | Type   | Require | Unique | Min length | Max length
    -------- |:------:|:-------:|:------:|:----------:|:----------:
    name     | String | true    | false  | 2          | 30
    email    | String | true    | true   | 0          | Infinity
    password | String | true    | false  | 8          | Infinity

    Output

    Name  | Type
    ----- |:---:
    name  | String
    email | String

+ GET /signout - выход из системы

    Output

    Name    | Type
    ------- |:---:
    success | Boolean

### User

+ GET /users/me - получить данные текущего пользователя

    Output

    Name  | Type
    ----- |:---:
    name  | String
    email | String

+ PACTH /users/me - обновить данные текущего пользователя

    Input

    Name  | Type   | Require | Unique | Min length | Max length
    ----- |:------:|:-------:|:------:|:----------:|:---:
    name  | String | true    | false  | 2          | 30
    email | String | true    | true   | 0          | Infinity

    Output

    Name  | Type
    ----- |:---:
    name  | String
    email | String

### Сards

+ GET /movies - получить список сохраненных фильмов текущего опльзователя

    Output

    Name        | Type
    ------------|:---:
    country     | String
    director    | String
    duration    | Number
    year        | String
    description | String
    image       | String
    trailer     | String
    thumbnail   | String
    owner       | Object
    movieId     | String
    nameRU      | String
    nameEN      | String

+ POST /movies - добавить фильм в сохраненные
    Input

    Name        | Type   | Require
    ------------|:------:|:------:
    country     | String | true
    director    | String | true
    duration    | Number | true
    year        | String | true
    description | String | true
    image       | String | true
    trailer     | String | true
    thumbnail   | String | true
    movieId     | String | true
    nameRU      | String | true
    nameEN      | String | true

    Output

    Name        | Type
    ------------|:---:
    country     | String
    director    | String
    duration    | Number
    year        | String
    description | String
    image       | String
    trailer     | String
    thumbnail   | String
    owner       | Object
    movieId     | String
    nameRU      | String
    nameEN      | String

+ DELETE /cards/:cardId - удалить фильм из сохраненных по ID

    Output

    Name        | Type
    ------------|:---:
    country     | String
    director    | String
    duration    | Number
    year        | String
    description | String
    image       | String
    trailer     | String
    thumbnail   | String
    owner       | Object
    movieId     | String
    nameRU      | String
    nameEN      | String

## Запуск проекта

`npm run start` — запускает сервер
`npm run dev` — запускает сервер с hot-reload


## Используемы технологии

Данный проект был реализован на Node.js, Express.js, JS и MongoDB согласно технологии Rest API.

## Планы на будущее

1. Реализовать систему рекомендаций
2. Расширить профиль пользователя
3. Реализовать возможность комментирования
