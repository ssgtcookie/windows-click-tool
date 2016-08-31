Windows Click Tool
======
https://ssgtcookie.github.io/windows-click-tool/

## About
The aim of this project is to create a clickable simulation envoirement in the webbrowser.
* 100 % client side. Build with AngularJS and HTML.
* Everything is on one page, no page reloads.
* No cookies are used.
* Code is simple to read, not mutch code to cover.
* Multi envoirement ready. Create multiple simulations (Windows 10, Windows 8.1, Windows 7 and so on).
* No CSS is used to keep everything simple.
* No webserver or special setup is required, just download the code and run it from wherever you want.

## How to use
The app.js file is holding one array that can be modified. In this array you can configure the simulation completely to your needs.

If you want to create a link that changes the current simulation screen you can do something like this:
```
<a ng-click="loadNewScreen('Windows10', 'screen1')">Click here</a>
```
The above example will search for a simulation called "Windows10" in the data array. If found, "screen1" will be loaded on the HTML page.

## License
Please note that I've created this project to experiment with AngularJS. This javascript is working perfectly fine but the content is not nearly done. Feel free to improve this project or use it as you need, the project is 100% license free.
