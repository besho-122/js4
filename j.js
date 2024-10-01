async function getproducts(){
    const response = await fetch (`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data = await response.json();
    const products = data.recipes;
    const result = products.map(function(product){
        return `
        <div class ='product'>
        <h2>${product.title}</h2>
        <img src ='${product.image_url}' alt ='${product.title}'>
        <div/>
        `
    }).join('');
    console.log(result);
    document.querySelector(".p").innerHTML=result;
    

}
getproducts();
