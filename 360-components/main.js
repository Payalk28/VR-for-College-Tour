
var someVar = document.getElementById('img-id').getAttribute('someVar')
var someVar1 = document.getElementById('img-id').getAttribute('someVar1')

switch(someVar)
{
  case "index":
    var imageLocation = "images/1.png"
    break;
  case "index1":
    var imageLocation = "images/gf2.jpg"
    break;
  case "ff1":
    var imageLocation = "images/ff2.jpg"
    break;
  case "ff2":
    var imageLocation = "images/x.jpg" 
    break;
  case "ss1":
    var imageLocation = "images/sf.jpeg"
    break;
  case "ss2":
    var imageLocation = "images/tp.jpg"
    break;
  case "ss3":
    var imageLocation = "images/lab.png"
    break;
  case "ss4":
    var imageLocation = "images/sf1.png"
    break;
  case "tf1":
    var imageLocation = "images/tf1.jpg"
    break;
  case "tf2":
    var imageLocation = "images/ttf.jpg"
    break;
  case "tf3":
    var imageLocation = "images/tf2.jpg"
    break;
  
  }



const panoramaImage = new PANOLENS.ImagePanorama(imageLocation);
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  
});

viewer.add(panoramaImage);
