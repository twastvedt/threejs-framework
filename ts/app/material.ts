import * as THREE from "three";
import * as Textures from "texture";

interface ShaderVars {
	[s: string]: string;
}

interface ShaderReturn {
	(ShaderVars?): string;
}

declare var require: (moduleId: string) => ShaderReturn;

// Shader objects support redefining of #defines.
// See `simple.frag` file, where `faceColor` is already defined to be white, and we are overriding it to red here
var simpleFrag = require("simple.frag");
var simpleFragC:string = simpleFrag({ "faceColor": "vec3(1.0, 0, 0)" });

var simpleVert = require("simple.vert");


export var bump = new THREE.MeshPhongMaterial({ bumpMap: Textures.grass });

export var grass = new THREE.MeshBasicMaterial({ map: Textures.grass });

export var shader = new THREE.ShaderMaterial({
	uniforms: {
        uColor: { type: "c", value: new THREE.Color("#ff0000") }
	},
	vertexShader: simpleVert(),
	fragmentShader: simpleFragC
});

export var solid = new THREE.MeshLambertMaterial({
	color: 0x00dcdc,
	shading: THREE.FlatShading
});

export var wire = new THREE.MeshBasicMaterial({ wireframe: true });
