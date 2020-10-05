//  URL copying to clipboard
document.getElementById('share-button').addEventListener("click",getURL);

function getURL() {
    const url = window.location.href;
    console.log(url);
    copyToClipboard(url);
    alert("Url Copied to Clipboard,\nShare it with your Friends!\nUrl: " + url);
  }

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  }


