import * as THREE from "three";
import {container} from "container";

export class WebGLRenderer extends THREE.WebGLRenderer {
	constructor(params?: THREE.WebGLRendererParameters) {
		super(params);

		container.innerHTML = "";
		this.sortObjects = false;
		this.autoClear = false;

		container.appendChild(this.domElement);

		window.addEventListener('resize', this.updateSize, false);
	}

	updateSize(): void {
		this.setSize( container.offsetWidth, container.offsetHeight );
	};
}
