const MenuButton = document.getElementById("burger");
const MenuFeedbackButton = document.getElementsByClassName("open_menuf");
const openMenuCall = document.getElementsByClassName("open_menu_call");

const Menu1 = document.getElementById("main-unit");
const MenuFeedback = document.getElementById("menu_feedback");
const MenuCall = document.getElementById("menu_call");

const closeMenu = document.getElementById("close-menu");
const MenuFeedbackClose = document.getElementById("close_menu_feedback");
const CloseMenuCall = document.getElementById("close_menu_call")




MenuButton.addEventListener("click", () => {
  Menu1.classList.toggle("main__unit--active");
});

closeMenu.addEventListener("click", () => {
  Menu1.classList.remove("main__unit--active");
});


for (let i = 0; i < MenuFeedbackButton.length; i++){
  MenuFeedbackButton[i].addEventListener("click", () => {
    MenuFeedback.classList.toggle("menu_feedback--active");
  });
  
}
MenuFeedbackClose.addEventListener("click", () => {
  MenuFeedback.classList.remove("menu_feedback--active");
});




for (let i = 0; i < openMenuCall.length; i++){
  openMenuCall[i].addEventListener("click", () => {
    MenuCall.classList.toggle("menu_call--active");
  });
}
CloseMenuCall.addEventListener("click", () => {
  MenuCall.classList.remove("menu_call--active");
});





