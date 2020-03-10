const menuButton = document.querySelector(".fa-bars");
    const navList = document.querySelector("#nav-list");  
  // show hide menu
  menuButton.addEventListener('click', () => navList.classList.toggle("show"));
  // rotate menu button
  menuButton.addEventListener('click', () => menuButton.classList.toggle("turn"));

