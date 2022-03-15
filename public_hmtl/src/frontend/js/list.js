var element = document.importNode('div');
var iframe = document.getElementsByTagName("iframe")[0];
var oldNode = iframe.contentWindow.document.getElementById("myNode");
var newNode = document.importNode(oldNode, true);
document.getElementById("container").appendChild(newNode);
$(document).ready(() => {
    function getProducts( )
    {
        $('.products').html('');
        $.get('/products/get', function(products, status) {
            if(Array.isArray(products))
            products.forEach(product => {
                $('.products').append(`
                <div class="col-3 pb-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="form-check-inline">
                                <label class="form-check-label">
                                    <input class="form-check-input" name="products[]" value="${product.sku},${product.name},${product.price},${product.type},${product.attribute};">
                                </label>
                            </div>
                            <h4 class="card-title">${product.sku}</h4>
                            <p class="card-text">${product.name}</p>
                            <p class="card-text">${product.price}$</p>
                            <p class="card-text">${product.type}</p>
                            <p class="card-text">${product.attribute}
== 0 ? 'Weight: ' : product.type == 1 ? 'Size: ' : product.type == 2 ? 'Dimension: '} 
</p>
                        </div>
                    </div>
                </div>
                `);
            });
        });
    }

    getProducts();

    $('form').submit(function(e) {
        e.preventDefault();

        let items = {};
        $.each($("input[name='products[]']:checked"), function(index){
            items[index] = $(this).val();
        });

        if(items[0])
        {
            $.post('/products/delete', items, function(data, status) {
                $('#message').show().html(data.message);
                getProducts();
            });
        }
    });
});
