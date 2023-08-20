//OPENI i Scrollit te Dritares se tret
document.querySelector('.DritareTreshe-3').addEventListener('click',OpenScrollTreshe);
function OpenScrollTreshe(){
    document.querySelector('.Dritare3-PerFoto').style.display='block';
}

//Closi i Scroll

document.querySelector('.xx3').addEventListener("click",CloseTreshe);
function CloseTreshe(){
    document.querySelector('.Dritare3-PerFoto').style.display="none";

}
//Closi i Modulit
document.querySelector('.xP3').addEventListener('click',CloseP3);
function CloseP3(){
document.querySelector('.Dritare-3').style.display='none';
}

//Close i Modalit Ndares
document.querySelector('.x3').addEventListener('click',Close3);
function Close3(){
document.querySelector('.DritareNdarse-3').style.display='none';
}

//Shtylla dhe Adapteri Te Fotot

//Shtylla-1
document.querySelector('.ButoniShtyllaP-1').addEventListener('click',ShtyllaP1);
function ShtyllaP1(){
   document.querySelector('.ShtyllaTreshe-1').style.display='inline';
   document.querySelector('.copSH-1').style.display='inline';
   document.querySelector('.ShtyllaArmatura-1').style.display='inline';
}
//Shtylla-2
document.querySelector('.ButoniShtyllaP-2').addEventListener('click',ShtyllaP2);
function ShtyllaP2(){
   document.querySelector('.ShtyllaTreshe-2').style.display='inline';
   document.querySelector('.copSH-2').style.display='inline';
   document.querySelector('.ShtyllaArmatura-2').style.display='inline';
}

