!function(t){t.fn.rand=function(n){var e=this,a=e.size(),n=n?parseInt(n):1;if(n>a)return e.pushStack(e);if(1==n)return e.filter(":eq("+Math.floor(Math.random()*a)+")");r=e.get();for(var i=0;a-1>i;i++){var f=Math.floor(Math.random()*(a-i))+i;r[f]=r.splice(i,1,r[f])[0]}return r=r.slice(0,n),e.filter(function(n){return t.inArray(e.get(n),r)>-1})}}(jQuery);