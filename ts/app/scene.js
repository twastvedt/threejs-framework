var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var THREE = require("three");
var Cameras = require("camera");
var Geometry = require("geometry");
var Lights = require("light");
var Materials = require("material");
var Renderers = require("renderer");
var container_1 = require("../app/container");
var DefaultScene = (function (_super) {
    __extends(DefaultScene, _super);
    function DefaultScene() {
        _super.call(this);
        this.camera = new Cameras.PerspectiveCamera(70, 1, 1, 5000);
        this.camera.position.z = 400;
        this.renderer = new Renderers.WebGLRenderer();
        this.controls = new THREE.OrbitControls(this.camera, container_1.container);
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
    DefaultScene.prototype.animate = function () {
        window.requestAnimationFrame(this.animate);
        this.controls.update();
        // Rotate all meshes we've added to scene
        for (var m in this.cubes) {
            var mesh = this.cubes[m];
            mesh.rotation.x += 0.005;
            mesh.rotation.y += 0.01;
        }
        this.renderer.render(this, this.camera);
    };
    return DefaultScene;
})(THREE.Scene);
exports.DefaultScene = DefaultScene;
//# sourceMappingURL=scene.js.map