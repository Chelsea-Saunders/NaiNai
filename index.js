// arrays first
const items = [
  {
    name: "Mr & Mrs Champagne Glasses",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/mr-mrs.jpg"
  }, 
  {
    name: "Tooled Leather Notebook",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/notebook-outside.jpg"
  },
  {
    name: "Tooled Leather Calendars",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/calendars.jpg"
  },
  {
    name: "Tooled Leather Glasses Case",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/case.jpg"
  },
  {
    name: "Tooled Leather Halter",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/halter.jpg"
  },
  {
    name: "Tooled Pillow: Bucking Horse",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/pillow2.jpg"
  },
  {
    name: "Tooled Pillow: Horse Roping",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/pillow1.jpg"
  },
  {
    name: "Tooled Leather Seat Covers",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/seat-cover.jpg"
  },
  {
    name: "Tooled Leather Welding Helmet",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/welding-helmet.jpg"
  },
  {
    name: "Tooled Leather Picture Frame",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/picture-frame.jpg"
  },
  {
    name: "Tooled Leather Mug",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/mug.jpg"
  },
  {
    name: "Tooled Leather Hat: Just Livin'",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/hat2.jpg"
  },
  {
    name: "Tooled Leather Mugg Hugger",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/mug-hugger.jpg"
  },
  {
    name: "Tooled Leather Hat: Moonlight Cattle Co.",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/hat1.jpg"
  },
  {
    name: "Tooled Leather Phone Case: Horse",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/phone-case-horse.png"
  },
  {
    name: "Tooled Leather Heels",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/tasiya-heels.png"
  },
  {
    name: "Tooled Leather Wallet",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/wallet.png"
  },
  {
    name: "Tooled Leather Skillet Handle Guard",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/skillet-handle.png"
  },
  {
    name: "Tooled Leather Berkenstocks",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/birkenstocks.png"
  },
  {
    name: "Tooled Leather Leather Toed Shoes",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/leather-toed-shoes.png"
  },
  {
    name: "Tooled Leather Twisted X Shoes",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/twistec-x-shoes.png"
  },
  {
    name: "Tooled Leather Spur Straps",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/spurs.png"
  },
  {
    name: "Tooled Leather Hair Clip",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/hair-clip.png"
  },
  {
    name: "Tooled Leather Hats",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/larg-hat-order.png"
  },
  {
    name: "Screen-printed Western Onsie",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/onsie.png"
  },
  {
    name: "Screen-printed Western Tie",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/brown-saddle-tie-min.png"
  }
];
const leather = [
  {
    name: "Mr & Mrs Champagne Glasses",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/mr-mrs.jpg"
  }, 
  {
    name: "Tooled Leather Notebook",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/notebook-outside.jpg"
  },
  {
    name: "Tooled Leather Calendars",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/calendars.jpg"
  },
  {
    name: "Tooled Leather Glasses Case",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/case.jpg"
  },
  {
    name: "Tooled Leather Halter",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/halter.jpg"
  },
  {
    name: "Tooled Pillow: Bucking Horse",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/pillow2.jpg"
  },
  {
    name: "Tooled Pillow: Horse Roping",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/pillow1.jpg"
  },
  {
    name: "Tooled Leather Seat Covers",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/seat-cover.jpg"
  },
  {
    name: "Tooled Leather Welding Helmet",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/welding-helmet.jpg"
  },
  {
    name: "Tooled Leather Picture Frame",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/picture-frame.jpg"
  },
  {
    name: "Tooled Leather Mug",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/mug.jpg"
  },
  {
    name: "Tooled Leather Hat: Just Livin'",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/hat2.jpg"
  },
  {
    name: "Tooled Leather Mugg Hugger",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/mug-hugger.jpg"
  },
  {
    name: "Tooled Leather Hat: Moonlight Cattle Co.",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/hat1.jpg"
  },
  {
    name: "Tooled Leather Phone Case: Horse",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/phone-case-horse.png"
  },
  {
    name: "Tooled Leather Heels",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/tasiya-heels.png"
  },
  {
    name: "Tooled Leather Wallet",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/wallet.png"
  },
  {
    name: "Tooled Leather Skillet Handle Guard",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/skillet-handle.png"
  },
  {
    name: "Tooled Leather Berkenstocks",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/birkenstocks.png"
  },
  {
    name: "Tooled Leather Leather Toed Shoes",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/leather-toed-shoes.png"
  },
  {
    name: "Tooled Leather Twisted X Shoes",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/twistec-x-shoes.png"
  },
  {
    name: "Tooled Leather Spur Straps",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/spurs.png"
  },
  {
    name: "Tooled Leather Hair Clip",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/hair-clip.png"
  },
  {
    name: "Tooled Leather Hats",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/larg-hat-order.png"
  }
];
const wearable = [
  {
    name: "Screen-printed Western Onsie",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/onsie.png"
  },
  {
    name: "Screen-printed Western Tie",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/brown-saddle-tie-min.png"
  },
  {
    name: "Tooled Leather Welding Helmet",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/welding-helmet.jpg"
  },
  {
    name: "Tooled Leather Berkenstocks",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/birkenstocks.png"
  },
  {
    name: "Tooled Leather Leather Toed Shoes",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/leather-toed-shoes.png"
  },
  {
    name: "Tooled Leather Twisted X Shoes",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/twistec-x-shoes.png"
  },
  {
    name: "Tooled Leather Heels",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/tasiya-heels.png"
  },
  {
    name: "Tooled Leather Spur Straps",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/spurs.png"
  },
  {
    name: "Tooled Leather Hair Clip",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/hair-clip.png"
  },
  {
    name: "Tooled Leather Hats",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/larg-hat-order.png"
  },
  {
    name: "Tooled Leather Hat: Moonlight Cattle Co.",
    price: "$0.00",
    description: "Handmade with love and precision.",
    image: "./images/imagecompressor/hat1.jpg"
  },

];
const custom = [
  {
    name: "Welding Helmet", 
    price: "$TBD", 
    description: "Custom welding helmet",
    image: "./images/imagecompressor/welding-helmet.jpg"
  }
];

