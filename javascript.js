var myProject = document.getElementById('top');

console.log(myProject.bottomNodes.length);

var myProjectTags = document.getElementsByTagName('li');

console.log ("Number of items in list: "+ myProject.length);

var newArticle = document.createElement("li");

var newContent = document.createTextNode(Visitors can tour by vehicle,
  bike or on foot:");

myProject.appendChild(newArticle);

newArticle.appendChild(newContent);
