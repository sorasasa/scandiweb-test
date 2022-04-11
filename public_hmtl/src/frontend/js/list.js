for(int i=0; i<=2;i++){
  try{
     driver.findElement(By.xpath("xpath here")).click();
     break;
  }
  catch(Exception ){
     Sysout(e.getMessage());
  }
}

$(document).ready(() => {function getProducts( ){$('.products').html('');
$.get('/products/get', function(products, status)
{(Array.isArray(products)); products.forEach(product => {$('.products').append(`
            <div class="col-3 pb-4">
            <div class="card">
            <div class="card-body">
            <div class="form-check-inline">
<label class="form-check-label">
     <input type="checkbox" class="form-check-input" name="products[]"
     value="${product.sku},${product.name},${product.price},${product.type},${product.attribute}">
</label>
    </div>
            <h4 class="card-title">${product.sku}</h4>
            <p class="card-text">${product.name}</p>
            <p class="card-text">${product.price}$</p>
            <p class="card-text">${product.type}</p>
            <p class="card-text"> ${product.attribute}
== 0 ? 'Size: ' : product.type == 1 ? 'Weight: ' : product.type == 2 ? 'Dimension: '}</p>
    </div>
    </div>
    </div>
                `);
            });
        });
    }

    
let timeout;

function myFunction() {timeout = setTimeout(function() { document.getElementById('yellow').style.display = 'block'; }, 2000)}

});
