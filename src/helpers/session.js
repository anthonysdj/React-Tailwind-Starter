/**
 *
 * the session key
 */
export function sessionKey() {
    return "yourSessionKey";
}

/**
 *
 * check the session and return its value if it exist
 */
export function getSessionKey() {
    const key = sessionKey();
    return sessionStorage.getItem(key);
}

/**
 *
 * get session token object
 */
export function getSessionTokenObj() {
    return { token: getSessionKey() };
}

/**
 *
 * set the session key val
 */
export function setSessionToken(value) {
    const key = sessionKey();

    if (sessionStorage.getItem(key)) {
        sessionStorage.removeItem(key);
    }

    sessionStorage.setItem(key, value);
}
