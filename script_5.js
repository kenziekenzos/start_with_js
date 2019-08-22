console.log(".")
console.log(".")
console.log(".")

console.log(" Dans quelques minutes la suite ...  ! ")
console.log(".")
console.log("——————————————————————————— BIBLIOTHEQUE ———————————————————————————")



const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];


  //les livres ont été au moins empruntés une fois ?  


let number = books.rented; //fais ensuite le test avec d'autres valeurs
if(number != 0) {
  console.log("oui c'est vrai, les livres ont été empruntés");
} 


  //le livre le plus emprunté ?  

//   emprunt=Math.max.apply(Math, books.map(function(o) { return o.rented; }))
//   console.log(emprunt) 
  

var bookose = books.forEach(function(book){
    console.log(book.title);
});

console.log(bookose.sort)

  //le livre le plus emprunté ?  
  delaisse=Math.min.apply(Math, books.map(function(moins) { return moins.rented; }))
  console.log(delaisse) 

