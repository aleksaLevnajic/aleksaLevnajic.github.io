console.log("proba");


//var about =

 document.getElementById("aboutTekst").innerHTML = `TravelEasy is international travel agency that allows you to visit one of the most beautiful places in the world with easy way to book it.
 We have more than 700 diffrent place for you to visit with your family, your partner or even all by yourself. What we offer is a great expirience 
 and a lot of things to learn about foreign cultures and traditions.Our guides and travel managers have a lot of expirience in trip planning as also in
 organasations of all kind of diffrent patries and custom carnevals that made over a 30000 of our clients happy and gave them something that they will always remember.`;

 var j = 0;
 var text;
 text = `TravelEasy`;

function kucanje(){
    if(j < text.length)
    {
        document.getElementById("probaJS").innerHTML += text.charAt(j);
        j++;
        setTimeout(kucanje, 100);
    }
}      
kucanje();  

var nizSrc = ["images/cuba.jpg", "images/zante.jpg", "images/alpi.jpg", "images/rio.jpg", "images/ny.jpg",
             "images/monte-carlo.jpg", "images/paris.jpg", "images/bankok.jpg", "images/jerusalim.jpg"];

var nizAlt = ["Cuba", "Greece", "France", "Brasil", "USA", "Monaco", "France", "Thailand", "Israel"];

var nizTitle = ["Havana, Cuba", "Zakynthos, Greece", "West Alps, France", "Rio de Jeneiro, Brasil", "New York, USA",
                "Monte Carlo, Monaco", "Paris, France", "Bangkok, Thailand", "Jerusalem, Israel"];

var nizDesc = ["A place where you can put all your problems away.",
              "An island with beautiful beaches and the best parties.",
              "A great place for skiing and enjoying winter holidays.",
              "Warm exotic city with a breathtaking views.", 
              "One of the biggest cities in the world and the center of international finance.",
              "The most luxurious city in Europe.",
              "City of light and romance is one of the most beautiful in Europe.",
              "The most visited city in the world.",
              "An ancient city of Middle-East with huge cultural history."];

var ispisGalerija = "";

for(let j = 0; j < nizSrc.length; j++)
{
    ispisGalerija += `
    <a class="each-portfolio" data-fancybox="gallery" href="${nizSrc[j]}">
        <div class="content hover-cont-wrap">
            <div class="content-overlay"></div>
                <img class="content-image" src="${nizSrc[j]}" alt="${nizAlt[j]}">
            <div class="content-details fadeIn-bottom">
                <h5 class="p-title">${nizTitle[j]}</h5>
                <p class="p-desc">${nizDesc[j]}</p>
                <span class="zoom"><i class="fa fa-search-plus"></i></span>
            </div>
        </div>
    </a>`
}

document.querySelector(".portfolio-wrapper ").innerHTML = ispisGalerija;



//var nizTh = ["Airport", "Location", "Departure", "Price"];
var nizAerodrum = ["Airport", "Beijing Capital International Airport", "Los Angeles International Airport", "Dubai International Airport", " Tokyo Haneda Airport", "London Heathrow Airport", "Shanghai Pudong International Airport", "Charles de Gaulle Airport", "Amsterdam Airport Schiphol", "Seoul Incheon International Airport", "Frankfurt Airport", "Singapore Changi Airport"];
var nizLet = ["Location"," Beijing, China", "Los Angeles, USA", "Dubai, UEA", "Tokyo, Japan", "London, UK", "Shanghai, China", "Paris, France", "Amsterdam, Netherlands", "Incheon, South Korea", "Frankfurt, Germany", "	Changi, East Region, Singapore"];
var nizPolazak = ["Departure", "18:00", "11:00", "17:30", "12:15", "9:45", "23:00", "14:30", "20:00", "9:00", "11:00", "14:50"];
var nizCena = ["Price", "$179.59", "$126.99", "$118.80", "$219.89", "$169.99", "$185.89", "$89.50", "$78.20", "$230.59", "$119.89$", "$249.89$"];

