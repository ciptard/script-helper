function relatedposts(a){(function(e){var ea=a;var f={blogURL:"",rel_posts:5,maxTags:5,maxPostsPerTag:5,containerSelector:"#related-posts",tags:null,loadingText:"",loadingClass:"#relloading",relevantTip:"",rlt_summary:100,relatedTitle:ea.rel_title,rlpBlank:"http://2.bp.blogspot.com/-MZ2UNvioO2A/Up-XDjMGhWI/AAAAAAAABuo/7btg1OAL3FQ/s1600/no.png",rel_thumb:55,recentTitle:"Recent Posts",postScoreClass:"",onLoad:false};f=e.extend({},f,a);var k=0,b=null,g=null;if(!f.containerSelector){document.write('<div id="related-posts"></div>');f.containerSelector="#related-posts"}var c=function(t,n){k++;if(t.feed.entry){for(var o=0;o<t.feed.entry.length;o++){var r=t.feed.entry[o];var p="";for(var m=0;m<r.link.length;m++){if(r.link[m].rel=="alternate"){p=r.link[m].href;break}}if("content" in r){var l=r.content.$t}else{if("summary" in r){var l=r.summary.$t}else{var l=""}}var l=l.replace(/<\S[^>]*>/g,"");if(l.length>f.rlt_summary){var l=l.substring(0,f.rlt_summary)+"..."}var q=r.title.$t;if("media$thumbnail" in r){var s=r.media$thumbnail.url.replace(/\/s[0-9]+\-c/g,"/s"+f.rel_thumb+"-c")}else{var s=f.rlpBlank}if(location.href.toLowerCase()!=p.toLowerCase()){i(p,q,s,l)}}}if(k>=f.tags.length){g.attr("class","");e("#related-posts-loadingtext",b).remove();if(f.rel_posts>0){e("li:gt("+(f.rel_posts-1)+")",g).remove()}}};var i=function(p,s,u,l){var q=e("li",g);for(var o=0;o<q.length;o++){var t=e("a",q.eq(o));var r=j(t);if(t.attr("href")==p){h(t,++r);for(var n=o-1;n>=0;n--){var m=e("a",q.eq(n));if(j(m)>r){if(o-n>1){q.eq(n).after(q.eq(o))}return}}if(o>0){q.eq(0).before(q.eq(o))}return}}g.append('<li><a href="'+p+'" title="'+(f.relevantTip?f.relevantTip.replace("\d",1):"")+'"><img class="relimg" style="width:'+f.rel_thumb+"px;height:"+f.rel_thumb+'px;" alt="'+s+'" src="'+u+'"/><strong>'+s+"</strong></a><p>"+l+"</p></li>")};var j=function(l){var m=parseInt(l.attr("score"));return m>0?m:1};var h=function(l,m){l.attr("score",m);if(f.relevantTip){l.attr("title",f.relevantTip.replace("\d",m))}if(f.postScoreClass){l.attr("class",f.postScoreClass+m)}};var d=function(){if(f.containerSelector!="#related-posts"){var l=e(f.containerSelector);if(l.length!=1){return}b=e('<div id="related-posts"></div>').appendTo(l)}else{b=e(f.containerSelector)}if(!f.tags){f.tags=[];e('a[rel="tag"]:lt('+f.maxTags+")").each(function(){var n=e.trim(e(this).text().replace(/\n/g,""));if(e.inArray(n,f.tags)==-1){f.tags[f.tags.length]=n}})}if(f.tags.length==0&&!f.recentTitle){return}if(f.tags.length==0){e("<h2>"+f.recentTitle+"</h2>").appendTo(b)}else{if(f.relatedTitle){e("<h2>"+f.relatedTitle+"</h2>").appendTo(b)}}if(f.loadingText){e('<div id="related-posts-loadingtext">'+f.loadingText+"</div>").appendTo(b)}g=e("<ul "+(f.loadingClass?'class="'+f.loadingClass+'"':"")+"></ul>").appendTo(b);if(f.tags.length==0){e.get((f.blogURL===""?window.location.protocol+"//"+window.location.host:f.blogURL)+"/feeds/posts/summary?max-results="+f.maxPostsPerTag+"&orderby=published&alt=json-in-script",c,"jsonp")}else{for(var m=0;m<f.tags.length;m++){e.get((f.blogURL===""?window.location.protocol+"//"+window.location.host:f.blogURL)+"/feeds/posts/summary/-/"+f.tags[m]+"?max-results="+f.maxPostsPerTag+"&orderby=published&alt=json-in-script",c,"jsonp")}}};if(f.onLoad){e(window).load(d)}else{e(document).ready(d)}})(jQuery)};