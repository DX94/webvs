/**
 * Copyright (c) 2013-2015 Azeem Arshad
 * See the file license.txt for copying permission.
 */

(function(Webvs) {

function Invert(gl, main, parent, opts) {
    Invert.super.constructor.call(this, gl, main, parent, opts);
}

Webvs.registerComponent(Invert, {
    name: "Invert",
    menu: "Trans"
});

Webvs.defineClass(Invert, Webvs.Component, {
    defaultOptions: {},
    init: function() {
        this.program = new InvertProgram(this.gl);
    },

    draw: function() {
        this.program.run(this.parent.fm, null);
    },

    destroy: function() {
        Invert.super.destroy.call(this);
        this.program.destroy();
    }
});

function InvertProgram(gl) {
    InvertProgram.super.constructor.call(this, gl, {
        swapFrame: true,
        fragmentShader: [
            "void main() {",
            "   setFragColor(vec4(1,1,1,1)-getSrcColor());",
            "}"
        ]
    });
}
Webvs.InvertProgram = Webvs.defineClass(InvertProgram, Webvs.QuadBoxProgram);

})(Webvs);
