var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.'
var dinosaur = 'triceratops'

var dinosaurUpperCased = dinosaur.toUpperCase();

var textCharsAfter = text.replace('Velociraptor', dinosaurUpperCased);




function firstHalf(textCharsAfter) {
 if (textCharsAfter.length % 2 == 0) {
  return textCharsAfter.slice(0, textCharsAfter.length / 2);
 }
 return textCharsAfter;
}
console.log(firstHalf(textCharsAfter));

document.write(firstHalf(textCharsAfter)