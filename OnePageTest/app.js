var icon = document.querySelectorAll('i');

for (var i = 0; i < icon.length; i++) {
  icon[i].addEventListener('mouseover', function(event){
   var target = icon[i];
    event.target.style.backgroundColor = 'white';
    for (var i = 0; i < icon.length; i++) {
      this.addEventListener('mouseout', function(event){
      event.target.style.backgroundColor = "";
      });
    }
  });
};

var program = document.querySelector('.program');
var ligne = document.querySelectorAll('.line');
var newp = document.createElement('p');
var h3 = document.getElementsByName('h3');
var descriptif = document.getElementById('texte');

// function text(){
//   program.appendChild(newp);
// }
//
// function efface(){
//   newp.innerHTML = "";
// }

for (var i = 0; i < ligne.length; i++) {
  ligne[i].addEventListener('mouseover' , function(event){
    this.style.backgroundColor = '#D6C0BA';
    descriptif.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti itaque iure saepe sit, dolorem quia! At expedita eius molestiae odit quia animi vero ad corrupti?';
    // text();
    for (var ii = 0; ii < ligne.length; ii++){
      ligne[ii].addEventListener('mouseout',function(event){
        this.style.backgroundColor = "";
        descriptif.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni sapiente natus pariatur fuga, ipsam odio inventore fugit at aperiam dolorum! Sit numquam error culpa laudantium aliquid, eaque dicta repudiandae voluptates?50';
        event.preventDefault();
        // efface();
        });
      }
    });
  };
