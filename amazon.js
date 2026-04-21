let productsContainerElement=document.querySelector(".products-container");

let htmllines;

    
          products.forEach((value)=>{
            htmllines=
`<div class="product">
      <img src="${value.image}" class="productimgclass">
      <p class="producttextclass">${value.name}</p>
      <div class="ratings">
        <img src="images/ratings/rating-${(value.rating.star)*10}.png" class="ratingimgclass">
        <p class="ratings-count">${value.rating.count} </p>
      </div>
       <h3 class="price">
        $${(value.price/100).toFixed(2)} 
      </h3>
      <select class="quantityclass">
        <option value="-1">1</option>
        <option value="1">2</option>
        <option value="2">3</option>
        <option value="-1">4</option>
        <option value="-1">5</option>
        <option value="-1">6</option>
        <option value="-1">7</option>
        <option value="-1">8</option>
        <option value="-1">9</option>
        <option value="-1">10</option>
      </select>
      <button class="product-button-class" data-product-id="${value.id}">Add to cart</button>
      
    </div>`
    productsContainerElement.innerHTML+=htmllines;
    


          })
          let addToCartButtonElement=document.querySelectorAll(".product-button-class");
          let cartAddedCountElement=document.querySelector(".cartAddedCount")
         
          
          
          

            
           
          addToCartButtonElement.forEach((button)=>
            {
            button.addEventListener("click",()=>{
            
              let productId=button.dataset.productId;
              
            let wholequantity=0;
            
                
              let  check=false;
             cart.forEach((item)=>{
              wholequantity+=item.quantity
             
                
              if(productId===item.productIds)
                {
                item.quantity+=1;
                check=true;
                }
                
               


                  
                   
              
                
                  
              

                
               
                

             })
             if(!check){
                  cart.push(
                    {
                productIds:productId,
                quantity:1

              }
            )
                }

                console.log(wholequantity);
                cartAddedCountElement.innerHTML=wholequantity;
             

           
          
            
          })
          

          })

          
          

