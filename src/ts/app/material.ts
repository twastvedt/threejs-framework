import THREE from "../lib/three";
import * as Textures from "./texture";

var glslify = require('glslify');

var simpleFrag = glslify("../../shaders/simple.frag");
var simpleVert = glslify("../../shaders/simple.vert");


var materials: { [index: string]: THREE.Material; } = {};

materials["bump"] = new THREE.MeshPhongMaterial({ bumpMap: Textures.grass });

materials["grass"] = new THREE.MeshBasicMaterial({ map: Textures.grass });

materials["shader"] = new THREE.ShaderMaterial({
	uniforms: {
        uColor: { type: "c", value: new THREE.Color("#ff0000") }
	},
	attributes: {
		faceColor: { type: 'v3', value: new THREE.Vector3(1, 0, 0) }
	},
	vertexShader: simpleVert,
	fragmentShader: simpleFrag
});

materials["solid"] = new THREE.MeshLambertMaterial({
	color: 0x00dcdc,
	shading: THREE.FlatShading
});

materials["wire"] = new THREE.MeshBasicMaterial({ wireframe: true, color: 0x090909 });

export default materials;