var tagTable = document.createElement("table");
tagTable.setAttribute("border", "1");
tagTable.setAttribute("class", "table");


for(let i = 0; i < nizLet.length; i++){
     
   
    var TrTag = document.createElement("tr");
    if(i==0)
    {
        TrTag.setAttribute("class", "prviTr");
    }
    

    var tagTd01 = document.createElement("td");
    var sadrzajTagaTd01 = document.createTextNode(nizAerodrum[i]);

    var tagTd02 = document.createElement("td");
    var sadrzajTagaTd02 = document.createTextNode(nizLet[i]);

    var tagTd03 = document.createElement("td");
    var sadrzajTagaTd03 = document.createTextNode(nizPolazak[i]);

    var tagTd04 = document.createElement("td");
    var sadrzajTagaTd04 = document.createTextNode(nizCena[i]);

    
    tagTd01.appendChild(sadrzajTagaTd01);
    tagTd02.appendChild(sadrzajTagaTd02);
    tagTd03.appendChild(sadrzajTagaTd03);
    tagTd04.appendChild(sadrzajTagaTd04);

    TrTag.appendChild(tagTd01);
    TrTag.appendChild(tagTd02);
    TrTag.appendChild(tagTd03);
    TrTag.appendChild(tagTd04);

    tagTable.appendChild(TrTag);

}
document.querySelector("#tabela-01").appendChild(tagTable);

$(document).ready(function(){
    $('#tabela-01 tr').click(function(){
        $(this).toggleClass('zebraHover');
    });
});
//$(documnet).ready(function(){
 //   $('#tabela-01 tr').click(function(){
       
//    });
//});

let obradaForme = [];
let dugme = $(':button');
dugme.click(function(){
    let ime = $('#ime');
    let prezime = $('#prezime');
    let mail = $('#email');
    //let tel = $('#tel');
    //let poruka = $('#poruka');

    let imeProvera = /^[A-Z][a-z]{2,20}$/;
    let prezimeProvera = /^[A-Z][a-z]{2,20}$/;
    let emailProvera = /^\w([\.-_]?\w+\d*)*@\w+\.\w{2,6}$/;
    //let proveraTel = /^[0-9]{8,11}$/;
    //IME
    if(ime.val() == '')
    {
        ime.val('');
        ime.attr('placeholder', 'First name can\'t be empty. ');
    }
    else if(imeProvera.test(ime.val()))
    {
        obradaForme.push(ime.val());        
    }
    else
    {
        ime.val('');
        ime.attr('placeholder', 'You didn\'t fill yor name correctly (eg. Chris). ');
        //ime.val("");
        //ime.attr('placeholder', 'First name');
    }
    //PREZIME
    if(prezime.val() == "")
    {
        prezime.val('');
        prezime.attr('placeholder', 'Last name can\'t be empty. ');
    }
    else if(prezimeProvera.test(ime.val()))
    {   
        obradaForme.push(prezime.val());        
    }
    else
    {
        prezime.val('');
        prezime.attr('placeholder', 'You didn\'t fill yor last name correctly (eg. Jones). ');
    }
    //EMAIL
    if(mail.val() == "")
    {
        mail.val('');
        mail.attr('placeholder', 'Email is requierd');
    }
    else if(emailProvera.test(mail.val()))
    {   
        obradaForme.push(mail.val());        
    }
    else
    {
        mail.val('');
        mail.attr('placeholder', 'You didn\'t fill yor last name correctly (eg. something@gmail.com). ');
    }
    //TELEFON
    // if(tel.val() == "")
    // {
    //     tel.val('');
    //     tel.attr('placeholder', 'eg. 06X XXX XXXX');
    // }                
    // else
    // {
    //     obradaForme.push(tel.val());  
    // }

});