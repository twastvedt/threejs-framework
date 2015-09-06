var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var THREE = require("three");
var container_1 = require("container");
var WebGLRenderer = (function (_super) {
    __extends(WebGLRenderer, _super);
    function WebGLRenderer(params) {
        _super.call(this, params);
        container_1.container.innerHTML = "";
        this.sortObjects = false;
        this.autoClear = false;
        container_1.container.appendChild(this.domElement);
        window.addEventListener('resize', this.updateSize, false);
    }
    WebGLRenderer.prototype.updateSize = function () {
        this.setSize(container_1.container.offsetWidth, container_1.container.offsetHeight);
    };
    ;
    return WebGLRenderer;
})(THREE.WebGLRenderer);
exports.WebGLRenderer = WebGLRenderer;
//# sourceMappingURL=renderer.js.map