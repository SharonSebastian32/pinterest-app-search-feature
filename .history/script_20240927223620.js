// we have and array inside array we have objects the objects are    image and name

 

function showTheCards() {
  var clutter = "";
  arr.forEach(function (obj) {
    clutter += ` <div class='box'>
    <img src="${obj.image}" class='cursor-pointer'>
    </img>
    <div class='captions'>${obj.name}</div>
    </div>`;
  });
  document.querySelector(".container").innerHTML = clutter;
}

function handleSearchFunctionality() {
  var input = document.querySelector("#searchinput");

  input.addEventListener("focus", function () {
    document.querySelector(".overlay").style.display = "block";
  });

  input.addEventListener("blur", function () {
    document.querySelector(".overlay").style.display = "none";
  });

  input.addEventListener("input", function () {
    const arr2 = arr.filter((obj) =>
      obj.name.toLowerCase().startsWith(input.value)
    );
    console.log(arr2);
  });
}
handleSearchFunctionality();
showTheCards();














 

const escapeHTML = (str) =>
  str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[
        tag
      ] || tag)
  );

const showTheCards = (images) => {
  const container = document.querySelector(".container");
  if (container)
    container.innerHTML = images
      .map(
        (obj) =>
          `<div class='box'>
      <img src="${escapeHTML(
        obj.image
      )}" class='cursor-pointer' alt="${escapeHTML(obj.name)}">
      <div class='captions'>${escapeHTML(obj.name)}</div>
    </div>`
      )
      .join("");
};

const handleSearchFunctionality = () => {
  const input = document.querySelector("#searchinput");
  const overlay = document.querySelector(".overlay");
  if (!input || !overlay) return;

  input.addEventListener("focus", () => (overlay.style.display = "block"));
  input.addEventListener("blur", () => (overlay.style.display = "none"));
  input.addEventListener("input", () => {
    const searchTerm = input.value.toLowerCase();
    showTheCards(
      arr.filter((obj) => obj.name.toLowerCase().includes(searchTerm))
    );
  });
};

// Initialize immediately
handleSearchFunctionality();
showTheCards(arr);