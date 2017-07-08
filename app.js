var client = new Diffbot("29e49e8b36b2d63c2cf3ed4cf26e584b");


$('.submit').click(function() {
  var author = ($('.author').val());
  var firstName = author.split(' ')[0];
  var lastName = author.split(' ')[1];
  var incMag = ('https://www.inc.com/author/' + firstName + '-' + lastName)
  client.article.get({
              url: incMag
          }, function onSuccess(response) {
              // output the title
              console.log(response);
              var element = document.getElementById("content");
              element.innerHTML = response["objects"][0]["title"];
          }, function onError(response) {
                switch(response.errorCode) {
                  case 401:
                      alert(response.error)
                      break;
                  case 404:
                      alert(response.error)
                      break;
                  case 500:
                      alert(response.error)
                      break;
                }
          });
})
