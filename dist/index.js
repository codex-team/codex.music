!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.CodexMusic=e():t.CodexMusic=e()}(window,(function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);class s{}var n,o=new class{getAudioContext(){return this.isAudioContextDefined()||this.createAudioContext(),this.audioContext}createAudioContext(){const t=window.AudioContext||window.webkitAudioContext;this.audioContext=new t}isAudioContextDefined(){return!!this.audioContext}createGain(){return this.isAudioContextDefined()||this.createAudioContext(),this.audioContext.createGain()}createOscillator(){return this.isAudioContextDefined()||this.createAudioContext(),this.audioContext.createOscillator()}createPeriodicWave(t,e,i){return this.isAudioContextDefined()||this.createAudioContext(),this.audioContext.createPeriodicWave(t,e,i)}};class r{constructor(t,e){this.isConfigured=!1,this.instrument=t,this.melody=e}configure(){this.instrument.lastNode.connect(o.getAudioContext().destination),this.isConfigured=!0}play(){this.isConfigured||this.configure();let t=o.getAudioContext().currentTime;this.melody.noteList.forEach(e=>{this.instrument.playNote(e,t),t+=e.length/1e3}),this.instrument.stop(t)}stop(){this.instrument.stop()}}class u{constructor(t){this.waveOptions={cosineTerms:new Float32Array([0,1]),sineTerms:new Float32Array([0,0]),disableNormalization:!1},this.isStarted=!1,this.isInstrumentConfigured=!1,this.name=t,this.instrumentSourceNode=o.createOscillator(),this.volumeNode=o.createGain(),this.instrumentSourceNode.connect(this.volumeNode)}get lastNode(){return this.filter?this.filter.filterNode:this.volumeNode}playNote(t,e){this.isStarted||this.start(),this.instrumentSourceNode.frequency.setValueAtTime(t.frequency,e)}setWave(t){this.waveOptions=Object.assign(Object.assign({},this.waveOptions),t);const e=o.createPeriodicWave(this.waveOptions.cosineTerms,this.waveOptions.sineTerms,{disableNormalization:this.waveOptions.disableNormalization});this.instrumentSourceNode.setPeriodicWave(e)}stop(t=o.getAudioContext().currentTime){this.volumeNode.gain.cancelScheduledValues(t),this.volumeNode.gain.setValueAtTime(0,t),this.instrumentSourceNode.frequency.cancelScheduledValues(t),this.filter&&this.filter.filterNode.frequency.setValueAtTime(0,t),this.isStarted=!1}start(){const t=o.getAudioContext().currentTime;this.volumeNode.gain.setValueAtTime(1,t),this.isInstrumentConfigured||(this.instrumentSourceNode.start(t),this.isInstrumentConfigured=!0),this.filter&&(this.filter.filterNode.frequency.value=1e3),this.isStarted=!0}}!function(t){t.SINE_WAVE_INSTRUMENT="Sine wave instrument",t.HORN_INSTRUMENT="Horn instrument"}(n||(n={}));class a{constructor(){this.node=o.getAudioContext().createBiquadFilter()}get filterNode(){return this.node}connect(t){t.connect(this.node)}}class c extends a{constructor(){super(),this.node.type="lowpass",this.node.frequency.value=1e3,this.node.Q.value=1e3}}class d extends u{constructor(){super(n.SINE_WAVE_INSTRUMENT);const t={sineTerms:new Float32Array([0,0]),cosineTerms:new Float32Array([0,1])};this.setWave(t),this.setFilterLowPass()}setFilterLowPass(){this.filter=new c,this.volumeNode.connect(this.filter.filterNode),this.filter.filterNode.connect(o.getAudioContext().destination)}}class l extends u{constructor(){super(n.HORN_INSTRUMENT);const t={sineTerms:new Float32Array(12),cosineTerms:new Float32Array([0,.4,.4,1,1,1,.3,.7,.6,.5,.9,.8])};this.setWave(t)}}var h,f=function(t){return/^[A-G][0-8](x\d+)?$/.test(t)||/^[A-G][0-8]#(x\d+)?$/.test(t)||/^.(x\d+)?$/.test(t)||!1};class p extends Error{constructor(t){super(t),this.name="ValidationError"}}!function(t){t[t.C=1]="C",t[t.D=3]="D",t[t.E=5]="E",t[t.F=6]="F",t[t.G=8]="G",t[t.A=10]="A",t[t.B=12]="B"}(h||(h={}));class m{constructor(t){this.defaultLength=300,this.notes=t,this.noteList=this.parseNoteList(t)}setDefaultLength(t){this.defaultLength=t,this.noteList=this.parseNoteList(this.notes)}parseNoteList(t){const e=[];return t.toUpperCase().split(" ").map(t=>{let i;if(!f(t))throw new p(`Parse error note '${t}'`);const[s,n]=t.split("x");return"."===s?(i={note:"pause",frequency:0,length:(+n||1)*this.defaultLength},e.push(i),t):(i={note:s,frequency:m.getFrequency(s),length:(+n||1)*this.defaultLength},e.push(i),t)}),e}static getFrequency(t){const e=h[t[0]],i=+t[1]+1;return"#"===t[2]?440*Math.pow(2,(e+12*i+1-70)/12):440*Math.pow(2,(e+12*i-70)/12)}}e.default=class{constructor(t="A4 A5 D3 E4",e=n.SINE_WAVE_INSTRUMENT){this.tracksManager=new s;const i=new m(t);switch(e){case n.SINE_WAVE_INSTRUMENT:this.track=new r(new d,i);break;case n.HORN_INSTRUMENT:this.track=new r(new l,i)}}destroy(){delete this.tracksManager}play(){this.track&&this.track.play()}stop(){this.track&&this.track.stop()}}}]).default}));