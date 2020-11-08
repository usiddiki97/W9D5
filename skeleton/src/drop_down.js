
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};


function dogLinkCreator(dogs) {
  let dogLinks = [];
  const dogNames = Object.keys(dogs);

  for (let i = 0; i < dogNames.length; i++){
    const aTag = document.createElement('a');
    aTag.innerHTML = dogNames[i];
    aTag.href = dogs[dogNames[i]];
    const liTag = document.createElement('li');
    liTag.classList = 'dog-link';
    liTag.append(aTag);
    dogLinks.push(liTag);
  }
  return dogLinks;
}

function attachDogLinks() {
  const dogLinks = dogLinkCreator(dogs);
  const ul = document.querySelector(".drop-down-dog-list");
  dogLinks.forEach ( function(li, idx) {
    ul.append(li);
  });
}


attachDogLinks();

function handleEnter() {
  const dogLinks = document.querySelectorAll('.dog-link');
  dogLinks.forEach(function(li, idx){
    li.classList.add('open');
  })
}

function handleLeave() {
  const dogLinks = document.querySelectorAll('.dog-link');
  dogLinks.forEach(function (li, idx) {
    li.classList.remove('open');
  })
}

const nav = document.querySelector('.drop-down-dog-nav');
nav.addEventListener("mouseenter", handleEnter);
nav.addEventListener("mouseleave", handleLeave);
