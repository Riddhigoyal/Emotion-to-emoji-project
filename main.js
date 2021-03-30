Prediction1="";
Prediction2="";

Webcam.set({
   width: 350,
    height:300,
    image_format:'jpg',
    jpg_quality: 100
});

Camera=document.getElementById("camera");
Webcam.attach('#Camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
 document.getElementById("result").innerHTML='<img id="result" src="'+data_uri+'">';
    });
}

console.log ("ml5 version",ml5.version);

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/06LKRASA4/model.json',modelLoaded);

function modelLoaded(){
    console.log ("model loaded successfully");
}

function speak(){
    var synth= window.speechSynthesis;
     speakdata1="The first Prediction is"+prediction1;
     speakdata2="The second Prediction is"+prediction2;
     utterThis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
     synth.speak(utterThis);
}

function check(){
    img=document.getElementById("result");
    classifier.classify(img ,got_result);
}

function got_result(error,results){
   if(error){
       console.log (error);
   }
   else{
       console.log (results);
      document.getElementById("result_emotion_name").innerHTML=results[0].label;
      document.getElementById("result_emotion_name2").innerHTML=results[1].label;
      Prediction1=results[0].label;
      Prediction2=results[1].label;
      speak();
      if(results[0].label=="victory"){
        document.getElementById("updated_emoji").innerHTML="&#9996;";
      }
      if(results[0].label=="best"){
        document.getElementById("updated_emoji").innerHTML="&#128077;";
    }
    if(results[0].label=="hello"){
        document.getElementById("updated_emoji").innerHTML="&#9995;";
    }
    if(results[0].label=="amazing"){
        document.getElementById("updated_emoji").innerHTML="&#128076;";
    }
    if(results[0].label=="rock"){
        document.getElementById("updated_emoji").innerHTML="&#129374;";
    }
    if(results[0].label=="vulcan"){
        document.getElementById("updated_emoji").innerHTML="&#128406;";
    }
    if(results[1].label=="victory"){
        document.getElementById("updated_emoji2").innerHTML="&#9996;";
    }
    if(results[1].label=="best"){
        document.getElementById("updated_emoji2").innerHTML="&#128077;";
    }
    if(results[1].label=="hello"){
        document.getElementById("updated_emoji2").innerHTML="&#9995;";
    }
    if(results[1].label=="amazing"){
        document.getElementById("updated_emoji2").innerHTML="&#128076;";
    }
    if(results[1].label=="rock"){
        document.getElementById("updated_emoji2").innerHTML="&#126374;";
    }
    if(results[1].label=="vulcan"){
        document.getElementById("updated_emoji2").innerHTML="&#128406;";
    }
   }
}