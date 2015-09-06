import * as THREE from "three";
import {container} from "container";

export class PerspectiveCamera extends THREE.PerspectiveCamera {

	constructor(fov?: number, aspect?: number, near?: number, far?: number) {
		super(fov, aspect, near, far);
		
		window.addEventListener('resize', this.updateSize, false);
		this.updateSize();
	}

	updateSize() {
		this.aspect = container.offsetWidth / container.offsetHeight;
		this.updateProjectionMatrix();
	}
}
