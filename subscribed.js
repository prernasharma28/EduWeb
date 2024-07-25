function subscribe() {
    // Show the popup
    document.getElementById("subscribePopup").style.display = "block";
    playPopUpSound();
    // Hide the popup after 3 seconds
    setTimeout(function() {
        document.getElementById("subscribePopup").style.display = "none";
    }, 3000);
}
function playPopUpSound() {
    const audio = new Audio('QKTA234-pop.mp3'); 
    audio.play();
}

