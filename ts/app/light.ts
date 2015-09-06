import * as THREE from "three";

export class DefaultLightingRig {
	lights: THREE.Light[];

	constructor(scene: THREE.Scene) {
		for (var i in this.lights) {
			scene.add(this.lights[i]);
		}
	}
}

export class SingleSpotlight extends DefaultLightingRig {

	constructor(scene: THREE.Scene) {

		var light = new THREE.DirectionalLight(0xff3bff);
		light.position.set(0, 0, 300);

		this.lights.push(light);

		super(scene);
	}
}
