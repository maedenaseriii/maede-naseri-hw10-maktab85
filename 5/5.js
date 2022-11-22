function clear(elem) {
    for (let i=0; i < elem.childNodes.length; i++) {
        elem.childNodes[i].remove();
    }
}
// ===========================//
function clear(elem) {
    while (elem.firstChild) {
        elem.firstChild.remove();
    }
}
// ===========================//
function clear(elem) {
    elem.innerHTML = '';
}