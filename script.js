




// document.querySelector('.Dritare-treshe').addEventListener('click',OpenTreshe);

// document.querySelector('.Dritare-katershe').addEventListener('click',OpenKatershe);

// document.querySelector('.Dritare-dyshe-Horizontal').addEventListener('click',OpenDysheHorz);
// document.querySelector('.Dritare-Treshe-Horizontal').addEventListener('click',OpenTresheHorz);
// document.querySelector('.Vogel-Madhe').addEventListener('click',OpenVogelMadhe);
// document.querySelector('.Madhe-Vogel').addEventListener('click',OpenMadheVogel);


document.querySelector('.Fillimi1').addEventListener('click',function(){
   document.querySelector('.RezultatetKrahut').style.display='inline';
   document.querySelector('.RezultatetVertikaleKrahu').style.display='inline';

});


//Dritare 1 per Rezultatet

var Mbledhja=document.querySelector('.Mbledhja');
document.querySelector('.Mbledhja1').addEventListener('click',Mbledhi1);

function Mbledhi1(e){
    //Selektimi i gjatesis dhe gjersis
    var vleraGjatesis1=parseInt(document.querySelector('.Gjatesia1').value);
    var vleraGjeresis1 =parseInt(document.querySelector('.Gjeresia1').value);
  
   
   //  var InputoKornizesV1=;
    var InputoKornizesV1=document.querySelector('.InputoKornizesV-1').innerHTML;
    var InputoKornizesH1=document.querySelector('.InputoKornizesH-1').innerHTML;
    var InputiKornizaAV=document.querySelector('.InputiKornizaAV-1').innerHTML;
    var InputiKornizesAH=document.querySelector('.InputiKornizaAH-1').innerHTML;
    var InputiKrahuV=document.querySelector('.InputiKrahuV-1').innerHTML;
    var InputiKrahuH=document.querySelector('.InputiKrahuH-1').innerHTML;
    var InputiKrahuAV=document.querySelector('.InputiKrahuAV-1').innerHTML;
    var InputiKrahuAH=document.querySelector('.InputiKrahuAH-1').innerHTML;
    var XhamiV=document.querySelector('.XhamiV').innerHTML;
    var XhamiH=document.querySelector('.XhamiH').innerHTML;
    var XhamiStatikV=document.querySelector('.XhamiStatikV').innerHTML;
    var XhamiStatikH=document.querySelector('.XhamiStatikH').innerHTML;


    //WATCH  DRITARE DYSHE ME SHTYLL 
    //Kornizat dhe Araturat per dritaret me shtylle 
  

    let VertikaleKorniza=document.querySelector('.GjatesiaKornizesV1').innerText=vleraGjatesis1+parseInt(InputoKornizesV1)+" V";
    document.querySelector('.RezultatetVertikaleKorniza').innerText=parseInt(VertikaleKorniza)-6+"[Ko]";

    let Korniza= document.querySelector('.GjatesiaKornizesH1').innerText=vleraGjeresis1+parseInt(InputoKornizesH1)+" H";
    document.querySelector('.ArmaturaKornizesV1').innerText=vleraGjatesis1-parseInt(InputiKornizaAV)+" V";
    document.querySelector('.ArmaturaKornizesH1').innerText=vleraGjeresis1-parseInt(InputiKornizesAH)+" H";

    document.querySelector('.RezultateKornizes').innerText=parseInt(Korniza)-6+"[Ko]";
   //  //T-Shtylla
   //  document.querySelector('.T-shtylla1').innerText=vleraGjatesis1-116+" V";
   //  document.querySelector('.Armatura-Shtylla1').innerText=vleraGjatesis1-170+" V";

   //  //Adapteri
   //  document.querySelector('.Adapter1').innerText=vleraGjatesis1-182+" V"; 
   //  document.querySelector('.Armatura-Adapteri1').innerText=vleraGjatesis1-200+" V";


    //Krahu dhe armaturat e krahut
    let VertikaleKrahu=document.querySelector('.Krahu-V1').innerText=vleraGjatesis1-parseInt(InputiKrahuV)+" V";
    document.querySelector('.RezultatetVertikaleKrahu').innerText=parseInt(VertikaleKrahu)-6+"[Kr]";

    let Krahu=document.querySelector('.Krahu-H1').innerText=vleraGjeresis1-parseInt(InputiKrahuH)+" H";
   document.querySelector('.ArmaturaKrahuV1').innerText=vleraGjatesis1-parseInt(InputiKrahuAV)+" V";
   document.querySelector('.ArmaturaKrahuH1').innerText=vleraGjeresis1-parseInt(InputiKrahuAH)+" H";
 
   document.querySelector('.RezultatetKrahut').innerText=parseInt(Krahu)-6+"[Kr]";

   //Xhami 1/2
   document.querySelector('.XhamiH11').innerText=vleraGjeresis1-parseInt(XhamiH);
   document.querySelector('.XhamiV11').innerText=vleraGjatesis1-parseInt(XhamiV);
   document.querySelector('.XhamiPaH11').innerText=vleraGjeresis1-parseInt(XhamiStatikH);
   document.querySelector('.XhamiPaV11').innerText=vleraGjatesis1-parseInt(XhamiStatikV);

//    document.querySelector('.XhamiH22').innerText=(vleraGjeresis1-170)/2;
//    document.querySelector('.XhamiV22').innerText=vleraGjatesis1-208;


``
    



    document.querySelector('.Dritare-1').style.display="none";
    document.querySelector('.Dritare-2').style.display="none";
    document.querySelector('.Dritare1-PerFoto').style.display="none";

    // var MbledhjaGjersisGjatesis=vlera+vleraGjeresis1;
    // document.querySelector('.MbledhjaGjersisGjatesis').innerText=MbledhjaGjersisGjatesis;
    // var elementi=document.createElement('p')
    // elementi.appendChild(vleren)
    // elementi.appendChild(document.createTextNode(Gjatesia));
   
   
}


