//api-key = 563492ad6f91700001000001317f7624faf84e319cad0c54c0d7ad98

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    var res = JSON.parse(xhttp.responseText);
    var imageData = res.photos.map(function (image) {
      console.log(image);
      return image;
    });

    var container = document.querySelector("#container");
    imageData.forEach((image) => {
      var imageDiv = document.createElement("div");
      imageDiv.innerHTML = `
      <img src=${image.src.original}>
      `;
      container.appendChild(imageDiv);
    });
  }
};
xhttp.open(
  "GET",
  "https://api.pexels.com/v1/search?query=nature&per_page=1",
  true
);
xhttp.setRequestHeader(
  "Authorization",
  "563492ad6f91700001000001317f7624faf84e319cad0c54c0d7ad98"
);
xhttp.send();
