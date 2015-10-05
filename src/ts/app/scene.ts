import * as Cameras from "./camera";
import * as Geometry from "./geometry";
import * as Objects from "./object";
import * as Lights from "./light";
import Materials from "./material";
import * as Renderers from "./renderer";
import {container} from "../app/container";
import THREE from "../lib/three";

export class TF_Scene extends THREE.Scene {

	camera: Cameras.MyPerspectiveCamera;
	renderer: Renderers.TF_WebGLRenderer;
	controls: THREE.OrbitControls;

	lighting: Lights.DefaultLightingRig;
	cubes: THREE.Object3D[];

	constructor() {
		super();
	}

	animate: () => void;
}

export class MaterialTestScene extends TF_Scene {

	constructor() {
		super();

		this.camera = new Cameras.MyPerspectiveCamera(70, 1, 1, 5000);

		this.camera.position.set(0, 1000, 0);

		this.renderer = new Renderers.TF_WebGLRenderer();
		this.renderer.setClearColor(new THREE.Color("#fff"));

		this.controls = new THREE.OrbitControls(this.camera, container);
		this.controls.target = new THREE.Vector3(0, 0, 0);

		this.lighting = new Lights.SingleSpotlight(this);

		var spacing = 200;
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

	animate = () => {
		window.requestAnimationFrame(this.animate);
		this.controls.update();

		// Rotate all meshes we've added to scene
		for (var c of this.cubes) {
			c.rotation.x += 0.005;
			c.rotation.y += 0.01;
		}

		this.renderer.render(this, this.camera);
	}
}