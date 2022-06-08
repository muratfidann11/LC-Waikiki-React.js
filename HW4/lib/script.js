// generate random number not in generated_numbers.
const random_number_generator = (generated_numbers) => {
    do{
      var random_number = Math.floor(Math.random() * 100);
    }while(generated_numbers.includes(random_number));
    return random_number;
  }

// open image after clicking.
function open_image(img) {
  /*source = https://stackoverflow.com/questions/57536070/how-to-make-button-open-a-link-in-new-tab-in-javascript */
  window.open(img.src, '_blank');
}

// get container div to add img.
var gallery = document.getElementsByClassName("container")[0];

// store generated number to prevent generate same numbers.
var generated_numbers = [];

// add img to gallery div.
for(let i=0; i<20; i++){
  var img = document.createElement("img");
  // I could use i to get random image. I wanted to use function to practice.
  random_number = random_number_generator(generated_numbers);
  generated_numbers.push(random_number);
  img.src = "https://source.unsplash.com/random/300x300/?sig=" + random_number;
  img.alt = "Random Image";
  img.style = "width:30%; border:3px solid brown; border-radius:10px; margin:5px;";
  img.addEventListener("click", () => open_image(img));
  gallery.appendChild(img);
}

/*Some Notes:
  -- Even if I generate different random numbers, the same images may appear because the source of the image is refreshed after each image creation. I just wanted to practice.
  -- Also clicking image to open it on new tab, different image will be shown because of reason above.
   */