

window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function(){
      var preloader = document.getElementById('page-preloader');
      preloader.classList.remove("preloader");
      preloader.classList.add("done");
    }, 1000);
  let a = document.querySelectorAll("#navigationLink")
  a.forEach((item, i) => {
    if(item.href === document.location.href){
      item.classList.add("navHover");
    }
  });

  let pctGallery = document.getElementById('pictureGallery');


    fetch('https://jsonplaceholder.typicode.com/photos')
         .then((response) => {
            if (!response.ok) {
               throw new Error(response.status);
            } else {
               return response.json();
            }
         })

         .then((json) => {
           json.forEach((item) => {
               var pictere = document.createElement("img");
               pictere.src = item.url;
               pictere.style.width = "150px";
               pictere.style.height = "150px";
               pctGallery.appendChild(pictere);
            });
         })

         .catch((error) => {
            pctGallery.innerHTML = '<p style="color: red; font-weight: bold; text-transform: uppercase;">⚠Что-то пошло не так</p>';
            pctGallery.innerHTML += 'Error: ' + error;
         });

});
