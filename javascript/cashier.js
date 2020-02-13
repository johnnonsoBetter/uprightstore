	let itemsInCounter = [];
	let itemsToBeReturned = [];
	let itemName;
	let counter = document.getElementById('on-sale');

// Item to be sold object
	function Item(name, quantity, price)
    {

        this.name = name;
        this.quantity = 1;
        this.price =  parseInt(price, 10) * this.quantity;
        this.fixedPrice = this.price;


        this.priceEdited = false;


    }


    Item.prototype.setQuantity = function (qty)
    {

        this.quantity = qty;
    }


 



    var ItemOnShelfQuantity = (function(){

    	let itemsOnShelf = document.querySelectorAll('.item');
        let  array = [];
        let rollBackQuantitiy = [];


    	itemsOnShelf.forEach(function(e){

    				
    		array.push(e.children[0].children[0].children[0].textContent)

    	});

    	console.log('loaded')
    	return {

    		getFixedQuantity: function(index){

    			

    			let total = parseInt(array[index]);
    		
    			return total;

    		},



    		roleBackChanges: function(){

    			let index = 0;

    			itemsOnShelf.forEach(function(e){


    				e.children[0].children[0].children[0].textContent = array[index];

    				index++;

    			});
    		}



    	}

    })();

	window.onload = ()=> {

		let quantityInput;
		let removeItemBtns;
		let thePriceInput;
		let template;


		activateSellButton();

		var addToCounterBtn = document.querySelectorAll('.add-to-counter-btn'); // returns NodeList

		var add_to_counterBtn_array = [...addToCounterBtn]; // converts NodeList to Array

		add_to_counterBtn_array.forEach(function(e) {

			

			e.onclick = addItemToCounter;


			

			

		});


		document.getElementById('clear-btn').addEventListener('click', function(){


			clearItemsOnCounter();
		});
		

	}

	function addItemToCounter(e){

				function disableButton(){
					e.target.disabled = true;
					e.target.textContent = 'Added';
				}

				let item_name = e.target.parentNode.parentNode.children[1].children[0].textContent;
				let item_quantity = e.target.parentNode.parentNode.children[0].children[0];
				let item_price = e.target.parentNode.parentNode.children[1].children[1];

		     	let item = new Item(item_name, item_quantity.textContent,  item_price.textContent);
				let cont = document.createElement('div');
			    
			  
			
				

		    	let nameBtnCont = document.createElement('div');
				let name = document.createElement('h6');
				let removeBtnCont = document.createElement('small');
				let removeBtn = document.createElement('i');
				let inputCont = document.createElement('div');
				let prePend = document.createElement('div');
				let dollarSign =  document.createElement('span');
				let priceInput =  document.createElement('input');
				let quantityInput =  document.createElement('input');
				
				//let cont = document.createElement('div');

				priceInput.classList.add('form-control',  'priceInput');
				quantityInput.classList.add('text-center', 'qtyInput');
				inputCont.classList.add('input-group');
				dollarSign.classList.add('input-group-text', 'bg-dark', 'text-white');
				prePend.classList.add('input-group-prepend');
			    cont.classList.add('list-group-item', 'list-group-item-action', 'flex-column', 'align-items-start', 'on-sale-item', 'bg-warning');
				nameBtnCont.classList.add('d-flex', 'w-100', 'justify-content-between')
				name.classList.add('mb-1');
				removeBtn.classList.add('fa', 'fa-times', 'text-danger','remove-item-btn');
				removeBtn.style ="padding: 5px;"
				

				name.textContent = item.name;
				quantityInput.value = item.quantity;
				priceInput.value = item.price;
				dollarSign.innerHTML = '$';
				priceInput.type = 'text';
				priceInput.id = 'price-input';
				quantityInput.type = 'number';

				quantityInput.style = 'width: 40px; margin:0 5px;'
				inputCont.style = 'width: 170px;'



				
				inputCont.appendChild(prePend);
				
				inputCont.appendChild(priceInput);
				inputCont.appendChild(quantityInput);
				prePend.appendChild(dollarSign);
				removeBtnCont.appendChild(removeBtn);
				nameBtnCont.appendChild(removeBtnCont);
				nameBtnCont.appendChild(name);
				nameBtnCont.appendChild(removeBtnCont);


			
			    cont.appendChild(nameBtnCont);
			    cont.appendChild(inputCont);
			    counter.appendChild(cont)
			  

			    itemsInCounter.push(item);
			    updateTotalPrice();
			    reduceQuantityByOne(item_quantity);
			    disableButton();
			    activateSellButton();
			    updateItemInCounter_Count();
			  
			     // Events Listeners for each component

				 removeItemBtns = document.querySelectorAll('.remove-item-btn');

				 quantityInput = document.querySelectorAll('.qtyInput');

				 thePriceInput = document.querySelectorAll('.priceInput');



			    	quantityInput.forEach(function(e){


			    		e.onclick = reflectNewQuantitiyOnPrice;
			    		


			    	});

						
				  removeItemBtns.forEach((button) => {

				  	// and for each one we add a 'click' listener
				  	button.onclick = removeItemFromCounter;

				   });


				  thePriceInput.forEach(function(e){


			    		e.onkeyup = changePrice;


			      });






							

			
		
	}


	function removeItemFromCounter(e){

		let index = 0;
		let container = document.querySelectorAll('.on-sale-item');
		let itemName = e.target.parentNode.parentNode.children[0].textContent;
	
			 

			  for (var x = 0; x < itemsInCounter.length; x++) {
                              
               if (itemName ===  itemsInCounter[x].name){
                  

                        index = x;
                        break;
                        
               }


           }

           function enableAddButton(){
			

			var itemOnShelf = document.querySelectorAll('.item');

			itemOnShelf.forEach(function(e){

				var button = e.children[0].children[2].children[0];
				var title = e.children[0].children[1].children[0].textContent;

				if(title === itemName){

					
					button.disabled = false;
					button.textContent = 'Add';

				}

			});
		}

            
        itemsInCounter.splice(index, 1 );

             
		counter.removeChild(container[index]);
		updateTotalPrice();
		enableAddButton();
		activateSellButton();
		updateItemInCounter_Count();
		console.log(itemsInCounter)


	}



	 function clearItemsOnCounter()
    {

    	 function enableAllAddButton(){
			

			var itemOnShelf = document.querySelectorAll('.item');

			itemOnShelf.forEach(function(e){

				var button = e.children[0].children[2].children[0];
				var title = e.children[0].children[1].children[0].textContent;

						
					button.disabled = false;
					button.textContent = 'Add';			

			});
		}

        while (counter.firstChild)
        {

            counter.removeChild(counter.firstChild);


        }
         itemsInCounter = [];

         updateTotalPrice();
         enableAllAddButton();
         activateSellButton();
         updateItemInCounter_Count();
         ItemOnShelfQuantity.roleBackChanges();

         console.log(itemsInCounter)
        console.log('cleared items')

    }


    function updateTotalPrice(){

    	let totalPrice = 0;


    	for(var x = 0; x < itemsInCounter.length; x++){

    		totalPrice += itemsInCounter[x].price * itemsInCounter[x].quantity;

    	}

    	document.getElementById('total-price').value = totalPrice;
    	console.log('price updated')

    }




    function reflectNewQuantitiyOnPrice(e){
    	var value = parseInt(e.target.value);
    	
    	let itemName = e.target.parentNode.parentNode.children[0].children[0].textContent;
    
    	let index = 0;

    	if(value <=  0){
    	     value = 1;
    		e.target.value = 1;
    	

    	}

    	for(var x = 0; x < itemsInCounter.length; x++){


    		if(itemName === itemsInCounter[x].name){
    			index = x;
    			break;

    		}
    		
    	}


    	itemsInCounter[index].quantity = value;
    	 updateItemInShelfQuantity(e, value, itemsInCounter);
    	
    	 updateTotalPrice();
    	


    }


    function updateItemInShelfQuantity(event, value){

    	
    	let totalValue;
       	let title;
    	let tracker = 0;
    	let index = 0;
    	let itemOnShelf = document.querySelectorAll('.item');
    	
    	let itemName = event.target.parentNode.parentNode.children[0].children[0].textContent;
    	let item_quantity;

    	
    	itemOnShelf.forEach(function(e){

    	 title = e.children[0].children[1].children[0].textContent;

    	 if(title === itemName){
    	 	index = tracker;
    	 	item_quantity = itemOnShelf[index].children[0].children[0].children[0];
    	 	totalValue = ItemOnShelfQuantity.getFixedQuantity(index);

    	 	if(value > totalValue){
    	 		alert('you do not have enough item on shelf')
    	 		
    	 		for(var i = 0; i < itemsInCounter.length; i++){


    	 			if(itemName === itemsInCounter[i].name){

    	 				itemsInCounter[i].quantity = itemsInCounter[i].quantity - 1;
    	 			}
    	 		}

    	 		event.target.value = totalValue;
    	 		


    	 	}else if(value === totalValue){
    	 	 
    	   
    	 	item_quantity.textContent = totalValue - value;

    	 	}else{

    	 			item_quantity.textContent = totalValue - value;
    	 			console.log('total value ' + totalValue + ' - ' + value + ' value');
    	 	}

    	 
    	 }
    	 tracker++;
    	 	

    	});

 
    console.log(itemsInCounter)


    }



    function changePrice(e){

    	var value = parseInt(e.target.value);
    	let itemName = e.target.parentNode.parentNode.children[0].children[0].textContent;
    	console.log(itemName)
    	let index = 0;


    	for(var x = 0; x < itemsInCounter.length; x++){


    		if(itemName === itemsInCounter[x].name){
    			index = x;
    			break;

    		}
    		
    	}



    	itemsInCounter[index].price = value;
    	
    	if(itemsInCounter[index].price === itemsInCounter[index].fixedPrice){
    		itemsInCounter[index].priceEdited = false;
    	}else{

    		itemsInCounter[index].priceEdited = true;
    	}


    
    updateTotalPrice();
    console.log(itemsInCounter)



    }



    function reduceQuantityByOne(quantity){

    	let _quantity = parseInt(quantity.textContent, 10) - 1;
    
    	quantity.textContent = _quantity;
        console.log('quantitiy reduced by one')

    }


    function activateSellButton(){

    	var sell_btn = document.getElementById('sell-btn');


    	if(itemsInCounter.length == 0){

    		sell_btn.disabled = true;
    	}else{

    		sell_btn.disabled = false;

    	}

    }



    function updateItemInCounter_Count(){

    		var item_counter = document.getElementById('total-item-counting');

    		console.log(' my ' +item_counter.textContent)
    		item_counter.textContent = itemsInCounter.length;


    }



