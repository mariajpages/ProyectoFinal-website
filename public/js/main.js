const formComentarios = document.querySelector('form');

// console.log(form)
const url = 'https://alctravel-website.herokuapp.com'

formComentarios.addEventListener('submit', (info) => {
    info.preventDefault()
    console.log('Estoy funcionando')

    const formData = new FormData(formComentarios)
    const formDataJSON = Object.fromEntries(formData)
    console.log(formDataJSON)

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(formDataJSON),
        headers: {
            'Content-Type': 'application/json'
        }

    })
        .then((res) => {
            const agregarComentarios = document.getElementById('comentarios');

            for (i = 0; i < agregarComentarios.childElementCount; i++) {
                comentario = agregarComentarios.childNodes[i];
                name = comentario.querySelector('.card-title').text;
                content = item.querySelector('.card-text').text;
                Option = item.querySelector('.card-footer');

                p1 = document.createElement('p');
                p2 = document.createElement('p');
                p3 = document.createElement('p');

                n = document.createTextNode(name);
                c = document.createTextNode(content);
                o = document.createTextNode(Option);

                p1.appendChild(n);
                p2.appendChild(c);
                p3.appendChild(o);
                content.appendChild(p1);
                content.appendChild(p2);
                content.appendChild(p3);

            }
        })
        .catch((err) => console.log(err))



})
