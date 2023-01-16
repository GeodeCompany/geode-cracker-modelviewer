var geode = "";
var base_URL = "https://daniel.droffelaar.nl/"


window.onload = function(){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  geode = urlParams.get('geode');
  document.getElementById("geodeModel").src = "./src/models/" + geode + ".glb";
  document.querySelector('#geodeModel').addEventListener('model-visibility', (event) => {
    document.getElementById("loading").style.visibility = "hidden";
  })
}

redirect = function(content){
  var url = base_URL + "?geode=" + geode + "&content=" + content
  window.location.replace(url);
}
