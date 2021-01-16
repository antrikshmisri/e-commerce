
function openNav() {
      document.getElementById("mySidenav").style.transform = "translateX(0%)";
      document.querySelector('.menu-btn').style.left = 'calc(100% - 1em - 50px - 1em)'
      document.querySelector('.menu-btn').style.transform = 'rotateZ(540deg)'
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.transform = "translateX(-100%)";
    document.querySelector('.menu-btn').style.left = '0%'
    document.querySelector('.menu-btn').style.transform = 'rotateZ(0deg)'

  }

  