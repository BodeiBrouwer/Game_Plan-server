(this["webpackJsonpgame_plan-client"]=this["webpackJsonpgame_plan-client"]||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/festive-pineapple.136fc483.png"},23:function(e,t,a){e.exports=a.p+"static/media/Game-Plan-logo.2513166d.png"},45:function(e,t,a){e.exports=a(81)},50:function(e,t,a){},52:function(e,t,a){},75:function(e,t,a){e.exports=a.p+"static/media/pineapple.01a35883.png"},80:function(e,t,a){e.exports=a.p+"static/media/header-image.b7b30a7c.jpg"},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),i=a.n(l),c=(a(50),a(4)),s=a(5),o=a(7),m=a(6),u=(a(51),a(52),"https://gameplan-improv.herokuapp.com/"),p=a(3),g=a.n(p),d=a(2),h=function(e){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar--logo-holder"},r.a.createElement(d.b,{to:"/games"},r.a.createElement("img",{src:a(23),alt:"logo",className:"navbar--logo"}))),r.a.createElement("ul",{className:"navbar--link"},r.a.createElement("li",{className:"navbar--link-item"},r.a.createElement(d.b,{className:"navbar--link-item",to:"/games"},"Games")),r.a.createElement("li",{className:"navbar--link-item"},r.a.createElement(d.b,{className:"navbar--link-item",to:"/games/create"},"Create Game")),r.a.createElement("li",{className:"navbar--link-item"},r.a.createElement(d.b,{className:"navbar--link-item",to:"/trainings"},"My Trainings")),r.a.createElement("li",{className:"navbar--link-item"},r.a.createElement("button",{className:"logout-btn",onClick:e.onLogout},"Log Out"))))},E=a(95),f=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){"LoginPage"===this.props.location&&this.props.setState({isNavbarHidden:!0})}},{key:"render",value:function(){return r.a.createElement("div",{className:"login-page"},r.a.createElement("section",{className:"welcome-text"},r.a.createElement("img",{src:a(23),alt:"logo Game Plan"}),r.a.createElement("h3",null," Plan the perfect improv training  with the help of our game database ")),r.a.createElement("form",{className:"form login-form",onSubmit:this.props.onSignIn},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1",name:"email","aria-describedby":"emailHelp"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{name:"password",type:"password",className:"form-control",id:"exampleInputPassword1"})),r.a.createElement("div",{className:"login-btns"},r.a.createElement("button",{type:"submit",className:"btn btn-success"},"Submit"),r.a.createElement(d.b,{to:"signup"},r.a.createElement(E.a,{variant:"btn btn-success"},"Sign up instead")))))}}]),n}(r.a.Component);function v(e){return r.a.createElement("div",{className:"login-page"},r.a.createElement("div",{className:"welcome-text"},r.a.createElement("img",{src:a(23),alt:"logo Game Plan"}),r.a.createElement("p",null," Plan the perfect improv training ",r.a.createElement("br",null)," with the help of our game database ")),r.a.createElement("form",{className:"form login-form",onSubmit:e.onSignUp},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputUsername"},"Username"),r.a.createElement("input",{type:"text",className:"form-control",id:"exampleInputUsername",name:"username"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1",name:"email","aria-describedby":"emailHelp"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{name:"password",type:"password",className:"form-control",id:"exampleInputPassword1"})),r.a.createElement("button",{type:"submit",className:"btn btn-success"},"Submit")))}var b=a(94),y=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={game:""},e.incrementMe=function(t){t.preventDefault(),g.a.patch("".concat(u,"/games/").concat(e.state.game._id,"/like"),{},{withCredentials:!0}).then((function(t){console.log(t),e.setState({game:t.data})}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setState({game:this.props.game})}},{key:"render",value:function(){return this.state.game.likes?r.a.createElement("div",{className:"likes"},r.a.createElement("p",null,this.state.game.likes.length),r.a.createElement("button",{className:"like-count",onClick:this.incrementMe},r.a.createElement("img",{className:"like-btn",src:a(75),alt:"pineapple"}))):r.a.createElement("p",null,"Loading .. ")}}]),n}(n.Component),N=a(43),C=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={trainings:[],selectedTrainings:[]},e.handleChange=function(t){var a=t.currentTarget.value,n=JSON.parse(JSON.stringify(e.state.selectedTrainings));n=a,e.setState({selectedTrainings:n})},e.handleAdd=function(t){console.log("Add",t),g.a.patch("".concat(u,"/games/").concat(e.state.selectedTrainings,"/").concat(t._id,"/add"),{},{withCredentials:!0}).then((function(t){e.setState({selectedTrainings:t.data})}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat(u,"/trainings"),{withCredentials:!0}).then((function(t){e.setState({trainings:t.data})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"popup"},r.a.createElement("div",{className:"popup\\_inner"},r.a.createElement("fieldset",null,r.a.createElement("h2",null,"Your trainings"),this.state.trainings.map((function(t,a){return r.a.createElement("div",{key:"check"+a},r.a.createElement("input",{onChange:e.handleChange,checked:e.state.selectedTrainings===t._id,type:"checkbox",name:t._id,value:t._id}),r.a.createElement("label",{htmlFor:t._id},t.name))}))),r.a.createElement(d.b,{to:"/games"},r.a.createElement(E.a,{onClick:function(){e.handleAdd(e.props.game),e.props.closePopup()},variant:"btn btn-success"},"Add"))))}}]),a}(r.a.Component),S=[{label:"Warm-ups",value:"warm-up"},{label:"Exercises",value:"exercise"},{label:"Scenes",value:"scenes"}],O=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={games:[],selectedOption:null,filteredGames:[],showPopup:!1},e.handleSearch=function(t){e.setState({selectedOption:t}),console.log("Option selected:",t);var a=[];if(t){var n=t.map((function(e){return e.value}));console.log(n),a=e.state.games.filter((function(e){return n.includes(e.category)}))}else a=e.state.games;e.setState({filteredGames:a})},e.togglePopup=function(t){console.log(t),e.setState({showPopup:!e.state.showPopup,selectedGame:t})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat(u,"/games"),{withCredentials:!0}).then((function(t){e.setState({games:t.data,filteredGames:t.data})}))}},{key:"render",value:function(){var e=this,t=this.state.selectedOption;return this.state.filteredGames?r.a.createElement("div",null,this.props.loggedInUser?r.a.createElement("div",{className:"center-piece"},r.a.createElement("h1",null," Search Our Game Database"),r.a.createElement("section",{className:"search-section"},r.a.createElement(N.a,{className:"select",isMulti:!0,value:t,onChange:this.handleSearch,options:S}),r.a.createElement(d.b,{to:"/games/create"},r.a.createElement(E.a,{variant:"btn btn-success btn-new-game"},"Create your own game"))),0===this.state.filteredGames.length?null:this.state.filteredGames.map((function(t,a){return r.a.createElement(b.a,{className:"card",key:"game"+a},r.a.createElement(b.a.Header,{className:"card-header"},r.a.createElement("span",{className:"card-title"},r.a.createElement("h5",null,t.name)," ",r.a.createElement("h5",null,t.category.charAt(0).toUpperCase()+t.category.slice(1)))),r.a.createElement(b.a.Body,null,r.a.createElement(b.a.Text,{className:"card-game-descr overflow"},t.description),r.a.createElement("div",{className:"btn-with-like"},r.a.createElement("div",{className:"btn-collection-card"},r.a.createElement(d.b,{to:"/games/".concat(t._id)},r.a.createElement(E.a,{variant:"btn btn-success"},"More")),r.a.createElement(E.a,{className:"btn-add",onClick:function(){return e.togglePopup(t)},variant:"btn btn-success"},"Add to training"),e.state.showPopup?r.a.createElement(C,{show:e.state.showPopup,game:e.state.selectedGame,closePopup:e.togglePopup.bind(e)}):null),r.a.createElement(y,{className:"like-btn",game:t}))))}))):r.a.createElement("p",null,"Sign in ",r.a.createElement(d.b,{to:"/login"},"here"))):r.a.createElement("p",null,"Loading .. ")}}]),a}(r.a.Component),w=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={newgame:{}},e.handleChange=function(t){var a=t.currentTarget.name,n=t.currentTarget.value,r=JSON.parse(JSON.stringify(e.state.newgame));r[a]=n,e.setState({newgame:r})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form-page"},this.props.loggedInUser?r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(t){return e.props.onSubmit(t,e.state.newgame)}},r.a.createElement("h1",null,"Create a new game"),r.a.createElement("fieldset",null,r.a.createElement("p",null,"What type of game is it?*"),r.a.createElement("div",null,r.a.createElement("input",{onChange:this.handleChange,checked:"warm-up"===this.state.newgame.category,type:"checkbox",name:"category",value:"warm-up"}),r.a.createElement("label",{htmlFor:"warm-up"},"Warm-up")),r.a.createElement("div",null,r.a.createElement("input",{onChange:this.handleChange,checked:"exercise"===this.state.newgame.category,type:"checkbox",name:"category",value:"exercise"}),r.a.createElement("label",{htmlFor:"exercise"},"Exercise")),r.a.createElement("div",null,r.a.createElement("input",{onChange:this.handleChange,checked:"scenes"===this.state.newgame.category,type:"checkbox",name:"category",value:"scenes"}),r.a.createElement("label",{htmlFor:"scenes"},"Scenes"))),r.a.createElement("div",{className:"form-field"},r.a.createElement("p",null,"What is the name of the game?*"),r.a.createElement("input",{onChange:this.handleChange,name:"name",type:"text",placeholder:"Name of the game"})),r.a.createElement("div",{className:"form-field"},r.a.createElement("p",null,"Give a description of the game*"),r.a.createElement("input",{onChange:this.handleChange,name:"description",type:"text",placeholder:"Describe the game"})),r.a.createElement("div",{className:"form-field"},r.a.createElement("p",null,"What are the benefits of this game?"),r.a.createElement("input",{onChange:this.handleChange,name:"purpose",type:"text",placeholder:"Enter purpose"})),r.a.createElement("div",{className:"form-field"},r.a.createElement("p",null,"Do you wanna credit someone for this game?"),r.a.createElement("input",{onChange:this.handleChange,name:"credit",type:"text",placeholder:"Credit the mastermind"})),r.a.createElement("div",{className:"form-field"},r.a.createElement("p",null,"Feel free to add a link to a video that shows/explains this game"),r.a.createElement("input",{onChange:this.handleChange,name:"video",type:"text",placeholder:"Video URL"})),r.a.createElement(E.a,{variant:"btn btn-success btn-create",type:"submit"},"Create")),r.a.createElement("div",{className:"form-image"},r.a.createElement("img",{src:a(20),alt:"festive pineapple"}))):r.a.createElement("p",null,"Sign in ",r.a.createElement(d.b,{to:"/login"},"here")))}}]),n}(r.a.Component),k=a(42),x=a.n(k),j=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={game:{}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;g.a.get("".concat(u,"/games/").concat(t),{withCredentials:!0}).then((function(t){e.setState({game:t.data})}))}},{key:"render",value:function(){var e=this,t=this.state.game,a=t.name,n=t.category,l=t.description,i=t.purpose,c=t.credit,s=t.video,o=t._id,m=t.creator;return r.a.createElement("div",null,this.props.loggedInUser?r.a.createElement("div",null,r.a.createElement("h1",null,a),r.a.createElement("p",null,n),r.a.createElement("p",null,l),r.a.createElement("p",null,i),r.a.createElement("p",null,c),r.a.createElement(x.a,{url:s}),this.props.loggedInUser._id!==m?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{to:"/games/".concat(o,"/edit")},r.a.createElement(E.a,{variant:"btn btn-success"},"Edit")),r.a.createElement(E.a,{onClick:function(){return e.props.onGameDelete(o)},variant:"btn btn-success"},"Delete"))):r.a.createElement("p",null,"Sign in ",r.a.createElement(d.b,{to:"/login"},"here")))}}]),a}(r.a.Component),I=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={game:""},e.handleCatChange=function(t){var a=t.currentTarget.name,n=t.currentTarget.value,r=JSON.parse(JSON.stringify(e.state.game));r[a]=n,e.setState({game:r})},e.handleNameChange=function(t){var a=JSON.parse(JSON.stringify(e.state.game));a.name=t.currentTarget.value,e.setState({game:a})},e.handleDescChange=function(t){var a=JSON.parse(JSON.stringify(e.state.game));a.description=t.currentTarget.value,e.setState({game:a})},e.handlePurposeChange=function(t){var a=JSON.parse(JSON.stringify(e.state.game));a.purpose=t.currentTarget.value,e.setState({game:a})},e.handleCreditChange=function(t){var a=JSON.parse(JSON.stringify(e.state.game));a.credit=t.currentTarget.value,e.setState({game:a})},e.handleVideoChange=function(t){var a=JSON.parse(JSON.stringify(e.state.game));a.video=t.currentTarget.value,e.setState({game:a})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;g.a.get("".concat(u,"/games/").concat(t),{withCredentials:!0}).then((function(t){console.log(t.data),e.setState({game:t.data})}))}},{key:"render",value:function(){var e=this,t=this.state.game,n=t.name,l=t.description,i=t.purpose,c=t.credit,s=t.video;return r.a.createElement("div",{className:"form-page"},r.a.createElement("form",null,r.a.createElement("h1",null,"Game changer"),r.a.createElement("fieldset",null,r.a.createElement("div",null,r.a.createElement("p",null,"What type of game is it?"),r.a.createElement("input",{onChange:this.handleCatChange,checked:"warm-up"===this.state.game.category,type:"checkbox",name:"category",value:"warm-up"}),r.a.createElement("label",{htmlFor:"warm-up"},"Warm-up")),r.a.createElement("div",null,r.a.createElement("input",{onChange:this.handleCatChange,checked:"exercise"===this.state.game.category,type:"checkbox",name:"category",value:"exercise"}),r.a.createElement("label",{htmlFor:"exercise"},"Exercise")),r.a.createElement("div",null,r.a.createElement("input",{onChange:this.handleCatChange,checked:"scenes"===this.state.game.category,type:"checkbox",name:"category",value:"scenes"}),r.a.createElement("label",{htmlFor:"scenes"},"Scenes"))),r.a.createElement("div",{className:"form-field"},r.a.createElement("p",null,"We do need a name"),r.a.createElement("input",{onChange:this.handleNameChange,name:"name",type:"text",placeholder:"Enter Name",value:n})),r.a.createElement("div",{className:"form-field"},r.a.createElement("p",null,"Give a clear description"),r.a.createElement("input",{onChange:this.handleDescChange,name:"description",type:"text",value:l,placeholder:"Enter Description"})),r.a.createElement("div",{className:"form-field"},r.a.createElement("p",null,"But what can we learn from it?"),r.a.createElement("input",{onChange:this.handlePurposeChange,name:"name",type:"text",placeholder:"Enter purpose",value:i})),r.a.createElement("div",{className:"form-field"},r.a.createElement("p",null,"Anyone to credit?"),r.a.createElement("input",{onChange:this.handleCreditChange,name:"name",type:"text",placeholder:"Enter credit",value:c})),r.a.createElement("div",{className:"form-field"},r.a.createElement("p",null,"Wanna change the video?"),r.a.createElement("input",{onChange:this.handleVideoChange,name:"name",type:"text",placeholder:"Enter video url",value:s})),r.a.createElement(E.a,{onClick:function(){return e.props.onGameEdit(e.state.game)},variant:"btn btn-success btn-create",type:"submit"},"Edit")),r.a.createElement("div",{className:"form-image"},r.a.createElement("img",{src:a(20),alt:"festive pineapple"})))}}]),n}(n.Component),D=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={newtraining:{}},e.handleChange=function(t){var a=t.currentTarget.name,n=t.currentTarget.value,r=JSON.parse(JSON.stringify(e.state.newtraining));r[a]=n,e.setState({newtraining:r})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form-page"},this.props.loggedInUser?r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(t){return e.props.onSubmit(t,e.state.newtraining)}},r.a.createElement("h1",null,"Create a new training"),r.a.createElement("div",{className:"form-field"},r.a.createElement("p",null,"What is the name of the training?*"),r.a.createElement("input",{onChange:this.handleChange,name:"name",type:"text",placeholder:"Training name"})),r.a.createElement("div",{className:"form-field"},r.a.createElement("p",null,"Give a description of the training*"),r.a.createElement("input",{onChange:this.handleChange,name:"description",type:"text",placeholder:"Description"})),r.a.createElement("div",{className:"form-field"},r.a.createElement("p",null,"What is the duration of the training in minutes?"),r.a.createElement("input",{onChange:this.handleChange,name:"duration",type:"number",placeholder:"Enter time"})),r.a.createElement("div",{className:"form-field"},r.a.createElement("p",null,"Notes on this training"),r.a.createElement("input",{onChange:this.handleChange,name:"notes",type:"text",placeholder:"What's on your mind?"})),r.a.createElement(E.a,{variant:"btn btn-success btn-create",type:"submit"},"Create")),r.a.createElement("div",{className:"form-image"},r.a.createElement("img",{src:a(20),alt:"festive pineapple"}))):r.a.createElement("p",null,"Sign in ",r.a.createElement(d.b,{to:"/login"},"here")))}}]),n}(r.a.Component),U=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={trainings:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat(u,"/trainings"),{withCredentials:!0}).then((function(t){e.setState({trainings:t.data})}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.props.loggedInUser?r.a.createElement("div",{className:"center-piece"},r.a.createElement("h1",null," My trainings"),r.a.createElement(d.b,{to:"/trainings/create"},r.a.createElement(E.a,{variant:"btn btn-success"},"New training")),0===this.state.trainings.length?null:this.state.trainings.map((function(e,t){return r.a.createElement(b.a,{key:"training"+t},r.a.createElement(b.a.Header,{className:"card-header",as:"h5"},e.name),r.a.createElement(b.a.Body,null,r.a.createElement(b.a.Text,null,e.description),r.a.createElement(b.a.Text,{className:"duration"},r.a.createElement("b",null,"Duration:"),"   ",e.duration," minutes"),r.a.createElement(d.b,{to:"/trainings/".concat(e._id)},r.a.createElement(E.a,{variant:"btn btn-success"},"More"))))}))):r.a.createElement("p",null,"Sign in ",r.a.createElement(d.b,{to:"/login"},"here")))}}]),a}(r.a.Component),T=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={training:[],selectedGame:null},e.handleDelete=function(t){g.a.patch("".concat(u,"/games/").concat(e.state.training._id,"/").concat(t._id,"/delete"),{},{withCredentials:!0}).then((function(t){e.setState({selectedGame:t.data},(function(){e.props.history.push("/trainings/".concat(e.state.training._id))}))}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;g.a.get("".concat(u,"/trainings/").concat(t),{withCredentials:!0}).then((function(t){e.setState({training:t.data})}))}},{key:"render",value:function(){var e=this;if(!this.state.training)return r.a.createElement("p",null,"Loading .. ");var t=this.state.training,a=t.name,n=t.duration,l=t.description,i=t.notes,c=t._id,s=t.games;return r.a.createElement("div",null,this.props.loggedInUser?r.a.createElement("div",{className:"center-piece details"},r.a.createElement("h1",null,a),r.a.createElement("div",{className:"btn-collection-card"},r.a.createElement(d.b,{to:"/trainings/".concat(c,"/edit")},r.a.createElement(E.a,{variant:"btn btn-success"},"Edit")),r.a.createElement(E.a,{onClick:function(){return e.props.onTrainingDelete(c)},variant:"btn btn-success"},"Delete")),r.a.createElement("h4",null,n," min"),r.a.createElement("h4",null,"Description"),r.a.createElement("p",null,l),r.a.createElement("h4",null,"Notes"),r.a.createElement("p",null,i),r.a.createElement("h4",null,"Games"),s?s.map((function(t,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{key:"mygame"+a},r.a.createElement(b.a.Header,{className:"card-header"},r.a.createElement("span",{className:"card-title"},r.a.createElement("h5",null,t.name)," ",r.a.createElement("h5",null,t.category.charAt(0).toUpperCase()+t.category.slice(1)))),r.a.createElement(b.a.Body,null,r.a.createElement(b.a.Text,{className:"card-game-descr overflow"},t.description),r.a.createElement(d.b,{to:"/games/".concat(t._id)},r.a.createElement(E.a,{variant:"btn btn-success"},"More")),r.a.createElement(E.a,{onClick:function(){return e.handleDelete(t)},variant:"btn btn-success"},"Remove from training"))))})):r.a.createElement("p",null,"Loading ... ")):r.a.createElement("p",null,"Sign in ",r.a.createElement(d.b,{to:"/login"},"here")))}}]),a}(r.a.Component),J=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={training:""},e.handleNameChange=function(t){var a=JSON.parse(JSON.stringify(e.state.training));a.name=t.currentTarget.value,e.setState({training:a})},e.handleDescChange=function(t){var a=JSON.parse(JSON.stringify(e.state.training));a.description=t.currentTarget.value,e.setState({training:a})},e.handleDurationChange=function(t){var a=JSON.parse(JSON.stringify(e.state.training));a.duration=t.currentTarget.value,e.setState({training:a})},e.handleNotesChange=function(t){var a=JSON.parse(JSON.stringify(e.state.training));a.notes=t.currentTarget.value,e.setState({training:a})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;g.a.get("".concat(u,"/trainings/").concat(t),{withCredentials:!0}).then((function(t){e.setState({training:t.data})}))}},{key:"render",value:function(){var e=this,t=this.state.training,n=t.name,l=t.duration,i=t.description,c=t.notes;return r.a.createElement("div",{className:"form-page"},r.a.createElement("form",null,r.a.createElement("h1",null,"Change that training!"),r.a.createElement("div",{className:"form-field"},r.a.createElement("p",null,"New name?"),r.a.createElement("input",{onChange:this.handleNameChange,name:"name",type:"text",placeholder:"Enter Name",value:n})),r.a.createElement("div",{className:"form-field"},r.a.createElement("p",null,"What's the description?"),r.a.createElement("input",{onChange:this.handleDescChange,name:"description",type:"text",value:i,placeholder:"Enter Description"})),r.a.createElement("div",{className:"form-field"},r.a.createElement("p",null,"How long it this training?"),r.a.createElement("input",{onChange:this.handleDurationChange,name:"duration",type:"text",value:l,placeholder:"Enter duration"})),r.a.createElement("div",{className:"form-field"},r.a.createElement("p",null,"Add some notes"),r.a.createElement("input",{onChange:this.handleNotesChange,name:"notes",type:"text",value:c,placeholder:"Enter notes"})),r.a.createElement(E.a,{onClick:function(){return e.props.onTrainingEdit(e.state.training)},variant:"btn btn-success btn-create",type:"submit"},"Edit")),r.a.createElement("div",{className:"form-image"},r.a.createElement("img",{src:a(20),alt:"festive pineapple"})))}}]),n}(n.Component),G=a(8),_=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={games:[],trainings:[],loggedInUser:null},e.handleSignUp=function(t){t.preventDefault();var a=t.currentTarget,n=a.username,r=a.email,l=a.password;g.a.post("".concat(u,"/signup"),{username:n.value,email:r.value,password:l.value},{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data},(function(){e.props.history.push("/games")}))}))},e.handleSignIn=function(t){t.preventDefault();var a=t.currentTarget,n=a.email,r=a.password;g.a.post("".concat(u,"/login"),{email:n.value,password:r.value},{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data},(function(){e.props.history.push("/games")}))}))},e.handleLogOut=function(t){g.a.get("".concat(u,"/logout"),{withCredentials:!0}).then((function(){e.setState({loggedInUser:null},(function(){e.props.history.push("/login")}))}))},e.handleGameSubmit=function(t,a){t.preventDefault();var n=a.category,r=a.name,l=a.description,i=a.purpose,c=a.credit,s=a.video;g.a.post("".concat(u,"/games/create"),{category:n,name:r,description:l,purpose:i,credit:c,video:s},{withCredentials:!0}).then((function(t){var a=t.data;console.log(t.data);var n=JSON.parse(JSON.stringify(e.state.games));n.unshift(a),e.setState({games:n},(function(){e.props.history.push("/games")}))}))},e.handleTrainingSubmit=function(t,a){t.preventDefault();var n=a.name,r=a.description,l=a.duration,i=a.notes;g.a.post("".concat(u,"/trainings/create"),{name:n,description:r,duration:l,notes:i},{withCredentials:!0}).then((function(t){var a=t.data,n=JSON.parse(JSON.stringify(e.state.trainings));n.unshift(a),e.setState({trainings:n},(function(){e.props.history.push("/trainings")}))}))},e.handleGameDelete=function(t){g.a.delete("".concat(u,"/games/").concat(t),{withCredentials:!0}).then((function(){var a=e.state.games.filter((function(e){return e._id!==t}));e.setState({games:a},(function(){e.props.history.push("/games")}))}))},e.handleTrainingDelete=function(t){g.a.delete("".concat(u,"/trainings/").concat(t),{withCredentials:!0}).then((function(){var a=e.state.trainings.filter((function(e){return e._id!==t}));e.setState({trainings:a},(function(){e.props.history.push("/trainings")}))}))},e.handleGameEdit=function(t){g.a.patch("".concat(u,"/games/").concat(t._id),{category:t.category,name:t.name,description:t.description,purpose:t.purpose,credit:t.credit,video:t.video},{withCredentials:!0}).then((function(){var a=e.state.games.map((function(e){return e._id===t._id&&(e=t),e}));e.setState({games:a},(function(){e.props.history.push("/games")}))}))},e.handleTrainingEdit=function(t){g.a.patch("".concat(u,"/trainings/").concat(t._id),{name:t.name,description:t.description,duration:t.duration,notes:t.notes},{withCredentials:!0}).then((function(){var a=e.state.trainings.map((function(e){return e._id===t._id&&(e=t),e}));e.setState({trainings:a},(function(){e.props.history.push("/trainings")}))}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat(u,"/games"),{withCredentials:!0}).then((function(t){e.setState({games:t.data})})),g.a.get("".concat(u,"/trainings"),{withCredentials:!0}).then((function(t){e.setState({trainings:t.data})})),this.state.loggedInUser||g.a.get("".concat(u,"/user"),{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"body"},"/signup"!==this.props.location.pathname&&"/login"!==this.props.location.pathname&&"/"!==this.props.location.pathname?r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{loggedInUser:this.state.loggedInUser,onLogout:this.handleLogOut}),r.a.createElement("img",{className:"header-image",src:a(80),alt:"row of pineapples"})):null,r.a.createElement(G.c,null,r.a.createElement(G.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(f,e)}}),r.a.createElement(G.a,{path:"/login",render:function(t){return r.a.createElement(f,Object.assign({onSignIn:e.handleSignIn},t))}}),r.a.createElement(G.a,{path:"/signup",render:function(t){return r.a.createElement(v,Object.assign({onSignUp:e.handleSignUp},t))}}),r.a.createElement(G.a,{exact:!0,path:"/games",render:function(t){return r.a.createElement(O,Object.assign({loggedInUser:e.state.loggedInUser},t))}}),r.a.createElement(G.a,{exact:!0,path:"/games/create",render:function(t){return r.a.createElement(w,Object.assign({loggedInUser:e.state.loggedInUser,onSubmit:e.handleGameSubmit},t))}}),r.a.createElement(G.a,{exact:!0,path:"/games/:id",render:function(t){return r.a.createElement(j,Object.assign({loggedInUser:e.state.loggedInUser,onGameDelete:e.handleGameDelete},t))}}),r.a.createElement(G.a,{path:"/games/:id/edit",render:function(t){return r.a.createElement(I,Object.assign({onGameEdit:e.handleGameEdit,loggedInUser:e.state.loggedInUser},t))}}),r.a.createElement(G.a,{exact:!0,path:"/trainings",render:function(t){return r.a.createElement(U,Object.assign({loggedInUser:e.state.loggedInUser},t))}}),r.a.createElement(G.a,{path:"/trainings/create",render:function(t){return r.a.createElement(D,Object.assign({loggedInUser:e.state.loggedInUser,onSubmit:e.handleTrainingSubmit},t))}}),r.a.createElement(G.a,{exact:!0,path:"/trainings/:id",render:function(t){return r.a.createElement(T,Object.assign({loggedInUser:e.state.loggedInUser,onTrainingDelete:e.handleTrainingDelete},t))}}),r.a.createElement(G.a,{path:"/trainings/:id/edit",render:function(t){return r.a.createElement(J,Object.assign({onTrainingEdit:e.handleTrainingEdit,loggedInUser:e.state.loggedInUser},t))}})),this.props.children)}}]),n}(r.a.Component),P=Object(G.f)(_);i.a.render(r.a.createElement(d.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null))),document.getElementById("root"))}},[[45,13,14]]]);
//# sourceMappingURL=main.e34f92f9.chunk.js.map