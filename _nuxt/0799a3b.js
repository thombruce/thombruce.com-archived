(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{4645:function(e,n,t){var content=t(4661);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(49).default)("462a91d4",content,!0,{sourceMap:!1})},4659:function(e,n,t){(function(){"use strict";var n={title_page:/^((?:title|credit|author[s]?|source|notes|(?:draft )?date|contact(?: info)?|copyright|revision)\:)/gim,scene_heading:/^((?:\*{0,3}_?)?(?:(?:int|ext|est|i\/e)[. ]).+)|^(?:\.(?!\.+))(.+)/i,scene_number:/( *#(.+)# *)/,transition:/^((?:FADE (?:TO BLACK|OUT)|CUT TO BLACK)\.|.+ TO\:)|^(?:> *)(.+)/,dialogue:/^([A-Z*_]+[0-9A-Z (._\-')]*)(\^?)?(?:\n(?!\n+))([\s\S]+)/,parenthetical:/^(\(.+\))$/,action:/^(.+)/g,centered:/^(?:> *)(.+)(?: *<)(\n.+)*/g,section:/^(#+)(?: *)(.*)/,synopsis:/^(?:\=(?!\=+) *)(.*)/,note:/^(?:\[{2}(?!\[+))(.+)(?:\]{2}(?!\[+))$/,note_inline:/(?:\[{2}(?!\[+))([\s\S]+?)(?:\]{2}(?!\[+))/g,boneyard:/(^\/\*|^\*\/)$/g,page_break:/^\={3,}$/,line_break:/^ {2}$/,emphasis:/(_|\*{1,3}|_\*{1,3}|\*{1,3}_)(.+)(_|\*{1,3}|_\*{1,3}|\*{1,3}_)/g,bold_italic_underline:/(_{1}\*{3}(?=.+\*{3}_{1})|\*{3}_{1}(?=.+_{1}\*{3}))(.+?)(\*{3}_{1}|_{1}\*{3})/g,bold_underline:/(_{1}\*{2}(?=.+\*{2}_{1})|\*{2}_{1}(?=.+_{1}\*{2}))(.+?)(\*{2}_{1}|_{1}\*{2})/g,italic_underline:/(?:_{1}\*{1}(?=.+\*{1}_{1})|\*{1}_{1}(?=.+_{1}\*{1}))(.+?)(\*{1}_{1}|_{1}\*{1})/g,bold_italic:/(\*{3}(?=.+\*{3}))(.+?)(\*{3})/g,bold:/(\*{2}(?=.+\*{2}))(.+?)(\*{2})/g,italic:/(\*{1}(?=.+\*{1}))(.+?)(\*{1})/g,underline:/(_{1}(?=.+_{1}))(.+?)(_{1})/g,splitter:/\n{2,}/g,cleaner:/^\n+|\n+$/,standardizer:/\r\n|\r/g,whitespacer:/^\t+|^ {3,}/gm},t=function(script){for(var line,e,t,text,meta,r,l,c,o=function(script){return script.replace(n.boneyard,"\n$1\n").replace(n.standardizer,"\n").replace(n.cleaner,"").replace(n.whitespacer,"")}(script).split(n.splitter),i=o.length,d=[];i--;)if(line=o[i],n.title_page.test(line))for(r=0,l=(e=line.replace(n.title_page,"\n$1").split(n.splitter).reverse()).length;r<l;r++)t=e[r].replace(n.cleaner,"").split(/\:\n*/),d.push({type:t[0].trim().toLowerCase().replace(" ","_"),text:t[1].trim()});else if(e=line.match(n.scene_heading))(text=e[1]||e[2]).indexOf("  ")!==text.length-2&&((meta=text.match(n.scene_number))&&(meta=meta[2],text=text.replace(n.scene_number,"")),d.push({type:"scene_heading",text:text,scene_number:meta||void 0}));else if(e=line.match(n.centered))d.push({type:"centered",text:e[0].replace(/>|</g,"")});else if(e=line.match(n.transition))d.push({type:"transition",text:e[1]||e[2]});else if((e=line.match(n.dialogue))&&e[1].indexOf("  ")!==e[1].length-2){for(e[2]&&d.push({type:"dual_dialogue_end"}),d.push({type:"dialogue_end"}),r=0,l=(t=e[3].split(/(\(.+\))(?:\n+)/).reverse()).length;r<l;r++)(text=t[r]).length>0&&d.push({type:n.parenthetical.test(text)?"parenthetical":"dialogue",text:text});d.push({type:"character",text:e[1].trim()}),d.push({type:"dialogue_begin",dual:e[2]?"right":c?"left":void 0}),c&&d.push({type:"dual_dialogue_begin"}),c=!!e[2]}else(e=line.match(n.section))?d.push({type:"section",text:e[2],depth:e[1].length}):(e=line.match(n.synopsis))?d.push({type:"synopsis",text:e[1]}):(e=line.match(n.note))?d.push({type:"note",text:e[1]}):(e=line.match(n.boneyard))?d.push({type:"/"===e[0][0]?"boneyard_begin":"boneyard_end"}):n.page_break.test(line)?d.push({type:"page_break"}):n.line_break.test(line)?d.push({type:"line_break"}):d.push({type:"action",text:line});return d},r={note:"\x3c!-- $1 --\x3e",line_break:"<br />",bold_italic_underline:'<span class="bold italic underline">$2</span>',bold_underline:'<span class="bold underline">$2</span>',italic_underline:'<span class="italic underline">$2</span>',bold_italic:'<span class="bold italic">$2</span>',bold:'<span class="bold">$2</span>',italic:'<span class="italic">$2</span>',underline:'<span class="underline">$2</span>',lexer:function(s){if(s){var style,e,t=["underline","italic","bold","bold_italic","italic_underline","bold_underline","bold_italic_underline"],i=t.length;for(s=s.replace(n.note_inline,r.note).replace(/\\\*/g,"[star]").replace(/\\_/g,"[underline]").replace(/\n/g,r.line_break);i--;)(e=n[style=t[i]]).test(s)&&(s=s.replace(e,r[style]));return s.replace(/\[star\]/g,"*").replace(/\[underline\]/g,"_").trim()}}},l=function(script,e){return l.parse(script,e)};l.parse=function(script,e,n){return function(script,e,n){void 0===n&&"function"==typeof e&&(n=e,e=void 0);for(var l,title,c,o,source,d,h,m,_,y,output,f=t(script),i=f.length,x=[],html=[];i--;)switch((l=f[i]).text=r.lexer(l.text),l.type){case"title":x.push("<h1>"+l.text+"</h1>"),title=l.text.replace("<br />"," ").replace(/<(?:.|\n)*?>/g,"");break;case"credit":x.push('<p class="credit">'+l.text+"</p>"),c=l.text.replace("<br />"," ").replace(/<(?:.|\n)*?>/g,"");break;case"author":case"authors":x.push('<p class="authors">'+l.text+"</p>"),o=l.text.replace("<br />"," ").replace(/<(?:.|\n)*?>/g,"");break;case"source":x.push('<p class="source">'+l.text+"</p>"),source=l.text.replace("<br />"," ").replace(/<(?:.|\n)*?>/g,"");break;case"notes":x.push('<p class="notes">'+l.text+"</p>"),d=l.text.replace("<br />"," ").replace(/<(?:.|\n)*?>/g,"");break;case"draft_date":case"date":x.push('<p class="draft-date">'+l.text+"</p>"),h=l.text.replace("<br />"," ").replace(/<(?:.|\n)*?>/g,"");break;case"contact":case"contact_info":x.push('<p class="contact">'+l.text+"</p>"),m=l.text.replace("<br />"," ").replace(/<(?:.|\n)*?>/g,"");break;case"copyright":x.push('<p class="copyright">'+l.text+"</p>"),_=l.text.replace("<br />"," ").replace(/<(?:.|\n)*?>/g,"");break;case"revision":x.push('<p class="revision">'+l.text+"</p>"),y=l.text.replace("<br />"," ").replace(/<(?:.|\n)*?>/g,"");break;case"scene_heading":html.push("<h3"+(l.scene_number?' id="'+l.scene_number+'">':">")+l.text+"</h3>");break;case"transition":html.push("<h2>"+l.text+"</h2>");break;case"dual_dialogue_begin":html.push('<div class="dual-dialogue">');break;case"dialogue_begin":html.push('<div class="dialogue'+(l.dual?" "+l.dual:"")+'">');break;case"character":html.push("<h4>"+l.text+"</h4>");break;case"parenthetical":html.push('<p class="parenthetical">'+l.text+"</p>");break;case"dialogue":html.push("<p>"+l.text+"</p>");break;case"dialogue_end":case"dual_dialogue_end":html.push("</div> ");break;case"section":html.push('<p class="section" data-depth="'+l.depth+'">'+l.text+"</p>");break;case"synopsis":html.push('<p class="synopsis">'+l.text+"</p>");break;case"note":html.push("\x3c!-- "+l.text+"--\x3e");break;case"boneyard_begin":html.push("\x3c!-- ");break;case"boneyard_end":html.push(" --\x3e");break;case"action":html.push("<p>"+l.text+"</p>");break;case"centered":html.push('<p class="centered">'+l.text+"</p>");break;case"page_break":html.push("<hr />");break;case"line_break":html.push("<br />")}return output={title:title,credit:c,author:o,authors:o,source:source,notes:d,draft_date:h,date:h,contact:m,contact_info:m,copyright:_,revision:y,html:{title_page:x.join(""),script:html.join("")},tokens:e?f.reverse():void 0},"function"==typeof n?n(output):output}(script,e,n)},e.exports=l}).call(this)},4660:function(e,n,t){"use strict";t(4645)},4661:function(e,n,t){var r=t(48)((function(i){return i[1]}));r.push([e.i,'.screenplay{\n  font-family:"Courier Prime","Courier New",Courier,monospace;\n  font-size:12pt;\n  line-height:1;\n  max-width:6in;\n  margin:1em auto;\n  -webkit-text-size-adjust:none\n}\n.screenplay h1,.screenplay h2,.screenplay h3,.screenplay h4,.screenplay h5,.screenplay h6{\n  font-weight:700;\n  font-size:inherit\n}\n.screenplay a{\n  color:inherit;\n  text-decoration:none\n}\n.screenplay .underline{\n  text-decoration:underline\n}\n.screenplay .title-page{\n  text-align:center;\n  margin:5em auto\n}\n.screenplay .title-page h1{\n  text-transform:uppercase;\n  text-decoration:underline;\n  margin-bottom:2.5em\n}\n.screenplay .title-page .credit{\n  margin-bottom:1.5em\n}\n.screenplay .title-page .authors{\n  margin-bottom:4em\n}\n.screenplay .title-page .draft-date{\n  text-align:right;\n  margin-bottom:.5em\n}\n.screenplay .title-page .revision{\n  text-align:right;\n  margin-bottom:0\n}\n.screenplay .section-heading{\n  text-align:center\n}\n.screenplay .section-heading:hover{\n  background-color:#ffffe0\n}\n.screenplay .scene{\n  margin-top:2em\n}\n.screenplay .scene-heading{\n  margin-bottom:0\n}\n.screenplay .scene-heading:hover{\n  background-color:#ffffe0\n}\n.screenplay .action{\n  margin:1em 0\n}\n.screenplay .dialogue{\n  width:75%;\n  max-width:4in;\n  margin-top:1em;\n  margin-bottom:1em;\n  margin-left:17%\n}\n.screenplay .dialogue h4{\n  margin-top:0;\n  margin-bottom:0;\n  margin-left:25%\n}\n.screenplay .dialogue .lines{\n  max-width:3.5in;\n  margin-top:0;\n  margin-bottom:0\n}\n.screenplay .dialogue .parenthetical{\n  max-width:2in;\n  margin-top:0;\n  margin-bottom:0;\n  margin-left:15%;\n  text-indent:-.6em;\n  page-break-inside:avoid;\n  page-break-after:avoid\n}\n.screenplay .dual-dialogue{\n  width:100%;\n  margin:1em 0\n}\n.screenplay .dual-dialogue .dialogue{\n  max-width:50%;\n  margin-top:0;\n  margin-left:0;\n  margin-right:0;\n  float:left;\n  clear:none\n}\n.screenplay .dual-dialogue .dialogue .lines{\n  width:95%\n}\n.screenplay .trans{\n  max-width:2in;\n  margin-left:63%;\n  clear:both;\n  page-break-before:avoid\n}\n.screenplay .note{\n  display:block;\n  font-size:11pt;\n  font-family:"Comic Sans MS","Marker Felt","sans-serif";\n  line-height:1.5;\n  background-color:#fafad2;\n  padding:1em\n}\n.screenplay .synopsis{\n  margin-top:0;\n  color:grey;\n  font-style:italic\n}\n.screenplay .center{\n  text-align:center;\n  white-space:pre-wrap\n}',""]),r.locals={},e.exports=r},4703:function(e,n,t){"use strict";t.r(n);var r=t(122),l=t(21),c=(t(44),t(58),t(77),t(38),t(50),t(4659)),o=t.n(c).a,d=function e(n){return n.map((function(n){return n.children?e(n.children):n.text})).join("\n").replace(/^\s+|\s+$/g,"")},h={props:{screenplay:[Object,String],title:{type:Boolean,default:!1}},computed:{document:function(){return this.$slots.default?o.parse(d(this.$slots.default)):"string"==typeof this.screenplay?o.parse(this.screenplay):!("object"!==Object(l.a)(this.screenplay)||!this.screenplay.html||!this.screenplay.html.script)&&this.screenplay}},render:function(e){if(this.document){var n=e("header",{attrs:{class:"title-page"},domProps:{innerHTML:this.document.html.title_page}}),script=e("div",{attrs:{class:"script"},domProps:{innerHTML:this.document.html.script}});return e("article",{attrs:{class:"screenplay"}},[].concat(Object(r.a)(this.title?[n]:[]),[script]))}return e("article",{attrs:{class:"screenplay"}})}},m=(t(4660),t(9)),component=Object(m.a)(h,undefined,undefined,!1,null,null,null);n.default=component.exports}}]);