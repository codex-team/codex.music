!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.CodexMusic=e():t.CodexMusic=e()}(window,(function(){return function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);class i{}var n,o=new class{getAudioContext(){return this.isAudioContextDefined()||this.createAudioContext(),this.audioContext}createAudioContext(){const t=window.AudioContext||window.webkitAudioContext;this.audioContext=new t}isAudioContextDefined(){return!!this.audioContext}createGain(){return this.isAudioContextDefined()||this.createAudioContext(),this.audioContext.createGain()}createOscillator(){return this.isAudioContextDefined()||this.createAudioContext(),this.audioContext.createOscillator()}createPeriodicWave(t,e,s){return this.isAudioContextDefined()||this.createAudioContext(),this.audioContext.createPeriodicWave(t,e,s)}};class r{constructor(t,e){this.isConfigured=!1,this.instrument=t,this.melody=e}configure(){this.instrument.outputNode.connect(o.getAudioContext().destination),this.isConfigured=!0}play(){this.isConfigured||this.configure();let t=o.getAudioContext().currentTime;this.melody.noteList.forEach(e=>{this.instrument.playNote(e,t),t+=e.length/1e3}),this.instrument.stop(t)}stop(){this.instrument.stop()}}class a{constructor(t){this.waveOptions={cosineTerms:new Float32Array([0,1]),sineTerms:new Float32Array([0,0]),disableNormalization:!1},this.isStarted=!1,this.isInstrumentConfigured=!1,this.name=t,this.oscillatorNode=o.createOscillator()}get outputNode(){return this.filter?this.filter.filterNode:this.oscillatorNode}playNote(t,e){this.isStarted||this.start(),this.oscillatorNode.frequency.setValueAtTime(t.frequency,e)}setWave(t){this.waveOptions=Object.assign(Object.assign({},this.waveOptions),t);const e=o.createPeriodicWave(this.waveOptions.cosineTerms,this.waveOptions.sineTerms,{disableNormalization:this.waveOptions.disableNormalization});this.oscillatorNode.setPeriodicWave(e)}stop(t=o.getAudioContext().currentTime){this.oscillatorNode.frequency.cancelScheduledValues(t),this.isStarted=!1}start(){const t=o.getAudioContext().currentTime;this.isInstrumentConfigured||(this.oscillatorNode.start(t),this.isInstrumentConfigured=!0),this.isStarted=!0}}!function(t){t.SINE_WAVE_INSTRUMENT="Sine wave instrument",t.HORN_INSTRUMENT="Horn instrument"}(n||(n={}));class u{constructor(){this.node=o.getAudioContext().createBiquadFilter()}get filterNode(){return this.node}connect(t){t.connect(this.node)}}class c extends u{constructor(){super(),this.node.type="bandpass",this.node.frequency.value=440,this.node.Q.value=1e3}}class d extends a{constructor(){super(n.SINE_WAVE_INSTRUMENT);const t={sineTerms:new Float32Array([0,0]),cosineTerms:new Float32Array([0,1])};this.setWave(t),this.setFilterLowPass()}setFilterLowPass(){this.filter=new c,this.oscillatorNode.connect(this.filter.filterNode)}}class l extends a{constructor(){super(n.HORN_INSTRUMENT);const t={sineTerms:new Float32Array(12),cosineTerms:new Float32Array([0,.4,.4,1,1,1,.3,.7,.6,.5,.9,.8])};this.setWave(t)}}var h,f=function(t){return/^[A-G][0-8](x\d+)?$/.test(t)||/^[A-G][0-8]#(x\d+)?$/.test(t)||/^.(x\d+)?$/.test(t)||!1};class p extends Error{constructor(t){super(t),this.name="ValidationError"}}!function(t){t[t.C=1]="C",t[t.D=3]="D",t[t.E=5]="E",t[t.F=6]="F",t[t.G=8]="G",t[t.A=10]="A",t[t.B=12]="B"}(h||(h={}));class x{constructor(t){this.defaultLength=300,this.notes=t,this.noteList=this.parseNoteList(t)}setDefaultLength(t){this.defaultLength=t,this.noteList=this.parseNoteList(this.notes)}parseNoteList(t){const e=[];return t.toUpperCase().split(" ").map(t=>{let s;if(!f(t))throw new p(`Parse error note '${t}'`);const[i,n]=t.split("x");return"."===i?(s={note:"pause",frequency:0,length:(+n||1)*this.defaultLength},e.push(s),t):(s={note:i,frequency:x.getFrequency(i),length:(+n||1)*this.defaultLength},e.push(s),t)}),e}static getFrequency(t){const e=h[t[0]],s=+t[1]+1;return"#"===t[2]?440*Math.pow(2,(e+12*s+1-70)/12):440*Math.pow(2,(e+12*s-70)/12)}}e.default=class{constructor(t="A4 A5 D3 E4",e=n.SINE_WAVE_INSTRUMENT){this.tracksManager=new i;const s=new x(t);switch(e){case n.SINE_WAVE_INSTRUMENT:this.track=new r(new d,s);break;case n.HORN_INSTRUMENT:this.track=new r(new l,s)}}destroy(){delete this.tracksManager}play(){this.track&&this.track.play()}stop(){this.track&&this.track.stop()}}}]).default}));