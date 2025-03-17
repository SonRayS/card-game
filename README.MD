&lt;a name="CardGame"&gt;&lt;/a&gt;

&lt;h1 align="centre"&gt;Hi there, this is my project
&lt;img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="32"/&gt;&lt;/h1&gt;
&lt;h3 align="centre"&gt;Playing in pairs&lt;/h3&gt;

&lt;img src="img/readme. PNG" height="128"/&gt;&lt;/h1&gt;

#Development information

The game was written in typescript, using formatters,
linters, web packages, plugins, source maps and
build-level optimisations.

**-----------------------------------**

[![package-lock]]
[![package-json]]

**-----------------------------------**

## Rules

Choose 2 identical maps, make no mistake guess all maps.

### Description

In the game you have to memorise the location of the cards, after
time you have to choose 2 cards of the same kind, if the cards
are the same they disappear and if they are not, the game ends.
If you guess all the cards you win! Also you will know the time
for which you were able to guess all the cards!
The game trains visual perception and memory, attention.
Perseverance and concentration become true friends

&lt;!-- package-lock.json --&gt;

[package-lock]:
{ "packages": { "
"": {
"name": "card-game",
"version": "1.0.0",
"licence": "ISC",
"dependencies": { "
", "eslint": "^8.54.0",
"eslint-config-prettier": "^9.0.0.0",
"eslint-plugin-prettier": "^5.0.1",
"prettier": "^3.1.0",
"stylelint": "^15.11.0",
"stylelint-config-idiomatic-order": "^9.0.0.0",
"stylelint-config-rational-order": "^0.1.2",
"stylelint-config-standard":"^34.0.0",
"stylelint-order": "^6.0.3",
"stylelint-prettier": "^4.1.0"
},
"devDependencies": { "
", "@types/jest": "^29.5.10",
"copy-webpack-plugin": "^11.0.0",
"css-loader": "^6.8.1",
"css-minimizer-webpack-plugin": "^5.0.1",
"html-webpack-plugin": "^5.5.3",
"jest": "^29.7.0",
"mini-css-extract-plugin": "^2.7.6",
"postcss-less": "^6.0.0.0",
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

&lt;!-- package-json --&gt;

[package-json]:
{
"name": "card-game",
"version": "1.0.0",
, "description": "",
"main": "index.ts",
"scripts": { "
", "start": "webpack-dev-server --open",
"testEcho": "echo \"Error: no test specified\" &amp;&amp; exit 1",
"format": "prettier --write ./modules/\*\*\*.js",
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
"dependencies": { "
", "eslint": "^8.54.0",
"eslint-config-prettier": "^9.0.0.0",
"eslint-plugin-prettier": "^5.0.1",
"prettier": "^3.1.0",
"stylelint": "^15.11.0",
"stylelint-config-idiomatic-order": "^9.0.0.0",
"stylelint-config-rational-order": "^0.1.2",
"stylelint-config-standard":"^34.0.0",
"stylelint-order": "^6.0.3",
"stylelint-prettier": "^4.1.0"
},
"devDependencies": { "
", "@types/jest": "^29.5.10",
"copy-webpack-plugin": "^11.0.0",
"css-loader": "^6.8.1",
"css-minimizer-webpack-plugin": "^5.0.1",
"html-webpack-plugin": "^5.5.3",
"jest": "^29.7.0",
"mini-css-extract-plugin": "^2.7.6",
"postcss-less": "^6.0.0.0",
"postcss-loader": "^7.3.3",
"postcss-preset-env": "^9.3.0",
"style-loader": "^3.3.3",
"stylelint-scss": "^5.3.1",
"ts-loader": "^9.5.1",
"typescript": "^5.3.2",
, "webpack": "^5.89.0",
"webpack-cli": "^5.1.4",
"webpack-dev-server": "^4.15.1"
}
}