//Fotot e dritareve
document.querySelector('.Image-Dritare').addEventListener('click',Shfaqe);
function Shfaqe(){
   document.slider.src="Foto-Dritare/Foto11.jpg";
   document.querySelector('.RezultatetKrahut').style.display='none';
}

document.querySelector('.Image-Dritare1').addEventListener('click',Shfaqe2);
function Shfaqe2(){
   document.slider.src="Foto-Dritare/Foto12.jpg";
   document.querySelector('.RezultatetKrahut').style.display='inline';
}
document.querySelector('.Image-Dritare2').addEventListener('click',Shfaqe3);
function Shfaqe3(){
   document.slider.src="Foto-Dritare/Foto13.jpg";
   document.querySelector('.RezultatetKrahut').style.display='inline';

}
document.querySelector('.Image-Dritare3').addEventListener('click',Shfaqe4);
function Shfaqe4(){
   document.slider.src="Foto-Dritare/Foto14.jpg";
   document.querySelector('.RezultatetKrahut').style.display='inline';

}
document.querySelector('.Image-Dritare4').addEventListener('click',Shfaqe5);
function Shfaqe5(){
   document.slider.src="Foto-Dritare/Foto15.jpg";
   document.querySelector('.RezultatetKrahut').style.display='inline';

}

















//Dritare 2 per Rezultatet
var Mbledhja=document.querySelector('.Mbledhja');


