export function httpHeaders() {
    return {
        "Content-Type": "application/json; charset=utf-8",
        "X-Requested-With": "XMLHttpRequest"
    }
}

export function httpRequest(url, method, { postdata = {}, headers = {} } = {}) {
    if (typeof postdata !== "object") throw new Error("Parameter postdata invalid");
    if (typeof headers !== "object") throw new Error("Parameter headers invalid");
    if (!Object.keys(headers).length) headers = httpHeaders();

    const methods = ["GET", "POST", "PUT", "DELETE"];
    const includes = function (haystack, needle) {
        return haystack.indexOf(needle) >= 0;
    }
    if (!includes(methods, method)) throw new Error("Invalid http method");

    let options = {
        method: method,
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: headers
    }

    if (method === "POST") options.body = JSON.stringify(postdata);

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