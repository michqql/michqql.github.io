function copyToClipboard() {
    var element = document.getElementById("textToCopy");

    navigator.clipboard.writeText(element.value);
    element.innerText = "Copied!";

    setTimeout(function() {
        element.innerText = element.value;
    }, 1500);
}