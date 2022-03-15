window.onload = function get_body ()
Body = document.getElementById('productType')[0];
elemento_pai.appendChild(body);

el.addEventListener("change", function()
{var elems = document.querySelectorAll('#noDVD,#noBook,#noFurniture');
  for (var i = 0; i < elems.length; i++) {elems[i].style.display = 'none'}
  
  if (this.selectedIndex === 0) {
    document.querySelector('#noDVD').style.display = 'block';
  } else if (this.selectedIndex === 1) {
    document.querySelector('#noBook').style.display = 'block';
  }else if (this.selectedIndex === 2) {
    document.querySelector('#noFurniture').style.display = 'block';
  }
}, false);

$(document).ready(() => {
    $('#type').change(function() {
        switch (this.value) {
            case '0':
                 $('#attributes').html(`
                    <label for="weight">Weight</label>
                    <input type="number" step="0.01" class="form-control" id="#weight" required>
                
                `);
                break;
            case '1':
                 $('#attributes').html(`
                    <label for="size">Size</label>
                    <input type="number" step="0.01" class="form-control" id="#size" required>
                    
                `);
                break;

            case '2':
                $('#attributes').html(`
                    <label for="height">Height</label>
                    <input type="number" step="0.01" class="form-control" id="#height" required>
                    <label for="width">Width</label>
                    <input type="number" step="0.01" class="form-control" id="#width" required>
                    <label for="length">Length</label>
                    <input type="number" step="0.01" class="form-control" id="#length" required>
                    
                `);
                break;
        }
    });

    $('form').submit(function(e) 
    {
        e.preventDefault();

        let inputs = {};
        $(this).find(':input').each(function() {
            inputs[$(this).attr("name")] = $(this).val();
        });

        $.post('/products/add', inputs, function(data, status) {
            $('#message').show().removeClass('alert-success alert-danger').addClass(`alert-${data.status}`).html(data.message);
        });
    });
});
