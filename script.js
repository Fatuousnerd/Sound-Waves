var playBtn = document.getElementById("playBtn");
var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#ddd',
    progressColor: '#ff006c',
    barWidth: 4,
    responsive: true,
    height: 90,
    barRadius: 4
});

wavesurfer.load('LilDurk-AHHH HA.mp3');

playBtn.onclick = () => {
    wavesurfer.playPause()
    if(playBtn.src.includes("play1.png")){
        playBtn.src = "pause.png"
    } else{
        playBtn.src = "play1.png"
    }
};

wavesurfer.on("finish", function(){
    playBtn.src = "play1.png"
    wavesurfer.stop()
});