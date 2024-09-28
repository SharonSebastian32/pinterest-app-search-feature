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

  {
    name: "Health is Wealth",
    image:
      "https://images.unsplash.com/photo-1724213653741-f53f3fdd43a5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Pinky pinky Ponky",
    image:
      "https://images.unsplash.com/photo-1720609602393-207f35b618c1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Green beyond the Chair",
    image:
      "https://images.unsplash.com/photo-1722049029272-91cfb9305150?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Be not a poison",
    image:
      "https://plus.unsplash.com/premium_photo-1661604366594-64781f82a4b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Wow Super!",
        image: " {
    name: "Be not a poison",
    image:
      "https://plus.unsplash.com/premium_photo-1661604366594-64781f82a4b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },"
  }
];

const showTheCards = (images) => {
  const container = document.querySelector(".container");
  if (container)
    container.innerHTML = images.map(
      (obj) =>
        `<div class='box'>
      <img src="${obj.image}" class='cursor-pointer' alt="${obj.name}">
      <div class='captions'>${obj.name}</div>
    </div>`
    );
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
