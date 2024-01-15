(function (i, s, o, g, r, a, m) {

    function readTheCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
	
	var cookie = readTheCookie('consent-settings');

	if(cookie[0] > 0){

    i['GoogleAnalyticsObject'] = r;
    (i[r] =
        i[r] ||
        function () {
            (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
	
	}
})(
    window,
    document,
    'script',
    'https://www.googletagmanager.com/gtag/js?id=G-Q7SGV016K3',
    'gtag'
);

window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'G-Q7SGV016K3');