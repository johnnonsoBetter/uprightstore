function searchForItem() {
	// body...

	
 	var input, filter, ul, li, a, i, txtValue;

    input = document.querySelector("input");
    filter = input.value.toUpperCase();
    
    li =  document.querySelectorAll(".item-cont");
     

    for (i = 0; i < li.length; i++) {
        a = li[i].children[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    console.log("work")

}



function ItemPack(name, img, pack, pieces) {

	this.name = name;
	this.img = '../'+img+ '.png';
	this.pack = pack + ' pack, ';
	this.pieces = pieces + ' pieces';
	// body...

}



 function pack(item) {
	// body...

	var itemPackContainerElement = document.createElement('div');
	var itemPackNameElement = document.createElement('span');
    var itemPackImageElement = document.createElement('img');

    // quantities
    var itemPackQuantityCont = document.createElement('div');
    var itemPackQuantity_Pack = document.createElement('span');
    var itemPackQuantity_Pieces = document.createElement('span');


    // Create Buttons 
     var itemPackButtonContElement = document.createElement('div');
     var itemPackAddButtonElement = document.createElement('button');
     var itemPackCollectButtonElement = document.createElement('button');



      	// ADDING THE CONTAINER 

		itemPackContainerElement.classList.add('item-cont');
		itemPackNameElement.classList.add('name');
		itemPackImageElement.classList.add('image');

		itemPackQuantityCont.classList.add('quantity');
		itemPackQuantity_Pack.classList.add('pack');
		itemPackQuantity_Pieces.classList.add('pieces');

		itemPackButtonContElement.classList.add('action-btn');
		itemPackAddButtonElement.classList.add('add');
		itemPackCollectButtonElement.classList.add('collect')


		itemPackContainerElement.appendChild(itemPackNameElement);
		itemPackContainerElement.appendChild(itemPackImageElement);
		itemPackContainerElement.appendChild(itemPackQuantityCont);
		itemPackContainerElement.appendChild(itemPackButtonContElement);

		itemPackQuantityCont.appendChild(itemPackQuantity_Pack);
		itemPackQuantityCont.appendChild(itemPackQuantity_Pieces);
		

		itemPackButtonContElement.appendChild(itemPackAddButtonElement);
		itemPackButtonContElement.appendChild(itemPackCollectButtonElement);
		itemPackAddButtonElement.textContent = '+';
		itemPackCollectButtonElement.textContent = 'Collect';

		itemPackImageElement.src = item.img;




	    itemPackNameElement.textContent = item.name;
	    itemPackQuantity_Pack.textContent = item.pack;
	    itemPackQuantity_Pieces.textContent = item.pieces;


	    document.querySelector("section").appendChild(itemPackContainerElement);
	    console.log('pack')

		return item;
}

	var items = [ new ItemPack("Titus Sardine", 'titus_sardine', 2, 45),new ItemPack("Malt", 'malt', 32, 5),
		 new ItemPack("Ariel", 'ariel', 9, 75),
		 new ItemPack("Indomie", 'indomie', 0, 6),  new ItemPack("Plastic Coke", 'coke', 10, 6)]


		 for (var i = 0; i < items.length; i++) {
		 	pack(items[i])
		 }





var addPackToSection = function( ){





	var itemPackNameElement = document.querySelector(".name");
	var itemPackImageElement = document.querySelector(".image");

	var itemPackQuantityCont = document.querySelector(".quantity");
	var itemPackQuantity_Pack = itemPackQuantityCont.children[0];

}





   function  displayCollectModal(){

   		var collectModal = document.querySelector('#collect');

   		collectModal.style.display = 'block';
   		


   	}





console.log('hello dear')