document.querySelector('.Mbledhja').addEventListener('click',Mbledhi);
let kushtiFillestar=false;
document.querySelector('.ButoniAdapter').addEventListener('click',function(){
   kushtiFillestar=true;
});
document.querySelector('.Fillimi').addEventListener('click',function(){
   kushtiFillestar=false
});
function Mbledhi(e){
    //Selektimi i gjatesis dhe gjersis
    var vleraGjatesis=parseInt(document.querySelector('.Gjatesia').value);
    var vleraGjeresis =parseInt(document.querySelector('.Gjeresia').value);

   //  Marrja e vlerave
   
   var InputoKornizesV12=document.querySelector('.InputoKornizesV-2').innerHTML;
   var InputoKornizesH12=document.querySelector('.InputoKornizesH-2').innerHTML;
   var InputiKornizaAV2=document.querySelector('.InputiKornizaAV-2').innerHTML;
   var InputiKornizesAH2=document.querySelector('.InputiKornizaAH-2').innerHTML;
   var InputiKrahuV2=document.querySelector('.InputiKrahuV-2').innerHTML;
   var InputiKrahuH2=document.querySelector('.InputiKrahuH-2').innerHTML;
   var InputiKrahuAV2=document.querySelector('.InputiKrahuAV-2').innerHTML;
   var InputiKrahuAH2=document.querySelector('.InputiKrahuAH-2').innerHTML;
   var XhamiV2=document.querySelector('.XhamiV-2').innerHTML;
   var XhamiH2=document.querySelector('.XhamiH-2').innerHTML;
   var XhamiStatikV2=document.querySelector('.XhamiStatikV-2').innerHTML;
   var XhamiStatikH2=document.querySelector('.XhamiStatikH-2').innerHTML;
   var SH2=document.querySelector('.Shtyll-2').innerHTML;
   var A2=document.querySelector('.Adapteri-2').innerHTML;
   var SHA2=document.querySelector('.ShtyllA-2').innerHTML;
   var AA2=document.querySelector('.AdapteriA-2').innerHTML;
  


    //WATCH  DRITARE DYSHE ME SHTYLL 
    //Kornizat dhe Araturat per dritaret me shtylle 
    let VertikaleKorniza2=document.querySelector('.GjatesiaKornizesV').innerText=vleraGjatesis+parseInt(InputoKornizesV12)+" V";
    document.querySelector('.RezultatetVertikaleKorniza2').innerText=parseInt(VertikaleKorniza2)-6+"[Ko]";

    let Korniza2= document.querySelector('.GjatesiaKornizesH').innerText=vleraGjeresis+parseInt(InputoKornizesH12)+" H";
    document.querySelector('.ArmaturaKornizesV').innerText=vleraGjatesis-parseInt(InputiKornizaAV2)+" V";
    document.querySelector('.ArmaturaKornizesH').innerText=vleraGjeresis-parseInt(InputiKornizesAH2)+" H";

    document.querySelector('.RezultatetKornizes2').innerText=parseInt(Korniza2)-6+"[Ko]";

    //T-Shtylla
    document.querySelector('.T-shtylla').innerText=vleraGjatesis-parseInt(SH2)+" V";
    document.querySelector('.Armatura-Shtylla').innerText=vleraGjatesis-parseInt(SHA2)+" V";

    //Adapteri
    document.querySelector('.Adapter').innerText=vleraGjatesis-parseInt(A2)+" V"; 
    document.querySelector('.Armatura-Adapteri').innerText=vleraGjatesis-parseInt(AA2)+" V";

  let VleraAdapteriFillestar;
  if(kushtiFillestar){
     VleraAdapteriFillestar=10;
    let krahu2=document.querySelector('.Krahu-H').innerText=parseInt((vleraGjeresis/2)-parseInt(InputiKrahuH2))+VleraAdapteriFillestar+" H";
     document.querySelector('.ArmaturaKrahuH').innerText=parseInt((vleraGjeresis)/2-parseInt(InputiKrahuAH2))+VleraAdapteriFillestar+" H";
    document.querySelector('.RezultatetKrahut1').innerText=parseInt(krahu2)-6+"[Kr]";
    document.querySelector('.RezultatetKrahut2').innerText=parseInt(krahu2)-6+"[Kr]";


     
   //   Xhami qe qelet
     document.querySelector('.XhamiH1').innerText=parseInt((vleraGjeresis)/2+VleraAdapteriFillestar-parseInt(XhamiH2));
     document.querySelector('.XhamiH2').innerText=parseInt((vleraGjeresis)/2+VleraAdapteriFillestar-parseInt(XhamiH2));
// Xhami qe nuk qelet
     document.querySelector('.XhamiH111').innerText=parseInt((vleraGjeresis)/2+VleraAdapteriFillestar-parseInt(XhamiV2));
     document.querySelector('.XhamiH22').innerText=parseInt((vleraGjeresis)/2+VleraAdapteriFillestar-parseInt(XhamiV2));



  }else{
     VleraAdapteriFillestar=0;
     let krahu21=document.querySelector('.Krahu-H').innerText=parseInt((vleraGjeresis/2)-parseInt(InputiKrahuH2))+VleraAdapteriFillestar+" H";
     document.querySelector('.RezultatetKrahut1').innerText=parseInt(krahu21)-6+"[Kr]";
     document.querySelector('.RezultatetKrahut2').innerText=parseInt(krahu21)-6+"[Kr]";



     document.querySelector('.ArmaturaKrahuH').innerText=parseInt((vleraGjeresis)/2-parseInt(InputiKrahuAH2))+VleraAdapteriFillestar+" H";
     
   //   Xhami qe qelet
     document.querySelector('.XhamiH1').innerText=parseInt((vleraGjeresis)/2+VleraAdapteriFillestar-parseInt(XhamiH2));
     document.querySelector('.XhamiH2').innerText=parseInt((vleraGjeresis)/2+VleraAdapteriFillestar-parseInt(XhamiH2));
  // Xhami qe nuk qelet
     document.querySelector('.XhamiH111').innerText=parseInt((vleraGjeresis)/2+VleraAdapteriFillestar-parseInt(XhamiStatikH2));
     document.querySelector('.XhamiH22').innerText=parseInt((vleraGjeresis)/2+VleraAdapteriFillestar-parseInt(XhamiStatikH2));


  }



 

    //Krahu dhe armaturat e krahut

  let VertikaleKrahu2=document.querySelector('.Krahu-V').innerText=vleraGjatesis-parseInt(InputiKrahuV2)+" V";
   document.querySelector('.RezultatetVertikaleKrahu2').innerText=parseInt(VertikaleKrahu2)-6+"[Kr]";
   document.querySelector('.ArmaturaKrahuV').innerText=vleraGjatesis-parseInt(InputiKrahuAV2)+" V";



   //Xhami 1/2

   // Qe qelen
   document.querySelector('.XhamiV1').innerText=vleraGjatesis-parseInt(XhamiV2);
   document.querySelector('.XhamiV2').innerText=vleraGjatesis-parseInt(XhamiV2);
   
  
// Qe nuk qelen
   document.querySelector('.XhamiV111').innerText=vleraGjatesis-parseInt(XhamiStatikV2);
   document.querySelector('.XhamiV22').innerText=vleraGjatesis-parseInt(XhamiStatikV2);


    



    document.querySelector('.Dritare-1').style.display="none";
    document.querySelector('.Dritare-2').style.display="none";
    document.querySelector('.Dritare2-PerFoto').style.display='none';


    // var MbledhjaGjersisGjatesis=vlera+vleraGjeresis;
    // document.querySelector('.MbledhjaGjersisGjatesis').innerText=MbledhjaGjersisGjatesis;
    // var elementi=document.createElement('p')
    // elementi.appendChild(vleren)
    // elementi.appendChild(document.createTextNode(Gjatesia));
   
   
}
//Fotot
document.querySelector('.Image-Dritar-Dyshese2').addEventListener('click',ShfaqeDyshese);
function ShfaqeDyshese(){
   document.slider2.src="Foto-Dritare/Foto21.jpg";
  
}
document.querySelector('.Image-Dritar-Dyshese21').addEventListener('click',ShfaqeDyshese1);
function ShfaqeDyshese1(){
   document.slider2.src="Foto-Dritare/Foto22.jpg";
}
document.querySelector('.Image-Dritar-Dyshese22').addEventListener('click',ShfaqeDyshese2);
function ShfaqeDyshese2(){
   document.slider2.src="Foto-Dritare/Foto23.jpg";
}
document.querySelector('.Image-Dritar-Dyshese23').addEventListener('click',ShfaqeDyshese3);
function ShfaqeDyshese3(){
   document.slider2.src="Foto-Dritare/Foto24.jpg";
}
document.querySelector('.Image-Dritar-Dyshese24').addEventListener('click',ShfaqeDyshese4);
function ShfaqeDyshese4(){
   document.slider2.src="Foto-Dritare/Foto25.jpg";
}
document.querySelector('.Image-Dritar-Dyshese25').addEventListener('click',ShfaqeDyshese5);
function ShfaqeDyshese5(){
   document.slider2.src="Foto-Dritare/Foto26.jpg";
}
document.querySelector('.Image-Dritar-Dyshese26').addEventListener('click',ShfaqeDyshese6);
function ShfaqeDyshese6(){
   document.slider2.src="Foto-Dritare/Foto27.jpg";
}
document.querySelector('.Image-Dritar-Dyshese27').addEventListener('click',ShfaqeDyshese7);
function ShfaqeDyshese7(){
   document.slider2.src="Foto-Dritare/Foto28.jpg";
}
document.querySelector('.Image-Dritar-Dyshese28').addEventListener('click',ShfaqeDyshese8);
function ShfaqeDyshese8(){
   document.slider2.src="Foto-Dritare/Foto29.jpg";
}
document.querySelector('.Image-Dritar-Dyshese29').addEventListener('click',ShfaqeDyshese9);
function ShfaqeDyshese9(){
   document.slider2.src="Foto-Dritare/Foto210.jpg";
}
document.querySelector('.Image-Dritar-Dyshese210').addEventListener('click',ShfaqeDyshese10);
function ShfaqeDyshese10(){
   document.slider2.src="Foto-Dritare/Foto211.jpg";
}
document.querySelector('.Image-Dritar-Dyshese211').addEventListener('click',ShfaqeDyshese11);
function ShfaqeDyshese11(){
   document.slider2.src="Foto-Dritare/Foto212.jpg";
}
document.querySelector('.Image-Dritar-Dyshese212').addEventListener('click',ShfaqeDyshese12);
function ShfaqeDyshese12(){
   document.slider2.src="Foto-Dritare/Foto213.jpg";
}
document.querySelector('.Image-Dritar-Dyshese213').addEventListener('click',ShfaqeDyshese13);
function ShfaqeDyshese13(){
   document.slider2.src="Foto-Dritare/Foto214.jpg";
}



