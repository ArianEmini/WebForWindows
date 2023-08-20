
// document.querySelector('').addEventListener("click",CloseInBody);

// function CloseInBody(){
//    document.querySelector('.Dritare1-PerFoto').style.display='none';
//    document.querySelector('.Dritare2-PerFoto').style.display='none';
//    document.querySelector('.Dritare3-PerFoto').style.display='none';
//    document.querySelector('.Dritare4-PerFoto').style.display='none';
//    document.querySelector('.Dritare-1').style.display='none';
//    document.querySelector('.Dritare-2').style.display='none';
//    document.querySelector('.DritareNdarse-2').style.display='none';
//    document.querySelector('.Dritare-3').style.display='none';
//    document.querySelector('.DritareNdarse-3').style.display='none';
//    document.querySelector('.Dritare-4').style.display='none';
//    document.querySelector('.DritareNdarse-4').style.display='none';


// }

//Open i scroll te Dirtares Katershe
document.querySelector('#DritareKatersheScroll').addEventListener('click',OpenScrollKatershe);
function OpenScrollKatershe(){
    document.querySelector('.Dritare4-PerFoto').style.display="block";
}


// Closi i driatre Katershe
document.querySelector('.xx4').addEventListener('click',Close);
function Close(){
    document.querySelector('.Dritare4-PerFoto').style.display='none';
}

// Closi i modulit

document.querySelector('.xP4').addEventListener('click',CloseModul4);
function CloseModul4(){
    document.querySelector('.Dritare-4').style.display="none";
}

//Shtylla dhe Adapteri Te Fotot

//Shtylla-1
document.querySelector('.ButoniShtylla-41').addEventListener('click',ShtyllaP1);
function ShtyllaP1(){
   document.querySelector('.ShtyllaKatershe-1').style.display='inline';
   document.querySelector('.copNSH-41').style.display='inline';
   document.querySelector('.ShtyllaArmaturaN-41').style.display='inline';
}
//Shtylla-2
document.querySelector('.ButoniShtylla-42').addEventListener('click',ShtyllaP2);
function ShtyllaP2(){
   document.querySelector('.ShtyllaKatershe-2').style.display='inline';
   document.querySelector('.copNSH-42').style.display='inline';
   document.querySelector('.ShtyllaArmaturaN-42').style.display='inline';
}
// Shtylle-3
document.querySelector('.ButoniShtylla-43').addEventListener('click',ShtyllaP3);
function ShtyllaP3(){
   document.querySelector('.ShtyllaKatershe-3').style.display='inline';
   document.querySelector('.copNSH-43').style.display='inline';
   document.querySelector('.ShtyllaArmaturaN-43').style.display='inline';
}

// Adapteri-1
document.querySelector('.ButoniAdapter-41').addEventListener('click',AdapterP1);
function AdapterP1(){
   document.querySelector('.AdapteriKatershe-1').style.display='inline';
   document.querySelector('.copNA-41').style.display='inline';
   document.querySelector('.AdapterArmaturN-41').style.display='inline';
   // document.querySelector('.copaKHA-4').innerText='4';
   // document.querySelector('.copaKH-4').innerText='0'
   // document.querySelector('.KornizaH').style.display='inline';

   // Per +10
   document.querySelector('.KrahuKatershHA-1').style.display='inline';
   document.querySelector('.Krahu4A-H').style.display='inline';
   document.querySelector('.copa4-2').style.display='inline';
   document.querySelector('.copaKHA-4').style.display='inline'
   document.querySelector('.copaKHA-4').innerHTML='4';
   document.querySelector('.Armatura4A').style.display='inline';
   document.querySelector('.ArmaturaKrahuNHA-4').style.display='inline';

   
   document.querySelector('.KrahuKatershH-1').style.display='none';
   document.querySelector('.copa4').style.display='none';
   document.querySelector('.Armatura4').style.display='none';


   document.querySelector('.copaKHAR-4').innerHTML='4'

}
//Adapteri-2
document.querySelector('.ButoniAdapter-42').addEventListener('click',AdapterP2);
function AdapterP2(){
   document.querySelector('.AdapteriKatershe-2').style.display='inline';
   document.querySelector('.copNA-42').style.display='inline';
   document.querySelector('.AdapterArmaturN-42').style.display='inline';
   // document.querySelector('.KornizaH').style.display='inline';

   // document.querySelector('.copaKHA-4').innerText='4';
   // document.querySelector('.copaKH-4').innerText='0'
  // Per +10
  document.querySelector('.KrahuKatershHA-1').style.display='inline';
  document.querySelector('.Krahu4A-H').style.display='inline';
  document.querySelector('.copa4-2').style.display='inline';
  document.querySelector('.copaKHA-4').style.display='inline'
  document.querySelector('.copaKHA-4').innerHTML='4';
  document.querySelector('.Armatura4A').style.display='inline';
  document.querySelector('.ArmaturaKrahuNHA-4').style.display='inline';

   document.querySelector('.KrahuKatershH-1').style.display='none';
   document.querySelector('.copa4').style.display='none';
   document.querySelector('.Armatura4').style.display='none';



   document.querySelector('.copaKHAR-4').innerHTML='4'

}
// Adapteri-3
document.querySelector('.ButoniAdapter-43').addEventListener('click',AdapterP3);
function AdapterP3(){
   document.querySelector('.AdapteriKatershe-3').style.display='inline';
   document.querySelector('.copNA-43').style.display='inline';
   document.querySelector('.AdapterArmaturN-43').style.display='inline';
   // document.querySelector('.KornizaH').style.display='inline';

   // document.querySelector('.copaKHA-4').innerText='4';
   // document.querySelector('.copaKH-4').innerText='0'
   // Per +10
   document.querySelector('.KrahuKatershHA-1').style.display='inline';
   document.querySelector('.Krahu4A-H').style.display='inline';
   document.querySelector('.copa4-2').style.display='inline';
   document.querySelector('.copaKHA-4').style.display='inline'
   document.querySelector('.copaKHA-4').innerHTML='4';
   document.querySelector('.Armatura4A').style.display='inline';
   document.querySelector('.ArmaturaKrahuNHA-4').style.display='inline';


   document.querySelector('.KrahuKatershH-1').style.display='none';
   document.querySelector('.copa4').style.display='none';
   document.querySelector('.Armatura4').style.display='none';


   document.querySelector('.copaKHAR-4').innerHTML='4'

}



//Fillimi
document.querySelector('.Fillimi4').addEventListener('click',Fillimi3);
function Fillimi3(){
   document.querySelector('.ShtyllaKatershe-1').style.display='none';
   document.querySelector('.copNSH-41').style.display='none';
   document.querySelector('.ShtyllaArmaturaN-41').style.display='none';
   document.querySelector('.ShtyllaKatershe-2').style.display='none';
   document.querySelector('.copNSH-42').style.display='none';
   document.querySelector('.ShtyllaArmaturaN-42').style.display='none';
   document.querySelector('.ShtyllaKatershe-3').style.display='none';
   document.querySelector('.copNSH-43').style.display='none';
   document.querySelector('.ShtyllaArmaturaN-43').style.display='none';
   document.querySelector('.AdapteriKatershe-1').style.display='none';
   document.querySelector('.copNA-41').style.display='none';
   document.querySelector('.AdapterArmaturN-41').style.display='none';
   document.querySelector('.AdapteriKatershe-2').style.display='none';
   document.querySelector('.copNA-42').style.display='none';
   document.querySelector('.AdapterArmaturN-42').style.display='none';
   document.querySelector('.AdapteriKatershe-3').style.display='none';
   document.querySelector('.copNA-43').style.display='none';
   document.querySelector('.AdapterArmaturN-43').style.display='none';
   // document.querySelector('.KornizaH').style.display='none';
   document.querySelector('.KrahuKatershHA-1').style.display='none';
   document.querySelector('.copa4-2').style.display='none';
   document.querySelector('.Armatura4A').style.display='none';

   document.querySelector('.KrahuKatershH-1').style.display='inline';
   document.querySelector('.copa4').style.display='inline';
   document.querySelector('.Armatura4').style.display='inline';

   document.querySelector('.KrahuKatershHAR-1').style.display='none';
   document.querySelector('.copa4-1').style.display='none';
   document.querySelector('.Armatura4Ar').style.display='none';


   let Numri4=0;
   document.querySelector('.Krahu4AR-H').innerHTML=Numri4;
   document.querySelector('.copaKHAR-4').innerHTML=Numri4;
   document.querySelector('.ArmaturaKrahuNHAR-4').innerHTML=Numri4;


   // Shfaqja e vlerave
   document.querySelector('.RezultatetKrahut41').style.display='none';
   document.querySelector('.RezultatetKrahut42').style.display='none';
   document.querySelector('.RezultatetKrahut43').style.display='none';
   document.querySelector('.RezultatetKrahut44').style.display='none';

   document.querySelector('.RezultatetVertikaleKrahu4').style.display='inline';

}



// Mbledhja e Driares 4
let KushtiKrahut41=false;
let KushtiKrahut42=false;
let KushtiKrahut43=false;

let KushtiDritaresKatershe1=false;
let KushtiDritaresKatershe2=false;
let KushtiDritaresKatershe3=false;
document.querySelector('.ButoniAdapter-41').addEventListener('click',function(){
   KushtiDritaresKatershe1=true;
   KushtiKrahut41=true;
})
document.querySelector('.ButoniAdapter-42').addEventListener('click',function(){
   KushtiDritaresKatershe2=true;
   KushtiKrahut42=true;
})
document.querySelector('.ButoniAdapter-43').addEventListener('click',function(){
   KushtiDritaresKatershe3=true;
   KushtiKrahut43=true;
})

document.querySelector('.Fillimi4').addEventListener('click',function(){
 KushtiDritaresKatershe1=false;
 KushtiDritaresKatershe2=false;
 KushtiDritaresKatershe3=false;
})


document.querySelector('.Mbledhja4').addEventListener('click',Mbledhja3);
function Mbledhja3(e){
   var vleraGjatesisKatershe=parseInt(document.querySelector('.Gjatesia-4').value);
   var vleraGjeresisKatershe=parseInt(document.querySelector('.Gjeresia-4').value);
   //Kornizat dhe Araturat per dritaret me shtylle 

  // Marrja e vlerave nga inputi
  var InputoKornizesV4=document.querySelector('.InputoKornizesV-4').innerHTML;
  var InputoKornizesH4=document.querySelector('.InputoKornizesH-4').innerHTML;
  var InputiKornizaAV4=document.querySelector('.InputiKornizaAV-4').innerHTML;
  var InputiKornizesAH4=document.querySelector('.InputiKornizaAH-4').innerHTML;
  var InputiKrahuV4=document.querySelector('.InputiKrahuV-4').innerHTML;
  var InputiKrahuH4=document.querySelector('.InputiKrahuH-4').innerHTML;
  var InputiKrahuAV4=document.querySelector('.InputiKrahuAV-4').innerHTML;
  var InputiKrahuAH4=document.querySelector('.InputiKrahuAH-4').innerHTML;
  var XhamiV4=document.querySelector('.XhamiV-4').innerHTML;
  var XhamiH4=document.querySelector('.XhamiH-4').innerHTML;
  var XhamiStatikV4=document.querySelector('.XhamiStatikV-4').innerHTML;
  var XhamiStatikH4=document.querySelector('.XhamiStatikH-4').innerHTML;
  var SH4=document.querySelector('.Shtyll-4').innerHTML;
  var A4=document.querySelector('.Adapteri-4').innerHTML;
  var SHA4=document.querySelector('.ShtyllA-4').innerHTML;
  var AA4=document.querySelector('.AdapteriA-4').innerHTML;



   let VertikaleKorniza4=document.querySelector('.GjatesiaKornizesNV-4').innerText=vleraGjatesisKatershe+parseInt(InputoKornizesV4)+" V";
   document.querySelector('.RezultatetVertikaleKorniza4').innerText=parseInt(VertikaleKorniza4)-6+"[Ko]";
   let Krahu4=document.querySelector('.GjatesiaKornizesNH-4').innerText=vleraGjeresisKatershe+parseInt(InputoKornizesH4)+" H";
   document.querySelector('.ArmaturaKornizesNV-4').innerText=vleraGjatesisKatershe-parseInt(InputiKornizaAV4)+" V";
   document.querySelector('.ArmaturaKornizesNH-4').innerText=vleraGjeresisKatershe-parseInt(InputiKornizesAH4)+" H";

   document.querySelector('.RezultatetKornizes4').innerText=parseInt(Krahu4)-6+"[Ko]";
   //T-Shtylla
   document.querySelector('.T-shtyllaKatershe-1').innerText=vleraGjatesisKatershe-parseInt(SH4)+" V";
   document.querySelector('.T-shtyllaKatershe-2').innerText=vleraGjatesisKatershe-parseInt(SH4)+" V";
   document.querySelector('.T-shtyllaKatershe-3').innerText=vleraGjatesisKatershe-parseInt(SH4)+" V";

   document.querySelector('.Armatura-ShtyllaN-41').innerText=vleraGjatesisKatershe-parseInt(SHA4)+" V";
   document.querySelector('.Armatura-ShtyllaN-42').innerText=vleraGjatesisKatershe-parseInt(SHA4)+" V";
   document.querySelector('.Armatura-ShtyllaN-43').innerText=vleraGjatesisKatershe-parseInt(SHA4)+" V";



   //Adapteri
   document.querySelector('.AdapterKatershe-1').innerText=vleraGjatesisKatershe-parseInt(A4)+" V";
   document.querySelector('.AdapterKatershe-2').innerText=vleraGjatesisKatershe-parseInt(A4)+" V";
   document.querySelector('.AdapterKatershe-3').innerText=vleraGjatesisKatershe-parseInt(A4)+" V";

   document.querySelector('.Armatura-AdapteriN-41').innerText=vleraGjatesisKatershe-parseInt(AA4)+" V";
   document.querySelector('.Armatura-AdapteriN-42').innerText=vleraGjatesisKatershe-parseInt(AA4)+" V";
   document.querySelector('.Armatura-AdapteriN-43').innerText=vleraGjatesisKatershe-parseInt(AA4)+" V";



   //Krahu dhe armaturat e krahut
  let VleraAdapteriKatershe1;
  let VleraAdapterKatershe2;
  let VleraAdapterKatershe3;
  let VleraAdapterKatersheP;

   if(KushtiDritaresKatershe1){
      VleraAdapteriKatershe1=10;
      VleraAdapterKatersheP=0;
      document.querySelector('.Krahu4-H').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatersheP-parseInt(InputiKrahuH4))+" H";
     
      let Krahu42=document.querySelector('.Krahu4AR-H').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatersheP-parseInt(InputiKrahuH4))+" H";
      
     let Krahu43=document.querySelector('.Krahu4A-H').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapteriKatershe1-parseInt(InputiKrahuH4))+" H";

      document.querySelector('.ArmaturaKrahuNH-4').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatersheP-parseInt(InputiKrahuAH4))+" H";
      
      document.querySelector('.ArmaturaKrahuNHAR-4').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatersheP-parseInt(InputiKrahuAH4))+" H";
     
      document.querySelector('.ArmaturaKrahuNHA-4').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapteriKatershe1-parseInt(InputiKrahuAH4))+" H";


       if(KushtiKrahut41){
            document.querySelector('.RezultatetKrahut41').innerText=parseInt(Krahu43)-6+"[Kr]";
            document.querySelector('.RezultatetKrahut42').innerText=parseInt(Krahu43)-6+"[Kr]";
            document.querySelector('.RezultatetKrahut43').innerText=parseInt(Krahu42)-6+"[Kr]";
            document.querySelector('.RezultatetKrahut44').innerText=parseInt(Krahu42)-6+"[Kr]";

       }else{
         document.querySelector('.RezultatetKrahut41').innerText=parseInt(Krahu42)-6+"[Kr]";
         document.querySelector('.RezultatetKrahut42').innerText=parseInt(Krahu42)-6+"[Kr]";
         document.querySelector('.RezultatetKrahut43').innerText=parseInt(Krahu42)-6+"[Kr]";
         document.querySelector('.RezultatetKrahut44').innerText=parseInt(Krahu42)-6+"[Kr]";

       }


      // qe qlen
      document.querySelector('.XhamiK4-H1').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapteriKatershe1-parseInt(XhamiH4));
      document.querySelector('.XhamiK4-H2').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapteriKatershe1-parseInt(XhamiH4));
      document.querySelector('.XhamiK4-H3').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatersheP-parseInt(XhamiH4));
      document.querySelector('.XhamiK4-H4').innerText=parseInt((vleraGjeresisKatershe)/4+ VleraAdapterKatersheP-parseInt(XhamiH4));
      
      // qe nuk qelen
      document.querySelector('.XhamiK4-H11').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapteriKatershe1-parseInt(XhamiStatikH4));
      document.querySelector('.XhamiK4-H22').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapteriKatershe1-parseInt(XhamiStatikH4));
      document.querySelector('.XhamiK4-H33').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatersheP-parseInt(XhamiStatikH4));
      document.querySelector('.XhamiK4-H44').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatersheP-parseInt(XhamiStatikH4));

   }else{
     let Krahu44=document.querySelector('.Krahu4-H').innerText=parseInt((vleraGjeresisKatershe)/4-parseInt(InputiKrahuH4))+" H";
      document.querySelector('.ArmaturaKrahuNH-4').innerText=parseInt((vleraGjeresisKatershe)/4-parseInt(InputiKrahuAH4))+" H";

      document.querySelector('.RezultatetKrahut41').innerText=parseInt(Krahu44)-6+"[Kr]";
      document.querySelector('.RezultatetKrahut42').innerText=parseInt(Krahu44)-6+"[Kr]";
      document.querySelector('.RezultatetKrahut43').innerText=parseInt(Krahu44)-6+"[Kr]";
      document.querySelector('.RezultatetKrahut44').innerText=parseInt(Krahu44)-6+"[Kr]";
      // qe qlen
      document.querySelector('.XhamiK4-H1').innerText=parseInt((vleraGjeresisKatershe)/4-parseInt(XhamiH4));
      document.querySelector('.XhamiK4-H2').innerText=parseInt((vleraGjeresisKatershe)/4-parseInt(XhamiH4));
      document.querySelector('.XhamiK4-H3').innerText=parseInt((vleraGjeresisKatershe)/4-parseInt(XhamiH4));
      document.querySelector('.XhamiK4-H4').innerText=parseInt((vleraGjeresisKatershe)/4-parseInt(XhamiH4));
      
      // qe nuk qelen
      document.querySelector('.XhamiK4-H11').innerText=parseInt((vleraGjeresisKatershe)/4-parseInt(XhamiStatikH4));
      document.querySelector('.XhamiK4-H22').innerText=parseInt((vleraGjeresisKatershe)/4-parseInt(XhamiStatikH4));
      document.querySelector('.XhamiK4-H33').innerText=parseInt((vleraGjeresisKatershe)/4-parseInt(XhamiStatikH4));
      document.querySelector('.XhamiK4-H44').innerText=parseInt((vleraGjeresisKatershe)/4-parseInt(XhamiStatikH4));

   }
if(KushtiDritaresKatershe2){
   VleraAdapterKatershe2=10;
   VleraAdapterKatersheP=0;
   document.querySelector('.Krahu4-H').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatersheP-parseInt(InputiKrahuH4))+" H";
  
     let Krahu45=document.querySelector('.Krahu4AR-H').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatersheP-parseInt(InputiKrahuH4))+" H";
  
     let Krahu46=document.querySelector('.Krahu4A-H').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatershe2-parseInt(InputiKrahuH4))+" H";

      document.querySelector('.ArmaturaKrahuNH-4').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatersheP-parseInt(InputiKrahuAH4))+" H";
     
      document.querySelector('.ArmaturaKrahuNHAR-4').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatersheP-parseInt(InputiKrahuAH4))+" H";
      
      document.querySelector('.ArmaturaKrahuNHA-4').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatershe2-parseInt(InputiKrahuAH4))+" H";



      if(KushtiKrahut42){
         document.querySelector('.RezultatetKrahut41').innerText=parseInt(Krahu45)-6+"[Kr]";
         document.querySelector('.RezultatetKrahut42').innerText=parseInt(Krahu46)-6+"[Kr]";
         document.querySelector('.RezultatetKrahut43').innerText=parseInt(Krahu46)-6+"[Kr]";
         document.querySelector('.RezultatetKrahut44').innerText=parseInt(Krahu45)-6+"[Kr]";

    }





   // qe qlen
   document.querySelector('.XhamiK4-H1').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatersheP-parseInt(XhamiH4));
   document.querySelector('.XhamiK4-H2').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatershe2-parseInt(XhamiH4));
   document.querySelector('.XhamiK4-H3').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatershe2-parseInt(XhamiH4));
   document.querySelector('.XhamiK4-H4').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatersheP-parseInt(XhamiH4));
   
   // qe nuk qelen
   document.querySelector('.XhamiK4-H11').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatersheP-parseInt(XhamiStatikH4));
   document.querySelector('.XhamiK4-H22').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatershe2-parseInt(XhamiStatikH4));
   document.querySelector('.XhamiK4-H33').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatershe2-parseInt(XhamiStatikH4));
   document.querySelector('.XhamiK4-H44').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatersheP-parseInt(XhamiStatikH4));
}

if(KushtiDritaresKatershe3){
   VleraAdapterKatershe3=10;
   VleraAdapterKatersheP=0;
   document.querySelector('.Krahu4-H').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatersheP-parseInt(InputiKrahuH4))+" H";
 
  let Krahu47=document.querySelector('.Krahu4AR-H').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatersheP-parseInt(InputiKrahuH4))+" H";
 
   let Krahu48=document.querySelector('.Krahu4A-H').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatershe3-parseInt(InputiKrahuH4))+" H";

   document.querySelector('.ArmaturaKrahuNH-4').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatersheP-parseInt(InputiKrahuAH4))+" H";
 
   document.querySelector('.ArmaturaKrahuNHAR-4').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatersheP-parseInt(InputiKrahuAH4))+" H";

   document.querySelector('.ArmaturaKrahuNHA-4').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatershe3-parseInt(InputiKrahuAH4))+" H";

   if(KushtiKrahut43){
      document.querySelector('.RezultatetKrahut41').innerText=parseInt(Krahu47)-6+"[Kr]";
      document.querySelector('.RezultatetKrahut42').innerText=parseInt(Krahu47)-6+"[Kr]";
      document.querySelector('.RezultatetKrahut43').innerText=parseInt(Krahu48)-6+"[Kr]";
      document.querySelector('.RezultatetKrahut44').innerText=parseInt(Krahu48)-6+"[Kr]";

 }



   // qe qlen
   document.querySelector('.XhamiK4-H1').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatersheP-parseInt(XhamiH4));
   document.querySelector('.XhamiK4-H2').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatersheP-parseInt(XhamiH4));
   document.querySelector('.XhamiK4-H3').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatershe3-parseInt(XhamiH4));
   document.querySelector('.XhamiK4-H4').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatershe3-parseInt(XhamiH4));
   
   // qe nuk qelen
   document.querySelector('.XhamiK4-H11').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatersheP-parseInt(XhamiStatikH4));
   document.querySelector('.XhamiK4-H22').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatersheP-parseInt(XhamiStatikH4));
   document.querySelector('.XhamiK4-H33').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatershe3-parseInt(XhamiStatikH4));
   document.querySelector('.XhamiK4-H44').innerText=parseInt((vleraGjeresisKatershe)/4+VleraAdapterKatershe3-parseInt(XhamiStatikH4));
}








 let KrahuVertikale4= document.querySelector('.Krahu4-V').innerText=vleraGjatesisKatershe-parseInt(InputiKrahuV4)+" V";
document.querySelector('.RezultatetVertikaleKrahu4').innerText=parseInt(KrahuVertikale4)-6+"[Kr]";

  document.querySelector('.ArmaturaKrahuNV-4').innerText=vleraGjatesisKatershe-parseInt(InputiKrahuAV4)+" V";
  

  //Xhami 1/2
  // qe qelen
  document.querySelector('.XhamiK4-V1').innerText=vleraGjatesisKatershe-parseInt(XhamiV4);
  document.querySelector('.XhamiK4-V2').innerText=vleraGjatesisKatershe-parseInt(XhamiV4);
  document.querySelector('.XhamiK4-V3').innerText=vleraGjatesisKatershe-parseInt(XhamiV4);
  document.querySelector('.XhamiK4-V4').innerText=vleraGjatesisKatershe-parseInt(XhamiV4);

 

  
  //qe nuk qelen
  document.querySelector('.XhamiK4-V11').innerText=vleraGjatesisKatershe-parseInt(XhamiStatikV4);
  document.querySelector('.XhamiK4-V22').innerText=vleraGjatesisKatershe-parseInt(XhamiStatikV4);
  document.querySelector('.XhamiK4-V33').innerText=vleraGjatesisKatershe-parseInt(XhamiStatikV4);
  document.querySelector('.XhamiK4-V44').innerText=vleraGjatesisKatershe-parseInt(XhamiStatikV4);

  
  




   



   document.querySelector('.Dritare-4').style.display="none";
   document.querySelector('.Dritare4-PerFoto').style.display="none";
   // document.querySelector('.Dritare2-PerFoto').style.display='none';
   // document.querySelector('.DritareNdarse-2').style.display="none";


   
}























