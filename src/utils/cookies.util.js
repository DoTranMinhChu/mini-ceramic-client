const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const removeCookie = (cname) => {
    document.cookie = cname + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
const setObjectToCookie = (name, value) => {
    var cookie = [name, '=', JSON.stringify(value), '; domain=.', window.location.host.toString(), '; path=/;'].join('');
    document.cookie = cookie;
}
function getObjectFromCookie(name) {
    var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
    result && (result = JSON.parse(result[1]));
    return result;
}

module.exports = {
    setCookie,
    getCookie,
    removeCookie,
    setObjectToCookie,
    getObjectFromCookie
}