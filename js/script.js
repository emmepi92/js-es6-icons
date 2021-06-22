// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

// Milestone 2
// Coloriamo le icone per tipo

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone


function stampaLaLista(nomeArray) {

    //dove stampare
    const htmlIcon = document.querySelector('.icon-container');

    //reset per le nuove stampe dopo la selezione
    htmlIcon.innerHTML ='';

    // stampa dell'array
    nomeArray.forEach((icon) =>{

        const {name, prefix, family, type} = icon;    
        
        htmlIcon.innerHTML +=
        `
        <div class="icon-inner">
            <div class="${family} ${prefix}${name} ${type}"></div>
            <div class="icon-name">${name}</div>
        </div>
        `
    });
}

/**
 * 
 * @param {*} nomeArray array originale
 * @param {*} filtro filtro
 * @returns  array filtrato, quello da stampare dopo
 */
function nuovaListaFiltrata(nomeArray, filtro) {

    //nuovaListaFiltrata deve ritornare un array filtrato
    return nomeArray.filter((icon) => {
        
        //se il filtro è 'all', stampa tutti gli elementi nell'array da ritornare
        if (filtro === 'all') {
            return true;
        }

        //altrimenti selezione in base al tipo: animal, veg o user
        if (filtro === icon.type) {
            return true;
        }

        //se il filtro non è all, e se non è il filtro scelto, 
        //non aggiungerlo al nuovo array
        return false;
    });
}

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];
const userChoice = document.querySelector('#type-choice')

//-------------------------

stampaLaLista(icons);
// stampaLaLista(nuovaListaFiltrata (icons, 'all')); preferisco la prima


userChoice.addEventListener('change', (event) =>{
    stampaLaLista(nuovaListaFiltrata (icons, userChoice.value));
});