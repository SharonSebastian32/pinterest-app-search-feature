var arr = [
  {
    name: "Petals of roses",
    image:
      "https://images.unsplash.com/photo-1579591040020-5704f25f2473?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    name: "I am Scoobe Do",
    image:
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Oranges are Tasty",
    image:
      "https://plus.unsplash.com/premium_photo-1675667408018-3b64dbc55db1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Model from 2024",
    image:
      "https://plus.unsplash.com/premium_photo-1664881659420-b3a88ea2115f?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Pine Apple Dish",
    image:
      "https://plus.unsplash.com/premium_photo-1669150852116-69798176bcfe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Rambutan Season 2",
    image:
      "https://images.unsplash.com/photo-1628445373211-216165d598bc?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Apple Juice",
    image:
      "https://images.unsplash.com/photo-1509459331813-67a0c10e527c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function showTheCards(images) {
  var container = document.querySelector(".container");
  if (!container) return;

  var clutter = images
    .map(
      (obj) => `
    <div class='box'>
      <img src="${escapeHTML(
        obj.image
      )}" class='cursor-pointer' alt="${escapeHTML(obj.name)}">
      <div class='captions'>${escapeHTML(obj.name)}</div>
    </div>
  `
    )
    .join("");

  container.innerHTML = clutter;
}

function handleSearchFunctionality() {
  var input = document.querySelector("#searchinput");
  var overlay = document.querySelector(".overlay");

  if (!input || !overlay) return;

  input.addEventListener("focus", () => (overlay.style.display = "block"));
  input.addEventListener("blur", () => (overlay.style.display = "none"));

  input.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const filteredArr = arr.filter((obj) =>
      obj.name.toLowerCase().includes(searchTerm)
    );
    showTheCards(filteredArr);
  });
}

// Helper function to escape HTML special characters
function escapeHTML(str) {
  return str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      }[tag] || tag)
  );
}

 document.addEventListener("DOMContentLoaded", () => {
  handleSearchFunctionality();
  showTheCards(arr);
});













const arr = [
  {
    name: "Petals of roses",
    image:
      "https://images.unsplash.com/photo-1579591040020-5704f25f2473?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "I am Scoobe Do",
    image:
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  // ... (other image objects)
];

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