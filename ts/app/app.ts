import * as Cameras from "camera";
import * as Geometry from "geometry";
import * as Materials from "material";
import * as Renderers from "renderer";
import * as Scenes from "scene";
import * as THREE from "three";

var meshes: THREE.Mesh[] = [];

var scene: Scenes.DefaultScene;
var renderer: THREE.Renderer;

export function init() {
    var spacing = 300;
    var offset = 0;

	scene = new Scenes.DefaultScene();

	renderer = new Renderers.WebGLRenderer();

    for (var m in Materials) {
        // Create one cube for each material, and add to scene
        var mesh = new THREE.Mesh(Geometry.cube, Materials[m]);
        mesh.position.x = offset;
        offset += spacing;
        scene.add(mesh);
        meshes.push(mesh);
    }
}

export function animate() {
	window.requestAnimationFrame(this.animate);

	scene.controls.update();

	// Rotate all meshes we've added to scene
	for ( var m in meshes ) {
		var mesh = meshes[m];
		mesh.rotation.x += 0.005;
		mesh.rotation.y += 0.01;
	}

	renderer.render( scene, scene.camera );
}