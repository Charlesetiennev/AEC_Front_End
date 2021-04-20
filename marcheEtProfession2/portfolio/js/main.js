// Modal
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Section actif sur menu
let menuSection = document.querySelectorAll('#nav li a');
// Click
menuSection.forEach(v => {
  v.onclick = (() => {
    setTimeout(() => {
      menuSection.forEach(j => j.classList.remove('active'))
      v.classList.add('active')
    }, 300)
  })
})
// Scroll
window.onscroll = (() => {
  let mainSection = document.querySelectorAll('section');

  mainSection.forEach((v, i) => {
    let rect = v.getBoundingClientRect().y
    if (rect < window.innerHeight - 600) {
      menuSection.forEach(v => v.classList.remove('active'))
      menuSection[i].classList.add('active')
    }
  })
})
// Hide and Show Navbar
let screenSize = window.innerWidth || document.documentElement.clientWidth;
if(screenSize < 980){
  var lastScrollTop = 0;
  navigation = document.getElementById("navBar");
  window.addEventListener("scroll",function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
      navigation.style.transform = "translateY(-100%)";
    }
    else{
      navigation.style.transform = "translateY(0%)";
    }
    lastScrollTop = scrollTop
  })

}
window.addEventListener('resize',function(){
  screenSize = window.innerWidth || document.documentElement.clientWidth;
    if(screenSize<980){
      var lastScrollTop = 0;
  navigation = document.getElementById("navBar");
  window.addEventListener("scroll",function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
      navigation.style.transform = "translateY(-100%)";
    }
    else{
      navigation.style.transform = "translateY(0%)";
    }
    lastScrollTop = scrollTop
  }) 
    }
    else{
      navigation.style.transform= "translateY(0%)"
    }
},false)

// Cureur Section a propos
const cursor = document.querySelector('.cursor');
const sectionAPropos = document.getElementById('aPropos')
function showCursor() {
  document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + e.pageY + "px; left:" + e.pageX + "px; visibility: visible;");
    sectionAPropos.setAttribute("style", "cursor: none;");
  })
}
function hideCursor() {
  document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + e.pageY + "px; left:" + e.pageX + "px; visibility:hidden ;");
  })
}