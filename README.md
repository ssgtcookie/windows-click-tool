Windows Click Tool
======
https://ssgtcookie.github.io/windows-click-tool/
![alt tag](https://ssgtcookie.github.io/windows-click-tool/img/window7_screen1.png)

## About
The aim of this project is to create a clickable simulation envoirement in the webbrowser.
* 100 % client side, created with AngularJS, Javascript and HTML.
* No page reloads.
* No cookies are used.
* Everything is on one page.
* It's fast.
* Code is simple to read, not mutch code to cover.
* Multi envoirement ready, create multiple simulations (Windows 10, Windows 8.1, Windows 7 and so on).
* No CSS is used to keep everything simple.

## How to use
The app.js file is holding one array that can be modified. In this array you can configure the simulation completely to your needs.

If you want to link to a simulation you can do this:
```
<a ng-click="loadNewScreen("Windows10", "screen1")">Click here</a>
```
The above example will search for a simulation called "Windows10" in the data array. If found, "screen1" will be loaded.

## License
Please note, I've created this project to play with AngularJS. This javascript is working perfectly fine but the content is not nearly done. Feel free to improve this project or use it as you need, the project is 100% license free.
