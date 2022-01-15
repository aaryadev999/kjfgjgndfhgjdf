priediction1 = ""

Webcam.set({
    height: 1080,
    width: 1920,
    image_format: 'png',
    png_quality: 100
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function JhonnySnap(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML= '<img id="Jhonny" src="'+data_url+'"/>';
    });
}
console.log('ml5.version',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);
function modelloaded(){
    console.log('Ayo Bro! Model is readdy yall! Its also loaded Yall!!! yayie! Jhonny!');
}
function speak(){
    var synth= window.speachSynthisis;
    speak_data_1 = "Da Jhonny webcan too da: "+priediction1;
    var utterThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}