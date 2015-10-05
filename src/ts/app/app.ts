import * as Cameras from "./camera";
import * as Geometry from "./geometry";
import Materials from "./material";
import * as Renderers from "./renderer";
import * as Scenes from "./scene";
import THREE from "../lib/three";
import {container} from "./container";

interface Scene extends THREE.Scene {
	renderer: THREE.Renderer;
	animate: () => void;
}

export default class App {

	meshes: THREE.Mesh[] = [];

	scene: Scene;

	constructor() {
		this.scene = new Scenes.MaterialTestScene();

		//for debugging from the console
		(<any>window).scene = this.scene;
		(<any>window).THREE = THREE;

		window.addEventListener('resize', this.updateSize, false);

		this.updateSize();
	}

	updateSize(): void {
		this.scene.renderer.setSize(container.offsetWidth, container.offsetHeight);
	};
}
