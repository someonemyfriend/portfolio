// $(document).ready(function(){
//     $("#json_btn").click(function(){
//         $.getJSON("test.json", function(result){
//         $.each(result, function(key, value){
//             $("div").append(value + " ");
//         });
//         console.log(result);
//         });
//     });
// });


// function myFunction() {
//     var x, text;
  
//     // Get the value of the input field with id="numb"
//     x = document.getElementById("numb").value;
  
//     // If x is Not a Number or less than one or greater than 10
//     if (isNaN(x) || x < 1 || x > 10) {
//       text = "Input not valid";
//     } else {
//       text = "Input OK";
//     }
//     document.getElementById("demo").innerHTML = text;
// }


let patients = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addConsultation = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let patient = {
        id: Date.now(),
        title: document.getElementById('title').value,
        year: document.getElementById('yr').value
    }
    patients.push(patient);
    //document.forms[0].reset(); // to clear the form for the next entries
    document.getElementById('form_consultation').reset();
    //for display purposes only
    console.warn('added' , {patients} );
   
    const newDiv = document.createElement("div");
    newDiv.classList.add('style-newConsultation-sheduled-list');
    var i;
    for ( i = 0; i < patients.length; i++) {
        //newDiv.textContent = patients[i].title + ' ' + patients[i].year;
        let contentInsert = patients[i].title + ' ' + patients[i].year;
        newDiv.textContent = contentInsert;
    }
    
    let showFirstThing = document.querySelector('#printHere');
    //let parentDiv = showFirstThing.parentNode;
    showFirstThing.insertBefore(newDiv,showFirstThing.childNodes[0]);


    //saving to localStorage
    localStorage.setItem('MyMovieList', JSON.stringify(patients) );
}


document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addConsultation);
});

function makeNewConsultation() {
  
}
