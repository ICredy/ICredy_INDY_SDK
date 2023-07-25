const images = document.querySelectorAll('.hero-image');
let currentIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

function rotateImages() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Start rotating the images every 5 seconds
setInterval(rotateImages, 5000);

// Code for hyperledger section
window.addEventListener("scroll", function () {
  var hyperledgerSection = document.querySelector(".hyperledger-section");
  var sectionPosition = hyperledgerSection.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (sectionPosition < screenHeight * 0.75) {
    var hyperledgerInfo = document.querySelector(".hyperledger-info");
    hyperledgerInfo.classList.add("visible");

    var hyperledgerImage = document.querySelector(".hyperledger-image");
    hyperledgerImage.classList.add("visible");
  }
});


//Code to handle the contact form submission

function handleResponse(response) {
    var thankYouMessage = document.getElementById("thankYouMessage");
    if (response.success) {
        thankYouMessage.textContent = "Thank you for contacting us!";
    } else {
        thankYouMessage.textContent = "Failed to send email. Please try again.";
    }
}















