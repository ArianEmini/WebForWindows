

// document.querySelector('.Dritare-treshe').addEventListener('click',OpenTreshe);

// document.querySelector('.Dritare-katershe').addEventListener('click',OpenKatershe);

// document.querySelector('.Dritare-dyshe-Horizontal').addEventListener('click',OpenDysheHorz);
// document.querySelector('.Dritare-Treshe-Horizontal').addEventListener('click',OpenTresheHorz);
// document.querySelector('.Vogel-Madhe').addEventListener('click',OpenVogelMadhe);
// document.querySelector('.Madhe-Vogel').addEventListener('click',OpenMadheVogel);














//Dritare 2 per Rezultatet Ndarese
var Mbledhja=document.querySelector('.MbledhjaPerNdarse');
let kushti=false;
 document.querySelector('.ButoniAdapterPerNdarse').addEventListener('click',function(){
   kushti=true;
  });
  document.querySelector('.FillimiL').addEventListener('click',function(){
     kushti=false;
  });

document.querySelector('.MbledhjaPerNdarse').addEventListener('click',Mbledhi);

function Mbledhi(e){
    //Selektimi i gjatesis dhe gjersis
    var vleraGjatesisLevisese=parseInt(document.querySelector('.GjatesiaNdarese').value);
   
    
    var vleraGjeresisLevisese1=parseInt(document.querySelector('.GjeresiaH-1').value);
    var vleraGjeresisLevisese2=parseInt(document.querySelector('.GjeresiaH-2').value);


    var vleraGjeresisL=vleraGjeresisLevisese1+vleraGjeresisLevisese2;

   //  Marrja e vlerave
   
   var InputoKornizesVN=document.querySelector('.InputoKornizesVN-2').innerHTML;
   var InputoKornizesHN=document.querySelector('.InputoKornizesHN-2').innerHTML;
   var InputiKornizaAVN=document.querySelector('.InputiKornizaAVN-2').innerHTML;
   var InputiKornizesAHN=document.querySelector('.InputiKornizaAHN-2').innerHTML;
   var InputiKrahuVN=document.querySelector('.InputiKrahuVN-2').innerHTML;
   var InputiKrahuHN1=document.querySelector('.InputiKrahuHN1-2').innerHTML;
   var InputiKrahuHN2=document.querySelector('.InputiKrahuHN2-2').innerHTML;
   var InputiKrahuAVN=document.querySelector('.InputiKrahuAVN-2').innerHTML;
   var InputiKrahuAH1=document.querySelector('.InputiKrahuAHN1-2').innerHTML;
   var InputiKrahuAH2=document.querySelector('.InputiKrahuAHN2-2').innerHTML;

   var XhamiVN=document.querySelector('.XhamiVN-2').innerHTML;
   var XhamiHN1=document.querySelector('.XhamiHN1-2').innerHTML;
   var XhamiHN2=document.querySelector('.XhamiHN2-2').innerHTML;


   var XhamiStatikVN=document.querySelector('.XhamiStatikVN').innerHTML;
   var XhamiStatikHN1=document.querySelector('.XhamiStatikHN1-2').innerHTML;
   var XhamiStatikHN2=document.querySelector('.XhamiStatikHN2-2').innerHTML;

   var SHN=document.querySelector('.ShtyllN-2').innerHTML;
   var AN=document.querySelector('.AdapteriN-2').innerHTML;
   var SHAN=document.querySelector('.ShtyllAN-2').innerHTML;
   var AAN=document.querySelector('.AdapteriAN-2').innerHTML;
  




    //WATCH  DRITARE DYSHE ME SHTYLL 
    //Kornizat dhe Araturat per dritaret me shtylle 
    let VertikaleKorniza2N=document.querySelector('.GjatesiaKornizesLevizeseV').innerText=vleraGjatesisLevisese+parseInt(InputoKornizesVN)+" V";
    document.querySelector('.RezultatetVertikaleKornizaN2').innerText=parseInt(VertikaleKorniza2N)-6+"[Ko]";
    let KornizaNdarese2=document.querySelector('.GjatesiaKornizesLevizeseH').innerText=vleraGjeresisL+parseInt(InputoKornizesHN)+" H";
    document.querySelector('.RezultatetKornizesA2').innerText=parseInt(KornizaNdarese2)-6+"[Ko]";

    document.querySelector('.ArmaturaKornizesLV').innerText=vleraGjatesisLevisese-parseInt(InputiKornizaAVN)+" V";
    document.querySelector('.ArmaturaKornizesLH').innerText=vleraGjeresisL-parseInt(InputiKornizesAHN)+" H";

    //T-Shtylla
    document.querySelector('.T-shtyllaLevizese').innerText=vleraGjatesisLevisese-parseInt(SHN)+" V";
    document.querySelector('.Armatura-ShtyllaL').innerText=vleraGjatesisLevisese-parseInt(SHAN)+" V";

    //Adapteri
    document.querySelector('.AdapterLevizese').innerText=vleraGjatesisLevisese-parseInt(AN)+" V"; 
    document.querySelector('.Armatura-AdapteriL').innerText=vleraGjatesisLevisese-parseInt(AAN)+" V";


    //Krahu dhe armaturat 
   let VertikaleKrahuN2=document.querySelector('.KrahuLevizese-V').innerText=vleraGjatesisLevisese-parseInt(InputiKrahuVN)+" V";
    document.querySelector('.RezultatetVertikaleKrahuN2').innerText=parseInt(VertikaleKrahuN2)-6+"[Kr]   ";
    document.querySelector('.ArmaturaKrahuLV').innerText=vleraGjatesisLevisese-parseInt(InputiKrahuAVN)+" V";

    //  Qe qelen
    document.querySelector('.XhamiLevizeseV1').innerText=vleraGjatesisLevisese-parseInt(XhamiVN);
    document.querySelector('.XhamiLevizeseV2').innerText=vleraGjatesisLevisese-parseInt(XhamiVN);
     // Qe nuk qelen
    document.querySelector('.XhamiLevizeseV111').innerText=vleraGjatesisLevisese-parseInt(XhamiStatikVN);
    document.querySelector('.XhamiLevizeseV22').innerText=vleraGjatesisLevisese-parseInt(XhamiStatikVN);

    let VleraAdapteri;


     if(kushti){
   
       VleraAdapteri=10;
     let krahuNdareseA21= document.querySelector('.KrahuLevizese-H-1').innerText=vleraGjeresisLevisese1-parseInt(InputiKrahuHN1)+VleraAdapteri+" H";
     let krahuNdareseA22= document.querySelector('.KrahuLevizese-H-2').innerText=vleraGjeresisLevisese2-parseInt(InputiKrahuHN2)+VleraAdapteri+" H";

      document.querySelector('.ArmaturaKrahuLH1').innerText=vleraGjeresisLevisese1-198+VleraAdapteri+" H";
      document.querySelector('.ArmaturaKrahuLH2').innerText=vleraGjeresisLevisese2-198+VleraAdapteri+" H";
       
      document.querySelector('.RezultatetKrahutA1').innerText=parseInt(krahuNdareseA21)-6+"[Kr]";
      document.querySelector('.RezultatetKrahutA2').innerText=parseInt(krahuNdareseA22)-6+"[Kr]";


       //Xhami 1/2
       // qe qelen
      document.querySelector('.XhamiLevizeseH1').innerText=vleraGjeresisLevisese1+VleraAdapteri-parseInt(XhamiHN1);
      document.querySelector('.XhamiLevizeseH2').innerText=vleraGjeresisLevisese2+VleraAdapteri-parseInt(XhamiHN2);
      
      //qe nuk qelen
      document.querySelector('.XhamiLevizeseH111').innerText=vleraGjeresisLevisese1+VleraAdapteri-parseInt(XhamiStatikHN1);
      document.querySelector('.XhamiLevizeseH22').innerText=vleraGjeresisLevisese2+VleraAdapteri-parseInt(XhamiStatikHN2);
   
   

     }else{
      VleraAdapteri=0;
     let krahuNdarese21=document.querySelector('.KrahuLevizese-H-1').innerText=vleraGjeresisLevisese1-parseInt(InputiKrahuHN1)+VleraAdapteri+" H";
     let krahuNdarese22=document.querySelector('.KrahuLevizese-H-2').innerText=vleraGjeresisLevisese2-parseInt(InputiKrahuHN2)+VleraAdapteri+" H";

      document.querySelector('.ArmaturaKrahuLH1').innerText=vleraGjeresisLevisese1-parseInt(InputiKrahuAH1)+VleraAdapteri+" H";
      document.querySelector('.ArmaturaKrahuLH2').innerText=vleraGjeresisLevisese2-parseInt(InputiKrahuAH2)+VleraAdapteri+" H";

      document.querySelector('.RezultatetKrahutA1').innerText=parseInt(krahuNdarese21)-6+"[Kr]";
      document.querySelector('.RezultatetKrahutA2').innerText=parseInt(krahuNdarese22)-6+"[Kr]";
    



      //Xhami 1/2
      // qe qelen
      document.querySelector('.XhamiLevizeseH1').innerText=vleraGjeresisLevisese1+VleraAdapteri-parseInt(XhamiHN1);
      document.querySelector('.XhamiLevizeseH2').innerText=vleraGjeresisLevisese2+VleraAdapteri-parseInt(XhamiHN2);
      
      //qe nuk qelen
      document.querySelector('.XhamiLevizeseH111').innerText=vleraGjeresisLevisese1+VleraAdapteri-parseInt(XhamiStatikHN1);
      document.querySelector('.XhamiLevizeseH22').innerText=vleraGjeresisLevisese2+VleraAdapteri-parseInt(XhamiStatikHN1);
   



     }
 
   
     

  

  

    



    document.querySelector('.Dritare-1').style.display="none";
    document.querySelector('.Dritare-2').style.display="none";
    document.querySelector('.Dritare2-PerFoto').style.display='none';
    document.querySelector('.DritareNdarse-2').style.display="none";


    // var MbledhjaGjersisGjatesis=vlera+vleraGjeresis;
    // document.querySelector('.MbledhjaGjersisGjatesis').innerText=MbledhjaGjersisGjatesis;
    // var elementi=document.createElement('p')
    // elementi.appendChild(vleren)
    // elementi.appendChild(document.createTextNode(Gjatesia));
   
   
}
//Fotot
document.querySelector('.ButoniNdares1').addEventListener('click',ShfaqeDyshese);
function ShfaqeDyshese(){
   document.sliderNdares.src="Foto-Dritare/Foto21.jpg";
}
document.querySelector('.ButoniNdares2').addEventListener('click',ShfaqeDyshese1);
function ShfaqeDyshese1(){
   document.sliderNdares.src="Foto-Dritare/Foto22.jpg";
}
document.querySelector('.ButoniNdares3').addEventListener('click',ShfaqeDyshese2);
function ShfaqeDyshese2(){
   document.sliderNdares.src="Foto-Dritare/Foto23.jpg";
}
document.querySelector('.ButoniNdares4').addEventListener('click',ShfaqeDyshese3);
function ShfaqeDyshese3(){
   document.sliderNdares.src="Foto-Dritare/Foto24.jpg";
}
document.querySelector('.ButoniNdares5').addEventListener('click',ShfaqeDyshese4);
function ShfaqeDyshese4(){
   document.sliderNdares.src="Foto-Dritare/Foto25.jpg";
}
document.querySelector('.ButoniNdares6').addEventListener('click',ShfaqeDyshese5);
function ShfaqeDyshese5(){
   document.sliderNdares.src="Foto-Dritare/Foto26.jpg";
}
document.querySelector('.ButoniNdares7').addEventListener('click',ShfaqeDyshese6);
function ShfaqeDyshese6(){
   document.sliderNdares.src="Foto-Dritare/Foto27.jpg";
}
document.querySelector('.ButoniNdares8').addEventListener('click',ShfaqeDyshese7);
function ShfaqeDyshese7(){
   document.sliderNdares.src="Foto-Dritare/Foto28.jpg";
}
document.querySelector('.ButoniNdares9').addEventListener('click',ShfaqeDyshese8);
function ShfaqeDyshese8(){
   document.sliderNdares.src="Foto-Dritare/Foto29.jpg";
}
document.querySelector('.ButoniNdares10').addEventListener('click',ShfaqeDyshese9);
function ShfaqeDyshese9(){
   document.sliderNdares.src="Foto-Dritare/Foto210.jpg";
}
document.querySelector('.ButoniNdares11').addEventListener('click',ShfaqeDyshese10);
function ShfaqeDyshese10(){
   document.sliderNdares.src="Foto-Dritare/Foto211.jpg";
}
document.querySelector('.ButoniNdares12').addEventListener('click',ShfaqeDyshese11);
function ShfaqeDyshese11(){
   document.sliderNdares.src="Foto-Dritare/Foto212.jpg";
}
document.querySelector('.ButoniNdares13').addEventListener('click',ShfaqeDyshese12);
function ShfaqeDyshese12(){
   document.sliderNdares.src="Foto-Dritare/Foto213.jpg";
}
document.querySelector('.ButoniNdares14').addEventListener('click',ShfaqeDyshese13);
function ShfaqeDyshese13(){
   document.sliderNdares.src="Foto-Dritare/Foto214.jpg";
}





