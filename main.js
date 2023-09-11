let key = 'e068d486300f47a1916dfe7f31b22794';
let pais = 'us'
let url = `https://newsapi.org/v2/top-headlines?country=${pais}&apiKey=${key}`;
let mostrar_noticias = document.getElementById('noticias');

fetch(url)
    .then((response) => response.json())
    .then(data =>{
    console.log(data);
    let noticias = data.articles;
    noticias.forEach(function(numero){
        let div = document.createElement('div');
    div.innerHTML = `<br>
                <img style="max-width:800px" src="${numero.urlToImage}"><br>
                <h1>${numero.title}</h1>
                <h2>${numero.description}</h2>
                <h3>${numero.url}</h3>`;
        mostrar_noticias.appendChild(div);
    });
});