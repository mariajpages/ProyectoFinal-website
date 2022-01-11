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

            for (i = 0; i < agregarComentarios; i++) {
                item = items.childNodes[i];
                title = item.querySelector('.slick-track .widget-title a').text;
                subTitle = item.querySelector('.slick-track .entry-tags ul li a').text;
                content = item.querySelector('.work-cover');

                p1 = document.createElement('p');
                p2 = document.createElement('p');

                t = document.createTextNode(title);
                b = document.createTextNode(subTitle);

                p1.appendChild(t);
                p2.appendChild(b);
                content.appendChild(p1);
                content.appendChild(p2);

            }
        })
        .catch((err) => console.log(err))



})
