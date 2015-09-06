import Detector = require("Detector");
import * as app from "app/app";
import {container} from "app/container";

if ( ! Detector.webgl ) {
	Detector.addGetWebGLMessage();
	container.innerHTML = "";
}

// Initialize our app and start the animation loop (animate is expected to call itself)
app.init();
app.animate();
