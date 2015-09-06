var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var THREE = require("three");
var container_1 = require("container");
var PerspectiveCamera = (function (_super) {
    __extends(PerspectiveCamera, _super);
    function PerspectiveCamera(fov, aspect, near, far) {
        _super.call(this, fov, aspect, near, far);
        window.addEventListener('resize', this.updateSize, false);
        this.updateSize();
    }
    PerspectiveCamera.prototype.updateSize = function () {
        this.aspect = container_1.container.offsetWidth / container_1.container.offsetHeight;
        this.updateProjectionMatrix();
    };
    return PerspectiveCamera;
})(THREE.PerspectiveCamera);
exports.PerspectiveCamera = PerspectiveCamera;
//# sourceMappingURL=camera.js.map