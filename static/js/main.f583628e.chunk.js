(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);a(11);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),o=a(9),u=a(1),i=a(2),m=a(4),h=a(3),s=a(5),b=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Job"),r.a.createElement("th",null,"Remove")))},f=function(e){var t=e.characterData.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.job),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.removeCharacter(a)}},"Delete")))}));return r.a.createElement("tbody",null,t)},E=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.characterData,a=e.removeCharacter;return r.a.createElement("table",null,r.a.createElement(b,null),r.a.createElement(f,{characterData:t,removeCharacter:a}))}}]),t}(n.Component),p=a(8),v=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(p.a)({},n,r))},a.onFormSubmit=function(e){e.preventDefault(),a.props.handleSubmit(a.state),a.setState(a.initialState)},a.initialState={name:"",job:""},a.state=a.initialState,a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.job;return r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("label",{for:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",id:"name",value:t,onChange:this.handleChange}),r.a.createElement("label",{for:"job"},"Job"),r.a.createElement("input",{type:"text",name:"job",id:"job",value:a,onChange:this.handleChange}),r.a.createElement("button",{type:"submit"},"Submit"))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={characters:[]},a.removeCharacter=function(e){var t=a.state.characters;a.setState({characters:t.filter((function(t,a){return a!==e}))})},a.handleSubmit=function(e){a.setState({characters:[].concat(Object(o.a)(a.state.characters),[e])})},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.characters;return r.a.createElement("div",{className:"container"},r.a.createElement(E,{characterData:e,removeCharacter:this.removeCharacter}),r.a.createElement(v,{handleSubmit:this.handleSubmit}),r.a.createElement("h2",null,"Simple Job  Allocator"))}}]),t}(n.Component);a(16);l.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.f583628e.chunk.js.map