function updateWhatsAppLink(productNumber) {
    var product = "prodoct_name" + productNumber;
    var price = "price" + productNumber;

    var almashLink = document.getElementById("link" + productNumber);
    almashLink.href = "https://wa.me/966538365924?text=" +"ارغب ب شراء:"+ "%0A" +
      "اسم الصنف: " + encodeURIComponent(getElementText(product)) + "%0A" + "%0A" +
      "السعر: " + encodeURIComponent(getElementText(price));
  }

 function getElementText(elementId) {
   var element = document.getElementById(elementId);
    return element ? (element.innerText || element.textContent) : "";
  }