console.log('started ')


function searchForItem() {
	// body...

	
 	var input, filter, ul, cont, span, i, txtValue;

    input = document.querySelector("#search-bar");
    filter = input.value.toUpperCase();
    
    cont =  document.querySelectorAll(".item-cont");
     
     
    for (i = 0; i < cont.length; i++) {
        span = cont[i].children[0].children[1].children[0];
        console.log(span.textContent)
        txtValue = span.textContent || span.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            cont[i].style.display = "";
        } else {
            cont[i].style.display = "none";
        }
    }
    console.log("work")

}



function myF(argument) {
	 
	 alert('hello this is uprightsupermarket')
}


let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