//Dritare 2 per shtyll dhe adapter
//Adapteri
document.querySelector('.ButoniAdapterPerNdarse').addEventListener('click',ButoniA);

function ButoniA(){
    document.querySelector('.AdapteriLevizes').style.display="block";
    document.querySelector('.AdapterArmaturL').style.display="block";
    // document.querySelector('.Adapterii1').style.display="block";
    // document.querySelector('.AdapterArmatur1').style.display="block";
    document.querySelector('.copLA').style.display="block";
    

}

//Shtylla
document.querySelector('.ButoniShtyllaPerNdarse').addEventListener('click',ButoniSH);

function ButoniSH(){
    document.querySelector('.ShtyllaLevizese').style.display="block";
    document.querySelector('.ShtyllaArmaturaL').style.display="block";
    // document.querySelector('.Shtylla1').style.display="block";
    // document.querySelector('.ShtyllaArmatura1').style.display="block";
    document.querySelector('.copLSH').style.display="block";


}



//Butoni Fillimi


// Dritare 2
document.querySelector('.FillimiL').addEventListener('click',ButoniF);

function ButoniF(){
    document.querySelector('.AdapteriLevizes').style.display="none";
    document.querySelector('.AdapterArmaturL').style.display="none";
    document.querySelector('.ShtyllaLevizese').style.display="none";
    document.querySelector('.ShtyllaArmaturaL').style.display="none";
    document.querySelector('.copLA').style.display="none";
    document.querySelector('.copLSH').style.display="none";
    document.slider2.src="124.jpg";
    document.querySelector('.RezultatetKrahut1').style.display='inline';
    document.querySelector('.RezultatetKrahut2').style.display='inline';
    document.querySelector('.RezultatetVertikaleKrahu2').style.display='inline';

}








