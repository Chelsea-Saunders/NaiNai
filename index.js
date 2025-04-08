const images = document.querySelectorAll(".main-button");
const toggle = document.querySelector(".dropdown-toggle");
const menu = document.querySelector(".dropdown-links");
const loginButton = document.querySelector(".login-button");
const itemList = document.querySelector("#item-list");
const chatToggle = document.getElementById("chatToggle");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");
const chatForm = document.getElementById("chatForm");
// an array for all items
const items = [
  {
    name: "Mr & Mrs Champagne Glasses",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/mr-mrs.jpg"
  }, 
  {
    name: "Mr & Mrs Champagne Glasses",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/mr-mrs.jpg"
  },
  {
    name: "Mr & Mrs Champagne Glasses",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/mr-mrs.jpg"
  },
  {
    name: "Mr & Mrs Champagne Glasses",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/mr-mrs.jpg"
  },
  {
    name: "Mr & Mrs Champagne Glasses",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/mr-mrs.jpg"
  }
];
const leather = [
  {
    name: "Leather Birkens", 
    price: "$0.00", 
    description: "Leather Birkenstocks", 
    image: "./images/imagecompressor/birkenstocks.png"
    },
    {
    name: "Leather Birkens", 
    price: "$0.00", 
    description: "Leather Birkenstocks", 
    image: "./images/imagecompressor/birkenstocks.png"
    },
    {
    name: "Leather Birkens", 
    price: "$0.00", 
    description: "Leather Birkenstocks", 
    image: "./images/imagecompressor/birkenstocks.png"
    },
    {
    name: "Leather Birkens", 
    price: "$0.00", 
    description: "Leather Birkenstocks", 
    image: "./images/imagecompressor/birkenstocks.png"
    }
];
const wearable = [
  {
    name: "Graphic Onsie", 
    price: "$0.00", 
    description: "Soft cotton onsie", 
    image: "./images/imagecompressor/brown-saddle-tie-min.png"
  },
  {
    name: "Graphic Onsie", 
    price: "$0.00", 
    description: "Soft cotton onsie", 
    image: "./images/imagecompressor/brown-saddle-tie-min.png"
  },
  {
    name: "Graphic Onsie", 
    price: "$0.00", 
    description: "Soft cotton onsie", 
    image: "./images/imagecompressor/brown-saddle-tie-min.png"
  },
  {
    name: "Graphic Onsie", 
    price: "$0.00", 
    description: "Soft cotton onsie", 
    image: "./images/imagecompressor/brown-saddle-tie-min.png"
  }
];
const custom = [
  {
    name: "Welding Helmet", 
    price: "$TBD", 
    description: "Custom welding helmet",
    image: "./images/imagecompressor/welding-helmet.jpg"
  },
  {
    name: "Welding Helmet", 
    price: "$TBD", 
    description: "Custom welding helmet",
    image: "./images/imagecompressor/welding-helmet.jpg"
  },
  {
    name: "Welding Helmet", 
    price: "$TBD", 
    description: "Custom welding helmet",
    image: "./images/imagecompressor/welding-helmet.jpg"
  },
  {
    name: "Welding Helmet", 
    price: "$TBD", 
    description: "Custom welding helmet",
    image: "./images/imagecompressor/welding-helmet.jpg"
  }
];


// Clickable image buttons
images.forEach(function (img) {
  img.addEventListener("click", function () {
    const targetPage = img.getAttribute("data-link");
    window.location.href = targetPage;
  });
});

// Dropdown menu toggle (only if toggle exists)
if (toggle && menu) {
  toggle.addEventListener("click", function () {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  });
}

// Login button
if (loginButton) {
  loginButton.addEventListener("click", function () {
    alert("Login feature coming soon!");
  });
} else {
  console.log("No login button found");
}

// function to display all items for sale, (wearables and leather too)
function renderItems(containerId, itemArray) {
  const container = document.getElementById(containerId);
  if (!container) return;

  itemArray.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("item-card");

    card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>${item.description}</p>
    <span class="price">${item.price}</span>
    `;
  container.appendChild(card);
  });
}
//call the other lists after function is defined
document.addEventListener("DOMContentLoaded", function() {
  renderItems("leather-list", leather);
  renderItems("wearable-list", wearable);
  renderItems("custom-list", custom);
  renderItems("item-list", items);
});

// chat toggle logic
if (chatToggle && chatBox && closeChat) {
  chatToggle.addEventListener("click", function() {
    chatBox.style.display = "block";
  });
  closeChat.addEventListener("click", function() {
    chatBox.style.display = "none";
  });
}
//chat toggle logic
if (chatForm) {
  chatForm.addEventListener("submit", function(event) {
    event.preventDefault(); // this will stop the page from refreshing/reloading

    console.log(document.getElementById("chatMessage")); //

    // get values (you can also send this to a real backend later)
    // const name = document.getElementById("chatName").value;
    const message = document.getElementById("chatMessage").value;
    console.log("Message:", message); // just to confirm it's working

    // customize the alert
    alert(`Thanks! Your message was sent.`);

    // reset the form and hide the chat box
    chatBox.style.display = "none";

    // reset the form
    chatForm.reset();
  });
}