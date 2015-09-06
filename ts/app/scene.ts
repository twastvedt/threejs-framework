import * as THREE from "three";
import * as Cameras from "camera";
import * as Geometry from "geometry";
import * as Lights from "light";
import * as Materials from "material";
import * as Renderers from "renderer";
import {container} from "../app/container";


export class DefaultScene extends THREE.Scene {
	camera: Cameras.PerspectiveCamera;
	renderer: Renderers.WebGLRenderer;
	controls: THREE.OrbitControls;

	lighting: Lights.DefaultLightingRig;
	cubes: THREE.Object3D[];

	constructor() {
		super();

		this.camera = new Cameras.PerspectiveCamera(70, 1, 1, 5000);
		this.camera.position.z = 400;

		this.renderer = new Renderers.WebGLRenderer();

		this.controls = new THREE.OrbitControls(this.camera, container);

		this.lighting = new Lights.SingleSpotlight(this);

		var spacing = 300;
		var offset = 0;

		this.cubes = [];

		for (var m in Materials) {
			// Create one cube for each material, and add to scene
			var mesh = new THREE.Mesh(Geometry.cube, Materials[m]);
			mesh.position.x = offset;
			offset += spacing;

			this.add(mesh);

			this.cubes.push(mesh);
		}
	}

	animate() {
		window.requestAnimationFrame(this.animate);
		this.controls.update();

		// Rotate all meshes we've added to scene
		for (var m in this.cubes) {
			var mesh = this.cubes[m];
			mesh.rotation.x += 0.005;
			mesh.rotation.y += 0.01;
		}

		this.renderer.render(this, this.camera);
	}
}