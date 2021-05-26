//script for Mugar Series Website
//Init jQuery


$(document).ready(function() {
	
	//Start functions for mobile navigation menu
	$('#dispS1').click(function() {
		$('#season1').toggle();
	});
	
	$('#dispS2').click(function() {
		$('#season2').toggle();
	});
	
	$('#dispChar').click(function() {
		$('#chars').toggle();
	});
	//End functions for mobile navigation menu
	
});
//End jQuery

//Function to Cycle Images
var myImage = document.getElementById("imageGallery");
var imageArray = ["portraitImg/ss1.jpg", "portraitImg/ss2.jpg", "portraitImg/ss3.jpg", "portraitImg/ss4.jpg"];
var arrayIndex = 0;
			
function changeImage() {
	myImage.setAttribute("src", imageArray[arrayIndex])
	arrayIndex++;
	if (arrayIndex >= imageArray.length) {
		arrayIndex = 0
	};
};
setInterval(changeImage, 5000);
//End of Cycle Image Function



//Validate newsletter signup
function validateNewsSignup() {
	
	//Make sure username is entered
	if (document.forms["newsSignup"].username.value == "") {
		alert("Please enter a username");
		return false;
	}; //end if
	
	//Make sure email is entered
	if (document.forms["newsSignup"].email.value == "") {
		alert("Please enter your Email Address");
		return false;
	}; //end if
	
	//Make sure age is entered
	if (document.forms["newsSignup"].age.value == "") {
		alert("Please enter your age");
		return false;
	}; //end if 
	
	//Make sure age is over 18
	if (document.forms["newsSignup"].age.value < 18) {
		alert("You must be 18 or over to sign up!");
		return false;
	}; //end if 
	
	//If all is OK, then...
	alert("Thank you for signing up!");
	return true;
};
//End Validate newsletter signup


//Start of Image Gallery with previous and next buttons

var imageFrame = document.getElementById("overlooking");
var stillImages = ["stillImages/bigpic.jpg", "stillImages/bp7.png", "stillImages/bp2.png", "stillImages/bp3.png", "stillImages/bp4.png", "stillImages/bp5.png", "stillImages/bp6.png", "stillImages/bp1.png"];
var stillIndex = 1;   //Set to 1 to prevent first previous button crash

function nextImage() {
	imageFrame.setAttribute("src", stillImages[stillIndex]);   //Changing the image source to the index number
	stillIndex++;   //Incrementing the Index to cycle images
	if (stillIndex >= stillImages.length) {       //Once the image index reaches the max length it resets to 0
		stillIndex = 0
	};
};

function prevImage() {
	imageFrame.setAttribute("src", stillImages[stillIndex-1]);  //Change the image source to index -1 to go backwards
	stillIndex--;  //Going back by one image every cycle
	if (stillIndex <= 0) {
		stillIndex = stillImages.length    //If the image is below zero it resets to the max value
	};
};

//End of Image Gallery with previous and next buttons

//Start of script for Mobile Navigation buttons



//End of script for Mobile Navigation