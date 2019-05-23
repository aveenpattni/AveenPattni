(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(56)},40:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),i=a.n(r),s=a(6),c=(a(40),a(1)),o=a(2),m=a(4),u=a(3),p=a(5),d=a(14),h=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"menu"},l.a.createElement("h1",{className:"menu__title",onClick:this.props.toggle},"Menu"),l.a.createElement("ul",{className:"menu__list",onClick:this.props.toggle},l.a.createElement(s.b,{to:"/about"},l.a.createElement("li",null,"About Me")),l.a.createElement(s.b,{to:"/projects"},l.a.createElement("li",null,"Projects")),l.a.createElement(s.b,{to:"/hobbies"},l.a.createElement("li",null,"Hobbies")),l.a.createElement(s.b,{to:"/contact"},l.a.createElement("li",null,"Contact"))))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={menu:!1},a.toggleMenu=function(e){e.preventDefault(),a.setState({menu:!a.state.menu})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar__menu"},l.a.createElement("img",{onClick:this.toggleMenu,src:"./assets/icons/menu.svg",alt:"Menu"})),this.state.menu?l.a.createElement(h,{toggle:this.toggleMenu}):l.a.createElement(l.a.Fragment,null),l.a.createElement(s.b,{to:"/",className:"navbar__a"},l.a.createElement("div",{className:"navbar__home"},l.a.createElement("img",{src:"./assets/images/aveen.jpg",alt:"Aveen"}),l.a.createElement("h1",null,"Aveen Pattni"))),l.a.createElement("div",{className:"navbar__tabs"},l.a.createElement("div",{className:"about"===this.props.match.params.page?"navbar__tab navbar__tab--selected":"navbar__tab"},l.a.createElement(s.b,{to:"/about"},l.a.createElement("h4",null,"About Me"))),l.a.createElement("div",{className:"projects"===this.props.match.params.page?"navbar__tab navbar__tab--selected":"navbar__tab"},l.a.createElement(s.b,{to:"/projects"},l.a.createElement("h4",null,"Projects"))),l.a.createElement("div",{className:"hobbies"===this.props.match.params.page?"navbar__tab navbar__tab--selected":"navbar__tab"},l.a.createElement(s.b,{to:"/hobbies"},l.a.createElement("h4",null,"Hobbies"))),l.a.createElement("div",{className:"contact"===this.props.match.params.page?"navbar__tab navbar__tab--selected":"navbar__tab"},l.a.createElement(s.b,{to:"/contact"},l.a.createElement("h4",null,"Contact")))))}}]),t}(n.Component),b=(a(49),a(31)),E=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"projectCard"},l.a.createElement("h1",null,this.props.proj.title),l.a.createElement("div",{className:"projectCard__imgContainer"},l.a.createElement(b.Carousel,null,this.props.proj.images.map(function(t){return l.a.createElement("div",null,l.a.createElement("img",{src:t.image,alt:e.props.proj.title}),l.a.createElement("p",{className:"legend"},t.caption))}))),l.a.createElement("div",{className:"projectCard__info"},l.a.createElement("div",{className:"projectCard__stack projectCard--caption"},l.a.createElement("h4",null,"Tech Stack:"),l.a.createElement("p",null,this.props.proj.stack)),l.a.createElement("div",{className:"projectCard__high projectCard--caption"},l.a.createElement("h4",null,"Highlights:"),l.a.createElement("p",null,this.props.proj.highlights)),l.a.createElement("div",{className:"projectCard__description projectCard--caption"},l.a.createElement("h4",null,"Description:"),l.a.createElement("p",null,this.props.proj.description)),l.a.createElement("div",{className:"projectCard__description projectCard--caption"},l.a.createElement("h4",null,"Link:"),l.a.createElement("a",{href:this.props.proj.link,target:"__blank"},l.a.createElement("p",null,this.props.proj.linkTitle)))))}}]),t}(n.Component),v=[{title:"Bridge",images:[{image:"./assets/images/bridge1.png",caption:"Login Page"},{image:"./assets/images/bridge2.png",caption:"Profile Page"},{image:"./assets/images/bridge3.png",caption:"Instant Messaging Conversation Page"}],stack:"React, Node, Express, MongoDB",description:"Bridge is a professional networking tool that matches students to industry mentors to provide them with career guidance. Matches are built on each user\u2019s career aspirations and goals.",highlights:"SocketIO, Matching Algorithm",linkTitle:"GitHub Repository",link:"https://github.com/aveenpattni/Bridge"},{title:"Trivia",images:[{image:"./assets/images/trivia1.png",caption:"Start Page"},{image:"./assets/images/trivia2.png",caption:"Game Page"},{image:"./assets/images/trivia3.png",caption:"Score Page"}],stack:"React",description:"Retrieves questions from an API and presents them interactively to the player. Players have up to 60 seconds to answer 10 questions of various difficulties on one of 24 categories.",highlights:"API Use, Timer functionality",linkTitle:"GitHub Repository",link:"https://github.com/aveenpattni/Trivia_Game"},{title:"Ask Aveen",images:[{image:"./assets/images/ask1.jpg",caption:"Project in the works"}],stack:"React, Node, Express, MySQL, Redux",description:"Ask Aveen will be a portal where users can ask questions to Aveen Pattni regarding anything. This could be related to Aveen's background and expereience, or even new topics for Aveen to discover.",highlights:"Under Construction",linkTitle:"Under Construction",link:""},{title:"Aveen Pattni Portfolio",images:[],stack:"React, Node, Express, Heroku",description:"Portfolio site that you are currently on. Adding here to link GitHub repository.",highlights:"First time deploying a website",linkTitle:"GitHub Repository",link:"https://github.com/aveenpattni/AveenPattni"}],_=a(32),f=a.n(_),j=a(33),y=a.n(j),k=a(34),N=a.n(k),w=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return l.a.createElement("div",{className:"landing"},l.a.createElement("section",{className:"landing__hero"},l.a.createElement("img",{src:"./assets/images/homeHero.jpeg",alt:"Hero"}),l.a.createElement("div",{className:"landing__herotext"},l.a.createElement("h1",null,"Aveen Pattni"),l.a.createElement("ul",null,l.a.createElement("li",null,"Web Developer"),l.a.createElement("li",null,"Mathematician"),l.a.createElement("li",null,"Self-Proclaimed Athlete")))),l.a.createElement("section",{className:"landing__nav"},l.a.createElement("a",{href:"#about"},l.a.createElement("button",null,"About Me")),l.a.createElement("a",{href:"#projects"},l.a.createElement("button",null,"My Projects")),l.a.createElement("a",{href:"#hobbies"},l.a.createElement("button",null,"My Hobbies"))),l.a.createElement("section",{className:"landing__about",id:"about"},l.a.createElement("h3",null,"About Me"),l.a.createElement("div",{className:"landing__aboutContainer"},l.a.createElement("div",{className:"landing__about--text"},l.a.createElement(y.a,{top:!0,left:!0},l.a.createElement("p",null,"I am a dynamic and detail-oriented full stack web developer from Mississauga, ON,  motivated to create a positive impact in the world of digital consulting/development. Armed with various experience in information technology and digital transformation, I am talented in creating detail-focused, user-friendly solutions to solve modern problems."))),l.a.createElement("div",{className:"landing__about--images"},l.a.createElement("img",{src:"./assets/images/digital.jpeg",alt:"About Intro"}))),l.a.createElement(s.b,{to:"/about"},l.a.createElement("button",null,"See More..."))),l.a.createElement("section",{className:"landing__projects",id:"projects"},l.a.createElement("h3",null,"Projects"),l.a.createElement(N.a,{top:!0},l.a.createElement("div",{className:"landing__projectsContainer"},l.a.createElement(E,{id:v[0].title,proj:v[0]}))),l.a.createElement(s.b,{to:"/projects"},l.a.createElement("button",null,"See More..."))),l.a.createElement("section",{className:"landing__hobbies",id:"hobbies"},l.a.createElement("h3",null,"Hobbies"),l.a.createElement("div",{className:"landing__hobbiesContainer"},l.a.createElement("div",{className:"landing__hobbies--text"},l.a.createElement(f.a,null,l.a.createElement("p",null,"I have been involved with educational competitive robotics programs since 2010. I started out as a competitor when I was in high school for the FIRST and VEX Robotics programs. After finishing high school, I stayed involved as a mentor for FIRST Robotics and a global key volunteer for VEX Robotics as a head referee. I stay involved as a volunteer because I want to help make an incredible educational experience for the students."))),l.a.createElement("div",{className:"landing__hobbies--images"},l.a.createElement("img",{src:"./assets/images/robotics.jpg",alt:"Robotics"}))),l.a.createElement(s.b,{to:"/hobbies"},l.a.createElement("button",null,"See More..."))))}}]),t}(n.Component),O=a(17),I=a.n(O),M=a(12),C=a.n(M),A=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return l.a.createElement("div",{className:"about"},l.a.createElement("section",{className:"about__hero"},l.a.createElement("img",{src:"./assets/images/homeHero.jpeg",alt:"Hero"}),l.a.createElement("div",{className:"about__herotext"},l.a.createElement("h1",null,"Aveen Pattni"),l.a.createElement("ul",null,l.a.createElement("li",null,"Web Developer"),l.a.createElement("li",null,"Mathematician"),l.a.createElement("li",null,"Self-Proclaimed Athlete")))),l.a.createElement("section",{className:"about__infoContainer"},l.a.createElement("h3",null,"My Story"),l.a.createElement("div",{className:"about__infoBlock"},l.a.createElement("div",{className:"about__story"},l.a.createElement(I.a,{right:!0},l.a.createElement("p",null,"I am a dynamic and detail-oriented full stack web developer from Mississauga, ON,  motivated to create a positive impact in the world of digital consulting/development. Armed with various experience in information technology and digital transformation, I am talented in creating detail-focused, user-friendly solutions to solve modern problems."),l.a.createElement("p",null,"I am currently searching for opportunities in ",l.a.createElement("strong",null,l.a.createElement("em",null,"web development"))," as well as ",l.a.createElement("strong",null,l.a.createElement("em",null,"product management/technical business analysis")),"."),l.a.createElement("p",null,"I possess a Bachelor of Mathematics from the University of Waterloo majoring in Information Technology Management. This program combines the fields of Mathematics, Business, and Technology to bridge the gap between management and technology."),l.a.createElement("p",null,"After completing my undergraduate degree, I entered the working world in digital transformation as an IT Analyst. This gave me good exposure to many areas of Information Technology with focus on the technical and managerial side. This role also exposed me to web development which then I took an interest in and decided to learn more about."),l.a.createElement("p",null,"I enjoy application development as it allows me to utilize my problem-solving skills while working in an environment where I am continuously learning and challenging myself. Most recently I obtained a diploma in Full Stack Web Development from BrainStation school for digital skill training."),l.a.createElement("p",null,"I am most comfortable developing in the MERN stack (MySQL/MongoDB, Express, React, Node) however, I am spending time broadening my skill set and currently learning the Angular framework as well as developing using Python."))),l.a.createElement("div",{className:"about__images"},l.a.createElement(C.a,null,l.a.createElement("a",{href:"https://uwaterloo.ca/",target:"__blank"},l.a.createElement("img",{src:"./assets/images/uwlogo.png",alt:"University of Waterloo"})),l.a.createElement("a",{href:"https://brainstation.io/",target:"__blank"},l.a.createElement("img",{src:"./assets/images/bslogo.png",alt:"BrainStation"})))))))}}]),t}(n.Component),P=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return l.a.createElement("div",{className:"projects"},l.a.createElement("section",{className:"projects__hero"},l.a.createElement("img",{src:"./assets/images/projectHero.jpeg",alt:"Hero"}),l.a.createElement("div",{className:"projects__herotext"},l.a.createElement("h2",null,"My Projects"))),l.a.createElement("div",{className:"projects__cards"},v.map(function(e){return l.a.createElement(C.a,null,l.a.createElement(E,{id:e.title,proj:e}))})))}}]),t}(n.Component),x=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return l.a.createElement("div",{className:"hobbies"},l.a.createElement("section",{className:"hobbies__hero"},l.a.createElement("img",{src:"./assets/images/hobby.jpeg",alt:"Hero"}),l.a.createElement("div",{className:"hobbies__herotext"},l.a.createElement("h2",null,"My Hobbies"))),l.a.createElement("section",{className:"hobbies__main"},l.a.createElement("h3",null,"Sports"),l.a.createElement("div",{className:"hobbies__card"},l.a.createElement(I.a,{left:!0},l.a.createElement("div",{className:"hobbies__card--text"},l.a.createElement("p",null,"Sports have always been my number 1 pastime throughout my life. Growing up I had played almost every sport. The two sports I play most often are basketball and soccer. My agility, speed, an IQ help me excel at any sport that I pick up."))),l.a.createElement("div",{className:"hobbies__card--picture"},l.a.createElement(C.a,null,l.a.createElement("img",{src:"./assets/images/soccer.jpg",alt:"Soccer"})))),l.a.createElement("h3",null,"Robotics"),l.a.createElement("div",{className:"hobbies__card reverse"},l.a.createElement(I.a,{right:!0},l.a.createElement("div",{className:"hobbies__card--text"},l.a.createElement("p",null,"I have been involved with educational competitive robotics programs since 2010. I started out as a competitor when I was in high school for the FIRST and VEX Robotics programs. After finishing high school, I stayed involved as a mentor for FIRST Robotics and a global key volunteer for VEX Robotics as a head referee. I stay involved as a volunteer because I want to help make an incredible educational experience for the students."))),l.a.createElement("div",{className:"hobbies__card--picture"},l.a.createElement(C.a,null,l.a.createElement("img",{src:"./assets/images/robotics.jpg",alt:"Robotics"})))),l.a.createElement("h3",null,"Fitness"),l.a.createElement("div",{className:"hobbies__card"},l.a.createElement(I.a,{left:!0},l.a.createElement("div",{className:"hobbies__card--text"},l.a.createElement("p",null,"Personal fitness has become increasingly important to me as I have gotten older. Taking care of my body and my health is something which I believe will benefit me later on in life than it will now. Staying in great physical shape now is also something that is important to me. This includes staying active through working out and playing sports, as well as maintaining a healthy diet."))),l.a.createElement("div",{className:"hobbies__card--picture"},l.a.createElement(C.a,null,l.a.createElement("img",{src:"./assets/images/fitness.jpg",alt:"Fitness"}))))))}}]),t}(n.Component),T=a(18),R=a.n(T),S=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"contact"},l.a.createElement("section",{className:"contact__hero"},l.a.createElement("img",{src:"./assets/images/contact.jpeg",alt:"Hero"}),l.a.createElement("div",{className:"contact__herotext"},l.a.createElement("h2",null,"Contact Aveen"))),l.a.createElement("section",{className:"contact__main"},l.a.createElement("div",{className:"contact__cards"},l.a.createElement(R.a,{left:!0},l.a.createElement("div",{className:"contact__card"},l.a.createElement("a",{href:"https://www.linkedin.com/in/aveenpattni/",target:"__blank"},l.a.createElement("img",{src:"./assets/images/linkedin.png",alt:"LinkedIn"})))),l.a.createElement(R.a,{right:!0},l.a.createElement("div",{className:"contact__card"},l.a.createElement("a",{href:"https://github.com/aveenpattni",target:"__blank"},l.a.createElement("img",{src:"./assets/images/github.png",alt:"GitHub"})))),l.a.createElement(R.a,{left:!0},l.a.createElement("div",{className:"contact__card"},l.a.createElement("a",{href:"mailto: aveenpattni@gmail.com"},l.a.createElement("img",{src:"./assets/images/email.png",alt:"Email"})))),l.a.createElement(R.a,{right:!0},l.a.createElement("div",{className:"contact__card"},l.a.createElement("a",{href:"https://drive.google.com/file/d/1W486OyXJCSMsUT8sWuHyzlePIwf3O9oQ/view?usp=sharing",target:"__blank"},l.a.createElement("img",{src:"./assets/images/resume.png",alt:"Resume"})))))))}}]),t}(n.Component),H=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer__contact"},l.a.createElement("div",{className:"footer__card"},l.a.createElement("a",{href:"https://www.linkedin.com/in/aveenpattni/",target:"__blank"},l.a.createElement("img",{src:"./assets/images/linkedin.png",alt:"LinkedIn"}))),l.a.createElement("div",{className:"footer__card"},l.a.createElement("a",{href:"https://github.com/aveenpattni",target:"__blank"},l.a.createElement("img",{src:"./assets/images/github.png",alt:"GitHub"}))),l.a.createElement("div",{className:"footer__card"},l.a.createElement("a",{href:"mailto: aveenpattni@gmail.com"},l.a.createElement("img",{src:"./assets/images/email.png",alt:"Email"}))),l.a.createElement("div",{className:"footer__card"},l.a.createElement("a",{href:"https://drive.google.com/file/d/1W486OyXJCSMsUT8sWuHyzlePIwf3O9oQ/view?usp=sharing",target:"__blank"},l.a.createElement("img",{src:"./assets/images/resume.png",alt:"Resume"})))),l.a.createElement("h3",null,"An Aveen Pattni Production."))}}]),t}(n.Component),B=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"app"},l.a.createElement(d.a,{path:"/",exact:!0,render:function(e){return l.a.createElement(g,e)}}),l.a.createElement(d.a,{path:"/:page",render:function(e){return l.a.createElement(g,e)}}),l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/",exact:!0,render:function(){return l.a.createElement(w,null)}}),l.a.createElement(d.a,{path:"/about",exact:!0,render:function(){return l.a.createElement(A,null)}}),l.a.createElement(d.a,{path:"/projects",exact:!0,render:function(){return l.a.createElement(P,null)}}),l.a.createElement(d.a,{path:"/hobbies",exact:!0,render:function(){return l.a.createElement(x,null)}}),l.a.createElement(d.a,{path:"/contact",exact:!0,render:function(){return l.a.createElement(S,null)}})),l.a.createElement(H,null))}}]),t}(n.Component);i.a.render(l.a.createElement(s.a,null,l.a.createElement(B,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.8a06b66f.chunk.js.map