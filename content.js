
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

//if at the first index, the play and next button should only work
//if at the last index, the next button should take us to beginning of array 

chrome.runtime.onMessage.addListener(
    fetch("https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=michael_jackson")
    .then(response => response.json())
    .then((data) => {
        // console.log(data)

        const container = document.querySelector('.container');
        const artist = data.album[0].strArtist;

        //display the album name in the container div/class
        // for(let i = 0; i < data.album.length; i++){
        //     const album = data.album[i].strAlbum;

        //     container.appendChild(document.createTextNode(album));
        //     container.appendChild(document.createElement('br'));
        // }
        

    }).catch(err => {
        console.error(err);
    })
);
//use doc query selector, provide the id (nextBtn)
//use an if conditional or other buttons...
//create a function when you click the next button id...
//looping through object data
//display the current song/ album on the page
//use fetch request (GET)
//return and append data to class Container

let currIndex = 0;

document.querySelector('#nextBtn').addEventListener("click", () => {
    fetch("https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=michael_jackson")
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        
        const container = document.querySelector('.container');
        const artist = data['album'][0].strArtist;
        const currentPlaylist = data['album'][currIndex].strAlbum;
        const nextPlaylist = data['album'][currIndex + 1].strAlbum;
        currIndex += 1;

        let albumName = document.querySelector('#albumName');
        container.appendChild(albumName).innerText = 'Album: ' + nextPlaylist;

        let artistName = document.querySelector('#artistName');
        container.appendChild(artistName).innerText = 'Artist: ' + artist;
        
    }).catch(err => {
        console.error(err);
    })
})

document.querySelector('#playBtn').addEventListener("click", () => {
    fetch("https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=michael_jackson")
    .then(response => response.json())
    .then((data) => {
        console.log(data)

        const container = document.querySelector('.container');
        const artist = data['album'][0].strArtist;
        const currentPlaylist = data['album'][currIndex].strAlbum;
       
        //replace previous textNode
        // container.appendChild(document.createTextNode(currentPlaylist));
        // container.appendChild(document.createElement('br'));
        // container.appendChild(document.createTextNode(artist));
        // container.appendChild(document.createElement('br'));
        
    }).catch(err => {
        console.error(err);
    })
})

document.querySelector('#backBtn').addEventListener("click", () => {
    fetch("https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=michael_jackson")
    .then(response => response.json())
    .then((data) => {
        
        const container = document.querySelector('.container');
        const artist = data['album'][0].strArtist;
        const currentPlaylist = data['album'][currIndex].strAlbum;
        const prevPlaylist = data['album'][currIndex - 1].strAlbum;

        //if we start at the first song, the back button should not work. 
        if(currIndex >= 1) {
            let albumName = document.querySelector('#albumName');
            container.appendChild(albumName).innerText = 'Album: ' + prevPlaylist;
    
            let artistName = document.querySelector('#artistName');
            container.appendChild(artistName).innerText = 'Artist: ' + artist;
        }

        currIndex -= 1;
        
    }).catch(err => {
        console.error(err);
    })
})






//test object since we havent connected to youtube yet

let albumList = ['Michael', 'Music & Me', 'Forever, Michael', 'Ben', 'Got to Be There',
'Invincible', 'Dangerous', 'Off the Wall', 'Thriller', 'Bad', 'Number Ones',
'The Ultimate Collection', 'The Essential Michael Jackson', 'King of Pop', 'HIStory: Past, Present and Future\, Book I',
'This Is It', 'Blood on the Dance Floor: HIStory in the Mix', 'XSCAPE', 'Farewell My Summer Love',
'Scream', 'Greatest Hits', 'Love Songs', 'They Don\'t Care About Us (Prison Version)', 'XSCAPE Documentary', 
'Childhood']



// document.body.style.background = 'white';

    


//POST
// document.querySelector('#btnsubmit').addEventListener('click', () => {
//     fetch('https://curriculum-api.codesmith.io/messages', {
//       method: 'POST',
//       body: JSON.stringify({
//         message: document.querySelector('#message').value, 
//         created_at: Date.now(), 
//         created_by: document.querySelector('#name').value}),
//     })
//   });














// function (request, sender, sendResponse) {
//     if (request.message === "clicked_browser_action") {
//         var firstHref = $("a[href^='http']").eq(0).attr("href");
//         // let firstHref = document.querySelectorAll("a[href='http://youtube.com']");
//         //point to youtube?
//         console.log(firstHref);
//         chrome.runtime.sendMessage({ "message": "open_new_tab", "url": firstHref });
//     }
// }
// );





// chrome.runtime.sendMessage(
//     {
//         contentScriptQuery: "postData"
//         , data: JSONdata
//         , url: ApiUrl
//     }, function (response) {
//         debugger;
//         if (response != undefined && response != "") {
//             callback(response);
//         }
//         else {
//             debugger;
//             callback(null);
//         }
//     });