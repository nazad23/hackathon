
//SETUP
//add icon to manifest.json file
//add background script to manifest.json (like youtube)
//create background.js file and link it to manifest.json file
//link background script to content.js
//in content.js, add chrome.tabs to create a new tab and stay connected to previous tab (youtube)
//create listener for background.js to listen for event

//FUNCTIONALITY
//create a linked list, that keeps track of current stream of video/audio in another tab
//list functionality should have play/ pause and next/ back keys
//(user needs to have autoplay on) or have a playlist going

//DESIGN
//add icons for clickable event on extensions
//on top and bottom of extension display name of video playing


// content.js
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {
            var firstHref = $("a[href^='http']").eq(0).attr("href");
            //point to youtube?
            console.log(firstHref);
            chrome.runtime.sendMessage({ "message": "open_new_tab", "url": firstHref });
        }
    });
