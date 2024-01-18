document.addEventListener('DOMContentLoaded', function () {
    wrapImagesWithLinks();
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