//WATCH BUTONAT SHTES


//Dritare 1 per shtyll dhe adapter

// //Adapteri
// document.querySelector('.ButoniAdapter1').addEventListener('click',ButoniA1);

// function ButoniA1(){
//     // document.querySelector('.Adapterii').style.display="block";
//     // document.querySelector('.AdapterArmatur').style.display="block";
//     document.querySelector('.Adapterii1').style.display="block";
//     document.querySelector('.AdapterArmatur1').style.display="block";
//     document.querySelector('.copA1').style.display="block";

// }

// //Shtylla
// document.querySelector('.ButoniShtylla1').addEventListener('click',ButoniSH1);

//  function ButoniSH1(){
// //     document.querySelector('.Shtylla').style.display="block";
// //     document.querySelector('.ShtyllaArmatura').style.display="block";
//     document.querySelector('.Shtylla1').style.display="block";
//     document.querySelector('.ShtyllaArmatura1').style.display="block";
//     document.querySelector('.copSH1').style.display="block";


// }




//Dritare 2 per shtyll dhe adapter
//Adapteri
document.querySelector('.ButoniAdapter').addEventListener('click',ButoniA);

function ButoniA(){
    document.querySelector('.Adapterii').style.display="block";
    document.querySelector('.AdapterArmatur').style.display="block";
    // document.querySelector('.Adapterii1').style.display="block";
    // document.querySelector('.AdapterArmatur1').style.display="block";
    document.querySelector('.copA').style.display="block";

}

//Shtylla
document.querySelector('.ButoniShtylla').addEventListener('click',ButoniSH);

function ButoniSH(){
    document.querySelector('.Shtylla').style.display="block";
    document.querySelector('.ShtyllaArmatura').style.display="block";
    // document.querySelector('.Shtylla1').style.display="block";
    // document.querySelector('.ShtyllaArmatura1').style.display="block";
    document.querySelector('.copSH').style.display="block";


}



//Butoni Fillimi

// Dritare 1
// document.querySelector('.Fillimi1').addEventListener('click',ButoniF1);

// function ButoniF1(){

    
//     document.querySelector('.Adapterii1').style.display="none";
//     document.querySelector('.AdapterArmatur1').style.display="none";
//     document.querySelector('.Shtylla1').style.display="none";
//     document.querySelector('.ShtyllaArmatura1').style.display="none";
//     document.querySelector('.copA1').style.display="none";
//     document.querySelector('.copSH1').style.display="none";
//     document.slider.src="123.jpg";
   

// }



// Dritare 2
document.querySelector('.Fillimi').addEventListener('click',ButoniF);

function ButoniF(){
    document.querySelector('.Adapterii').style.display="none";
    document.querySelector('.AdapterArmatur').style.display="none";
    document.querySelector('.Shtylla').style.display="none";
    document.querySelector('.ShtyllaArmatura').style.display="none";
    document.querySelector('.copA').style.display="none";
    document.querySelector('.copSH').style.display="none";
    document.slider2.src="124.jpg";

    document.querySelector('.RezultatetVertikaleKrahu2').style.display='inline';

   

}




//CLOSE 

//Close-1
document.querySelector('.x1').addEventListener('click',Close1);         
function Close1(){
    document.querySelector('.Dritare-1').style.display="none";
    // document.querySelector('.Dritare-2').style.display="none";

   //  document.querySelector('.Adapterii').style.display="none";
   //  document.querySelector('.AdapterArmatur').style.display="none";
   //  document.querySelector('.Shtylla').style.display="none";
   //  document.querySelector('.ShtyllaArmatura').style.display="none";

}

document.querySelector('.xx1').addEventListener('click',CloseScroll1);   
function CloseScroll1(){
   document.querySelector('.Dritare1-PerFoto').style.display='none';
}      



// Close-2
document.querySelector('.x2').addEventListener('click',Close2);         
function Close2(){
    // document.querySelector('.Dritare-1').style.display="none";
    document.querySelector('.Dritare-2').style.display="none";

    document.querySelector('.Adapterii').style.display="none";
    document.querySelector('.AdapterArmatur').style.display="none";
    document.querySelector('.Shtylla').style.display="none";
    document.querySelector('.ShtyllaArmatura').style.display="none";

}
document.querySelector('.xx2').addEventListener('click',CloseScroll2);   
function CloseScroll2(){
   document.querySelector('.Dritare2-PerFoto').style.display='none';
} 


//Driatre -1 Foto

document.querySelector('#Dritare-njeshe-Scroll').addEventListener('click',OpenNjeshiScroll);

function OpenNjeshiScroll(){
   document.querySelector('.Dritare1-PerFoto').style.display="block";
}


document.querySelector('#Dritare-njeshe').addEventListener('click',OpenNjeshi);
document.querySelector('#Dritare-njeshe1').addEventListener('click',OpenNjeshi1);
document.querySelector('#Dritare-njeshe2').addEventListener('click',OpenNjeshi2);
document.querySelector('#Dritare-njeshe3').addEventListener('click',OpenNjeshi3);
document.querySelector('#Dritare-njeshe4').addEventListener('click',OpenNjeshi4);


