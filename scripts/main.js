console.log("proba");



var k = 0;
var nizTxt = [`TravelEasy is international travel agency that allows you to visit one of the most beautiful
 places in the world with easy way to book it.
  We have more than 700 diffrent place for you to visit with your family, your partner or even all by yourself.
   What we offer is a great expirience 
 and a lot of things to learn about foreign cultures and traditions.Our guides and travel managers have a lot of
  expirience in trip planning as also in
  organasations of all kind of diffrent patries and custom carnevals that made over a 30000 of our clients happy 
  and gave them something that they will always remember.`,
   
  `Besides accommodations, the GIS platform also maps other tourist attractions including natural and cultural heritages,
   restaurants, clubs, museums, which previously
    haven’t been exposed to the social media. One of the known facts is that with the technological advancements,
     tourists leave a large percent of their planning while
     being on the trip. The GIS platform also enables tourists to plan their trips, offering them best and most accurate
      transportation methods. Meanwhile, 
     the GIS platform also presents them other locations and attractions that are worth seeing on the way of
      reaching their location.`, 
   
     `TravelEasy Ltd. is a company established and existing under the laws of Serbia and registered tour operator
      with the licence number PKK-01-05888.TravelEasy Platform
     is a registered trademark, issued by European Union Intellectual Property Office under the number 016862989.
    TravelEasy Platform is a provider of travel services worldwide. Our goal is to make everyones trips more easier and more fun.
    Our team has 10+ years of expirience in hotel managmente, guides that speak 4 or more diffrent laguages 
    and all arounf world connections.`]

function txtPromena(){
    var dohvatanjeTxt = document.getElementById("txt");
    dohvatanjeTxt.innerHTML = nizTxt[k];

    if(k < nizTxt.length - 1)
    {
        k++;
    }
    else
    {
        k = 0;
    }

    setTimeout(txtPromena, 5000);
}  
txtPromena();


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

var nizHref = ["images/cuba2.jpg", "images/zante2.jpg", "images/alpi2.jpg", "images/rio2.jpg", "images/ny2.jpg",
"images/monte-carlo2.jpg", "images/paris2.jpg", "images/bankok2.jpg", "images/jerusalim2.jpg"];              

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
    <a class="each-portfolio" data-fancybox="gallery" href="${nizHref[j]}">
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




var nizAerodrum = ["Airport", "Beijing Capital International Airport", "Los Angeles International Airport",
 "Dubai International Airport", " Tokyo Haneda Airport", "London Heathrow Airport", "Shanghai Pudong International Airport",
  "Charles de Gaulle Airport", "Amsterdam Airport Schiphol", "Seoul Incheon International Airport", 
    "Frankfurt Airport", "Singapore Changi Airport", "Madrid Barajas Airport", "San Francisco International Airport", 
    "Soekarno–Hatta International Airport", "Shenzhen Bao'an International Airport", "Barcelona–El Prat Airport"];
var nizLet = ["Location"," Beijing, China", "Los Angeles, USA", "Dubai, UEA", "Tokyo, Japan", "London, UK",
 "Shanghai, China", "Paris, France", "Amsterdam, Netherlands", "Incheon, South Korea", "Frankfurt, Germany",
  "	Changi, East Region, Singapore", " Madrid, Spain", "San Francisco, USA", "Tangerang Banten,	Indonesia",
   "Shenzhen Guangdong, China", "Barcelona	Spain"];
var nizPolazak = ["Departure", "18:00", "11:00", "17:30", "12:15", "9:45", "23:00", "14:30", "20:00",
                 "9:00", "11:00", "14:50", "11:45", "10:00", "12:30", "19:45", "23:30"];
var nizCena = ["Price", "$179.59", "$126.99", "$118.80", "$219.89", "$169.99", "$185.89", "$89.50",
             "$78.20", "$230.59", "$119.89$", "$249.89$", "$118.80", "$135.79", "$179.59", "$109.89$", "$130.59"];

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



let obradaForme = [];
let dugme = $(':button');

dugme.click(function(){
    let ime = $('#ime');
    let prezime = $('#prezime');
    let mail = $('#email');
    
    let imeProvera = /^[A-Z][a-z]{2,19}(\s[A-Z][a-z]{2,19})+$/;
    let prezimeProvera = /^[A-Z][a-z]{2,19}(\s[A-Z][a-z]{2,19})+$/;
    let emailProvera = /^\w([\.-_]?\w+\d*)*@\w+\.\w{2,6}$/;
    //let proveraTel = /^[0-9]{8,11}$/;

    let imeTacnost;
    let prezimeTacnost;
    let emailTacnost;

    //IME
    if(ime.val() == '')
    {
        ime.val('');
        ime.attr('placeholder', 'First name can\'t be empty. ');
    }
    else if(imeProvera.test(ime.val()))
    {
        obradaForme.push(ime.val());    
        imeTacnost = true;
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
    else if(prezimeProvera.test(prezime.val()))
    {   
        obradaForme.push(prezime.val());  
        prezimeTacnost = true;     
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
        emailTacnost = true;      
    }
    else
    {
        mail.val('');
        mail.attr('placeholder', 'You didn\'t fill yor last name correctly (eg. something@gmail.com). ');
    }
    //ZA PRIKAZIVANJE SPAN TAGA
    if(imeTacnost == true && prezimeTacnost == true && emailTacnost == true)
    {
        $(document).ready(function(){
            $('.excellent').css('display','block');
        });
    }
    else
    {
        $(document).ready(function(){
            $('.excellent').css('display','none');
        });
    }
});