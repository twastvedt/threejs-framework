var app = require("app/app");
var container_1 = require("app/container");
if (!Detector.webgl) {
    Detector.addGetWebGLMessage();
    container_1.container.innerHTML = "";
}
// Initialize our app and start the animation loop (animate is expected to call itself)
app.init();
app.animate();
//# sourceMappingURL=main.js.map