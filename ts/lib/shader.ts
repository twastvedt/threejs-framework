// Extension of the 'text' plugin specially for loading shaders
// Features
// - Supports #include statements to combine shaders
// - Can use the define function to change the value of #define statments in the shader
// - Expects shaders to be in `shaders` directory, which can be configured in the require.js config

export default function( name, req, onload, config ) {
	if ( config.isBuild ) {
	  onload();
	  return;
	}

	class Shader {

		constructor(public value: string) {

		};

		// Replace the value of a #define within the shader
		define(define, value) {
			var regexp = new RegExp("#define " + define + " .*", "g");
			var newDefine = "#define " + define + (value ? " " + value : "");

			if (this.value.match(regexp)) {
				// #define already exists, update its value
				this.value = this.value.replace(regexp, newDefine);
			} else {
				// New #define, prepend to start of file
				this.value = newDefine + "\n" + this.value;
			}
		}
	}

	req( ["text!shaders/" + name], function ( shaderContents:string ) {
		var shader = new Shader( shaderContents );
		var matches:string[] = [];
		shaderContents.replace(/#include (.*)/g, function (match, includeFile) {
			matches.push(includeFile);
			return "";
		});

		if ( matches.length === 0 ) {
			// No includes, just return straight away
			onload( shader );
		} else {
			// Load included shaders and replace them in the code
			var loaded = 0;
			for ( var m = 0; m < matches.length; m++ ) {
				( function ( includeFile ) {
					req(["shader!" + includeFile], function ( includeShader ) {
						var regexp = new RegExp("#include " + includeFile, "g");
						shader.value = shader.value.replace( regexp, includeShader.value );
						loaded++;

						if ( loaded === matches.length ) {
							// All shaders have been loaded, return result
							onload( shader );
						}
					});
				})( matches[m] );
			}
		}
	});
}