// Adapteri-1
document.querySelector('.ButoniAdapterP-1').addEventListener('click',AdapterP1);
function AdapterP1(){
   document.querySelector('.AdapteriTreshe-1').style.display='inline';
   document.querySelector('.copA-1').style.display='inline';
   document.querySelector('.AdapterArmatur-1').style.display='inline';


  //  Per Adapert nderrues
   document.querySelector('.copaKHA-3').style.display='inline';
   document.querySelector('.copaKHA-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='2';
   document.querySelector('.copaKHAr-3').innerText="2";
   document.querySelector('.KrahuTresheHA-1').style.display='inline';
   document.querySelector('.KcopaA-3').style.display="inline";
   document.querySelector('.ArmaturaH').style.display='inline';
   document.querySelector('.KrahuTresheH-1').style.display="none";
   document.querySelector('.copaKh').style.display='none';
   document.querySelector('.Armatura').style.display='none';
  


}
//Adapteri-2
document.querySelector('.ButoniAdapterP-2').addEventListener('click',AdapterP2);
function AdapterP2(){
   document.querySelector('.AdapteriTreshe-2').style.display='inline';
   document.querySelector('.copA-2').style.display='inline';
   document.querySelector('.AdapterArmatur-2').style.display='inline';

  //  Per Adapter nderrues
   document.querySelector('.copaKHA-3').style.display='inline';
   document.querySelector('.copaKHA-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='2';
   document.querySelector('.copaKHAr-3').innerText="2";
   document.querySelector('.KrahuTresheHA-1').style.display='inline';
   document.querySelector('.KcopaA-3').style.display="inline";
   document.querySelector('.ArmaturaH').style.display='inline';
   document.querySelector('.KrahuTresheH-1').style.display="none";
   document.querySelector('.copaKh').style.display='none';
   document.querySelector('.Armatura').style.display='none';
  

  


}
//Fillimi
document.querySelector('.Fillimi3').addEventListener('click',Fillimi3);
function Fillimi3(){
   document.querySelector('.ShtyllaTreshe-1').style.display='none';
   document.querySelector('.copSH-1').style.display='none';
   document.querySelector('.ShtyllaArmatura-1').style.display='none';
   document.querySelector('.ShtyllaTreshe-2').style.display='none';
   document.querySelector('.copSH-2').style.display='none';
   document.querySelector('.ShtyllaArmatura-2').style.display='none';
   document.querySelector('.AdapteriTreshe-1').style.display='none';
   document.querySelector('.copA-1').style.display='none';
   document.querySelector('.AdapterArmatur-1').style.display='none';
   document.querySelector('.AdapteriTreshe-2').style.display='none';
   document.querySelector('.copA-2').style.display='none';
   document.querySelector('.AdapterArmatur-2').style.display='none';
   document.querySelector('.copaKHA-3').style.display='none';
   document.querySelector('.KrahuTresheHA-1').style.display='none';
   document.querySelector('.KcopaA-3').style.display='none';
   document.querySelector('.ArmaturaH').style.display='none';
   document.querySelector('.KrahuTresheHAr-1').style.display='none';
   document.querySelector('.KcopaAr-3').style.display='none';
   document.querySelector('.KrahuTresheH-1').style.display='inline';
   document.querySelector('.copaKh').style.display='inline';
   document.querySelector('.Armatura').style.display='inline';
   document.querySelector('.ArmaturaR').style.display='none';
  

   
   let numri=0;
  document.querySelector('.Krahu3Ar-H').innerHTML=numri;
  document.querySelector('.copaKHAr-3').innerHTML=numri;
document.querySelector('.ArmaturaKrahuHAR-3').innerHTML=numri;


// Pershkrimi i dritares
document.querySelector('.RezultatetKrahut31').style.display="inline";
    document.querySelector('.RezultatetKrahut32').style.display="inline";
    document.querySelector('.RezultatetKrahut33').style.display="inline";

    document.querySelector('.RezultatetVertikaleKrahu3').style.display='inline';


}



// Adapteri dhe Shtylla Te Butoni

//Shtylla-1
document.querySelector('.ButoniShtyllaN-1').addEventListener('click',ShtyllaN1);
function ShtyllaN1(){
   document.querySelector('.ShtyllaTresheN-1').style.display='inline';
   document.querySelector('.copNSH-1').style.display='inline';
   document.querySelector('.ShtyllaArmaturaN-1').style.display='inline';
}
//Shtylla-2
document.querySelector('.ButoniShtyllaN-2').addEventListener('click',ShtyllaN2);
function ShtyllaN2(){
   document.querySelector('.ShtyllaTresheN-2').style.display='inline';
   document.querySelector('.copNSH-2').style.display='inline';
   document.querySelector('.ShtyllaArmaturaN-2').style.display='inline';
}

// Adapteri-1
document.querySelector('.ButoniAdapterN-1').addEventListener('click',AdapterN1);
function AdapterN1(){
   document.querySelector('.AdapteriTresheN-1').style.display='inline';
   document.querySelector('.copNA-1').style.display='inline';
   document.querySelector('.AdapterArmaturN-1').style.display='inline';
}
//Adapteri-2
document.querySelector('.ButoniAdapterN-2').addEventListener('click',AdapterN2);
function AdapterN2(){
   document.querySelector('.AdapteriTresheN-2').style.display='inline';
   document.querySelector('.copNA-2').style.display='inline';
   document.querySelector('.AdapterArmaturN-2').style.display='inline';
}
//Fillimi
document.querySelector('.FillimiN3').addEventListener('click',FillimiN3);
function FillimiN3(){
   document.querySelector('.ShtyllaTresheN-1').style.display='none';
   document.querySelector('.copNSH-1').style.display='none';
   document.querySelector('.ShtyllaArmaturaN-1').style.display='none';
   document.querySelector('.ShtyllaTresheN-2').style.display='none';
   document.querySelector('.copNSH-2').style.display='none';
   document.querySelector('.ShtyllaArmaturaN-2').style.display='none';
   document.querySelector('.AdapteriTresheN-1').style.display='none';
   document.querySelector('.copNA-1').style.display='none';
   document.querySelector('.AdapterArmaturN-1').style.display='none';
   document.querySelector('.AdapteriTresheN-2').style.display='none';
   document.querySelector('.copNA-2').style.display='none';
   document.querySelector('.AdapterArmaturN-2').style.display='none';

   document.querySelector('.RezultatetVertikaleKrahuN3').style.display='inline';

}






let KushtiTresheNdares1=false;
let KushtiTresheNdares2=false;

document.querySelector('.ButoniAdapterN-1').addEventListener('click',function(){
  KushtiTresheNdares1=true;
})

document.querySelector('.ButoniAdapterN-2').addEventListener('click',function(){
  KushtiTresheNdares2=true;
})
document.querySelector('.FillimiN3').addEventListener('click',function(){
  KushtiTresheNdares1=false;
  KushtiTresheNdares2=false;
})
document.querySelector('.MbledhjaN3').addEventListener('click',MbledhjaN3);
function MbledhjaN3(e){
   var vleraGjatesisTresheN=parseInt(document.querySelector('.GjatesiaTreshe-3').value);
   var vleraGjeresisTresheN1=parseInt(document.querySelector('.GjeresiaTreshe-1').value);
   var vleraGjeresisTresheN2=parseInt(document.querySelector('.GjeresiaTreshe-2').value);
   var vleraGjeresisTresheN3=parseInt(document.querySelector('.GjeresiaTreshe-3').value);
   var GjeresiaN=parseInt(vleraGjeresisTresheN1+vleraGjeresisTresheN2+vleraGjeresisTresheN3);


   //  Marrja e vlerave
   var InputoKornizesVN=document.querySelector('.InputoKornizesVN-3').innerHTML;
   var InputoKornizesHN=document.querySelector('.InputoKornizesHN-3').innerHTML;
   var InputiKornizaAVN=document.querySelector('.InputiKornizaAVN-3').innerHTML;
   var InputiKornizesAHN=document.querySelector('.InputiKornizaAHN-3').innerHTML;
   var InputiKrahuVN=document.querySelector('.InputiKrahuVN-3').innerHTML;
   var InputiKrahuHN1=document.querySelector('.InputiKrahuHN1-3').innerHTML;
   var InputiKrahuHN2=document.querySelector('.InputiKrahuHN2-3').innerHTML;
   var InputiKrahuHN3=document.querySelector('.InputiKrahuHN3-3').innerHTML;
   var InputiKrahuAVN=document.querySelector('.InputiKrahuAVN-3').innerHTML;
   var InputiKrahuAH1=document.querySelector('.InputiKrahuAHN1-3').innerHTML;
   var InputiKrahuAH2=document.querySelector('.InputiKrahuAHN2-3').innerHTML;
   var InputiKrahuAH3=document.querySelector('.InputiKrahuAHN3-3').innerHTML;
   var XhamiVN=document.querySelector('.XhamiVN-3').innerHTML;
   var XhamiHN1=document.querySelector('.XhamiHN1-3').innerHTML;
   var XhamiHN2=document.querySelector('.XhamiHN2-3').innerHTML;
   var XhamiHN3=document.querySelector('.XhamiHN3-3').innerHTML;
   var XhamiStatikVN=document.querySelector('.XhamiStatikVN-3').innerHTML;
   var XhamiStatikHN1=document.querySelector('.XhamiStatikHN1-3').innerHTML;
   var XhamiStatikHN2=document.querySelector('.XhamiStatikHN2-3').innerHTML;
   var XhamiStatikHN3=document.querySelector('.XhamiStatikHN3-3').innerHTML;
   var SHN=document.querySelector('.ShtyllN1-3').innerHTML;
  //  var SHN2=document.querySelector('.ShtyllN2-3').innerHTML;
   var AN=document.querySelector('.AdapteriN1-3').innerHTML;
  //  var AN2=document.querySelector('.AdapteriN2-3').innerHTML;
   var SHAN=document.querySelector('.ShtyllAN1-3').innerHTML;
  //  var SHAN2=document.querySelector('.ShtyllAN2-3').innerHTML;
   var AAN=document.querySelector('.AdapteriAN1-3').innerHTML;
  //  var AAN2=document.querySelector('.AdapteriAN2-3').innerHTML;




   
   //Kornizat dhe Araturat per dritaret me shtylle 
   let VertikaleKorniza3N=document.querySelector('.GjatesiaKornizesNV-3').innerText=vleraGjatesisTresheN+parseInt(InputoKornizesVN)+" V";
    document.querySelector('.RezultatetVertikaleKornizaN3').innerText=parseInt(VertikaleKorniza3N)-6+"[Ko]";

   let Korniza3N=document.querySelector('.GjatesiaKornizesNH-3').innerText=GjeresiaN+parseInt(InputoKornizesHN)+" H";
   document.querySelector('.ArmaturaKornizesNV-3').innerText=vleraGjatesisTresheN-parseInt(InputiKornizaAVN)+" V";
   document.querySelector('.ArmaturaKornizesNH-3').innerText=GjeresiaN-parseInt(InputiKornizesAHN)+" H";

  document.querySelector('.RezultatetKornizesN3').innerText=parseInt(Korniza3N)-6+"[Ko]";
   
   //T-Shtylla
   document.querySelector('.T-shtyllaTresheN-1').innerText=vleraGjatesisTresheN-parseInt(SHN)+" V";
   document.querySelector('.T-shtyllaTresheN-2').innerText=vleraGjatesisTresheN-parseInt(SHN)+" V";
   document.querySelector('.Armatura-ShtyllaN-1').innerText=vleraGjatesisTresheN-parseInt(SHAN)+" V";
   document.querySelector('.Armatura-ShtyllaN-2').innerText=vleraGjatesisTresheN-parseInt(SHAN)+" V";


   //Adapteri
   document.querySelector('.AdapterTresheN-1').innerText=vleraGjatesisTresheN-parseInt(AN)+" V";
   document.querySelector('.AdapterTresheN-2').innerText=vleraGjatesisTresheN-parseInt(AN)+" V";
   document.querySelector('.Armatura-AdapteriN-1').innerText=vleraGjatesisTresheN-parseInt(AAN)+" V";
   document.querySelector('.Armatura-AdapteriN-2').innerText=vleraGjatesisTresheN-parseInt(AAN)+" V";

   

   let VleraAdpaterTresheNdarse1;
   let VleraAdpaterTresheNdarse2;
   let VleraAdpaterTresheNdarseP1;
   let VleraAdpaterTresheNdarseP2;

   if(KushtiTresheNdares1){
    VleraAdpaterTresheNdarse1=10;
    VleraAdpaterTresheNdarseP1=0;
    // Krahat dhe Armaturat
    let KrahuN31=document.querySelector('.KrahuN1-H').innerText=parseInt(vleraGjeresisTresheN1-60)+VleraAdpaterTresheNdarse1+" H";
    let KrahuN32=document.querySelector('.KrahuN2-H').innerText=parseInt(vleraGjeresisTresheN2-21)+VleraAdpaterTresheNdarse1+"H";
    let KrahuN33=document.querySelector('.KrahuN3-H').innerText=parseInt(vleraGjeresisTresheN3-60)+VleraAdpaterTresheNdarseP1+"H";
    document.querySelector('.ArmaturaKrahuNH1-3').innerText=vleraGjeresisTresheN1+VleraAdpaterTresheNdarse1-186+" H";
    document.querySelector('.ArmaturaKrahuNH2-3').innerText=vleraGjeresisTresheN2+VleraAdpaterTresheNdarse1-186+" H";
    document.querySelector('.ArmaturaKrahuNH3-3').innerText=vleraGjeresisTresheN3+VleraAdpaterTresheNdarseP1-186+" H";
    
    document.querySelector('.RezultatetKrahutN31').innerText=parseInt(KrahuN31)-6+"[Kr]";
    document.querySelector('.RezultatetKrahutN32').innerText=parseInt(KrahuN32)-6+"[Kr]";
    document.querySelector('.RezultatetKrahutN33').innerText=parseInt(KrahuN33)-6+"[Kr]";



    // Xhamat qe qelen
    document.querySelector('.XhamiKN3-H1').innerText=vleraGjeresisTresheN1+VleraAdpaterTresheNdarse1-parseInt(XhamiHN1);
    document.querySelector('.XhamiKN3-H2').innerText=vleraGjeresisTresheN2+VleraAdpaterTresheNdarse1-parseInt(XhamiHN2);
    document.querySelector('.XhamiKN3-H3').innerText=vleraGjeresisTresheN3+VleraAdpaterTresheNdarseP1-parseInt(XhamiHN3);

    // Xhamat qe nuk qelen
    document.querySelector('.XhamiKN3-H111').innerText=vleraGjeresisTresheN1+VleraAdpaterTresheNdarse1-parseInt(XhamiStatikHN1);
    document.querySelector('.XhamiKN3-H222').innerText=vleraGjeresisTresheN2+VleraAdpaterTresheNdarse1-parseInt(XhamiStatikHN2);
    document.querySelector('.XhamiKN3-H333').innerText=vleraGjeresisTresheN3+VleraAdpaterTresheNdarseP1-parseInt(XhamiStatikHN3);
  
   }else{
    let KrahuN321=document.querySelector('.KrahuN1-H').innerText=parseInt(vleraGjeresisTresheN1-parseInt(InputiKrahuHN1))+" H";
    let KrahuN322=document.querySelector('.KrahuN2-H').innerText=parseInt(vleraGjeresisTresheN2-parseInt(InputiKrahuHN2))+" H";
    let KrahuN323=document.querySelector('.KrahuN3-H').innerText=parseInt(vleraGjeresisTresheN3-parseInt(InputiKrahuHN3))+" H";
    document.querySelector('.ArmaturaKrahuNH1-3').innerText=vleraGjeresisTresheN1-parseInt(InputiKrahuAH1)+" H";
    document.querySelector('.ArmaturaKrahuNH2-3').innerText=vleraGjeresisTresheN2-parseInt(InputiKrahuAH2)+" H";
    document.querySelector('.ArmaturaKrahuNH3-3').innerText=vleraGjeresisTresheN3-parseInt(InputiKrahuAH3)+" H";
    
    document.querySelector('.RezultatetKrahutN31').innerText=parseInt(KrahuN321)-6+"[Kr]";
    document.querySelector('.RezultatetKrahutN32').innerText=parseInt(KrahuN322)-6+"[Kr]";
    document.querySelector('.RezultatetKrahutN33').innerText=parseInt(KrahuN323)-6+"[Kr]";


    // Xhamat qe qelen
    document.querySelector('.XhamiKN3-H1').innerText=vleraGjeresisTresheN1-parseInt(XhamiHN1);
    document.querySelector('.XhamiKN3-H2').innerText=vleraGjeresisTresheN2-parseInt(XhamiHN2);
    document.querySelector('.XhamiKN3-H3').innerText=vleraGjeresisTresheN3-parseInt(XhamiHN3);

    // Xhamat qe nuk qelen
    document.querySelector('.XhamiKN3-H111').innerText=vleraGjeresisTresheN1-parseInt(XhamiStatikHN1);
    document.querySelector('.XhamiKN3-H222').innerText=vleraGjeresisTresheN2-parseInt(XhamiStatikHN2);
    document.querySelector('.XhamiKN3-H333').innerText=vleraGjeresisTresheN3-parseInt(XhamiStatikHN3);
   }

if(KushtiTresheNdares2){
  VleraAdpaterTresheNdarse2=10;
  VleraAdpaterTresheNdarseP2=0;
  // Krahat dhe Armaturat
 let KrahuN331=document.querySelector('.KrahuN1-H').innerText=parseInt(vleraGjeresisTresheN1-parseInt(InputiKrahuHN1))+VleraAdpaterTresheNdarseP2+" H";
 let KrahuN332=document.querySelector('.KrahuN2-H').innerText=parseInt(vleraGjeresisTresheN2-parseInt(InputiKrahuHN2))+VleraAdpaterTresheNdarse2+" H";
 let KrahuN333=document.querySelector('.KrahuN3-H').innerText=parseInt(vleraGjeresisTresheN3-parseInt(InputiKrahuHN3))+VleraAdpaterTresheNdarse2+" H";
  document.querySelector('.ArmaturaKrahuNH1-3').innerText=vleraGjeresisTresheN1+VleraAdpaterTresheNdarseP2-parseInt(InputiKrahuAH1)+" H";
  document.querySelector('.ArmaturaKrahuNH2-3').innerText=vleraGjeresisTresheN2+VleraAdpaterTresheNdarse2-parseInt(InputiKrahuAH2)+" H";
  document.querySelector('.ArmaturaKrahuNH3-3').innerText=vleraGjeresisTresheN3+VleraAdpaterTresheNdarse2-parseInt(InputiKrahuAH3)+" H";
  

  document.querySelector('.RezultatetKrahutN31').innerText=parseInt(KrahuN331)-6+"[Kr]";
  document.querySelector('.RezultatetKrahutN32').innerText=parseInt(KrahuN332)-6+"[Kr]";
  document.querySelector('.RezultatetKrahutN33').innerText=parseInt(KrahuN333)-6+"[Kr]";

  // Xhamat qe qelen
  document.querySelector('.XhamiKN3-H1').innerText=vleraGjeresisTresheN1+VleraAdpaterTresheNdarseP2-parseInt(XhamiHN1);
  document.querySelector('.XhamiKN3-H2').innerText=vleraGjeresisTresheN2+VleraAdpaterTresheNdarse2-parseInt(XhamiHN2);
  document.querySelector('.XhamiKN3-H3').innerText=vleraGjeresisTresheN3+VleraAdpaterTresheNdarse2-parseInt(XhamiHN3);

  // Xhamat qe nuk qelen
  document.querySelector('.XhamiKN3-H111').innerText=vleraGjeresisTresheN1+VleraAdpaterTresheNdarseP2-parseInt(XhamiStatikHN1);
  document.querySelector('.XhamiKN3-H222').innerText=vleraGjeresisTresheN2+VleraAdpaterTresheNdarse2-parseInt(XhamiStatikHN2);
  document.querySelector('.XhamiKN3-H333').innerText=vleraGjeresisTresheN3+VleraAdpaterTresheNdarse2-parseInt(XhamiStatikHN3);
}


   //Krahu dhe armaturat e krahut
  let KrahuVertikal3N= document.querySelector('.KrahuN3-V').innerText=vleraGjatesisTresheN-parseInt(InputiKrahuVN)+" V";
  document.querySelector('.ArmaturaKrahuNV-3').innerText=vleraGjatesisTresheN-parseInt(InputiKrahuAVN)+" V";
 
  document.querySelector('.RezultatetVertikaleKrahuN3').innerText=parseInt(KrahuVertikal3N)-6+"[Kr]";


  //Xhami 1/2
  // qe qelen
  document.querySelector('.XhamiKN3-V1').innerText=vleraGjatesisTresheN-parseInt(XhamiVN);
  document.querySelector('.XhamiKN3-V2').innerText=vleraGjatesisTresheN-parseInt(XhamiVN);
  document.querySelector('.XhamiKN3-V3').innerText=vleraGjatesisTresheN-parseInt(XhamiVN);
 
  
  //qe nuk qelen
  document.querySelector('.XhamiKN3-V111').innerText=vleraGjatesisTresheN-parseInt(XhamiStatikVN);
  document.querySelector('.XhamiKN3-V222').innerText=vleraGjatesisTresheN-parseInt(XhamiStatikVN);
  document.querySelector('.XhamiKN3-V333').innerText=vleraGjatesisTresheN-parseInt(XhamiStatikVN);



   



   document.querySelector('.DritareNdarse-3').style.display="none";
   document.querySelector('.Dritare3-PerFoto').style.display="none";
   // document.querySelector('.Dritare2-PerFoto').style.display='none';
   // document.querySelector('.DritareNdarse-2').style.display="none";


   
}













//Hapja e butonave 

document.querySelector('.ButoniNdares31').addEventListener('click',OpenDyshe31);
document.querySelector('.ButoniNdares32').addEventListener('click',OpenDyshe32);
document.querySelector('.ButoniNdares33').addEventListener('click',OpenDyshe33);
document.querySelector('.ButoniNdares34').addEventListener('click',OpenDyshe34);
document.querySelector('.ButoniNdares35').addEventListener('click',OpenDyshe35);
document.querySelector('.ButoniNdares36').addEventListener('click',OpenDyshe36);
document.querySelector('.ButoniNdares37').addEventListener('click',OpenDyshe37);
document.querySelector('.ButoniNdares38').addEventListener('click',OpenDyshe38);
document.querySelector('.ButoniNdares39').addEventListener('click',OpenDyshe39);
document.querySelector('.ButoniNdares310').addEventListener('click',OpenDyshe310);
document.querySelector('.ButoniNdares311').addEventListener('click',OpenDyshe311);
document.querySelector('.ButoniNdares312').addEventListener('click',OpenDyshe312);
document.querySelector('.ButoniNdares313').addEventListener('click',OpenDyshe313);
document.querySelector('.ButoniNdares314').addEventListener('click',OpenDyshe314);
document.querySelector('.ButoniNdares315').addEventListener('click',OpenDyshe315);
document.querySelector('.ButoniNdares316').addEventListener('click',OpenDyshe316);
document.querySelector('.ButoniNdares317').addEventListener('click',OpenDyshe317);
document.querySelector('.ButoniNdares318').addEventListener('click',OpenDyshe318);
document.querySelector('.ButoniNdares319').addEventListener('click',OpenDyshe319);
document.querySelector('.ButoniNdares320').addEventListener('click',OpenDyshe320);
document.querySelector('.ButoniNdares321').addEventListener('click',OpenDyshe321);
document.querySelector('.ButoniNdares322').addEventListener('click',OpenDyshe322);
document.querySelector('.ButoniNdares323').addEventListener('click',OpenDyshe323);
document.querySelector('.ButoniNdares324').addEventListener('click',OpenDyshe324);
document.querySelector('.ButoniNdares325').addEventListener('click',OpenDyshe325);
document.querySelector('.ButoniNdares326').addEventListener('click',OpenDyshe326);
document.querySelector('.ButoniNdares327').addEventListener('click',OpenDyshe327);
document.querySelector('.ButoniNdares328').addEventListener('click',OpenDyshe328);
document.querySelector('.ButoniNdares329').addEventListener('click',OpenDyshe329);
document.querySelector('.ButoniNdares330').addEventListener('click',OpenDyshe330);
document.querySelector('.ButoniNdares331').addEventListener('click',OpenDyshe331);
document.querySelector('.ButoniNdares332').addEventListener('click',OpenDyshe332);
document.querySelector('.ButoniNdares333').addEventListener('click',OpenDyshe333);
document.querySelector('.ButoniNdares334').addEventListener('click',OpenDyshe334);
document.querySelector('.ButoniNdares335').addEventListener('click',OpenDyshe335);
document.querySelector('.ButoniNdares336').addEventListener('click',OpenDyshe336);
document.querySelector('.ButoniNdares337').addEventListener('click',OpenDyshe337);
document.querySelector('.ButoniNdares338').addEventListener('click',OpenDyshe338);
document.querySelector('.ButoniNdares339').addEventListener('click',OpenDyshe339);
document.querySelector('.ButoniNdares340').addEventListener('click',OpenDyshe340);
document.querySelector('.ButoniNdares341').addEventListener('click',OpenDyshe341);
document.querySelector('.ButoniNdares342').addEventListener('click',OpenDyshe342);
document.querySelector('.ButoniNdares343').addEventListener('click',OpenDyshe343);
document.querySelector('.ButoniNdares344').addEventListener('click',OpenDyshe344);
document.querySelector('.ButoniNdares345').addEventListener('click',OpenDyshe345);
document.querySelector('.ButoniNdares346').addEventListener('click',OpenDyshe346);
document.querySelector('.ButoniNdares347').addEventListener('click',OpenDyshe347);
document.querySelector('.ButoniNdares348').addEventListener('click',OpenDyshe348);
document.querySelector('.ButoniNdares349').addEventListener('click',OpenDyshe349);
document.querySelector('.ButoniNdares350').addEventListener('click',OpenDyshe350);
document.querySelector('.ButoniNdaresAA1').addEventListener('click',OpenDysheA1);
document.querySelector('.ButoniNdaresAA2').addEventListener('click',OpenDysheA2);
document.querySelector('.ButoniNdaresAA3').addEventListener('click',OpenDysheA3);
document.querySelector('.ButoniNdaresAA4').addEventListener('click',OpenDysheA4);
document.querySelector('.ButoniNdaresAA5').addEventListener('click',OpenDysheA5);
document.querySelector('.ButoniNdaresAA6').addEventListener('click',OpenDysheA6);
document.querySelector('.ButoniNdaresAA7').addEventListener('click',OpenDysheA7);
document.querySelector('.ButoniNdaresAA8').addEventListener('click',OpenDysheA8);
document.querySelector('.ButoniNdaresAA9').addEventListener('click',OpenDysheA9);
document.querySelector('.ButoniNdaresAA10').addEventListener('click',OpenDysheA10);
document.querySelector('.ButoniNdaresAA11').addEventListener('click',OpenDysheA11);
document.querySelector('.ButoniNdaresAA12').addEventListener('click',OpenDysheA12);






function OpenDyshe31(){
   document.querySelector('.DritareNdarse-3').style.display='block';
   document.FotoNdarese3.src="Foto-Dritare/Foto31.jpg"
   document.sliderN3.src='Foto-Dritare/Foto31.jpg';
   document.querySelector('.copaNKV-3').innerText='0';
   document.querySelector('.copaNKH1-3').innerText='0';
   document.querySelector('.copaNKH2-3').innerText='0';
   document.querySelector('.copaNKH3-3').innerText='0';


   document.querySelector('.KrahuN3-V').style.display="none";
   document.querySelector('.KrahuN1-H').style.display='none';
   document.querySelector('.KrahuN2-H').style.display='none';
   document.querySelector('.KrahuN3-H').style.display='none';
  
   document.querySelector('.ArmaturaKrahuNV-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNH1-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNH2-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNH3-3').style.display="none";

  document.querySelector('#XhamiKrahN3-1').style.display="none";
  document.querySelector('#XhamiKrahN3-2').style.display="none";
  document.querySelector('#XhamiKrahN3-3').style.display="none";

  document.querySelector('#XhamiPaKrahN3-11').style.display="block";
  document.querySelector('#XhamiPaKrahN3-22').style.display="block";
  document.querySelector('#XhamiPaKrahN3-33').style.display="block";

  document.querySelector('.copaXhKN1-3').style.display="none";
  document.querySelector('.copaXhKN2-3').style.display="none";
  document.querySelector('.copaXhKN3-3').style.display="none";

  document.querySelector('.copaXhPaKN1-3').style.display="block";
  document.querySelector('.copaXhPaKN2-3').style.display="block";
  document.querySelector('.copaXhPaKN3-3').style.display="block";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.XhPKN3-11').innerHTML="1";
   document.querySelector('.XhPKN3-22').innerHTML="2";
   document.querySelector('.XhPKN3-33').innerHTML="3";


  //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='none';
   document.querySelector('.RezultatetKrahutN32').style.display='none';
   document.querySelector('.RezultatetKrahutN33').style.display='none';

   document.querySelector('.RezultatetVertikaleKrahuN3').style.display='none';

}
function OpenDyshe32(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto32.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto32.jpg";
  document.querySelector('.copaNKV-3').innerText='2';
   document.querySelector('.copaNKH1-3').innerText='2';
   document.querySelector('.copaNKH2-3').innerText='0';
   document.querySelector('.copaNKH3-3').innerText='0';


   document.querySelector('.KrahuN3-V').style.display="inline";
   document.querySelector('.KrahuN1-H').style.display='inline';
   document.querySelector('.KrahuN2-H').style.display='none';
   document.querySelector('.KrahuN3-H').style.display='none';
  
   document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH2-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNH3-3').style.display="none";

 document.querySelector('#XhamiKrahN3-3').style.display="none";
 document.querySelector('#XhamiKrahN3-2').style.display="none";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-33').style.display="inline";

 document.querySelector('.copaXhKN3-3').style.display="none";
 document.querySelector('.copaXhKN2-3').style.display="none";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN3-3').style.display="inline";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-11').innerHTML="1";
  document.querySelector('.XhPKN3-22').innerHTML="2";
  document.querySelector('.XhPKN3-33').innerHTML="3";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='inline';
   document.querySelector('.RezultatetKrahutN32').style.display='none';
   document.querySelector('.RezultatetKrahutN33').style.display='none';


}
function OpenDyshe33(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto33.jpg"
  // document.querySelector   ('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto33.jpg";
  document.querySelector('.copaNKV-3').innerText='2';
  document.querySelector('.copaNKH1-3').innerText='0';
  document.querySelector('.copaNKH2-3').innerText='2';
  document.querySelector('.copaNKH3-3').innerText='0';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='none';
  document.querySelector('.KrahuN2-H').style.display='inline';
  document.querySelector('.KrahuN3-H').style.display='none';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="none";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="none";

 document.querySelector('#XhamiKrahN3-3').style.display="none";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="none";
 document.querySelector('#XhamiPaKrahN3-11').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="inline";

 document.querySelector('.copaXhKN3-3').style.display="none";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="inline";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhPKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
  document.querySelector('.XhPKN3-33').innerHTML="3";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='none';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='none';
  
}
function OpenDyshe34(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto34.jpg"
  // document.querySelector   ('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto34.jpg";
  document.querySelector('.copaNKV-3').innerText='2';
  document.querySelector('.copaNKH1-3').innerText='0';
  document.querySelector('.copaNKH2-3').innerText='0';
  document.querySelector('.copaNKH3-3').innerText='2';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='none';
  document.querySelector('.KrahuN2-H').style.display='none';
  document.querySelector('.KrahuN3-H').style.display='inline';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="none";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="none";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="none";
 document.querySelector('#XhamiKrahN3-1').style.display="none";
 document.querySelector('#XhamiPaKrahN3-11').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-22').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="none";
 document.querySelector('.copaXhKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhPKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-33').innerHTML="3";
  document.querySelector('.XhPKN3-22').innerHTML="2";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='none';
   document.querySelector('.RezultatetKrahutN32').style.display='none';
   document.querySelector('.RezultatetKrahutN33').style.display='inline';


}
function OpenDyshe35(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto35.jpg"
  // document.querySelector   ('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto35.jpg";
  document.querySelector('.copaNKV-3').innerText='2';
  document.querySelector('.copaNKH1-3').innerText='2';
  document.querySelector('.copaNKH2-3').innerText='0';
  document.querySelector('.copaNKH3-3').innerText='0';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='inline';
  document.querySelector('.KrahuN2-H').style.display='none';
  document.querySelector('.KrahuN3-H').style.display='none';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="none";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="none";

 document.querySelector('#XhamiKrahN3-3').style.display="none";
 document.querySelector('#XhamiKrahN3-2').style.display="none";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-33').style.display="inline";

 document.querySelector('.copaXhKN3-3').style.display="none";
 document.querySelector('.copaXhKN2-3').style.display="none";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN3-3').style.display="inline";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhPKN3-33').innerHTML="3";
 document.querySelector('.XhKN3-11').innerHTML="1";
  document.querySelector('.XhPKN3-22').innerHTML="2";

    //  Rezultatet e Krahave
    document.querySelector('.RezultatetKrahutN31').style.display='inline';
    document.querySelector('.RezultatetKrahutN32').style.display='none';
    document.querySelector('.RezultatetKrahutN33').style.display='none';
 
}
function OpenDyshe36(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto36.jpg"
  document.sliderN3.src="Foto-Dritare/Foto36.jpg";
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.copaNKV-3').innerText='2';
   document.querySelector('.copaNKH1-3').innerText='0';
   document.querySelector('.copaNKH2-3').innerText='2';
   document.querySelector('.copaNKH3-3').innerText='0';


   document.querySelector('.KrahuN3-V').style.display="inline";
   document.querySelector('.KrahuN1-H').style.display='none';
   document.querySelector('.KrahuN2-H').style.display='inline';
   document.querySelector('.KrahuN3-H').style.display='none';
  
   document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH1-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH3-3').style.display="none";

 document.querySelector('#XhamiKrahN3-3').style.display="none";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="none";
 document.querySelector('#XhamiPaKrahN3-11').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="inline";

 document.querySelector('.copaXhKN3-3').style.display="none";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="inline";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhPKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
  document.querySelector('.XhPKN3-33').innerHTML="3";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='none';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='none';
  
}function OpenDyshe37(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto37.jpg"
  // document.querySelector   ('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto37.jpg";
  document.querySelector('.copaNKV-3').innerText='2';
   document.querySelector('.copaNKH1-3').innerText='0';
   document.querySelector('.copaNKH2-3').innerText='0';
   document.querySelector('.copaNKH3-3').innerText='2';


   document.querySelector('.KrahuN3-V').style.display="inline";
   document.querySelector('.KrahuN1-H').style.display='none';
   document.querySelector('.KrahuN2-H').style.display='none';
   document.querySelector('.KrahuN3-H').style.display='inline';
  
   document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH1-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNH2-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="block";
 document.querySelector('#XhamiKrahN3-2').style.display="none";
 document.querySelector('#XhamiKrahN3-1').style.display="none";
 document.querySelector('#XhamiPaKrahN3-11').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-22').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="block";
 document.querySelector('.copaXhKN2-3').style.display="none";
 document.querySelector('.copaXhKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhPKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-33').innerHTML="3";
  document.querySelector('.XhPKN3-22').innerHTML="2";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='none';
   document.querySelector('.RezultatetKrahutN32').style.display='none';
   document.querySelector('.RezultatetKrahutN33').style.display='inline';
  
}function OpenDyshe38(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto38.jpg"
  // document.querySelector   ('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto38.jpg";
  document.querySelector('.copaNKV-3').innerText='4';
   document.querySelector('.copaNKH1-3').innerText='2';
   document.querySelector('.copaNKH2-3').innerText='2';
   document.querySelector('.copaNKH3-3').innerText='0';


   document.querySelector('.KrahuN3-V').style.display="inline";
   document.querySelector('.KrahuN1-H').style.display='inline';
   document.querySelector('.KrahuN2-H').style.display='inline';
   document.querySelector('.KrahuN3-H').style.display='none';
  
   document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH3-3').style.display="none";

 document.querySelector('#XhamiKrahN3-3').style.display="none";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="inline";

 document.querySelector('.copaXhKN3-3').style.display="none";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="inline";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-22').innerHTML="2";
 document.querySelector('.XhKN3-11').innerHTML="1";
  document.querySelector('.XhPKN3-33').innerHTML="3";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='inline';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='none';
  
}function OpenDyshe39(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto39.jpg"
  // document.querySelector   ('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto39.jpg";
  document.querySelector('.copaNKV-3').innerText='4';
   document.querySelector('.copaNKH1-3').innerText='0';
   document.querySelector('.copaNKH2-3').innerText='2';
   document.querySelector('.copaNKH3-3').innerText='2';


   document.querySelector('.KrahuN3-V').style.display="inline";
   document.querySelector('.KrahuN1-H').style.display='none';
   document.querySelector('.KrahuN2-H').style.display='inline';
   document.querySelector('.KrahuN3-H').style.display='inline';
  
   document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH1-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="none";
 document.querySelector('#XhamiPaKrahN3-11').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-33').innerHTML="3";
 document.querySelector('.XhKN3-22').innerHTML="2";
  document.querySelector('.XhPKN3-11').innerHTML="1";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='none';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='inline';
  
}function OpenDyshe310(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto310.jpg"
  // document.querySelector   ('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto310.jpg";
  document.querySelector('.copaNKV-3').innerText='4';
   document.querySelector('.copaNKH1-3').innerText='2';
   document.querySelector('.copaNKH2-3').innerText='2';
   document.querySelector('.copaNKH3-3').innerText='0';


   document.querySelector('.KrahuN3-V').style.display="inline";
   document.querySelector('.KrahuN1-H').style.display='inline';
   document.querySelector('.KrahuN2-H').style.display='inline';
   document.querySelector('.KrahuN3-H').style.display='none';
  
   document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH3-3').style.display="none";

 document.querySelector('#XhamiKrahN3-3').style.display="none";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="inline";

 document.querySelector('.copaXhKN3-3').style.display="none";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="inline";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-22').innerHTML="2";
 document.querySelector('.XhKN3-11').innerHTML="1";
  document.querySelector('.XhPKN3-33').innerHTML="3";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='inline';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='none';
  
}
function OpenDyshe311(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto311.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto311.jpg";
  
  document.querySelector('.copaNKV-3').innerText='4';
   document.querySelector('.copaNKH1-3').innerText='0';
   document.querySelector('.copaNKH2-3').innerText='2';
   document.querySelector('.copaNKH3-3').innerText='2';


   document.querySelector('.KrahuN3-V').style.display="inline";
   document.querySelector('.KrahuN1-H').style.display='none';
   document.querySelector('.KrahuN2-H').style.display='inline';
   document.querySelector('.KrahuN3-H').style.display='inline';
  
   document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH1-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="none";
 document.querySelector('#XhamiPaKrahN3-11').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-22').innerHTML="2";
 document.querySelector('.XhKN3-33').innerHTML="3";
  document.querySelector('.XhPKN3-11').innerHTML="1";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='none';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='inline';
  
}