document.querySelector('.Image-Dritar-Dyshese41').addEventListener('click',OpenDysheP41);
document.querySelector('.Image-Dritar-Dyshese42').addEventListener('click',OpenDysheP42);
document.querySelector('.Image-Dritar-Dyshese43').addEventListener('click',OpenDysheP43);
document.querySelector('.Image-Dritar-Dyshese44').addEventListener('click',OpenDysheP44);
document.querySelector('.Image-Dritar-Dyshese45').addEventListener('click',OpenDysheP45);
document.querySelector('.Image-Dritar-Dyshese46').addEventListener('click',OpenDysheP46);
document.querySelector('.Image-Dritar-Dyshese47').addEventListener('click',OpenDysheP47);
// document.querySelector('.Image-Dritar-Dyshese48').addEventListener('click',OpenDysheP48);
document.querySelector('.Image-Dritar-Dyshese49').addEventListener('click',OpenDysheP49);
document.querySelector('.Image-Dritar-Dyshese410').addEventListener('click',OpenDysheP410);
document.querySelector('.Image-Dritar-Dyshese411').addEventListener('click',OpenDysheP411);
document.querySelector('.Image-Dritar-Dyshese412').addEventListener('click',OpenDysheP412);
document.querySelector('.Image-Dritar-Dyshese413').addEventListener('click',OpenDysheP413);
document.querySelector('.Image-Dritar-Dyshese414').addEventListener('click',OpenDysheP414);
document.querySelector('.Image-Dritar-Dyshese415').addEventListener('click',OpenDysheP415);
document.querySelector('.Image-Dritar-Dyshese416').addEventListener('click',OpenDysheP416);
document.querySelector('.Image-Dritar-Dyshese417').addEventListener('click',OpenDysheP417);
document.querySelector('.Image-Dritar-Dyshese418').addEventListener('click',OpenDysheP418);
document.querySelector('.Image-Dritar-DysheseA1').addEventListener('click',OpenDyshePA1);
document.querySelector('.Image-Dritar-DysheseA2').addEventListener('click',OpenDyshePA2);
document.querySelector('.Image-Dritar-DysheseA3').addEventListener('click',OpenDyshePA3);
document.querySelector('.Image-Dritar-DysheseA4').addEventListener('click',OpenDyshePA4);
document.querySelector('.Image-Dritar-DysheseA5').addEventListener('click',OpenDyshePA5);
document.querySelector('.Image-Dritar-DysheseA6').addEventListener('click',OpenDyshePA6);
document.querySelector('.Image-Dritar-DysheseA7').addEventListener('click',OpenDyshePA7);
document.querySelector('.Image-Dritar-DysheseA8').addEventListener('click',OpenDyshePA8);
document.querySelector('.Image-Dritar-DysheseA9').addEventListener('click',OpenDyshePA9);
document.querySelector('.Image-Dritar-DysheseA10').addEventListener('click',OpenDyshePA10);
document.querySelector('.Image-Dritar-DysheseA11').addEventListener('click',OpenDyshePA11);
document.querySelector('.Image-Dritar-DysheseA12').addEventListener('click',OpenDyshePA12);
document.querySelector('.Image-Dritar-DysheseA13').addEventListener('click',OpenDyshePA13);
document.querySelector('.Image-Dritar-DysheseA14').addEventListener('click',OpenDyshePA14);
document.querySelector('.Image-Dritar-DysheseA15').addEventListener('click',OpenDyshePA15);

document.querySelector('.Image-Dritar-DysheseA12').addEventListener('click',OpenDyshePA12);
document.querySelector('.Image-Dritar-Dyshese419').addEventListener('click',OpenDysheP419);
document.querySelector('.Image-Dritar-Dyshese420').addEventListener('click',OpenDysheP420);
document.querySelector('.Image-Dritar-Dyshese421').addEventListener('click',OpenDysheP421);
document.querySelector('.Image-Dritar-Dyshese422').addEventListener('click',OpenDysheP422);
document.querySelector('.Image-Dritar-Dyshese423').addEventListener('click',OpenDysheP423);
document.querySelector('.Image-Dritar-Dyshese424').addEventListener('click',OpenDysheP424);
document.querySelector('.Image-Dritar-Dyshese425').addEventListener('click',OpenDysheP425);
document.querySelector('.Image-Dritar-Dyshese426').addEventListener('click',OpenDysheP426);
document.querySelector('.Image-Dritar-Dyshese427').addEventListener('click',OpenDysheP427);
document.querySelector('.Image-Dritar-Dyshese428').addEventListener('click',OpenDysheP428);
document.querySelector('.Image-Dritar-Dyshese429').addEventListener('click',OpenDysheP429);
document.querySelector('.Image-Dritar-Dyshese430').addEventListener('click',OpenDysheP430);
document.querySelector('.Image-Dritar-Dyshese431').addEventListener('click',OpenDysheP431);
document.querySelector('.Image-Dritar-Dyshese432').addEventListener('click',OpenDysheP432);
document.querySelector('.Image-Dritar-Dyshese433').addEventListener('click',OpenDysheP433);
document.querySelector('.Image-Dritar-Dyshese434').addEventListener('click',OpenDysheP434);
document.querySelector('.Image-Dritar-Dyshese435').addEventListener('click',OpenDysheP435);
document.querySelector('.Image-Dritar-Dyshese436').addEventListener('click',OpenDysheP436);
document.querySelector('.Image-Dritar-Dyshese437').addEventListener('click',OpenDysheP437);
document.querySelector('.Image-Dritar-Dyshese438').addEventListener('click',OpenDysheP438);
document.querySelector('.Image-Dritar-Dyshese439').addEventListener('click',OpenDysheP439);
document.querySelector('.Image-Dritar-Dyshese440').addEventListener('click',OpenDysheP440);
document.querySelector('.Image-Dritar-Dyshese441').addEventListener('click',OpenDysheP441);
document.querySelector('.Image-Dritar-Dyshese442').addEventListener('click',OpenDysheP442);
document.querySelector('.Image-Dritar-Dyshese443').addEventListener('click',OpenDysheP443);
document.querySelector('.Image-Dritar-Dyshese444').addEventListener('click',OpenDysheP444);
document.querySelector('.Image-Dritar-Dyshese445').addEventListener('click',OpenDysheP445);
document.querySelector('.Image-Dritar-Dyshese446').addEventListener('click',OpenDysheP446);
document.querySelector('.Image-Dritar-Dyshese447').addEventListener('click',OpenDysheP447);
document.querySelector('.Image-Dritar-Dyshese448').addEventListener('click',OpenDysheP448);
document.querySelector('.Image-Dritar-Dyshese449').addEventListener('click',OpenDysheP449);
document.querySelector('.Image-Dritar-Dyshese450').addEventListener('click',OpenDysheP450);
document.querySelector('.Image-Dritar-Dyshese451').addEventListener('click',OpenDysheP451);
document.querySelector('.Image-Dritar-Dyshese452').addEventListener('click',OpenDysheP452);
document.querySelector('.Image-Dritar-Dyshese453').addEventListener('click',OpenDysheP453);
document.querySelector('.Image-Dritar-Dyshese454').addEventListener('click',OpenDysheP454);
document.querySelector('.Image-Dritar-Dyshese455').addEventListener('click',OpenDysheP455);
document.querySelector('.Image-Dritar-Dyshese456').addEventListener('click',OpenDysheP456);
document.querySelector('.Image-Dritar-Dyshese457').addEventListener('click',OpenDysheP457);
document.querySelector('.Image-Dritar-Dyshese458').addEventListener('click',OpenDysheP458);
document.querySelector('.Image-Dritar-Dyshese459').addEventListener('click',OpenDysheP459);
document.querySelector('.Image-Dritar-Dyshese460').addEventListener('click',OpenDysheP460);
document.querySelector('.Image-Dritar-Dyshese461').addEventListener('click',OpenDysheP461);
document.querySelector('.Image-Dritar-Dyshese462').addEventListener('click',OpenDysheP462);
document.querySelector('.Image-Dritar-Dyshese463').addEventListener('click',OpenDysheP463);
document.querySelector('.Image-Dritar-Dyshese464').addEventListener('click',OpenDysheP464);
document.querySelector('.Image-Dritar-Dyshese465').addEventListener('click',OpenDysheP465);
document.querySelector('.Image-Dritar-Dyshese466').addEventListener('click',OpenDysheP466);
document.querySelector('.Image-Dritar-Dyshese467').addEventListener('click',OpenDysheP467);
document.querySelector('.Image-Dritar-Dyshese468').addEventListener('click',OpenDysheP468);
document.querySelector('.Image-Dritar-Dyshese469').addEventListener('click',OpenDysheP469);
document.querySelector('.Image-Dritar-Dyshese470').addEventListener('click',OpenDysheP470);
document.querySelector('.Image-Dritar-Dyshese471').addEventListener('click',OpenDysheP471);
document.querySelector('.Image-Dritar-Dyshese472').addEventListener('click',OpenDysheP472);
document.querySelector('.Image-Dritar-Dyshese473').addEventListener('click',OpenDysheP473);
document.querySelector('.Image-Dritar-Dyshese474').addEventListener('click',OpenDysheP474);
document.querySelector('.Image-Dritar-Dyshese475').addEventListener('click',OpenDysheP475);
document.querySelector('.Image-Dritar-Dyshese476').addEventListener('click',OpenDysheP476);
document.querySelector('.Image-Dritar-Dyshese477').addEventListener('click',OpenDysheP477);
document.querySelector('.Image-Dritar-Dyshese478').addEventListener('click',OpenDysheP478);
document.querySelector('.Image-Dritar-Dyshese479').addEventListener('click',OpenDysheP479);
document.querySelector('.Image-Dritar-Dyshese480').addEventListener('click',OpenDysheP480);
document.querySelector('.Image-Dritar-Dyshese481').addEventListener('click',OpenDysheP481);
document.querySelector('.Image-Dritar-Dyshese482').addEventListener('click',OpenDysheP482);
document.querySelector('.Image-Dritar-Dyshese483').addEventListener('click',OpenDysheP483);
document.querySelector('.Image-Dritar-Dyshese484').addEventListener('click',OpenDysheP484);
document.querySelector('.Image-Dritar-Dyshese485').addEventListener('click',OpenDysheP485);
document.querySelector('.Image-Dritar-Dyshese486').addEventListener('click',OpenDysheP486);
document.querySelector('.Image-Dritar-Dyshese487').addEventListener('click',OpenDysheP487);
document.querySelector('.Image-Dritar-Dyshese488').addEventListener('click',OpenDysheP488);
document.querySelector('.Image-Dritar-Dyshese489').addEventListener('click',OpenDysheP489);
document.querySelector('.Image-Dritar-Dyshese490').addEventListener('click',OpenDysheP490);
document.querySelector('.Image-Dritar-Dyshese491').addEventListener('click',OpenDysheP491);
document.querySelector('.Image-Dritar-Dyshese492').addEventListener('click',OpenDysheP492);
document.querySelector('.Image-Dritar-Dyshese493').addEventListener('click',OpenDysheP493);
document.querySelector('.Image-Dritar-Dyshese494').addEventListener('click',OpenDysheP494);



// document.querySelector('.Image-Dritar-Dyshese449').addEventListener('click',OpenDysheP479);



function OpenDysheP41(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto41.jpg"
    document.slider4.src='Foto-Dritare/Foto41.jpg';
    document.querySelector('.copaKV-4').innerText='0';
    document.querySelector('.copaKH-4').innerText='0';

    document.querySelector('.Krahu4-V').style.display="none";
    document.querySelector('.Krahu4-H').style.display='none';

    document.querySelector('.ArmaturaKrahuNV-4').style.display="none";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="none";


   document.querySelector('#XhamiKrah4-1').style.display="none";
   document.querySelector('#XhamiKrah4-2').style.display="none";
   document.querySelector('#XhamiKrah4-3').style.display="none";
   document.querySelector('#XhamiKrah4-4').style.display="none";


   document.querySelector('#XhamiPaKrah4-11').style.display="block";
   document.querySelector('#XhamiPaKrah4-22').style.display="block";
   document.querySelector('#XhamiPaKrah4-33').style.display="block";
   document.querySelector('#XhamiPaKrah4-44').style.display="block";


   document.querySelector('.copaXhKN1-4').style.display="none";
   document.querySelector('.copaXhKN2-4').style.display="none";
   document.querySelector('.copaXhKN3-4').style.display="none";
   document.querySelector('.copaXhKN4-4').style.display="none";


   document.querySelector('.copaXhPaKN1-4').style.display="block";
   document.querySelector('.copaXhPaKN2-4').style.display="block";
   document.querySelector('.copaXhPaKN3-4').style.display="block";
   document.querySelector('.copaXhPaKN4-4').style.display="block";


   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhPK4-11').innerHTML="1";
    document.querySelector('.XhPK4-22').innerHTML="2";
    document.querySelector('.XhPK4-33').innerHTML="3";
    document.querySelector('.XhPK4-44').innerHTML="4";

   //  Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='none';
    document.querySelector('.RezultatetKrahut42').style.display='none';
    document.querySelector('.RezultatetKrahut43').style.display='none';
    document.querySelector('.RezultatetKrahut44').style.display='none';

    document.querySelector('.RezultatetVertikaleKrahu4').style.display='none';


}
function OpenDysheP42(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto42.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto42.jpg";
   document.querySelector('.copaKV-4').innerText='2';
    document.querySelector('.copaKH-4').innerText='2';

    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';

    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


   document.querySelector('#XhamiKrah4-1').style.display="none";
   document.querySelector('#XhamiKrah4-2').style.display="none";
   document.querySelector('#XhamiKrah4-3').style.display="none";
   document.querySelector('#XhamiKrah4-4').style.display="block";


   document.querySelector('#XhamiPaKrah4-11').style.display="block";
   document.querySelector('#XhamiPaKrah4-22').style.display="block";
   document.querySelector('#XhamiPaKrah4-33').style.display="block";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";


   document.querySelector('.copaXhKN1-4').style.display="none";
   document.querySelector('.copaXhKN2-4').style.display="none";
   document.querySelector('.copaXhKN3-4').style.display="none";
   document.querySelector('.copaXhKN4-4').style.display="block";


   document.querySelector('.copaXhPaKN1-4').style.display="block";
   document.querySelector('.copaXhPaKN2-4').style.display="block";
   document.querySelector('.copaXhPaKN3-4').style.display="block";
   document.querySelector('.copaXhPaKN4-4').style.display="none";


   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhPK4-11').innerHTML="4";
    document.querySelector('.XhPK4-22').innerHTML="2";
    document.querySelector('.XhPK4-33').innerHTML="3";
    document.querySelector('.XhK4-44').innerHTML="1";

     //  Shfaqja e vlerave
     document.querySelector('.RezultatetKrahut41').style.display='inline';
     document.querySelector('.RezultatetKrahut42').style.display='none';
     document.querySelector('.RezultatetKrahut43').style.display='none';
     document.querySelector('.RezultatetKrahut44').style.display='none';
 



}
function OpenDysheP43(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto43.jpg"
   // document.querySelector   ('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto43.jpg";
   document.querySelector('.copaKV-4').innerText='2';
    document.querySelector('.copaKH-4').innerText='2';

    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';

    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


   document.querySelector('#XhamiKrah4-1').style.display="none";
   document.querySelector('#XhamiKrah4-2').style.display="block";
   document.querySelector('#XhamiKrah4-3').style.display="none";
   document.querySelector('#XhamiKrah4-4').style.display="none";


   document.querySelector('#XhamiPaKrah4-11').style.display="block";
   document.querySelector('#XhamiPaKrah4-22').style.display="none";
   document.querySelector('#XhamiPaKrah4-33').style.display="block";
   document.querySelector('#XhamiPaKrah4-44').style.display="block";


   document.querySelector('.copaXhKN1-4').style.display="none";
   document.querySelector('.copaXhKN2-4').style.display="block";
   document.querySelector('.copaXhKN3-4').style.display="none";
   document.querySelector('.copaXhKN4-4').style.display="none";


   document.querySelector('.copaXhPaKN1-4').style.display="block";
   document.querySelector('.copaXhPaKN2-4').style.display="none";
   document.querySelector('.copaXhPaKN3-4').style.display="block";
   document.querySelector('.copaXhPaKN4-4').style.display="block";


   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhPK4-11').innerHTML="1";
    document.querySelector('.XhK4-22').innerHTML="2";
    document.querySelector('.XhPK4-33').innerHTML="3";
    document.querySelector('.XhPK4-44').innerHTML="4";

     //  Shfaqja e vlerave
     document.querySelector('.RezultatetKrahut41').style.display='none';
     document.querySelector('.RezultatetKrahut42').style.display='inline';
     document.querySelector('.RezultatetKrahut43').style.display='none';
     document.querySelector('.RezultatetKrahut44').style.display='none';
 

}
function OpenDysheP44(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto44.jpg"
   // document.querySelector   ('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto44.jpg";
   document.querySelector('.copaKV-4').innerText='2';
    document.querySelector('.copaKH-4').innerText='2';

    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';

    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


   document.querySelector('#XhamiKrah4-1').style.display="none";
   document.querySelector('#XhamiKrah4-2').style.display="none";
   document.querySelector('#XhamiKrah4-3').style.display="inline";
   document.querySelector('#XhamiKrah4-4').style.display="none";


   document.querySelector('#XhamiPaKrah4-11').style.display="inline";
   document.querySelector('#XhamiPaKrah4-22').style.display="inline";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="inline";


   document.querySelector('.copaXhKN1-4').style.display="none";
   document.querySelector('.copaXhKN2-4').style.display="none";
   document.querySelector('.copaXhKN3-4').style.display="inline";
   document.querySelector('.copaXhKN4-4').style.display="none";


   document.querySelector('.copaXhPaKN1-4').style.display="inline";
   document.querySelector('.copaXhPaKN2-4').style.display="inline";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="inline";


   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhPK4-11').innerHTML="1";
    document.querySelector('.XhPK4-22').innerHTML="2";
    document.querySelector('.XhK4-33').innerHTML="3";
    document.querySelector('.XhPK4-44').innerHTML="4";

    //  Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='none';
    document.querySelector('.RezultatetKrahut42').style.display='none';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='none';

}
function OpenDysheP45(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto45.jpg"
   // document.querySelector   ('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto45.jpg";
   document.querySelector('.copaKV-4').innerText='2';
    document.querySelector('.copaKH-4').innerText='2';

    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';

    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


   document.querySelector('#XhamiKrah4-1').style.display="none";
   document.querySelector('#XhamiKrah4-2').style.display="none";
   document.querySelector('#XhamiKrah4-3').style.display="none";
   document.querySelector('#XhamiKrah4-4').style.display="block";


   document.querySelector('#XhamiPaKrah4-11').style.display="block";
   document.querySelector('#XhamiPaKrah4-22').style.display="block";
   document.querySelector('#XhamiPaKrah4-33').style.display="block";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";


   document.querySelector('.copaXhKN1-4').style.display="none";
   document.querySelector('.copaXhKN2-4').style.display="none";
   document.querySelector('.copaXhKN3-4').style.display="none";
   document.querySelector('.copaXhKN4-4').style.display="block";


   document.querySelector('.copaXhPaKN1-4').style.display="block";
   document.querySelector('.copaXhPaKN2-4').style.display="block";
   document.querySelector('.copaXhPaKN3-4').style.display="block";
   document.querySelector('.copaXhPaKN4-4').style.display="none";


   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhPK4-11').innerHTML="1";
    document.querySelector('.XhPK4-22').innerHTML="2";
    document.querySelector('.XhPK4-33').innerHTML="3";
    document.querySelector('.XhK4-44').innerHTML="4";

       //  Shfaqja e vlerave
       document.querySelector('.RezultatetKrahut41').style.display='none';
       document.querySelector('.RezultatetKrahut42').style.display='none';
       document.querySelector('.RezultatetKrahut43').style.display='none';
       document.querySelector('.RezultatetKrahut44').style.display='inline';
}
function OpenDysheP46(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto46.jpg"
   document.slider4.src="Foto-Dritare/Foto46.jpg";
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="4";
   document.querySelector('.XhPK4-22').innerHTML="3";
   document.querySelector('.XhK4-33').innerHTML="2";
   document.querySelector('.XhK4-44').innerHTML="1";

      //  Shfaqja e vlerave
      document.querySelector('.RezultatetKrahut41').style.display='inline';
      document.querySelector('.RezultatetKrahut42').style.display='inline';
      document.querySelector('.RezultatetKrahut43').style.display='none';
      document.querySelector('.RezultatetKrahut44').style.display='none';

   
}
function OpenDysheP47(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto47.jpg"
   // document.querySelector   ('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto47.jpg";
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhPK4-22').innerHTML="4";
   document.querySelector('.XhK4-33').innerHTML="2";
   document.querySelector('.XhK4-44').innerHTML="3";

      //  Shfaqja e vlerave
      document.querySelector('.RezultatetKrahut41').style.display='none';
      document.querySelector('.RezultatetKrahut42').style.display='inline';
      document.querySelector('.RezultatetKrahut43').style.display='inline';
      document.querySelector('.RezultatetKrahut44').style.display='none';

   
}
// function OpenDysheP48(){
//    document.querySelector('.Dritare-4').style.display='block';
//    document.Foto4.src="Foto-Dritare/Foto48.jpg"
//    // document.querySelector   ('.Llojet').innerHTML="Dritare Dyshese";
//    document.slider4.src="Foto-Dritare/Foto48.jpg";
//    document.querySelector('.copaKV-4').innerText='4';
//    document.querySelector('.copaKH-4').innerText='4';

//    document.querySelector('.Krahu4-V').style.display="inline";
//    document.querySelector('.Krahu4-H').style.display='inline';

//    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
//   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


//   document.querySelector('#XhamiKrah4-1').style.display="none";
//   document.querySelector('#XhamiKrah4-2').style.display="none";
//   document.querySelector('#XhamiKrah4-3').style.display="block";
//   document.querySelector('#XhamiKrah4-4').style.display="block";


//   document.querySelector('#XhamiPaKrah4-11').style.display="block";
//   document.querySelector('#XhamiPaKrah4-22').style.display="block";
//   document.querySelector('#XhamiPaKrah4-33').style.display="none";
//   document.querySelector('#XhamiPaKrah4-44').style.display="none";


//   document.querySelector('.copaXhKN1-4').style.display="none";
//   document.querySelector('.copaXhKN2-4').style.display="none";
//   document.querySelector('.copaXhKN3-4').style.display="block";
//   document.querySelector('.copaXhKN4-4').style.display="block";


//   document.querySelector('.copaXhPaKN1-4').style.display="block";
//   document.querySelector('.copaXhPaKN2-4').style.display="block";
//   document.querySelector('.copaXhPaKN3-4').style.display="none";
//   document.querySelector('.copaXhPaKN4-4').style.display="none";


