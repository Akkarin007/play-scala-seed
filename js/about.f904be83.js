(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0c18":function(e,t,r){},7277:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("game-dashboard")},a=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"2"}},[r("house")],1),r("v-col",{attrs:{cols:"20",sm:"8"}},[r("board")],1),r("v-col",{attrs:{cols:"12",sm:"2"}},[r("garage")],1)],1)],1)},i=[],o=r("2b0e"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-sheet",{attrs:{rounded:"lg","min-height":"200px"}},[r("v-list-item",{attrs:{"two-line":""}},[r("v-list-item-content",[r("v-list-item-title",[e._v("CurrentPlayer: P"+e._s(e.currentPlayer))]),r("v-list-item-subtitle",[e._v(e._s(e.currentPlayerHouse)+" Pieces Left to Play!")]),e._l(e.inHouseChanged,(function(t){return r("v-row",{key:t.name,staticClass:"ma-2",attrs:{cols:"12",sm:"8"}},[r("v-list-item-subtitle",[e._v(e._s(t.name))]),e._l(t.house,(function(e){return r("img",{key:e.id,attrs:{src:e.image,loading:"lazy",width:"50",height:"50"}})}))],2)}))],2)],1)],1)],1)},c=[],d=r("1c30"),u=o["a"].extend({name:"House",data:function(){return{board:d["a"].board}},computed:{currentPlayerHouse:function(){return d["a"].board.players[d["a"].board.currentPlayer].house.length},currentPlayer:function(){return d["a"].board.currentPlayer+1},inHouseChanged:function(){return d["h"].inHouse}}}),m=u,h=r("2877"),f=r("6544"),p=r.n(f),b=r("a523"),v=r("da13"),g=r("5d23"),y=r("0fd9"),C=r("8dd9"),_=Object(h["a"])(m,l,c,!1,null,null,null),x=_.exports;p()(_,{VContainer:b["a"],VListItem:v["a"],VListItemContent:g["a"],VListItemSubtitle:g["b"],VListItemTitle:g["c"],VRow:y["a"],VSheet:C["a"]});var I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-sheet",{attrs:{rounded:"lg","min-height":"200"}},[r("v-list-item",{attrs:{"two-line":""}},[r("v-list-item-content",[r("v-list-item-title",[e._v("Players Garage ")]),e._l(e.garageChanged,(function(t){return r("v-row",{key:t.name,staticClass:"ma-2",attrs:{cols:"12",sm:"8"}},[r("v-list-item-subtitle",[e._v(e._s(t.name))]),e._l(t.garage,(function(e){return r("img",{key:e.id,attrs:{src:e.image,loading:"lazy",width:"50",height:"50"}})}))],2)})),r("v-btn",{staticClass:"ma-3 justify-center",attrs:{small:"",dark:""},on:{click:function(t){return e.endGame()}}},[e._v(" end game ")])],2)],1)],1)],1)},S=[],w=r("244f"),j=o["a"].extend({name:"Garage",computed:{garageChanged:function(){return d["e"].garage}},methods:{endGame:function(){var e=Object(d["g"])();if(console.log(e),e){var t=JSON.stringify({type:"endGame",lobbyID:e}),r=JSON.stringify({type:"leaveLobby",lobbyID:e,playerName:Object(d["f"])()});Object(w["b"])().send(r),Object(w["b"])().send(t),console.log(t),console.log(r),Object(d["l"])(),this.$router.replace({name:"InitGame"})}}}}),O=j,V=r("8336"),N=Object(h["a"])(O,I,S,!1,null,null,null),$=N.exports;p()(N,{VBtn:V["a"],VContainer:b["a"],VListItem:v["a"],VListItemContent:g["a"],VListItemSubtitle:g["b"],VListItemTitle:g["c"],VRow:y["a"],VSheet:C["a"]});var B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-sheet",{staticClass:"justify-center",attrs:{rounded:"lg",color:"grey lighten-3"}},[r("div",{staticClass:"ma-2 d-flex overflow-auto justify-center"},[r("h1",[e._v(e._s(e.getUser))])]),r("current-game-board"),r("v-row",{staticClass:"ma-2 justify-center",attrs:{cols:"12",sm:"8"}},[r("v-divider")],1),r("v-row",{staticClass:"ma-2 justify-center",attrs:{cols:"12",sm:"8"}},[r("v-alert",{staticClass:"ma-1",attrs:{color:e.getTurnColor,dense:"",text:"",type:e.getTurnStatus}},[e._v(e._s(e.isYourTurn))])],1),r("v-row",{staticClass:"ma-2 justify-center",attrs:{cols:"12",sm:"8"}},[r("v-divider")],1),r("current-cards-field")],1)],1)},k=[],P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{staticClass:"ma-2 justify-center",attrs:{cols:"12",sm:"8"}},e._l(e.fieldChanged,(function(e){return r("div",{key:"field"+e.pos},[r("field",{attrs:{fieldIndex:e.pos,fieldImage:e.image,color:e.color,pieceIdx:e.pieceIdx,playerIdx:e.playerIdx}})],1)})),0)],1)},E=[],D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-btn",{staticClass:"ma-2",attrs:{fab:"",small:""},on:{click:function(t){return e.selectPiece()}}},[r("img",{style:{backgroundColor:e.selected,"border-radius":"2em"},attrs:{id:"field"+e.fieldIndex,src:e.fieldImage,loading:"lazy",width:"50",height:"50"}})])],1)},T=[],L=[],G=o["a"].observable({selectedState:L});function A(e,t,r){var n,a=Object(d["g"])();n=L.length>0?JSON.stringify({type:"request",lobbyID:a,cardNum:e.toString(),cardOption:t.toString(),pieceNum:L[0].piece}):JSON.stringify({type:"request",lobbyID:a,cardNum:e.toString(),cardOption:t.toString(),pieceNum:0}),Object(w["b"])().send(n),H()}function H(){G.selectedState=[],L=[]}function J(e,t){if(console.log(e,L.length),2==L.length)H();else if(!L.find((function(e){return e.fieldIdx===t})))if(1==e[0]&&0===L.length||0==e[0]&&1===L.length){console.log("I AM IND");var r=R(e,t);L.push(r),G.selectedState=L}else H(),alert("invalid selection!")}function R(e,t){return{fieldIdx:t,selectedPiece:parseInt(e[1]),piece:parseInt(e[1]),playerIdx:parseInt(e[2])}}function Y(e){var t=Object(d["g"])();if(2==G.selectedState.length){var r=JSON.stringify({type:"swap",lobbyID:t,cardNum:e.toString(),otherPlayer:G.selectedState[1].playerIdx,pieceNum1:G.selectedState[0].piece,pieceNum2:G.selectedState[1].piece});console.log("SENNNDDD",r),Object(w["b"])().send(r)}H()}var z=o["a"].extend({name:"field",props:{fieldIndex:Number,pieceIdx:Number,fieldImage:String,color:String,playerIdx:Number},data:function(){return{style:"transparent"}},computed:{currentPlayer:function(){return d["a"].board.currentPlayer},selected:function(){var e=this;G.selectedState.forEach((function(t){e.fieldIndex===t.fieldIdx&&"white"}));var t=Object(d["c"])(this.fieldIndex);return t}},methods:{selectPiece:function(){if(""!=this.color){var e=this.playerIdx===this.currentPlayer;J([e,this.pieceIdx,this.playerIdx],this.fieldIndex)}}}}),F=z,W=Object(h["a"])(F,D,T,!1,null,null,null),q=W.exports;p()(W,{VBtn:V["a"]});var U=o["a"].extend({components:{Field:q},name:"CurrentGameBoard",computed:{fieldChanged:function(){return d["d"].field}}}),M=U,K=Object(h["a"])(M,P,E,!1,null,null,null),Q=K.exports;p()(K,{VContainer:b["a"],VRow:y["a"]});var X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("div",[r("v-sheet",{staticClass:"justify-center",attrs:{rounded:"lg"}},[r("div",{staticClass:"d-flex overflow-auto"},e._l(e.cardsChanged,(function(e,t){return r("div",{key:e.pos},[r("card-component",{attrs:{cardImage:e.image,cardIndex:t,cardSymbol:e.symbol}})],1)})),0)])],1)])},Z=[],ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"300",rounded:""}},[r("div",{staticClass:"justify-center d-flex"},[r("img",{attrs:{src:e.cardImage,height:"220px"}})]),r("div",{staticClass:"justify-center d-flex"},e._l(e.splitSymbol(),(function(t,n){return r("div",{key:"card"+e.cardIndex+"button"+n},["swapCard"!=t?r("button-normal",{staticClass:"ma-1",attrs:{btnIndex:n,cardNumIndex:e.cardIndex,btnSymbol:t,disabled:e.isYourTurn}}):e._e(),"swapCard"===t?r("button-swap",{staticClass:"ma-1",attrs:{cardNumIndex:e.cardIndex,btnSymbol:t,disabled:e.isYourTurn}}):e._e()],1)})),0)])],1)},te=[],re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-btn",{attrs:{small:"",dark:""},on:{click:function(t){return e.selectCardAndPiece()}}},[e._v(" "+e._s(e.btnSymbol)+" ")])},ne=[],ae=o["a"].extend({name:"btnNormal",props:{cardNumIndex:Number,btnIndex:Number,btnSymbol:String},data:function(){return{}},methods:{selectCardAndPiece:function(){A(this.cardNumIndex,this.btnIndex,0)}}}),se=ae,ie=Object(h["a"])(se,re,ne,!1,null,null,null),oe=ie.exports;p()(ie,{VBtn:V["a"]});var le=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-btn",{attrs:{small:"",dark:""},on:{click:function(t){return e.selectSwap()}}},[e._v(" "+e._s(e.btnSymbol)+" ")])},ce=[],de=o["a"].extend({name:"btnSwap",props:{cardNumIndex:Number,btnSymbol:String},data:function(){return{}},methods:{selectSwap:function(){Y(this.cardNumIndex)}}}),ue=de,me=Object(h["a"])(ue,le,ce,!1,null,null,null),he=me.exports;p()(me,{VBtn:V["a"]});var fe=o["a"].extend({components:{ButtonNormal:oe,ButtonSwap:he},name:"CardComponent",props:{cardImage:String,cardIndex:Number,cardSymbol:String},data:function(){return{}},computed:{isYourTurn:function(){return!Object(d["i"])()}},methods:{splitSymbol:function(){return this.cardSymbol.split(" ")}}}),pe=fe,be=r("b0af"),ve=Object(h["a"])(pe,ee,te,!1,null,null,null),ge=ve.exports;p()(ve,{VCard:be["a"],VContainer:b["a"]});var ye=o["a"].extend({components:{CardComponent:ge},name:"CurrentCardsField",computed:{cardsChanged:function(){return d["b"].cards}}}),Ce=ye,_e=Object(h["a"])(Ce,X,Z,!1,null,null,null),xe=_e.exports;p()(_e,{VContainer:b["a"],VSheet:C["a"]});var Ie=o["a"].extend({components:{CurrentGameBoard:Q,CurrentCardsField:xe},name:"Board",computed:{getUser:function(){return"Welcome to Lobby: "+Object(d["g"])()},getTurnColor:function(){return Object(d["i"])()?"green":"red"},getTurnStatus:function(){return Object(d["i"])()?"success":"warning"},isYourTurn:function(){return Object(d["i"])()?"its Your Turn!":"Please wait for your turn to come!"}}}),Se=Ie,we=(r("0c18"),r("10d2")),je=r("afdd"),Oe=r("9d26"),Ve=r("f2e7"),Ne=r("7560"),$e=o["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),Be=r("58df"),ke=r("d9bd"),Pe=Object(Be["a"])(we["a"],Ve["a"],$e).extend({name:"v-alert",props:{border:{type:String,validator(e){return["top","right","bottom","left"].includes(e)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(e){return"string"===typeof e||!1===e}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(e){return["info","error","success","warning"].includes(e)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let e={staticClass:"v-alert__border",class:{["v-alert__border--"+this.border]:!0}};return this.coloredBorder&&(e=this.setBackgroundColor(this.computedColor,e),e.class["v-alert__border--has-color"]=!0),this.$createElement("div",e)},__cachedDismissible(){if(!this.dismissible)return null;const e=this.iconColor;return this.$createElement(je["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(Oe["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(Oe["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const e={...we["a"].options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(e["v-alert--border-"+this.border]=!0),e},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$"+this.type)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||Ne["a"].options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(ke["a"])("outline","outlined",this)},methods:{genWrapper(){const e=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],t={staticClass:"v-alert__wrapper"};return this.$createElement("div",t,e)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let e={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const t=this.hasText?this.setTextColor:this.setBackgroundColor;e=t(this.computedColor,e)}return this.$createElement("div",e,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(e){const t=this.genAlert();return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[t]):t}}),Ee=r("ce7e"),De=Object(h["a"])(Se,B,k,!1,null,null,null),Te=De.exports;p()(De,{VAlert:Pe,VContainer:b["a"],VDivider:Ee["a"],VRow:y["a"],VSheet:C["a"]});var Le=o["a"].extend({components:{House:x,Garage:$,Board:Te},name:"GameDashboard"}),Ge=Le,Ae=r("62ad"),He=Object(h["a"])(Ge,s,i,!1,null,null,null),Je=He.exports;p()(He,{VCol:Ae["a"],VContainer:b["a"],VRow:y["a"]});var Re=o["a"].extend({name:"Dashboard",components:{GameDashboard:Je}}),Ye=Re,ze=Object(h["a"])(Ye,n,a,!1,null,null,null);t["default"]=ze.exports},f820:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-sheet",{attrs:{"min-height":"70vh",rounded:"lg"}},[r("div",{staticClass:".justify-start"},[e._v("test")])])],1)],1)],1)},a=[],s=r("2877"),i=r("6544"),o=r.n(i),l=r("62ad"),c=r("a523"),d=r("0fd9"),u=r("8dd9"),m={},h=Object(s["a"])(m,n,a,!1,null,null,null);t["default"]=h.exports;o()(h,{VCol:l["a"],VContainer:c["a"],VRow:d["a"],VSheet:u["a"]})}}]);
//# sourceMappingURL=about.f904be83.js.map