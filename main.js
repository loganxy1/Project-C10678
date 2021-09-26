function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/mQBwpUvpr/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);

        red = Math.floor(Math.random()*255) + 1;
        green = Math.floor(Math.random()*255) + 1;
        blue = Math.floor(Math.random()*255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - "+results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - "+(results[0].confidence*100).toFixed(2)+" %";

        document.getElementById("result_label").style.color = "rgb("+red+","+green+","+blue+")";
        document.getElementById("result_confidence").style.color = "rgb("+red+","+green+","+blue+")";

        img1 = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");
        img5 = document.getElementById("Dog");

        if(results[0].label=="Clap"){
            img1.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
            img5.src = "TheBrat.jpg";
        }

        else if(results[0].label=="Snapping"){
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
            img5.src = "TheBrat.jpg";
        }

        else if(results[0].label=="Fart"){
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
            img5.src = "food-hot-dog.gif";
        }

        else if(results[0].label=="Singing"){
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png";
            img5.src = "TheBrat.jpg";
        }

        else{
        img1.src = "aliens-01.png";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.gif";
        img5.src = "TheBrat.jpg";
    }
    }
}