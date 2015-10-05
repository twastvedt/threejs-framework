import THREE from "../lib/three";
import {container} from "./container";

export class TF_WebGLRenderer extends THREE.WebGLRenderer {
	constructor(params?: THREE.WebGLRendererParameters) {
		super(params);

		container.innerHTML = "";
		this.sortObjects = false;
		//this.autoClear = false;

		container.appendChild(this.domElement);
	}
}
