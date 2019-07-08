<p align="center">
<img src="https://raw.githubusercontent.com/lucaslpsan/vuetify-pug-snippet/master/assets/icon.png" height="165" alt="Icon">
</p>

# Vuetify Pug snippet
![GitHub license](https://img.shields.io/github/license/lucaslpsan/vuetify-pug-snippet.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/lucaslpsan/vuetify-pug-snippet.svg)

VSCode Snippet for the Vuetify framework using Pug. Type faster with:
* Auto Completion
* Correct writing and indentation.
* Friendly Description

![Gif](assets/vuetify-pug-snippet.gif)

## Features
### Built for Vuetify 2 (in beta).
> From version 0.5.0 the snippet was redone to version 2 of Vuetify. New possibilities, components and benefits. A new structure was made for the snippet.

- Created from Vuetify v2.0.0-beta.5 and Vue 2.
- More than 365 snippets.
- All components of Vuetify 2.
- Now the snippets will have a more friendly description, following the official documentation (in progress).

## Usage
You only have to type a part of the component, VSCode will present you with a list of combinations. Pressing Tab to enter the full component name or even a code skeleton.

Auto Completion
![example](assets/example.png)

Friendly Description
![example](assets/example-description.png)

## Comparison Tags HTML vs Pug
<p>
    <img width=32% src="https://raw.githubusercontent.com/lucaslpsan/vuetify-pug-snippet/master/assets/code-result.png" >
    <img width=33% src="https://raw.githubusercontent.com/lucaslpsan/vuetify-pug-snippet/master/assets/code-html.png">
    <img width=33% src="https://raw.githubusercontent.com/lucaslpsan/vuetify-pug-snippet/master/assets/code-pug.png">
</p>

No tag pollution, no closing tags, use indentation and understand better.

## Requirements

Installing the pug package via npm - `npm i pug`

Also install via npm - `npm i pug-plain-loader`

The code must be inside a template lang="pug".
```
<template lang="pug">
    //- code start
</template>
```
[VSCode Extesion Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) installed.

## Known Issues
The snippets will be shown for pug code even though it is not a `.vue` file. In this case, if the project is not Vuetify, you can disable it in the workspace.

## Release Notes

Versions, additions and fixes.

[Changelog here](CHANGELOG.md)

-----------------------------------------------------------------------------------------------------------

## Future releases and improvements

**Note:** More snippets will be added in the future. (More and better)

From:

* New releases of Vuetify.
* [Issues](https://github.com/lucaslpsan/vuetify-pug-snippet/issues)

## For more information

* [Vuetify Beta](https://next.vuetifyjs.com/)
* [Pug](https://pugjs.org/)
* [Vetur](https://vuejs.github.io/vetur)

### License
MIT © [lucaslpsan](https://lucaslpsan.github.io/en/)

**Enjoy!**
