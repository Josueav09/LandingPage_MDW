document.getElementById('searchBar').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    document.querySelectorAll('.product-category').forEach(function(category) {
        category.querySelectorAll('.product-card').forEach(function(product) {
            let name = product.querySelector('.product-name').textContent.toLowerCase();
            if (name.includes(filter)) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

document.getElementById('categoryFilter').addEventListener('change', function() {
    let filter = this.value;
    document.querySelectorAll('.product-category').forEach(function(category) {
        if (filter === '' || category.id === filter) {
            category.style.display = '';
        } else {
            category.style.display = 'none';
        }
    });
});