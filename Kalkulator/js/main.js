'use strict';

var zero = document.getElementById("zero");
var jeden = document.getElementById("jeden");
var dwa = document.getElementById("dwa");
var trzy = document.getElementById("trzy");
var cztery = document.getElementById("cztery");
var piec = document.getElementById("piec");
var szesc = document.getElementById("szesc");
var siedem = document.getElementById("siedem");
var osiem = document.getElementById("osiem");
var dziewiec = document.getElementById("dziewiec");
var c = document.getElementById("usun");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var mnozenie = document.getElementById("iloczyn");
var dzielenie= document.getElementById("iloraz");
var kropka = document.getElementById("kropka");
var rowna = document.getElementById("rowna");
var pole = document.getElementById("okno");


siedem.addEventListener("click", function(e){
    e.preventDefault();
    
    var wartoscSiedem = siedem.value;
    pole.value += wartoscSiedem;
})


osiem.addEventListener("click", function(e){
    e.preventDefault();
    
    var wartoscOsiem = osiem.value;
    pole.value += wartoscOsiem;
})

dziewiec.addEventListener("click", function(e){
    e.preventDefault();
    
    var wartoscDziewiec = dziewiec.value;
    pole.value += wartoscDziewiec;
})


cztery.addEventListener("click", function(e){
    e.preventDefault();
    
    var wartoscCztery = cztery.value;
    pole.value += wartoscCztery;
})
piec.addEventListener("click", function(e){
    e.preventDefault();
    
    var wartoscPiec = piec.value;
    pole.value += wartoscPiec;
})


szesc.addEventListener("click", function(e){
    e.preventDefault();
    
    var wartoscSzesc = szesc.value;
    pole.value += wartoscSzesc;
})

jeden.addEventListener("click", function(e){
    e.preventDefault();
    
    var wartoscJeden = jeden.value;
    pole.value += wartoscJeden;
})

trzy.addEventListener("click", function(e){
    e.preventDefault();
    
    var wartoscTrzy = trzy.value;
    pole.value += wartoscTrzy;
})


minus.addEventListener("click", function(e){
    e.preventDefault();
    
    var wartoscMinus = minus.value;
    pole.value += wartoscMinus;
})
plus.addEventListener("click", function(e){
    e.preventDefault();
    
    var wartoscPlus = plus.value;
    pole.value += wartoscPlus;
})


dwa.addEventListener("click", function(e){
    e.preventDefault();
    
    var wartoscDwa = dwa.value;
    pole.value += wartoscDwa;
})

dzielenie.addEventListener("click", function(e){
    e.preventDefault();
    
    var wartoscDziel = dzielenie.value;
    pole.value += wartoscDziel;
})


mnozenie.addEventListener("click", function(e){
    e.preventDefault();
    
    var wartoscMno = mnozenie.value;
    pole.value += wartoscMno;
})
kropka.addEventListener("click", function(e){
    e.preventDefault();
    
    var wartoscKrop = kropka.value;
    pole.value += wartoscKrop;
})

c.addEventListener("click", function(e){
    e.preventDefault();
    
    var wartoscCe = "";
    pole.value = wartoscCe;
})

rowna.addEventListener("click", function(e){
    e.preventDefault();
    
    var wynik = eval(pole.value);
    
    pole.value = wynik;
    
})