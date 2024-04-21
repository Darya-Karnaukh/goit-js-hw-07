const categories = document.querySelectorAll("li.item").length;
console.log("Number of categories:", categories);

const elements = document.querySelectorAll(".item");

elements.forEach(element => {
    
    console.log("Categoria:", element.querySelector('h2').textContent);
    
    console.log("Elements:", element.querySelectorAll('li').length);
    
});