function OpenDysheA1(){
   document.querySelector('.DritareNdarse-3').style.display='block';
   document.FotoNdarese3.src="Foto-Dritare/Adapteri-31.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderN3.src="Foto-Dritare/Adapteri-31.jpg";
   
   document.querySelector('.copaNKV-3').innerText='6';
    document.querySelector('.copaNKH1-3').innerText='2';
    document.querySelector('.copaNKH2-3').innerText='2';
    document.querySelector('.copaNKH3-3').innerText='2';
 
 
    document.querySelector('.KrahuN3-V').style.display="inline";
    document.querySelector('.KrahuN1-H').style.display='inline';
    document.querySelector('.KrahuN2-H').style.display='inline';
    document.querySelector('.KrahuN3-H').style.display='inline';
   
    document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";
 
  document.querySelector('#XhamiKrahN3-3').style.display="inline";
  document.querySelector('#XhamiKrahN3-2').style.display="inline";
  document.querySelector('#XhamiKrahN3-1').style.display="inline";
  document.querySelector('#XhamiPaKrahN3-11').style.display="none";
  document.querySelector('#XhamiPaKrahN3-22').style.display="none";
  document.querySelector('#XhamiPaKrahN3-33').style.display="none";
 
  document.querySelector('.copaXhKN3-3').style.display="inline";
  document.querySelector('.copaXhKN1-3').style.display="inline";
  document.querySelector('.copaXhKN2-3').style.display="inline";
  document.querySelector('.copaXhPaKN1-3').style.display="none";
  document.querySelector('.copaXhPaKN2-3').style.display="none";
  document.querySelector('.copaXhPaKN3-3').style.display="none";
 
  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhKN3-11').innerHTML="1";
  document.querySelector('.XhKN3-22').innerHTML="2";
   document.querySelector('.XhKN3-33').innerHTML="3";

    //  Rezultatet e Krahave
    document.querySelector('.RezultatetKrahutN31').style.display='inline';
    document.querySelector('.RezultatetKrahutN32').style.display='inline';
    document.querySelector('.RezultatetKrahutN33').style.display='inline';
   

 
 }

 function OpenDysheA2(){
   document.querySelector('.DritareNdarse-3').style.display='block';
   document.FotoNdarese3.src="Foto-Dritare/Adapteri-32.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderN3.src="Foto-Dritare/Adapteri-32.jpg";
   
   document.querySelector('.copaNKV-3').innerText='6';
    document.querySelector('.copaNKH1-3').innerText='2';
    document.querySelector('.copaNKH2-3').innerText='2';
    document.querySelector('.copaNKH3-3').innerText='2';
 
 
    document.querySelector('.KrahuN3-V').style.display="inline";
    document.querySelector('.KrahuN1-H').style.display='inline';
    document.querySelector('.KrahuN2-H').style.display='inline';
    document.querySelector('.KrahuN3-H').style.display='inline';
   
    document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";
 
  document.querySelector('#XhamiKrahN3-3').style.display="inline";
  document.querySelector('#XhamiKrahN3-2').style.display="inline";
  document.querySelector('#XhamiKrahN3-1').style.display="inline";
  document.querySelector('#XhamiPaKrahN3-11').style.display="none";
  document.querySelector('#XhamiPaKrahN3-22').style.display="none";
  document.querySelector('#XhamiPaKrahN3-33').style.display="none";
 
  document.querySelector('.copaXhKN3-3').style.display="inline";
  document.querySelector('.copaXhKN1-3').style.display="inline";
  document.querySelector('.copaXhKN2-3').style.display="inline";
  document.querySelector('.copaXhPaKN1-3').style.display="none";
  document.querySelector('.copaXhPaKN2-3').style.display="none";
  document.querySelector('.copaXhPaKN3-3').style.display="none";
 
  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhKN3-11').innerHTML="1";
  document.querySelector('.XhKN3-22').innerHTML="2";
   document.querySelector('.XhKN3-33').innerHTML="3";

    //  Rezultatet e Krahave
    document.querySelector('.RezultatetKrahutN31').style.display='inline';
    document.querySelector('.RezultatetKrahutN32').style.display='inline';
    document.querySelector('.RezultatetKrahutN33').style.display='inline';
 }
 function OpenDysheA3(){
   document.querySelector('.DritareNdarse-3').style.display='block';
   document.FotoNdarese3.src="Foto-Dritare/Adapteri-33.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderN3.src="Foto-Dritare/Adapteri-33.jpg";
   
   document.querySelector('.copaNKV-3').innerText='6';
    document.querySelector('.copaNKH1-3').innerText='2';
    document.querySelector('.copaNKH2-3').innerText='2';
    document.querySelector('.copaNKH3-3').innerText='2';
 
 
    document.querySelector('.KrahuN3-V').style.display="inline";
    document.querySelector('.KrahuN1-H').style.display='inline';
    document.querySelector('.KrahuN2-H').style.display='inline';
    document.querySelector('.KrahuN3-H').style.display='inline';
   
    document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";
 
  document.querySelector('#XhamiKrahN3-3').style.display="inline";
  document.querySelector('#XhamiKrahN3-2').style.display="inline";
  document.querySelector('#XhamiKrahN3-1').style.display="inline";
  document.querySelector('#XhamiPaKrahN3-11').style.display="none";
  document.querySelector('#XhamiPaKrahN3-22').style.display="none";
  document.querySelector('#XhamiPaKrahN3-33').style.display="none";
 
  document.querySelector('.copaXhKN3-3').style.display="inline";
  document.querySelector('.copaXhKN1-3').style.display="inline";
  document.querySelector('.copaXhKN2-3').style.display="inline";
  document.querySelector('.copaXhPaKN1-3').style.display="none";
  document.querySelector('.copaXhPaKN2-3').style.display="none";
  document.querySelector('.copaXhPaKN3-3').style.display="none";
 
  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhKN3-11').innerHTML="1";
  document.querySelector('.XhKN3-22').innerHTML="2";
   document.querySelector('.XhKN3-33').innerHTML="3";

    //  Rezultatet e Krahave
    document.querySelector('.RezultatetKrahutN31').style.display='inline';
    document.querySelector('.RezultatetKrahutN32').style.display='inline';
    document.querySelector('.RezultatetKrahutN33').style.display='inline';
   
 }
 function OpenDysheA4(){
   document.querySelector('.DritareNdarse-3').style.display='block';
   document.FotoNdarese3.src="Foto-Dritare/Adapteri-34.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderN3.src="Foto-Dritare/Adapteri-34.jpg";
   
   document.querySelector('.copaNKV-3').innerText='4';
    document.querySelector('.copaNKH1-3').innerText='2';
    document.querySelector('.copaNKH2-3').innerText='2';
    document.querySelector('.copaNKH3-3').innerText='0';
 
 
    document.querySelector('.KrahuN3-V').style.display="inline";
    document.querySelector('.KrahuN1-H').style.display='inline';
    document.querySelector('.KrahuN2-H').style.display='inline';
    document.querySelector('.KrahuN3-H').style.display='none';
   
    document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH3-3').style.display="none";
 
  document.querySelector('#XhamiKrahN3-3').style.display="none";
  document.querySelector('#XhamiKrahN3-2').style.display="inline";
  document.querySelector('#XhamiKrahN3-1').style.display="inline";
  document.querySelector('#XhamiPaKrahN3-11').style.display="none";
  document.querySelector('#XhamiPaKrahN3-22').style.display="none";
  document.querySelector('#XhamiPaKrahN3-33').style.display="inline";
 
  document.querySelector('.copaXhKN3-3').style.display="none";
  document.querySelector('.copaXhKN1-3').style.display="inline";
  document.querySelector('.copaXhKN2-3').style.display="inline";
  document.querySelector('.copaXhPaKN1-3').style.display="none";
  document.querySelector('.copaXhPaKN2-3').style.display="none";
  document.querySelector('.copaXhPaKN3-3').style.display="inline";
 
  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhKN3-22').innerHTML="2";
  document.querySelector('.XhKN3-11').innerHTML="1";
   document.querySelector('.XhPKN3-33').innerHTML="3";

    //  Rezultatet e Krahave
    document.querySelector('.RezultatetKrahutN31').style.display='inline';
    document.querySelector('.RezultatetKrahutN32').style.display='inline';
    document.querySelector('.RezultatetKrahutN33').style.display='none';
   
 }
 function OpenDysheA5(){
   document.querySelector('.DritareNdarse-3').style.display='block';
   document.FotoNdarese3.src="Foto-Dritare/Adapteri-35.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderN3.src="Foto-Dritare/Adapteri-35.jpg";
   
   document.querySelector('.copaNKV-3').innerText='4';
    document.querySelector('.copaNKH1-3').innerText='0';
    document.querySelector('.copaNKH2-3').innerText='2';
    document.querySelector('.copaNKH3-3').innerText='2';
 
 
    document.querySelector('.KrahuN3-V').style.display="inline";
    document.querySelector('.KrahuN1-H').style.display='none';
    document.querySelector('.KrahuN2-H').style.display='inline';
    document.querySelector('.KrahuN3-H').style.display='inline';
   
    document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH1-3').style.display="none";
   document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";
 
  document.querySelector('#XhamiKrahN3-3').style.display="inline";
  document.querySelector('#XhamiKrahN3-2').style.display="inline";
  document.querySelector('#XhamiKrahN3-1').style.display="none";
  document.querySelector('#XhamiPaKrahN3-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN3-22').style.display="none";
  document.querySelector('#XhamiPaKrahN3-33').style.display="none";
 
  document.querySelector('.copaXhKN3-3').style.display="inline";
  document.querySelector('.copaXhKN2-3').style.display="inline";
  document.querySelector('.copaXhKN1-3').style.display="none";
  document.querySelector('.copaXhPaKN1-3').style.display="inline";
  document.querySelector('.copaXhPaKN2-3').style.display="none";
  document.querySelector('.copaXhPaKN3-3').style.display="none";
 
  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhKN3-22').innerHTML="2";
  document.querySelector('.XhKN3-33').innerHTML="3";
   document.querySelector('.XhPKN3-11').innerHTML="1";

    //  Rezultatet e Krahave
    document.querySelector('.RezultatetKrahutN31').style.display='none';
    document.querySelector('.RezultatetKrahutN32').style.display='inline';
    document.querySelector('.RezultatetKrahutN33').style.display='inline';
   
 }
 function OpenDysheA6(){
   document.querySelector('.DritareNdarse-3').style.display='block';
   document.FotoNdarese3.src="Foto-Dritare/Adapteri-36.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderN3.src="Foto-Dritare/Adapteri-36.jpg";
   
   document.querySelector('.copaNKV-3').innerText='4';
   document.querySelector('.copaNKH1-3').innerText='0';
   document.querySelector('.copaNKH2-3').innerText='2';
   document.querySelector('.copaNKH3-3').innerText='2';


   document.querySelector('.KrahuN3-V').style.display="inline";
   document.querySelector('.KrahuN1-H').style.display='none';
   document.querySelector('.KrahuN2-H').style.display='inline';
   document.querySelector('.KrahuN3-H').style.display='inline';
  
   document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH1-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="none";
 document.querySelector('#XhamiPaKrahN3-11').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-22').innerHTML="2";
 document.querySelector('.XhKN3-33').innerHTML="3";
  document.querySelector('.XhPKN3-11').innerHTML="1";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='none';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='inline';
   
 }
 function OpenDysheA7(){
   document.querySelector('.DritareNdarse-3').style.display='block';
   document.FotoNdarese3.src="Foto-Dritare/Adapteri-37.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderN3.src="Foto-Dritare/Adapteri-37.jpg";
   
   document.querySelector('.copaNKV-3').innerText='4';
    document.querySelector('.copaNKH1-3').innerText='0';
    document.querySelector('.copaNKH2-3').innerText='2';
    document.querySelector('.copaNKH3-3').innerText='2';
 
 
    document.querySelector('.KrahuN3-V').style.display="inline";
    document.querySelector('.KrahuN1-H').style.display='none';
    document.querySelector('.KrahuN2-H').style.display='inline';
    document.querySelector('.KrahuN3-H').style.display='inline';
   
    document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH1-3').style.display="none";
   document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";
 
  document.querySelector('#XhamiKrahN3-3').style.display="inline";
  document.querySelector('#XhamiKrahN3-2').style.display="inline";
  document.querySelector('#XhamiKrahN3-1').style.display="none";
  document.querySelector('#XhamiPaKrahN3-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN3-22').style.display="none";
  document.querySelector('#XhamiPaKrahN3-33').style.display="none";
 
  document.querySelector('.copaXhKN3-3').style.display="inline";
  document.querySelector('.copaXhKN2-3').style.display="inline";
  document.querySelector('.copaXhKN1-3').style.display="none";
  document.querySelector('.copaXhPaKN1-3').style.display="inline";
  document.querySelector('.copaXhPaKN2-3').style.display="none";
  document.querySelector('.copaXhPaKN3-3').style.display="none";
 
  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhKN3-22').innerHTML="2";
  document.querySelector('.XhKN3-33').innerHTML="3";
   document.querySelector('.XhPKN3-11').innerHTML="1";

    //  Rezultatet e Krahave
    document.querySelector('.RezultatetKrahutN31').style.display='none';
    document.querySelector('.RezultatetKrahutN32').style.display='inline';
    document.querySelector('.RezultatetKrahutN33').style.display='inline';
 }
 function OpenDysheA8(){
   document.querySelector('.DritareNdarse-3').style.display='block';
   document.FotoNdarese3.src="Foto-Dritare/Adapteri-38.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.sliderN3.src="Foto-Dritare/Adapteri-38.jpg";
   
   document.querySelector('.copaNKV-3').innerText='4';
    document.querySelector('.copaNKH1-3').innerText='0';
    document.querySelector('.copaNKH2-3').innerText='2';
    document.querySelector('.copaNKH3-3').innerText='2';
 
 
    document.querySelector('.KrahuN3-V').style.display="inline";
    document.querySelector('.KrahuN1-H').style.display='none';
    document.querySelector('.KrahuN2-H').style.display='inline';
    document.querySelector('.KrahuN3-H').style.display='inline';
   
    document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH1-3').style.display="none";
   document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
   document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";
 
  document.querySelector('#XhamiKrahN3-3').style.display="inline";
  document.querySelector('#XhamiKrahN3-2').style.display="inline";
  document.querySelector('#XhamiKrahN3-1').style.display="none";
  document.querySelector('#XhamiPaKrahN3-11').style.display="inline";
  document.querySelector('#XhamiPaKrahN3-22').style.display="none";
  document.querySelector('#XhamiPaKrahN3-33').style.display="none";
 
  document.querySelector('.copaXhKN3-3').style.display="inline";
  document.querySelector('.copaXhKN2-3').style.display="inline";
  document.querySelector('.copaXhKN1-3').style.display="none";
  document.querySelector('.copaXhPaKN1-3').style.display="inline";
  document.querySelector('.copaXhPaKN2-3').style.display="none";
  document.querySelector('.copaXhPaKN3-3').style.display="none";
 
  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhKN3-22').innerHTML="2";
  document.querySelector('.XhKN3-33').innerHTML="3";
   document.querySelector('.XhPKN3-11').innerHTML="1";
    //  Rezultatet e Krahave
    document.querySelector('.RezultatetKrahutN31').style.display='none';
    document.querySelector('.RezultatetKrahutN32').style.display='inline';
    document.querySelector('.RezultatetKrahutN33').style.display='inline';
 }

 function OpenDysheA9(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Adapteri-39.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Adapteri-39.jpg";
  
  document.querySelector('.copaNKV-3').innerText='6';
   document.querySelector('.copaNKH1-3').innerText='2';
   document.querySelector('.copaNKH2-3').innerText='2';
   document.querySelector('.copaNKH3-3').innerText='2';


   document.querySelector('.KrahuN3-V').style.display="inline";
   document.querySelector('.KrahuN1-H').style.display='inline';
   document.querySelector('.KrahuN2-H').style.display='inline';
   document.querySelector('.KrahuN3-H').style.display='inline';
  
   document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
  document.querySelector('.XhKN3-33').innerHTML="3";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='inline';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='inline';
  
}
function OpenDysheA10(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Adapteri-310.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Adapteri-310.jpg";
  
  document.querySelector('.copaNKV-3').innerText='6';
   document.querySelector('.copaNKH1-3').innerText='2';
   document.querySelector('.copaNKH2-3').innerText='2';
   document.querySelector('.copaNKH3-3').innerText='2';


   document.querySelector('.KrahuN3-V').style.display="inline";
   document.querySelector('.KrahuN1-H').style.display='inline';
   document.querySelector('.KrahuN2-H').style.display='inline';
   document.querySelector('.KrahuN3-H').style.display='inline';
  
   document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
  document.querySelector('.XhKN3-33').innerHTML="3";
  

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='inline';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDysheA11(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Adapteri-311.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Adapteri-311.jpg";
  
  document.querySelector('.copaNKV-3').innerText='6';
   document.querySelector('.copaNKH1-3').innerText='2';
   document.querySelector('.copaNKH2-3').innerText='2';
   document.querySelector('.copaNKH3-3').innerText='2';


   document.querySelector('.KrahuN3-V').style.display="inline";
   document.querySelector('.KrahuN1-H').style.display='inline';
   document.querySelector('.KrahuN2-H').style.display='inline';
   document.querySelector('.KrahuN3-H').style.display='inline';
  
   document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
  document.querySelector('.XhKN3-33').innerHTML="3";


   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='inline';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='inline';
  
}
function OpenDysheA12(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Adapteri-312.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Adapteri-312.jpg";
  
  document.querySelector('.copaNKV-3').innerText='6';
   document.querySelector('.copaNKH1-3').innerText='2';
   document.querySelector('.copaNKH2-3').innerText='2';
   document.querySelector('.copaNKH3-3').innerText='2';


   document.querySelector('.KrahuN3-V').style.display="inline";
   document.querySelector('.KrahuN1-H').style.display='inline';
   document.querySelector('.KrahuN2-H').style.display='inline';
   document.querySelector('.KrahuN3-H').style.display='inline';
  
   document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
  document.querySelector('.XhKN3-33').innerHTML="3";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='inline';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='inline';
  
}






function OpenDyshe312(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto312.jpg"
  // document.querySelector   ('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto312.jpg";

  document.querySelector('.copaNKV-3').innerText='6';
   document.querySelector('.copaNKH1-3').innerText='2';
   document.querySelector('.copaNKH2-3').innerText='2';
   document.querySelector('.copaNKH3-3').innerText='2';


   document.querySelector('.KrahuN3-V').style.display="inline";
   document.querySelector('.KrahuN1-H').style.display='inline';
   document.querySelector('.KrahuN2-H').style.display='inline';
   document.querySelector('.KrahuN3-H').style.display='inline';
  
   document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
 document.querySelector('.XhKN3-33').innerHTML="3";

  //  Rezultatet e Krahave
  document.querySelector('.RezultatetKrahutN31').style.display='inline';
  document.querySelector('.RezultatetKrahutN32').style.display='inline';
  document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDyshe313(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto313.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto313.jpg";
  
  document.querySelector('.copaNKV-3').innerText='6';
  document.querySelector('.copaNKH1-3').innerText='2';
  document.querySelector('.copaNKH2-3').innerText='2';
  document.querySelector('.copaNKH3-3').innerText='2';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='inline';
  document.querySelector('.KrahuN2-H').style.display='inline';
  document.querySelector('.KrahuN3-H').style.display='inline';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
 document.querySelector('.XhKN3-33').innerHTML="3";

  //  Rezultatet e Krahave
  document.querySelector('.RezultatetKrahutN31').style.display='inline';
  document.querySelector('.RezultatetKrahutN32').style.display='inline';
  document.querySelector('.RezultatetKrahutN33').style.display='inline';
  
}
function OpenDyshe314(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto314.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto314.jpg";
  document.querySelector('.copaNKV-3').innerText='2';
  document.querySelector('.copaNKH1-3').innerText='2';
  document.querySelector('.copaNKH2-3').innerText='0';
  document.querySelector('.copaNKH3-3').innerText='0';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='inline';
  document.querySelector('.KrahuN2-H').style.display='none';
  document.querySelector('.KrahuN3-H').style.display='none';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="none";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="none";

 document.querySelector('#XhamiKrahN3-3').style.display="none";
 document.querySelector('#XhamiKrahN3-2').style.display="none";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-33').style.display="inline";

 document.querySelector('.copaXhKN3-3').style.display="none";
 document.querySelector('.copaXhKN2-3').style.display="none";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN3-3').style.display="inline";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-11').innerHTML="1";
  document.querySelector('.XhPKN3-22').innerHTML="2";
  document.querySelector('.XhPKN3-33').innerHTML="3";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='inline';
   document.querySelector('.RezultatetKrahutN32').style.display='none';
   document.querySelector('.RezultatetKrahutN33').style.display='none';
}
function OpenDyshe315(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto315.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto315.jpg";
  
  document.querySelector('.copaNKV-3').innerText='4';
  document.querySelector('.copaNKH1-3').innerText='2';
  document.querySelector('.copaNKH2-3').innerText='2';
  document.querySelector('.copaNKH3-3').innerText='0';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='inline';
  document.querySelector('.KrahuN2-H').style.display='inline';
  document.querySelector('.KrahuN3-H').style.display='none';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="none";

 document.querySelector('#XhamiKrahN3-3').style.display="none";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="inline";

 document.querySelector('.copaXhKN3-3').style.display="none";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="inline";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-22').innerHTML="2";
 document.querySelector('.XhKN3-11').innerHTML="1";
  document.querySelector('.XhPKN3-33').innerHTML="3";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='inline';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='none';
}
function OpenDyshe316(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto316.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto316.jpg";
  
  document.querySelector('.copaNKV-3').innerText='4';
  document.querySelector('.copaNKH1-3').innerText='2';
  document.querySelector('.copaNKH2-3').innerText='0';
  document.querySelector('.copaNKH3-3').innerText='2';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='inline';
  document.querySelector('.KrahuN2-H').style.display='none';
  document.querySelector('.KrahuN3-H').style.display='inline';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="none";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="none";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="none";
 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-33').innerHTML="3";
  document.querySelector('.XhPKN3-22').innerHTML="2";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='inline';
   document.querySelector('.RezultatetKrahutN32').style.display='none';
   document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDyshe317(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto317.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto317.jpg";
  
  document.querySelector('.copaNKV-3').innerText='6';
  document.querySelector('.copaNKH1-3').innerText='2';
  document.querySelector('.copaNKH2-3').innerText='2';
  document.querySelector('.copaNKH3-3').innerText='2';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='inline';
  document.querySelector('.KrahuN2-H').style.display='inline';
  document.querySelector('.KrahuN3-H').style.display='inline';
 
 document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
 document.querySelector('.XhKN3-33').innerHTML="3";

  //  Rezultatet e Krahave
  document.querySelector('.RezultatetKrahutN31').style.display='inline';
  document.querySelector('.RezultatetKrahutN32').style.display='inline';
  document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDyshe318(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto318.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto318.jpg";
  
  document.querySelector('.copaNKV-3').innerText='2';
   document.querySelector('.copaNKH1-3').innerText='0';
   document.querySelector('.copaNKH2-3').innerText='2';
   document.querySelector('.copaNKH3-3').innerText='0';


   document.querySelector('.KrahuN3-V').style.display="inline";
   document.querySelector('.KrahuN1-H').style.display='none';
   document.querySelector('.KrahuN2-H').style.display='inline';
   document.querySelector('.KrahuN3-H').style.display='none';
  
   document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH1-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH3-3').style.display="none";

 document.querySelector('#XhamiKrahN3-3').style.display="none";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="none";
 document.querySelector('#XhamiPaKrahN3-11').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="inline";

 document.querySelector('.copaXhKN3-3').style.display="none";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="inline";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhPKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
  document.querySelector('.XhPKN3-33').innerHTML="3";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='none';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='none';

}
function OpenDyshe319(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto319.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto319.jpg";
  document.querySelector('.copaNKV-3').innerText='4';
   document.querySelector('.copaNKH1-3').innerText='2';
   document.querySelector('.copaNKH2-3').innerText='2';
   document.querySelector('.copaNKH3-3').innerText='0';


   document.querySelector('.KrahuN3-V').style.display="inline";
   document.querySelector('.KrahuN1-H').style.display='inline';
   document.querySelector('.KrahuN2-H').style.display='inline';
   document.querySelector('.KrahuN3-H').style.display='none';
  
   document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH3-3').style.display="none";

 document.querySelector('#XhamiKrahN3-3').style.display="none";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="inline";

 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhKN3-3').style.display="none";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="inline";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
  document.querySelector('.XhPKN3-33').innerHTML="3";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='inline';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='none';
}
function OpenDyshe320(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto320.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto320.jpg";
  
  document.querySelector('.copaNKV-3').innerText='4';
  document.querySelector('.copaNKH1-3').innerText='0';
  document.querySelector('.copaNKH2-3').innerText='2';
  document.querySelector('.copaNKH3-3').innerText='2';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='none';
  document.querySelector('.KrahuN2-H').style.display='inline';
  document.querySelector('.KrahuN3-H').style.display='inline';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="none";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="none";
 document.querySelector('#XhamiPaKrahN3-11').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN1-3').style.display="none";
 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-22').innerHTML="2";
 document.querySelector('.XhKN3-33').innerHTML="3";
  document.querySelector('.XhPKN3-11').innerHTML="1";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='none';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='inline';
}


function OpenDyshe321(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto321.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto321.jpg";
  
  document.querySelector('.copaNKV-3').innerText='6';
  document.querySelector('.copaNKH1-3').innerText='2';
  document.querySelector('.copaNKH2-3').innerText='2';
  document.querySelector('.copaNKH3-3').innerText='2';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='inline';
  document.querySelector('.KrahuN2-H').style.display='inline';
  document.querySelector('.KrahuN3-H').style.display='inline';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
 document.querySelector('.XhKN3-33').innerHTML="3";
  //  Rezultatet e Krahave
  document.querySelector('.RezultatetKrahutN31').style.display='inline';
  document.querySelector('.RezultatetKrahutN32').style.display='inline';
  document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDyshe322(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto322.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto322.jpg";
  
  document.querySelector('.copaNKV-3').innerText='2';
  document.querySelector('.copaNKH1-3').innerText='0';
  document.querySelector('.copaNKH2-3').innerText='0';
  document.querySelector('.copaNKH3-3').innerText='2';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='none';
  document.querySelector('.KrahuN2-H').style.display='none';
  document.querySelector('.KrahuN3-H').style.display='inline';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="none";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="none";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="block";
 document.querySelector('#XhamiKrahN3-2').style.display="none";
 document.querySelector('#XhamiKrahN3-1').style.display="none";
 document.querySelector('#XhamiPaKrahN3-11').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-22').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="block";
 document.querySelector('.copaXhKN2-3').style.display="none";
 document.querySelector('.copaXhKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhPKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-33').innerHTML="3";
  document.querySelector('.XhPKN3-22').innerHTML="2";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='none';
   document.querySelector('.RezultatetKrahutN32').style.display='none';
   document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDyshe323(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto323.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto323.jpg";
  
  document.querySelector('.copaNKV-3').innerText='4';
  document.querySelector('.copaNKH1-3').innerText='0';
  document.querySelector('.copaNKH2-3').innerText='2';
  document.querySelector('.copaNKH3-3').innerText='2';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='none';
  document.querySelector('.KrahuN2-H').style.display='inline';
  document.querySelector('.KrahuN3-H').style.display='inline';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="none";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="none";
 document.querySelector('#XhamiPaKrahN3-11').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-33').innerHTML="3";
 document.querySelector('.XhKN3-22').innerHTML="2";
  document.querySelector('.XhPKN3-11').innerHTML="1";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='none';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDyshe324(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto324.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto324.jpg";
  
  document.querySelector('.copaNKV-3').innerText='4';
  document.querySelector('.copaNKH1-3').innerText='2';
  document.querySelector('.copaNKH2-3').innerText='0';
  document.querySelector('.copaNKH3-3').innerText='2';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='inline';
  document.querySelector('.KrahuN2-H').style.display='none';
  document.querySelector('.KrahuN3-H').style.display='inline';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="none";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="none";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="none";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-33').innerHTML="3";
  document.querySelector('.XhPKN3-22').innerHTML="2";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='inline';
   document.querySelector('.RezultatetKrahutN32').style.display='none';
   document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDyshe325(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto325.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto325.jpg";
  
  document.querySelector('.copaNKV-3').innerText='6';
   document.querySelector('.copaNKH1-3').innerText='2';
   document.querySelector('.copaNKH2-3').innerText='2';
   document.querySelector('.copaNKH3-3').innerText='2';


   document.querySelector('.KrahuN3-V').style.display="inline";
   document.querySelector('.KrahuN1-H').style.display='inline';
   document.querySelector('.KrahuN2-H').style.display='inline';
   document.querySelector('.KrahuN3-H').style.display='inline';
  
   document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
 document.querySelector('.XhKN3-33').innerHTML="3";

  //  Rezultatet e Krahave
  document.querySelector('.RezultatetKrahutN31').style.display='inline';
  document.querySelector('.RezultatetKrahutN32').style.display='inline';
  document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDyshe326(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto319.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto319.jpg";
  document.querySelector('.copaNKV-3').innerText='4';
  document.querySelector('.copaNKH1-3').innerText='2';
  document.querySelector('.copaNKH2-3').innerText='2';
  document.querySelector('.copaNKH3-3').innerText='0';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='inline';
  document.querySelector('.KrahuN2-H').style.display='inline';
  document.querySelector('.KrahuN3-H').style.display='none';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="none";

 document.querySelector('#XhamiKrahN3-3').style.display="none";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="inline";

 document.querySelector('.copaXhKN3-3').style.display="none";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="inline";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
  document.querySelector('.XhPKN3-33').innerHTML="3";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='inline';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='none';
}

function OpenDyshe327(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto327.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto327.jpg";
  
  document.querySelector('.copaNKV-3').innerText='6';
  document.querySelector('.copaNKH1-3').innerText='2';
  document.querySelector('.copaNKH2-3').innerText='2';
  document.querySelector('.copaNKH3-3').innerText='2';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='inline';
  document.querySelector('.KrahuN2-H').style.display='inline';
  document.querySelector('.KrahuN3-H').style.display='inline';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
 document.querySelector('.XhKN3-33').innerHTML="3";

  //  Rezultatet e Krahave
  document.querySelector('.RezultatetKrahutN31').style.display='inline';
  document.querySelector('.RezultatetKrahutN32').style.display='inline';
  document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDyshe328(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto328.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto328.jpg";
  
  document.querySelector('.copaNKV-3').innerText='4';
  document.querySelector('.copaNKH1-3').innerText='0';
  document.querySelector('.copaNKH2-3').innerText='2';
  document.querySelector('.copaNKH3-3').innerText='2';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='none';
  document.querySelector('.KrahuN2-H').style.display='inline';
  document.querySelector('.KrahuN3-H').style.display='inline';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="none";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="none";
 document.querySelector('#XhamiPaKrahN3-11').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN1-3').style.display="none";
 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-22').innerHTML="2";
 document.querySelector('.XhKN3-33').innerHTML="3";
  document.querySelector('.XhPKN3-11').innerHTML="1";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='none';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDyshe329(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto329.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto329.jpg";
  
  document.querySelector('.copaNKV-3').innerText='6';
   document.querySelector('.copaNKH1-3').innerText='2';
   document.querySelector('.copaNKH2-3').innerText='2';
   document.querySelector('.copaNKH3-3').innerText='2';


   document.querySelector('.KrahuN3-V').style.display="inline";
   document.querySelector('.KrahuN1-H').style.display='inline';
   document.querySelector('.KrahuN2-H').style.display='inline';
   document.querySelector('.KrahuN3-H').style.display='inline';
  
   document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
 document.querySelector('.XhKN3-33').innerHTML="3";

  //  Rezultatet e Krahave
  document.querySelector('.RezultatetKrahutN31').style.display='inline';
  document.querySelector('.RezultatetKrahutN32').style.display='inline';
  document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDyshe330(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto330.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto330.jpg";
  
  document.querySelector('.copaNKV-3').innerText='6';
  document.querySelector('.copaNKH1-3').innerText='2';
  document.querySelector('.copaNKH2-3').innerText='2';
  document.querySelector('.copaNKH3-3').innerText='2';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='inline';
  document.querySelector('.KrahuN2-H').style.display='inline';
  document.querySelector('.KrahuN3-H').style.display='inline';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
 document.querySelector('.XhKN3-33').innerHTML="3";

  //  Rezultatet e Krahave
  document.querySelector('.RezultatetKrahutN31').style.display='inline';
  document.querySelector('.RezultatetKrahutN32').style.display='inline';
  document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDyshe331(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto331.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto331.jpg";
  
  document.querySelector('.copaNKV-3').innerText='2';
  document.querySelector('.copaNKH1-3').innerText='2';
  document.querySelector('.copaNKH2-3').innerText='0';
  document.querySelector('.copaNKH3-3').innerText='0';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='inline';
  document.querySelector('.KrahuN2-H').style.display='none';
  document.querySelector('.KrahuN3-H').style.display='none';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="none";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="none";

 document.querySelector('#XhamiKrahN3-3').style.display="none";
 document.querySelector('#XhamiKrahN3-2').style.display="none";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-33').style.display="inline";

 document.querySelector('.copaXhKN3-3').style.display="none";
 document.querySelector('.copaXhKN2-3').style.display="none";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN3-3').style.display="inline";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-11').innerHTML="1";
  document.querySelector('.XhPKN3-22').innerHTML="2";
  document.querySelector('.XhPKN3-33').innerHTML="3";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='inline';
   document.querySelector('.RezultatetKrahutN32').style.display='none';
   document.querySelector('.RezultatetKrahutN33').style.display='none';
}
function OpenDyshe332(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto332.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto332.jpg";
  
  document.querySelector('.copaNKV-3').innerText='2';
  document.querySelector('.copaNKH1-3').innerText='0';
  document.querySelector('.copaNKH2-3').innerText='2';
  document.querySelector('.copaNKH3-3').innerText='0';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='none';
  document.querySelector('.KrahuN2-H').style.display='inline';
  document.querySelector('.KrahuN3-H').style.display='none';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="none";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="none";

 document.querySelector('#XhamiKrahN3-3').style.display="none";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="none";
 document.querySelector('#XhamiPaKrahN3-11').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="inline";

 document.querySelector('.copaXhKN3-3').style.display="none";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="inline";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhPKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
  document.querySelector('.XhPKN3-33').innerHTML="3";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='none';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='none';

}
function OpenDyshe333(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto333.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto333.jpg";
  
  document.querySelector('.copaNKV-3').innerText='2';
   document.querySelector('.copaNKH1-3').innerText='0';
   document.querySelector('.copaNKH2-3').innerText='0';
   document.querySelector('.copaNKH3-3').innerText='2';


   document.querySelector('.KrahuN3-V').style.display="inline";
   document.querySelector('.KrahuN1-H').style.display='none';
   document.querySelector('.KrahuN2-H').style.display='none';
   document.querySelector('.KrahuN3-H').style.display='inline';
  
   document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH1-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNH2-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="block";
 document.querySelector('#XhamiKrahN3-2').style.display="none";
 document.querySelector('#XhamiKrahN3-1').style.display="none";
 document.querySelector('#XhamiPaKrahN3-11').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-22').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="block";
 document.querySelector('.copaXhKN2-3').style.display="none";
 document.querySelector('.copaXhKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhPKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-33').innerHTML="3";
  document.querySelector('.XhPKN3-22').innerHTML="2";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='none';
   document.querySelector('.RezultatetKrahutN32').style.display='none';
   document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDyshe334(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto334.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto334.jpg";
  
  document.querySelector('.copaNKV-3').innerText='4';
  document.querySelector('.copaNKH1-3').innerText='2';
  document.querySelector('.copaNKH2-3').innerText='2';
  document.querySelector('.copaNKH3-3').innerText='0';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='inline';
  document.querySelector('.KrahuN2-H').style.display='inline';
  document.querySelector('.KrahuN3-H').style.display='none';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="none";

 document.querySelector('#XhamiKrahN3-3').style.display="none";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="inline";

 document.querySelector('.copaXhKN3-3').style.display="none";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="inline";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
  document.querySelector('.XhPKN3-33').innerHTML="3";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='inline';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='none';
}
function OpenDyshe335(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto335.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto335.jpg";
  
  document.querySelector('.copaNKV-3').innerText='4';
  document.querySelector('.copaNKH1-3').innerText='2';
  document.querySelector('.copaNKH2-3').innerText='0';
  document.querySelector('.copaNKH3-3').innerText='2';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='inline';
  document.querySelector('.KrahuN2-H').style.display='none';
  document.querySelector('.KrahuN3-H').style.display='inline';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="none";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="none";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="none";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-33').innerHTML="3";
  document.querySelector('.XhPKN3-22').innerHTML="2";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='inline';
   document.querySelector('.RezultatetKrahutN32').style.display='none';
   document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDyshe336(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto336.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto336.jpg";
  
  document.querySelector('.copaNKV-3').innerText='6';
  document.querySelector('.copaNKH1-3').innerText='2';
  document.querySelector('.copaNKH2-3').innerText='2';
  document.querySelector('.copaNKH3-3').innerText='2';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='inline';
  document.querySelector('.KrahuN2-H').style.display='inline';
  document.querySelector('.KrahuN3-H').style.display='inline';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
 document.querySelector('.XhKN3-33').innerHTML="3";

  //  Rezultatet e Krahave
  document.querySelector('.RezultatetKrahutN31').style.display='inline';
  document.querySelector('.RezultatetKrahutN32').style.display='inline';
  document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDyshe337(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto337.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto337.jpg";
  
  document.querySelector('.copaNKV-3').innerText='2';
  document.querySelector('.copaNKH1-3').innerText='0';
  document.querySelector('.copaNKH2-3').innerText='2';
  document.querySelector('.copaNKH3-3').innerText='0';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='none';
  document.querySelector('.KrahuN2-H').style.display='inline';
  document.querySelector('.KrahuN3-H').style.display='none';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="none";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="none";

 document.querySelector('#XhamiKrahN3-3').style.display="none";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="none";
 document.querySelector('#XhamiPaKrahN3-11').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="inline";

 document.querySelector('.copaXhKN3-3').style.display="none";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="inline";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhPKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
  document.querySelector('.XhPKN3-33').innerHTML="3";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='none';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='none';
}
function OpenDyshe338(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto338.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto338.jpg";
  
  document.querySelector('.copaNKV-3').innerText='4';
  document.querySelector('.copaNKH1-3').innerText='2';
  document.querySelector('.copaNKH2-3').innerText='2';
  document.querySelector('.copaNKH3-3').innerText='0';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='inline';
  document.querySelector('.KrahuN2-H').style.display='inline';
  document.querySelector('.KrahuN3-H').style.display='none';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="none";

 document.querySelector('#XhamiKrahN3-3').style.display="none";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="inline";

 document.querySelector('.copaXhKN3-3').style.display="none";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="inline";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
  document.querySelector('.XhPKN3-33').innerHTML="3";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='inline';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='none';
}
function OpenDyshe339(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto339.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto339.jpg";
  
  document.querySelector('.copaNKV-3').innerText='4';
   document.querySelector('.copaNKH1-3').innerText='0';
   document.querySelector('.copaNKH2-3').innerText='2';
   document.querySelector('.copaNKH3-3').innerText='2';


   document.querySelector('.KrahuN3-V').style.display="inline";
   document.querySelector('.KrahuN1-H').style.display='none';
   document.querySelector('.KrahuN2-H').style.display='inline';
   document.querySelector('.KrahuN3-H').style.display='inline';
  
   document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH1-3').style.display="none";
  document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="none";
 document.querySelector('#XhamiPaKrahN3-11').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-22').innerHTML="2";
 document.querySelector('.XhKN3-33').innerHTML="3";
  document.querySelector('.XhPKN3-11').innerHTML="1";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='none';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDyshe340(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto340.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto340.jpg";
  
  document.querySelector('.copaNKV-3').innerText='6';
  document.querySelector('.copaNKH1-3').innerText='2';
  document.querySelector('.copaNKH2-3').innerText='2';
  document.querySelector('.copaNKH3-3').innerText='2';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='inline';
  document.querySelector('.KrahuN2-H').style.display='inline';
  document.querySelector('.KrahuN3-H').style.display='inline';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
 document.querySelector('.XhKN3-33').innerHTML="3";

  //  Rezultatet e Krahave
  document.querySelector('.RezultatetKrahutN31').style.display='inline';
  document.querySelector('.RezultatetKrahutN32').style.display='inline';
  document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDyshe341(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto341.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto341.jpg";
  
  document.querySelector('.copaNKV-3').innerText='2';
  document.querySelector('.copaNKH1-3').innerText='0';
  document.querySelector('.copaNKH2-3').innerText='0';
  document.querySelector('.copaNKH3-3').innerText='2';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='none';
  document.querySelector('.KrahuN2-H').style.display='none';
  document.querySelector('.KrahuN3-H').style.display='inline';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="none";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="none";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="block";
 document.querySelector('#XhamiKrahN3-2').style.display="none";
 document.querySelector('#XhamiKrahN3-1').style.display="none";
 document.querySelector('#XhamiPaKrahN3-11').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-22').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="block";
 document.querySelector('.copaXhKN2-3').style.display="none";
 document.querySelector('.copaXhKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhPKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-33').innerHTML="3";
  document.querySelector('.XhPKN3-22').innerHTML="2";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='none';
   document.querySelector('.RezultatetKrahutN32').style.display='none';
   document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDyshe342(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto342.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto342.jpg";
  
  document.querySelector('.copaNKV-3').innerText='4';
  document.querySelector('.copaNKH1-3').innerText='0';
  document.querySelector('.copaNKH2-3').innerText='2';
  document.querySelector('.copaNKH3-3').innerText='2';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='none';
  document.querySelector('.KrahuN2-H').style.display='inline';
  document.querySelector('.KrahuN3-H').style.display='inline';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="none";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="none";
 document.querySelector('#XhamiPaKrahN3-11').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-22').innerHTML="2";
 document.querySelector('.XhKN3-33').innerHTML="3";
  document.querySelector('.XhPKN3-11').innerHTML="1";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='none';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDyshe343(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto343.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto343.jpg";
  
  document.querySelector('.copaNKV-3').innerText='4';
  document.querySelector('.copaNKH1-3').innerText='2';
  document.querySelector('.copaNKH2-3').innerText='0';
  document.querySelector('.copaNKH3-3').innerText='2';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='inline';
  document.querySelector('.KrahuN2-H').style.display='none';
  document.querySelector('.KrahuN3-H').style.display='inline';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="none";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="none";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="none";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-33').innerHTML="3";
  document.querySelector('.XhPKN3-22').innerHTML="2";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='inline';
   document.querySelector('.RezultatetKrahutN32').style.display='none';
   document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDyshe344(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto344.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto344.jpg";
  
  document.querySelector('.copaNKV-3').innerText='6';
  document.querySelector('.copaNKH1-3').innerText='2';
  document.querySelector('.copaNKH2-3').innerText='2';
  document.querySelector('.copaNKH3-3').innerText='2';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='inline';
  document.querySelector('.KrahuN2-H').style.display='inline';
  document.querySelector('.KrahuN3-H').style.display='inline';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
 document.querySelector('.XhKN3-33').innerHTML="3";

  //  Rezultatet e Krahave
  document.querySelector('.RezultatetKrahutN31').style.display='inline';
  document.querySelector('.RezultatetKrahutN32').style.display='inline';
  document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDyshe345(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto345.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto345.jpg";
  
  document.querySelector('.copaNKV-3').innerText='4';
   document.querySelector('.copaNKH1-3').innerText='2';
   document.querySelector('.copaNKH2-3').innerText='2';
   document.querySelector('.copaNKH3-3').innerText='0';


   document.querySelector('.KrahuN3-V').style.display="inline";
   document.querySelector('.KrahuN1-H').style.display='inline';
   document.querySelector('.KrahuN2-H').style.display='inline';
   document.querySelector('.KrahuN3-H').style.display='none';
  
   document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH3-3').style.display="none";

 document.querySelector('#XhamiKrahN3-3').style.display="none";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="inline";

 document.querySelector('.copaXhKN3-3').style.display="none";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="inline";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
  document.querySelector('.XhPKN3-33').innerHTML="3";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='inline';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='none';
}
function OpenDyshe346(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto346.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto346.jpg";
  
  document.querySelector('.copaNKV-3').innerText='6';
  document.querySelector('.copaNKH1-3').innerText='2';
  document.querySelector('.copaNKH2-3').innerText='2';
  document.querySelector('.copaNKH3-3').innerText='2';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='inline';
  document.querySelector('.KrahuN2-H').style.display='inline';
  document.querySelector('.KrahuN3-H').style.display='inline';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
 document.querySelector('.XhKN3-33').innerHTML="3";

  //  Rezultatet e Krahave
  document.querySelector('.RezultatetKrahutN31').style.display='inline';
  document.querySelector('.RezultatetKrahutN32').style.display='inline';
  document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDyshe347(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto347.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto347.jpg";
  
  document.querySelector('.copaNKV-3').innerText='6';
   document.querySelector('.copaNKH1-3').innerText='2';
   document.querySelector('.copaNKH2-3').innerText='2';
   document.querySelector('.copaNKH3-3').innerText='2';


   document.querySelector('.KrahuN3-V').style.display="inline";
   document.querySelector('.KrahuN1-H').style.display='inline';
   document.querySelector('.KrahuN2-H').style.display='inline';
   document.querySelector('.KrahuN3-H').style.display='inline';
  
   document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
 document.querySelector('.XhKN3-33').innerHTML="3";

  //  Rezultatet e Krahave
  document.querySelector('.RezultatetKrahutN31').style.display='inline';
  document.querySelector('.RezultatetKrahutN32').style.display='inline';
  document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDyshe348(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto348.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto348.jpg";
  
  document.querySelector('.copaNKV-3').innerText='4';
  document.querySelector('.copaNKH1-3').innerText='0';
  document.querySelector('.copaNKH2-3').innerText='2';
  document.querySelector('.copaNKH3-3').innerText='2';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='none';
  document.querySelector('.KrahuN2-H').style.display='inline';
  document.querySelector('.KrahuN3-H').style.display='inline';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="none";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="none";
 document.querySelector('#XhamiPaKrahN3-11').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN1-3').style.display="inline";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
 document.querySelector('.XhKN3-33').innerHTML="3";
 document.querySelector('.XhKN3-22').innerHTML="2";
  document.querySelector('.XhPKN3-11').innerHTML="1";

   //  Rezultatet e Krahave
   document.querySelector('.RezultatetKrahutN31').style.display='none';
   document.querySelector('.RezultatetKrahutN32').style.display='inline';
   document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDyshe349(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto349.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto349.jpg";
  
  document.querySelector('.copaNKV-3').innerText='6';
  document.querySelector('.copaNKH1-3').innerText='2';
  document.querySelector('.copaNKH2-3').innerText='2';
  document.querySelector('.copaNKH3-3').innerText='2';


  document.querySelector('.KrahuN3-V').style.display="inline";
  document.querySelector('.KrahuN1-H').style.display='inline';
  document.querySelector('.KrahuN2-H').style.display='inline';
  document.querySelector('.KrahuN3-H').style.display='inline';
 
  document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
 document.querySelector('.XhKN3-33').innerHTML="3";

  //  Rezultatet e Krahave
  document.querySelector('.RezultatetKrahutN31').style.display='inline';
  document.querySelector('.RezultatetKrahutN32').style.display='inline';
  document.querySelector('.RezultatetKrahutN33').style.display='inline';
}
function OpenDyshe350(){
  document.querySelector('.DritareNdarse-3').style.display='block';
  document.FotoNdarese3.src="Foto-Dritare/Foto350.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.sliderN3.src="Foto-Dritare/Foto350.jpg";
  
  document.querySelector('.copaNKV-3').innerText='6';
   document.querySelector('.copaNKH1-3').innerText='2';
   document.querySelector('.copaNKH2-3').innerText='2';
   document.querySelector('.copaNKH3-3').innerText='2';


   document.querySelector('.KrahuN3-V').style.display="inline";
   document.querySelector('.KrahuN1-H').style.display='inline';
   document.querySelector('.KrahuN2-H').style.display='inline';
   document.querySelector('.KrahuN3-H').style.display='inline';
  
   document.querySelector('.ArmaturaKrahuNV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH1-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH2-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuNH3-3').style.display="inline";

 document.querySelector('#XhamiKrahN3-3').style.display="inline";
 document.querySelector('#XhamiKrahN3-2').style.display="inline";
 document.querySelector('#XhamiKrahN3-1').style.display="inline";
 document.querySelector('#XhamiPaKrahN3-11').style.display="none";
 document.querySelector('#XhamiPaKrahN3-22').style.display="none";
 document.querySelector('#XhamiPaKrahN3-33').style.display="none";

 document.querySelector('.copaXhKN3-3').style.display="inline";
 document.querySelector('.copaXhKN1-3').style.display="inline";
 document.querySelector('.copaXhKN2-3').style.display="inline";
 document.querySelector('.copaXhPaKN1-3').style.display="none";
 document.querySelector('.copaXhPaKN2-3').style.display="none";
 document.querySelector('.copaXhPaKN3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
 document.querySelector('.XhKN3-11').innerHTML="1";
 document.querySelector('.XhKN3-22').innerHTML="2";
 document.querySelector('.XhKN3-33').innerHTML="3";

  //  Rezultatet e Krahave
  document.querySelector('.RezultatetKrahutN31').style.display='inline';
  document.querySelector('.RezultatetKrahutN32').style.display='inline';
  document.querySelector('.RezultatetKrahutN33').style.display='inline';
}













let KushtiKrahu1=false;
let KushtiKrahu2=false;

//Mbledhja Te Fotot 3
let kushtiTreshe1=false;
let kushtiTreshe2=false;
document.querySelector('.ButoniAdapterP-1').addEventListener('click',function(){
  kushtiTreshe1=true;
  KushtiKrahu1=true;
});
document.querySelector('.ButoniAdapterP-2').addEventListener('click',function(){
  kushtiTreshe2=true;
  KushtiKrahu2=true;

});
document.querySelector('.Fillimi3').addEventListener('click',function(){
  kushtiTreshe1=false;
  kushtiTreshe2=false;
  KushtiKrahu1=false;
  KushtiKrahu2=false;

});
console.log(kushtiTreshe1,kushtiTreshe2);
document.querySelector('.Mbledhja3').addEventListener('click',Mbledhja3);
function Mbledhja3(e){
   var vleraGjatesisTreshe=parseInt(document.querySelector('.GjatesiaP-3').value);
   var vleraGjeresisTreshe=parseInt(document.querySelector('.GjeresiaP-3').value);

  // Marrja e vlerave nga inputi
  var InputoKornizesV3=document.querySelector('.InputoKornizesV-3').innerHTML;
  var InputoKornizesH3=document.querySelector('.InputoKornizesH-3').innerHTML;
  var InputiKornizaAV3=document.querySelector('.InputiKornizaAV-3').innerHTML;
  var InputiKornizesAH3=document.querySelector('.InputiKornizaAH-3').innerHTML;
  var InputiKrahuV3=document.querySelector('.InputiKrahuV-3').innerHTML;
  var InputiKrahuH3=document.querySelector('.InputiKrahuH-3').innerHTML;
  var InputiKrahuAV3=document.querySelector('.InputiKrahuAV-3').innerHTML;
  var InputiKrahuAH3=document.querySelector('.InputiKrahuAH-3').innerHTML;
  var XhamiV3=document.querySelector('.XhamiV-3').innerHTML;
  var XhamiH3=document.querySelector('.XhamiH-3').innerHTML;
  var XhamiStatikV3=document.querySelector('.XhamiStatikV-3').innerHTML;
  var XhamiStatikH3=document.querySelector('.XhamiStatikH-3').innerHTML;
  var SH3=document.querySelector('.Shtyll-3').innerHTML;
  var A3=document.querySelector('.Adapteri-3').innerHTML;
  var SHA3=document.querySelector('.ShtyllA-3').innerHTML;
  var AA3=document.querySelector('.AdapteriA-3').innerHTML;




   //Kornizat dhe Araturat per dritaret me shtylle 
   let VertikaleKorniza3=document.querySelector('.GjatesiaKornizesV-3').innerText=vleraGjatesisTreshe+parseInt(InputoKornizesV3)+" V";
   document.querySelector('.RezultatetVertikaleKorniza3').innerText=parseInt(VertikaleKorniza3)-6+"[Ko]";
   let Kroniza3=document.querySelector('.GjatesiaKornizesH-3').innerText=vleraGjeresisTreshe+parseInt(InputoKornizesH3)+" H";
   document.querySelector('.ArmaturaKornizesV-3').innerText=vleraGjatesisTreshe-parseInt(InputiKornizaAV3)+" V";
   document.querySelector('.ArmaturaKornizesH-3').innerText=vleraGjeresisTreshe-parseInt(InputiKornizesAH3)+" H";

   document.querySelector('.RezultatetKornizes3').innerText=parseInt(Kroniza3)-6+'[Ko]';
   //T-Shtylla
   document.querySelector('.T-shtyllaTreshe-1').innerText=vleraGjatesisTreshe-parseInt(SH3)+" V";
   document.querySelector('.T-shtyllaTreshe-2').innerText=vleraGjatesisTreshe-parseInt(SH3)+" V";
   document.querySelector('.Armatura-Shtylla-1').innerText=vleraGjatesisTreshe-parseInt(SHA3)+" V";
   document.querySelector('.Armatura-Shtylla-2').innerText=vleraGjatesisTreshe-parseInt(SHA3)+" V";


   //Adapteri
   document.querySelector('.AdapterTreshe-1').innerText=vleraGjatesisTreshe-parseInt(A3)+" V";
   document.querySelector('.AdapterTreshe-2').innerText=vleraGjatesisTreshe-parseInt(A3)+" V";
   document.querySelector('.Armatura-Adapteri-1').innerText=vleraGjatesisTreshe-parseInt(AA3)+" V";
   document.querySelector('.Armatura-Adapteri-2').innerText=vleraGjatesisTreshe-parseInt(AA3)+" V";


  let VleraAdpateriTreshe1;
  let VleraAdapteriTreshe2;
  let VleraAdpateriTresheP1;
  let VleraAdapteriTresheP2;
  console.log(kushtiTreshe1,kushtiTreshe2);


 
  if(kushtiTreshe1){
    VleraAdpateriTreshe1=10;
    VleraAdpateriTresheP1=0;
    document.querySelector('.Krahu3-H').innerText=parseInt((vleraGjeresisTreshe)/3-parseInt(InputiKrahuH3))+VleraAdpateriTresheP1+" H";
    let Krahu32=document.querySelector('.Krahu3A-H').innerText=parseInt((vleraGjeresisTreshe)/3-parseInt(InputiKrahuH3))+VleraAdpateriTreshe1+" H";
    let Krahu33=document.querySelector('.Krahu3Ar-H').innerText=parseInt((vleraGjeresisTreshe)/3-parseInt(InputiKrahuH3))+VleraAdpateriTresheP1+" H";
    
   
    console.log(KushtiKrahu1,KushtiKrahu2);

    
  
    if(KushtiKrahu1){
     document.querySelector('.RezultatetKrahut31').innerText=parseInt(Krahu32)-6+"[Kr]";
     document.querySelector('.RezultatetKrahut32').innerText=parseInt(Krahu32)-6+"[Kr]";
     document.querySelector('.RezultatetKrahut33').innerText=parseInt(Krahu33)-6+"[Kr]";
    }else{
      document.querySelector('.RezultatetKrahut31').innerText=parseInt(Krahu33)-6+"[Kr]";
      document.querySelector('.RezultatetKrahut32').innerText=parseInt(Krahu33)-6+"[Kr]";
      document.querySelector('.RezultatetKrahut33').innerText=parseInt(Krahu33)-6+"[Kr]";

    }
    
   



    document.querySelector('.ArmaturaKrahuH-3').innerText=parseInt((vleraGjeresisTreshe)/3-parseInt(InputiKrahuAH3))+VleraAdpateriTresheP1+" H";
    document.querySelector('.ArmaturaKrahuHA-3').innerText=parseInt((vleraGjeresisTreshe)/3-parseInt(InputiKrahuAH3))+VleraAdpateriTreshe1+" H";
    document.querySelector('.ArmaturaKrahuHAR-3').innerText=parseInt((vleraGjeresisTreshe)/3-parseInt(InputiKrahuAH3))+VleraAdpateriTresheP1+" H";


  

    // Xhama qe qelen
    document.querySelector('.XhamiK3-H1').innerText=parseInt((vleraGjeresisTreshe)/3+VleraAdpateriTreshe1-parseInt(XhamiH3));
    document.querySelector('.XhamiK3-H2').innerText=parseInt((vleraGjeresisTreshe)/3+VleraAdpateriTreshe1-parseInt(XhamiH3));
    document.querySelector('.XhamiK3-H3').innerText=parseInt((vleraGjeresisTreshe)/3+VleraAdpateriTresheP1-parseInt(XhamiH3));

    // Xhama qe nuk qelen
    document.querySelector('.XhamiK3-H111').innerText=parseInt((vleraGjeresisTreshe)/3+VleraAdpateriTreshe1-parseInt(XhamiStatikH3));
    document.querySelector('.XhamiK3-H222').innerText=parseInt((vleraGjeresisTreshe)/3+VleraAdpateriTreshe1-parseInt(XhamiStatikH3));
    document.querySelector('.XhamiK3-H333').innerText=parseInt((vleraGjeresisTreshe)/3+VleraAdpateriTresheP1-parseInt(XhamiStatikH3));
    
    
   
  }
  else{
    VleraAdpateriTreshe1=0;
   let Krahu311= document.querySelector('.Krahu3-H').innerText=parseInt((vleraGjeresisTreshe)/3-parseInt(InputiKrahuH3))+VleraAdpateriTreshe1+" H";
   document.querySelector('.ArmaturaKrahuH-3').innerText=parseInt((vleraGjeresisTreshe)/3-parseInt(InputiKrahuAH3))+VleraAdpateriTreshe1+" H";


    document.querySelector('.RezultatetKrahut31').innerText=parseInt(Krahu311)-6+"[Kr]";
    document.querySelector('.RezultatetKrahut32').innerText=parseInt(Krahu311)-6+"[Kr]";
    document.querySelector('.RezultatetKrahut33').innerText=parseInt(Krahu311)-6+"[Kr]";

    // Xhama qe qelen
    document.querySelector('.XhamiK3-H1').innerText=parseInt((vleraGjeresisTreshe)/3+VleraAdpateriTreshe1-parseInt(XhamiH3));
    document.querySelector('.XhamiK3-H2').innerText=parseInt((vleraGjeresisTreshe)/3+VleraAdpateriTreshe1-parseInt(XhamiH3));
    document.querySelector('.XhamiK3-H3').innerText=parseInt((vleraGjeresisTreshe)/3+VleraAdpateriTreshe1-parseInt(XhamiH3));

    // Xhama qe nuk qelen
    document.querySelector('.XhamiK3-H111').innerText=parseInt((vleraGjeresisTreshe)/3+VleraAdpateriTreshe1-parseInt(XhamiStatikH3));
    document.querySelector('.XhamiK3-H222').innerText=parseInt((vleraGjeresisTreshe)/3+VleraAdpateriTreshe1-parseInt(XhamiStatikH3));
    document.querySelector('.XhamiK3-H333').innerText=parseInt((vleraGjeresisTreshe)/3+VleraAdpateriTreshe1-parseInt(XhamiStatikH3));

  }
  
  
   if(kushtiTreshe2){
    VleraAdapteriTreshe2=10;
    VleraAdapteriTresheP2=0;

   document.querySelector('.Krahu3-H').innerText=parseInt((vleraGjeresisTreshe)/3-parseInt(InputiKrahuH3))+ VleraAdapteriTresheP2+" H";
    let Krahu322=document.querySelector('.Krahu3A-H').innerText=parseInt((vleraGjeresisTreshe)/3-parseInt(InputiKrahuH3))+VleraAdapteriTreshe2+" H";
    let Krahu323=document.querySelector('.Krahu3Ar-H').innerText=parseInt((vleraGjeresisTreshe)/3-parseInt(InputiKrahuH3))+ VleraAdapteriTresheP2+" H";
     
    if(KushtiKrahu2){
    document.querySelector('.RezultatetKrahut31').innerText=parseInt(Krahu323)-6+"[Kr]";
    document.querySelector('.RezultatetKrahut32').innerText=parseInt(Krahu322)-6+"[Kr]";
    document.querySelector('.RezultatetKrahut33').innerText=parseInt(Krahu322)-6+"[Kr]";
    }else{
    document.querySelector('.RezultatetKrahut32').innerText=parseInt(Krahu323)-6+"[Kr]";
    document.querySelector('.RezultatetKrahut33').innerText=parseInt(Krahu323)-6+"[Kr]";
    document.querySelector('.RezultatetKrahut33').innerText=parseInt(Krahu323)-6+"[Kr]";
    }

    document.querySelector('.ArmaturaKrahuH-3').innerText=parseInt((vleraGjeresisTreshe)/3-parseInt(InputiKrahuAH3))+ VleraAdapteriTresheP2+" H";
    document.querySelector('.ArmaturaKrahuHA-3').innerText=parseInt((vleraGjeresisTreshe)/3-parseInt(InputiKrahuAH3))+VleraAdapteriTreshe2+" H";
    document.querySelector('.ArmaturaKrahuHAR-3').innerText=parseInt((vleraGjeresisTreshe)/3-parseInt(InputiKrahuAH3))+ VleraAdapteriTresheP2+" H";


    // Xhama qe qelen
    document.querySelector('.XhamiK3-H1').innerText=parseInt((vleraGjeresisTreshe)/3+VleraAdapteriTresheP2-parseInt(XhamiH3));
    document.querySelector('.XhamiK3-H2').innerText=parseInt((vleraGjeresisTreshe)/3+VleraAdapteriTreshe2-parseInt(XhamiH3));
    document.querySelector('.XhamiK3-H3').innerText=parseInt((vleraGjeresisTreshe)/3+VleraAdapteriTreshe2-parseInt(XhamiH3));

    // Xhama qe nuk qelen
    document.querySelector('.XhamiK3-H111').innerText=parseInt((vleraGjeresisTreshe)/3+VleraAdapteriTresheP2-parseInt(XhamiStatikH3));
    document.querySelector('.XhamiK3-H222').innerText=parseInt((vleraGjeresisTreshe)/3+VleraAdapteriTreshe2-parseInt(XhamiStatikH3));
    document.querySelector('.XhamiK3-H333').innerText=parseInt((vleraGjeresisTreshe)/3+VleraAdapteriTreshe2-parseInt(XhamiStatikH3));
  
   }
  //  else{

  //   // VleraAdapteriTreshe2=0;
  //   // document.querySelector('.Krahu3-H').innerText=parseInt((vleraGjeresisTreshe)/3-46)+VleraAdapteriTreshe2+" H";
  //   // document.querySelector('.ArmaturaKrahuH-3').innerText=parseInt((vleraGjeresisTreshe)/3-186)+VleraAdapteriTreshe2+" H";


  //   // // Xhama qe qelen
  //   // document.querySelector('.XhamiK3-H1').innerText=parseInt((vleraGjeresisTreshe)/3+VleraAdapteriTreshe2-172);
  //   // document.querySelector('.XhamiK3-H2').innerText=parseInt((vleraGjeresisTreshe)/3+VleraAdapteriTreshe2-172);
  //   // document.querySelector('.XhamiK3-H3').innerText=parseInt((vleraGjeresisTreshe)/3+VleraAdapteriTreshe2-172);

  //   // // Xhama qe nuk qelen
  //   // document.querySelector('.XhamiK3-H111').innerText=parseInt((vleraGjeresisTreshe)/3+VleraAdapteriTreshe2-90);
  //   // document.querySelector('.XhamiK3-H222').innerText=parseInt((vleraGjeresisTreshe)/3+VleraAdapteriTreshe2-90);
  //   // document.querySelector('.XhamiK3-H333').innerText=parseInt((vleraGjeresisTreshe)/3+VleraAdapteriTreshe2-90);

  // }


  
  
   //Krahu dhe armaturat e krahut
   document.querySelector('.Krahu3-V').innerText=vleraGjatesisTreshe-parseInt(InputiKrahuV3)+" V";
  let VertikaleKrahut3=document.querySelector('.ArmaturaKrahuV-3').innerText=vleraGjatesisTreshe-parseInt(InputiKrahuAV3)+" V";
  document.querySelector('.RezultatetVertikaleKrahu3').innerText=parseInt(VertikaleKrahut3)-6+"[Kr]";


  //Xhami 1/2
  // qe qelen
  document.querySelector('.XhamiK3-V1').innerText=vleraGjatesisTreshe-parseInt(XhamiV3);
  document.querySelector('.XhamiK3-V2').innerText=vleraGjatesisTreshe-parseInt(XhamiV3);
  document.querySelector('.XhamiK3-V3').innerText=vleraGjatesisTreshe-parseInt(XhamiV3);

  
  //qe nuk qelen
  document.querySelector('.XhamiK3-V111').innerText=vleraGjatesisTreshe-parseInt(XhamiStatikV3);
  document.querySelector('.XhamiK3-V222').innerText=vleraGjatesisTreshe-parseInt(XhamiStatikV3);
  document.querySelector('.XhamiK3-V333').innerText=vleraGjatesisTreshe-parseInt(XhamiStatikV3);




   



   document.querySelector('.Dritare-3').style.display="none";
   document.querySelector('.Dritare3-PerFoto').style.display="none";
   // document.querySelector('.Dritare2-PerFoto').style.display='none';
   // document.querySelector('.DritareNdarse-2').style.display="none";


   
}





//Hapja e Fotov 

document.querySelector('.Image-Dritar-Dyshese31').addEventListener('click',OpenDysheP31);
document.querySelector('.Image-Dritar-Dyshese32').addEventListener('click',OpenDysheP32);
document.querySelector('.Image-Dritar-Dyshese33').addEventListener('click',OpenDysheP33);
document.querySelector('.Image-Dritar-Dyshese34').addEventListener('click',OpenDysheP34);
document.querySelector('.Image-Dritar-Dyshese35').addEventListener('click',OpenDysheP35);
document.querySelector('.Image-Dritar-Dyshese36').addEventListener('click',OpenDysheP36);
document.querySelector('.Image-Dritar-Dyshese37').addEventListener('click',OpenDysheP37);
document.querySelector('.Image-Dritar-Dyshese38').addEventListener('click',OpenDysheP38);
document.querySelector('.Image-Dritar-Dyshese39').addEventListener('click',OpenDysheP39);
document.querySelector('.Image-Dritar-Dyshese310').addEventListener('click',OpenDysheP310);
document.querySelector('.Image-Dritar-Dyshese311').addEventListener('click',OpenDysheP311);
document.querySelector('.Image-Dritar-Dyshese312').addEventListener('click',OpenDysheP312);
document.querySelector('.Image-Dritar-Dyshese313').addEventListener('click',OpenDysheP313);
document.querySelector('.Image-Dritar-Dyshese314').addEventListener('click',OpenDysheP314);
document.querySelector('.Image-Dritar-Dyshese315').addEventListener('click',OpenDysheP315);
document.querySelector('.Image-Dritar-Dyshese316').addEventListener('click',OpenDysheP316);
document.querySelector('.Image-Dritar-Dyshese317').addEventListener('click',OpenDysheP317);
document.querySelector('.Image-Dritar-Dyshese318').addEventListener('click',OpenDysheP318);
document.querySelector('.Image-Dritar-Dyshese319').addEventListener('click',OpenDysheP319);
document.querySelector('.Image-Dritar-Dyshese320').addEventListener('click',OpenDysheP320);
document.querySelector('.Image-Dritar-Dyshese321').addEventListener('click',OpenDysheP321);
document.querySelector('.Image-Dritar-Dyshese322').addEventListener('click',OpenDysheP322);
document.querySelector('.Image-Dritar-Dyshese323').addEventListener('click',OpenDysheP323);
document.querySelector('.Image-Dritar-Dyshese324').addEventListener('click',OpenDysheP324);
document.querySelector('.Image-Dritar-Dyshese325').addEventListener('click',OpenDysheP325);
document.querySelector('.Image-Dritar-Dyshese326').addEventListener('click',OpenDysheP326);
document.querySelector('.Image-Dritar-Dyshese327').addEventListener('click',OpenDysheP327);
document.querySelector('.Image-Dritar-Dyshese328').addEventListener('click',OpenDysheP328);
document.querySelector('.Image-Dritar-Dyshese329').addEventListener('click',OpenDysheP329);
document.querySelector('.Image-Dritar-Dyshese330').addEventListener('click',OpenDysheP330);
document.querySelector('.Image-Dritar-Dyshese331').addEventListener('click',OpenDysheP331);
document.querySelector('.Image-Dritar-Dyshese332').addEventListener('click',OpenDysheP332);
document.querySelector('.Image-Dritar-Dyshese333').addEventListener('click',OpenDysheP333);
document.querySelector('.Image-Dritar-Dyshese334').addEventListener('click',OpenDysheP334);
document.querySelector('.Image-Dritar-Dyshese335').addEventListener('click',OpenDysheP335);
document.querySelector('.Image-Dritar-Dyshese336').addEventListener('click',OpenDysheP336);
document.querySelector('.Image-Dritar-Dyshese337').addEventListener('click',OpenDysheP337);
document.querySelector('.Image-Dritar-Dyshese338').addEventListener('click',OpenDysheP338);
document.querySelector('.Image-Dritar-Dyshese339').addEventListener('click',OpenDysheP339);
document.querySelector('.Image-Dritar-Dyshese340').addEventListener('click',OpenDysheP340);
document.querySelector('.Image-Dritar-Dyshese341').addEventListener('click',OpenDysheP341);
document.querySelector('.Image-Dritar-Dyshese342').addEventListener('click',OpenDysheP342);
document.querySelector('.Image-Dritar-Dyshese343').addEventListener('click',OpenDysheP343);
document.querySelector('.Image-Dritar-Dyshese344').addEventListener('click',OpenDysheP344);
document.querySelector('.Image-Dritar-Dyshese345').addEventListener('click',OpenDysheP345);
document.querySelector('.Image-Dritar-Dyshese346').addEventListener('click',OpenDysheP346);
document.querySelector('.Image-Dritar-Dyshese347').addEventListener('click',OpenDysheP347);
document.querySelector('.Image-Dritar-Dyshese348').addEventListener('click',OpenDysheP348);
document.querySelector('.Image-Dritar-Dyshese349').addEventListener('click',OpenDysheP349);
document.querySelector('.Image-Dritar-Dyshese350').addEventListener('click',OpenDysheP350);
document.querySelector('.Image-Dritar-DysheseAA1').addEventListener('click',OpenDysheeA1);
document.querySelector('.Image-Dritar-DysheseAA2').addEventListener('click',OpenDysheeA2);
document.querySelector('.Image-Dritar-DysheseAA3').addEventListener('click',OpenDysheeA3);
document.querySelector('.Image-Dritar-DysheseAA4').addEventListener('click',OpenDysheeA4);
document.querySelector('.Image-Dritar-DysheseAA5').addEventListener('click',OpenDysheeA5);
document.querySelector('.Image-Dritar-DysheseAA6').addEventListener('click',OpenDysheeA6);
document.querySelector('.Image-Dritar-DysheseAA7').addEventListener('click',OpenDysheeA7);
document.querySelector('.Image-Dritar-DysheseAA8').addEventListener('click',OpenDysheeA8);
document.querySelector('.Image-Dritar-DysheseAA9').addEventListener('click',OpenDysheeA9);
document.querySelector('.Image-Dritar-DysheseAA10').addEventListener('click',OpenDysheeA10);
document.querySelector('.Image-Dritar-DysheseAA11').addEventListener('click',OpenDysheeA11);
document.querySelector('.Image-Dritar-DysheseAA12').addEventListener('click',OpenDysheeA12);




function OpenDysheP31(){
    document.querySelector('.Dritare-3').style.display='block';
    document.Foto3.src="Foto-Dritare/Foto31.jpg"
    document.slider3.src='Foto-Dritare/Foto31.jpg';
    document.querySelector('.copaKV-3').innerText='0';
    document.querySelector('.copaKH-3').innerText='0';

    document.querySelector('.Krahu3-V').style.display="none";
    document.querySelector('.Krahu3-H').style.display='none';

    document.querySelector('.ArmaturaKrahuV-3').style.display="none";
   document.querySelector('.ArmaturaKrahuH-3').style.display="none";
   document.querySelector('#XhamiKrah3-1').style.display="none";
   document.querySelector('#XhamiKrah3-2').style.display="none";
   document.querySelector('#XhamiKrah3-3').style.display="none";

   document.querySelector('#XhamiPaKrah3-11').style.display="block";
   document.querySelector('#XhamiPaKrah3-22').style.display="block";
   document.querySelector('#XhamiPaKrah3-33').style.display="block";

   document.querySelector('.copaXhK1-3').style.display="none";
   document.querySelector('.copaXhK2-3').style.display="none";
   document.querySelector('.copaXhK3-3').style.display="none";

   document.querySelector('.copaXhPaK1-3').style.display="block";
   document.querySelector('.copaXhPaK2-3').style.display="block";
   document.querySelector('.copaXhPaK3-3').style.display="block";

   //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
    document.querySelector('.XhPK3-11').innerHTML="1";
    document.querySelector('.XhPK3-22').innerHTML="2";
    document.querySelector('.XhPK3-33').innerHTML="3";

    // pershkrimi tek fotot
    document.querySelector('.RezultatetKrahut31').style.display="none";
    document.querySelector('.RezultatetKrahut32').style.display="none";
    document.querySelector('.RezultatetKrahut33').style.display="none";


    document.querySelector('.RezultatetVertikaleKrahu3').style.display='none';



}
function OpenDysheP32(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto32.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto32.jpg";
   document.querySelector('.copaKV-3').innerText='2';
   document.querySelector('.copaKH-3').innerText='2';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="block";
  document.querySelector('#XhamiKrah3-2').style.display="none";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="none";
  document.querySelector('#XhamiPaKrah3-22').style.display="inline";
  document.querySelector('#XhamiPaKrah3-33').style.display="inline";

  document.querySelector('.copaXhK3-3').style.display="block";
  document.querySelector('.copaXhK2-3').style.display="none";
  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhPaK1-3').style.display="none";
  document.querySelector('.copaXhPaK2-3').style.display="inline";
  document.querySelector('.copaXhPaK3-3').style.display="inline";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhK3-33').innerHTML="1";
   document.querySelector('.XhPK3-22').innerHTML="2";
   document.querySelector('.XhPK3-33').innerHTML="3";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="inline";
     document.querySelector('.RezultatetKrahut32').style.display="none";
     document.querySelector('.RezultatetKrahut33').style.display="none";
 
}
function OpenDysheP33(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto33.jpg"
   // document.querySelector   ('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto33.jpg";
   document.querySelector('.copaKV-3').innerText='2';
   document.querySelector('.copaKH-3').innerText='2';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="block";
  document.querySelector('#XhamiKrah3-2').style.display="none";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="inline";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="block";
  document.querySelector('.copaXhK2-3').style.display="none";
  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="inline";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhPK3-11').innerHTML="1";
  document.querySelector('.XhK3-33').innerHTML="2";
   document.querySelector('.XhPK3-22').innerHTML="3";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="none";
     document.querySelector('.RezultatetKrahut32').style.display="inline";
     document.querySelector('.RezultatetKrahut33').style.display="none";
 
   
}
function OpenDysheP34(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto34.jpg"
   // document.querySelector   ('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto34.jpg";
   document.querySelector('.copaKV-3').innerText='2';
   document.querySelector('.copaKH-3').innerText='2';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="block";
  document.querySelector('#XhamiKrah3-2').style.display="none";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="inline";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="block";
  document.querySelector('.copaXhK2-3').style.display="none";
  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="inline";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhPK3-11').innerHTML="1";
  document.querySelector('.XhK3-33').innerHTML="3";
   document.querySelector('.XhPK3-22').innerHTML="1";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="none";
     document.querySelector('.RezultatetKrahut32').style.display="none";
     document.querySelector('.RezultatetKrahut33').style.display="inline";
 
}
function OpenDysheP35(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto35.jpg"
   // document.querySelector   ('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto35.jpg";
   document.querySelector('.copaKV-3').innerText='2';
   document.querySelector('.copaKH-3').innerText='2';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="block";
  document.querySelector('#XhamiKrah3-2').style.display="none";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="inline";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="block";
  document.querySelector('.copaXhK2-3').style.display="none";
  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="inline";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhPK3-11').innerHTML="2";
  document.querySelector('.XhK3-33').innerHTML="1";
   document.querySelector('.XhPK3-22').innerHTML="3";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="inline";
     document.querySelector('.RezultatetKrahut32').style.display="none";
     document.querySelector('.RezultatetKrahut33').style.display="none";
 
}
function OpenDysheP36(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto36.jpg"
   document.slider3.src="Foto-Dritare/Foto36.jpg";
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.querySelector('.copaKV-3').innerText='2';
   document.querySelector('.copaKH-3').innerText='2';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="block";
  document.querySelector('#XhamiKrah3-2').style.display="none";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="inline";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="block";
  document.querySelector('.copaXhK2-3').style.display="none";
  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="inline";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhPK3-11').innerHTML="1";
  document.querySelector('.XhK3-33').innerHTML="2";
   document.querySelector('.XhPK3-22').innerHTML="3";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="none";
     document.querySelector('.RezultatetKrahut32').style.display="inline";
     document.querySelector('.RezultatetKrahut33').style.display="none";
 
   
}function OpenDysheP37(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto37.jpg"
   // document.querySelector   ('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto37.jpg";
   document.querySelector('.copaKV-3').innerText='2';
   document.querySelector('.copaKH-3').innerText='2';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="block";
  document.querySelector('#XhamiKrah3-2').style.display="none";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="inline";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="block";
  document.querySelector('.copaXhK2-3').style.display="none";
  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="inline";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhPK3-11').innerHTML="1";
  document.querySelector('.XhK3-33').innerHTML="3";
   document.querySelector('.XhPK3-22').innerHTML="2";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="none";
     document.querySelector('.RezultatetKrahut32').style.display="none";
     document.querySelector('.RezultatetKrahut33').style.display="inline";
 
   
}function OpenDysheP38(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto38.jpg"
   // document.querySelector   ('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto38.jpg";
   document.querySelector('.copaKV-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='4';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhK3-22').innerHTML="1";
  document.querySelector('.XhK3-33').innerHTML="2";
   document.querySelector('.XhPK3-11').innerHTML="3";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="inline";
     document.querySelector('.RezultatetKrahut32').style.display="inline";
     document.querySelector('.RezultatetKrahut33').style.display="none";
 
   
}function OpenDysheP39(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto39.jpg"
   // document.querySelector   ('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto39.jpg";
   document.querySelector('.copaKV-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='4';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="none";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="none";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-11').innerHTML="3";
   document.querySelector('.XhPK3-11').innerHTML="1";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="none";
     document.querySelector('.RezultatetKrahut32').style.display="inline";
     document.querySelector('.RezultatetKrahut33').style.display="inline";
 
   
}function OpenDysheP310(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto310.jpg"
   // document.querySelector   ('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto310.jpg";
   document.querySelector('.copaKV-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='4';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="none";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="none";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-11').innerHTML="1";
   document.querySelector('.XhPK3-11').innerHTML="3";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="inline";
     document.querySelector('.RezultatetKrahut32').style.display="inline";
     document.querySelector('.RezultatetKrahut33').style.display="none";
 
   
}
function OpenDysheP311(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto311.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto311.jpg";
   
   document.querySelector('.copaKV-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='4';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="none";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="none";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-11').innerHTML="3";
   document.querySelector('.XhPK3-11').innerHTML="1";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="none";
     document.querySelector('.RezultatetKrahut32').style.display="inline";
     document.querySelector('.RezultatetKrahut33').style.display="inline";
 
   
}
function OpenDysheP312(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto312.jpg"
   // document.querySelector   ('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto312.jpg";

   document.querySelector('.copaKV-3').innerText='6';
   document.querySelector('.copaKH-3').innerText='6';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";

  document.querySelector('#XhamiPaKrah3-11').style.display="none";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";

  document.querySelector('.copaXhPaK1-3').style.display="none";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
  document.querySelector('.XhK3-11').innerHTML="1";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-33').innerHTML="3";

    // pershkrimi tek fotot
    document.querySelector('.RezultatetKrahut31').style.display="inline";
    document.querySelector('.RezultatetKrahut32').style.display="inline";
    document.querySelector('.RezultatetKrahut33').style.display="inline";

}
function OpenDysheP313(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto313.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto313.jpg";
   
   document.querySelector('.copaKV-3').innerText='6';
   document.querySelector('.copaKH-3').innerText='6';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="none";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="none";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
  document.querySelector('.XhK3-11').innerHTML="1";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-33').innerHTML="3";

    // pershkrimi tek fotot
    document.querySelector('.RezultatetKrahut31').style.display="inline";
    document.querySelector('.RezultatetKrahut32').style.display="inline";
    document.querySelector('.RezultatetKrahut33').style.display="inline";

   
}
function OpenDysheP314(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto314.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto314.jpg";
   
   document.querySelector('.copaKV-3').innerText='2';
   document.querySelector('.copaKH-3').innerText='2';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="none";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="none";
  document.querySelector('#XhamiPaKrah3-22').style.display="inline";
  document.querySelector('#XhamiPaKrah3-33').style.display="inline";

  document.querySelector('.copaXhK3-3').style.display="block";
  document.querySelector('.copaXhK2-3').style.display="none";
  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhPaK1-3').style.display="none";
  document.querySelector('.copaXhPaK2-3').style.display="inline";
  document.querySelector('.copaXhPaK3-3').style.display="inline";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhK3-33').innerHTML="1";
   document.querySelector('.XhPK3-22').innerHTML="2";
   document.querySelector('.XhPK3-33').innerHTML="3";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="inline";
     document.querySelector('.RezultatetKrahut32').style.display="none";
     document.querySelector('.RezultatetKrahut33').style.display="none";
 

  
}
function OpenDysheP315(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto315.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto315.jpg";
   
   document.querySelector('.copaKV-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='4';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="none";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="none";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="inline";

  document.querySelector('.copaXhK3-3').style.display="none";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="inline";

  document.querySelector('.copaXhPaK1-3').style.display="none";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="inline";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhK3-11').innerHTML="1";
   document.querySelector('.XhK3-22').innerHTML="2";
   document.querySelector('.XhPK3-33').innerHTML="3";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="inline";
     document.querySelector('.RezultatetKrahut32').style.display="inline";
     document.querySelector('.RezultatetKrahut33').style.display="none";
 
   
}
function OpenDysheP316(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto316.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto316.jpg";
   
   document.querySelector('.copaKV-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='4';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="none";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="none";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhK3-11').innerHTML="1";
  document.querySelector('.XhK3-22').innerHTML="3";
   document.querySelector('.XhPK3-11').innerHTML="2";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="inline";
     document.querySelector('.RezultatetKrahut32').style.display="none";
     document.querySelector('.RezultatetKrahut33').style.display="inline";
 
}
function OpenDysheP317(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto317.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto317.jpg";
   
   document.querySelector('.copaKV-3').innerText='6';
   document.querySelector('.copaKH-3').innerText='6';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="none";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="none";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
  document.querySelector('.XhK3-11').innerHTML="1";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-33').innerHTML="3";

    // pershkrimi tek fotot
    document.querySelector('.RezultatetKrahut31').style.display="inline";
    document.querySelector('.RezultatetKrahut32').style.display="inline";
    document.querySelector('.RezultatetKrahut33').style.display="inline";

}
function OpenDysheP318(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto318.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto318.jpg";
   
   document.querySelector('.copaKV-3').innerText='2';
   document.querySelector('.copaKH-3').innerText='2';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="block";
  document.querySelector('#XhamiKrah3-2').style.display="none";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="inline";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="block";
  document.querySelector('.copaXhK2-3').style.display="none";
  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="inline";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhPK3-11').innerHTML="1";
  document.querySelector('.XhK3-33').innerHTML="2";
   document.querySelector('.XhPK3-22').innerHTML="3";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="none";
     document.querySelector('.RezultatetKrahut32').style.display="inline";
     document.querySelector('.RezultatetKrahut33').style.display="none";
 

}
function OpenDysheP319(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto319.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto319.jpg";
   document.querySelector('.copaKV-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='4';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhK3-22').innerHTML="1";
  document.querySelector('.XhK3-33').innerHTML="2";
   document.querySelector('.XhPK3-11').innerHTML="3";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="inline";
     document.querySelector('.RezultatetKrahut32').style.display="inline";
     document.querySelector('.RezultatetKrahut33').style.display="none";
 
}
function OpenDysheP320(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto320.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto320.jpg";
   
   document.querySelector('.copaKV-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='4';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhK3-22').innerHTML="3";
  document.querySelector('.XhK3-33').innerHTML="2";
   document.querySelector('.XhPK3-11').innerHTML="1";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="none";
     document.querySelector('.RezultatetKrahut32').style.display="inline";
     document.querySelector('.RezultatetKrahut33').style.display="inline";
 
}
function OpenDysheP321(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto321.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto321.jpg";
   
   document.querySelector('.copaKV-3').innerText='6';
   document.querySelector('.copaKH-3').innerText='6';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="none";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="none";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
  document.querySelector('.XhK3-11').innerHTML="1";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-33').innerHTML="3";

    // pershkrimi tek fotot
    document.querySelector('.RezultatetKrahut31').style.display="inline";
    document.querySelector('.RezultatetKrahut32').style.display="inline";
    document.querySelector('.RezultatetKrahut33').style.display="inline";

}
function OpenDysheP322(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto322.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto322.jpg";
   
   document.querySelector('.copaKV-3').innerText='2';
   document.querySelector('.copaKH-3').innerText='2';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="block";
  document.querySelector('#XhamiKrah3-2').style.display="none";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="inline";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="block";
  document.querySelector('.copaXhK2-3').style.display="none";
  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="inline";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhPK3-11').innerHTML="1";
  document.querySelector('.XhK3-33').innerHTML="3";
   document.querySelector('.XhPK3-22').innerHTML="2";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="none";
     document.querySelector('.RezultatetKrahut32').style.display="none";
     document.querySelector('.RezultatetKrahut33').style.display="inline";
 
}
function OpenDysheP323(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto323.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto323.jpg";
   
   document.querySelector('.copaKV-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='4';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="none";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="none";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-11').innerHTML="3";
   document.querySelector('.XhPK3-11').innerHTML="1";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="none";
     document.querySelector('.RezultatetKrahut32').style.display="inline";
     document.querySelector('.RezultatetKrahut33').style.display="inline";
 
}
function OpenDysheP324(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto324.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto324.jpg";
   
   document.querySelector('.copaKV-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='4';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="none";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="none";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhK3-11').innerHTML="1";
  document.querySelector('.XhK3-22').innerHTML="3";
   document.querySelector('.XhPK3-11').innerHTML="2";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="inline";
     document.querySelector('.RezultatetKrahut32').style.display="none";
     document.querySelector('.RezultatetKrahut33').style.display="inline";
 
}
function OpenDysheP325(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto325.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto325.jpg";
   
   document.querySelector('.copaKV-3').innerText='6';
   document.querySelector('.copaKH-3').innerText='6';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="none";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="none";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
  document.querySelector('.XhK3-11').innerHTML="1";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-33').innerHTML="3";

    // pershkrimi tek fotot
    document.querySelector('.RezultatetKrahut31').style.display="inline";
    document.querySelector('.RezultatetKrahut32').style.display="inline";
    document.querySelector('.RezultatetKrahut33').style.display="inline";

}
function OpenDysheP326(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto319.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto319.jpg";
   document.querySelector('.copaKV-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='4';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhK3-22').innerHTML="1";
  document.querySelector('.XhK3-33').innerHTML="2";
   document.querySelector('.XhPK3-11').innerHTML="3";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="inline";
     document.querySelector('.RezultatetKrahut32').style.display="inline";
     document.querySelector('.RezultatetKrahut33').style.display="none";
 
}

function OpenDysheP327(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto327.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto327.jpg";
   
   document.querySelector('.copaKV-3').innerText='6';
   document.querySelector('.copaKH-3').innerText='6';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="none";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="none";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
  document.querySelector('.XhK3-11').innerHTML="1";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-33').innerHTML="3";

    // pershkrimi tek fotot
    document.querySelector('.RezultatetKrahut31').style.display="inline";
    document.querySelector('.RezultatetKrahut32').style.display="inline";
    document.querySelector('.RezultatetKrahut33').style.display="inline";

}
function OpenDysheP328(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto328.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto328.jpg";
   
   document.querySelector('.copaKV-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='4';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhK3-22').innerHTML="3";
  document.querySelector('.XhK3-33').innerHTML="2";
   document.querySelector('.XhPK3-11').innerHTML="1"

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="none";
     document.querySelector('.RezultatetKrahut32').style.display="inline";
     document.querySelector('.RezultatetKrahut33').style.display="inline";
 
}
function OpenDysheP329(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto329.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto329.jpg";
   
   document.querySelector('.copaKV-3').innerText='6';
   document.querySelector('.copaKH-3').innerText='6';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="none";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="none";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
  document.querySelector('.XhK3-11').innerHTML="1";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-33').innerHTML="3";

    // pershkrimi tek fotot
    document.querySelector('.RezultatetKrahut31').style.display="inline";
    document.querySelector('.RezultatetKrahut32').style.display="inline";
    document.querySelector('.RezultatetKrahut33').style.display="inline";

}
function OpenDysheP330(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto330.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto330.jpg";
   
   document.querySelector('.copaKV-3').innerText='6';
   document.querySelector('.copaKH-3').innerText='6';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="none";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="none";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
  document.querySelector('.XhK3-11').innerHTML="1";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-33').innerHTML="3";

    // pershkrimi tek fotot
    document.querySelector('.RezultatetKrahut31').style.display="inline";
    document.querySelector('.RezultatetKrahut32').style.display="inline";
    document.querySelector('.RezultatetKrahut33').style.display="inline";

}
function OpenDysheP331(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto331.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto331.jpg";
   
   document.querySelector('.copaKV-3').innerText='2';
   document.querySelector('.copaKH-3').innerText='2';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="block";
  document.querySelector('#XhamiKrah3-2').style.display="none";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="none";
  document.querySelector('#XhamiPaKrah3-22').style.display="inline";
  document.querySelector('#XhamiPaKrah3-33').style.display="inline";

  document.querySelector('.copaXhK3-3').style.display="block";
  document.querySelector('.copaXhK2-3').style.display="none";
  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhPaK1-3').style.display="none";
  document.querySelector('.copaXhPaK2-3').style.display="inline";
  document.querySelector('.copaXhPaK3-3').style.display="inline";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhK3-33').innerHTML="1";
   document.querySelector('.XhPK3-22').innerHTML="2";
   document.querySelector('.XhPK3-33').innerHTML="3";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="inline";
     document.querySelector('.RezultatetKrahut32').style.display="none";
     document.querySelector('.RezultatetKrahut33').style.display="none";
 
}
function OpenDysheP332(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto332.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto332.jpg";
   
   document.querySelector('.copaKV-3').innerText='2';
   document.querySelector('.copaKH-3').innerText='2';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="block";
  document.querySelector('#XhamiKrah3-2').style.display="none";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="inline";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="block";
  document.querySelector('.copaXhK2-3').style.display="none";
  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="inline";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhPK3-11').innerHTML="1";
  document.querySelector('.XhK3-33').innerHTML="2";
   document.querySelector('.XhPK3-22').innerHTML="3";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="none";
     document.querySelector('.RezultatetKrahut32').style.display="inline";
     document.querySelector('.RezultatetKrahut33').style.display="none";
 

}
function OpenDysheP333(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto333.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto333.jpg";
   
   document.querySelector('.copaKV-3').innerText='2';
   document.querySelector('.copaKH-3').innerText='2';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="block";
  document.querySelector('#XhamiKrah3-2').style.display="none";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="inline";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="block";
  document.querySelector('.copaXhK2-3').style.display="none";
  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="inline";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhPK3-11').innerHTML="1";
  document.querySelector('.XhK3-33').innerHTML="3";
   document.querySelector('.XhPK3-22').innerHTML="2";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="none";
     document.querySelector('.RezultatetKrahut32').style.display="none";
     document.querySelector('.RezultatetKrahut33').style.display="inline";
 
}
function OpenDysheP334(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto334.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto334.jpg";
   
   document.querySelector('.copaKV-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='4';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhK3-22').innerHTML="1";
  document.querySelector('.XhK3-33').innerHTML="2";
   document.querySelector('.XhPK3-11').innerHTML="3";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="inline";
     document.querySelector('.RezultatetKrahut32').style.display="inline";
     document.querySelector('.RezultatetKrahut33').style.display="none";
 
}
function OpenDysheP335(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto335.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto335.jpg";
   
   document.querySelector('.copaKV-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='4';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="none";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="none";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhK3-11').innerHTML="1";
  document.querySelector('.XhK3-22').innerHTML="3";
   document.querySelector('.XhPK3-11').innerHTML="2";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="inline";
     document.querySelector('.RezultatetKrahut32').style.display="none";
     document.querySelector('.RezultatetKrahut33').style.display="inline";
 
}
function OpenDysheP336(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto336.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto336.jpg";
   
   document.querySelector('.copaKV-3').innerText='6';
   document.querySelector('.copaKH-3').innerText='6';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="none";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="none";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
  document.querySelector('.XhK3-11').innerHTML="1";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-33').innerHTML="3";

    // pershkrimi tek fotot
    document.querySelector('.RezultatetKrahut31').style.display="inline";
    document.querySelector('.RezultatetKrahut32').style.display="inline";
    document.querySelector('.RezultatetKrahut33').style.display="inline";

}
function OpenDysheP337(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto337.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto337.jpg";
   
   document.querySelector('.copaKV-3').innerText='2';
   document.querySelector('.copaKH-3').innerText='2';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="block";
  document.querySelector('#XhamiKrah3-2').style.display="none";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="inline";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="block";
  document.querySelector('.copaXhK2-3').style.display="none";
  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="inline";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhPK3-11').innerHTML="1";
  document.querySelector('.XhK3-33').innerHTML="2";
   document.querySelector('.XhPK3-22').innerHTML="3";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="none";
     document.querySelector('.RezultatetKrahut32').style.display="inline";
     document.querySelector('.RezultatetKrahut33').style.display="none";
 
}
function OpenDysheP338(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto338.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto338.jpg";
   
   document.querySelector('.copaKV-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='4';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhK3-22').innerHTML="1";
  document.querySelector('.XhK3-33').innerHTML="2";
   document.querySelector('.XhPK3-11').innerHTML="3";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="inline";
     document.querySelector('.RezultatetKrahut32').style.display="inline";
     document.querySelector('.RezultatetKrahut33').style.display="none";
 
}
function OpenDysheP339(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto339.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto339.jpg";
   
   document.querySelector('.copaKV-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='4';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="none";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="none";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-11').innerHTML="3";
   document.querySelector('.XhPK3-11').innerHTML="1";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="none";
     document.querySelector('.RezultatetKrahut32').style.display="inline";
     document.querySelector('.RezultatetKrahut33').style.display="inline";
v 
}
function OpenDysheP340(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto340.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto340.jpg";
   
   document.querySelector('.copaKV-3').innerText='6';
   document.querySelector('.copaKH-3').innerText='6';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="none";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="none";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
  document.querySelector('.XhK3-11').innerHTML="1";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-33').innerHTML="3";

    // pershkrimi tek fotot
    document.querySelector('.RezultatetKrahut31').style.display="inline";
    document.querySelector('.RezultatetKrahut32').style.display="inline";
    document.querySelector('.RezultatetKrahut33').style.display="inline";

}
function OpenDysheP341(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto341.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto341.jpg";
   
   document.querySelector('.copaKV-3').innerText='2';
   document.querySelector('.copaKH-3').innerText='2';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="block";
  document.querySelector('#XhamiKrah3-2').style.display="none";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="inline";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="block";
  document.querySelector('.copaXhK2-3').style.display="none";
  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="inline";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhPK3-11').innerHTML="1";
  document.querySelector('.XhK3-33').innerHTML="3";
   document.querySelector('.XhPK3-22').innerHTML="2";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="none";
     document.querySelector('.RezultatetKrahut32').style.display="none";
     document.querySelector('.RezultatetKrahut33').style.display="inline";
 
}
function OpenDysheP342(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto342.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto342.jpg";
   
   document.querySelector('.copaKV-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='4';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="none";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="none";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-11').innerHTML="3";
   document.querySelector('.XhPK3-11').innerHTML="1";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="none";
     document.querySelector('.RezultatetKrahut32').style.display="inline";
     document.querySelector('.RezultatetKrahut33').style.display="inline";
 
}
function OpenDysheP343(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto343.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto343.jpg";
   
   document.querySelector('.copaKV-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='4';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="none";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="none";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhK3-11').innerHTML="1";
  document.querySelector('.XhK3-22').innerHTML="3";
   document.querySelector('.XhPK3-11').innerHTML="2";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="inline";
     document.querySelector('.RezultatetKrahut32').style.display="none";
     document.querySelector('.RezultatetKrahut33').style.display="inline";
 
}
function OpenDysheP344(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto344.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto344.jpg";
   
   document.querySelector('.copaKV-3').innerText='6';
   document.querySelector('.copaKH-3').innerText='6';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="none";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="none";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
  document.querySelector('.XhK3-11').innerHTML="1";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-33').innerHTML="3";

    // pershkrimi tek fotot
    document.querySelector('.RezultatetKrahut31').style.display="inline";
    document.querySelector('.RezultatetKrahut32').style.display="inline";
    document.querySelector('.RezultatetKrahut33').style.display="inline";

}
function OpenDysheP345(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto345.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto345.jpg";
   
   document.querySelector('.copaKV-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='4';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhK3-22').innerHTML="1";
  document.querySelector('.XhK3-33').innerHTML="2";
   document.querySelector('.XhPK3-11').innerHTML="3";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="inline";
     document.querySelector('.RezultatetKrahut32').style.display="inline";
     document.querySelector('.RezultatetKrahut33').style.display="none";
 
}
function OpenDysheP346(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto346.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto346.jpg";
   
   document.querySelector('.copaKV-3').innerText='6';
   document.querySelector('.copaKH-3').innerText='6';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="none";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="none";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
  document.querySelector('.XhK3-11').innerHTML="1";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-33').innerHTML="3";

    // pershkrimi tek fotot
    document.querySelector('.RezultatetKrahut31').style.display="inline";
    document.querySelector('.RezultatetKrahut32').style.display="inline";
    document.querySelector('.RezultatetKrahut33').style.display="inline";

}
function OpenDysheP347(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto347.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto347.jpg";
   
   document.querySelector('.copaKV-3').innerText='6';
   document.querySelector('.copaKH-3').innerText='6';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="none";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="none";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
  document.querySelector('.XhK3-11').innerHTML="1";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-33').innerHTML="3";

    // pershkrimi tek fotot
    document.querySelector('.RezultatetKrahut31').style.display="inline";
    document.querySelector('.RezultatetKrahut32').style.display="inline";
    document.querySelector('.RezultatetKrahut33').style.display="inline";

}
function OpenDysheP348(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto348.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto348.jpg";
   
   document.querySelector('.copaKV-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='4';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="none";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="none";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-11').innerHTML="3";
   document.querySelector('.XhPK3-11').innerHTML="1";

     // pershkrimi tek fotot
     document.querySelector('.RezultatetKrahut31').style.display="none";
     document.querySelector('.RezultatetKrahut32').style.display="inline";
     document.querySelector('.RezultatetKrahut33').style.display="inline";
 
}
function OpenDysheP349(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto349.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto349.jpg";
   
   document.querySelector('.copaKV-3').innerText='6';
   document.querySelector('.copaKH-3').innerText='6';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="none";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="none";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
  document.querySelector('.XhK3-11').innerHTML="1";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-33').innerHTML="3";

    // pershkrimi tek fotot
    document.querySelector('.RezultatetKrahut31').style.display="inline";
    document.querySelector('.RezultatetKrahut32').style.display="inline";
    document.querySelector('.RezultatetKrahut33').style.display="inline";

}
function OpenDysheP350(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Foto350.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Foto350.jpg";
   
   document.querySelector('.copaKV-3').innerText='6';
   document.querySelector('.copaKH-3').innerText='6';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="none";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="none";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
  document.querySelector('.XhK3-11').innerHTML="1";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-33').innerHTML="3";

    // pershkrimi tek fotot
    document.querySelector('.RezultatetKrahut31').style.display="inline";
    document.querySelector('.RezultatetKrahut32').style.display="inline";
    document.querySelector('.RezultatetKrahut33').style.display="inline";

}




function OpenDysheeA1(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Adapteri-31.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Adapteri-31.jpg";
   
   document.querySelector('.copaKV-3').innerText='6';
   document.querySelector('.copaKH-3').innerText='6';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="none";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="none";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
  document.querySelector('.XhK3-11').innerHTML="1";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-33').innerHTML="3";



  document.querySelector('.KrahuTresheHAr-1').style.display="inline";
  document.querySelector('.Krahu3Ar-H').style.display='inline';
  document.querySelector('.KcopaAr-3').style.display="inline";
  document.querySelector('.ArmaturaR').style.display='inline';

    // pershkrimi tek fotot
    document.querySelector('.RezultatetKrahut31').style.display="inline";
    document.querySelector('.RezultatetKrahut32').style.display="inline";
    document.querySelector('.RezultatetKrahut33').style.display="inline";

   
 }

 function OpenDysheeA2(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Adapteri-32.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Adapteri-32.jpg";
   
   document.querySelector('.copaKV-3').innerText='6';
   document.querySelector('.copaKH-3').innerText='6';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="none";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="none";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
  document.querySelector('.XhK3-11').innerHTML="1";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-33').innerHTML="3";


  document.querySelector('.KrahuTresheHAr-1').style.display="inline";
  document.querySelector('.Krahu3Ar-H').style.display='inline';
  document.querySelector('.KcopaAr-3').style.display="inline";
  document.querySelector('.ArmaturaR').style.display='inline';

    // pershkrimi tek fotot
    document.querySelector('.RezultatetKrahut31').style.display="inline";
    document.querySelector('.RezultatetKrahut32').style.display="inline";
    document.querySelector('.RezultatetKrahut33').style.display="inline";

   
 }
 function OpenDysheeA3(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Adapteri-33.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Adapteri-33.jpg";
   
   document.querySelector('.copaKV-3').innerText='6';
   document.querySelector('.copaKH-3').innerText='6';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="none";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="none";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
  document.querySelector('.XhK3-11').innerHTML="1";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-33').innerHTML="3";


  document.querySelector('.KrahuTresheHAr-1').style.display="inline";
  document.querySelector('.Krahu3Ar-H').style.display='inline';
  document.querySelector('.KcopaAr-3').style.display="inline";
  document.querySelector('.ArmaturaR').style.display='inline';

    // pershkrimi tek fotot
    document.querySelector('.RezultatetKrahut31').style.display="inline";
    document.querySelector('.RezultatetKrahut32').style.display="inline";
    document.querySelector('.RezultatetKrahut33').style.display="inline";

   
 }
 function OpenDysheeA4(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Adapteri-34.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Adapteri-34.jpg";
   
   document.querySelector('.copaKV-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='4';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="none";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="none";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="inline";

  document.querySelector('.copaXhK3-3').style.display="none";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="inline";

  document.querySelector('.copaXhPaK1-3').style.display="none";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="inline";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
  document.querySelector('.XhK3-11').innerHTML="1";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhPK3-33').innerHTML="3";
  

  document.querySelector('.KrahuTresheHAr-1').style.display='none';
  document.querySelector('.KcopaAr-3').style.display='none';
  document.querySelector('.ArmaturaR').style.display='none';

    // pershkrimi tek fotot
    document.querySelector('.RezultatetKrahut31').style.display="inline";
    document.querySelector('.RezultatetKrahut32').style.display="inline";
    document.querySelector('.RezultatetKrahut33').style.display="none";

   
 }
 function OpenDysheeA5(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Adapteri-35.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Adapteri-35.jpg";
   
   document.querySelector('.copaKV-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='4';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
  document.querySelector('.XhK3-33').innerHTML="3";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhPK3-11').innerHTML="1";

  document.querySelector('.KrahuTresheHAr-1').style.display='none';
  document.querySelector('.KcopaAr-3').style.display='none';
  document.querySelector('.ArmaturaR').style.display='none';

    // pershkrimi tek fotot
    document.querySelector('.RezultatetKrahut31').style.display="none";
    document.querySelector('.RezultatetKrahut32').style.display="inline";
    document.querySelector('.RezultatetKrahut33').style.display="inline";

   
 }
 function OpenDysheeA6(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Adapteri-36.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Adapteri-36.jpg";
   
   document.querySelector('.copaKV-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='4';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
  document.querySelector('.XhK3-33').innerHTML="3";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhPK3-11').innerHTML="1";

  document.querySelector('.KrahuTresheHAr-1').style.display='none';
  document.querySelector('.KcopaAr-3').style.display='none';
  document.querySelector('.ArmaturaR').style.display='none';

    // pershkrimi tek fotot
    document.querySelector('.RezultatetKrahut31').style.display="none";
    document.querySelector('.RezultatetKrahut32').style.display="inline";
    document.querySelector('.RezultatetKrahut33').style.display="inline";

   
 }
 function OpenDysheeA7(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Adapteri-37.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Adapteri-37.jpg";
   
   document.querySelector('.copaKV-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='4';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
  document.querySelector('.XhK3-33').innerHTML="3";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhPK3-11').innerHTML="1";


  document.querySelector('.KrahuTresheHAr-1').style.display='none';
  document.querySelector('.KcopaAr-3').style.display='none';
  document.querySelector('.ArmaturaR').style.display='none';

    // pershkrimi tek fotot
    document.querySelector('.RezultatetKrahut31').style.display="none";
    document.querySelector('.RezultatetKrahut32').style.display="inline";
    document.querySelector('.RezultatetKrahut33').style.display="inline";

   
 }
 function OpenDysheeA8(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Adapteri-38.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Adapteri-38.jpg";

   document.querySelector('.copaKV-3').innerText='4';
   document.querySelector('.copaKH-3').innerText='4';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="none";
  document.querySelector('#XhamiPaKrah3-11').style.display="inline";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="none";
  document.querySelector('.copaXhPaK1-3').style.display="inline";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
  document.querySelector('.XhK3-33').innerHTML="3";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhPK3-11').innerHTML="1";


  document.querySelector('.KrahuTresheHAr-1').style.display='none';
  document.querySelector('.KcopaAr-3').style.display='none';
  document.querySelector('.ArmaturaR').style.display='none';

    // pershkrimi tek fotot
    document.querySelector('.RezultatetKrahut31').style.display="none";
    document.querySelector('.RezultatetKrahut32').style.display="inline";
    document.querySelector('.RezultatetKrahut33').style.display="inline";

   
 }
 function OpenDysheeA9(){
   document.querySelector('.Dritare-3').style.display='block';
   document.Foto3.src="Foto-Dritare/Adapteri-39.jpg"
   // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
   document.slider3.src="Foto-Dritare/Adapteri-39.jpg";
   
   document.querySelector('.copaKV-3').innerText='6';
   document.querySelector('.copaKH-3').innerText='6';

   document.querySelector('.Krahu3-V').style.display="inline";
   document.querySelector('.Krahu3-H').style.display='inline';

  document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
  document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
  
  document.querySelector('#XhamiKrah3-3').style.display="inline";
  document.querySelector('#XhamiKrah3-2').style.display="inline";
  document.querySelector('#XhamiKrah3-1').style.display="inline";
  document.querySelector('#XhamiPaKrah3-11').style.display="none";
  document.querySelector('#XhamiPaKrah3-22').style.display="none";
  document.querySelector('#XhamiPaKrah3-33').style.display="none";

  document.querySelector('.copaXhK3-3').style.display="inline";
  document.querySelector('.copaXhK1-3').style.display="inline";
  document.querySelector('.copaXhK2-3').style.display="inline";
  document.querySelector('.copaXhPaK1-3').style.display="none";
  document.querySelector('.copaXhPaK2-3').style.display="none";
  document.querySelector('.copaXhPaK3-3').style.display="none";

  //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
  document.querySelector('.XhK3-11').innerHTML="1";
  document.querySelector('.XhK3-22').innerHTML="2";
  document.querySelector('.XhK3-33').innerHTML="3";


  document.querySelector('.KrahuTresheHAr-1').style.display="inline";
  document.querySelector('.Krahu3Ar-H').style.display='inline';
  document.querySelector('.KcopaAr-3').style.display="inline";
  document.querySelector('.ArmaturaR').style.display='inline';

    // pershkrimi tek fotot
    document.querySelector('.RezultatetKrahut31').style.display="inline";
    document.querySelector('.RezultatetKrahut32').style.display="inline";
    document.querySelector('.RezultatetKrahut33').style.display="inline";

   
 }
 function OpenDysheeA10(){
  document.querySelector('.Dritare-3').style.display='block';
  document.Foto3.src="Foto-Dritare/Adapteri-310.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.slider3.src="Foto-Dritare/Adapteri-310.jpg";
  
  document.querySelector('.copaKV-3').innerText='6';
  document.querySelector('.copaKH-3').innerText='6';

  document.querySelector('.Krahu3-V').style.display="inline";
  document.querySelector('.Krahu3-H').style.display='inline';

 document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
 
 document.querySelector('#XhamiKrah3-3').style.display="inline";
 document.querySelector('#XhamiKrah3-2').style.display="inline";
 document.querySelector('#XhamiKrah3-1').style.display="inline";
 document.querySelector('#XhamiPaKrah3-11').style.display="none";
 document.querySelector('#XhamiPaKrah3-22').style.display="none";
 document.querySelector('#XhamiPaKrah3-33').style.display="none";

 document.querySelector('.copaXhK3-3').style.display="inline";
 document.querySelector('.copaXhK1-3').style.display="inline";
 document.querySelector('.copaXhK2-3').style.display="inline";
 document.querySelector('.copaXhPaK1-3').style.display="none";
 document.querySelector('.copaXhPaK2-3').style.display="none";
 document.querySelector('.copaXhPaK3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
 document.querySelector('.XhK3-11').innerHTML="1";
 document.querySelector('.XhK3-22').innerHTML="2";
 document.querySelector('.XhK3-33').innerHTML="3";


 document.querySelector('.KrahuTresheHAr-1').style.display="inline";
 document.querySelector('.Krahu3Ar-H').style.display='inline';
 document.querySelector('.KcopaAr-3').style.display="inline";
 document.querySelector('.ArmaturaR').style.display='inline';

   // pershkrimi tek fotot
   document.querySelector('.RezultatetKrahut31').style.display="inline";
   document.querySelector('.RezultatetKrahut32').style.display="inline";
   document.querySelector('.RezultatetKrahut33').style.display="inline";

  
}
function OpenDysheeA11(){
  document.querySelector('.Dritare-3').style.display='block';
  document.Foto3.src="Foto-Dritare/Adapteri-311.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.slider3.src="Foto-Dritare/Adapteri-311.jpg";
  
  document.querySelector('.copaKV-3').innerText='6';
  document.querySelector('.copaKH-3').innerText='6';

  document.querySelector('.Krahu3-V').style.display="inline";
  document.querySelector('.Krahu3-H').style.display='inline';

 document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
 
 document.querySelector('#XhamiKrah3-3').style.display="inline";
 document.querySelector('#XhamiKrah3-2').style.display="inline";
 document.querySelector('#XhamiKrah3-1').style.display="inline";
 document.querySelector('#XhamiPaKrah3-11').style.display="none";
 document.querySelector('#XhamiPaKrah3-22').style.display="none";
 document.querySelector('#XhamiPaKrah3-33').style.display="none";

 document.querySelector('.copaXhK3-3').style.display="inline";
 document.querySelector('.copaXhK1-3').style.display="inline";
 document.querySelector('.copaXhK2-3').style.display="inline";
 document.querySelector('.copaXhPaK1-3').style.display="none";
 document.querySelector('.copaXhPaK2-3').style.display="none";
 document.querySelector('.copaXhPaK3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
 document.querySelector('.XhK3-11').innerHTML="1";
 document.querySelector('.XhK3-22').innerHTML="2";
 document.querySelector('.XhK3-33').innerHTML="3";


 document.querySelector('.KrahuTresheHAr-1').style.display="inline";
 document.querySelector('.Krahu3Ar-H').style.display='inline';
 document.querySelector('.KcopaAr-3').style.display="inline";
 document.querySelector('.ArmaturaR').style.display='inline';

   // pershkrimi tek fotot
   document.querySelector('.RezultatetKrahut31').style.display="inline";
   document.querySelector('.RezultatetKrahut32').style.display="inline";
   document.querySelector('.RezultatetKrahut33').style.display="inline";
  
}
function OpenDysheeA12(){
  document.querySelector('.Dritare-3').style.display='block';
  document.Foto3.src="Foto-Dritare/Adapteri-312.jpg"
  // document.querySelector('.Llojet').innerHTML="Dritare Dyshese";
  document.slider3.src="Foto-Dritare/Adapteri-312.jpg";
  
  document.querySelector('.copaKV-3').innerText='6';
  document.querySelector('.copaKH-3').innerText='6';

  document.querySelector('.Krahu3-V').style.display="inline";
  document.querySelector('.Krahu3-H').style.display='inline';

 document.querySelector('.ArmaturaKrahuV-3').style.display="inline";
 document.querySelector('.ArmaturaKrahuH-3').style.display="inline";
 
 document.querySelector('#XhamiKrah3-3').style.display="inline";
 document.querySelector('#XhamiKrah3-2').style.display="inline";
 document.querySelector('#XhamiKrah3-1').style.display="inline";
 document.querySelector('#XhamiPaKrah3-11').style.display="none";
 document.querySelector('#XhamiPaKrah3-22').style.display="none";
 document.querySelector('#XhamiPaKrah3-33').style.display="none";

 document.querySelector('.copaXhK3-3').style.display="inline";
 document.querySelector('.copaXhK1-3').style.display="inline";
 document.querySelector('.copaXhK2-3').style.display="inline";
 document.querySelector('.copaXhPaK1-3').style.display="none";
 document.querySelector('.copaXhPaK2-3').style.display="none";
 document.querySelector('.copaXhPaK3-3').style.display="none";

 //  document.querySelector('.Llojet').innerHTML="Dritare Dyshese"
 document.querySelector('.XhK3-11').innerHTML="1";
 document.querySelector('.XhK3-22').innerHTML="2";
 document.querySelector('.XhK3-33').innerHTML="3";


 document.querySelector('.KrahuTresheHAr-1').style.display="inline";
 document.querySelector('.Krahu3Ar-H').style.display='inline';
 document.querySelector('.KcopaAr-3').style.display="inline";
 document.querySelector('.ArmaturaR').style.display='inline';

   // pershkrimi tek fotot
   document.querySelector('.RezultatetKrahut31').style.display="inline";
   document.querySelector('.RezultatetKrahut32').style.display="inline";
   document.querySelector('.RezultatetKrahut33').style.display="inline";
  
}