// helper functions next
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


//DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".main-button");
  const toggle = document.querySelector(".dropdown-toggle");
  const menu = document.querySelector(".dropdown-links");
  const loginButton = document.querySelector(".login-button");
  const chatToggle = document.getElementById("chatToggle");
  const chatBox = document.getElementById("chatBox");
  const closeChat = document.getElementById("closeChat");
  const chatForm = document.getElementById("chatForm");
  const slider = document.querySelector(".slideX");
  const slides = Array.from(document.querySelectorAll(".slides"));

  // render items
  renderItems("leather-list", leather);
  renderItems("wearable-list", wearable);
  renderItems("custom-list", custom);
  renderItems("item-list", items);


  // image buttons
  images.forEach(img => {
    img.addEventListener("click", function() {
      const targetPage = img.getAttribute("data-link");
      window.location.href = targetPage;
    });
  });

  // dropdown toggle
  if (toggle && menu) {
    toggle.addEventListener("click", function() {
      menu.classList.toggle("show");
    });
  }

  // login button
  if (loginButton) {
    loginButton.addEventListener("click", function() {
      alert("Login feature coming soon!");
    });
  }

  // chat toggle logic
  if (chatToggle && chatBox && closeChat) {
    chatToggle.addEventListener("click", function() {
      chatBox.style.display = "block";
    });
    closeChat.addEventListener("click", function() {
      chatBox.style.display = "none";
    });
  }

  // chat form logic
  if (chatForm) {
    chatForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const message = document.getElementById("chatMessage").value;
      console.log("Message:", message);
      alert(`Thanks! Your message was sent.`);
      chatBox.style.display = "none";
      chatForm.reset();
    });
  }
  // slider logic
  let isDragging = false,
     startposition = 0, 
     currentTranslate = 0, 
     previousTranslate = 0, 
     animationID = 0, 
     currentIndex = 0;

  slides.forEach ((slide, index) => {
    const slideImage = slide.querySelector('img')
    slideImage.addEventListener('dragstart', (e) => e.preventDefault());

    // touch events
    slide.addEventListener("touchstart", (e) => touchStart(index)(e));
    slide.addEventListener("touchend", touchEnd)
    slide.addEventListener("touchmove", touchMove)

    // mouse events
    slide.addEventListener("mousedown", (e) => touchStart(index)(e));
    slide.addEventListener("mouseup", touchEnd)
    slide.addEventListener("mouseleave", touchEnd)
    slide.addEventListener("mousemove", touchMove)
  });

  // disable 
  window.oncontextmenu = function(event) {
    const target = event.target;

    // only block rightclick on images inside the slider
    if (target.closest(".slider-container img")) {
      event.preventDefault();
      event.stopPropagataion();
      return false;
    }
    return true;
  }
  currentPosition = 0;

  function touchStart(index) {
    return function (event) {
      currentIndex = index;
      startPosition = getPositionX(event);
        console.log(startPosition);
      isDragging = true;

      // animation - request animation frame
      animationID = requestAnimationFrame(animation);
      slider.classList.add("grabbing");
    }
  };
  function touchEnd() {
    isDragging = false;
    cancelAnimationFrame(animationID);

    const movedBy = currentTranslate - previousTranslate;

    // this will make the slides go to the right
    if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;

    // this will make the slides move left
    if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;

    setPositionByIndex();

    slider.classList.remove("grabbing");
  };
  function touchMove(event) {
    if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = previousTranslate + currentPosition - startPosition;
    }
  };
  function getPositionX(event) {
    return event.type.includes('mouse') 
    ? event.pageX 
    : event.touches[0].clientX;
  };
  function animation() {
    setSliderPosition();
    if(isDragging) requestAnimationFrame(animation);
  };
  function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`
  }
  function setPositionByIndex() {
    currentTranslate = currentIndex * -window.innerWidth;
    previousTranslate = currentTranslate;
    setSliderPosition();
  }
});