function OpenNjeshi(){

    document.querySelector('.Dritare-1').style.display='block';
    document.Foto.src="Foto-Dritare/Foto11.jpg"
    document.querySelector('.Krahu-V1').style.display="none";
    document.querySelector('.Krahu-H1').style.display='none';
   document.querySelector('.ArmaturaKrahuV1').style.display="none";
   document.querySelector('.ArmaturaKrahuH1').style.display="none";
   // document.querySelector('.copaPV').style.display="none";
   document.querySelector('.copaPv').innerText="0";
   document.querySelector('.copaPh').innerText="0";
   document.querySelector('#XhamiKrah').style.display="none";
   document.querySelector('#XhamiPaKrah').style.display="block";
 
  document.querySelector('.copaXh').style.display="none";
  document.querySelector('.copaXhK').style.display='block';
  document.querySelector('.RezultatetVertikaleKrahu').style.display='none';
    // document.querySelector('.Llojet').innerHTML="Dritare Njeshe";
}
function OpenNjeshi1(){
   document.querySelector('.Dritare-1').style.display='block';
   document.Foto.src="Foto-Dritare/Foto12.jpg"
   document.querySelector('#XhamiKrah').style.display="block";
   document.querySelector('#XhamiPaKrah').style.display="none";
   document.querySelector('.copaXhK').style.display="none";
   document.querySelector('.copaXh').style.display="block";
   document.querySelector('.Krahu-V1').style.display="inline"; 
    document.querySelector('.Krahu-H1').style.display='inline';
   document.querySelector('.ArmaturaKrahuV1').style.display="inline";
   document.querySelector('.ArmaturaKrahuH1').style.display="inline";
 
   // document.querySelector('.copaPV').style.display="none";
   document.querySelector('.copaPv').innerText="2";
   document.querySelector('.copaPh').innerText="2";
   // document.querySelector('.Llojet').innerHTML="Dritare Njeshe";
}
function OpenNjeshi2(){
   document.querySelector('.Dritare-1').style.display='block';
   document.Foto.src="Foto-Dritare/Foto13.jpg"
   document.querySelector('#XhamiKrah').style.display="block";
   document.querySelector('#XhamiPaKrah').style.display="none";
   document.querySelector('.copaXhK').style.display="none";
   document.querySelector('.copaXh').style.display="block";
   document.querySelector('.Krahu-V1').style.display="inline"; 
    document.querySelector('.Krahu-H1').style.display='inline';
   document.querySelector('.ArmaturaKrahuV1').style.display="inline";
   document.querySelector('.ArmaturaKrahuH1').style.display="inline";
 
   // document.querySelector('.copaPV').style.display="none";
   document.querySelector('.copaPv').innerText="2";
   document.querySelector('.copaPh').innerText="2";
   // document.querySelector('.Llojet').innerHTML="Dritare Njeshe";
}
function OpenNjeshi3(){
   document.querySelector('.Dritare-1').style.display='block';
   document.Foto.src="Foto-Dritare/Foto14.jpg"
   document.querySelector('#XhamiKrah').style.display="block";
   document.querySelector('#XhamiPaKrah').style.display="none";
   document.querySelector('.copaXhK').style.display="none";
   document.querySelector('.copaXh').style.display="block";
   document.querySelector('.Krahu-V1').style.display="inline"; 
    document.querySelector('.Krahu-H1').style.display='inline';
   document.querySelector('.ArmaturaKrahuV1').style.display="inline";
   document.querySelector('.ArmaturaKrahuH1').style.display="inline";
 
   // document.querySelector('.copaPV').style.display="none";
   document.querySelector('.copaPv').innerText="2";
   document.querySelector('.copaPh').innerText="2";
   
   // document.querySelector('.Llojet').innerHTML="Dritare Njeshe";
}
function OpenNjeshi4(){
   document.querySelector('.Dritare-1').style.display='block';
   document.Foto.src="Foto-Dritare/Foto15.jpg"
   document.querySelector('#XhamiKrah').style.display="block";
   document.querySelector('#XhamiPaKrah').style.display="none";
   document.querySelector('.copaXhK').style.display="none";
   document.querySelector('.copaXh').style.display="block";
   document.querySelector('.Krahu-V1').style.display="inline"; 
    document.querySelector('.Krahu-H1').style.display='inline';
   document.querySelector('.ArmaturaKrahuV1').style.display="inline";
   document.querySelector('.ArmaturaKrahuH1').style.display="inline";
 
   // document.querySelector('.copaPV').style.display="none";
   document.querySelector('.copaPv').innerText="2";
   document.querySelector('.copaPh').innerText="2";
   
   // document.querySelector('.Llojet').innerHTML="Dritare Njeshe";
}





//Dritare-2 Foto
document.querySelector('#Dritaredyshe2Scroll').addEventListener('click',OpenDyshe2Scroll);
function OpenDyshe2Scroll(){
   document.querySelector('.Dritare2-PerFoto').style.display="block";
}



document.querySelector('#Dritaredyshe1').addEventListener('click',OpenDyshe1);
document.querySelector('#Dritaredyshe2').addEventListener('click',OpenDyshe2);
document.querySelector('#Dritaredyshe3').addEventListener('click',OpenDyshe3);
document.querySelector('#Dritaredyshe4').addEventListener('click',OpenDyshe4);
document.querySelector('#Dritaredyshe5').addEventListener('click',OpenDyshe5);
document.querySelector('#Dritaredyshe6').addEventListener('click',OpenDyshe6);
document.querySelector('#Dritaredyshe7').addEventListener('click',OpenDyshe7);
document.querySelector('#Dritaredyshe8').addEventListener('click',OpenDyshe8);
document.querySelector('#Dritaredyshe9').addEventListener('click',OpenDyshe9);
document.querySelector('#Dritaredyshe10').addEventListener('click',OpenDyshe10);
document.querySelector('#Dritaredyshe11').addEventListener('click',OpenDyshe11);
document.querySelector('#Dritaredyshe12').addEventListener('click',OpenDyshe12);
document.querySelector('#Dritaredyshe13').addEventListener('click',OpenDyshe13);
document.querySelector('#Dritaredyshe14').addEventListener('click',OpenDyshe14);




