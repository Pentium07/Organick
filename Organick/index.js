 document.getElementById('loadMore').addEventListener('click', function() {
            const hiddenProducts = document.querySelectorAll('.product:not(.visible)');
            hiddenProducts.forEach(product => {
                product.classList.add('visible');
            });
            this.style.display = 'none'; // Hide the button after loading more products
        });

        document.getElementById('loadMore').addEventListener('click', function(event) {
            // Prevent the default action of the link
            event.preventDefault();
        
            // Add your custom functionality here
            console.log('Button clicked!');
        })