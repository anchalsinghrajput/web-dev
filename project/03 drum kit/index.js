for (var i=0; i<document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
        var location = "sound/sounds_"+`${this.innerHTML}` +".wav"
        var audio = new Audio(location);
        audio.play();
        this.classList.add('onPlay');

        setTimeout(()=>{
            this.classList.remove("onPlay");
        },100);
    });

}

