window.onload = function() {
  let a = document.querySelectorAll("#navigationLink")
  a.forEach((item, i) => {
    if(item.href === document.location.href){
      item.classList.add("navHover");
    }
  });

}
