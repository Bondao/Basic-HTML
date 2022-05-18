/*
function openRecommendation(){
  var eventText = document.getElementById("description_1").innerHTML;
  sessionStorage.setItem('description', eventText);
  window.location.href="recommendation.html";
}
*/

 //a function that redirects us to the recommendation.html page and passes two values via URL-Parameter and SessionStorage-Item
function openRecommendation(imageSource, descriptionId){
sessionStorage.setItem('descr', document.getElementById(descriptionId).innerHTML);
  window.location.href="recommendation.html?event="+imageSource;
}

/*
function removeSelection(){
  document.getElementById("selection").style.display = "none";
};

*/
