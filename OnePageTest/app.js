var icon = document.querySelectorAll('i');

for (var i = 0; i < icon.length; i++) {
  icon[i].addEventListener('mouseover', function(event){
   var target = icon[i];
    event.target.style.backgroundColor = 'black';

   setTimeout(function() {
    event.target.style.backgroundColor = "";
  },100);
  },false);
};
