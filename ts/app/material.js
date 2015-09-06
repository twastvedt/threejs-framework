var THREE = require("three");
var Textures = require("texture");
// Shader objects support redefining of #defines.
// See `simple.frag` file, where `faceColor` is already defined to be white, and we are overriding it to red here
var simpleFrag = require("simple.frag");
var simpleFragC = simpleFrag({ "faceColor": "vec3(1.0, 0, 0)" });
var simpleVert = require("simple.vert");
exports.bump = new THREE.MeshPhongMaterial({ bumpMap: Textures.grass });
exports.grass = new THREE.MeshBasicMaterial({ map: Textures.grass });
exports.shader = new THREE.ShaderMaterial({
    uniforms: {
        uColor: { type: "c", value: new THREE.Color("#ff0000") }
    },
    vertexShader: simpleVert(),
    fragmentShader: simpleFragC
});
exports.solid = new THREE.MeshLambertMaterial({
    color: 0x00dcdc,
    shading: THREE.FlatShading
});
exports.wire = new THREE.MeshBasicMaterial({ wireframe: true });
//# sourceMappingURL=material.js.map