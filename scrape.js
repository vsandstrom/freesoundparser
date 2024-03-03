let x = document
    .getElementById("share-link")
    .getAttribute("data-static-file-url");

console.log("Injected successfully");
console.log("Here is the thing that we want: " + x);

chrome.runtime.sendMessage({message: x});


