!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.CodexMusic=e():t.CodexMusic=e()}(window,(function(){return function(t){var e={};function s(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,s),i.l=!0,i.exports}return s.m=t,s.c=e,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(o,i,function(e){return t[e]}.bind(null,i));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";var o;s.r(e),function(t){t.SINE_WAVE_INSTRUMENT="SineWave",t.HORN_INSTRUMENT="Horn"}(o||(o={}));var i=new class{getAudioContext(){return this.isAudioContextDefined()||this.createAudioContext(),this.audioContext}createAudioContext(){const t=window.AudioContext||window.webkitAudioContext;this.audioContext=new t}isAudioContextDefined(){return!!this.audioContext}createGain(){return this.isAudioContextDefined()||this.createAudioContext(),this.audioContext.createGain()}createOscillator(){return this.isAudioContextDefined()||this.createAudioContext(),this.audioContext.createOscillator()}createPeriodicWave(t,e,s){return this.isAudioContextDefined()||this.createAudioContext(),this.audioContext.createPeriodicWave(t,e,s)}};class n{constructor(t,e,s){this.instrument=t,this.melody=e,this.gainNode=i.createGain(),this.gainNode.gain.value=s,this.gainNode.connect(i.getAudioContext().destination)}set changeVolume(t){this.gainNode.gain.value=t}playMelody(){let t=i.getAudioContext().currentTime;this.melody.noteList.forEach(e=>{this.instrument.playNote(e,t),t+=e.length/1e3})}play(){this.instrument.outputNode.connect(this.gainNode),this.playMelody(),this.interval=setInterval(()=>this.playMelody(),this.melody.duration)}stop(){this.instrument.outputNode.disconnect(),this.instrument.stop(),clearInterval(this.interval)}}class r{constructor(t){this.waveOptions={cosineTerms:new Float32Array([0,1]),sineTerms:new Float32Array([0,0]),disableNormalization:!1},this.isStarted=!1,this.isInstrumentConfigured=!1,this.name=t,this.oscillatorNode=i.createOscillator()}get outputNode(){return this.filter?this.filter.filterNode:this.oscillatorNode}playNote(t,e){this.isStarted||this.start(),this.oscillatorNode.frequency.setValueAtTime(t.frequency,e)}setWave(t){this.waveOptions=Object.assign(Object.assign({},this.waveOptions),t);const e=i.createPeriodicWave(this.waveOptions.cosineTerms,this.waveOptions.sineTerms,{disableNormalization:this.waveOptions.disableNormalization});this.oscillatorNode.setPeriodicWave(e)}stop(t=i.getAudioContext().currentTime){this.oscillatorNode.frequency.cancelScheduledValues(t),this.isStarted=!1}start(){const t=i.getAudioContext().currentTime;this.isInstrumentConfigured||(this.oscillatorNode.start(t),this.isInstrumentConfigured=!0),this.isStarted=!0}}class a{constructor(){this.node=i.getAudioContext().createBiquadFilter()}get filterNode(){return this.node}connect(t){t.connect(this.node)}}class c extends a{constructor(){super(),this.node.type="bandpass",this.node.frequency.value=440,this.node.Q.value=1e3}}class u extends r{constructor(){super(o.SINE_WAVE_INSTRUMENT);const t={sineTerms:new Float32Array([0,0]),cosineTerms:new Float32Array([0,1])};this.setWave(t),this.setFilterLowPass()}setFilterLowPass(){this.filter=new c,this.oscillatorNode.connect(this.filter.filterNode)}}class l extends r{constructor(){super(o.HORN_INSTRUMENT);const t={sineTerms:new Float32Array(12),cosineTerms:new Float32Array([0,.4,.4,1,1,1,.3,.7,.6,.5,.9,.8])};this.setWave(t)}}var d,h=function(t){return/^[A-G][0-8](x\d+)?$/.test(t)||/^[A-G][0-8]#(x\d+)?$/.test(t)||/^.(x\d+)?$/.test(t)||!1};class p extends Error{constructor(t){super(t),this.name="ValidationError"}}!function(t){t[t.C=1]="C",t[t.D=3]="D",t[t.E=5]="E",t[t.F=6]="F",t[t.G=8]="G",t[t.A=10]="A",t[t.B=12]="B"}(d||(d={}));class f{constructor(t){this.defaultLength=300,this.notes=t,this.noteList=this.parseNoteList(t)}get duration(){return this.noteList.reduce((t,e)=>t+e.length,0)}setDefaultLength(t){this.defaultLength=t,this.noteList=this.parseNoteList(this.notes)}parseNoteList(t){const e=[];return t.toUpperCase().split(" ").map(t=>{let s;if(!h(t))throw new p(`Parse error note '${t}'`);const[o,i]=t.split("x");return"."===o?(s={note:"pause",frequency:0,length:(+i||1)*this.defaultLength},e.push(s),t):(s={note:o,frequency:f.getFrequency(o),length:(+i||1)*this.defaultLength},e.push(s),t)}),e}static getFrequency(t){const e=d[t[0]],s=+t[1]+1;return"#"===t[2]?440*Math.pow(2,(e+12*s+1-70)/12):440*Math.pow(2,(e+12*s-70)/12)}}var y=new class{constructor(){this.tracks=[]}addTrack({melodyNotes:t,interval:e,instrumentName:s,volume:i}){let r;switch(s){case o.SINE_WAVE_INSTRUMENT:r=new u;break;case o.HORN_INSTRUMENT:r=new l}const a=new f(t),c=new n(r,a,i);return this.tracks.push(c),this.tracks.indexOf(c)}playAll(){this.tracks.map(t=>{t.play()})}playTrackById(t){this.tracks[t].play()}stopAll(){this.tracks.map(t=>{t.stop()})}stopTrackById(t){this.tracks[t].stop()}changeVolumeById(t,e){this.tracks[t].changeVolume=e}};e.default=class{addTrack({melody:t,interval:e,instrument:s,volume:o}){return y.addTrack({melodyNotes:t,interval:e,instrumentName:s,volume:o})}play(t){t?y.playTrackById(t):y.playAll()}stop(t){t?y.stopTrackById(t):y.stopAll()}changeTrackVolume(t,e){y.changeVolumeById(t,e)}}}]).default}));