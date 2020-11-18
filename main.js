var images = ["Esha.jpg", "Ramya.jpeg", "Sumedha.jpeg"];
var names = ["Esha", "Ramya", "Sumedha"];

function setInitialState() {
    document.getElementById("picture").src = images[0];
    document.getElementById("person").innerHTML = names[0];
};

// Advance to the next slide and loop over to the 
// first image in the end
var index = 0;
function nextslide() {
    index = index + 1;
    if (index == images.length) {
        index = 0;
    }
    document.getElementById("picture").src = images[index];
    document.getElementById("person").innerHTML = names[index];
}