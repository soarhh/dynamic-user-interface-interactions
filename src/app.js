'use strict';

const app = (function() {
  const navBar = document.querySelector("#navBar");
  const dropDownContainer = document.querySelector("#drop-down-container")
  const gaming = document.querySelector("#gaming");
  const notebooks = document.querySelector("#notebooks");
  const components = document.querySelector("#components");

  navBar.addEventListener("mouseover", (e) => {
    if (e.target === gaming) {
      renderDropDownContent("gaming")
      enableDropDown();
    }
  })
  
  dropDownContainer.addEventListener("mouseout", (e) => {
    if (e.target === dropDownContainer) removeDropDown();
  })

  const enableDropDown = function() {
    dropDownContainer.classList.add("show");
  }

  const removeDropDown = function() {
    dropDownContainer.classList.remove("show");
  }

  const renderDropDownContent = function(content) {
    const gamingContent = `
      <div class="child">
      <ul class="apparel">
        <li>T-shirts</li>
        <li>Hats</li>
      </ul>
      <ul class="gaming-accessories">
        <li>Digital Eyewear</li>
        <li>Flight Simulation</li>
        <li>Gamepads & Controllers</li>
        <li>Joysticks</li>
        <li>Steering Wheels</li>
        <li>Streaming Gear</li>
        <li>Video Capture</li>
      </ul>
      <ul class="gaming-furniture">
        <li>Floor Mats</li>
        <li>Gaming Chairs</li>
        <li>Gaming Desks</li>
      </ul>
      <ul class="virtual-reality">
        <li>Headsets</li>
        <li>Accessories</li>
      </ul>
    </div>
  `;
  switch (content) {
    case "gaming":
      dropDownContainer.innerHTML = gamingContent;
      break;
  }

  }
})();

/*  
  <div class="notebooks">
    <ul class="sub-category">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul class="i-need-a-deice">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul class="shop-by-screen-size">
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul class="shop-by-brand">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  <div class="components">
    <ul class="cpu">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul class="graphics-cards">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul class="hardDrives-and-SSDs">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div> */