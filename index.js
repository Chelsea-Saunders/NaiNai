

//Java for add to cart button on home page
addToCartButton = document.querySelectorAll(".add-to-cart-button");

document.querySelectorAll('.add-to-cart-button').forEach(function(addToCartButton) {
    addToCartButton.addEventListener('click', function() {
        addToCartButton.classList.add('added');
        setTimeout(function(){
            addToCartButton.classList.remove('added');
        }, 2000);
    });
});


//Java for log in page on nav tab
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
