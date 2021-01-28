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
    if (rect < window.innerHeight - 200) {
      menuSection.forEach(v => v.classList.remove('active'))
      menuSection[i].classList.add('active')
    }
  })
})
