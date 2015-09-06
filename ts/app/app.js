var Geometry = require("geometry");
var Materials = require("material");
var Renderers = require("renderer");
var Scenes = require("scene");
var THREE = require("three");
var meshes = [];
var scene;
var renderer;
function init() {
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
exports.init = init;
function animate() {
    window.requestAnimationFrame(this.animate);
    scene.controls.update();
    // Rotate all meshes we've added to scene
    for (var m in meshes) {
        var mesh = meshes[m];
        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.01;
    }
    renderer.render(scene, scene.camera);
}
exports.animate = animate;
//# sourceMappingURL=app.js.map