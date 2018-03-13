var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';

var dinosaurUpperCased = dinosaur.toUpperCase();

var text = text.replace('Velociraptor', dinosaurUpperCased);

function firstHalf(text) {
 if (text.length % 2 == 0) {
  return text.slice(0, text.length / 2);
 }
 return text;
}
console.log(firstHalf(text));

document.write(firstHalf(text));