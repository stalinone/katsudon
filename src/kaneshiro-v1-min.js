(function(c){function q(a){var b,d;b=!0==c.isArray(a.image)?a.image[Math.floor(Math.random()*a.image.length)]:a.image;d="left"==a.enter_from?"right":"left";b='<div id="sliderole_container" style="width:'+a.width+"px; height:"+a.height+"px; "+a.enter_from+":-"+a.width+"px; bottom:"+a.enter_bottom+'px;"><img src="'+b+'" style="width:'+a.width+"px; height:"+a.height+'px;"><div id="talk_popup" style="'+a.enter_from+":"+a.popup_x/100*a.width+"px;top:"+a.popup_y/100*a.height+"px;-webkit-border-radius:"+
a.popup_radius+";-moz-border-radius:"+a.popup_radius+";border-radius:"+a.popup_radius+";background-color:"+a.popup_bgcolor+'"><div id="role_says" style="color:'+a.popup_color+'">'+a.default_text+'</div><div id="talk_popup_arrow_shadow" style="border-'+d+": 40px solid rgba(0,0,0,.1);"+a.enter_from+': -40px;"></div><div id="talk_popup_arrow" style="border-'+d+": 42px solid "+a.popup_bgcolor+";"+a.enter_from+': -40px;"></div><div id="close_popup">X</div></div></div>';c("body").append(b);n(a)}function n(a){var b,
d,f,e,g;b=!0==c.isArray(a.talks)?a.talks[Math.floor(Math.random()*a.talks.length)]:a.talks;if(!0==c.isArray(a.links))f=a.links[Math.floor(Math.random()*a.links.length)],g=f[0],e=f[1],d='<p id="role_say_hi" style="color:'+a.popup_color+'">'+a.default_text+"</p>"+b+'<a href="'+e+'" target="_blank" id="talk_popup_readmore" style="color:'+a.readmore_color+'">'+g+"</a></p>",c("#role_says").scrollTop(0).html(d);else{var m,h;switch(a.links){case "www.npochannel.net":e="http://www.npochannel.net/donate_list.php?page=1&ReachType=1&ShowType=2&ProjNum=9999";
c.ajax("http://query.yahooapis.com/v1/public/yql",{type:"get",data:{q:"use 'http://www.datatables.org/data/htmlstring.xml' as htmlstring; select * from htmlstring where url='"+e+"'",format:"json"},dataType:"json",success:function(g){g=g.query.results.result.match(/<div\s+class="left_content_start03_title">[\S\s]*?<\/div>/gi);f=g[Math.floor(Math.random()*g.length)];f=f.replace('<div class="left_content_start03_title">',"").replace("</div>","").replace("donate_detail","http://www.npochannel.net/donate_detail").replace('">',
'" target="_blank" id="talk_popup_readmore" style="color:'+a.readmore_color+'">');d='<p id="role_say_hi" style="color:'+a.popup_color+'">'+a.default_text+"</p>"+b+f+"</p>";c("#role_says").scrollTop(0).html(d)}});break;case "www.npo.org.tw":m=6631;h=" - \u53f0\u7063\u516c\u76ca\u8cc7\u8a0a\u4e2d\u5fc3";e="http://www.npo.org.tw/npolist_detail.asp?id="+Math.floor(Math.random()*m);c.ajax("http://query.yahooapis.com/v1/public/yql",{type:"get",data:{q:"use 'http://www.datatables.org/data/htmlstring.xml' as htmlstring; select * from htmlstring where url='"+
e+"'",format:"json"},dataType:"json",success:function(f){g=f.query.results.result.match(/<\s*title\s*>([^<]*)<\/title>/)[1];g=g.replace(h,"");d='<p id="role_say_hi" style="color:'+a.popup_color+'">'+a.default_text+"</p>"+b+'<a href="'+e+'" target="_blank" id="talk_popup_readmore" style="color:'+a.readmore_color+'">'+g+"</a></p>";c("#role_says").scrollTop(0).html(d)}});break;case "www.twnpos.org.tw":m=212,h=" | \u806f\u76df\u6210\u54e1 | \u53f0\u7063\u516c\u76ca\u5718\u9ad4\u81ea\u5f8b\u806f\u76df",
e="http://www.twnpos.org.tw/team/team_detail.php?Key="+Math.floor(Math.random()*m),c.ajax("http://query.yahooapis.com/v1/public/yql",{type:"get",data:{q:"use 'http://www.datatables.org/data/htmlstring.xml' as htmlstring; select * from htmlstring where url='"+e+"'",format:"json"},dataType:"json",success:function(f){g=f.query.results.result.match(/<\s*title\s*>([^<]*)<\/title>/)[1];g=g.replace(h,"");d='<p id="role_say_hi" style="color:'+a.popup_color+'">'+a.default_text+"</p>"+b+'<a href="'+e+'" target="_blank" id="talk_popup_readmore" style="color:'+
a.readmore_color+'">'+g+"</a></p>";c("#role_says").scrollTop(0).html(d)}})}}}function l(a){switch(a){case "fade":c("#talk_popup").fadeIn("slow");break;case "slide":c("#talk_popup_readmore").hide(function(){c("#talk_popup").slideDown("fast",function(){c("#talk_popup_readmore").fadeIn()})});break;case "zoom":c("#role_says").hide(function(){c("#talk_popup").show("slow",function(){c("#role_says").fadeIn()})});break;default:c("#talk_popup").show()}}c.kaneshiro=function(a){var b=c.extend({image:"http://goooooooogle.github.io/kaneshiro/img/kaneshiro.png",
talks:"\u5e0c\u671b\u6240\u6709\u770b\u5230\u6211\u6ed1\u51fa\u4f86\u7684\u4eba\uff0c\u81ea\u767c\u6027\u7684\u53bb\u505a\u4e00\u4ef6\u95dc\u611b\u9019\u500b\u793e\u6703\u7684\u4e8b\u60c5<br>\u4e0d\u9700\u8981\u88ab\u6311\u6230",links:"www.npochannel.net",height:510,width:400,effect:"default",popup_x:90,popup_y:5,popup_effect:"fade",popup_radius:"8px",popup_color:"black",popup_bgcolor:"beige",readmore_color:"brown",comein_position:80,default_text:"\u4f60\u597d\uff0c\u6211\u662f\u91d1\u57ce\u6b66",
enter_from:"left",enter_distance:-40,enter_bottom:-10},a);q(b);var d=c("#sliderole_container");a=c("#sliderole_container img");var f=c("#talk_popup"),e=c("#close_popup");c(window).scroll(function(){var a=c(window).scrollTop(),e=c(window).height(),h=c(document).height(),k={},p={};k[b.enter_from]=b.enter_distance+"px";p[b.enter_from]="-"+b.width+"px";if(a+e>b.comein_position/100*h){if(d.css(b.enter_from)=="-"+b.width+"px")switch(b.effect){case "fast":d.animate(k,100,function(){l(b.popup_effect)});break;
case "slow":d.animate(k,1E3,function(){l(b.popup_effect)});break;case "veryslow":d.animate(k,1E4,function(){l(b.popup_effect)});break;case "jump":d.css("bottom","-"+b.height+"px").css(b.enter_from,b.enter_distance);d.animate({bottom:0},300).animate({bottom:"-10px"},50).animate({bottom:0},50).animate({bottom:"-10px"},50).animate({bottom:b.enter_bottom},300,function(){l(b.popup_effect)});break;case "sneaky":a={};e={};h={};a[b.enter_from]="-"+.54*b.width+"px";e[b.enter_from]="-"+.6*b.width+"px";h[b.enter_from]=
"-"+.7*b.width+"px";d.animate(a,2E3).delay(2E3).animate(e,1E3).delay(1E3).animate(a,1E3).delay(2E3).animate(h,2E3).delay(1E3).animate(k,3E3,function(){l(b.popup_effect)});break;default:d.animate(k,500,function(){l(b.popup_effect)})}}else d.css(b.enter_from)==b.enter_distance+"px"&&(f.hide(),d.animate(p,100),n(b))});a.click(function(){var a={};a[b.enter_from]="-"+(b.width+10)+"px";f.hide();d.animate(a,100)});e.click(function(){f.hide();n(b)})}})(jQuery);