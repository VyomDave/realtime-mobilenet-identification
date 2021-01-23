function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet',Modelloaded)
}
function draw(){
  image(video,0,0,300,300)
  classifier.classify(video , gotResult)
}
function Modelloaded(){
  console.log("ok!")
}
function gotResult(error , results){
 if(error){
   console.log(error)
 }
 else{
   console.log(results)
   accuracy=results[0].confidence.toFixed(3)*100+" %"
   object=results[0].label
   document.getElementById("object-result").innerHTML=object
   document.getElementById("accuracy-result").innerHTML=accuracy
 }
}



