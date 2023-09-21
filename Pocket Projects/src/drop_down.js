
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator() {
  const dogLinks = [];

  for (const [dogName, dogLink] of Object.entries(dogs)) {
    const anchorTag = document.createElement("a");
    anchorTag.innerHTML = dogName;
    anchorTag.setAttribute("href", dogLink);

    const dogLi = document.createElement("li");
    dogLi.classList = "dog-link";
    dogLi.appendChild(anchorTag);
    dogLinks.push(dogLi);
  }
  return dogLinks;
}

function attachDogLinks() {
  const dogLinks = dogLinkCreator()
  const dogListDropDown = document.querySelector(".drop-down-dog-list");
  
  dogLinks.forEach( dogLink => dogListDropDown.appendChild(dogLink));
}

attachDogLinks();


function handleEnter() {
  const dogLinks = document.querySelectorAll(".dog-link");
  dogLinks.forEach( dogLink => dogLink.classList.add("open"));
}

const dogNavDropDown = document.querySelector(".drop-down-dog-nav");
dogNavDropDown.addEventListener("mouseenter", handleEnter);
dogNavDropDown.addEventListener("mouseleave", handleLeave);


function handleLeave(e) {
  const dogLinks = document.querySelectorAll(".dog-link");
  dogLinks.forEach( dogLink => dogLink.classList.remove("open"));
}