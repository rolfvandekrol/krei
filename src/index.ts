
let canvas = document.createElement("canvas");
canvas.setAttribute('width',  window.innerWidth.toString());
canvas.setAttribute('height', (window.innerHeight).toString());

let body = <HTMLBodyElement>document.getElementsByTagName('body')[0];
body.appendChild(canvas);

let ctx = canvas.getContext('2d');