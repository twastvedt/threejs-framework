import THREE from "../lib/three";

export class DefaultLightingRig {
	lights: THREE.Light[];

	constructor(scene: THREE.Scene) {
		if (this.lights.length) {
			for (var light of this.lights) {
				scene.add(light);
			}
		}
	}
}

export class SingleSpotlight extends DefaultLightingRig {

	constructor(scene: THREE.Scene) {

		var light = new THREE.DirectionalLight(0xff3bff);
		light.position.set(0, 0, 300);
		light.lookAt(new THREE.Vector3(0, 0, 0));

		this.lights = [light];

		super(scene);
	}
}