//   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
//    document.querySelector('.XhPK4-11').innerHTML="1";
//    document.querySelector('.XhPK4-22').innerHTML="2";
//    document.querySelector('.XhK4-33').innerHTML="3";
//    document.querySelector('.XhK4-44').innerHTML="4";

   
// }
function OpenDysheP49(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto49.jpg"
   // document.querySelector   ('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto49.jpg";
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="2";
   document.querySelector('.XhPK4-22').innerHTML="1";
   document.querySelector('.XhK4-33').innerHTML="4";
   document.querySelector('.XhK4-44').innerHTML="3";

      //  Shfaqja e vlerave
      document.querySelector('.RezultatetKrahut41').style.display='none';
      document.querySelector('.RezultatetKrahut42').style.display='none';
      document.querySelector('.RezultatetKrahut43').style.display='inline';
      document.querySelector('.RezultatetKrahut44').style.display='inline';

   
}function OpenDysheP410(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto410.jpg"
   // document.querySelector   ('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto410.jpg";
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="4";
   document.querySelector('.XhPK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="1";

      //  Shfaqja e vlerave
      document.querySelector('.RezultatetKrahut41').style.display='inline';
      document.querySelector('.RezultatetKrahut42').style.display='none';
      document.querySelector('.RezultatetKrahut43').style.display='inline';
      document.querySelector('.RezultatetKrahut44').style.display='none';

}
function OpenDysheP411(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto411.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto411.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="3";
   document.querySelector('.XhPK4-22').innerHTML="1";
   document.querySelector('.XhK4-33').innerHTML="4";
   document.querySelector('.XhK4-44').innerHTML="2";

      //  Shfaqja e vlerave
      document.querySelector('.RezultatetKrahut41').style.display='none';
      document.querySelector('.RezultatetKrahut42').style.display='inline';
      document.querySelector('.RezultatetKrahut43').style.display='none';
      document.querySelector('.RezultatetKrahut44').style.display='inline';

}
function OpenDysheP412(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto412.jpg"
   // document.querySelector   ('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto412.jpg";

   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="2";
   document.querySelector('.XhPK4-22').innerHTML="3";
   document.querySelector('.XhK4-33').innerHTML="4";
   document.querySelector('.XhK4-44').innerHTML="1";

      //  Shfaqja e vlerave
      document.querySelector('.RezultatetKrahut41').style.display='inline';
      document.querySelector('.RezultatetKrahut42').style.display='none';
      document.querySelector('.RezultatetKrahut43').style.display='none';
      document.querySelector('.RezultatetKrahut44').style.display='inline';

}
function OpenDysheP413(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto413.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto413.jpg";
   
   document.querySelector('.copaKV-4').innerText='2';
   document.querySelector('.copaKH-4').innerText='2';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="none";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="block";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="none";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="block";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="4";
   document.querySelector('.XhPK4-22').innerHTML="3";
   document.querySelector('.XhPK4-33').innerHTML="2";
   document.querySelector('.XhK4-44').innerHTML="1";

      //  Shfaqja e vlerave
      document.querySelector('.RezultatetKrahut41').style.display='inline';
      document.querySelector('.RezultatetKrahut42').style.display='none';
      document.querySelector('.RezultatetKrahut43').style.display='none';
      document.querySelector('.RezultatetKrahut44').style.display='none';

   
}
function OpenDysheP414(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto414.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto414.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="4";
   document.querySelector('.XhPK4-22').innerHTML="3";
   document.querySelector('.XhK4-33').innerHTML="2";
   document.querySelector('.XhK4-44').innerHTML="1";


      //  Shfaqja e vlerave
      document.querySelector('.RezultatetKrahut41').style.display='inline';
      document.querySelector('.RezultatetKrahut42').style.display='inline';
      document.querySelector('.RezultatetKrahut43').style.display='none';
      document.querySelector('.RezultatetKrahut44').style.display='none';


}
function OpenDysheP415(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto415.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto415.jpg";
   
   document.querySelector('.copaKV-4').innerText='6';
   document.querySelector('.copaKH-4').innerText='6';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="4";
   document.querySelector('.XhK4-22').innerHTML="3";
   document.querySelector('.XhK4-33').innerHTML="2";
   document.querySelector('.XhK4-44').innerHTML="1";

      //  Shfaqja e vlerave
      document.querySelector('.RezultatetKrahut41').style.display='inline';
      document.querySelector('.RezultatetKrahut42').style.display='inline';
      document.querySelector('.RezultatetKrahut43').style.display='inline';
      document.querySelector('.RezultatetKrahut44').style.display='none';


}
function OpenDysheP416(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto416.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto416.jpg";
   
   document.querySelector('.copaKV-4').innerText='8';
   document.querySelector('.copaKH-4').innerText='8';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="block";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="none";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="block";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="none";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhK4-11').innerHTML="1";
   document.querySelector('.XhK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";

   //  Shfaqja e vlerave
   document.querySelector('.RezultatetKrahut41').style.display='inline';
   document.querySelector('.RezultatetKrahut42').style.display='inline';
   document.querySelector('.RezultatetKrahut43').style.display='inline';
   document.querySelector('.RezultatetKrahut44').style.display='inline';



}
function OpenDysheP417(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto417.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto417.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="4";
   document.querySelector('.XhPK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="1";

   //  Shfaqja e vlerave
   document.querySelector('.RezultatetKrahut41').style.display='inline';
   document.querySelector('.RezultatetKrahut42').style.display='none';
   document.querySelector('.RezultatetKrahut43').style.display='inline';
   document.querySelector('.RezultatetKrahut44').style.display='none';



}
function OpenDysheP418(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto418.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto418.jpg";
   
   document.querySelector('.copaKV-4').innerText='6';
   document.querySelector('.copaKH-4').innerText='6';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="2";
   document.querySelector('.XhK4-22').innerHTML="1";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";

      //  Shfaqja e vlerave
      document.querySelector('.RezultatetKrahut41').style.display='inline';
      document.querySelector('.RezultatetKrahut42').style.display='none';
      document.querySelector('.RezultatetKrahut43').style.display='inline';
      document.querySelector('.RezultatetKrahut44').style.display='inline';



}
function OpenDyshePA1(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Adapteri-41.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Adapteri-41.jpg";
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";



  document.querySelector('#XhamiKrah4-1').style.display="inline";
  document.querySelector('#XhamiKrah4-2').style.display="inline";
  document.querySelector('#XhamiKrah4-3').style.display="none";
  document.querySelector('#XhamiKrah4-4').style.display="none";



  document.querySelector('#XhamiPaKrah4-11').style.display="none";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="inline";
  document.querySelector('#XhamiPaKrah4-44').style.display="inline";


  document.querySelector('.copaXhKN1-4').style.display="inline";
  document.querySelector('.copaXhKN2-4').style.display="inline";
  document.querySelector('.copaXhKN3-4').style.display="none";
  document.querySelector('.copaXhKN4-4').style.display="none";


  document.querySelector('.copaXhPaKN1-4').style.display="none";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="inline";
  document.querySelector('.copaXhPaKN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-44').innerHTML="4";
   document.querySelector('.XhPK4-33').innerHTML="3";
   document.querySelector('.XhK4-22').innerHTML="2";
   document.querySelector('.XhK4-11').innerHTML="1";


   //  Shfaqja e vlerave
   document.querySelector('.RezultatetKrahut41').style.display='inline';
   document.querySelector('.RezultatetKrahut42').style.display='inline';
   document.querySelector('.RezultatetKrahut43').style.display='none';
   document.querySelector('.RezultatetKrahut44').style.display='none';

}

function OpenDyshePA2(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Adapteri-42.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Adapteri-42.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhPK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";

      //  Shfaqja e vlerave
      document.querySelector('.RezultatetKrahut41').style.display='none';
      document.querySelector('.RezultatetKrahut42').style.display='none';
      document.querySelector('.RezultatetKrahut43').style.display='inline';
      document.querySelector('.RezultatetKrahut44').style.display='inline';
}
function OpenDyshePA3(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Adapteri-43.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Adapteri-43.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="inline";
  document.querySelector('#XhamiKrah4-3').style.display="inline";
  document.querySelector('#XhamiKrah4-4').style.display="none";


  document.querySelector('#XhamiPaKrah4-11').style.display="inline";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="inline";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="inline";
  document.querySelector('.copaXhKN3-4').style.display="inline";
  document.querySelector('.copaXhKN4-4').style.display="none";


  document.querySelector('.copaXhPaKN1-4').style.display="inline";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-44').innerHTML="4";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";

   //  Shfaqja e vlerave
   document.querySelector('.RezultatetKrahut41').style.display='none';
   document.querySelector('.RezultatetKrahut42').style.display='inline';
   document.querySelector('.RezultatetKrahut43').style.display='inline';
   document.querySelector('.RezultatetKrahut44').style.display='none';



}
function OpenDyshePA4(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Adapteri-44.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Adapteri-44.jpg";
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="inline";
  document.querySelector('#XhamiKrah4-3').style.display="inline";
  document.querySelector('#XhamiKrah4-4').style.display="none";


  document.querySelector('#XhamiPaKrah4-11').style.display="inline";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="inline";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="inline";
  document.querySelector('.copaXhKN3-4').style.display="inline";
  document.querySelector('.copaXhKN4-4').style.display="none";


  document.querySelector('.copaXhPaKN1-4').style.display="inline";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-44').innerHTML="4";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";

   document.querySelector('.RezultatetKrahut41').style.display='none';
   document.querySelector('.RezultatetKrahut42').style.display='inline';
   document.querySelector('.RezultatetKrahut43').style.display='inline';
   document.querySelector('.RezultatetKrahut44').style.display='none';
}
function OpenDyshePA5(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Adapteri-45.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Adapteri-45.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="inline";
  document.querySelector('#XhamiKrah4-3').style.display="inline";
  document.querySelector('#XhamiKrah4-4').style.display="none";


  document.querySelector('#XhamiPaKrah4-11').style.display="inline";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="inline";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="inline";
  document.querySelector('.copaXhKN3-4').style.display="inline";
  document.querySelector('.copaXhKN4-4').style.display="none";


  document.querySelector('.copaXhPaKN1-4').style.display="inline";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-44').innerHTML="4";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";

   document.querySelector('.RezultatetKrahut41').style.display='none';
   document.querySelector('.RezultatetKrahut42').style.display='inline';
   document.querySelector('.RezultatetKrahut43').style.display='inline';
   document.querySelector('.RezultatetKrahut44').style.display='none';
}
function OpenDyshePA6(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Adapteri-46.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Adapteri-46.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="inline";
  document.querySelector('#XhamiKrah4-3').style.display="inline";
  document.querySelector('#XhamiKrah4-4').style.display="none";


  document.querySelector('#XhamiPaKrah4-11').style.display="inline";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="inline";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="inline";
  document.querySelector('.copaXhKN3-4').style.display="inline";
  document.querySelector('.copaXhKN4-4').style.display="none";


  document.querySelector('.copaXhPaKN1-4').style.display="inline";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-44').innerHTML="4";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";

   document.querySelector('.RezultatetKrahut41').style.display='none';
   document.querySelector('.RezultatetKrahut42').style.display='inline';
   document.querySelector('.RezultatetKrahut43').style.display='inline';
   document.querySelector('.RezultatetKrahut44').style.display='none';
}
function OpenDyshePA7(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Adapteri-47.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Adapteri-47.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhPK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";


   // Shfaqja e vlerave
   document.querySelector('.RezultatetKrahut41').style.display='none';
   document.querySelector('.RezultatetKrahut42').style.display='none';
   document.querySelector('.RezultatetKrahut43').style.display='inline';
   document.querySelector('.RezultatetKrahut44').style.display='inline';
}
function OpenDyshePA8(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Adapteri-48.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Adapteri-48.jpg";
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhPK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";

   // Shfaqja e vlerave
   document.querySelector('.RezultatetKrahut41').style.display='none';
   document.querySelector('.RezultatetKrahut42').style.display='none';
   document.querySelector('.RezultatetKrahut43').style.display='inline';
   document.querySelector('.RezultatetKrahut44').style.display='inline';
}

function OpenDyshePA9(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Adapteri-49.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Adapteri-49.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhPK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahut41').style.display='none';
     document.querySelector('.RezultatetKrahut42').style.display='none';
     document.querySelector('.RezultatetKrahut43').style.display='inline';
     document.querySelector('.RezultatetKrahut44').style.display='inline';
}
function OpenDyshePA10(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Adapteri-410.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Adapteri-410.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="inline";
  document.querySelector('#XhamiKrah4-2').style.display="inline";
  document.querySelector('#XhamiKrah4-3').style.display="none";
  document.querySelector('#XhamiKrah4-4').style.display="none";


  document.querySelector('#XhamiPaKrah4-11').style.display="none";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="inline";
  document.querySelector('#XhamiPaKrah4-44').style.display="inline";


  document.querySelector('.copaXhKN1-4').style.display="inline";
  document.querySelector('.copaXhKN2-4').style.display="inline";
  document.querySelector('.copaXhKN3-4').style.display="none";
  document.querySelector('.copaXhKN4-4').style.display="none";


  document.querySelector('.copaXhPaKN1-4').style.display="none";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="inline";
  document.querySelector('.copaXhPaKN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-44').innerHTML="4";
   document.querySelector('.XhPK4-33').innerHTML="3";
   document.querySelector('.XhK4-22').innerHTML="2";
   document.querySelector('.XhK4-11').innerHTML="1";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahut41').style.display='inline';
     document.querySelector('.RezultatetKrahut42').style.display='inline';
     document.querySelector('.RezultatetKrahut43').style.display='none';
     document.querySelector('.RezultatetKrahut44').style.display='none';
}
function OpenDyshePA11(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Adapteri-411.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Adapteri-411.jpg";
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="inline";
  document.querySelector('#XhamiKrah4-2').style.display="inline";
  document.querySelector('#XhamiKrah4-3').style.display="none";
  document.querySelector('#XhamiKrah4-4').style.display="none";


  document.querySelector('#XhamiPaKrah4-11').style.display="none";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="inline";
  document.querySelector('#XhamiPaKrah4-44').style.display="inline";


  document.querySelector('.copaXhKN1-4').style.display="inline";
  document.querySelector('.copaXhKN2-4').style.display="inline";
  document.querySelector('.copaXhKN3-4').style.display="none";
  document.querySelector('.copaXhKN4-4').style.display="none";


  document.querySelector('.copaXhPaKN1-4').style.display="none";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="inline";
  document.querySelector('.copaXhPaKN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-44').innerHTML="4";
   document.querySelector('.XhPK4-33').innerHTML="3";
   document.querySelector('.XhK4-22').innerHTML="2";
   document.querySelector('.XhK4-11').innerHTML="1";


   // Shfaq vlerat
   document.querySelector('.RezultatetKrahut41').style.display='inline';
   document.querySelector('.RezultatetKrahut42').style.display='inline';
   document.querySelector('.RezultatetKrahut43').style.display='none';
   document.querySelector('.RezultatetKrahut44').style.display='none';
}
function OpenDyshePA12(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Adapteri-412.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Adapteri-412.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="inline";
  document.querySelector('#XhamiKrah4-2').style.display="inline";
  document.querySelector('#XhamiKrah4-3').style.display="none";
  document.querySelector('#XhamiKrah4-4').style.display="none";


  document.querySelector('#XhamiPaKrah4-11').style.display="none";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="inline";
  document.querySelector('#XhamiPaKrah4-44').style.display="inline";


  document.querySelector('.copaXhKN1-4').style.display="inline";
  document.querySelector('.copaXhKN2-4').style.display="inline";
  document.querySelector('.copaXhKN3-4').style.display="none";
  document.querySelector('.copaXhKN4-4').style.display="none";


  document.querySelector('.copaXhPaKN1-4').style.display="none";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="inline";
  document.querySelector('.copaXhPaKN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-44').innerHTML="4";
   document.querySelector('.XhPK4-33').innerHTML="3";
   document.querySelector('.XhK4-22').innerHTML="2";
   document.querySelector('.XhK4-11').innerHTML="1";

    // Shfaq vlerat
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='none';
    document.querySelector('.RezultatetKrahut44').style.display='none';
}

function OpenDyshePA13(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Adapteri-413.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Adapteri-413.jpg";
   
   document.querySelector('.copaKV-4').innerText='8';
   document.querySelector('.copaKH-4').innerText='8';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="inline";
  document.querySelector('#XhamiKrah4-2').style.display="inline";
  document.querySelector('#XhamiKrah4-3').style.display="inline";
  document.querySelector('#XhamiKrah4-4').style.display="inline";


  document.querySelector('#XhamiPaKrah4-11').style.display="none";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="inline";
  document.querySelector('.copaXhKN2-4').style.display="inline";
  document.querySelector('.copaXhKN3-4').style.display="inline";
  document.querySelector('.copaXhKN4-4').style.display="inline";


  document.querySelector('.copaXhPaKN1-4').style.display="none";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhK4-44').innerHTML="4";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-22').innerHTML="2";
   document.querySelector('.XhK4-11').innerHTML="1";


   document.querySelector('.KrahuKatershHAR-1').style.display='inline';
   document.querySelector('.copa4-1').style.display='inline';
   document.querySelector('.Armatura4Ar').style.display='inline';
   document.querySelector('.Krahu4AR-H').style.display='inline';
   document.querySelector('.copaKHAR-4').style.display='inline';
   document.querySelector('.ArmaturaKrahuNHAR-4').style.display='inline';

    // Shfaq vlerat
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='inline';

}
function OpenDyshePA14(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Adapteri-414.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Adapteri-414.jpg";
   
   document.querySelector('.copaKV-4').innerText='8';
   document.querySelector('.copaKH-4').innerText='8';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="inline";
  document.querySelector('#XhamiKrah4-2').style.display="inline";
  document.querySelector('#XhamiKrah4-3').style.display="inline";
  document.querySelector('#XhamiKrah4-4').style.display="inline";


  document.querySelector('#XhamiPaKrah4-11').style.display="none";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="inline";
  document.querySelector('.copaXhKN2-4').style.display="inline";
  document.querySelector('.copaXhKN3-4').style.display="inline";
  document.querySelector('.copaXhKN4-4').style.display="inline";


  document.querySelector('.copaXhPaKN1-4').style.display="none";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhK4-44').innerHTML="4";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-22').innerHTML="2";
   document.querySelector('.XhK4-11').innerHTML="1";


   document.querySelector('.KrahuKatershHAR-1').style.display='inline';
   document.querySelector('.copa4-1').style.display='inline';
   document.querySelector('.Armatura4Ar').style.display='inline';

    // Shfaq vlerat
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='inline';
}
function OpenDyshePA15(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Adapteri-415.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Adapteri-415.jpg";
   
   document.querySelector('.copaKV-4').innerText='8';
   document.querySelector('.copaKH-4').innerText='8';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="inline";
  document.querySelector('#XhamiKrah4-2').style.display="inline";
  document.querySelector('#XhamiKrah4-3').style.display="inline";
  document.querySelector('#XhamiKrah4-4').style.display="inline";


  document.querySelector('#XhamiPaKrah4-11').style.display="none";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="inline";
  document.querySelector('.copaXhKN2-4').style.display="inline";
  document.querySelector('.copaXhKN3-4').style.display="inline";
  document.querySelector('.copaXhKN4-4').style.display="inline";


  document.querySelector('.copaXhPaKN1-4').style.display="none";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhK4-44').innerHTML="4";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-22').innerHTML="2";
   document.querySelector('.XhK4-11').innerHTML="1";

   document.querySelector('.KrahuKatershHAR-1').style.display='inline';
   document.querySelector('.copa4-1').style.display='inline';
   document.querySelector('.Armatura4Ar').style.display='inline';


    // Shfaq vlerat
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='inline';


}



























function OpenDysheP419(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto419.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto419.jpg";
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="2";
   document.querySelector('.XhPK4-22').innerHTML="3";
   document.querySelector('.XhK4-33').innerHTML="4";
   document.querySelector('.XhK4-44').innerHTML="1";

   // Shfaq vlerat
   document.querySelector('.RezultatetKrahut41').style.display='inline';
   document.querySelector('.RezultatetKrahut42').style.display='none';
   document.querySelector('.RezultatetKrahut43').style.display='none';
   document.querySelector('.RezultatetKrahut44').style.display='inline';


}

function OpenDysheP420(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto420.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto420.jpg";
   
   document.querySelector('.copaKV-4').innerText='6';
   document.querySelector('.copaKH-4').innerText='6';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="3";
   document.querySelector('.XhK4-22').innerHTML="1";
   document.querySelector('.XhK4-33').innerHTML="2";
   document.querySelector('.XhK4-44').innerHTML="4";


    // Shfaq vlerat
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='none';
    document.querySelector('.RezultatetKrahut44').style.display='inline';
}
function OpenDysheP421(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto421.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto421.jpg";
   
   document.querySelector('.copaKV-4').innerText='2';
   document.querySelector('.copaKH-4').innerText='2';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="none";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="block";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="none";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="none";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="block";
  document.querySelector('.copaXhPaKN4-4').style.display="block";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhK4-44').innerHTML="2";
   document.querySelector('.XhPK4-33').innerHTML="1";
   document.querySelector('.XhPK4-22').innerHTML="3";
   document.querySelector('.XhPK4-11').innerHTML="4";

   document.querySelector('.RezultatetKrahut41').style.display='none';
    document.querySelector('.RezultatetKrahut42').style.display='none';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='none';

}
function OpenDysheP422(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto422.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto422.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="4";
   document.querySelector('.XhPK4-22').innerHTML="3";
   document.querySelector('.XhK4-33').innerHTML="2";
   document.querySelector('.XhK4-44').innerHTML="1";


   // Shfaqja e vlerave
   document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='none';
    document.querySelector('.RezultatetKrahut44').style.display='none';

}
function OpenDysheP423(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto423.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto423.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhPK4-22').innerHTML="4";
   document.querySelector('.XhK4-33').innerHTML="2";
   document.querySelector('.XhK4-44').innerHTML="3";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='none';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='none';

}
function OpenDysheP424(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto424.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto424.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhPK4-22').innerHTML="3";
   document.querySelector('.XhK4-33').innerHTML="2";
   document.querySelector('.XhK4-44').innerHTML="4";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='none';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='none';
    document.querySelector('.RezultatetKrahut44').style.display='inline';

}

function OpenDysheP425(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto425.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto425.jpg";
   
   document.querySelector('.copaKV-4').innerText='6';
   document.querySelector('.copaKH-4').innerText='6';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="4";
   document.querySelector('.XhK4-22').innerHTML="3";
   document.querySelector('.XhK4-33').innerHTML="2";
   document.querySelector('.XhK4-44').innerHTML="1";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='none';

}

function OpenDysheP426(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto426.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto426.jpg";
   
   document.querySelector('.copaKV-4').innerText='6';
   document.querySelector('.copaKH-4').innerText='6';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="3";
   document.querySelector('.XhK4-22').innerHTML="1";
   document.querySelector('.XhK4-33').innerHTML="2";
   document.querySelector('.XhK4-44').innerHTML="4";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='none';
    document.querySelector('.RezultatetKrahut44').style.display='inline';

}

function OpenDysheP427(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto427.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto427.jpg";
   
   document.querySelector('.copaKV-4').innerText='6';
   document.querySelector('.copaKH-4').innerText='6';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='none';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='inline';

}
function OpenDysheP428(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto428.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto428.jpg";
   
   document.querySelector('.copaKV-4').innerText='2';
   document.querySelector('.copaKH-4').innerText='2';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="none";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="block";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="none";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="block";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhK4-44').innerHTML="3";
   document.querySelector('.XhPK4-33').innerHTML="1";
   document.querySelector('.XhPK4-22').innerHTML="2";
   document.querySelector('.XhPK4-11').innerHTML="4";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='none';
    document.querySelector('.RezultatetKrahut42').style.display='none';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='none';

}


function OpenDysheP429(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto429.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto429.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhPK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='none';
    document.querySelector('.RezultatetKrahut42').style.display='none';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='inline';

}

function OpenDysheP430(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto430.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto430.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhPK4-22').innerHTML="4";
   document.querySelector('.XhK4-33').innerHTML="2";
   document.querySelector('.XhK4-44').innerHTML="3";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='none';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='none';

}
function OpenDysheP431(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto431.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto431.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="2";
   document.querySelector('.XhPK4-22').innerHTML="4";
   document.querySelector('.XhK4-33').innerHTML="1";
   document.querySelector('.XhK4-44').innerHTML="3";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='none';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='none';

}
// 
function OpenDysheP432(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto432.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto432.jpg";
   
   document.querySelector('.copaKV-4').innerText='6';
   document.querySelector('.copaKH-4').innerText='6';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="4";
   document.querySelector('.XhK4-22').innerHTML="1";
   document.querySelector('.XhK4-33').innerHTML="2";
   document.querySelector('.XhK4-44').innerHTML="3";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='none';

}
function OpenDysheP433(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto433.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto433.jpg";
   
   document.querySelector('.copaKV-4').innerText='6';
   document.querySelector('.copaKH-4').innerText='6';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="2";
   document.querySelector('.XhK4-22').innerHTML="1";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='none';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='inline';
}
function OpenDysheP434(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto434.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto434.jpg";
   
   document.querySelector('.copaKV-4').innerText='6';
   document.querySelector('.copaKH-4').innerText='6';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='none';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='inline';
}
function OpenDysheP435(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto435.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto435.jpg";
   
   document.querySelector('.copaKV-4').innerText='2';
   document.querySelector('.copaKH-4').innerText='2';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="none";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="block";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="none";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="block";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhK4-44').innerHTML="4";
   document.querySelector('.XhPK4-33').innerHTML="3";
   document.querySelector('.XhPK4-22').innerHTML="2";
   document.querySelector('.XhPK4-11').innerHTML="1";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='none';
    document.querySelector('.RezultatetKrahut42').style.display='none';
    document.querySelector('.RezultatetKrahut43').style.display='none';
    document.querySelector('.RezultatetKrahut44').style.display='inline';
}

// ==========
function OpenDysheP436(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto436.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto436.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhPK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='none';
    document.querySelector('.RezultatetKrahut42').style.display='none';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='inline';
}
function OpenDysheP437(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto437.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto437.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhPK4-22').innerHTML="3";
   document.querySelector('.XhK4-33').innerHTML="2";
   document.querySelector('.XhK4-44').innerHTML="4";


    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='none';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='none';
    document.querySelector('.RezultatetKrahut44').style.display='inline';
}
function OpenDysheP438(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto438.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto438.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="2";
   document.querySelector('.XhPK4-22').innerHTML="3";
   document.querySelector('.XhK4-33').innerHTML="1";
   document.querySelector('.XhK4-44').innerHTML="4";


    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='none';
    document.querySelector('.RezultatetKrahut43').style.display='none';
    document.querySelector('.RezultatetKrahut44').style.display='inline';
}


