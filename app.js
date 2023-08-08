//IIFE
(function(){
    "use strict";// evitar fenomenos raros, se comporta mas rigido y mas seguro
    //alert('JavaScript Working!'); //testing code
    console.log(data);


    //variables
    let categories = document.getElementById("categories");
    let videos = document.getElementById("movies");
    //display data
    categories.innerText = data.categories[0].name
    //loop thru all movies

    function displayMovies(){
        //repeat for each movie in list
        for (let videoIndex = 0; videoIndex < data.categories[0].videos.length; videoIndex++) {
            const video = data.categories[0].videos[videoIndex];
            //create elements to display (list item, video, and paragraph)
            let li = document.createElement('li');
            let videoElement = document.createElement('video');
            let p = document.createElement('p');
            //fill elements with information and properties
            p.innerText = video.description;
            videoElement.poster = data.categories[0].thumbsUrl + video.thumb;
            videoElement.controls = true;
            videoElement.src = video.sources[0];
            videoElement.style.width = '200px';
            //add elements and text to the list item
            li.appendChild(document.createTextNode(video.title));     
            li.appendChild(p);
            li.appendChild(videoElement)
            //add list item to the list
            movies.appendChild(li);
        }
    }

    displayMovies();

})(); // no se ejecuta hasta que termine todo lo demnas 

