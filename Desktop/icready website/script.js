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




// Code for introduction
window.addEventListener("scroll", function () {
  var introductionSection = document.getElementById("introduction");
  var sectionPosition = introductionSection.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (sectionPosition < screenHeight * 0.75) {
    introductionSection.classList.add("visible");
  } else {
    introductionSection.classList.remove("visible");
  }
});



// Code for blockchain section
window.addEventListener("scroll", function () {
  var blockchainSection = document.querySelector(".blockchain-section");
  var sectionPosition = blockchainSection.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (sectionPosition < screenHeight * 0.75) {
    var blockchainInfo = document.querySelector(".blockchain-info");
    blockchainInfo.classList.add("visible");

    var blockchainImage = document.querySelector(".blockchain-image");
    blockchainImage.classList.add("visible");
  }
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission
  // Perform your form submission logic here
});


document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  // Add your code here to handle the form submission (e.g., sending data to a server)

  // Show the submit message
  document.getElementById('submit-message').classList.remove('hidden');
});

