// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

// Milestone 2
// Coloriamo le icone per tipo

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone


function stampaLaLista(nomeArray) {

    //dove stampare
    const htmlIcon = document.querySelector('.icon-container');

    //reset
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
 * @returns  array filtrato
 */
function nuovaListaFiltrata(nomeArray, filtro) {
    return nomeArray.filter((icon) => {
        
        if (filtro === 'all') {
            return true;
        }

        if (filtro === icon.type) {
            return true;
        }

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

userChoice.addEventListener('change', (event) =>{
    stampaLaLista(nuovaListaFiltrata (icons, userChoice.value));
});