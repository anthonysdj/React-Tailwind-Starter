/**
 *
 * @param {string} endpoint
 * @param {object} postData
 */
export function apiPostV1(endpoint, postData) {
    // const url = "http://sponsorship-api.test/api/v1/";
    const url = process.env.REACT_APP_SPONSORSHIP_API_URL + "v1/";

    return httpPost(url + endpoint, postData);
}

/**
 *
 * @param {string} endpoint
 * @param {object} postData
 */
export function apiPostV2(endpoint, postData) {
    // const url = "http://sponsorship-api.test/api/v2/";
    const url = process.env.REACT_APP_SPONSORSHIP_API_URL + "v2/";

    return httpPost(url + endpoint, postData);
}

function httpPost(url, postData) {
    return fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify(postData)
    }).then(res => {
        return response(res);
    });
}

/**
 *
 * @param {string} endpoint
 */
export function apiGetV1(endpoint) {
    // const url = "http://sponsorship-api.test/api/v1/";
    const url = process.env.REACT_APP_SPONSORSHIP_API_URL + "v1/";

    return httpGet(url + endpoint);
}

/**
 *
 * @param {string} endpoint
 */
export function apiGetV2(endpoint) {
    // const url = "http://sponsorship-api.test/api/v2/";
    const url = process.env.REACT_APP_SPONSORSHIP_API_URL + "v2/";

    return httpGet(url + endpoint);
}

function httpGet(url) {
    return fetch(url, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "X-Requested-With": "XMLHttpRequest"
        }
    }).then(res => {
        return response(res);
    });
}

/**
 *
 * @param {*} res
 */
function response(res) {
    if (!res.ok) {
        // If there are errors
        const error = res;

        return error.json().then(err => {
            const errorObj = { status: error.status, ...err };

            throw errorObj;
        });
    } else {
        // we are good men
        return res.json();
    }
}
