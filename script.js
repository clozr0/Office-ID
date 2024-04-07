// Movement in the header of the site

let header = document.querySelector('#address');

window.addEventListener ('scroll', function () {
    if (scrollY >= 35) {
      header.style.top = "-66px";
    }
    else {
      header.style.top = "0px";
    }
})