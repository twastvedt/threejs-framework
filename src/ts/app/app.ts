import * as Cameras from "./camera";
import * as Geometry from "./geometry";
import Materials from "./material";
import * as Renderers from "./renderer";
import * as Scenes from "./scene";
import THREE from "../lib/three";
import {container} from "./container";

export default class App {
	meshes: THREE.Mesh[] = [];

	scene: Scenes.DefaultScene;

	constructor() {
		this.scene = new Scenes.DefaultScene();

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
