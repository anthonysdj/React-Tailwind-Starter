import { gaTid } from "../config/env";

export const gaPush = (pageName, title) => {

    if (window.ga === undefined) return;

    // SEND GA PAGEVIEW
    window.ga('gtm1.send', 'pageview', {
        page: pageName,
        title: title
    });
}

export const getUtmString = () => {
    const utmC = getCookie("wvph_utm_campaign");
    const utmM = getCookie("wvph_utm_medium");
    const utmS = getCookie("wvph_utm_source");
    const utmCon = getCookie("wvph_utm_content");

    let utmCode = "";

    if (utmC.getValue()) {
        utmCode += "utm_campaign:=" + utmC.getValue() + "|";
    }

    if (utmM.getValue()) {
        utmCode += "utm_medium:=" + utmM.getValue() + "|";
    }

    if (utmS.getValue()) {
        utmCode += "utm_source:=" + utmS.getValue() + "|";
    }

    if (utmCon.getValue()) {
        utmCode += "utm_content:=" + utmCon.getValue() + "|";
    }

    return utmCode.substring("|", utmCode.length - 1);
}

const getCookie = cname => {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    var cookieValue = "";

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") {
            c = c.substring(1);
        }

        if (c.indexOf(name) === 0) {
            cookieValue = c.substring(name.length, c.length);
        }
    }

    const getValue = () => {
        if (cookieValue) {
            let value = cookieValue.split("|");
            return value[value.length - 1];
        }

        return null;
    }

    return { getValue };
}

function getGAClientID() {
    let trackers = window.ga.getAll();
    let i, len;

    for (i = 0, len = trackers.length; i < len; i += 1) {
        if (trackers[i].get('trackingId') === gaTid) {
            let clientid = trackers[i].get('clientId');
            return clientid;
        }
    }

    return null;
}

export const getGaCid = () => {
    let gaClientId = "";

    if (window.ga !== undefined) {
        if (!window.sessionStorage.getItem("wv_ga_client_id")) {

            if (window.ga) {
                if (typeof window.ga.getAll === "function") {
                    // gaClientId = window.ga.getAll()[0].b.data.values[":clientId"];

                    gaClientId = getGAClientID();

                    if (gaClientId) {
                        window.sessionStorage.removeItem("wv_ga_client_id");
                        window.sessionStorage.setItem("wv_ga_client_id", gaClientId);
                    }
                }
            }

            console.log(gaClientId);
        } else {
            gaClientId = window.sessionStorage.getItem("wv_ga_client_id");
        }
    }

    return gaClientId;
}
