async function getApi() {
    var ahmed = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    var door = await ahmed.json();
    var mohamed = door.recipes;
    var text ="";
    for(var i=0; i<mohamed.length; i++){
        
        var cartoona =`

            <div class="col-md-4  text-center my-4">
            <img class="img-fluid" style="height:200px" src="${mohamed[i].image_url}">
            <h3>${mohamed[i].recipe_id}</h3>
            <h5>${mohamed[i].title}</h5>
        </div>
        `
        text= text+ cartoona;
        
    }
    document.querySelector(".test").innerHTML = text;
    
}
getApi();