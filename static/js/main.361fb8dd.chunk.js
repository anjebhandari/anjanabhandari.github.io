(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(6),o=a.n(c),r=(a(12),a(1)),s=a(2),i=a(4),m=a(3),u=(a(13),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){fetch("./data/aboutme.json",{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log("about me ",e),n.setState({aboutMe:e})}))},n.state={aboutMe:[]},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.aboutMe.map((function(e){return l.a.createElement("div",{className:"aboutme-col"},l.a.createElement("div",{className:"aboutme-main"},l.a.createElement("div",{className:e.className},e.title),l.a.createElement("div",{className:"aboutme-me"}," ",e.main," ")))}));return l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"row m-0 aboutme-row"},e))}}]),a}(n.Component)),h=(a(14),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){fetch("./data/skillSet.json",{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log("Skillsets",e),n.setState({skills:e})}))},n.state={skills:[]},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.skills.map((function(e){return l.a.createElement("div",{className:"col-3 skill-col"},l.a.createElement("span",{className:"capatilized skill-title"}," ",e.name," "),l.a.createElement("ul",{className:"unstyled-list skill-list"},l.a.createElement("li",null,e.what),l.a.createElement("li",null,e.why),l.a.createElement("li",null,e.when)))}));return l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"row"},l.a.createElement("p",null,"Skillsets I've Gathered Over the Years")),l.a.createElement("div",{className:"row skill-row"},e))}}]),a}(n.Component)),d=(a(15),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"section"},l.a.createElement("div",{class:"row home-row"},l.a.createElement("div",null,l.a.createElement("span",{className:"hello "},"Hello"),l.a.createElement("br",null),l.a.createElement("span",{className:"world"},"World"),l.a.createElement("span",{className:"full-stop"},"."))))}}]),a}(n.Component)),f=(a(16),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onClick=function(e){e.preventDefault(),"hide"===n.state.show?n.setState({show:"show"}):n.setState({show:"hide"})},n.onChange=function(e){console.log("e.target.name",e.target.name,"e.target.value",e.target.value)},n.state={show:"hide",fullName:null},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"section footer"},l.a.createElement("div",{className:"row hireme-row"},l.a.createElement("div",{className:"collabrate",onClick:this.onClick},"Let's collabrate Together")),l.a.createElement("div",{className:"row followme-row"},l.a.createElement("ul",{className:"unstyled-list in-line"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/anjana-bhandari-496293129/",target:"_blank"},l.a.createElement("i",{class:"fa fa-linkedin"}))))))}}]),a}(n.Component)),E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("main",null,l.a.createElement("section",{id:"home"},l.a.createElement(d,null)),l.a.createElement("section",{id:"about me"},l.a.createElement(u,null)),l.a.createElement("section",{id:"languages i know"},l.a.createElement(h,null)),l.a.createElement("section",{id:"footer"},l.a.createElement(f,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.361fb8dd.chunk.js.map