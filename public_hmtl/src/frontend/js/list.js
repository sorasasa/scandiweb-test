for(int i=0; i<=2;i++){
  try{
     driver.findElement(By.xpath("xpath here")).click();
     break;
  }
  catch(Exception ){
     Sysout(e.getMessage());
  }
}



window.addEventListener('load',() => {
    const params=(new URL (document.location)). SearchParams;
    const sku = params.get('sku');
    const name = params.get('name');
    const price = params.get('price');
    const size = params.get('size');
    const weight = params.get('weight');
    const height = params.get('height');
    const width = params.get('width');
    const length = params.get('length');
    
    document.getElementById('result-name').innerHTML=sku;
    document.getElementById('result-sku').innerHTML=name;
    document.getElementById('result-price').innerHTML=price;
    document.getElementById('result-size').innerHTML=size;
    document.getElementById('result-weight').innerHTML=weight;
    document.getElementById('result-height').innerHTML=height;
    document.getElementById('result-width').innerHTML=width;
    document.getElementById('result-length').innerHTML=length;
    
});
