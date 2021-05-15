# JavaScript Practices

These projects have been prepared from scratch after watching the [Build 15 JavaScript Projects - Vanilla JavaScript Course](https://www.youtube.com/watch?v=3PHXvlpOkf4) created by John Smilga.

**Projects**
1. Color Flipper
2. Counter
3. Reviews
4. Navbar
5. Sidebar
6. Modal
7. Questions
8. Menu

> :warning: **All of the 15 projects will be made. This repository will be updated as the projects have been completed.**

## [Demo website](https://javascript-practices.vercel.app/)

# Project Structure

All source codes are located under the src folder.
Home folder is the index page where the project links are listed.
The source codes of the projects are located under the projects folder with their own names.

The structure for each project and home is as follows:

css / main.css file is created from main.scss file which is inside the scss folder. main.scss file is used to import the other scss files. CSS codes of the index page are included in the scss / pages.

LiquidJS is used as a template engine. Files of the template are in the views folder.

## Installation

```bash
git clone https://github.com/hey-fk/javascript-practices
cd javascript-practices
npm install or yarn install
```

## Start the server

```bash
gulp
```

Now enter [`localhost:3000`](http://localhost:3000) in the address bar of your browser.

## Dist Folder

```bash
gulp dist
```

Production files will be prepared in /dist folder.

## Deploy Vercel

Build Command
```bash
gulp dist
```

Output Directory
```bash
dist
```

## Contributing

Did you found a bug or got an idea for a new feature? Feel free to use the [issue tracker](https://github.com/hey-fk/javascript-practices/issues) to let me know. Or make directly a [pull request](https://github.com/hey-fk/javascript-practices/pulls).

## Credits

[Build 15 JavaScript Projects - Vanilla JavaScript Course by John Smilga](https://www.youtube.com/watch?v=3PHXvlpOkf4)

## License

This repo is released under the MIT License.