function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/EEPYZtBMF/', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;
var lion = 0
var cow = 0

function gotResults(error, results) {
    if (error) {
      console.error(error);
    }
}


 