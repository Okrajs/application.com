// application.com/scripts/main.js
;(function () {
    'use strict';
    /* global Okra, document */

    Okra.provide('get', 'title', function () {
        return document.title;
    }).allow('https://www.anayltics.work');
    
    
    var playBtn = document.getElementById('play-btn');
    var isPlaying = false;
    
    var qualityBtn = document.getElementById('quality-btn');
    var isHighQuality = true;
    
    var video = Okra.inlet(
        'videoprovider', 
        'https://www.videosforyou.in'
    );
    
    playBtn.onclick = function () {
        if (isPlaying) {
            video.call('stop');
        } else {
            video.call('play');
        }
        
        isPlaying = !isPlaying;
        playBtn.innerHTML = isPlaying ? 'Pause' : 'Play';        
        
    };

    qualityBtn.onclick = function () {
        isHighQuality = !isHighQuality;
        qualityBtn.innerHTML = isHighQuality ? 'HQ' : 'LQ';        
        video.set('isHighQuality', isHighQuality);    
    };
    
        var likeButton = Okra.inlet(
        'socialbuttons', 
        'https://www.socialnetwork1.eu'
    );
    
    var updateLikeCallToAction = function (isLiked) {
        var paragraph = document.getElementById('call-to-action');
        
        if (isLiked) {
            paragraph.innerHTML = 'Thank you our loyal customer!';
        } else {
            paragraph.innerHTML = 'Please, please click on the like button';        
        }
    };
    
    likeButton.get('isLiked', updateLikeCallToAction);
    likeButton.on('likeChanged', function (data) {
        updateLikeCallToAction(data.isLiked);
    });
}());

