const settings = {
    loop: true,
  
    speed: 700,
  
    pagination: {
      el: ".swiper-pagination",
      type: "bullets"
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };
  
  const swiper = new Swiper(".mySwiper", settings);
//Search js
function technologyopen(){
  //Location js
  let location = document.getElementById("location-input");
  let locationvalue = location.value;
  let locationtext = location.options[location.selectedIndex].text;

  if(locationtext =="<--Select-->"){
    alert("Enter The Location.");
  }
}