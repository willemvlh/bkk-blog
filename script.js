document.addEventListener('DOMContentLoaded', function () {
    wrapImagesWithLinks();
    insertOrderNumberSpans();
});

function wrapImagesWithLinks() {
    var imgElements = document.querySelectorAll('main img');

    imgElements.forEach(function (img) {
        var imgSrc = img.getAttribute('src');

        // Create a new <a> element
        var linkElement = document.createElement('a');
        linkElement.href = imgSrc;

        // Clone the <img> element and append it to the <a> element
        var imgClone = img.cloneNode(true);
        linkElement.appendChild(imgClone);

        // Replace the original <img> element with the new <a> element
        img.parentNode.replaceChild(linkElement, img);
    });
}

function insertOrderNumberSpans() {
  // Get all the article elements on the page
  var headers = document.getElementsByTagName('h2');

  // Iterate through each article element
  for (var i = 0; i < headers.length; i++) {
    // Create a span element with the class "order-nr"
    var span = document.createElement('span');
    span.className = 'order-nr';

    // Set the text content of the span to the reverse order number
    span.textContent = String(headers.length - i);

    // Insert the span as the first child of the article
    headers[i].insertBefore(span, headers[i].firstChild);
  }
}

