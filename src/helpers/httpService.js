import { includes } from ".";

export function httpHeaders() {
    return {
        "Content-Type": "application/json; charset=utf-8",
        "X-Requested-With": "XMLHttpRequest"
    }
}

export function httpRequest(url, method, { postdata = {}, headers = {} } = {}) {
    if (typeof postdata !== "object") throw new Error("Parameter postdata invalid");

    const methods = ["GET", "POST", "PUT", "DELETE"];

    if (!includes(methods, method)) throw new Error("Invalid http method");

    let options = {
        method: method,
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
    }

    if (headers !== 'no-headers') {
        if (typeof headers !== "object") throw new Error("Parameter headers invalid");
        if (!Object.keys(headers).length) headers = httpHeaders();

        options.headers = headers;
        postdata = JSON.stringify(postdata);
    }

    if (method === "POST") options.body = postdata;

    return fetch(url, options).then(async res => {
        const json = await res.json();
        const status = res.status;

        if (!res.ok) {
            let message = json.message ? json.message : (res.statusText ? res.statusText : 'Request failed');
            let error = { status: status, message: message };

            if (status === 422) error = { ...error, ...json };

            return Promise.reject(error);
        }

        return json;
    });
}