function OpenDyshe1(){
    document.querySelector('.Dritare-2').style.display='block';
    document.Foto2.src="Foto-Dritare/Foto21.jpg"
    document.querySelector('.copaKV-2').innerText='0';
    document.querySelector('.copaKH-2').innerText='0';
    document.querySelector('.Krahu-V').style.display="none";
    document.querySelector('.Krahu-H').style.display='none';
   document.querySelector('.ArmaturaKrahuV').style.display="none";
   document.querySelector('.ArmaturaKrahuH').style.display="none";
   document.querySelector('#XhamiKrah1').style.display="none";
   document.querySelector('#XhamiKrah2').style.display="none";
   document.querySelector('#XhamiPaKrah11').style.display="block";
   document.querySelector('#XhamiPaKrah22').style.display="block";
   document.querySelector('.copaXhK1-2').style.display="none";
   document.querySelector('.copaXhK2-2').style.display="none";
   document.querySelector('.copaXhPaK1-2').style.display="block";
   document.querySelector('.copaXhPaK2-2').style.display="block";
   document.querySelector('.XhPK1').innerHTML="1";
    document.querySelector('.XhPK2').innerHTML="2";
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";

    document.querySelector('.RezultatetKrahut1').style.display='none'
    document.querySelector('.RezultatetKrahut2').style.display='none';
     document.querySelector('.RezultatetVertikaleKrahu2').style.display='none';
}
function OpenDyshe2(){
   document.querySelector('.Dritare-2').style.display='block';
   document.Foto2.src="Foto-Dritare/Foto22.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   
   document.querySelector('.copaKV-2').innerText='2';
    document.querySelector('.copaKH-2').innerText='2';
    document.querySelector('.Krahu-V').style.display="inline";
    document.querySelector('.Krahu-H').style.display='inline';
   document.querySelector('.ArmaturaKrahuV').style.display="inline";
   document.querySelector('.ArmaturaKrahuH').style.display="inline";
   document.querySelector('#XhamiKrah1').style.display="none";
   document.querySelector('#XhamiKrah2').style.display="block";
   document.querySelector('#XhamiPaKrah11').style.display="block";
   document.querySelector('#XhamiPaKrah22').style.display="none";
   document.querySelector('.copaXhK1-2').style.display="none";
   document.querySelector('.copaXhK2-2').style.display="block";
   document.querySelector('.copaXhPaK1-2').style.display="block";
   document.querySelector('.copaXhPaK2-2').style.display="none";
   document.querySelector('.XhK2').innerHTML="1";
  
   document.querySelector('.XhPK1').innerHTML="2";

  document.querySelector('.RezultatetKrahut1').style.display='inline';
  document.querySelector('.RezultatetKrahut2').style.display='none';

}
function OpenDyshe3(){
   document.querySelector('.Dritare-2').style.display='block';
   document.Foto2.src="Foto-Dritare/Foto23.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";

   document.querySelector('.copaKV-2').innerText='2';
   document.querySelector('.copaKH-2').innerText='2';
   document.querySelector('.Krahu-V').style.display="inline";
   document.querySelector('.Krahu-H').style.display='inline';
  document.querySelector('.ArmaturaKrahuV').style.display="inline";
  document.querySelector('.ArmaturaKrahuH').style.display="inline";
  document.querySelector('#XhamiKrah1').style.display="none";
  document.querySelector('#XhamiKrah2').style.display="block";
  document.querySelector('#XhamiPaKrah11').style.display="block";
  document.querySelector('#XhamiPaKrah22').style.display="none";
  document.querySelector('.copaXhK1-2').style.display="none";
  document.querySelector('.copaXhK2-2').style.display="block";
  document.querySelector('.copaXhPaK1-2').style.display="block";
  document.querySelector('.copaXhPaK2-2').style.display="none";
  document.querySelector('.XhK2').innerHTML="2";
  document.querySelector('.XhPK1').innerHTML="1";

  document.querySelector('.RezultatetKrahut1').style.display='none'
  document.querySelector('.RezultatetKrahut2').style.display='inline';

   
}function OpenDyshe4(){
   document.querySelector('.Dritare-2').style.display='block';
   document.Foto2.src="Foto-Dritare/Foto24.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  
   document.querySelector('.copaKV-2').innerText='4';
   document.querySelector('.copaKH-2').innerText='4';
   document.querySelector('.Krahu-V').style.display="inline";
   document.querySelector('.Krahu-H').style.display='inline';
  document.querySelector('.ArmaturaKrahuV').style.display="inline";
  document.querySelector('.ArmaturaKrahuH').style.display="inline";
  document.querySelector('#XhamiKrah1').style.display="block";
  document.querySelector('#XhamiKrah2').style.display="block";
  document.querySelector('#XhamiPaKrah11').style.display="none";
  document.querySelector('#XhamiPaKrah22').style.display="none";
  document.querySelector('.copaXhK1-2').style.display="block";
  document.querySelector('.copaXhK2-2').style.display="block";
  document.querySelector('.copaXhPaK1-2').style.display="none";
  document.querySelector('.copaXhPaK2-2').style.display="none";
  document.querySelector('.XhK1').innerHTML="1";
  document.querySelector('.XhK2').innerHTML="2";

  document.querySelector('.RezultatetKrahut1').style.display='inline'
  document.querySelector('.RezultatetKrahut2').style.display='inline';

   
}function OpenDyshe5(){
   document.querySelector('.Dritare-2').style.display='block';
   document.Foto2.src="Foto-Dritare/Foto25.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";

   document.querySelector('.copaKV-2').innerText='4';
   document.querySelector('.copaKH-2').innerText='4';
   document.querySelector('.Krahu-V').style.display="inline";
   document.querySelector('.Krahu-H').style.display='inline';
  document.querySelector('.ArmaturaKrahuV').style.display="inline";
  document.querySelector('.ArmaturaKrahuH').style.display="inline";
  document.querySelector('#XhamiKrah1').style.display="block";
  document.querySelector('#XhamiKrah2').style.display="block";
  document.querySelector('#XhamiPaKrah11').style.display="none";
  document.querySelector('#XhamiPaKrah22').style.display="none";
  document.querySelector('.copaXhK1-2').style.display="block";
  document.querySelector('.copaXhK2-2').style.display="block";
  document.querySelector('.copaXhPaK1-2').style.display="none";
  document.querySelector('.copaXhPaK2-2').style.display="none";
  document.querySelector('.XhK1').innerHTML="1";
  document.querySelector('.XhK2').innerHTML="2";


  document.querySelector('.RezultatetKrahut1').style.display='inline'
  document.querySelector('.RezultatetKrahut2').style.display='inline';
   
}function OpenDyshe6(){
   document.querySelector('.Dritare-2').style.display='block';
   document.Foto2.src="Foto-Dritare/Foto26.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.copaKV-2').innerText='4';
   document.querySelector('.copaKH-2').innerText='4';
   document.querySelector('.Krahu-V').style.display="inline";
   document.querySelector('.Krahu-H').style.display='inline';
  document.querySelector('.ArmaturaKrahuV').style.display="inline";
  document.querySelector('.ArmaturaKrahuH').style.display="inline";
  document.querySelector('#XhamiKrah1').style.display="block";
  document.querySelector('#XhamiKrah2').style.display="block";
  document.querySelector('#XhamiPaKrah11').style.display="none";
  document.querySelector('#XhamiPaKrah22').style.display="none";
  document.querySelector('.copaXhK1-2').style.display="block";
  document.querySelector('.copaXhK2-2').style.display="block";
  document.querySelector('.copaXhPaK1-2').style.display="none";
  document.querySelector('.copaXhPaK2-2').style.display="none";
  document.querySelector('.XhK1').innerHTML="1";
  document.querySelector('.XhK2').innerHTML="2";

  document.querySelector('.RezultatetKrahut1').style.display='inline'
  document.querySelector('.RezultatetKrahut2').style.display='inline';
   
}function OpenDyshe7(){
   document.querySelector('.Dritare-2').style.display='block';
   document.Foto2.src="Foto-Dritare/Foto27.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";

   document.querySelector('.copaKV-2').innerText='2';
   document.querySelector('.copaKH-2').innerText='2';
   document.querySelector('.Krahu-V').style.display="inline";
   document.querySelector('.Krahu-H').style.display='inline';
  document.querySelector('.ArmaturaKrahuV').style.display="inline";
  document.querySelector('.ArmaturaKrahuH').style.display="inline";
  document.querySelector('#XhamiKrah1').style.display="none";
  document.querySelector('#XhamiKrah2').style.display="block";
  document.querySelector('#XhamiPaKrah11').style.display="block";
  document.querySelector('#XhamiPaKrah22').style.display="none";
  document.querySelector('.copaXhK1-2').style.display="none";
  document.querySelector('.copaXhK2-2').style.display="block";
  document.querySelector('.copaXhPaK1-2').style.display="block";
  document.querySelector('.copaXhPaK2-2').style.display="none";
  document.querySelector('.XhK2').innerHTML="1";
  document.querySelector('.XhPK1').innerHTML="2";


  document.querySelector('.RezultatetKrahut1').style.display='inline'
  document.querySelector('.RezultatetKrahut2').style.display='none';
   
}function OpenDyshe8(){
   document.querySelector('.Dritare-2').style.display='block';
   document.Foto2.src="Foto-Dritare/Foto28.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";

   document.querySelector('.copaKV-2').innerText='4';
   document.querySelector('.copaKH-2').innerText='4';
   document.querySelector('.Krahu-V').style.display="inline";
   document.querySelector('.Krahu-H').style.display='inline';
  document.querySelector('.ArmaturaKrahuV').style.display="inline";
  document.querySelector('.ArmaturaKrahuH').style.display="inline";
  document.querySelector('#XhamiKrah1').style.display="block";
  document.querySelector('#XhamiKrah2').style.display="block";
  document.querySelector('#XhamiPaKrah11').style.display="none";
  document.querySelector('#XhamiPaKrah22').style.display="none";
  document.querySelector('.copaXhK1-2').style.display="block";
  document.querySelector('.copaXhK2-2').style.display="block";
  document.querySelector('.copaXhPaK1-2').style.display="none";
  document.querySelector('.copaXhPaK2-2').style.display="none";
  document.querySelector('.XhK1').innerHTML="1";
  document.querySelector('.XhK2').innerHTML="2";


  document.querySelector('.RezultatetKrahut1').style.display='inline'
  document.querySelector('.RezultatetKrahut2').style.display='inline';
   
}function OpenDyshe9(){
   document.querySelector('.Dritare-2').style.display='block';
   document.Foto2.src="Foto-Dritare/Foto29.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";

   document.querySelector('.copaKV-2').innerText='4';
   document.querySelector('.copaKH-2').innerText='4';
   document.querySelector('.Krahu-V').style.display="inline";
   document.querySelector('.Krahu-H').style.display='inline';
  document.querySelector('.ArmaturaKrahuV').style.display="inline";
  document.querySelector('.ArmaturaKrahuH').style.display="inline";
  document.querySelector('#XhamiKrah1').style.display="block";
  document.querySelector('#XhamiKrah2').style.display="block";
  document.querySelector('#XhamiPaKrah11').style.display="none";
  document.querySelector('#XhamiPaKrah22').style.display="none";
  document.querySelector('.copaXhK1-2').style.display="block";
  document.querySelector('.copaXhK2-2').style.display="block";
  document.querySelector('.copaXhPaK1-2').style.display="none";
  document.querySelector('.copaXhPaK2-2').style.display="none";
  document.querySelector('.XhK1').innerHTML="1";
  document.querySelector('.XhK2').innerHTML="2";

  document.querySelector('.RezultatetKrahut1').style.display='inline'
  document.querySelector('.RezultatetKrahut2').style.display='inline';
   
}function OpenDyshe10(){
   document.querySelector('.Dritare-2').style.display='block';
   document.Foto2.src="Foto-Dritare/Foto210.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";

   document.querySelector('.copaKV-2').innerText='4';
   document.querySelector('.copaKH-2').innerText='4';
   document.querySelector('.Krahu-V').style.display="inline";
   document.querySelector('.Krahu-H').style.display='inline';
  document.querySelector('.ArmaturaKrahuV').style.display="inline";
  document.querySelector('.ArmaturaKrahuH').style.display="inline";
  document.querySelector('#XhamiKrah1').style.display="block";
  document.querySelector('#XhamiKrah2').style.display="block";
  document.querySelector('#XhamiPaKrah11').style.display="none";
  document.querySelector('#XhamiPaKrah22').style.display="none";
  document.querySelector('.copaXhK1-2').style.display="block";
  document.querySelector('.copaXhK2-2').style.display="block";
  document.querySelector('.copaXhPaK1-2').style.display="none";
  document.querySelector('.copaXhPaK2-2').style.display="none";
  document.querySelector('.XhK1').innerHTML="1";
  document.querySelector('.XhK2').innerHTML="2";
   
  document.querySelector('.RezultatetKrahut1').style.display='inline'
  document.querySelector('.RezultatetKrahut2').style.display='inline';
}
function OpenDyshe11(){
   document.querySelector('.Dritare-2').style.display='block';
   document.Foto2.src="Foto-Dritare/Foto211.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";

   
   document.querySelector('.copaKV-2').innerText='2';
   document.querySelector('.copaKH-2').innerText='2';
   document.querySelector('.Krahu-V').style.display="inline";
   document.querySelector('.Krahu-H').style.display='inline';
  document.querySelector('.ArmaturaKrahuV').style.display="inline";
  document.querySelector('.ArmaturaKrahuH').style.display="inline";
  document.querySelector('#XhamiKrah1').style.display="none";
  document.querySelector('#XhamiKrah2').style.display="block";
  document.querySelector('#XhamiPaKrah11').style.display="block";
  document.querySelector('#XhamiPaKrah22').style.display="none";
  document.querySelector('.copaXhK1-2').style.display="none";
  document.querySelector('.copaXhK2-2').style.display="block";
  document.querySelector('.copaXhPaK1-2').style.display="block";
  document.querySelector('.copaXhPaK2-2').style.display="none";
  document.querySelector('.XhK2').innerHTML="1";
  document.querySelector('.XhPK1').innerHTML="2";

  document.querySelector('.RezultatetKrahut1').style.display='inline'
  document.querySelector('.RezultatetKrahut2').style.display='none';
   
}
function OpenDyshe12(){
   document.querySelector('.Dritare-2').style.display='block';
   document.Foto2.src="Foto-Dritare/Foto212.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   
   document.querySelector('.copaKV-2').innerText='2';
   document.querySelector('.copaKH-2').innerText='2';
   document.querySelector('.Krahu-V').style.display="inline";
   document.querySelector('.Krahu-H').style.display='inline';
  document.querySelector('.ArmaturaKrahuV').style.display="inline";
  document.querySelector('.ArmaturaKrahuH').style.display="inline";
  document.querySelector('#XhamiKrah1').style.display="none";
  document.querySelector('#XhamiKrah2').style.display="block";
  document.querySelector('#XhamiPaKrah11').style.display="block";
  document.querySelector('#XhamiPaKrah22').style.display="none";
  document.querySelector('.copaXhK1-2').style.display="none";
  document.querySelector('.copaXhK2-2').style.display="block";
  document.querySelector('.copaXhPaK1-2').style.display="block";
  document.querySelector('.copaXhPaK2-2').style.display="none";
  document.querySelector('.XhK2').innerHTML="1";
  document.querySelector('.XhPK1').innerHTML="2";

  document.querySelector('.RezultatetKrahut1').style.display='inline'
  document.querySelector('.RezultatetKrahut2').style.display='none';
}
function OpenDyshe13(){
   document.querySelector('.Dritare-2').style.display='block';
   document.Foto2.src="Foto-Dritare/Foto213.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";

   
   document.querySelector('.copaKV-2').innerText='2';
   document.querySelector('.copaKH-2').innerText='2';
   document.querySelector('.Krahu-V').style.display="inline";
   document.querySelector('.Krahu-H').style.display='inline';
  document.querySelector('.ArmaturaKrahuV').style.display="inline";
  document.querySelector('.ArmaturaKrahuH').style.display="inline";
  document.querySelector('#XhamiKrah1').style.display="none";
  document.querySelector('#XhamiKrah2').style.display="block";
  document.querySelector('#XhamiPaKrah11').style.display="block";
  document.querySelector('#XhamiPaKrah22').style.display="none";
  document.querySelector('.copaXhK1-2').style.display="none";
  document.querySelector('.copaXhK2-2').style.display="block";
  document.querySelector('.copaXhPaK1-2').style.display="block";
  document.querySelector('.copaXhPaK2-2').style.display="none";
  document.querySelector('.XhK2').innerHTML="2";
  document.querySelector('.XhPK1').innerHTML="1";

  document.querySelector('.RezultatetKrahut1').style.display='none'
  document.querySelector('.RezultatetKrahut2').style.display='inline';
   
}
function OpenDyshe14(){
   document.querySelector('.Dritare-2').style.display='block';
   document.Foto2.src="Foto-Dritare/Foto214.jpg";
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";

   
   document.querySelector('.copaKV-2').innerText='2';
   document.querySelector('.copaKH-2').innerText='2';
   document.querySelector('.Krahu-V').style.display="inline";
   document.querySelector('.Krahu-H').style.display='inline';
  document.querySelector('.ArmaturaKrahuV').style.display="inline";
  document.querySelector('.ArmaturaKrahuH').style.display="inline";
  document.querySelector('#XhamiKrah1').style.display="none";
  document.querySelector('#XhamiKrah2').style.display="block";
  document.querySelector('#XhamiPaKrah11').style.display="block";
  document.querySelector('#XhamiPaKrah22').style.display="none";
  document.querySelector('.copaXhK1-2').style.display="none";
  document.querySelector('.copaXhK2-2').style.display="block";
  document.querySelector('.copaXhPaK1-2').style.display="block";
  document.querySelector('.copaXhPaK2-2').style.display="none";
  document.querySelector('.XhK2').innerHTML="2";
  document.querySelector('.XhPK1').innerHTML="1";

  document.querySelector('.RezultatetKrahut1').style.display='none'
  document.querySelector('.RezultatetKrahut2').style.display='inline';
}




function OpenTreshe(){
    document.querySelector('.my-').style.display='block';
    document.querySelector('.Llojet').innerHTML="Dritare Treshe";
}
function OpenKatershe(){
    document.querySelector('.my-').style.display='block';
    document.querySelector('.Llojet').innerHTML='Dritare Katershe';
}



