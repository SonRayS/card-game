<a name="CardGame"></a>

<h1 align="center">Hi there, this is my project
<img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="32"/></h1>
<h3 align="center">Playing in pairs</h3>

<img src="img/readme.PNG" height="64"/></h1>

# Development information

Игра была написана на typescript, с использованием форматтеров,
линтеров, веб-пакетов, плагинов, исходных карт и
оптимизации на уровне сборки.

**-------------------------------------------------------------------------**
[![package-lock]]
[![package-json]]
**-------------------------------------------------------------------------**

## Rules

Выбирать 2 одинаковых карты, не допуская ошибки угадать все карты.

### Description

В игре нужно запомнить расположение карт, по истечению
времени выбрать 2 предполагаемых карты одного вида, если карты
одинаковы они исчезают,а если нет то игра заканчивается.
При отгадывании всех карт вы выиграете! Так же вы узнаете время
за которое вы смогли отгадать все карты!
В игре тренируются зрительное восприятие и память, внимание.
Усидчивость и концентрация становятся верными друзьями

<!-- package-lock -->

[package-lock]:
"packages": {
"": {
"name": "card-game",
"version": "1.0.0",
"license": "ISC",
"dependencies": {
"eslint": "^8.54.0",
"eslint-config-prettier": "^9.0.0",
"eslint-plugin-prettier": "^5.0.1",
"prettier": "^3.1.0",
"stylelint": "^15.11.0",
"stylelint-config-idiomatic-order": "^9.0.0",
"stylelint-config-rational-order": "^0.1.2",
"stylelint-config-standard": "^34.0.0",
"stylelint-order": "^6.0.3",
"stylelint-prettier": "^4.1.0"
},
"devDependencies": {
"@types/jest": "^29.5.10",
"copy-webpack-plugin": "^11.0.0",
"css-loader": "^6.8.1",
"css-minimizer-webpack-plugin": "^5.0.1",
"html-webpack-plugin": "^5.5.3",
"jest": "^29.7.0",
"mini-css-extract-plugin": "^2.7.6",
"postcss-less": "^6.0.0",
"postcss-loader": "^7.3.3",
"postcss-preset-env": "^9.3.0",
"style-loader": "^3.3.3",
"stylelint-scss": "^5.3.1",
"ts-loader": "^9.5.1",
"typescript": "^5.3.2",
"webpack": "^5.89.0",
"webpack-cli": "^5.1.4",
"webpack-dev-server": "^4.15.1"
}

[package-json]:
{
"name": "card-game",
"version": "1.0.0",
"description": "",
"main": "index.ts",
"scripts": {
"start": "webpack-dev-server --open",
"testEcho": "echo \"Error: no test specified\" && exit 1",
"format": "prettier --write ./modules/\*\*.js",
"stylelint": "stylelint ./styles.css",
"stylelint:fix": "stylelint ./styles.css --fix",
"build": "webpack --mode production",
"server": "webpack serve --open --mode production",
"dev": "webpack --mode development",
"lint:ts": "tsc -watch",
"test": "jest"
},
"author": "",
"license": "ISC",
"dependencies": {
"eslint": "^8.54.0",
"eslint-config-prettier": "^9.0.0",
"eslint-plugin-prettier": "^5.0.1",
"prettier": "^3.1.0",
"stylelint": "^15.11.0",
"stylelint-config-idiomatic-order": "^9.0.0",
"stylelint-config-rational-order": "^0.1.2",
"stylelint-config-standard": "^34.0.0",
"stylelint-order": "^6.0.3",
"stylelint-prettier": "^4.1.0"
},
"devDependencies": {
"@types/jest": "^29.5.10",
"copy-webpack-plugin": "^11.0.0",
"css-loader": "^6.8.1",
"css-minimizer-webpack-plugin": "^5.0.1",
"html-webpack-plugin": "^5.5.3",
"jest": "^29.7.0",
"mini-css-extract-plugin": "^2.7.6",
"postcss-less": "^6.0.0",
"postcss-loader": "^7.3.3",
"postcss-preset-env": "^9.3.0",
"style-loader": "^3.3.3",
"stylelint-scss": "^5.3.1",
"ts-loader": "^9.5.1",
"typescript": "^5.3.2",
"webpack": "^5.89.0",
"webpack-cli": "^5.1.4",
"webpack-dev-server": "^4.15.1"
}
}
