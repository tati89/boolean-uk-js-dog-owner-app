console.log(data);
// We create individual components here

/*
<section class="main__dog-section">
  <h2>Mr. Bonkers</h2>
  <img
    src="https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
    width="400"
    height="300"
  />
  <div class="main__dog-section__desc">
    <h3>Bio</h3>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,<br />
      minima voluptates libero cumque rerum consequatur optio aliquid sint<br />
      eum maxime illo laborum omnis quo ab rem cupiditate nulla<br />
      perspiciatis ipsum!
    </p>
  </div>
  <div class="main__dog-section__btn">
    <p><em>Is naughty?</em> No!</p>
    <button>Bad Dog</button>
  </div>
</section>
*/

function dogCard(dog) {
  const mainDogSectionEl = document.querySelector(".main__dog-section");
  while (mainDogSectionEl.firstChild) {
    mainDogSectionEl.removeChild(mainDogSectionEl.firstChild);
  }

  //create title
  const titleEl = document.createElement("h2");
  titleEl.innerText = dog.name;
  mainDogSectionEl.appendChild(titleEl);

  //create img
  const dogImg = dog.image;
  const imgEl = document.createElement("img");
  imgEl.src = dogImg;
  imgEl.setAttribute("style", "width:400px; height:300px");
  mainDogSectionEl.appendChild(imgEl);

  //create div class="main__dog-section__desc"
  const divMainDogSectionDescEl = document.createElement("div");
  mainDogSectionEl.appendChild(divMainDogSectionDescEl);

  //create h3 Bio
  const bioEl = document.createElement("h3");
  bioEl.innerText = "Bio";
  divMainDogSectionDescEl.appendChild(bioEl);

  //create p
  const bioInfoEl = document.createElement("p");
  bioInfoEl.innerText = dog.bio;
  divMainDogSectionDescEl.appendChild(bioInfoEl);

  //create div class="main__dog-section__btn"
  const divMainDogSectionBtnEl = document.createElement("div");
  mainDogSectionEl.appendChild(divMainDogSectionBtnEl);

  //create 'naughty' p
  const naughtyParagrafEl = document.createElement("p");
  divMainDogSectionBtnEl.appendChild(naughtyParagrafEl);

  //create em "Is naughty?"
  const isNaughtyEl = document.createElement("em");
  isNaughtyEl.innerText = "Is naughty? ";
  naughtyParagrafEl.appendChild(isNaughtyEl);

  //create span "No"
  const noSpanEl = document.createElement("span");
  noSpanEl.innerText = "No ";
  naughtyParagrafEl.appendChild(noSpanEl);

  //create <button> Bad Dog
  const buttonEl = document.createElement("button");
  buttonEl.innerText = "Bad Dog";
  divMainDogSectionBtnEl.appendChild(buttonEl);
}

const listofDogs = document.querySelector(".dogs-list");
function renderDog(dog) {
  let listItemel = document.createElement("li");
  let dogName = dog.name;
  listItemel.setAttribute("class", "dogs-list__button");
  listItemel.innerText = dogName;
  listofDogs.appendChild(listItemel);

  listItemel.addEventListener("click", function (event) {
    let card = dogCard(dog);
  });
}

for (const dog of data) {
  renderDog(dog);
}
