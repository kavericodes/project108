function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/FTBzaDDMm/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        random_color_r = Math.floor(Math.random()*255) + 1;
        random_color_g = Math.floor(Math.random()*255) + 1;
        random_color_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb("+random_color_r+" , "+random_color_g+" , "+random_color_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_color_r+" , "+random_color_g+" , "+random_color_b+")";

        img = document.getElementById("bird.jpg");
        img1 = document.getElementById("cat.jpg");
        img2 = document.getElementById("dog.jpg");
        img3 = document.getElementById("lion.jpg");

        if(results[0].label == "chirping"){
            img.src = "bird2.gif";
            img1.src = "cat.png";
            img2.src = "dog.png";
            img3.src = "lion.png";
        }
        else if(results[0].label == "meowing"){
            img.src = "bird.png";
            img1.src = "cat2.gif";
            img2.src = "dog.png";
            img3.src = "lion.png";
        }
        else if(results[0].label == "barking"){
            img.src = "bird.png";
            img1.src = "cat.png";
            img2.src = "dog2.gif";
            img3.src = "lion.png";
        }
        else if(results[0].label == "roaring"){
            img.src = "bird.png";
            img1.src = "cat.png";
            img2.src = "dog.png";
            img3.src = "lion2.gif";
        }
    }
}