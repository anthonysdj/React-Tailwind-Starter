export const includes = function (haystack, needle) {
    return haystack.indexOf(needle) >= 0;
}

export const html = function (data) {
    return {__html: data}
}