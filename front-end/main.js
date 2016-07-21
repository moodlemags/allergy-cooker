console.log('i am allliiiiiiiiiiiiiive');
var url = 'http://localhost:3000';


document.getElementById('submitTest').addEventListener('click', function(event){
  console.log('clicked');

  var recipeOrSearch = document.getElementById('querySelector').value
  console.log(recipeOrSearch);



    var data = {
      querySelector: recipeOrSearch,
      // allergens: proAllergen
    };

console.log('data' , data);

    $.ajax({
      url: url + '/get',
      method: 'POST',
      data: data,
      dataType: 'json'
    }).done(function(response) {
// printing image
      console.log("response", response);
      console.log("response.matches[0].smallImageUrls.[0]", response.matches[0].smallImageUrls[0]);
      var printImage = response.matches[0].smallImageUrls[0];
      var domImage = document.createElement('div');
      var body = document.getElementById('putImage');
      body.appendChild(domImage)
      domImage.innerHTML = '<img class="image" src="' + printImage + '" width=300px height=300px/>';
//looping thru ingredients
      // var ingredientsArray = response.recipe.ingredients;
      // console.log(ingredientsArray);

});


})//end event listener for click
