//Evento clicliable modal-actividad
// const actividadesJujuy = [
//     {
//         id:1,
//         title:"Purmamarca",
//         description:"Las casas de adobe de la ciudad y la iglesia colonial española son bonitas por derecho propio.  Es el destino de muchas personas que buscan descansar en un pueblo tranquilo y conocer los atractivos turísticos de la zona. Incluye al Cerro de los Siete Colores, Paseo de los Colorados y Paseo de los Colorados"
//     },
//     {
//         id:3,
//         title:"Tilcara",
//         description:"Tilcara es un importante centro arqueológico debido a los vestigios de antiguos asentamientos indígenas. En ella se puede visitar Pucará de Tilcara, Jardín botánico de altura, Garganta del Diablo, Pucara de Juella y varios museos."
//     },
//     {
//         id:4,
//         title:"Humahuaca",
//         description:"Humahuaca es un pueblo pintoresco ideal pare recorrerlo caminando por sus estrechas calles y admirar las diferentes casas y edificios. Este pueblo es integrado por el Yacimiento Arqueológico de Coctaca, el Yacimiento del Inca Cueva o Chulín e Iruya."
//     },
//     {
//         id:5,
//         title:"San Salvador de Jujuy",
//         description:"La ciudad de San Salvador de Jujuy es la capital provincial con una rica historia y diferentes lugares que vale la pena conocer. Incluye Plaza Manuel Belgrano, Casa de Gobierno y Salón de la Bandera, Catedral San Salvador, El Cabildo (Museo Histórico Policial) y museos como el Museo Arqueológico Provincial y Museo Juan Galo Lavalle, entre otros."
//     },
//     {
//         id:6,
//         title:"La Quiaca",
//         description:"La Quiaca es una ciudad fronteriza que por medio de un puente se llega a la ciudad boliviana de Villazón. En ella se puede visitar La Puna, Yavi, Laguna de los Pozuelos y Santa Catalina"
//     }
// ];


const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal-title');
const modalDescripton = document.querySelector('.modal-description');

const mostrarModal = (dataId, text) => {
    modal.classList.add('visible');
    modalTitle.textContent = text;
}
 //fondo negro
const fondoNegro = document.querySelector('.fondo-negro');
const mostarFondo = () => {
  fondoNegro.classList.add('visible');
}

//muestro fondo negro
fondoNegro.addEventListener('click', () => {
  modal.classList.remove('visible');
  fondoNegro.classList.remove('visible');
});

const allActividadesCard = document.querySelectorAll('.actividades-card');

allActividadesCard.forEach((el) => {
    el.addEventListener('click', (infoEvent) => {
        const id = infoEvent.target.dataset.id;
        const ActividadFiltrada = actividadesJujuy.filter((el) => el.id == id);

        const modalTitle = document.querySelector('.modal-title');
        const modalDescription = document.querySelector('.modal-description');
        
        modalTitle.textContent = ActividadFiltrada[0].title;
        modalDescription.textContent = ActividadFiltrada[0].description;
    });    

});

    const products = document.querySelectorAll('.product');
    for(let product of products) {
      product.addEventListener('click', (e) => {
        const dataId = e.currentTarget.dataset.id;
        const text = e.currentTarget.textContent;
        mostarFondo();
        mostrarModal(dataId, text);
      });
    }

