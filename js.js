
// Rezultatet 1
  function myFunction(x) {
    if (x.matches) { 
        var Class=document.querySelector('#DeletedClass-1');
        Class.classList.remove('container');


        var x = window.matchMedia("(max-width: 765px)")
      
        x.addListener(myFunction)
    } else {
        var Class=document.querySelector('#DeletedClass-1');
        Class.classList.add('container');

    }
  }
  
  var x = window.matchMedia("(max-width: 765px)")
  myFunction(x); // Call listener function at run time
  x.addListener(myFunction);

// Rezultatet 2

function myFunctionTwo(y) {
    if (y.matches) { 
        var ClassTwo=document.querySelector('#DeletedClass-2');
        ClassTwo.classList.remove('container');


        var y = window.matchMedia("(max-width: 765px)")
      
        y.addListener(myFunctionTwo)
    } else {
        var ClassTwo=document.querySelector('#DeletedClass-2');
        ClassTwo.classList.add('container');

    }
  }
  
  var y = window.matchMedia("(max-width: 765px)")
  myFunctionTwo(y) // Call listener function at run time
  y.addListener(myFunctionTwo);


//   Rezultatet 2 Ndarse

function myFunctionThree(z) {
    if (z.matches) { 
        var ClassThree=document.querySelector('#DeletedClass-2N');
        ClassThree.classList.remove('container');


        var z = window.matchMedia("(max-width: 765px)")
       
        z.addListener(myFunctionThree);
    } else {
        var ClassThree=document.querySelector('#DeletedClass-2N');
        ClassThree.classList.add('container');

    }
  }
  
  var z = window.matchMedia("(max-width: 765px)")
  myFunctionThree(z) // Call listener function at run time
  z.addListener(myFunctionThree);

//   Rezultatet 3

function myFunctionFour(a) {
    if (a.matches) { 
        var ClassFour=document.querySelector('#DeletedClass-3');
        ClassFour.classList.remove('container');


        var a = window.matchMedia("(max-width: 765px)")
       
        a.addListener(myFunctionFour);
    } else {
        var ClassFour=document.querySelector('#DeletedClass-3');
        ClassFour.classList.add('container');

    }
  }
  
  var a = window.matchMedia("(max-width: 765px)")
  myFunctionFour(a) // Call listener function at run time
  a.addListener(myFunctionFour);

//   Rezultati 3 Ndares

function myFunctionFive(b) {
    if (b.matches) { 
        var ClassFive=document.querySelector('#DeletedClass-3N');
        ClassFive.classList.remove('container');


        var b = window.matchMedia("(max-width: 765px)")
        b.addListener(myFunctionFive);
    } else {
        var ClassFive=document.querySelector('#DeletedClass-3N');
        ClassFive.classList.add('container');

    }
  }
  
  var b = window.matchMedia("(max-width: 765px)")
  myFunctionFive(b) // Call listener function at run time
  b.addListener(myFunctionFive);

//   Rezultatet 4

function myFunctionSix(c) {
    if (c.matches) { 
        var ClassSix=document.querySelector('#DeletedClass-4');
        ClassSix.classList.remove('container');


        var c = window.matchMedia("(max-width: 765px)")
        c.addListener(myFunctionSix);
    } else {
        var ClassSix=document.querySelector('#DeletedClass-4');
        ClassSix.classList.add('container');

    }
  }
  
  var c = window.matchMedia("(max-width: 765px)")
  myFunctionSix(c) // Call listener function at run time
  c.addListener(myFunctionSix);



//   Rezultatet 4 Ndarse

function myFunctionSeven(d) {
    if (d.matches) { 
        var ClassSix=document.querySelector('#DeletedClass-4N');
        ClassSix.classList.remove('container');


        var d = window.matchMedia("(max-width: 765px)")
        d.addListener(myFunctionSeven);
    } else {
        var ClassSix=document.querySelector('#DeletedClass-4N');
        ClassSix.classList.add('container');

    }
  }
  
  var d = window.matchMedia("(max-width: 765px)")
  myFunctionSeven(d) // Call listener function at run time
  d.addListener(myFunctionSeven);


  document.querySelector('.Image-Dritare1').addEventListener('click',Opecity);

function Opecity(){
    document.querySelector('body').style.Opecity='0.8';
}


const modal=document.querySelector('.Dritare1-PerFoto');
const Body=document.querySelector('.Body');
const close=document.querySelector('.xx1');
const Open=document.querySelector('.Image-Dritare');
const mymodal=document.querySelector('.my-modal');

// Open.addEventListener('click',function(){
//     // modal.classList.remove('hidden');
//     // Body.classList.remove('B');
//     modal.classList.add('hidden');
//     Body.classList.add('B')
//  mymodal.style.opecity='1'
// })

// close.addEventListener('click',CloseModal);
// function CloseModal(){
//     modal.classList.remove('hidden');
//     Body.classList.remove('B');
   
//     // modal.classList.add('hidden');
//     // Body.classList.add('B')
// }