// Search Bar
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
        if (txtValue.toUpperCase().indexOf(filter) > -1 || input.value.length == 0) {
            cont[i].style.display = "";
        } else {
            cont[i].style.display = "none";
        }
    }
  


}



// Validates Input
function validateInput(e){
	let sellItemBtn = document.getElementById('sell-btn');
	let input = e.target;
	if(isNaN(input.value)){

		console.log(' number')
		input.style.borderColor = "red";
		input.style.outLineColor = "red";
		 sellItemBtn.disabled = true;



	}else{

	    input.style.borderColor = "white";
	    sellItemBtn.disabled = false;

	}

}



// Return validation

	var intializeReturn = (function(){


		 // item to be returned Object
	    function ItemToBeReturned(name, quantity, amount, reason){

	    	this.name = name;
	    	this.quantity = quantity;
	    	this.amount = amount * quantity;
	    	this.reason = reason;


	    }


		let acceptBtns = document.querySelectorAll('.accept-btn');
		let reasonInput = document.querySelectorAll('.reason');
		let returnedQuantityInput = document.querySelectorAll('.qty');
	

		acceptBtns.forEach(function(e){
			let reason = e.parentNode.previousElementSibling.firstElementChild;
			let name = e.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
			let amount =  e.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.lastElementChild;
			let quantity = e.parentNode.previousElementSibling.previousElementSibling.firstElementChild;

			e.addEventListener('click', function(){

				let item = new ItemToBeReturned(name.textContent, quantity.value, amount.textContent, reason.value);
				console.log(item)
				e.disabled = true;
				reason.value = "";

				// Do Json Stuff



			});
		});

		reasonInput.forEach(function(e){
			let acceptBtn;
		

			e.addEventListener('keyup', function(){
			acceptBtn = e.parentNode.nextElementSibling.firstElementChild;
				if(inputIsEmpty(e)){

						acceptBtn.disabled = true;

				}else{

					acceptBtn.disabled = false;
				}
			})
		});


		returnedQuantityInput.forEach(function(e){
		
			let quantityBought;
			let acceptBtn;

			// Key Presses
			e.addEventListener('keyup', function(){
				quantityBought =  e.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
				acceptBtn =  e.parentNode.nextElementSibling.nextElementSibling.firstElementChild;

				if(parseInt(e.value) <= 0 || parseInt(e.value) > quantityBought){

					e.value = 1;
					alert(quantityBought)
				}

				console.log(acceptBtn)

				if(inputIsEmpty(e)){
					acceptBtn.disabled = true;
				}else{

					acceptBtn.disabled = false;
				}
				
			})

			// Clicks
			e.addEventListener('click', function(){
				quantityBought =  e.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
				acceptBtn =  e.parentNode.nextElementSibling.nextElementSibling.firstElementChild;

				if(parseInt(e.value) <= 0 || parseInt(e.value) > quantityBought){

					e.value = 1;
					alert(quantityBought)
				}

				acceptBtn.disabled = false;

			
				
			})
		});




	}());



	function inputIsEmpty(e){

	
		if(e.value.length == 0 || e.value === ''){

			return true;

		}
		return false;
	}




// Expenses 
var expenses = (function(e){




}());