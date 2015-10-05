var Detector = require("./vendor/Detector");
import App from "./app/app";
import {container} from "./app/container";

if ( ! Detector.webgl ) {
	Detector.addGetWebGLMessage();
	container.innerHTML = "";
}

// Initialize our app and start the animation loop (animate is expected to call itself)
var app = new App();
app.scene.animate();
