var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var THREE = require("three");
var DefaultLightingRig = (function () {
    function DefaultLightingRig(scene) {
        for (var i in this.lights) {
            scene.add(this.lights[i]);
        }
    }
    return DefaultLightingRig;
})();
exports.DefaultLightingRig = DefaultLightingRig;
var SingleSpotlight = (function (_super) {
    __extends(SingleSpotlight, _super);
    function SingleSpotlight(scene) {
        var light = new THREE.DirectionalLight(0xff3bff);
        light.position.set(0, 0, 300);
        this.lights.push(light);
        _super.call(this, scene);
    }
    return SingleSpotlight;
})(DefaultLightingRig);
exports.SingleSpotlight = SingleSpotlight;
//# sourceMappingURL=light.js.map