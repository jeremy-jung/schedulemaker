(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={container:"Homepage_container__cwfji",containerInput:"Homepage_containerInput__2lEJ8",courseInput:"Homepage_courseInput__1Wo5U",courseSubmit:"Homepage_courseSubmit__3ylg9"}},,,,function(e,t,n){e.exports={container:"CoursesSelectedList_container__1Tmkz"}},function(e,t,n){e.exports={course:"CourseSelected_course__3NBu-"}},function(e,t,n){e.exports={container:"OptionsMainList_container__1lS8U"}},function(e,t,n){e.exports={button:"OptionMainButton_button__3s6JW"}},function(e,t,n){e.exports=n(23)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(9),c=n.n(u),o=n(1),s=n(2),i=n(4),l=n(3),m=n(6),d=n.n(m),p=n(8),h=n(5),f=(n(21),function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).course_name="",a}return Object(s.a)(n,[{key:"setCourseName",value:function(e){this.course_name=e}},{key:"render",value:function(){return r.a.createElement("div",{id:"course_box"},r.a.createElement("center",null,r.a.createElement("div",{id:"course_name"},r.a.createElement("div",null,this.props.name))))}}]),n}(r.a.Component)),v=(n(22),r.a.Component,n(11)),b=n.n(v),C=n(12),O=n.n(C),j=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("div",{className:O.a.course},this.props.courseID)}}]),n}(r.a.Component),E=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:b.a.container,id:"coursesSelectedList"},r.a.createElement("h1",null,"Your selected courses"),r.a.createElement("div",null,this.props.selectedCourses.map((function(e){return r.a.createElement(j,{courseID:e})}))),r.a.createElement("button",{onClick:this.props.handleGenerate},"Generate"))}}]),n}(r.a.Component),I=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),a=t.call(this,e),console.log("render"),a.state={recommendedCourseIDs:null},a}return Object(s.a)(n,[{key:"recommendSearch",value:function(e,t){var n=[];if(void 0!=t||null!=t)if(void 0!=t[0]){var a=t.length,r=e[t[0]];if(void 0!=r){for(var u=0;u<r.length;u++){for(var c=r[u],o="",s=0;s<a;s++)o+=c[s];if(o==t&&(n.push(r[u]),n.length>20))break}1==n.length&&(n=[])}}else n=[];else n=[];return n}},{key:"render",value:function(){var e=this.props.currentInput,t=this.props.listCourseIDs;console.log("rendeing");var n=this.recommendSearch(t,e);return console.log(n),r.a.createElement("datalist",{id:"recommendedCourseIDs"},n.map((function(e){return r.a.createElement("option",{key:e,value:e})})))}}]),n}(r.a.Component),k=n(13),y=n.n(k),_=n(14),g=n.n(_),D=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={option:"default"},a}return Object(s.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("button",{className:g.a.button},this.state.option)}}]),n}(r.a.Component),S=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("div",{className:y.a.container},r.a.createElement(D,null),r.a.createElement(D,null),r.a.createElement(D,null))}}]),n}(r.a.Component),N=n(7),x=n.n(N),w=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={listCourseIDs:null,currentInput:null,recommendedCourseIDs:null,selectedCourses:[]},a.handleAdd=a.handleAdd.bind(Object(h.a)(a)),a.recommendSearch=a.recommendSearch.bind(Object(h.a)(a)),a}return Object(s.a)(n,[{key:"checkCourseID",value:function(e){if(""!=e){var t=e[0],n=this.state.listCourseIDs[t];if(void 0!=n){var a=!1;for(var r in n)n[r]==e&&(a=!0);return a}return!1}return!1}},{key:"handleAdd",value:function(e){e.preventDefault();var t=document.getElementById("input"),n=t.value.toUpperCase();if(this.checkCourseID(n)){var a=this.state.selectedCourses.concat(n);this.setState({selectedCourses:a})}t.value=""}},{key:"handleGenerate",value:function(){this.state.selectedCourses;console.log("handling generate")}},{key:"componentDidMount",value:function(){this.getListCourseIDs()}},{key:"getListCourseIDs",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://tufts-schedule.herokuapp.com/api/courses/list",fetch("https://tufts-schedule.herokuapp.com/api/courses/list").then((function(e){return e.json()})).then((function(e){"200"===e.status&&t.mapCourseIDs(e.list_courseids)}),(function(e){console.log("error",e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"mapCourseIDs",value:function(e){var t={};for(var n in e){var a=e[n][0];void 0==t[a]&&(t[a]=[]),t[a].push(e[n])}this.setState({listCourseIDs:t})}},{key:"recommendSearch",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("input"),n=t.value.toUpperCase(),this.setState((function(e){return{currentInput:n}}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(){var e=document.getElementById("input").value.toUpperCase();e.length;this.setState((function(t){return{currentInput:e}}))}},{key:"render",value:function(){return null==this.state.listCourseIDs?r.a.createElement("div",{className:x.a.container},"Loading..."):r.a.createElement("div",{className:x.a.container},r.a.createElement(E,{handleGenerate:this.handleGenerate.bind(this),selectedCourses:this.state.selectedCourses},r.a.createElement("input",{type:"submit"})),r.a.createElement("div",{className:x.a.containerInput},r.a.createElement("h1",null,"Choose a course"),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleAdd},r.a.createElement("div",null,r.a.createElement("input",{onChange:this.recommendSearch,list:"recommendedCourseIDs",id:"input",className:x.a.courseInput,type:"text",autoComplete:"off",placeholder:"COMP-0015"}),r.a.createElement(I,{listCourseIDs:this.state.listCourseIDs,currentInput:this.state.currentInput})),r.a.createElement("div",null,r.a.createElement("input",{className:x.a.courseSubmit,type:"submit",value:"Add"}))))),r.a.createElement(S,null))}}]),n}(r.a.Component),B=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(w,null)}}]),n}(r.a.Component);c.a.render(r.a.createElement(B,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.a77de99d.chunk.js.map