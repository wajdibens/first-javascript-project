
//question 1


function getRadioValue() {
    var valeur
    var nameElement = document.getElementsByName('capitaleAngleterre');
    for (i = 0; i < nameElement.length; i++) {
        if (nameElement[i].checked)
            document.getElementById("resultat").innerHTML
                = "La réponse est : " + nameElement[i].value;
        valeur = document.querySelector('input[name ="capitaleAngleterre"]:checked').value;

    }
    if (valeur == 'Londres') {
        var rep1 = "correcte"
        document.getElementById("resultat").innerHTML
            = "Bonne reponse";

    } else {
        document.getElementById("resultat").innerHTML
            = "Mauvaise reponse";
    }

}

//question 2


function reponse(QCM) {
    if ((QCM.ville1.checked) == true && (QCM.ville2.checked) == false && (QCM.ville3.checked) == true && (QCM.ville4.checked) == true && (QCM.ville5.checked) == false && (QCM.choice2.checked)) { alert("Bonne réponse! ") }
    else { alert("Mauvaise réponse") }
}

// function message (){
//     const buttonElement = document.getElementById('btn');
//     buttonElement.addEventListener('click', function (event) {
//     console.log('Élément cliqué avec une fonction !');
// })
// }

// document.getElementById("btn").addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }

document.getElementById("btn").addEventListener("click", function(e) {
    e.preventDefault();
    if ((QCM.ville1.checked) == true && (QCM.ville2.checked) == false && (QCM.ville3.checked) == true && (QCM.ville4.checked) == true && (QCM.ville5.checked) == false && (QCM.choice2.checked))

{document.getElementById("demo").innerHTML = "Bonne Reponse"  } else {document.getElementById("demo2").innerHTML = "Mauvaise reponse" }

  });

  function Vider (){
   
    document.getElementById("demo").innerHTML = "" 
    document.getElementById("demo2").innerHTML = "" 

    document.getElementById("choice1").checked = false
    document.getElementById("choice2").checked = false 
    document.getElementById("choice3").checked = false 


    document.getElementById("Rome").checked = false
    document.getElementById("Marrakech").checked = false 
    document.getElementById("Bali").checked = false 
    document.getElementById("Bruxelles").checked = false 
    document.getElementById("Stockholm").checked = false 
    //  document.getElementById('demo2').value =""

  }












/*premiere question

function reponse(capitaleAngleterre){
    if(capitaleAngleterre === "Londres"){
        document.getElementById('#capitale').innerText = 'Bonne reponse';
    }else{
         document.getElementById('#capitale').innerText = 'Mauvaise reponse';
    }
}
console.log(capitaleAngleterre)*/

/*deuxieme question

function verificationReponse(id){
    if (
        document.getEelementById('#Rome').checked = true
        && document.getEelementById('#Marrakech').checked = false
        && document.getEelementById('#Bruxelles').checked = true
        && document.getEelementById('#Stockholm').checked = true
        && document.getEelementById('#Bali').checked = false
        )
    return "Bonne reponse"
}else return "Mauvaise reponse"






<input type=checkbox id=caseACocher/>
document.getElementById(caseACocher).checked = true; //Coche la case à cocher
document.getElementById(caseACocher).checked = false; //Décoche la case à cocher*/




/*function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => {
    alert(getSelectedCheckboxValues('villes'));
});




var otherCheckbox = document.querySelector('input[value="other"]');
var otherText = document.querySelector('input[id="otherValue"]');
otherText.style.visibility = 'hidden';

otherCheckbox.onchange = function() {
  if(otherCheckbox.checked) {
    otherText.style.visibility = 'visible';
    otherText.value = '';
  } else {
    otherText.style.visibility = 'hidden';
  }
};*/


