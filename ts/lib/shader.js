// Extension of the 'text' plugin specially for loading shaders
// Features
// - Supports #include statements to combine shaders
// - Can use the define function to change the value of #define statments in the shader
// - Expects shaders to be in `shaders` directory, which can be configured in the require.js config
function default_1(name, req, onload, config) {
    if (config.isBuild) {
        onload();
        return;
    }
    var Shader = (function () {
        function Shader(value) {
            this.value = value;
        }
        ;
        Shader.prototype.define = function (define, value) {
            var regexp = new RegExp("#define " + define + " .*", "g");
            var newDefine = "#define " + define + (value ? " " + value : "");
            if (this.value.match(regexp)) {
                this.value = this.value.replace(regexp, newDefine);
            }
            else {
                this.value = newDefine + "\n" + this.value;
            }
        };
        return Shader;
    })();
    req(["text!shaders/" + name], function (shaderContents) {
        var shader = new Shader(shaderContents);
        var matches = [];
        shaderContents.replace(/#include (.*)/g, function (match, includeFile) {
            matches.push(includeFile);
            return "";
        });
        if (matches.length === 0) {
            onload(shader);
        }
        else {
            var loaded = 0;
            for (var m = 0; m < matches.length; m++) {
                (function (includeFile) {
                    req(["shader!" + includeFile], function (includeShader) {
                        var regexp = new RegExp("#include " + includeFile, "g");
                        shader.value = shader.value.replace(regexp, includeShader.value);
                        loaded++;
                        if (loaded === matches.length) {
                            onload(shader);
                        }
                    });
                })(matches[m]);
            }
        }
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=shader.js.map