
var requestTransfer = (function(){
	  let item;
	  function Item(name, quantity){

	  	this.name = name;
	    this.quantity = parseInt(quantity);

	  }

	 let requestOptions = document.querySelectorAll('.items-for-request');

	 requestOptions.forEach(function(e){
	 	

	 	let requestQuantity = e.lastElementChild.previousElementSibling
	 	let requestButton = e.lastElementChild;
	 	let itemName = e.firstElementChild;

	  
	 


	 	requestButton.addEventListener('click', function(e){

	 		e.preventDefault();

	 		item = new Item(itemName.textContent, requestQuantity.value);

	 		// Do json 
	 		console.log(item)


	 	});


	 });


}());




// Transfer Item
var transferItem = (function(){
	  let item;
	  function Item(name, quantity){

	  	this.name = name;
	  	this.quantity = parseInt(quantity);

	  }

	 let transferRequest = document.querySelectorAll('.requested-item');

	 transferRequest.forEach(function(e){
	 	

	 	let declineTransferBtn = e.lastElementChild.previousElementSibling;
	 	let transferButton = e.lastElementChild;
	 	let itemName = e.firstElementChild;
	 	let transferQuantity =  e.firstElementChild.nextElementSibling;



	 transferButton.addEventListener('click', function(e){

	 		e.preventDefault();

	 		item = new Item(itemName.textContent, transferQuantity.textContent);

	 		// Do json 
	 		console.log(item)


	 	}); 


	 });


}());