function OpenDysheP439(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto439.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto439.jpg";
   
   document.querySelector('.copaKV-4').innerText='6';
   document.querySelector('.copaKH-4').innerText='6';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";


    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='none';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='inline';


}
function OpenDysheP440(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto440.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto440.jpg";
   
   document.querySelector('.copaKV-4').innerText='6';
   document.querySelector('.copaKH-4').innerText='6';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="2";
   document.querySelector('.XhK4-22').innerHTML="1";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";


    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='none';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='inline';
}
function OpenDysheP441(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto441.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto441.jpg";
   
   document.querySelector('.copaKV-4').innerText='6';
   document.querySelector('.copaKH-4').innerText='6';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="3";
   document.querySelector('.XhK4-22').innerHTML="1";
   document.querySelector('.XhK4-33').innerHTML="2";
   document.querySelector('.XhK4-44').innerHTML="4";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='none';
    document.querySelector('.RezultatetKrahut44').style.display='inline';
}
// ///
function OpenDysheP442(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto442.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto442.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="4";
   document.querySelector('.XhPK4-22').innerHTML="3";
   document.querySelector('.XhK4-33').innerHTML="2";
   document.querySelector('.XhK4-44').innerHTML="1";

 // Shfaqja e vlerave
 document.querySelector('.RezultatetKrahut41').style.display='inline';
 document.querySelector('.RezultatetKrahut42').style.display='inline';
 document.querySelector('.RezultatetKrahut43').style.display='none';
 document.querySelector('.RezultatetKrahut44').style.display='none';


}
// 3
function OpenDysheP443(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto443.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto443.jpg";
   
   document.querySelector('.copaKV-4').innerText='6';
   document.querySelector('.copaKH-4').innerText='6';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="4";
   document.querySelector('.XhK4-22').innerHTML="1";
   document.querySelector('.XhK4-33').innerHTML="2";
   document.querySelector('.XhK4-44').innerHTML="3";


    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='none';
}
// 3
function OpenDysheP444(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto444.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto444.jpg";
   
   document.querySelector('.copaKV-4').innerText='6';
   document.querySelector('.copaKH-4').innerText='6';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="3";
   document.querySelector('.XhK4-22').innerHTML="1";
   document.querySelector('.XhK4-33').innerHTML="2";
   document.querySelector('.XhK4-44').innerHTML="4";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='none';
    document.querySelector('.RezultatetKrahut44').style.display='inline';
}
// 4
function OpenDysheP445(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto445.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto445.jpg";
   
   document.querySelector('.copaKV-4').innerText='8';
   document.querySelector('.copaKH-4').innerText='8';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="block";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="none";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="block";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="none";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhK4-11').innerHTML="1";
   document.querySelector('.XhK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='inline';


}
function OpenDysheP446(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto446.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto446.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhPK4-22').innerHTML="4";
   document.querySelector('.XhK4-33').innerHTML="2";
   document.querySelector('.XhK4-44').innerHTML="3";


    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='none';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='none';
}

// 3
function OpenDysheP447(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto447.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto447.jpg";
   
   document.querySelector('.copaKV-4').innerText='6';
   document.querySelector('.copaKH-4').innerText='6';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="4";
   document.querySelector('.XhK4-22').innerHTML="1";
   document.querySelector('.XhK4-33').innerHTML="2";
   document.querySelector('.XhK4-44').innerHTML="3";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='none';
}

// 3
function OpenDysheP448(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto448.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto448.jpg";
   
   document.querySelector('.copaKV-4').innerText='6';
   document.querySelector('.copaKH-4').innerText='6';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='none';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='inline';
}

// 4
function OpenDysheP449(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto449.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto449.jpg";
   
   document.querySelector('.copaKV-4').innerText='8';
   document.querySelector('.copaKH-4').innerText='8';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="block";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="none";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="block";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="none";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhK4-11').innerHTML="1";
   document.querySelector('.XhK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='inline';
}
function OpenDysheP450(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto450.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto450.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhPK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";

 // Shfaqja e vlerave
 document.querySelector('.RezultatetKrahut41').style.display='none';
 document.querySelector('.RezultatetKrahut42').style.display='none';
 document.querySelector('.RezultatetKrahut43').style.display='inline';
 document.querySelector('.RezultatetKrahut44').style.display='inline';


}

// 3
function OpenDysheP451(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto451.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto451.jpg";
    
    document.querySelector('.copaKV-4').innerText='6';
    document.querySelector('.copaKH-4').innerText='6';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="none";
   document.querySelector('#XhamiKrah4-2').style.display="block";
   document.querySelector('#XhamiKrah4-3').style.display="block";
   document.querySelector('#XhamiKrah4-4').style.display="block";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="block";
   document.querySelector('#XhamiPaKrah4-22').style.display="none";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="none";
   document.querySelector('.copaXhKN2-4').style.display="block";
   document.querySelector('.copaXhKN3-4').style.display="block";
   document.querySelector('.copaXhKN4-4').style.display="block";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="block";
   document.querySelector('.copaXhPaKN2-4').style.display="none";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhPK4-11').innerHTML="1";
    document.querySelector('.XhK4-22').innerHTML="2";
    document.querySelector('.XhK4-33').innerHTML="3";
    document.querySelector('.XhK4-44').innerHTML="4";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahut41').style.display='none';
     document.querySelector('.RezultatetKrahut42').style.display='inline';
     document.querySelector('.RezultatetKrahut43').style.display='inline';
     document.querySelector('.RezultatetKrahut44').style.display='inline';
 }
//  3
 function OpenDysheP452(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto452.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto452.jpg";
    
    document.querySelector('.copaKV-4').innerText='6';
    document.querySelector('.copaKH-4').innerText='6';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="none";
   document.querySelector('#XhamiKrah4-2').style.display="block";
   document.querySelector('#XhamiKrah4-3').style.display="block";
   document.querySelector('#XhamiKrah4-4').style.display="block";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="block";
   document.querySelector('#XhamiPaKrah4-22').style.display="none";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="none";
   document.querySelector('.copaXhKN2-4').style.display="block";
   document.querySelector('.copaXhKN3-4').style.display="block";
   document.querySelector('.copaXhKN4-4').style.display="block";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="block";
   document.querySelector('.copaXhPaKN2-4').style.display="none";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhPK4-11').innerHTML="2";
    document.querySelector('.XhK4-22').innerHTML="1";
    document.querySelector('.XhK4-33').innerHTML="3";
    document.querySelector('.XhK4-44').innerHTML="4";


     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahut41').style.display='inline';
     document.querySelector('.RezultatetKrahut42').style.display='none';
     document.querySelector('.RezultatetKrahut43').style.display='inline';
     document.querySelector('.RezultatetKrahut44').style.display='inline';



 }
//  4
 function OpenDysheP453(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto453.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto453.jpg";
    
    document.querySelector('.copaKV-4').innerText='8';
    document.querySelector('.copaKH-4').innerText='8';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="block";
   document.querySelector('#XhamiKrah4-2').style.display="block";
   document.querySelector('#XhamiKrah4-3').style.display="block";
   document.querySelector('#XhamiKrah4-4').style.display="block";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="none";
   document.querySelector('#XhamiPaKrah4-22').style.display="none";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="block";
   document.querySelector('.copaXhKN2-4').style.display="block";
   document.querySelector('.copaXhKN3-4').style.display="block";
   document.querySelector('.copaXhKN4-4').style.display="block";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="none";
   document.querySelector('.copaXhPaKN2-4').style.display="none";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhK4-11').innerHTML="1";
    document.querySelector('.XhK4-22').innerHTML="2";
    document.querySelector('.XhK4-33').innerHTML="3";
    document.querySelector('.XhK4-44').innerHTML="4";


     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahut41').style.display='inline';
     document.querySelector('.RezultatetKrahut42').style.display='inline';
     document.querySelector('.RezultatetKrahut43').style.display='inline';
     document.querySelector('.RezultatetKrahut44').style.display='inline';
 }
 function OpenDysheP454(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto454.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto454.jpg";
    
    document.querySelector('.copaKV-4').innerText='4';
    document.querySelector('.copaKH-4').innerText='4';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="none";
   document.querySelector('#XhamiKrah4-2').style.display="none";
   document.querySelector('#XhamiKrah4-3').style.display="block";
   document.querySelector('#XhamiKrah4-4').style.display="block";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="block";
   document.querySelector('#XhamiPaKrah4-22').style.display="block";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="none";
   document.querySelector('.copaXhKN2-4').style.display="none";
   document.querySelector('.copaXhKN3-4').style.display="block";
   document.querySelector('.copaXhKN4-4').style.display="block";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="block";
   document.querySelector('.copaXhPaKN2-4').style.display="block";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhPK4-11').innerHTML="2";
    document.querySelector('.XhPK4-22').innerHTML="3";
    document.querySelector('.XhK4-33').innerHTML="1";
    document.querySelector('.XhK4-44').innerHTML="4";

 // Shfaqja e vlerave
 document.querySelector('.RezultatetKrahut41').style.display='inline';
 document.querySelector('.RezultatetKrahut42').style.display='none';
 document.querySelector('.RezultatetKrahut43').style.display='none';
 document.querySelector('.RezultatetKrahut44').style.display='inline';



 }
//  3
 function OpenDysheP455(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto455.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto455.jpg";
    
    document.querySelector('.copaKV-4').innerText='6';
    document.querySelector('.copaKH-4').innerText='6';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="none";
   document.querySelector('#XhamiKrah4-2').style.display="block";
   document.querySelector('#XhamiKrah4-3').style.display="block";
   document.querySelector('#XhamiKrah4-4').style.display="block";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="block";
   document.querySelector('#XhamiPaKrah4-22').style.display="none";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="none";
   document.querySelector('.copaXhKN2-4').style.display="block";
   document.querySelector('.copaXhKN3-4').style.display="block";
   document.querySelector('.copaXhKN4-4').style.display="block";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="block";
   document.querySelector('.copaXhPaKN2-4').style.display="none";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhPK4-11').innerHTML="3";
    document.querySelector('.XhK4-22').innerHTML="1";
    document.querySelector('.XhK4-33').innerHTML="2";
    document.querySelector('.XhK4-44').innerHTML="4";


     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahut41').style.display='inline';
     document.querySelector('.RezultatetKrahut42').style.display='inline';
     document.querySelector('.RezultatetKrahut43').style.display='none';
     document.querySelector('.RezultatetKrahut44').style.display='inline';
 }
//  3
 function OpenDysheP456(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto456.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto456.jpg";
    
    document.querySelector('.copaKV-4').innerText='6';
    document.querySelector('.copaKH-4').innerText='6';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="none";
   document.querySelector('#XhamiKrah4-2').style.display="block";
   document.querySelector('#XhamiKrah4-3').style.display="block";
   document.querySelector('#XhamiKrah4-4').style.display="block";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="block";
   document.querySelector('#XhamiPaKrah4-22').style.display="none";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="none";
   document.querySelector('.copaXhKN2-4').style.display="block";
   document.querySelector('.copaXhKN3-4').style.display="block";
   document.querySelector('.copaXhKN4-4').style.display="block";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="block";
   document.querySelector('.copaXhPaKN2-4').style.display="none";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhPK4-11').innerHTML="2";
    document.querySelector('.XhK4-22').innerHTML="1";
    document.querySelector('.XhK4-33').innerHTML="3";
    document.querySelector('.XhK4-44').innerHTML="4";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahut41').style.display='inline';
     document.querySelector('.RezultatetKrahut42').style.display='none';
     document.querySelector('.RezultatetKrahut43').style.display='inline';
     document.querySelector('.RezultatetKrahut44').style.display='inline';
 }
//  4
 function OpenDysheP457(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto457.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto457.jpg";
    
    document.querySelector('.copaKV-4').innerText='8';
    document.querySelector('.copaKH-4').innerText='8';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="block";
   document.querySelector('#XhamiKrah4-2').style.display="block";
   document.querySelector('#XhamiKrah4-3').style.display="block";
   document.querySelector('#XhamiKrah4-4').style.display="block";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="none";
   document.querySelector('#XhamiPaKrah4-22').style.display="none";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="block";
   document.querySelector('.copaXhKN2-4').style.display="block";
   document.querySelector('.copaXhKN3-4').style.display="block";
   document.querySelector('.copaXhKN4-4').style.display="block";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="none";
   document.querySelector('.copaXhPaKN2-4').style.display="none";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhK4-11').innerHTML="1";
    document.querySelector('.XhK4-22').innerHTML="2";
    document.querySelector('.XhK4-33').innerHTML="3";
    document.querySelector('.XhK4-44').innerHTML="4";


     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahut41').style.display='inline';
     document.querySelector('.RezultatetKrahut42').style.display='inline';
     document.querySelector('.RezultatetKrahut43').style.display='inline';
     document.querySelector('.RezultatetKrahut44').style.display='inline';
 }
 function OpenDysheP458(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto458.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto458.jpg";
    
    document.querySelector('.copaKV-4').innerText='4';
    document.querySelector('.copaKH-4').innerText='4';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="none";
   document.querySelector('#XhamiKrah4-2').style.display="none";
   document.querySelector('#XhamiKrah4-3').style.display="block";
   document.querySelector('#XhamiKrah4-4').style.display="block";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="block";
   document.querySelector('#XhamiPaKrah4-22').style.display="block";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="none";
   document.querySelector('.copaXhKN2-4').style.display="none";
   document.querySelector('.copaXhKN3-4').style.display="block";
   document.querySelector('.copaXhKN4-4').style.display="block";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="block";
   document.querySelector('.copaXhPaKN2-4').style.display="block";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhPK4-11').innerHTML="1";
    document.querySelector('.XhPK4-22').innerHTML="3";
    document.querySelector('.XhK4-33').innerHTML="2";
    document.querySelector('.XhK4-44').innerHTML="4";

 // Shfaqja e vlerave
 document.querySelector('.RezultatetKrahut41').style.display='none';
 document.querySelector('.RezultatetKrahut42').style.display='inline';
 document.querySelector('.RezultatetKrahut43').style.display='none';
 document.querySelector('.RezultatetKrahut44').style.display='inline';



 }
//  3
 function OpenDysheP459(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto459.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto459.jpg";
    
    document.querySelector('.copaKV-4').innerText='6';
   document.querySelector('.copaKH-4').innerText='6';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="3";
   document.querySelector('.XhK4-22').innerHTML="1";
   document.querySelector('.XhK4-33').innerHTML="2";
   document.querySelector('.XhK4-44').innerHTML="4";


    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='none';
    document.querySelector('.RezultatetKrahut44').style.display='inline';
 }
//  4
 function OpenDysheP460(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto460.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto460.jpg";
    
    document.querySelector('.copaKV-4').innerText='8';
    document.querySelector('.copaKH-4').innerText='8';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="block";
   document.querySelector('#XhamiKrah4-2').style.display="block";
   document.querySelector('#XhamiKrah4-3').style.display="block";
   document.querySelector('#XhamiKrah4-4').style.display="block";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="none";
   document.querySelector('#XhamiPaKrah4-22').style.display="none";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="block";
   document.querySelector('.copaXhKN2-4').style.display="block";
   document.querySelector('.copaXhKN3-4').style.display="block";
   document.querySelector('.copaXhKN4-4').style.display="block";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="none";
   document.querySelector('.copaXhPaKN2-4').style.display="none";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhK4-11').innerHTML="1";
    document.querySelector('.XhK4-22').innerHTML="2";
    document.querySelector('.XhK4-33').innerHTML="3";
    document.querySelector('.XhK4-44').innerHTML="4";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahut41').style.display='inline';
     document.querySelector('.RezultatetKrahut42').style.display='inline';
     document.querySelector('.RezultatetKrahut43').style.display='inline';
     document.querySelector('.RezultatetKrahut44').style.display='inline';
 }




 function OpenDysheP461(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto461.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto461.jpg";
    
    document.querySelector('.copaKV-4').innerText='4';
    document.querySelector('.copaKH-4').innerText='4';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="none";
   document.querySelector('#XhamiKrah4-2').style.display="none";
   document.querySelector('#XhamiKrah4-3').style.display="block";
   document.querySelector('#XhamiKrah4-4').style.display="block";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="block";
   document.querySelector('#XhamiPaKrah4-22').style.display="block";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="none";
   document.querySelector('.copaXhKN2-4').style.display="none";
   document.querySelector('.copaXhKN3-4').style.display="block";
   document.querySelector('.copaXhKN4-4').style.display="block";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="block";
   document.querySelector('.copaXhPaKN2-4').style.display="block";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhPK4-11').innerHTML="2";
    document.querySelector('.XhPK4-22').innerHTML="4";
    document.querySelector('.XhK4-33').innerHTML="1";
    document.querySelector('.XhK4-44').innerHTML="3";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahut41').style.display='inline';
     document.querySelector('.RezultatetKrahut42').style.display='none';
     document.querySelector('.RezultatetKrahut43').style.display='inline';
     document.querySelector('.RezultatetKrahut44').style.display='none';
 }
//  3
 function OpenDysheP462(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto462.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto462.jpg";
    
    document.querySelector('.copaKV-4').innerText='6';
   document.querySelector('.copaKH-4').innerText='6';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="4";
   document.querySelector('.XhK4-22').innerHTML="1";
   document.querySelector('.XhK4-33').innerHTML="2";
   document.querySelector('.XhK4-44').innerHTML="3";


    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='none';


 }
//  4
 function OpenDysheP463(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto463.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto463.jpg";
    
    document.querySelector('.copaKV-4').innerText='8';
    document.querySelector('.copaKH-4').innerText='8';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="block";
   document.querySelector('#XhamiKrah4-2').style.display="block";
   document.querySelector('#XhamiKrah4-3').style.display="block";
   document.querySelector('#XhamiKrah4-4').style.display="block";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="none";
   document.querySelector('#XhamiPaKrah4-22').style.display="none";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="block";
   document.querySelector('.copaXhKN2-4').style.display="block";
   document.querySelector('.copaXhKN3-4').style.display="block";
   document.querySelector('.copaXhKN4-4').style.display="block";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="none";
   document.querySelector('.copaXhPaKN2-4').style.display="none";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhK4-11').innerHTML="1";
    document.querySelector('.XhK4-22').innerHTML="2";
    document.querySelector('.XhK4-33').innerHTML="3";
    document.querySelector('.XhK4-44').innerHTML="4";


     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahut41').style.display='inline';
     document.querySelector('.RezultatetKrahut42').style.display='inline';
     document.querySelector('.RezultatetKrahut43').style.display='inline';
     document.querySelector('.RezultatetKrahut44').style.display='inline';



 }
 function OpenDysheP464(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto464.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto464.jpg";
    
    document.querySelector('.copaKV-4').innerText='4';
    document.querySelector('.copaKH-4').innerText='4';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="none";
   document.querySelector('#XhamiKrah4-2').style.display="none";
   document.querySelector('#XhamiKrah4-3').style.display="block";
   document.querySelector('#XhamiKrah4-4').style.display="block";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="block";
   document.querySelector('#XhamiPaKrah4-22').style.display="block";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="none";
   document.querySelector('.copaXhKN2-4').style.display="none";
   document.querySelector('.copaXhKN3-4').style.display="block";
   document.querySelector('.copaXhKN4-4').style.display="block";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="block";
   document.querySelector('.copaXhPaKN2-4').style.display="block";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhPK4-11').innerHTML="1";
    document.querySelector('.XhPK4-22').innerHTML="3";
    document.querySelector('.XhK4-33').innerHTML="2";
    document.querySelector('.XhK4-44').innerHTML="4";


     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahut41').style.display='none';
     document.querySelector('.RezultatetKrahut42').style.display='inline';
     document.querySelector('.RezultatetKrahut43').style.display='none';
     document.querySelector('.RezultatetKrahut44').style.display='inline';


 }
//  3
 function OpenDysheP465(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto465.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto465.jpg";
    
    document.querySelector('.copaKV-4').innerText='6';
    document.querySelector('.copaKH-4').innerText='6';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="none";
   document.querySelector('#XhamiKrah4-2').style.display="block";
   document.querySelector('#XhamiKrah4-3').style.display="block";
   document.querySelector('#XhamiKrah4-4').style.display="block";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="block";
   document.querySelector('#XhamiPaKrah4-22').style.display="none";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="none";
   document.querySelector('.copaXhKN2-4').style.display="block";
   document.querySelector('.copaXhKN3-4').style.display="block";
   document.querySelector('.copaXhKN4-4').style.display="block";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="block";
   document.querySelector('.copaXhPaKN2-4').style.display="none";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhPK4-11').innerHTML="3";
    document.querySelector('.XhK4-22').innerHTML="1";
    document.querySelector('.XhK4-33').innerHTML="2";
    document.querySelector('.XhK4-44').innerHTML="4";



     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahut41').style.display='inline';
     document.querySelector('.RezultatetKrahut42').style.display='inline';
     document.querySelector('.RezultatetKrahut43').style.display='none';
     document.querySelector('.RezultatetKrahut44').style.display='inline';
 }

//  4
 function OpenDysheP466(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto466.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto466.jpg";
    
    document.querySelector('.copaKV-4').innerText='8';
    document.querySelector('.copaKH-4').innerText='8';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="block";
   document.querySelector('#XhamiKrah4-2').style.display="block";
   document.querySelector('#XhamiKrah4-3').style.display="block";
   document.querySelector('#XhamiKrah4-4').style.display="block";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="none";
   document.querySelector('#XhamiPaKrah4-22').style.display="none";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="block";
   document.querySelector('.copaXhKN2-4').style.display="block";
   document.querySelector('.copaXhKN3-4').style.display="block";
   document.querySelector('.copaXhKN4-4').style.display="block";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="none";
   document.querySelector('.copaXhPaKN2-4').style.display="none";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhK4-11').innerHTML="1";
    document.querySelector('.XhK4-22').innerHTML="2";
    document.querySelector('.XhK4-33').innerHTML="3";
    document.querySelector('.XhK4-44').innerHTML="4";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahut41').style.display='inline';
     document.querySelector('.RezultatetKrahut42').style.display='inline';
     document.querySelector('.RezultatetKrahut43').style.display='inline';
     document.querySelector('.RezultatetKrahut44').style.display='inline';
 }
 function OpenDysheP467(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto467.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto467.jpg";
    
    document.querySelector('.copaKV-4').innerText='4';
    document.querySelector('.copaKH-4').innerText='4';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="none";
   document.querySelector('#XhamiKrah4-2').style.display="none";
   document.querySelector('#XhamiKrah4-3').style.display="block";
   document.querySelector('#XhamiKrah4-4').style.display="block";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="block";
   document.querySelector('#XhamiPaKrah4-22').style.display="block";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="none";
   document.querySelector('.copaXhKN2-4').style.display="none";
   document.querySelector('.copaXhKN3-4').style.display="block";
   document.querySelector('.copaXhKN4-4').style.display="block";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="block";
   document.querySelector('.copaXhPaKN2-4').style.display="block";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhPK4-11').innerHTML="2";
    document.querySelector('.XhPK4-22').innerHTML="4";
    document.querySelector('.XhK4-33').innerHTML="1";
    document.querySelector('.XhK4-44').innerHTML="3";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahut41').style.display='inline';
     document.querySelector('.RezultatetKrahut42').style.display='none';
     document.querySelector('.RezultatetKrahut43').style.display='inline';
     document.querySelector('.RezultatetKrahut44').style.display='none';
 }
//  3
 function OpenDysheP468(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto468.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto468.jpg";
    
    document.querySelector('.copaKV-4').innerText='6';
    document.querySelector('.copaKH-4').innerText='6';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="none";
   document.querySelector('#XhamiKrah4-2').style.display="block";
   document.querySelector('#XhamiKrah4-3').style.display="block";
   document.querySelector('#XhamiKrah4-4').style.display="block";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="block";
   document.querySelector('#XhamiPaKrah4-22').style.display="none";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="none";
   document.querySelector('.copaXhKN2-4').style.display="block";
   document.querySelector('.copaXhKN3-4').style.display="block";
   document.querySelector('.copaXhKN4-4').style.display="block";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="block";
   document.querySelector('.copaXhPaKN2-4').style.display="none";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhPK4-11').innerHTML="4";
    document.querySelector('.XhK4-22').innerHTML="1";
    document.querySelector('.XhK4-33').innerHTML="2";
    document.querySelector('.XhK4-44').innerHTML="3";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahut41').style.display='inline';
     document.querySelector('.RezultatetKrahut42').style.display='inline';
     document.querySelector('.RezultatetKrahut43').style.display='inline';
     document.querySelector('.RezultatetKrahut44').style.display='none';
 }
//  4
 function OpenDysheP469(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto469.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto469.jpg";
    
    document.querySelector('.copaKV-4').innerText='8';
    document.querySelector('.copaKH-4').innerText='8';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="block";
   document.querySelector('#XhamiKrah4-2').style.display="block";
   document.querySelector('#XhamiKrah4-3').style.display="block";
   document.querySelector('#XhamiKrah4-4').style.display="block";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="none";
   document.querySelector('#XhamiPaKrah4-22').style.display="none";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="block";
   document.querySelector('.copaXhKN2-4').style.display="block";
   document.querySelector('.copaXhKN3-4').style.display="block";
   document.querySelector('.copaXhKN4-4').style.display="block";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="none";
   document.querySelector('.copaXhPaKN2-4').style.display="none";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhK4-11').innerHTML="1";
    document.querySelector('.XhK4-22').innerHTML="2";
    document.querySelector('.XhK4-33').innerHTML="3";
    document.querySelector('.XhK4-44').innerHTML="4";


     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahut41').style.display='inline';
     document.querySelector('.RezultatetKrahut42').style.display='inline';
     document.querySelector('.RezultatetKrahut43').style.display='inline';
     document.querySelector('.RezultatetKrahut44').style.display='inline';
 }
 function OpenDysheP470(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto470.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto470.jpg";
    
    document.querySelector('.copaKV-4').innerText='4';
    document.querySelector('.copaKH-4').innerText='4';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="none";
   document.querySelector('#XhamiKrah4-2').style.display="none";
   document.querySelector('#XhamiKrah4-3').style.display="block";
   document.querySelector('#XhamiKrah4-4').style.display="block";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="block";
   document.querySelector('#XhamiPaKrah4-22').style.display="block";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="none";
   document.querySelector('.copaXhKN2-4').style.display="none";
   document.querySelector('.copaXhKN3-4').style.display="block";
   document.querySelector('.copaXhKN4-4').style.display="block";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="block";
   document.querySelector('.copaXhPaKN2-4').style.display="block";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhPK4-11').innerHTML="1";
    document.querySelector('.XhPK4-22').innerHTML="3";
    document.querySelector('.XhK4-33').innerHTML="2";
    document.querySelector('.XhK4-44').innerHTML="4";

 // Shfaqja e vlerave
 document.querySelector('.RezultatetKrahut41').style.display='none';
 document.querySelector('.RezultatetKrahut42').style.display='inline';
 document.querySelector('.RezultatetKrahut43').style.display='none';
 document.querySelector('.RezultatetKrahut44').style.display='inline';


 }



// 3
 function OpenDysheP471(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto471.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto471.jpg";
    
    document.querySelector('.copaKV-4').innerText='6';
    document.querySelector('.copaKH-4').innerText='6';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="none";
   document.querySelector('#XhamiKrah4-2').style.display="block";
   document.querySelector('#XhamiKrah4-3').style.display="block";
   document.querySelector('#XhamiKrah4-4').style.display="block";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="block";
   document.querySelector('#XhamiPaKrah4-22').style.display="none";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="none";
   document.querySelector('.copaXhKN2-4').style.display="block";
   document.querySelector('.copaXhKN3-4').style.display="block";
   document.querySelector('.copaXhKN4-4').style.display="block";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="block";
   document.querySelector('.copaXhPaKN2-4').style.display="none";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhPK4-11').innerHTML="3";
    document.querySelector('.XhK4-22').innerHTML="1";
    document.querySelector('.XhK4-33').innerHTML="2";
    document.querySelector('.XhK4-44').innerHTML="4";

 // Shfaqja e vlerave
 document.querySelector('.RezultatetKrahut41').style.display='inline';
 document.querySelector('.RezultatetKrahut42').style.display='inline';
 document.querySelector('.RezultatetKrahut43').style.display='none';
 document.querySelector('.RezultatetKrahut44').style.display='inline';



 }
//  3
 function OpenDysheP472(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto472.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto472.jpg";
    
    document.querySelector('.copaKV-4').innerText='6';
   document.querySelector('.copaKH-4').innerText='6';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";

 // Shfaqja e vlerave
 document.querySelector('.RezultatetKrahut41').style.display='none';
 document.querySelector('.RezultatetKrahut42').style.display='inline';
 document.querySelector('.RezultatetKrahut43').style.display='inline';
 document.querySelector('.RezultatetKrahut44').style.display='inline';



 }

//  4 deri qitu
 function OpenDysheP473(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto473.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto473.jpg";
    
    document.querySelector('.copaKV-4').innerText='8';
    document.querySelector('.copaKH-4').innerText='8';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="block";
   document.querySelector('#XhamiKrah4-2').style.display="block";
   document.querySelector('#XhamiKrah4-3').style.display="block";
   document.querySelector('#XhamiKrah4-4').style.display="block";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="none";
   document.querySelector('#XhamiPaKrah4-22').style.display="none";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="block";
   document.querySelector('.copaXhKN2-4').style.display="block";
   document.querySelector('.copaXhKN3-4').style.display="block";
   document.querySelector('.copaXhKN4-4').style.display="block";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="none";
   document.querySelector('.copaXhPaKN2-4').style.display="none";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhK4-11').innerHTML="1";
    document.querySelector('.XhK4-22').innerHTML="2";
    document.querySelector('.XhK4-33').innerHTML="3";
    document.querySelector('.XhK4-44').innerHTML="4";

 // Shfaqja e vlerave
 document.querySelector('.RezultatetKrahut41').style.display='inline';
 document.querySelector('.RezultatetKrahut42').style.display='inline';
 document.querySelector('.RezultatetKrahut43').style.display='inline';
 document.querySelector('.RezultatetKrahut44').style.display='inline';


 }
//  3
 function OpenDysheP474(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto474.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto474.jpg";
    
    document.querySelector('.copaKV-4').innerText='6';
    document.querySelector('.copaKH-4').innerText='6';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="none";
   document.querySelector('#XhamiKrah4-2').style.display="block";
   document.querySelector('#XhamiKrah4-3').style.display="block";
   document.querySelector('#XhamiKrah4-4').style.display="block";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="block";
   document.querySelector('#XhamiPaKrah4-22').style.display="none";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="none";
   document.querySelector('.copaXhKN2-4').style.display="block";
   document.querySelector('.copaXhKN3-4').style.display="block";
   document.querySelector('.copaXhKN4-4').style.display="block";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="block";
   document.querySelector('.copaXhPaKN2-4').style.display="none";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhPK4-11').innerHTML="4";
    document.querySelector('.XhK4-22').innerHTML="1";
    document.querySelector('.XhK4-33').innerHTML="2";
    document.querySelector('.XhK4-44').innerHTML="3";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahut41').style.display='inline';
     document.querySelector('.RezultatetKrahut42').style.display='inline';
     document.querySelector('.RezultatetKrahut43').style.display='inline';
     document.querySelector('.RezultatetKrahut44').style.display='none';
 }

//  4
 function OpenDysheP475(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto475.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto475.jpg";
    
    document.querySelector('.copaKV-4').innerText='8';
    document.querySelector('.copaKH-4').innerText='8';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="inline";
   document.querySelector('#XhamiKrah4-2').style.display="inline";
   document.querySelector('#XhamiKrah4-3').style.display="inline";
   document.querySelector('#XhamiKrah4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="none";
   document.querySelector('#XhamiPaKrah4-22').style.display="none";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="inline";
   document.querySelector('.copaXhKN2-4').style.display="inline";
   document.querySelector('.copaXhKN3-4').style.display="inline";
   document.querySelector('.copaXhKN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="none";
   document.querySelector('.copaXhPaKN2-4').style.display="none";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhK4-11').innerHTML="1";
    document.querySelector('.XhK4-22').innerHTML="2";
    document.querySelector('.XhK4-33').innerHTML="3";
    document.querySelector('.XhK4-44').innerHTML="4";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahut41').style.display='inline';
     document.querySelector('.RezultatetKrahut42').style.display='inline';
     document.querySelector('.RezultatetKrahut43').style.display='inline';
     document.querySelector('.RezultatetKrahut44').style.display='inline';
 }
//  3
 function OpenDysheP476(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto476.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto476.jpg";
    
    document.querySelector('.copaKV-4').innerText='6';
   document.querySelector('.copaKH-4').innerText='6';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";

 // Shfaqja e vlerave
 document.querySelector('.RezultatetKrahut41').style.display='none';
 document.querySelector('.RezultatetKrahut42').style.display='inline';
 document.querySelector('.RezultatetKrahut43').style.display='inline';
 document.querySelector('.RezultatetKrahut44').style.display='inline';



 }

//  4
 function OpenDysheP477(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto477.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto477.jpg";
    
    document.querySelector('.copaKV-4').innerText='8';
    document.querySelector('.copaKH-4').innerText='8';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="block";
   document.querySelector('#XhamiKrah4-2').style.display="block";
   document.querySelector('#XhamiKrah4-3').style.display="block";
   document.querySelector('#XhamiKrah4-4').style.display="block";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="none";
   document.querySelector('#XhamiPaKrah4-22').style.display="none";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="block";
   document.querySelector('.copaXhKN2-4').style.display="block";
   document.querySelector('.copaXhKN3-4').style.display="block";
   document.querySelector('.copaXhKN4-4').style.display="block";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="none";
   document.querySelector('.copaXhPaKN2-4').style.display="none";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhK4-11').innerHTML="1";
    document.querySelector('.XhK4-22').innerHTML="2";
    document.querySelector('.XhK4-33').innerHTML="3";
    document.querySelector('.XhK4-44').innerHTML="4";


     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahut41').style.display='inline';
     document.querySelector('.RezultatetKrahut42').style.display='inline';
     document.querySelector('.RezultatetKrahut43').style.display='inline';
     document.querySelector('.RezultatetKrahut44').style.display='inline';
 }
//  4
 function OpenDysheP478(){
    document.querySelector('.Dritare-4').style.display='block';
    document.Foto4.src="Foto-Dritare/Foto478.jpg"
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.slider4.src="Foto-Dritare/Foto478.jpg";
    
    document.querySelector('.copaKV-4').innerText='8';
    document.querySelector('.copaKH-4').innerText='8';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="block";
   document.querySelector('#XhamiKrah4-2').style.display="block";
   document.querySelector('#XhamiKrah4-3').style.display="block";
   document.querySelector('#XhamiKrah4-4').style.display="block";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="none";
   document.querySelector('#XhamiPaKrah4-22').style.display="none";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="block";
   document.querySelector('.copaXhKN2-4').style.display="block";
   document.querySelector('.copaXhKN3-4').style.display="block";
   document.querySelector('.copaXhKN4-4').style.display="block";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="none";
   document.querySelector('.copaXhPaKN2-4').style.display="none";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhK4-11').innerHTML="1";
    document.querySelector('.XhK4-22').innerHTML="2";
    document.querySelector('.XhK4-33').innerHTML="3";
    document.querySelector('.XhK4-44').innerHTML="4";

 // Shfaqja e vlerave
 document.querySelector('.RezultatetKrahut41').style.display='inline';
 document.querySelector('.RezultatetKrahut42').style.display='inline';
 document.querySelector('.RezultatetKrahut43').style.display='inline';
 document.querySelector('.RezultatetKrahut44').style.display='inline';



 }
 function OpenDysheP479(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto479.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto479.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="2";
   document.querySelector('.XhPK4-22').innerHTML="4";
   document.querySelector('.XhK4-33').innerHTML="1";
   document.querySelector('.XhK4-44').innerHTML="3";


    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='none';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='none';


}
// 3
function OpenDysheP480(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto480.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto480.jpg";
   
   document.querySelector('.copaKV-4').innerText='6';
   document.querySelector('.copaKH-4').innerText='6';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="3";
   document.querySelector('.XhK4-22').innerHTML="1";
   document.querySelector('.XhK4-33').innerHTML="2";
   document.querySelector('.XhK4-44').innerHTML="4";


 // Shfaqja e vlerave
 document.querySelector('.RezultatetKrahut41').style.display='inline';
 document.querySelector('.RezultatetKrahut42').style.display='inline';
 document.querySelector('.RezultatetKrahut43').style.display='none';
 document.querySelector('.RezultatetKrahut44').style.display='inline';

}

// 1
function OpenDysheP481(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto481.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto481.jpg";
   
   document.querySelector('.copaKV-4').innerText='2';
   document.querySelector('.copaKH-4').innerText='2';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="none";
  document.querySelector('#XhamiKrah4-4').style.display="inline";


  document.querySelector('#XhamiPaKrah4-11').style.display="inline";
  document.querySelector('#XhamiPaKrah4-22').style.display="inline";
  document.querySelector('#XhamiPaKrah4-33').style.display="inline";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="none";
  document.querySelector('.copaXhKN4-4').style.display="inline";


  document.querySelector('.copaXhPaKN1-4').style.display="inline";
  document.querySelector('.copaXhPaKN2-4').style.display="inline";
  document.querySelector('.copaXhPaKN3-4').style.display="inline";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-22').innerHTML="2";
   document.querySelector('.XhPK4-33').innerHTML="3";
   document.querySelector('.XhPK4-11').innerHTML="4";
   document.querySelector('.XhK4-44').innerHTML="1";
 // Shfaqja e vlerave
 document.querySelector('.RezultatetKrahut41').style.display='inline';
 document.querySelector('.RezultatetKrahut42').style.display='none';
 document.querySelector('.RezultatetKrahut43').style.display='none';
 document.querySelector('.RezultatetKrahut44').style.display='none';


}
function OpenDysheP482(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto482.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto482.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="4";
   document.querySelector('.XhPK4-22').innerHTML="3";
   document.querySelector('.XhK4-33').innerHTML="2";
   document.querySelector('.XhK4-44').innerHTML="1";


    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='none';
    document.querySelector('.RezultatetKrahut44').style.display='none';
}
// 3
function OpenDysheP483(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto483.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto483.jpg";
   
   document.querySelector('.copaKV-4').innerText='6';
   document.querySelector('.copaKH-4').innerText='6';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="4";
   document.querySelector('.XhK4-22').innerHTML="1";
   document.querySelector('.XhK4-33').innerHTML="2";
   document.querySelector('.XhK4-44').innerHTML="3";


    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='none';
}
// 4
function OpenDysheP484(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto484.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto484.jpg";
   
   document.querySelector('.copaKV-4').innerText='8';
    document.querySelector('.copaKH-4').innerText='8';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="block";
   document.querySelector('#XhamiKrah4-2').style.display="block";
   document.querySelector('#XhamiKrah4-3').style.display="block";
   document.querySelector('#XhamiKrah4-4').style.display="block";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="none";
   document.querySelector('#XhamiPaKrah4-22').style.display="none";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="block";
   document.querySelector('.copaXhKN2-4').style.display="block";
   document.querySelector('.copaXhKN3-4').style.display="block";
   document.querySelector('.copaXhKN4-4').style.display="block";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="none";
   document.querySelector('.copaXhPaKN2-4').style.display="none";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhK4-11').innerHTML="1";
    document.querySelector('.XhK4-22').innerHTML="2";
    document.querySelector('.XhK4-33').innerHTML="3";
    document.querySelector('.XhK4-44').innerHTML="4";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahut41').style.display='inline';
     document.querySelector('.RezultatetKrahut42').style.display='inline';
     document.querySelector('.RezultatetKrahut43').style.display='inline';
     document.querySelector('.RezultatetKrahut44').style.display='inline';
}

// 1
function OpenDysheP485(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto485.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto485.jpg";
   
   document.querySelector('.copaKV-4').innerText='2';
   document.querySelector('.copaKH-4').innerText='2';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="none";
  document.querySelector('#XhamiKrah4-4').style.display="inline";


  document.querySelector('#XhamiPaKrah4-11').style.display="inline";
  document.querySelector('#XhamiPaKrah4-22').style.display="inline";
  document.querySelector('#XhamiPaKrah4-33').style.display="inline";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="none";
  document.querySelector('.copaXhKN4-4').style.display="inline";


  document.querySelector('.copaXhPaKN1-4').style.display="inline";
  document.querySelector('.copaXhPaKN2-4').style.display="inline";
  document.querySelector('.copaXhPaKN3-4').style.display="inline";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-22').innerHTML="1";
   document.querySelector('.XhPK4-33').innerHTML="2";
   document.querySelector('.XhPK4-11').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='none';
    document.querySelector('.RezultatetKrahut42').style.display='none';
    document.querySelector('.RezultatetKrahut43').style.display='none';
    document.querySelector('.RezultatetKrahut44').style.display='inline';
}
function OpenDysheP486(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto486.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto486.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhPK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='none';
    document.querySelector('.RezultatetKrahut42').style.display='none';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='inline';
}

// 3
function OpenDysheP487(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto487.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto487.jpg";
   
   document.querySelector('.copaKV-4').innerText='6';
   document.querySelector('.copaKH-4').innerText='6';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='none';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='inline';
}
function OpenDysheP488(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto488.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto488.jpg";
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="2";
   document.querySelector('.XhPK4-22').innerHTML="3";
   document.querySelector('.XhK4-33').innerHTML="1";
   document.querySelector('.XhK4-44').innerHTML="4";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='none';
    document.querySelector('.RezultatetKrahut43').style.display='none';
    document.querySelector('.RezultatetKrahut44').style.display='inline';
}


// 3
function OpenDysheP489(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto489.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto489.jpg";
   
   document.querySelector('.copaKV-4').innerText='6';
   document.querySelector('.copaKH-4').innerText='6';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="2";
   document.querySelector('.XhK4-22').innerHTML="1";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='none';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='inline';
}



// 1
function OpenDysheP490(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto490.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto490.jpg";
   
   document.querySelector('.copaKV-4').innerText='2';
   document.querySelector('.copaKH-4').innerText='2';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="none";
  document.querySelector('#XhamiKrah4-4').style.display="inline";


  document.querySelector('#XhamiPaKrah4-11').style.display="inline";
  document.querySelector('#XhamiPaKrah4-22').style.display="inline";
  document.querySelector('#XhamiPaKrah4-33').style.display="inline";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="none";
  document.querySelector('.copaXhKN4-4').style.display="inline";


  document.querySelector('.copaXhPaKN1-4').style.display="inline";
  document.querySelector('.copaXhPaKN2-4').style.display="inline";
  document.querySelector('.copaXhPaKN3-4').style.display="inline";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-22').innerHTML="1";
   document.querySelector('.XhPK4-33').innerHTML="2";
   document.querySelector('.XhPK4-11').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='none';
    document.querySelector('.RezultatetKrahut42').style.display='none';
    document.querySelector('.RezultatetKrahut43').style.display='none';
    document.querySelector('.RezultatetKrahut44').style.display='inline';
}
function OpenDysheP491(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto491.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto491.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhPK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";


    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='none';
    document.querySelector('.RezultatetKrahut42').style.display='none';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='inline';
}

// 3
function OpenDysheP492(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto492.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto492.jpg";
   
   document.querySelector('.copaKV-4').innerText='6';
   document.querySelector('.copaKH-4').innerText='6';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="block";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="none";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="block";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="none";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="1";
   document.querySelector('.XhK4-22').innerHTML="2";
   document.querySelector('.XhK4-33').innerHTML="3";
   document.querySelector('.XhK4-44').innerHTML="4";


    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='none';
    document.querySelector('.RezultatetKrahut42').style.display='inline';
    document.querySelector('.RezultatetKrahut43').style.display='inline';
    document.querySelector('.RezultatetKrahut44').style.display='inline';
}
// 4
function OpenDysheP493(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto493.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto493.jpg";
   
   document.querySelector('.copaKV-4').innerText='8';
    document.querySelector('.copaKH-4').innerText='8';
 
    document.querySelector('.Krahu4-V').style.display="inline";
    document.querySelector('.Krahu4-H').style.display='inline';
 
    document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrah4-1').style.display="block";
   document.querySelector('#XhamiKrah4-2').style.display="block";
   document.querySelector('#XhamiKrah4-3').style.display="block";
   document.querySelector('#XhamiKrah4-4').style.display="block";
 
 
   document.querySelector('#XhamiPaKrah4-11').style.display="none";
   document.querySelector('#XhamiPaKrah4-22').style.display="none";
   document.querySelector('#XhamiPaKrah4-33').style.display="none";
   document.querySelector('#XhamiPaKrah4-44').style.display="none";
 
 
   document.querySelector('.copaXhKN1-4').style.display="block";
   document.querySelector('.copaXhKN2-4').style.display="block";
   document.querySelector('.copaXhKN3-4').style.display="block";
   document.querySelector('.copaXhKN4-4').style.display="block";
 
 
   document.querySelector('.copaXhPaKN1-4').style.display="none";
   document.querySelector('.copaXhPaKN2-4').style.display="none";
   document.querySelector('.copaXhPaKN3-4').style.display="none";
   document.querySelector('.copaXhPaKN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhK4-11').innerHTML="1";
    document.querySelector('.XhK4-22').innerHTML="2";
    document.querySelector('.XhK4-33').innerHTML="3";
    document.querySelector('.XhK4-44').innerHTML="4";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahut41').style.display='inline';
     document.querySelector('.RezultatetKrahut42').style.display='inline';
     document.querySelector('.RezultatetKrahut43').style.display='inline';
     document.querySelector('.RezultatetKrahut44').style.display='inline';
}


function OpenDysheP494(){
   document.querySelector('.Dritare-4').style.display='block';
   document.Foto4.src="Foto-Dritare/Foto494.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider4.src="Foto-Dritare/Foto494.jpg";
   
   document.querySelector('.copaKV-4').innerText='4';
   document.querySelector('.copaKH-4').innerText='4';

   document.querySelector('.Krahu4-V').style.display="inline";
   document.querySelector('.Krahu4-H').style.display='inline';

   document.querySelector('.ArmaturaKrahuNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH-4').style.display="inline";


  document.querySelector('#XhamiKrah4-1').style.display="none";
  document.querySelector('#XhamiKrah4-2').style.display="none";
  document.querySelector('#XhamiKrah4-3').style.display="block";
  document.querySelector('#XhamiKrah4-4').style.display="block";


  document.querySelector('#XhamiPaKrah4-11').style.display="block";
  document.querySelector('#XhamiPaKrah4-22').style.display="block";
  document.querySelector('#XhamiPaKrah4-33').style.display="none";
  document.querySelector('#XhamiPaKrah4-44').style.display="none";


  document.querySelector('.copaXhKN1-4').style.display="none";
  document.querySelector('.copaXhKN2-4').style.display="none";
  document.querySelector('.copaXhKN3-4').style.display="block";
  document.querySelector('.copaXhKN4-4').style.display="block";


  document.querySelector('.copaXhPaKN1-4').style.display="block";
  document.querySelector('.copaXhPaKN2-4').style.display="block";
  document.querySelector('.copaXhPaKN3-4').style.display="none";
  document.querySelector('.copaXhPaKN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPK4-11').innerHTML="2";
   document.querySelector('.XhPK4-22').innerHTML="3";
   document.querySelector('.XhK4-33').innerHTML="1";
   document.querySelector('.XhK4-44').innerHTML="4";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahut41').style.display='inline';
    document.querySelector('.RezultatetKrahut42').style.display='none';
    document.querySelector('.RezultatetKrahut43').style.display='none';
    document.querySelector('.RezultatetKrahut44').style.display='inline';
}
























document.querySelector('.close4').addEventListener('click',Close4);
// let Closee4=()=>{
//    document.querySelector('.DritareNdarse-4').style.display='none';
// }
function Close4(){
      document.querySelector('.DritareNdarse-4').style.display='none';

}



//Shtylla dhe Adapteri Te Fotot

//Shtylla-1
document.querySelector('.ButoniShtyllaNN-41').addEventListener('click',ShtyllaPN1);
function ShtyllaPN1(){
   document.querySelector('.ShtyllaKatersheN-1').style.display='inline';
   document.querySelector('.copNNSH-41').style.display='inline';
   document.querySelector('.ShtyllaArmaturaNN-41').style.display='inline';
}
//Shtylla-2
document.querySelector('.ButoniShtyllaNN-42').addEventListener('click',ShtyllaPN2);
function ShtyllaPN2(){
   document.querySelector('.ShtyllaKatersheN-2').style.display='inline';
   document.querySelector('.copNNSH-42').style.display='inline';
   document.querySelector('.ShtyllaArmaturaNN-42').style.display='inline';
}
// Shtylle-3
document.querySelector('.ButoniShtyllaNN-43').addEventListener('click',ShtyllaPN3);
function ShtyllaPN3(){
   document.querySelector('.ShtyllaKatersheN-3').style.display='inline';
   document.querySelector('.copNNSH-43').style.display='inline';
   document.querySelector('.ShtyllaArmaturaNN-43').style.display='inline';
}

// Adapteri-1
document.querySelector('.ButoniAdapterNN-41').addEventListener('click',AdapterPN1);
function AdapterPN1(){
   document.querySelector('.AdapteriKatersheN-1').style.display='inline';
   document.querySelector('.copNNA-41').style.display='inline';
   document.querySelector('.AdapterArmaturNN-41').style.display='inline';
}
//Adapteri-2
document.querySelector('.ButoniAdapterNN-42').addEventListener('click',AdapterPN2);
function AdapterPN2(){
   document.querySelector('.AdapteriKatersheN-2').style.display='inline';
   document.querySelector('.copNNA-42').style.display='inline';
   document.querySelector('.AdapterArmaturNN-42').style.display='inline';
}
// Adapteri-3
document.querySelector('.ButoniAdapterNN-43').addEventListener('click',AdapterPN3);
function AdapterPN3(){
   document.querySelector('.AdapteriKatersheN-3').style.display='inline';
   document.querySelector('.copNNA-43').style.display='inline';
   document.querySelector('.AdapterArmaturNN-43').style.display='inline';
}











document.querySelector('.MbledhjaNN4').addEventListener('click',Mbledhja4);

let KushtiKatershesNdarese1=false;
let KushtiKatershesNdarese2=false;
let KushtiKatershesNdarese3=false;






document.querySelector('.ButoniAdapterNN-41').addEventListener('click',function(){
    KushtiKatershesNdarese1=true;

});
document.querySelector('.ButoniAdapterNN-42').addEventListener('click',function(){
   KushtiKatershesNdarese2=true;

});
document.querySelector('.ButoniAdapterNN-43').addEventListener('click',function(){
   KushtiKatershesNdarese3=true;

});


document.querySelector('.FillimiN4').addEventListener('click',function(){
  KushtiKatershesNdarese1=false;
 KushtiKatershesNdarese2=false;
 KushtiKatershesNdarese3=false;

});



function Mbledhja4(e){
   var vleraGjeresisKatersheNdarse1=parseInt(document.querySelector('.GjeresiaKatersheNdarse-1').value);
   var vleraGjeresisKatersheNdarse2=parseInt(document.querySelector('.GjeresiaKatersheNdarse-2').value);
   var vleraGjeresisKatersheNdarse3=parseInt(document.querySelector('.GjeresiaKatersheNdarse-3').value);
   var vleraGjeresisKatersheNdarse4=parseInt(document.querySelector('.GjeresiaKatersheNdarse-4').value);
   var vleraGjatesiaNdarse4=parseInt(document.querySelector('.GjatesiaKatersheNdarse').value);
   var VleraTotal=vleraGjeresisKatersheNdarse1+vleraGjeresisKatersheNdarse2+vleraGjeresisKatersheNdarse3+vleraGjeresisKatersheNdarse4;




   //  Marrja e vlerave
   var InputoKornizesVN=document.querySelector('.InputoKornizesVN-4').innerHTML;
   var InputoKornizesHN=document.querySelector('.InputoKornizesHN-4').innerHTML;
   var InputiKornizaAVN=document.querySelector('.InputiKornizaAVN-4').innerHTML;
   var InputiKornizesAHN=document.querySelector('.InputiKornizaAHN-4').innerHTML;
   var InputiKrahuVN=document.querySelector('.InputiKrahuVN-4').innerHTML;
   var InputiKrahuHN1=document.querySelector('.InputiKrahuHN1-4').innerHTML;
   var InputiKrahuHN2=document.querySelector('.InputiKrahuHN2-4').innerHTML;
   var InputiKrahuHN3=document.querySelector('.InputiKrahuHN3-4').innerHTML;
   var InputiKrahuHN4=document.querySelector('.InputiKrahuHN4-4').innerHTML;
   var InputiKrahuAVN=document.querySelector('.InputiKrahuAVN-4').innerHTML;
   var InputiKrahuAH1=document.querySelector('.InputiKrahuAHN1-4').innerHTML;
   var InputiKrahuAH2=document.querySelector('.InputiKrahuAHN2-4').innerHTML;
   var InputiKrahuAH3=document.querySelector('.InputiKrahuAHN3-4').innerHTML;
   var InputiKrahuAH4=document.querySelector('.InputiKrahuAHN4-4').innerHTML;
   var XhamiVN=document.querySelector('.XhamiVN-4').innerHTML;
   var XhamiHN1=document.querySelector('.XhamiHN1-4').innerHTML;
   var XhamiHN2=document.querySelector('.XhamiHN2-4').innerHTML;
   var XhamiHN3=document.querySelector('.XhamiHN3-4').innerHTML;
   var XhamiHN4=document.querySelector('.XhamiHN4-4').innerHTML;
   var XhamiStatikVN=document.querySelector('.XhamiStatikVN-4').innerHTML;
   var XhamiStatikHN1=document.querySelector('.XhamiStatikHN1-4').innerHTML;
   var XhamiStatikHN2=document.querySelector('.XhamiStatikHN2-4').innerHTML;
   var XhamiStatikHN3=document.querySelector('.XhamiStatikHN3-4').innerHTML;
   var XhamiStatikHN4=document.querySelector('.XhamiStatikHN4-4').innerHTML;
   var SHN=document.querySelector('.ShtyllN-4').innerHTML;
   var AN=document.querySelector('.AdapteriN-4').innerHTML;
   var SHAN=document.querySelector('.ShtyllAN-4').innerHTML;
   var AAN=document.querySelector('.AdapteriAN-4').innerHTML;
  












   //Kornizat dhe Araturat per dritaret me shtylle 
  let KornizaVertikale4N=document.querySelector('.GjatesiaKornizesNNV-4').innerText=vleraGjatesiaNdarse4+parseInt(InputoKornizesVN)+" V";
  document.querySelector('.RezultatetVertikaleKorniza4N').innerText=parseInt(KornizaVertikale4N)-6+"[Ko]";
  let Korniza421=document.querySelector('.GjatesiaKornizesNNH-4').innerText=VleraTotal+parseInt(InputoKornizesHN)+" H";
 
   document.querySelector('.RezultatetKornizesN4').innerText=parseInt(Korniza421)-6+"[Ko]";


   document.querySelector('.ArmaturaKornizesNNV-4').innerText=vleraGjatesiaNdarse4-parseInt(InputiKornizaAVN)+" V";
   document.querySelector('.ArmaturaKornizesNNH-4').innerText=VleraTotal-parseInt(InputiKornizesAHN)+" H";

   //T-Shtylla
   document.querySelector('.T-shtyllaKatersheNN-1').innerText=vleraGjatesiaNdarse4-parseInt(SHN)+" V";
   document.querySelector('.T-shtyllaKatersheNN-2').innerText=vleraGjatesiaNdarse4-parseInt(SHN)+" V";
   document.querySelector('.T-shtyllaKatersheNN-3').innerText=vleraGjatesiaNdarse4-parseInt(SHN)+" V";

   document.querySelector('.Armatura-ShtyllaNN-41').innerText=vleraGjatesiaNdarse4-parseInt(SHAN)+" V";
   document.querySelector('.Armatura-ShtyllaNN-42').innerText=vleraGjatesiaNdarse4-parseInt(SHAN)+" V";
   document.querySelector('.Armatura-ShtyllaNN-43').innerText=vleraGjatesiaNdarse4-parseInt(SHAN)+" V";



   //Adapteri
   document.querySelector('.AdapterKatersheNN-1').innerText=vleraGjatesiaNdarse4-parseInt(AN)+" V";
   document.querySelector('.AdapterKatersheNN-2').innerText=vleraGjatesiaNdarse4-parseInt(AN)+" V";
   document.querySelector('.AdapterKatersheNN-3').innerText=vleraGjatesiaNdarse4-parseInt(AN)+" V";

   document.querySelector('.Armatura-AdapteriNN-41').innerText=vleraGjatesiaNdarse4-parseInt(AAN)+" V";
   document.querySelector('.Armatura-AdapteriNN-42').innerText=vleraGjatesiaNdarse4-parseInt(AAN)+" V";
   document.querySelector('.Armatura-AdapteriNN-43').innerText=vleraGjatesiaNdarse4-parseInt(AAN)+" V";

let VleraAdapteritKatersheNdarese1;
let VleraAdapteritKatersheNdarese2;
let VleraAdapteritKatersheNdarese3;
let VleraAdapteritKatersheNdareseP;

if(KushtiKatershesNdarese1){
   VleraAdapteritKatersheNdarese1=10;
   VleraAdapteritKatersheNdareseP=0;
    let Krahu421=document.querySelector('.KrahuN41-H').innerText=vleraGjeresisKatersheNdarse1-parseInt(InputiKrahuHN1)+VleraAdapteritKatersheNdarese1+" H";
    let Krahu422=document.querySelector('.KrahuN42-H').innerText=vleraGjeresisKatersheNdarse2-parseInt(InputiKrahuHN2)+VleraAdapteritKatersheNdarese1+" H";
    let Krahu423=document.querySelector('.KrahuN43-H').innerText=vleraGjeresisKatersheNdarse3-parseInt(InputiKrahuHN3)+VleraAdapteritKatersheNdareseP+" H";
    let Krahu424=document.querySelector('.KrahuN44-H').innerText=vleraGjeresisKatersheNdarse4-parseInt(InputiKrahuHN4)+VleraAdapteritKatersheNdareseP+" H";

   document.querySelector('.ArmaturaKrahuNNH-1').innerText=vleraGjeresisKatersheNdarse1-parseInt(InputiKrahuAH1)+VleraAdapteritKatersheNdarese1+" H";
   document.querySelector('.ArmaturaKrahuNNH-2').innerText=vleraGjeresisKatersheNdarse2-parseInt(InputiKrahuAH2)+VleraAdapteritKatersheNdarese1+" H";
   document.querySelector('.ArmaturaKrahuNNH-3').innerText=vleraGjeresisKatersheNdarse3-parseInt(InputiKrahuAH3)+VleraAdapteritKatersheNdareseP+" H";
   document.querySelector('.ArmaturaKrahuNNH-4').innerText=vleraGjeresisKatersheNdarse4-parseInt(InputiKrahuAH4)+VleraAdapteritKatersheNdareseP+" H";


   document.querySelector('.RezultatetKrahutN41').innerText=parseInt(Krahu421)-6+"[Kr]";
   document.querySelector('.RezultatetKrahutN42').innerText=parseInt(Krahu422)-6+"[Kr]";
   document.querySelector('.RezultatetKrahutN43').innerText=parseInt(Krahu423)-6+"[Kr]";
   document.querySelector('.RezultatetKrahutN44').innerText=parseInt(Krahu424)-6+"[Kr]";




   document.querySelector('.XhamiNNK4-H1').innerText=vleraGjeresisKatersheNdarse1+VleraAdapteritKatersheNdarese1-parseInt(XhamiHN1);
   document.querySelector('.XhamiNNK4-H2').innerText=vleraGjeresisKatersheNdarse2+VleraAdapteritKatersheNdarese1-parseInt(XhamiHN2);
   document.querySelector('.XhamiNNK4-H3').innerText=vleraGjeresisKatersheNdarse3+VleraAdapteritKatersheNdareseP-parseInt(XhamiHN3);
   document.querySelector('.XhamiNNK4-H4').innerText=vleraGjeresisKatersheNdarse4+VleraAdapteritKatersheNdareseP-parseInt(XhamiHN4);

   document.querySelector('.XhamiNNK4-H11').innerText=vleraGjeresisKatersheNdarse1+VleraAdapteritKatersheNdarese1-parseInt(XhamiStatikHN1);
   document.querySelector('.XhamiNNK4-H22').innerText=vleraGjeresisKatersheNdarse2+VleraAdapteritKatersheNdarese1-parseInt(XhamiStatikHN2);
   document.querySelector('.XhamiNNK4-H33').innerText=vleraGjeresisKatersheNdarse3+VleraAdapteritKatersheNdareseP-parseInt(XhamiStatikHN3);
   document.querySelector('.XhamiNNK4-H44').innerText=vleraGjeresisKatersheNdarse4+VleraAdapteritKatersheNdareseP-parseInt(XhamiStatikHN4);

}else{
   let Krahu425=document.querySelector('.KrahuN41-H').innerText=vleraGjeresisKatersheNdarse1-parseInt(InputiKrahuHN1)+" H";
   let Krahu426=document.querySelector('.KrahuN42-H').innerText=vleraGjeresisKatersheNdarse2-parseInt(InputiKrahuHN2)+" H";
   let Krahu427=document.querySelector('.KrahuN43-H').innerText=vleraGjeresisKatersheNdarse3-parseInt(InputiKrahuHN3)+" H";
   let Krahu428=document.querySelector('.KrahuN44-H').innerText=vleraGjeresisKatersheNdarse4-parseInt(InputiKrahuHN4)+" H";

   document.querySelector('.RezultatetKrahutN41').innerText=parseInt(Krahu425)-6+"[Kr]";
   document.querySelector('.RezultatetKrahutN42').innerText=parseInt(Krahu426)-6+"[Kr]";
   document.querySelector('.RezultatetKrahutN43').innerText=parseInt(Krahu427)-6+"[Kr]";
   document.querySelector('.RezultatetKrahutN44').innerText=parseInt(Krahu428)-6+"[Kr]";



   document.querySelector('.ArmaturaKrahuNNH-1').innerText=vleraGjeresisKatersheNdarse1-parseInt(InputiKrahuAH1)+" H";
   document.querySelector('.ArmaturaKrahuNNH-2').innerText=vleraGjeresisKatersheNdarse2-parseInt(InputiKrahuAH2)+" H";
   document.querySelector('.ArmaturaKrahuNNH-3').innerText=vleraGjeresisKatersheNdarse3-parseInt(InputiKrahuAH3)+" H";
   document.querySelector('.ArmaturaKrahuNNH-4').innerText=vleraGjeresisKatersheNdarse4-parseInt(InputiKrahuAH4)+" H";


   document.querySelector('.XhamiNNK4-H1').innerText=vleraGjeresisKatersheNdarse1-parseInt(XhamiHN1);
   document.querySelector('.XhamiNNK4-H2').innerText=vleraGjeresisKatersheNdarse2-parseInt(XhamiHN2);
   document.querySelector('.XhamiNNK4-H3').innerText=vleraGjeresisKatersheNdarse3-parseInt(XhamiHN3);
   document.querySelector('.XhamiNNK4-H4').innerText=vleraGjeresisKatersheNdarse4-parseInt(XhamiHN4);

   document.querySelector('.XhamiNNK4-H11').innerText=vleraGjeresisKatersheNdarse1-parseInt(XhamiStatikHN1);
   document.querySelector('.XhamiNNK4-H22').innerText=vleraGjeresisKatersheNdarse2-parseInt(XhamiStatikHN2);
   document.querySelector('.XhamiNNK4-H33').innerText=vleraGjeresisKatersheNdarse3-parseInt(XhamiStatikHN3);
   document.querySelector('.XhamiNNK4-H44').innerText=vleraGjeresisKatersheNdarse4-parseInt(XhamiStatikHN4);
}
if(KushtiKatershesNdarese2){
   VleraAdapteritKatersheNdarese2=10;
   VleraAdapteritKatersheNdareseP=0;
   let Krahu429=document.querySelector('.KrahuN41-H').innerText=vleraGjeresisKatersheNdarse1-parseInt(InputiKrahuHN1)+VleraAdapteritKatersheNdareseP+" H";
   let Krahu430=document.querySelector('.KrahuN42-H').innerText=vleraGjeresisKatersheNdarse2-parseInt(InputiKrahuHN2)+VleraAdapteritKatersheNdarese2+" H";
   let Krahu431=document.querySelector('.KrahuN43-H').innerText=vleraGjeresisKatersheNdarse3-parseInt(InputiKrahuHN3)+VleraAdapteritKatersheNdarese2+" H";
   let Krahu432=document.querySelector('.KrahuN44-H').innerText=vleraGjeresisKatersheNdarse4-parseInt(InputiKrahuHN4)+VleraAdapteritKatersheNdareseP+" H";


   document.querySelector('.RezultatetKrahutN41').innerText=parseInt(Krahu429)-6+"[Kr]";
   document.querySelector('.RezultatetKrahutN42').innerText=parseInt(Krahu430)-6+"[Kr]";
   document.querySelector('.RezultatetKrahutN43').innerText=parseInt(Krahu431)-6+"[Kr]";
   document.querySelector('.RezultatetKrahutN44').innerText=parseInt(Krahu432)-6+"[Kr]";




   document.querySelector('.ArmaturaKrahuNNH-1').innerText=vleraGjeresisKatersheNdarse1-parseInt(InputiKrahuAH1)+VleraAdapteritKatersheNdareseP+" H";
   document.querySelector('.ArmaturaKrahuNNH-2').innerText=vleraGjeresisKatersheNdarse2-parseInt(InputiKrahuAH2)+VleraAdapteritKatersheNdarese2+" H";
   document.querySelector('.ArmaturaKrahuNNH-3').innerText=vleraGjeresisKatersheNdarse3-parseInt(InputiKrahuAH3)+VleraAdapteritKatersheNdarese2+" H";
   document.querySelector('.ArmaturaKrahuNNH-4').innerText=vleraGjeresisKatersheNdarse4-parseInt(InputiKrahuAH4)+VleraAdapteritKatersheNdareseP+" H";


   document.querySelector('.XhamiNNK4-H1').innerText=vleraGjeresisKatersheNdarse1+VleraAdapteritKatersheNdareseP-parseInt(XhamiHN1);
   document.querySelector('.XhamiNNK4-H2').innerText=vleraGjeresisKatersheNdarse2+VleraAdapteritKatersheNdarese2-parseInt(XhamiHN2);
   document.querySelector('.XhamiNNK4-H3').innerText=vleraGjeresisKatersheNdarse3+VleraAdapteritKatersheNdarese2-parseInt(XhamiHN3);
   document.querySelector('.XhamiNNK4-H4').innerText=vleraGjeresisKatersheNdarse4+VleraAdapteritKatersheNdareseP-parseInt(XhamiHN4);

   document.querySelector('.XhamiNNK4-H11').innerText=vleraGjeresisKatersheNdarse1+VleraAdapteritKatersheNdareseP-parseInt(XhamiStatikHN1);
   document.querySelector('.XhamiNNK4-H22').innerText=vleraGjeresisKatersheNdarse2+VleraAdapteritKatersheNdarese2-parseInt(XhamiStatikHN2);
   document.querySelector('.XhamiNNK4-H33').innerText=vleraGjeresisKatersheNdarse3+VleraAdapteritKatersheNdarese2-parseInt(XhamiStatikHN3);
   document.querySelector('.XhamiNNK4-H44').innerText=vleraGjeresisKatersheNdarse4+VleraAdapteritKatersheNdareseP-parseInt(XhamiStatikHN4);

}
if(KushtiKatershesNdarese3){
   VleraAdapteritKatersheNdarese3=10;
   VleraAdapteritKatersheNdareseP=0;
   let Krahu433=document.querySelector('.KrahuN41-H').innerText=vleraGjeresisKatersheNdarse1-parseInt(InputiKrahuHN1)+VleraAdapteritKatersheNdareseP+" H";
   let Krahu434=document.querySelector('.KrahuN42-H').innerText=vleraGjeresisKatersheNdarse2-parseInt(InputiKrahuHN2)+VleraAdapteritKatersheNdareseP+" H";
   let Krahu435=document.querySelector('.KrahuN43-H').innerText=vleraGjeresisKatersheNdarse3-parseInt(InputiKrahuHN3)+VleraAdapteritKatersheNdarese3+" H";
   let Krahu436=document.querySelector('.KrahuN44-H').innerText=vleraGjeresisKatersheNdarse4-parseInt(InputiKrahuHN4)+VleraAdapteritKatersheNdarese3+" H";


   document.querySelector('.RezultatetKrahutN41').innerText=parseInt(Krahu433)-6+"[Kr]";
   document.querySelector('.RezultatetKrahutN42').innerText=parseInt(Krahu434)-6+"[Kr]";
   document.querySelector('.RezultatetKrahutN43').innerText=parseInt(Krahu435)-6+"[Kr]";
   document.querySelector('.RezultatetKrahutN44').innerText=parseInt(Krahu436)-6+"[Kr]";




   document.querySelector('.ArmaturaKrahuNNH-1').innerText=vleraGjeresisKatersheNdarse1-parseInt(InputiKrahuAH1)+VleraAdapteritKatersheNdareseP+" H";
   document.querySelector('.ArmaturaKrahuNNH-2').innerText=vleraGjeresisKatersheNdarse2-parseInt(InputiKrahuAH2)+VleraAdapteritKatersheNdareseP+" H";
   document.querySelector('.ArmaturaKrahuNNH-3').innerText=vleraGjeresisKatersheNdarse3-parseInt(InputiKrahuAH3)+VleraAdapteritKatersheNdarese3+" H";
   document.querySelector('.ArmaturaKrahuNNH-4').innerText=vleraGjeresisKatersheNdarse4-parseInt(InputiKrahuAH4)+VleraAdapteritKatersheNdarese3+" H";


   document.querySelector('.XhamiNNK4-H1').innerText=vleraGjeresisKatersheNdarse1+VleraAdapteritKatersheNdareseP-parseInt(XhamiHN1);
   document.querySelector('.XhamiNNK4-H2').innerText=vleraGjeresisKatersheNdarse2+VleraAdapteritKatersheNdareseP-parseInt(XhamiHN2);
   document.querySelector('.XhamiNNK4-H3').innerText=vleraGjeresisKatersheNdarse3+VleraAdapteritKatersheNdarese3-parseInt(XhamiHN3);
   document.querySelector('.XhamiNNK4-H4').innerText=vleraGjeresisKatersheNdarse4+VleraAdapteritKatersheNdarese3-parseInt(XhamiHN4);

   document.querySelector('.XhamiNNK4-H11').innerText=vleraGjeresisKatersheNdarse1+VleraAdapteritKatersheNdareseP-parseInt(XhamiStatikHN1);
   document.querySelector('.XhamiNNK4-H22').innerText=vleraGjeresisKatersheNdarse2+VleraAdapteritKatersheNdareseP-parseInt(XhamiStatikHN2);
   document.querySelector('.XhamiNNK4-H33').innerText=vleraGjeresisKatersheNdarse3+VleraAdapteritKatersheNdarese3-parseInt(XhamiStatikHN3);
   document.querySelector('.XhamiNNK4-H44').innerText=vleraGjeresisKatersheNdarse4+VleraAdapteritKatersheNdarese3-parseInt(XhamiStatikHN4);
}


   //Krahu dhe armaturat e krahut
   let KrahuKorniza4N=document.querySelector('.KrahuN4-V').innerText=vleraGjatesiaNdarse4-parseInt(InputiKrahuVN)+" V";
   document.querySelector('.RezultatetVertikaleKrahu4N').innerText=parseInt(KrahuKorniza4N)-6+"[Kr]";



  document.querySelector('.ArmaturaKrahuNNV-4').innerText=vleraGjatesiaNdarse4-parseInt(InputiKrahuAVN)+" V";


  

  //Xhami 1/2
  // qe qelen
  document.querySelector('.XhamiNNK4-V1').innerText=vleraGjatesiaNdarse4-parseInt(XhamiVN);
  document.querySelector('.XhamiNNK4-V2').innerText=vleraGjatesiaNdarse4-parseInt(XhamiVN);
  document.querySelector('.XhamiNNK4-V3').innerText=vleraGjatesiaNdarse4-parseInt(XhamiVN);
  document.querySelector('.XhamiNNK4-V4').innerText=vleraGjatesiaNdarse4-parseInt(XhamiVN);

 

  
  //qe nuk qelen
  document.querySelector('.XhamiNNK4-V11').innerText=vleraGjatesiaNdarse4-parseInt(XhamiStatikVN);
  document.querySelector('.XhamiNNK4-V22').innerText=vleraGjatesiaNdarse4-parseInt(XhamiStatikVN);
  document.querySelector('.XhamiNNK4-V33').innerText=vleraGjatesiaNdarse4-parseInt(XhamiStatikVN);
  document.querySelector('.XhamiNNK4-V44').innerText=vleraGjatesiaNdarse4-parseInt(XhamiStatikVN);

 




   



   document.querySelector('.DritareNdarse-4').style.display="none";
   document.querySelector('.Dritare4-PerFoto').style.display="none";
   // document.querySelector('.Dritare2-PerFoto').style.display='none';
   // document.querySelector('.DritareNdarse-2').style.display="none";


   
}

document.querySelector('.FillimiN4').addEventListener('click',FillimiN4);
function FillimiN4(){
   document.querySelector('.ShtyllaKatersheN-1').style.display='none';
   document.querySelector('.copNNSH-41').style.display='none';
   document.querySelector('.ShtyllaArmaturaNN-41').style.display='none';
   document.querySelector('.ShtyllaKatersheN-2').style.display='none';
   document.querySelector('.copNNSH-42').style.display='none';
   document.querySelector('.ShtyllaArmaturaNN-42').style.display='none';
   document.querySelector('.ShtyllaKatersheN-3').style.display='none';
   document.querySelector('.copNNSH-43').style.display='none';
   document.querySelector('.ShtyllaArmaturaNN-43').style.display='none';
   document.querySelector('.AdapteriKatersheN-1').style.display='none';
   document.querySelector('.copNNA-41').style.display='none';
   document.querySelector('.AdapterArmaturNN-41').style.display='none';
   document.querySelector('.AdapteriKatersheN-2').style.display='none';
   document.querySelector('.copNNA-42').style.display='none';
   document.querySelector('.AdapterArmaturNN-42').style.display='none';
   document.querySelector('.AdapteriKatersheN-3').style.display='none';
   document.querySelector('.copNNA-43').style.display='none';
   document.querySelector('.AdapterArmaturNN-43').style.display='none';

// Shfaqja e vlerave
   document.querySelector('.RezultatetKrahutN41').style.display="none";
   document.querySelector('.RezultatetKrahutN42').style.display="none";
   document.querySelector('.RezultatetKrahutN43').style.display="none";
   document.querySelector('.RezultatetKrahutN44').style.display="none";



   document.querySelector('.RezultatetVertikaleKrahu4N').style.display='inline';

}







// Buttonat Ndares


document.querySelector('.ButoniNdares41').addEventListener('click',OpenDyshe41);
document.querySelector('.ButoniNdares42').addEventListener('click',OpenDyshe42);
document.querySelector('.ButoniNdares43').addEventListener('click',OpenDyshe43);
document.querySelector('.ButoniNdares44').addEventListener('click',OpenDyshe44);
document.querySelector('.ButoniNdares45').addEventListener('click',OpenDyshe45);
document.querySelector('.ButoniNdares46').addEventListener('click',OpenDyshe46);
document.querySelector('.ButoniNdares47').addEventListener('click',OpenDyshe47);
// document.querySelector('.ButoniNdares48').addEventListener('click',OpenDyshe48);
document.querySelector('.ButoniNdares49').addEventListener('click',OpenDyshe49);
document.querySelector('.ButoniNdares410').addEventListener('click',OpenDyshe410);
document.querySelector('.ButoniNdares411').addEventListener('click',OpenDyshe411);
document.querySelector('.ButoniNdares412').addEventListener('click',OpenDyshe412);
document.querySelector('.ButoniNdares413').addEventListener('click',OpenDyshe413);
document.querySelector('.ButoniNdares414').addEventListener('click',OpenDyshe414);
document.querySelector('.ButoniNdares415').addEventListener('click',OpenDyshe415);
document.querySelector('.ButoniNdares416').addEventListener('click',OpenDyshe416);
document.querySelector('.ButoniNdares417').addEventListener('click',OpenDyshe417);
document.querySelector('.ButoniNdares418').addEventListener('click',OpenDyshe418);
document.querySelector('.ButoniNdares419').addEventListener('click',OpenDyshe419);
document.querySelector('.ButoniNdares420').addEventListener('click',OpenDyshe420);
document.querySelector('.ButoniNdares421').addEventListener('click',OpenDyshe421);
document.querySelector('.ButoniNdares422').addEventListener('click',OpenDyshe422);
document.querySelector('.ButoniNdares423').addEventListener('click',OpenDyshe423);
document.querySelector('.ButoniNdares424').addEventListener('click',OpenDyshe424);
document.querySelector('.ButoniNdares425').addEventListener('click',OpenDyshe425);
document.querySelector('.ButoniNdares426').addEventListener('click',OpenDyshe426);
document.querySelector('.ButoniNdares427').addEventListener('click',OpenDyshe427);
document.querySelector('.ButoniNdares428').addEventListener('click',OpenDyshe428);
document.querySelector('.ButoniNdares429').addEventListener('click',OpenDyshe429);
document.querySelector('.ButoniNdares430').addEventListener('click',OpenDyshe430);
document.querySelector('.ButoniNdares431').addEventListener('click',OpenDyshe431);
document.querySelector('.ButoniNdares432').addEventListener('click',OpenDyshe432);
document.querySelector('.ButoniNdares433').addEventListener('click',OpenDyshe433);
document.querySelector('.ButoniNdares434').addEventListener('click',OpenDyshe434);
document.querySelector('.ButoniNdares435').addEventListener('click',OpenDyshe435);
document.querySelector('.ButoniNdares436').addEventListener('click',OpenDyshe436);
document.querySelector('.ButoniNdares437').addEventListener('click',OpenDyshe437);
document.querySelector('.ButoniNdares438').addEventListener('click',OpenDyshe438);
document.querySelector('.ButoniNdares439').addEventListener('click',OpenDyshe439);
document.querySelector('.ButoniNdares440').addEventListener('click',OpenDyshe440);
document.querySelector('.ButoniNdares441').addEventListener('click',OpenDyshe441);
document.querySelector('.ButoniNdares442').addEventListener('click',OpenDyshe442);
document.querySelector('.ButoniNdares443').addEventListener('click',OpenDyshe443);
document.querySelector('.ButoniNdares444').addEventListener('click',OpenDyshe444);
document.querySelector('.ButoniNdares445').addEventListener('click',OpenDyshe445);
document.querySelector('.ButoniNdares446').addEventListener('click',OpenDyshe446);
document.querySelector('.ButoniNdares447').addEventListener('click',OpenDyshe447);
document.querySelector('.ButoniNdares448').addEventListener('click',OpenDyshe448);
document.querySelector('.ButoniNdares449').addEventListener('click',OpenDyshe449);
document.querySelector('.ButoniNdares450').addEventListener('click',OpenDyshe450);
document.querySelector('.ButoniNdares451').addEventListener('click',OpenDyshe451);
document.querySelector('.ButoniNdares452').addEventListener('click',OpenDyshe452);
document.querySelector('.ButoniNdares453').addEventListener('click',OpenDyshe453);
document.querySelector('.ButoniNdares454').addEventListener('click',OpenDyshe454);
document.querySelector('.ButoniNdares455').addEventListener('click',OpenDyshe455);
document.querySelector('.ButoniNdares456').addEventListener('click',OpenDyshe456);
document.querySelector('.ButoniNdares457').addEventListener('click',OpenDyshe457);
document.querySelector('.ButoniNdares458').addEventListener('click',OpenDyshe458);
document.querySelector('.ButoniNdares459').addEventListener('click',OpenDyshe459);
document.querySelector('.ButoniNdares460').addEventListener('click',OpenDyshe460);
document.querySelector('.ButoniNdares461').addEventListener('click',OpenDyshe461);
document.querySelector('.ButoniNdares462').addEventListener('click',OpenDyshe462);
document.querySelector('.ButoniNdares463').addEventListener('click',OpenDyshe463);
document.querySelector('.ButoniNdares464').addEventListener('click',OpenDyshe464);
document.querySelector('.ButoniNdares465').addEventListener('click',OpenDyshe465);
document.querySelector('.ButoniNdares466').addEventListener('click',OpenDyshe466);
document.querySelector('.ButoniNdares467').addEventListener('click',OpenDyshe467);
document.querySelector('.ButoniNdares468').addEventListener('click',OpenDyshe468);
document.querySelector('.ButoniNdares469').addEventListener('click',OpenDyshe469);
document.querySelector('.ButoniNdares470').addEventListener('click',OpenDyshe470);
document.querySelector('.ButoniNdares471').addEventListener('click',OpenDyshe471);
document.querySelector('.ButoniNdares472').addEventListener('click',OpenDyshe472);
document.querySelector('.ButoniNdares473').addEventListener('click',OpenDyshe473);
document.querySelector('.ButoniNdares474').addEventListener('click',OpenDyshe474);
document.querySelector('.ButoniNdares475').addEventListener('click',OpenDyshe475);
document.querySelector('.ButoniNdares476').addEventListener('click',OpenDyshe476);
document.querySelector('.ButoniNdares477').addEventListener('click',OpenDyshe477);
document.querySelector('.ButoniNdares478').addEventListener('click',OpenDyshe478);
document.querySelector('.ButoniNdares479').addEventListener('click',OpenDyshe479);
document.querySelector('.ButoniNdares480').addEventListener('click',OpenDyshe480);
document.querySelector('.ButoniNdares481').addEventListener('click',OpenDyshe481);
document.querySelector('.ButoniNdares482').addEventListener('click',OpenDyshe482);
document.querySelector('.ButoniNdares483').addEventListener('click',OpenDyshe483);
document.querySelector('.ButoniNdares484').addEventListener('click',OpenDyshe484);
document.querySelector('.ButoniNdares485').addEventListener('click',OpenDyshe485);
document.querySelector('.ButoniNdares486').addEventListener('click',OpenDyshe486);
document.querySelector('.ButoniNdares487').addEventListener('click',OpenDyshe487);
document.querySelector('.ButoniNdares488').addEventListener('click',OpenDyshe488);
document.querySelector('.ButoniNdares489').addEventListener('click',OpenDyshe489);
document.querySelector('.ButoniNdares490').addEventListener('click',OpenDyshe490);
document.querySelector('.ButoniNdares491').addEventListener('click',OpenDyshe491);
document.querySelector('.ButoniNdares492').addEventListener('click',OpenDyshe492);
document.querySelector('.ButoniNdares493').addEventListener('click',OpenDyshe493);
document.querySelector('.ButoniNdares494').addEventListener('click',OpenDyshe494);
document.querySelector('.ButoniNdaresA1').addEventListener('click',OpenDysheA1);
document.querySelector('.ButoniNdaresA2').addEventListener('click',OpenDysheA2);
document.querySelector('.ButoniNdaresA3').addEventListener('click',OpenDysheA3);
document.querySelector('.ButoniNdaresA4').addEventListener('click',OpenDysheA4);
document.querySelector('.ButoniNdaresA5').addEventListener('click',OpenDysheA5);
document.querySelector('.ButoniNdaresA6').addEventListener('click',OpenDysheA6);
document.querySelector('.ButoniNdaresA7').addEventListener('click',OpenDysheA7);
document.querySelector('.ButoniNdaresA8').addEventListener('click',OpenDysheA8);
document.querySelector('.ButoniNdaresA9').addEventListener('click',OpenDysheA9);
document.querySelector('.ButoniNdaresA10').addEventListener('click',OpenDysheA10);
document.querySelector('.ButoniNdaresA11').addEventListener('click',OpenDysheA11);
document.querySelector('.ButoniNdaresA12').addEventListener('click',OpenDysheA12);
document.querySelector('.ButoniNdaresA13').addEventListener('click',OpenDysheA13);
document.querySelector('.ButoniNdaresA14').addEventListener('click',OpenDysheA14);
document.querySelector('.ButoniNdaresA15').addEventListener('click',OpenDysheA15);







function OpenDyshe41(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto41.jpg"
   document.sliderNN4.src='Foto-Dritare/Foto41.jpg';
   document.querySelector('.copaNKV-4').innerText='0';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='0';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="none";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='none';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="none";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="block";
  document.querySelector('#XhamiPaKrahN4-22').style.display="block";
  document.querySelector('#XhamiPaKrahN4-33').style.display="block";
  document.querySelector('#XhamiPaKrahN4-44').style.display="block";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="none";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="block";
  document.querySelector('.copaXhPaKNN2-4').style.display="block";
  document.querySelector('.copaXhPaKNN3-4').style.display="block";
  document.querySelector('.copaXhPaKNN4-4').style.display="block";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPKNN4-11').innerHTML="1";
   document.querySelector('.XhPKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";

   // Shfaqja e vlerave
   document.querySelector('.RezultatetKrahutN41').style.display="none";
   document.querySelector('.RezultatetKrahutN42').style.display="none";
   document.querySelector('.RezultatetKrahutN43').style.display="none";
   document.querySelector('.RezultatetKrahutN44').style.display="none";


   document.querySelector('.RezultatetVertikaleKrahu4N').style.display='none';


}
function OpenDyshe42(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto42.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto42.jpg';
   document.querySelector('.copaNKV-4').innerText='2';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='0';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='none';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="none";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="none";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="inline";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhPKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="none";

}
function OpenDyshe43(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto43.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto43.jpg';
   document.querySelector('.copaNKV-4').innerText='2';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="inline";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-11').innerHTML="1";
   document.querySelector('.XhPKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="none";
  
}
function OpenDyshe44(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto44.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto44.jpg';
   document.querySelector('.copaNKV-4').innerText='2';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='0';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='none';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="none";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="none";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="inline";
  document.querySelector('.copaXhPaKNN2-4').style.display="inline";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";
   document.querySelector('.XhPKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="none";

}
function OpenDyshe45(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto45.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto45.jpg';
   document.querySelector('.copaNKV-4').innerText='2';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='0';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='none';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="none";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="none";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="inline";
  document.querySelector('.copaXhPaKNN2-4').style.display="inline";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhPKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";

}
function OpenDyshe46(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto46.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto46.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="none";

  
}function OpenDyshe47(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto47.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto47.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="inline";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-11').innerHTML="1";
   document.querySelector('.XhPKNN4-44').innerHTML="4";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="none";

  
}

function OpenDyshe49(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto49.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto49.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='0';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='none';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="none";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="none";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="inline";
  document.querySelector('.copaXhPaKNN2-4').style.display="inline";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-11').innerHTML="1";


      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";

  
}function OpenDyshe410(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto410.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto410.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='0';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='none';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="none";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="none";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="inline";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";
   document.querySelector('.XhPKNN4-22').innerHTML="2";
   // Shfaqja e vlerave
   document.querySelector('.RezultatetKrahutN41').style.display="inline";
   document.querySelector('.RezultatetKrahutN42').style.display="none";
   document.querySelector('.RezultatetKrahutN43').style.display="inline";
   document.querySelector('.RezultatetKrahutN44').style.display="none";
  
}
function OpenDyshe411(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto411.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto411.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="inline";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhPKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";

  
}
function OpenDyshe412(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto412.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto412.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='0';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='none';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="none";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="none";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="inline";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhPKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-22').innerHTML="2";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";

  
}
function OpenDyshe413(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto42.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto42.jpg';
   document.querySelector('.copaNKV-4').innerText='2';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='0';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='none';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="none";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="none";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="inline";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhPKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";
  
      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="none";


}
function OpenDyshe414(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto414.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto414.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="none";
}
function OpenDyshe415(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto415.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto415.jpg';
   document.querySelector('.copaNKV-4').innerText='6';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="none";
}
function OpenDyshe416(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto416.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto416.jpg';
   document.querySelector('.copaNKV-4').innerText='8';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe417(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto417.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto417.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='0';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='none';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="none";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="none";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="inline";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";
   document.querySelector('.XhPKNN4-22').innerHTML="2";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="none";

}
function OpenDyshe418(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto418.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto418.jpg';
   document.querySelector('.copaNKV-4').innerText='6';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='0';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='none';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="none";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="none";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="inline";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhPKNN4-22').innerHTML="2";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";


}



function OpenDyshe419(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto419.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto419.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='0';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='none';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="none";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="none";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="inline";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhPKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-22').innerHTML="2";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe420(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto420.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto420.jpg';
   document.querySelector('.copaNKV-4').innerText='6';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="inlne";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhPKNN4-33').innerHTML="3";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
// ktu
function OpenDyshe421(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto421.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto421.jpg';
   document.querySelector('.copaNKV-4').innerText='2';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="inline";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-11').innerHTML="1";
   document.querySelector('.XhPKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="none";
}
function OpenDyshe422(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto422.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto422.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";


      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="none";
}
function OpenDyshe423(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto423.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto423.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="inline";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-44').innerHTML="4";
   document.querySelector('.XhPKNN4-11').innerHTML="1";



      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="none";
}
function OpenDyshe424(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto424.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto424.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="inline";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-11').innerHTML="1";
   document.querySelector('.XhPKNN4-33').innerHTML="3";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe425(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto425.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto425.jpg';
   document.querySelector('.copaNKV-4').innerText='6';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";

   // Shfaqja e vlerave
   document.querySelector('.RezultatetKrahutN41').style.display="inline";
   document.querySelector('.RezultatetKrahutN42').style.display="inline";
   document.querySelector('.RezultatetKrahutN43').style.display="inline";
   document.querySelector('.RezultatetKrahutN44').style.display="none";


}
function OpenDyshe426(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto426.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto426.jpg';
   document.querySelector('.copaNKV-4').innerText='6';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhPKNN4-33').innerHTML="3";

   // Shfaqja e vlerave
   document.querySelector('.RezultatetKrahutN41').style.display="inline";
   document.querySelector('.RezultatetKrahutN42').style.display="inline";
   document.querySelector('.RezultatetKrahutN43').style.display="none";
   document.querySelector('.RezultatetKrahutN44').style.display="inline";


}
// qitu kemi mbet
function OpenDyshe427(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto427.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto427.jpg';
   document.querySelector('.copaNKV-4').innerText='6';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="inline";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-11').innerHTML="1";

   // Shfaqja e vlerave
   document.querySelector('.RezultatetKrahutN41').style.display="none";
   document.querySelector('.RezultatetKrahutN42').style.display="inline";
   document.querySelector('.RezultatetKrahutN43').style.display="inline";
   document.querySelector('.RezultatetKrahutN44').style.display="inline";


}


function OpenDyshe428(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto428.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto428.jpg';
   document.querySelector('.copaNKV-4').innerText='2';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='0';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='none';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="none";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="none";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="inline";
  document.querySelector('.copaXhPaKNN2-4').style.display="inline";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";
   document.querySelector('.XhPKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-11').innerHTML="1";

   // Shfaqja e vlerave
   document.querySelector('.RezultatetKrahutN41').style.display="none";
   document.querySelector('.RezultatetKrahutN42').style.display="none";
   document.querySelector('.RezultatetKrahutN43').style.display="inline";
   document.querySelector('.RezultatetKrahutN44').style.display="none";



}
function OpenDyshe429(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto429.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto429.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='0';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='none';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="none";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="none";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="inline";
  document.querySelector('.copaXhPaKNN2-4').style.display="inline";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-11').innerHTML="1";

   // Shfaqja e vlerave
   document.querySelector('.RezultatetKrahutN41').style.display="none";
   document.querySelector('.RezultatetKrahutN42').style.display="none";
   document.querySelector('.RezultatetKrahutN43').style.display="inline";
   document.querySelector('.RezultatetKrahutN44').style.display="inline";


}
function OpenDyshe430(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto430.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto430.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="inline";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";
   document.querySelector('.XhPKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="none";




}
function OpenDyshe431(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto431.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto431.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='0';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='none';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="none";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="none";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="inline";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHinlineDritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";
   document.querySelector('.XhPKNN4-22').innerHTML="2";

   // Shfaqja e vlerave
   document.querySelector('.RezultatetKrahutN41').style.display="inline";
   document.querySelector('.RezultatetKrahutN42').style.display="none";
   document.querySelector('.RezultatetKrahutN43').style.display="inline";
   document.querySelector('.RezultatetKrahutN44').style.display="none";


}
function OpenDyshe432(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto432.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto432.jpg';
   document.querySelector('.copaNKV-4').innerText='6';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="none";

}

function OpenDyshe433(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto433.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto433.jpg';
   document.querySelector('.copaNKV-4').innerText='6';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='0';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='none';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="none";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="none";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="inline";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhPKNN4-22').innerHTML="2";


      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe434(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto434.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto434.jpg';
   document.querySelector('.copaNKV-4').innerText='6';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="inline";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-11').innerHTML="1";


      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe435(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto435.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto435.jpg';
   document.querySelector('.copaNKV-4').innerText='2';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='0';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='none';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="none";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="none";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="inline";
  document.querySelector('.copaXhPaKNN2-4').style.display="inline";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhPKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe436(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto436.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto436.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='0';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='none';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="none";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="none";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="inline";
  document.querySelector('.copaXhPaKNN2-4').style.display="inline";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe437(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto437.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto437.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="inline";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe438(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto438.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto438.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='0';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='none';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="none";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="none";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="inline";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhPKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-33').innerHTML="3";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe439(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto439.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto439.jpg';
   document.querySelector('.copaNKV-4').innerText='6';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="inline";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-11').innerHTML="1";

   // Shfaqja e vlerave
   document.querySelector('.RezultatetKrahutN41').style.display="none";
   document.querySelector('.RezultatetKrahutN42').style.display="inline";
   document.querySelector('.RezultatetKrahutN43').style.display="inline";
   document.querySelector('.RezultatetKrahutN44').style.display="inline";


}
function OpenDyshe440(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto440.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto440.jpg';
   document.querySelector('.copaNKV-4').innerText='6';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='0';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='none';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="none";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="none";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="inline";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhPKNN4-22').innerHTML="2";


      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe441(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto441.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto441.jpg';
   document.querySelector('.copaNKV-4').innerText='6';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-33').innerHTML="3";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahutN41').style.display="inline";
    document.querySelector('.RezultatetKrahutN42').style.display="inline";
    document.querySelector('.RezultatetKrahutN43').style.display="none";
    document.querySelector('.RezultatetKrahutN44').style.display="inline";
   

}
function OpenDyshe442(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto442.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto442.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahutN41').style.display="inline";
    document.querySelector('.RezultatetKrahutN42').style.display="inline";
    document.querySelector('.RezultatetKrahutN43').style.display="none";
    document.querySelector('.RezultatetKrahutN44').style.display="none";
}
function OpenDyshe443(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto443.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto443.jpg';
   document.querySelector('.copaNKV-4').innerText='6';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="ritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";



     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahutN41').style.display="inline";
     document.querySelector('.RezultatetKrahutN42').style.display="inline";
     document.querySelector('.RezultatetKrahutN43').style.display="inline";
     document.querySelector('.RezultatetKrahutN44').style.display="none";
}
function OpenDyshe444(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto444.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto444.jpg';
   document.querySelector('.copaNKV-4').innerText='6';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhPKNN4-33').innerHTML="3";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahutN41').style.display="inline";
     document.querySelector('.RezultatetKrahutN42').style.display="inline";
     document.querySelector('.RezultatetKrahutN43').style.display="none";
     document.querySelector('.RezultatetKrahutN44').style.display="inline";
}

function OpenDyshe445(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto445.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto445.jpg';
   document.querySelector('.copaNKV-4').innerText='8';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhKNN4-11').innerHTML="1";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahutN41').style.display="inline";
     document.querySelector('.RezultatetKrahutN42').style.display="inline";
     document.querySelector('.RezultatetKrahutN43').style.display="inline";
     document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe446(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto446.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto446.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="inline";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-44').innerHTML="4";
   document.querySelector('.XhPKNN4-11').innerHTML="1";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahutN41').style.display="none";
     document.querySelector('.RezultatetKrahutN42').style.display="inline";
     document.querySelector('.RezultatetKrahutN43').style.display="inline";
     document.querySelector('.RezultatetKrahutN44').style.display="none";
}
function OpenDyshe447(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto447.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto447.jpg';
   document.querySelector('.copaNKV-4').innerText='6';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahutN41').style.display="inline";
     document.querySelector('.RezultatetKrahutN42').style.display="inline";
     document.querySelector('.RezultatetKrahutN43').style.display="inline";
     document.querySelector('.RezultatetKrahutN44').style.display="none";
}
function OpenDyshe448(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto448.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto448.jpg';
   document.querySelector('.copaNKV-4').innerText='6';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="inline";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-11').innerHTML="1";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahutN41').style.display="none";
     document.querySelector('.RezultatetKrahutN42').style.display="inline";
     document.querySelector('.RezultatetKrahutN43').style.display="inline";
     document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe449(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto449.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto449.jpg';
   document.querySelector('.copaNKV-4').innerText='6';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhKNN4-11').innerHTML="1";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahutN41').style.display="inline";
     document.querySelector('.RezultatetKrahutN42').style.display="inline";
     document.querySelector('.RezultatetKrahutN43').style.display="inline";
     document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe450(){
  document.querySelector('.DritareNdarse-4').style.display='block';
  document.FotoNdarese4.src="Foto-Dritare/Foto450.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto450.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='0';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='none';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="none";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="none";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="inline";
  document.querySelector('.copaXhPaKNN2-4').style.display="inline";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-11').innerHTML="1";


     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahutN41').style.display="none";
     document.querySelector('.RezultatetKrahutN42').style.display="none";
     document.querySelector('.RezultatetKrahutN43').style.display="inline";
     document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe451(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto451.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto451.jpg';
    document.querySelector('.copaNKV-4').innerText='6';
    document.querySelector('.copaNKH1-4').innerText='0';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='none';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="none";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="none";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="inline";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhPKNN4-11').innerHTML="1";


      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe452(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto452.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto452.jpg';
    document.querySelector('.copaNKV-4').innerText='6';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='0';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='none';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="none";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="none";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="inline";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhKNN4-11').innerHTML="1";
    document.querySelector('.XhPKNN4-22').innerHTML="2";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe453(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto453.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto453.jpg';
    document.querySelector('.copaNKV-4').innerText='8';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe454(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto454.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto454.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='0';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='none';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="none";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="none";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="inline";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhPKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-22').innerHTML="2";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahutN41').style.display="inline";
     document.querySelector('.RezultatetKrahutN42').style.display="none";
     document.querySelector('.RezultatetKrahutN43').style.display="none";
     document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe455(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto455.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto455.jpg';
    document.querySelector('.copaNKV-4').innerText='6';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='0';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='none';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="none";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="none";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="inline";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-11').innerHTML="1";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhPKNN4-33').innerHTML="3";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe456(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto456.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto456.jpg';
   document.querySelector('.copaNKV-4').innerText='6';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='0';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='none';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="none";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="none";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="inline";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhPKNN4-22').innerHTML="2";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahutN41').style.display="inline";
     document.querySelector('.RezultatetKrahutN42').style.display="none";
     document.querySelector('.RezultatetKrahutN43').style.display="inline";
     document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe457(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto457.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto457.jpg';
   document.querySelector('.copaNKV-4').innerText='8';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhKNN4-11').innerHTML="1";


     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahutN41').style.display="inline";
     document.querySelector('.RezultatetKrahutN42').style.display="inline";
     document.querySelector('.RezultatetKrahutN43').style.display="inline";
     document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe458(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto458.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto458.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="inline";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhPKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-11').innerHTML="1";



     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahutN41').style.display="none";
     document.querySelector('.RezultatetKrahutN42').style.display="inline";
     document.querySelector('.RezultatetKrahutN43').style.display="none";
     document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe459(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto459.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto459.jpg';
   document.querySelector('.copaNKV-4').innerText='6';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhPKNN4-33').innerHTML="3";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahutN41').style.display="inline";
     document.querySelector('.RezultatetKrahutN42').style.display="inline";
     document.querySelector('.RezultatetKrahutN43').style.display="none";
     document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe460(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto460.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto460.jpg';
    document.querySelector('.copaNKV-4').innerText='8';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}




function OpenDyshe461(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto461.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto461.jpg';
    document.querySelector('.copaNKV-4').innerText='4';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='0';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='0';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='none';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='none';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="none";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="none";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="inline";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="none";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="none";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="inline";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="inline";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-11').innerHTML="1";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhPKNN4-44').innerHTML="4";
    document.querySelector('.XhPKNN4-22').innerHTML="2";
      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="none";
}
function OpenDyshe462(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto462.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto462.jpg';
    document.querySelector('.copaNKV-4').innerText='6';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='0';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='none';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="none";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="inline";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="none";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="inline";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-11').innerHTML="1";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhPKNN4-44').innerHTML="4";


      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="none";
}
function OpenDyshe463(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto463.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Foto463.jpg';
   document.querySelector('.copaNKV-4').innerText='8';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-44').innerHTML="4";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhKNN4-11').innerHTML="1";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahutN41').style.display="inline";
     document.querySelector('.RezultatetKrahutN42').style.display="inline";
     document.querySelector('.RezultatetKrahutN43').style.display="inline";
     document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe464(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto464.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto464.jpg';
    document.querySelector('.copaNKV-4').innerText='4';
    document.querySelector('.copaNKH1-4').innerText='0';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='0';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='none';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='none';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="none";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="none";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="none";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="none";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="inline";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="inline";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhPKNN4-33').innerHTML="3";
    document.querySelector('.XhPKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe465(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto465.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto465.jpg';
    document.querySelector('.copaNKV-4').innerText='6';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='0';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='none';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="none";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="none";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="inline";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhKNN4-11').innerHTML="1";
    document.querySelector('.XhPKNN4-33').innerHTML="3";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe466(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto466.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto466.jpg';
    document.querySelector('.copaNKV-4').innerText='8';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe467(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto467.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto467.jpg';
    document.querySelector('.copaNKV-4').innerText='4';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='0';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='0';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='none';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='none';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="none";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="none";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="inline";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="none";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="none";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="inline";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="inline";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-11').innerHTML="1";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhPKNN4-22').innerHTML="2";
    document.querySelector('.XhPKNN4-44').innerHTML="4";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="none";
}
function OpenDyshe468(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto468.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto468.jpg';
    document.querySelector('.copaNKV-4').innerText='6';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='0';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='none';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="none";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="inline";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="none";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="inline";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-11').innerHTML="1";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhPKNN4-44').innerHTML="4";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="none";
}
function OpenDyshe469(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto469.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto469.jpg';
    document.querySelector('.copaNKV-4').innerText='8';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhKNN4-11').innerHTML="1";


      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe470(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto470.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto470.jpg';
    document.querySelector('.copaNKV-4').innerText='4';
    document.querySelector('.copaNKH1-4').innerText='0';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='0';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='none';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='none';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="none";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="none";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="none";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="none";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="inline";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="inline";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhPKNN4-33').innerHTML="3";
    document.querySelector('.XhPKNN4-11').innerHTML="1";


      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}




function OpenDyshe471(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto471.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto471.jpg';
    document.querySelector('.copaNKV-4').innerText='6';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='0';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='none';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="none";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="none";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="inline";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-11').innerHTML="1";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhPKNN4-33').innerHTML="3";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe472(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto472.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto472.jpg';
    document.querySelector('.copaNKV-4').innerText='6';
    document.querySelector('.copaNKH1-4').innerText='0';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='none';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="none";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="none";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="inline";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="ritare Dyshese";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhPKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe473(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto473.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto473.jpg';
    document.querySelector('.copaNKV-4').innerText='8';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe474(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto474.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto474.jpg';
    document.querySelector('.copaNKV-4').innerText='6';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='0';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='none';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="none";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="inline";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="none";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="inline";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-11').innerHTML="1";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhPKNN4-44').innerHTML="4";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="none";
}
function OpenDyshe475(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto475.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto475.jpg';
    document.querySelector('.copaNKV-4').innerText='8';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='inlne';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe476(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto476.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto476.jpg';
    document.querySelector('.copaNKV-4').innerText='6';
    document.querySelector('.copaNKH1-4').innerText='0';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='none';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="none";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="none";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="inline";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhPKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe477(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto477.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto477.jpg';
    document.querySelector('.copaNKV-4').innerText='8';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='inlne';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe478(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto478.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto478.jpg';
    document.querySelector('.copaNKV-4').innerText='8';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='inlne';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe479(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto479.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto479.jpg';
    document.querySelector('.copaNKV-4').innerText='4';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='0';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='0';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='none';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='none';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="none";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="none";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="inline";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="none";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="none";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="inline";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="inline";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-11').innerHTML="1";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhPKNN4-22').innerHTML="2";
    document.querySelector('.XhPKNN4-44').innerHTML="4";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="none";
}


function OpenDyshe480(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto480.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto480.jpg';
    document.querySelector('.copaNKV-4').innerText='6';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='0';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='none';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="none";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="none";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="inline";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-11').innerHTML="1";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhPKNN4-33').innerHTML="3";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}




function OpenDyshe481(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto481.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto481.jpg';
    document.querySelector('.copaNKV-4').innerText='2';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='0';
    document.querySelector('.copaNKH3-4').innerText='0';
    document.querySelector('.copaNKH4-4').innerText='0';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='none';
    document.querySelector('.KrahuN43-H').style.display='none';
    document.querySelector('.KrahuN44-H').style.display='none';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="none";
   document.querySelector('#XhamiKrahN4-3').style.display="none";
   document.querySelector('#XhamiKrahN4-4').style.display="none";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-44').style.display="inline";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="none";
   document.querySelector('.copaXhKNN3-4').style.display="none";
   document.querySelector('.copaXhKNN4-4').style.display="none";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="inline";
   document.querySelector('.copaXhPaKNN3-4').style.display="inline";
   document.querySelector('.copaXhPaKNN4-4').style.display="inline";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-11').innerHTML="1";
    document.querySelector('.XhPKNN4-22').innerHTML="2";
    document.querySelector('.XhPKNN4-33').innerHTML="3";
    document.querySelector('.XhPKNN4-44').innerHTML="4";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="none";
}
function OpenDyshe482(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto482.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto482.jpg';
    document.querySelector('.copaNKV-4').innerText='4';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='0';
    document.querySelector('.copaNKH4-4').innerText='0';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='none';
    document.querySelector('.KrahuN44-H').style.display='none';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="none";
   document.querySelector('#XhamiKrahN4-4').style.display="none";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-44').style.display="inline";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="none";
   document.querySelector('.copaXhKNN4-4').style.display="none";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="inline";
   document.querySelector('.copaXhPaKNN4-4').style.display="inline";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-11').innerHTML="1";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhPKNN4-33').innerHTML="3";
    document.querySelector('.XhPKNN4-44').innerHTML="4";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="none";
}
function OpenDyshe483(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto483.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto483.jpg';
    document.querySelector('.copaNKV-4').innerText='6';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='0';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='none';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="none";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="inline";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="none";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="inline";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-11').innerHTML="1";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhPKNN4-44').innerHTML="4";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="none";
}
function OpenDyshe484(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto484.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto484.jpg';
    document.querySelector('.copaNKV-4').innerText='8';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";

 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe485(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto485.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto485.jpg';
    document.querySelector('.copaNKV-4').innerText='2';
    document.querySelector('.copaNKH1-4').innerText='0';
    document.querySelector('.copaNKH2-4').innerText='0';
    document.querySelector('.copaNKH3-4').innerText='0';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='none';
    document.querySelector('.KrahuN42-H').style.display='none';
    document.querySelector('.KrahuN43-H').style.display='none';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="none";
   document.querySelector('#XhamiKrahN4-2').style.display="none";
   document.querySelector('#XhamiKrahN4-3').style.display="none";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="none";
   document.querySelector('.copaXhKNN2-4').style.display="none";
   document.querySelector('.copaXhKNN3-4').style.display="none";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="inline";
   document.querySelector('.copaXhPaKNN2-4').style.display="inline";
   document.querySelector('.copaXhPaKNN3-4').style.display="inline";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhPKNN4-33').innerHTML="3";
    document.querySelector('.XhPKNN4-22').innerHTML="2";
    document.querySelector('.XhPKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe486(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto486.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto486.jpg';
    document.querySelector('.copaNKV-4').innerText='4';
    document.querySelector('.copaNKH1-4').innerText='0';
    document.querySelector('.copaNKH2-4').innerText='0';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='none';
    document.querySelector('.KrahuN42-H').style.display='none';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="none";
   document.querySelector('#XhamiKrahN4-2').style.display="none";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="none";
   document.querySelector('.copaXhKNN2-4').style.display="none";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="inline";
   document.querySelector('.copaXhPaKNN2-4').style.display="inline";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhPKNN4-22').innerHTML="2";
    document.querySelector('.XhPKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe487(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto487.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto487.jpg';
    document.querySelector('.copaNKV-4').innerText='6';
    document.querySelector('.copaNKH1-4').innerText='0';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='none';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="none";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="none";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="inline";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhPKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe488(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto488.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto488.jpg';
    document.querySelector('.copaNKV-4').innerText='4';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='0';
    document.querySelector('.copaNKH3-4').innerText='0';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='none';
    document.querySelector('.KrahuN43-H').style.display='none';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="none";
   document.querySelector('#XhamiKrahN4-3').style.display="none";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="none";
   document.querySelector('.copaXhKNN3-4').style.display="none";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="inline";
   document.querySelector('.copaXhPaKNN3-4').style.display="inline";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhPKNN4-44').innerHTML="4";
    document.querySelector('.XhPKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe489(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto489.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto489.jpg';
    document.querySelector('.copaNKV-4').innerText='6';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='0';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='none';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="none";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="none";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="inline";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-11').innerHTML="1";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhPKNN4-22').innerHTML="2";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe490(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto490.jpg";
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src="Foto-Dritare/Foto490.jpg";
    document.querySelector('.copaNKV-4').innerText='2';
    document.querySelector('.copaNKH1-4').innerText='0';
    document.querySelector('.copaNKH2-4').innerText='0';
    document.querySelector('.copaNKH3-4').innerText='0';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='none';
    document.querySelector('.KrahuN42-H').style.display='none';
    document.querySelector('.KrahuN43-H').style.display='none';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="none";
   document.querySelector('#XhamiKrahN4-2').style.display="none";
   document.querySelector('#XhamiKrahN4-3').style.display="none";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="none";
   document.querySelector('.copaXhKNN2-4').style.display="none";
   document.querySelector('.copaXhKNN3-4').style.display="none";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="inline";
   document.querySelector('.copaXhPaKNN2-4').style.display="inline";
   document.querySelector('.copaXhPaKNN3-4').style.display="inline";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhPKNN4-33').innerHTML="3";
    document.querySelector('.XhPKNN4-22').innerHTML="2";
    document.querySelector('.XhPKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe491(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto491.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto491.jpg';
    document.querySelector('.copaNKV-4').innerText='4';
    document.querySelector('.copaNKH1-4').innerText='0';
    document.querySelector('.copaNKH2-4').innerText='0';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='none';
    document.querySelector('.KrahuN42-H').style.display='none';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="none";
   document.querySelector('#XhamiKrahN4-2').style.display="none";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="none";
   document.querySelector('.copaXhKNN2-4').style.display="none";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="inline";
   document.querySelector('.copaXhPaKNN2-4').style.display="inline";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhPKNN4-22').innerHTML="2";
    document.querySelector('.XhPKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe492(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto492.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto492.jpg';
    document.querySelector('.copaNKV-4').innerText='6';
    document.querySelector('.copaNKH1-4').innerText='0';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='none';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="none";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="none";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="inline";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhPKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe493(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto493.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto493.jpg';
    document.querySelector('.copaNKV-4').innerText='8';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDyshe494(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Foto494.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Foto494.jpg';
    document.querySelector('.copaNKV-4').innerText='4';
    document.querySelector('.copaNKH1-4').innerText='2';
    document.querySelector('.copaNKH2-4').innerText='0';
    document.querySelector('.copaNKH3-4').innerText='0';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='inline';
    document.querySelector('.KrahuN42-H').style.display='none';
    document.querySelector('.KrahuN43-H').style.display='none';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="inline";
   document.querySelector('#XhamiKrahN4-2').style.display="none";
   document.querySelector('#XhamiKrahN4-3').style.display="none";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="none";
   document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="inline";
   document.querySelector('.copaXhKNN2-4').style.display="none";
   document.querySelector('.copaXhKNN3-4').style.display="none";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="none";
   document.querySelector('.copaXhPaKNN2-4').style.display="inline";
   document.querySelector('.copaXhPaKNN3-4').style.display="inline";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-11').innerHTML="1";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhPKNN4-22').innerHTML="2";
    document.querySelector('.XhPKNN4-33').innerHTML="3";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="inline";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="none";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDysheA1(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Adapteri-41.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Adapteri-41.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";
     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahutN41').style.display="inline";
     document.querySelector('.RezultatetKrahutN42').style.display="inline";
     document.querySelector('.RezultatetKrahutN43').style.display="none";
     document.querySelector('.RezultatetKrahutN44').style.display="none";
}
function OpenDysheA2(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Adapteri-42.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Adapteri-42.jpg';
    document.querySelector('.copaNKV-4').innerText='4';
    document.querySelector('.copaNKH1-4').innerText='0';
    document.querySelector('.copaNKH2-4').innerText='0';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='none';
    document.querySelector('.KrahuN42-H').style.display='none';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="none";
   document.querySelector('#XhamiKrahN4-2').style.display="none";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="none";
   document.querySelector('.copaXhKNN2-4').style.display="none";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="inline";
   document.querySelector('.copaXhPaKNN2-4').style.display="inline";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhPKNN4-22').innerHTML="2";
    document.querySelector('.XhPKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}

function OpenDysheA3(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Adapteri-43.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Adapteri-43.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="inline";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";
   document.querySelector('.XhPKNN4-11').innerHTML="1";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahutN41').style.display="none";
     document.querySelector('.RezultatetKrahutN42').style.display="inline";
     document.querySelector('.RezultatetKrahutN43').style.display="inline";
     document.querySelector('.RezultatetKrahutN44').style.display="none";
}

function OpenDysheA4(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Adapteri-44.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Adapteri-44.jpg';
    document.querySelector('.copaNKV-4').innerText='4';
    document.querySelector('.copaNKH1-4').innerText='0';
    document.querySelector('.copaNKH2-4').innerText='2';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='0';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='none';
    document.querySelector('.KrahuN42-H').style.display='inline';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='none';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="none";
   document.querySelector('#XhamiKrahN4-2').style.display="inline";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="none";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-22').style.display="none";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="inline";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="none";
   document.querySelector('.copaXhKNN2-4').style.display="inline";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="none";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="inline";
   document.querySelector('.copaXhPaKNN2-4').style.display="none";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="inline";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-22').innerHTML="2";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhPKNN4-44').innerHTML="4";
    document.querySelector('.XhPKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="inline";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="none";
}
function OpenDysheA5(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Adapteri-45.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Adapteri-45.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="inline";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";
   document.querySelector('.XhPKNN4-11').innerHTML="1";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahutN41').style.display="none";
     document.querySelector('.RezultatetKrahutN42').style.display="inline";
     document.querySelector('.RezultatetKrahutN43').style.display="inline";
     document.querySelector('.RezultatetKrahutN44').style.display="none";
}
function OpenDysheA6(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Adapteri-46.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Adapteri-46.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='0';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='none';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="none";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="none";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="inline";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";
   document.querySelector('.XhPKNN4-11').innerHTML="1";
 
     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahutN41').style.display="none";
     document.querySelector('.RezultatetKrahutN42').style.display="inline";
     document.querySelector('.RezultatetKrahutN43').style.display="inline";
     document.querySelector('.RezultatetKrahutN44').style.display="none";


}

function OpenDysheA7(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Adapteri-47.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Adapteri-47.jpg';
    document.querySelector('.copaNKV-4').innerText='4';
    document.querySelector('.copaNKH1-4').innerText='0';
    document.querySelector('.copaNKH2-4').innerText='0';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='none';
    document.querySelector('.KrahuN42-H').style.display='none';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="none";
   document.querySelector('#XhamiKrahN4-2').style.display="none";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="none";
   document.querySelector('.copaXhKNN2-4').style.display="none";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="inline";
   document.querySelector('.copaXhPaKNN2-4').style.display="inline";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhPKNN4-22').innerHTML="2";
    document.querySelector('.XhPKNN4-11').innerHTML="1";


      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDysheA8(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Adapteri-48.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Adapteri-48.jpg';
    document.querySelector('.copaNKV-4').innerText='4';
    document.querySelector('.copaNKH1-4').innerText='0';
    document.querySelector('.copaNKH2-4').innerText='0';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='none';
    document.querySelector('.KrahuN42-H').style.display='none';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="none";
   document.querySelector('#XhamiKrahN4-2').style.display="none";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="none";
   document.querySelector('.copaXhKNN2-4').style.display="none";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="inline";
   document.querySelector('.copaXhPaKNN2-4').style.display="inline";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhPKNN4-22').innerHTML="2";
    document.querySelector('.XhPKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}

function OpenDysheA9(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Adapteri-49.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.sliderNN4.src='Foto-Dritare/Adapteri-49.jpg';
    document.querySelector('.copaNKV-4').innerText='4';
    document.querySelector('.copaNKH1-4').innerText='0';
    document.querySelector('.copaNKH2-4').innerText='0';
    document.querySelector('.copaNKH3-4').innerText='2';
    document.querySelector('.copaNKH4-4').innerText='2';
 
 
 
    document.querySelector('.KrahuN4-V').style.display="inline";
    document.querySelector('.KrahuN41-H').style.display='none';
    document.querySelector('.KrahuN42-H').style.display='none';
    document.querySelector('.KrahuN43-H').style.display='inline';
    document.querySelector('.KrahuN44-H').style.display='inline';
 
   
    document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-1').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-2').style.display="none";
   document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";
 
 
   document.querySelector('#XhamiKrahN4-1').style.display="none";
   document.querySelector('#XhamiKrahN4-2').style.display="none";
   document.querySelector('#XhamiKrahN4-3').style.display="inline";
   document.querySelector('#XhamiKrahN4-4').style.display="inline";
 
 
   document.querySelector('#XhamiPaKrahN4-11').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-22').style.display="inline";
   document.querySelector('#XhamiPaKrahN4-33').style.display="none";
   document.querySelector('#XhamiPaKrahN4-44').style.display="none";
 
 
 
   
   document.querySelector('.copaXhKNN1-4').style.display="none";
   document.querySelector('.copaXhKNN2-4').style.display="none";
   document.querySelector('.copaXhKNN3-4').style.display="inline";
   document.querySelector('.copaXhKNN4-4').style.display="inline";
 
 
   document.querySelector('.copaXhPaKNN1-4').style.display="inline";
   document.querySelector('.copaXhPaKNN2-4').style.display="inline";
   document.querySelector('.copaXhPaKNN3-4').style.display="none";
   document.querySelector('.copaXhPaKNN4-4').style.display="none";
 
 
   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhKNN4-44').innerHTML="4";
    document.querySelector('.XhKNN4-33').innerHTML="3";
    document.querySelector('.XhPKNN4-22').innerHTML="2";
    document.querySelector('.XhPKNN4-11').innerHTML="1";

      // Shfaqja e vlerave
      document.querySelector('.RezultatetKrahutN41').style.display="none";
      document.querySelector('.RezultatetKrahutN42').style.display="none";
      document.querySelector('.RezultatetKrahutN43').style.display="inline";
      document.querySelector('.RezultatetKrahutN44').style.display="inline";
}

// A
function OpenDysheA10(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Adapteri-410.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Adapteri-410.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahutN41').style.display="inline";
     document.querySelector('.RezultatetKrahutN42').style.display="inline";
     document.querySelector('.RezultatetKrahutN43').style.display="none";
     document.querySelector('.RezultatetKrahutN44').style.display="none";
}
function OpenDysheA11(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Adapteri-411.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Adapteri-411.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahutN41').style.display="inline";
     document.querySelector('.RezultatetKrahutN42').style.display="inline";
     document.querySelector('.RezultatetKrahutN43').style.display="none";
     document.querySelector('.RezultatetKrahutN44').style.display="none";
}
function OpenDysheA12(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Adapteri-412.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Adapteri-412.jpg';
   document.querySelector('.copaNKV-4').innerText='4';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='0';
   document.querySelector('.copaNKH4-4').innerText='0';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='none';
   document.querySelector('.KrahuN44-H').style.display='none';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="none";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="none";
  document.querySelector('#XhamiKrahN4-4').style.display="none";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="inline";
  document.querySelector('#XhamiPaKrahN4-44').style.display="inline";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="none";
  document.querySelector('.copaXhKNN4-4').style.display="none";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="inline";
  document.querySelector('.copaXhPaKNN4-4').style.display="inline";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhPKNN4-33').innerHTML="3";
   document.querySelector('.XhPKNN4-44').innerHTML="4";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahutN41').style.display="inline";
     document.querySelector('.RezultatetKrahutN42').style.display="inline";
     document.querySelector('.RezultatetKrahutN43').style.display="none";
     document.querySelector('.RezultatetKrahutN44').style.display="none";
}


function OpenDysheA13(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Adapteri-413.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Adapteri-413.jpg';
   document.querySelector('.copaNKV-4').innerText='8';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhKNN4-44').innerHTML="4";

     // Shfaqja e vlerave
     document.querySelector('.RezultatetKrahutN41').style.display="inline";
     document.querySelector('.RezultatetKrahutN42').style.display="inline";
     document.querySelector('.RezultatetKrahutN43').style.display="inline";
     document.querySelector('.RezultatetKrahutN44').style.display="inline";
}

function OpenDysheA14(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Adapteri-414.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Adapteri-414.jpg';
   document.querySelector('.copaNKV-4').innerText='8';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhKNN4-44').innerHTML="4";

    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahutN41').style.display="inline";
    document.querySelector('.RezultatetKrahutN42').style.display="inline";
    document.querySelector('.RezultatetKrahutN43').style.display="inline";
    document.querySelector('.RezultatetKrahutN44').style.display="inline";
}
function OpenDysheA15(){
   document.querySelector('.DritareNdarse-4').style.display='block';
   document.FotoNdarese4.src="Foto-Dritare/Adapteri-415.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderNN4.src='Foto-Dritare/Adapteri-415.jpg';
   document.querySelector('.copaNKV-4').innerText='8';
   document.querySelector('.copaNKH1-4').innerText='2';
   document.querySelector('.copaNKH2-4').innerText='2';
   document.querySelector('.copaNKH3-4').innerText='2';
   document.querySelector('.copaNKH4-4').innerText='2';



   document.querySelector('.KrahuN4-V').style.display="inline";
   document.querySelector('.KrahuN41-H').style.display='inline';
   document.querySelector('.KrahuN42-H').style.display='inline';
   document.querySelector('.KrahuN43-H').style.display='inline';
   document.querySelector('.KrahuN44-H').style.display='inline';

  
   document.querySelector('.ArmaturaKrahuNNV-4').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-1').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-2').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNNH-4').style.display="inline";


  document.querySelector('#XhamiKrahN4-1').style.display="inline";
  document.querySelector('#XhamiKrahN4-2').style.display="inline";
  document.querySelector('#XhamiKrahN4-3').style.display="inline";
  document.querySelector('#XhamiKrahN4-4').style.display="inline";


  document.querySelector('#XhamiPaKrahN4-11').style.display="none";
  document.querySelector('#XhamiPaKrahN4-22').style.display="none";
  document.querySelector('#XhamiPaKrahN4-33').style.display="none";
  document.querySelector('#XhamiPaKrahN4-44').style.display="none";



  
  document.querySelector('.copaXhKNN1-4').style.display="inline";
  document.querySelector('.copaXhKNN2-4').style.display="inline";
  document.querySelector('.copaXhKNN3-4').style.display="inline";
  document.querySelector('.copaXhKNN4-4').style.display="inline";


  document.querySelector('.copaXhPaKNN1-4').style.display="none";
  document.querySelector('.copaXhPaKNN2-4').style.display="none";
  document.querySelector('.copaXhPaKNN3-4').style.display="none";
  document.querySelector('.copaXhPaKNN4-4').style.display="none";


  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhKNN4-11').innerHTML="1";
   document.querySelector('.XhKNN4-22').innerHTML="2";
   document.querySelector('.XhKNN4-33').innerHTML="3";
   document.querySelector('.XhKNN4-44').innerHTML="4";


    // Shfaqja e vlerave
    document.querySelector('.RezultatetKrahutN41').style.display="inline";
    document.querySelector('.RezultatetKrahutN42').style.display="inline";
    document.querySelector('.RezultatetKrahutN43').style.display="inline";
    document.querySelector('.RezultatetKrahutN44').style.display="inline";
}  