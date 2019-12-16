let xhr = new XMLHttpRequest();
xhr.open('GET', "https://api.github.com/repos/sfetrow/spartanBrowser", true);
xhr.send();

xhr.onreadystatechange = processRequest;

function processRequest(e) {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let response = JSON.parse(xhr.responseText);
    console.log(response.html_url)
    let a = document.createElement('a');
    let link = document.createTextNode('Link to Github')
    a.appendChild(link)
    a.title = 'Link to Github';
    a.href = response.html_url;
    document.body.appendChild(a);
  }
}