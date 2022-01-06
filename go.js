


function changeCar(phrase, old, news, debut, fin){
    this.phrase = phrase;
    this.old= old;
    this.new = news;
    this.debut = debut;
    this.fin = fin;
   
    
}
const phrase = new changeCar(" I have many cars my old is pink colour ",""," ","null", "null");
console.log(phrase);
console.log(phrase.replace('old','new'));




