//Show Menu on Mobile
const showMenu = (toggleId , navId) => {
  const toggle = document.getElementById(toggleId)
  //console.log(toggleId);

  nav = document.getElementById(navId)
  
  //validation if the variables exists
  if (toggle && nav){
    //add the class show-menu to the div with the class show-menu
    toggle.addEventListener('click' , () =>{
      //add the class show menu to the div with the id nav-menu
      nav.classList.toggle('show-menu')
    })
  }
}
showMenu('nav-toggle', 'nav')

//Hiding the menu when any of the nav-links are clicked
const navlink = document.querySelectorAll('.nav_link')
function linkAction() {
  const navMenu = document.getElementById('nav')
  //when a link or a close button is clicked, the class show menu is removed
  navMenu.classList.remove('show-menu')
}
//iterate through ech of the nav_link elements while waiting for click events to call the linkAction() function
navlink.forEach(n => n.addEventListener('click', linkAction))

//function to activate links in the class active-link to a diffrent color
const linkColor = document.querySelectorAll('.nav_link')

function colorLink() {
  if(linkColor){

    //remove 'active link' class from all links
    linkColor.forEach(L => L.classList.remove('active-link'))

    //Add 'active-link' to the clicked clicked elemenent of the 'active link' class
  }
}
//add an event listener to all the '.nav-link'  elements
linkColor.forEach(L => L.addEventListener('click', colorLink))

//function to change the color of the header
function scrollHeader(){
  const scrollHeader = document.getElementById('header')
  if (this.scrollY >= 100) scrollHeader.classList.add('scroll-header');
    else scrollHeader.classList.remove('scroll-header')

}
window.addEventListener('scroll', scrollHeader)
