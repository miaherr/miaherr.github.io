

function filterProjects(e) {
    const projects = document.querySelectorAll(".box-2 a");
    let filter = e.target.dataset.filter;
    if (filter === '*') {
      projects.forEach(project => project.classList.remove('hidden'));
    }  else {
      projects.forEach(project => {
        project.classList.contains(filter) ? 
        project.classList.remove('hidden') : 
        project.classList.add('hidden');
      });
    };
  };



  var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}


