(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);a(73);var n=a(0),c=a.n(n),i=a(68),l=a.n(i),r=(a(128),a(7)),o=a(8),s=a(10),m=a(9),u=a(11),d=function(e){return c.a.createElement("section",{id:e.id,className:e.fullscreen?"fullscreen":""},c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,e.title),e.children))},h=(a(129),function(e){return c.a.createElement("div",{className:"fullscreen",id:"home"},c.a.createElement("div",{id:"home-content","data-aos":"fade-up-right"},c.a.createElement("h1",{id:"main-title"},"Hi, I'm a ",c.a.createElement("br",null),"Software Engineer. ",c.a.createElement("br",null)),c.a.createElement("p",null,"I build high-quality, scalable and functional applications for mobile and the web.")),c.a.createElement("h3",{id:"ps-content"},"P.S. I also design for a hobby."))}),p=(a(130),a(69)),g=a.n(p),f=function(e){return c.a.createElement("div",{id:"profile-container"},c.a.createElement("div",{className:"profile-container-inner"},c.a.createElement("div",{id:"profile-image-container","data-aos":"zoom-out"},c.a.createElement("img",{id:"profile-image",src:g.a,alt:"profile"}))),c.a.createElement("div",{className:"profile-container-inner"},c.a.createElement("p",null,"Hey there! I'm Konstantin, a Software Engineer based in Los Angeles. I develop functional websites with beautiful UIs and build stable and modern APIs."),c.a.createElement("p",null,"I will graduate from the Master's in Computer Science program at CSULB at the end of 2019."),c.a.createElement("p",{className:"black"},"Technologies I work with:"),c.a.createElement("div",{className:"grid"},c.a.createElement("div",{className:"cell"},"React"),c.a.createElement("div",{className:"cell"},".NET"),c.a.createElement("div",{className:"cell"},"Illustrator"),c.a.createElement("div",{className:"cell"},"Angular"),c.a.createElement("div",{className:"cell"},"Java"),c.a.createElement("div",{className:"cell"},"Adobe XD"),c.a.createElement("div",{className:"cell"},"Vue"),c.a.createElement("div",{className:"cell"},"SQL"),c.a.createElement("div",{className:"cell"},"InDesign"),c.a.createElement("div",{className:"cell"},"Node.js"),c.a.createElement("div",{className:"cell"},"MongoDB"),c.a.createElement("div",{className:"cell"},"Android"))))},b=a(5),v=a(20),E=a(16),k=(a(136),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).goToGithub=function(e){window.open(e,"_blank")},a.getGithubRepos=function(){fetch(a.state.gitPath).then(function(e){return e.json()}).then(function(e){return e.filter(function(e){return a.state.pinnedRepoIds.includes(e.id)})}).then(function(e){return a.setState({repos:e})})},a.state={gitPath:"https://api.github.com/users/zlatkovtv/repos",repos:[],pinnedRepoIds:[182022520,139982879,112330807,168885877,96216276,182303964]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.repos.map(function(t,a){return c.a.createElement("div",{className:"repo",key:a,"data-aos":"fade-right"},c.a.createElement("div",null,c.a.createElement("header",{className:"repo-header"},c.a.createElement(b.a,{className:"folder-icon",icon:v.b}),c.a.createElement(b.a,{onClick:function(){return e.goToGithub(t.html_url)},className:"github-link",icon:E.a})),c.a.createElement("h3",null,t.name),c.a.createElement("p",null,t.description)))});return c.a.createElement("div",{id:"repo-container",className:"row","data-aos":"zoom-out"},t)}},{key:"componentDidMount",value:function(){this.getGithubRepos()}}]),t}(c.a.Component)),w=(a(137),function(){var e=y(),t=e.height;if(e.width<=600)return 0;var a=1-window.pageYOffset/t;return a<0?0:a}),y=function(){var e=window;return{height:e.innerHeight,width:e.innerWidth}},N=function(e){window.open(e,"_blank")},j=function(e){return c.a.createElement("div",{className:"center"},c.a.createElement("p",{id:"contact-text"},"I will be applying for OPT after I graduate in December 2019. I am looking for a wonderful company, who are willing to sponsor me after the 3-year duration of the program."),c.a.createElement("div",null,c.a.createElement("span",{className:"contact-button",onClick:function(){return N("https://www.linkedin.com/in/konstantin-zlatkov/")}},c.a.createElement(b.a,{size:"2x",className:"contact-button-icon",icon:E.b}),c.a.createElement("span",null,"LinkedIn")),c.a.createElement("span",{className:"contact-button",onClick:function(){return N("https://github.com/zlatkovtv/")}},c.a.createElement(b.a,{size:"2x",className:"contact-button-icon",icon:E.a}),c.a.createElement("span",null,"Github")),c.a.createElement("span",{className:"contact-button",onClick:function(){return N("mailto:konstantinzlatkov@gmail.com")}},c.a.createElement(b.a,{size:"2x",className:"contact-button-icon",icon:v.c}),c.a.createElement("span",null,"Email me"))))},O=a(70),S=a(46),P=a.n(S),T=(a(138),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).jumpToTarget=function(e){Object(O.a)(e)},a.expandMenu=function(){a.setState({isModalOpen:!0})},a.closeModal=function(e){a.setState({isModalOpen:!1})},a.state={linkStyle:null,homeButtonStyle:null,isModalOpen:!1,visible:{display:"block"}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("header",{id:"header"},c.a.createElement("div",{style:this.state.homeButtonStyle,id:"home-button",onClick:function(){return e.jumpToTarget("#home")}},c.a.createElement("div",{className:"text-medium black big"},"Konstantin"),c.a.createElement("div",{className:"text-medium black big"},"Zlatkov"),c.a.createElement("div",{className:"text-medium black small"},"KZ")),c.a.createElement(b.a,{id:"menu-icon",onClick:this.expandMenu,icon:v.a}),c.a.createElement("nav",{id:"navigation"},c.a.createElement("a",{href:"#",className:"text-medium nav-link bold",style:this.state.linkStyle,onClick:function(){return e.jumpToTarget("#about-me")}},"about me"),c.a.createElement("a",{href:"#",className:"text-medium nav-link bold",style:this.state.linkStyle,onClick:function(){return e.jumpToTarget("#projects")},id:""},"projects"),c.a.createElement("a",{href:"#",className:"text-medium nav-link bold",style:this.state.linkStyle,onClick:function(){return e.jumpToTarget("#contact")},id:""},"contact"),c.a.createElement("a",{href:P.a,target:"_blank",rel:"noopener noreferrer",className:"outlined-button"},"resume")),c.a.createElement("div",{id:"responsive-menu-modal",onClick:this.closeModal,style:this.state.isModalOpen?this.state.visible:null},c.a.createElement("nav",{id:"navigation-responsive"},c.a.createElement("a",{href:"#",className:"text-medium nav-link bold",style:this.state.linkStyle,onClick:function(){return e.jumpToTarget("#about-me")}},"about me"),c.a.createElement("a",{href:"#",className:"text-medium nav-link bold",style:this.state.linkStyle,onClick:function(){return e.jumpToTarget("#projects")},id:""},"projects"),c.a.createElement("a",{href:"#",className:"text-medium nav-link bold",style:this.state.linkStyle,onClick:function(){return e.jumpToTarget("#contact")},id:""},"contact"),c.a.createElement("a",{href:P.a,target:"_blank",rel:"noopener noreferrer",className:"outlined-button"},"resume"))))}},{key:"componentDidUpdate",value:function(e){this.props.growPercentage!==e.growPercentage&&(this.props.growPercentage<.5&&this.setState({linkStyle:{color:"white"},homeButtonStyle:{padding:"0.7em 2em"}}),this.props.growPercentage>=.5&&this.setState({linkStyle:null,homeButtonStyle:null}))}}]),t}(c.a.Component)),C=(a(139),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={linkedInLink:"https://www.linkedin.com/in/konstantin-zlatkov/",githubLink:"https://github.com/zlatkovtv/",style:{marginLeft:"calc(-1 * (4em * (1 - ".concat(a.props.growPercentage,")))")}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("aside",{id:"sidebar",style:this.state.style},c.a.createElement("div",{id:"social-icons"},c.a.createElement(b.a,{icon:E.b,onClick:function(){return N(e.state.linkedInLink)},className:"social-media-icon"}),c.a.createElement(b.a,{icon:E.a,onClick:function(){return N(e.state.githubLink)},className:"social-media-icon"})))}},{key:"componentDidUpdate",value:function(e){this.props.growPercentage!==e.growPercentage&&this.setState({style:{marginLeft:"calc(-1 * (4em * (1 - ".concat(this.props.growPercentage,")))")}})}}]),t}(c.a.Component)),I=(a(140),function(e){function t(e){var a;Object(r.a)(this,t);var n=50*(1-(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).props.growPercentage);return a.state={style:{width:"calc(100% - 4em * ".concat(a.props.growPercentage,")"),marginTop:"calc(6em * ".concat(a.props.growPercentage,")"),backgroundImage:"-webkit-linear-gradient(-20deg, #161616 ".concat(50+n,"%, #242530 ").concat(50-n,"%)")}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"background",style:this.state.style})}},{key:"componentDidUpdate",value:function(e){if(this.props.growPercentage!==e.growPercentage){var t=50*(1-this.props.growPercentage);this.setState({style:{width:"calc(100% - 4em * ".concat(this.props.growPercentage,")"),marginTop:"calc(6em * ".concat(this.props.growPercentage,")"),backgroundImage:"-webkit-linear-gradient(-20deg, #161616 ".concat(50+t,"%, #242530 ").concat(50-t,"%)")}})}}}]),t}(c.a.Component)),x=(a(141),function(e){return c.a.createElement("footer",{id:"footer"},c.a.createElement("a",{href:"https://github.com/zlatkovtv/konstantin-zlatkov-portfolio",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("div",{className:"footer-text"},"Designed and built with React"),c.a.createElement("div",{className:"footer-text"},"by Konstantin Zlatkov")))}),z=(a(142),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleScroll=function(){var e=w();a.setState({growPercentage:e})},a.state={growPercentage:w()},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(I,{growPercentage:this.state.growPercentage}),c.a.createElement(T,{growPercentage:this.state.growPercentage}),c.a.createElement(C,{growPercentage:this.state.growPercentage}),c.a.createElement("main",null,c.a.createElement(h,null),c.a.createElement(d,{id:"about-me",title:"about me"},c.a.createElement(f,null)),c.a.createElement(d,{id:"projects",title:"projects"},c.a.createElement(k,null)),c.a.createElement(d,{id:"contact",title:"get in touch",fullscreen:!0},c.a.createElement(j,null))),c.a.createElement(x,null))}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleScroll)}}]),t}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(71),M=a.n(L);a(143);M.a.init({once:!0}),l.a.render(c.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},46:function(e,t,a){e.exports=a.p+"static/media/konstantin_zlatkov_cv_2019.96d57651.pdf"},69:function(e,t,a){e.exports=a.p+"static/media/profile-image.d75cbebf.jpg"},72:function(e,t,a){e.exports=a(144)}},[[72,1,2]]]);
//# sourceMappingURL=main.94942c30.chunk.js.map