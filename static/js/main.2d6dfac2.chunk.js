(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){e.exports=n.p+"static/media/chronometer.7acfa456.png"},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),c=n.n(i),o=(n(18),n(2)),l=n(3),u=n(5),s=n(4),m=n(6),h=n(1),b=(n(20),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={numero:0},n.iniciar=n.iniciar.bind(Object(h.a)(Object(h.a)(n))),n.zerar=n.zerar.bind(Object(h.a)(Object(h.a)(n))),n.parar=n.parar.bind(Object(h.a)(Object(h.a)(n))),n.timer=null,n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"ChronoBox"},r.a.createElement("img",{id:"ChronoImage",src:n(22),alt:"Chronometer"}),r.a.createElement("span",{id:"ChronoTime"},this.state.numero.toFixed(2)),r.a.createElement("div",{className:"buttonBox"},r.a.createElement("a",{className:"buttons",onClick:this.iniciar}," Iniciar"),r.a.createElement("a",{className:"buttons",onClick:this.parar}," Parar"),r.a.createElement("a",{className:"buttons",onClick:this.zerar}," Zerar")))}},{key:"iniciar",value:function(){var e=this;null==this.timer?this.timer=setInterval(function(){e.setState(function(e){return{numero:e.numero+.01}})},10):(clearInterval(this.timer),this.timer=null)}},{key:"zerar",value:function(){this.setState({numero:0}),clearInterval(this.timer),this.timer=null}},{key:"parar",value:function(){clearInterval(this.timer),this.timer=null}}]),t}(a.Component)),d=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null))}}]),t}(a.Component);c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)))},9:function(e,t,n){e.exports=n(23)}},[[9,2,1]]]);
//# sourceMappingURL=main.2d6dfac2.chunk.js.map