const getType = productTypeCode => {
  switch (productTypeCode) {
    case "DV":
      return (` <label for="size">Size</label>
                    <input type="number" step="0.01" class="form-control" id="#size" required>
                    
                `);
    case "BO":
      return(` <label for="weight">Weight</label>
                    <input type="number" step="0.01" class="form-control" id="#weight" required>
                  `);

    case "FU":
      return (` <label for="height">Height</label>
                    <input type="number" step="0.01" class="form-control" id="#height" required>
                <label for="width">Width</label>
                    <input type="number" step="0.01" class="form-control" id="#width" required>
                <label for="length">Length</label>
                    <input type="number" step="0.01" class="form-control" id="#length required> `);
  
    default:
      return []; 
  }
};
const productType = [
  {
    code: "DV",
    name: "DVD"
  },
  {
    code: "BO",
    name: "Book"
  },
  {
    code: "FU",
    name: "Furniture"
  } 
];

const createOptionElement = (text, value) => {
  const element = document.createElement("option");
  element.textContent = text;
  element.value = value;
  return element;
};

const createLiElement = text => {
  const element = document.createElement("li");
  element.textContent = text;
  return element;
};

const productTypeElement = document.querySelector("select");
productTypes.forEach(productType => {
  productTypeElement.appendChild(createOptionElement(productType.name, productType.code));
});

productTypeElement.addEventListener("change", e => {
 
  const Type = getType(e.target.value);
  const TypeElement = document.getElementById("productType");
  
  TypeElement.innerHTML = "";
 
  Type.forEach(Type => {
    TypeElement.appendChild(createLiElement(Type));
  });
});