// Close-2
document.querySelector('.xNdares-2').addEventListener('click',Close2);         
function Close2(){
    // document.querySelector('.Dritare-1').style.display="none";
    document.querySelector('.DritareNdarse-2').style.display="none";

    document.querySelector('.AdapteriLevizes').style.display="none";
    document.querySelector('.AdapterArmaturL').style.display="none";
    document.querySelector('.ShtyllaLevizese').style.display="none";
    document.querySelector('.ShtyllaArmaturaL').style.display="none";

}
document.querySelector('.xx2').addEventListener('click',CloseScroll2);   
function CloseScroll2(){
   document.querySelector('.Dritare2-PerFoto').style.display='none';
} 






//Dritare-2 Foto
document.querySelector('#Dritaredyshe2Scroll').addEventListener('click',OpenDyshe2Scroll);
function OpenDyshe2Scroll(){
   document.querySelector('.Dritare2-PerFoto').style.display="block";
}




document.querySelector('.ButoniNdares1').addEventListener('click',OpenDyshe1);
document.querySelector('.ButoniNdares2').addEventListener('click',OpenDyshe2);
document.querySelector('.ButoniNdares3').addEventListener('click',OpenDyshe3);
document.querySelector('.ButoniNdares4').addEventListener('click',OpenDyshe4);
document.querySelector('.ButoniNdares5').addEventListener('click',OpenDyshe5);
document.querySelector('.ButoniNdares6').addEventListener('click',OpenDyshe6);
document.querySelector('.ButoniNdares7').addEventListener('click',OpenDyshe7);
document.querySelector('.ButoniNdares8').addEventListener('click',OpenDyshe8);
document.querySelector('.ButoniNdares9').addEventListener('click',OpenDyshe9);
document.querySelector('.ButoniNdares10').addEventListener('click',OpenDyshe10);
document.querySelector('.ButoniNdares11').addEventListener('click',OpenDyshe11);
document.querySelector('.ButoniNdares12').addEventListener('click',OpenDyshe12);
document.querySelector('.ButoniNdares13').addEventListener('click',OpenDyshe13);
document.querySelector('.ButoniNdares14').addEventListener('click',OpenDyshe14);



