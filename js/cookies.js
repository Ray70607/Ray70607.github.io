function createCookie(name,value,days,path,domain,secure) {
    var expires='';
    if (days){
        var date=new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires=date.toGMTString();
    }
    cookieString= name+'='+escape(value);
    if (expires)cookieString+=';expires='+expires;
    if (path)cookieString+=';path='+path;
    if(domain)cookieString+=';domain='+domain;
    if (secure)cookieString+=';secure'+secure;
    document.cookie=cookieString;
}
function getCookie(name){
    var nameEquals = name+'=';
    var crumbs = document.cookie.split(';');
    for(var i =0;i<crumbs.length;i++){
        var crumb=crumbs[i].trim();
        if(crumb.indexOf(nameEquals) == 0){
            return unescape(crumb.substring(nameEquals.length,crumb.length));
        }
    }
    return null;
}
function deleteCookie(name){
    createCookie(name,'',-1)
}