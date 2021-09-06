//api-key = 563492ad6f91700001000001317f7624faf84e319cad0c54c0d7ad98

var searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
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
      container.innerHTML = "";
      imageData.forEach((image) => {
        var imageDiv = document.createElement("div");
        imageDiv.classList.add("image-div");
        imageDiv.innerHTML = `
      <img src=${image.src.medium}>
      <p>${image.photographer}</p>
      `;
        container.appendChild(imageDiv);
      });
    }
  };
  var textValue = document.querySelector("#search-bar").value;
  xhttp.open(
    "GET",
    `https://api.pexels.com/v1/search?query=${textValue}&per_page=9`,
    true
  );
  xhttp.setRequestHeader(
    "Authorization",
    "563492ad6f91700001000001317f7624faf84e319cad0c54c0d7ad98"
  );
  xhttp.send();
});
