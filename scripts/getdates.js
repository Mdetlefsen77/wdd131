function getCurrentYear() {
    return new Date().getFullYear();
}
function getLastModified() {
    return new Date(document.lastModified).toLocaleString();
}
document.getElementById("currentyear").textContent = getCurrentYear();
document.getElementById("lastModified").textContent = getLastModified();