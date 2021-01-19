var arr = new Array(5);

var randomNumber = function getRandomIntInclusive() {
    min = Math.ceil(-100);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

function fillArray(l) {

    for(let i = 0; i<l.length; i++) {
        l[i]=(randomNumber())
    }
}
var replaceFromArray= function replaceFromArray (l) {
    for(let i = 0; i<l.length; i++) {
        if(l[i]<0){
            l[i] = 0;
        }
    }
}
function addToArray(l) {
	for(let i = 0; i<l.length; i++) {
        if(l[i]===0){
            i++;
            l.splice(i, 0,-1);
       
        }
    }
}

fillArray(arr);
replaceFromArray(arr);
addToArray(arr);
console.log(arr);