function OpenDyshe1(){
    document.querySelector('.DritareNdarse-2').style.display='block';
    document.FotoNdarese2.src="Foto-Dritare/Foto21.jpg"
    document.querySelector('.copaLKV-2').innerText='0';
    document.querySelector('.copaLK1H-2').innerText='0';
    document.querySelector('.copaLK2H-2').innerText='0';

    document.querySelector('.KrahuLevizese-V').style.display="none";
    document.querySelector('.KrahuLevizese-H-1').style.display='none';
    document.querySelector('.KrahuLevizese-H-2').style.display='none'

    document.querySelector('.ArmaturaKrahuLV').style.display="none";
   document.querySelector('.ArmaturaKrahuLH1').style.display="none";
   document.querySelector('.ArmaturaKrahuLH2').style.display="none";
   document.querySelector('#XhamiKrahL1').style.display="none";
   document.querySelector('#XhamiKrahL2').style.display="none";
   document.querySelector('#XhamiPaKrahL11').style.display="block";
   document.querySelector('#XhamiPaKrahL22').style.display="block";
   document.querySelector('.copaLXhK1-2').style.display="none";
   document.querySelector('.copaLXhK2-2').style.display="none";
   document.querySelector('.copaLXhPaK1-2').style.display="block";
   document.querySelector('.copaLXhPaK2-2').style.display="block";
    // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhPK11').innerHTML="1";
    document.querySelector('.XhPK22').innerHTML="2";


   //  Vlerat tek dritarja
    document.querySelector('.RezultatetKrahutA1').style.display='none';
    document.querySelector('.RezultatetKrahutA2').style.display='none';

   document.querySelector('.RezultatetVertikaleKrahuN2').style.display='none';


}
function OpenDyshe2(){
   document.querySelector('.DritareNdarse-2').style.display='block';
   document.FotoNdarese2.src="Foto-Dritare/Foto22.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   
   document.querySelector('.copaLKV-2').innerText='2';
   document.querySelector('.copaLK1H-2').innerText='2';
   document.querySelector('.copaLK2H-2').innerText='0';
   document.querySelector('.KrahuLevizese-V').style.display="inline";
   document.querySelector('.KrahuLevizese-H-1').style.display='inline';
    document.querySelector('.KrahuLevizese-H-2').style.display='none';  
   document.querySelector('.ArmaturaKrahuLV').style.display="inline";
  document.querySelector('.ArmaturaKrahuLH1').style.display="inline";
  document.querySelector('.ArmaturaKrahuLH2').style.display="none";
  document.querySelector('#XhamiKrahL1').style.display="block";
  document.querySelector('#XhamiKrahL2').style.display="none";
  document.querySelector('#XhamiPaKrahL11').style.display="none";
  document.querySelector('#XhamiPaKrahL22').style.display="block";
  document.querySelector('.copaLXhK1-2').style.display="block";
  document.querySelector('.copaLXhK2-2').style.display="none";
  document.querySelector('.copaLXhPaK1-2').style.display="none";
  document.querySelector('.copaLXhPaK2-2').style.display="block";
  document.querySelector('.XhK11').innerHTML="1";
  document.querySelector('.XhPK22').innerHTML="2";
   //  Vlerat tek dritarja
   document.querySelector('.RezultatetKrahutA1').style.display='inline';
   document.querySelector('.RezultatetKrahutA2').style.display='none';



}
function OpenDyshe3(){
   document.querySelector('.DritareNdarse-2').style.display='block';
   document.FotoNdarese2.src="Foto-Dritare/Foto23.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";

   document.querySelector('.copaLKV-2').innerText='2';
   document.querySelector('.copaLK1H-2').innerText='0';
   document.querySelector('.copaLK2H-2').innerText='2';
   document.querySelector('.KrahuLevizese-V').style.display="inline";
   document.querySelector('.KrahuLevizese-H-1').style.display='none';
    document.querySelector('.KrahuLevizese-H-2').style.display='inline';  
   document.querySelector('.ArmaturaKrahuLV').style.display="inline";
  document.querySelector('.ArmaturaKrahuLH1').style.display="none";
  document.querySelector('.ArmaturaKrahuLH2').style.display="inline";
  document.querySelector('#XhamiKrahL1').style.display="none";
  document.querySelector('#XhamiKrahL2').style.display="block";
  document.querySelector('#XhamiPaKrahL11').style.display="block";
  document.querySelector('#XhamiPaKrahL22').style.display="none";
  document.querySelector('.copaLXhK1-2').style.display="none";
  document.querySelector('.copaLXhK2-2').style.display="block";
  document.querySelector('.copaLXhPaK1-2').style.display="block";
  document.querySelector('.copaLXhPaK2-2').style.display="none";
  document.querySelector('.XhK22').innerHTML="2";
  document.querySelector('.XhPK11').innerHTML="1";

   //  Vlerat tek dritarja
   document.querySelector('.RezultatetKrahutA1').style.display='none';
   document.querySelector('.RezultatetKrahutA2').style.display='inline';


   
}function OpenDyshe4(){
   document.querySelector('.DritareNdarse-2').style.display='block';
   document.FotoNdarese2.src="Foto-Dritare/Foto24.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  
   document.querySelector('.copaLKV-2').innerText='4';
   document.querySelector('.copaLK1H-2').innerText='2';
   document.querySelector('.copaLK2H-2').innerText='2';
   document.querySelector('.KrahuLevizese-V').style.display="inline";
   document.querySelector('.KrahuLevizese-H-1').style.display='inline';
    document.querySelector('.KrahuLevizese-H-2').style.display='inline';  
   document.querySelector('.ArmaturaKrahuLV').style.display="inline";
  document.querySelector('.ArmaturaKrahuLH1').style.display="inline";
  document.querySelector('.ArmaturaKrahuLH2').style.display="inline";
  document.querySelector('#XhamiKrahL1').style.display="block";
  document.querySelector('#XhamiKrahL2').style.display="block";
  document.querySelector('#XhamiPaKrahL11').style.display="none";
  document.querySelector('#XhamiPaKrahL22').style.display="none";
  document.querySelector('.copaLXhK1-2').style.display="block";
  document.querySelector('.copaLXhK2-2').style.display="block";
  document.querySelector('.copaLXhPaK1-2').style.display="none";
  document.querySelector('.copaLXhPaK2-2').style.display="none";
  document.querySelector('.XhK11').innerHTML="1";
  document.querySelector('.XhK22').innerHTML="2";

   //  Vlerat tek dritarja
   document.querySelector('.RezultatetKrahutA1').style.display='inline';
   document.querySelector('.RezultatetKrahutA2').style.display='inline';


   
}function OpenDyshe5(){
   document.querySelector('.DritareNdarse-2').style.display='block';
   document.FotoNdarese2.src="Foto-Dritare/Foto25.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";

   document.querySelector('.copaLKV-2').innerText='4';
    document.querySelector('.copaLK1H-2').innerText='2';
    document.querySelector('.copaLK2H-2').innerText='2';
   document.querySelector('.KrahuLevizese-V').style.display="inline";
   document.querySelector('.KrahuLevizese-H-1').style.display='inline';
    document.querySelector('.KrahuLevizese-H-2').style.display='inline';  
   document.querySelector('.ArmaturaKrahuLV').style.display="inline";
  document.querySelector('.ArmaturaKrahuLH1').style.display="inline";
  document.querySelector('.ArmaturaKrahuLH2').style.display="inline";
  document.querySelector('#XhamiKrahL1').style.display="block";
  document.querySelector('#XhamiKrahL2').style.display="block";
  document.querySelector('#XhamiPaKrahL11').style.display="none";
  document.querySelector('#XhamiPaKrahL22').style.display="none";
  document.querySelector('.copaLXhK1-2').style.display="block";
  document.querySelector('.copaLXhK2-2').style.display="block";
  document.querySelector('.copaLXhPaK1-2').style.display="none";
  document.querySelector('.copaLXhPaK2-2').style.display="none";
  document.querySelector('.XhK11').innerHTML="1";
  document.querySelector('.XhK22').innerHTML="2";

   //  Vlerat tek dritarja
   document.querySelector('.RezultatetKrahutA1').style.display='inline';
   document.querySelector('.RezultatetKrahutA2').style.display='inline';


   
}function OpenDyshe6(){
   document.querySelector('.DritareNdarse-2').style.display='block';
   document.FotoNdarese2.src="Foto-Dritare/Foto26.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.copaLKV-2').innerText='4';
    document.querySelector('.copaLK1H-2').innerText='2';
    document.querySelector('.copaLK2H-2').innerText='2';
   document.querySelector('.KrahuLevizese-V').style.display="inline";
   document.querySelector('.KrahuLevizese-H-1').style.display='inline';
    document.querySelector('.KrahuLevizese-H-2').style.display='inline';  
   document.querySelector('.ArmaturaKrahuLV').style.display="inline";
  document.querySelector('.ArmaturaKrahuLH1').style.display="inline";
  document.querySelector('.ArmaturaKrahuLH2').style.display="inline";
  document.querySelector('#XhamiKrahL1').style.display="block";
  document.querySelector('#XhamiKrahL2').style.display="block";
  document.querySelector('#XhamiPaKrahL11').style.display="none";
  document.querySelector('#XhamiPaKrahL22').style.display="none";
  document.querySelector('.copaLXhK1-2').style.display="block";
  document.querySelector('.copaLXhK2-2').style.display="block";
  document.querySelector('.copaLXhPaK1-2').style.display="none";
  document.querySelector('.copaLXhPaK2-2').style.display="none";
  document.querySelector('.XhK11').innerHTML="1";
  document.querySelector('.XhK22').innerHTML="2";

   //  Vlerat tek dritarja
   document.querySelector('.RezultatetKrahutA1').style.display='inline';
   document.querySelector('.RezultatetKrahutA2').style.display='inline';


   
}function OpenDyshe7(){
   document.querySelector('.DritareNdarse-2').style.display='block';
   document.FotoNdarese2.src="Foto-Dritare/Foto27.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";

   document.querySelector('.copaLKV-2').innerText='4';
   document.querySelector('.copaLK1H-2').innerText='2';
   document.querySelector('.copaLK2H-2').innerText='2';
   document.querySelector('.KrahuLevizese-V').style.display="inline";
   document.querySelector('.KrahuLevizese-H-1').style.display='inline';
    document.querySelector('.KrahuLevizese-H-2').style.display='inline';  
   document.querySelector('.ArmaturaKrahuLV').style.display="inline";
  document.querySelector('.ArmaturaKrahuLH1').style.display="inline";
  document.querySelector('.ArmaturaKrahuLH2').style.display="inline";
  document.querySelector('#XhamiKrahL1').style.display="block";
  document.querySelector('#XhamiKrahL2').style.display="none";
  document.querySelector('#XhamiPaKrahL11').style.display="none";
  document.querySelector('#XhamiPaKrahL22').style.display="block";
  document.querySelector('.copaLXhK1-2').style.display="block";
  document.querySelector('.copaLXhK2-2').style.display="none";
  document.querySelector('.copaLXhPaK1-2').style.display="none";
  document.querySelector('.copaLXhPaK2-2').style.display="block";
  document.querySelector('.XhK11').innerHTML="1";
  document.querySelector('.XhPK22').innerHTML="2";

   //  Vlerat tek dritarja
   document.querySelector('.RezultatetKrahutA1').style.display='inline';
   document.querySelector('.RezultatetKrahutA2').style.display='none';


   
}function OpenDyshe8(){
   document.querySelector('.DritareNdarse-2').style.display='block';
   document.FotoNdarese2.src="Foto-Dritare/Foto28.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";

   document.querySelector('.copaLKV-2').innerText='4';
   document.querySelector('.copaLK1H-2').innerText='2';
   document.querySelector('.copaLK2H-2').innerText='2';
   document.querySelector('.KrahuLevizese-V').style.display="inline";
   document.querySelector('.KrahuLevizese-H-1').style.display='inline';
    document.querySelector('.KrahuLevizese-H-2').style.display='inline';  
   document.querySelector('.ArmaturaKrahuLV').style.display="inline";
  document.querySelector('.ArmaturaKrahuLH1').style.display="inline";
  document.querySelector('.ArmaturaKrahuLH2').style.display="inline";
  document.querySelector('#XhamiKrahL1').style.display="block";
  document.querySelector('#XhamiKrahL2').style.display="block";
  document.querySelector('#XhamiPaKrahL11').style.display="none";
  document.querySelector('#XhamiPaKrahL22').style.display="none";
  document.querySelector('.copaLXhK1-2').style.display="block";
  document.querySelector('.copaLXhK2-2').style.display="block";
  document.querySelector('.copaLXhPaK1-2').style.display="none";
  document.querySelector('.copaLXhPaK2-2').style.display="none";
  document.querySelector('.XhK11').innerHTML="1";
  document.querySelector('.XhK22').innerHTML="2";

   //  Vlerat tek dritarja
   document.querySelector('.RezultatetKrahutA1').style.display='inline';
   document.querySelector('.RezultatetKrahutA2').style.display='inline';


   
}function OpenDyshe9(){
   document.querySelector('.DritareNdarse-2').style.display='block';
   document.FotoNdarese2.src="Foto-Dritare/Foto29.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";

   document.querySelector('.copaLKV-2').innerText='4';
   document.querySelector('.copaLK1H-2').innerText='2';
   document.querySelector('.copaLK2H-2').innerText='2';
   document.querySelector('.KrahuLevizese-V').style.display="inline";
   document.querySelector('.KrahuLevizese-H-1').style.display='inline';
    document.querySelector('.KrahuLevizese-H-2').style.display='inline';  
   document.querySelector('.ArmaturaKrahuLV').style.display="inline";
  document.querySelector('.ArmaturaKrahuLH1').style.display="inline";
  document.querySelector('.ArmaturaKrahuLH2').style.display="inline";
  document.querySelector('#XhamiKrahL1').style.display="block";
  document.querySelector('#XhamiKrahL2').style.display="block";
  document.querySelector('#XhamiPaKrahL11').style.display="none";
  document.querySelector('#XhamiPaKrahL22').style.display="none";
  document.querySelector('.copaLXhK1-2').style.display="block";
  document.querySelector('.copaLXhK2-2').style.display="block";
  document.querySelector('.copaLXhPaK1-2').style.display="none";
  document.querySelector('.copaLXhPaK2-2').style.display="none";
  document.querySelector('.XhK11').innerHTML="1";
  document.querySelector('.XhK22').innerHTML="2";

   //  Vlerat tek dritarja
   document.querySelector('.RezultatetKrahutA1').style.display='inline';
   document.querySelector('.RezultatetKrahutA2').style.display='inline';


   
}function OpenDyshe10(){
   document.querySelector('.DritareNdarse-2').style.display='block';
   document.FotoNdarese2.src="Foto-Dritare/Foto210.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";

   document.querySelector('.copaLKV-2').innerText='4';
   document.querySelector('.copaLK1H-2').innerText='2';
   document.querySelector('.copaLK2H-2').innerText='2';
   document.querySelector('.KrahuLevizese-V').style.display="inline";
   document.querySelector('.KrahuLevizese-H-1').style.display='inline';
    document.querySelector('.KrahuLevizese-H-2').style.display='inline';  
   document.querySelector('.ArmaturaKrahuLV').style.display="inline";
  document.querySelector('.ArmaturaKrahuLH1').style.display="inline";
  document.querySelector('.ArmaturaKrahuLH2').style.display="inline";
  document.querySelector('#XhamiKrahL1').style.display="block";
  document.querySelector('#XhamiKrahL2').style.display="block";
  document.querySelector('#XhamiPaKrahL11').style.display="none";
  document.querySelector('#XhamiPaKrahL22').style.display="none";
  document.querySelector('.copaLXhK1-2').style.display="block";
  document.querySelector('.copaLXhK2-2').style.display="block";
  document.querySelector('.copaLXhPaK1-2').style.display="none";
  document.querySelector('.copaLXhPaK2-2').style.display="none";
  document.querySelector('.XhK11').innerHTML="1";
  document.querySelector('.XhK22').innerHTML="2";

   //  Vlerat tek dritarja
   document.querySelector('.RezultatetKrahutA1').style.display='inline';
   document.querySelector('.RezultatetKrahutA2').style.display='inline';


   
}
function OpenDyshe11(){
   document.querySelector('.DritareNdarse-2').style.display='block';
   document.FotoNdarese2.src="Foto-Dritare/Foto211.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";

   
   document.querySelector('.copaLKV-2').innerText='2';
   document.querySelector('.copaLK1H-2').innerText='2';
   document.querySelector('.copaLK2H-2').innerText='0';
   document.querySelector('.KrahuLevizese-V').style.display="inline";
   document.querySelector('.KrahuLevizese-H-1').style.display='inline';
    document.querySelector('.KrahuLevizese-H-2').style.display='none';  
   document.querySelector('.ArmaturaKrahuLV').style.display="inline";
  document.querySelector('.ArmaturaKrahuLH1').style.display="inline";
  document.querySelector('.ArmaturaKrahuLH2').style.display="none";
  document.querySelector('#XhamiKrahL1').style.display="block";
  document.querySelector('#XhamiKrahL2').style.display="none";
  document.querySelector('#XhamiPaKrahL11').style.display="none";
  document.querySelector('#XhamiPaKrahL22').style.display="block";
  document.querySelector('.copaLXhK1-2').style.display="block";
  document.querySelector('.copaLXhK2-2').style.display="none";
  document.querySelector('.copaLXhPaK1-2').style.display="none";
  document.querySelector('.copaLXhPaK2-2').style.display="block";
  document.querySelector('.XhK11').innerHTML="1";
  document.querySelector('.XhPK22').innerHTML="2";
   //  Vlerat tek dritarja
   document.querySelector('.RezultatetKrahutA1').style.display='inline';
   document.querySelector('.RezultatetKrahutA2').style.display='none';


   
}
function OpenDyshe12(){
   document.querySelector('.DritareNdarse-2').style.display='block';
   document.FotoNdarese2.src="Foto-Dritare/Foto212.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   
   document.querySelector('.copaLKV-2').innerText='2';
   document.querySelector('.copaLK1H-2').innerText='2';
   document.querySelector('.copaLK2H-2').innerText='0';
   document.querySelector('.KrahuLevizese-V').style.display="inline";
   document.querySelector('.KrahuLevizese-H-1').style.display='inline';
    document.querySelector('.KrahuLevizese-H-2').style.display='none';  
   document.querySelector('.ArmaturaKrahuLV').style.display="inline";
  document.querySelector('.ArmaturaKrahuLH1').style.display="inline";
  document.querySelector('.ArmaturaKrahuLH2').style.display="none";
  document.querySelector('#XhamiKrahL1').style.display="block";
  document.querySelector('#XhamiKrahL2').style.display="none";
  document.querySelector('#XhamiPaKrahL11').style.display="none";
  document.querySelector('#XhamiPaKrahL22').style.display="block";
  document.querySelector('.copaLXhK1-2').style.display="block";
  document.querySelector('.copaLXhK2-2').style.display="none";
  document.querySelector('.copaLXhPaK1-2').style.display="none";
  document.querySelector('.copaLXhPaK2-2').style.display="block";
  document.querySelector('.XhK11').innerHTML="1";
  document.querySelector('.XhPK22').innerHTML="2";
   //  Vlerat tek dritarja
   document.querySelector('.RezultatetKrahutA1').style.display='inline';
   document.querySelector('.RezultatetKrahutA2').style.display='none';


}
function OpenDyshe13(){
   document.querySelector('.DritareNdarse-2').style.display='block';
   document.FotoNdarese2.src="Foto-Dritare/Foto213.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";

   
   document.querySelector('.copaLKV-2').innerText='2';
    document.querySelector('.copaLK1H-2').innerText='0';
    document.querySelector('.copaLK2H-2').innerText='2';
   document.querySelector('.KrahuLevizese-V').style.display="inline";
   document.querySelector('.KrahuLevizese-H-1').style.display='none';
    document.querySelector('.KrahuLevizese-H-2').style.display='inline';  
   document.querySelector('.ArmaturaKrahuLV').style.display="inline";
  document.querySelector('.ArmaturaKrahuLH1').style.display="none";
  document.querySelector('.ArmaturaKrahuLH2').style.display="inline";
  document.querySelector('#XhamiKrahL1').style.display="none";
  document.querySelector('#XhamiKrahL2').style.display="block";
  document.querySelector('#XhamiPaKrahL11').style.display="block";
  document.querySelector('#XhamiPaKrahL22').style.display="none";
  document.querySelector('.copaLXhK1-2').style.display="none";
  document.querySelector('.copaLXhK2-2').style.display="block";
  document.querySelector('.copaLXhPaK1-2').style.display="block";
  document.querySelector('.copaLXhPaK2-2').style.display="none";
  document.querySelector('.XhK22').innerHTML="2";
  document.querySelector('.XhPK11').innerHTML="1";

   //  Vlerat tek dritarja
   document.querySelector('.RezultatetKrahutA1').style.display='none';
   document.querySelector('.RezultatetKrahutA2').style.display='inline';


   
}
function OpenDyshe14(){
   document.querySelector('.DritareNdarse-2').style.display='block';
   document.FotoNdarese2.src="Foto-Dritare/Foto214.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";

   
   document.querySelector('.copaLKV-2').innerText='2';
    document.querySelector('.copaLK1H-2').innerText='0';
    document.querySelector('.copaLK2H-2').innerText='2';
   document.querySelector('.KrahuLevizese-V').style.display="inline";
   document.querySelector('.KrahuLevizese-H-1').style.display='none';
    document.querySelector('.KrahuLevizese-H-2').style.display='inline';  
   document.querySelector('.ArmaturaKrahuLV').style.display="inline";
  document.querySelector('.ArmaturaKrahuLH1').style.display="none";
  document.querySelector('.ArmaturaKrahuLH2').style.display="inline";
  document.querySelector('#XhamiKrahL1').style.display="none";
  document.querySelector('#XhamiKrahL2').style.display="block";
  document.querySelector('#XhamiPaKrahL11').style.display="block";
  document.querySelector('#XhamiPaKrahL22').style.display="none";
  document.querySelector('.copaLXhK1-2').style.display="none";
  document.querySelector('.copaLXhK2-2').style.display="block";
  document.querySelector('.copaLXhPaK1-2').style.display="block";
  document.querySelector('.copaLXhPaK2-2').style.display="none";
  document.querySelector('.XhK22').innerHTML="2";
  document.querySelector('.XhPK11').innerHTML="1";

   //  Vlerat tek dritarja
   document.querySelector('.RezultatetKrahutA1').style.display='none';
   document.querySelector('.RezultatetKrahutA2').style.display='inline';


}






