/// <reference path="../../typings/tsd.d.ts" />

import THREE = require('three');

var OrbitControls = require("three-orbit-controls")(THREE);

THREE.OrbitControls = OrbitControls;

export default THREE;