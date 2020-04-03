"use strict";


var slideIndex = 0;  // Initalisation de slideIndex à 0
showSlides(); // Nom de la fonction

function showSlides() { // Création de la fonction
  var i; // Déclaration de la variable i
  var slides = document.getElementsByClassName("mySlides"); // Déclaration de la variable slides par document.getElementsByClassName qui récupère la class "mySlides"
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change l'image toute les deux secondes
}