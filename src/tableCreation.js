const dataUrl='http://localhost:3000/sentimentData';window.onload=function(){let a=getQueryParameters();$.ajax({url:dataUrl,type:'get',data:a,success:function(b){setTable(a,b)},error:function(b){console.log('error'),console.log(b.error)}})};function setTable(a,b){$('#infoTable tr:last').after('<tr><td>'+a.name+'</td><td id="marketCap">'+a.marketCap+'</td><td>$'+a.price+'</td><td>'+a.percentChange+'%</td><td>'+getAnalizeByScore(b)+'('+b+')</td></tr>'),$('#marketCap').text('$'+parseFloat(a.marketCap,10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,'$1,').toString())}function getAnalizeByScore(a){return 0<a?'Positive':0>a?'Negative':'Neutral'}function getQueryParameters(){var a=location.search.substr(1),b={};return a.split('&').forEach(function(c){var d=c.split('=');b[d[0]]=decodeURIComponent(d[1])}),b}