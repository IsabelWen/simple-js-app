// IIFE including the functions getAll and add
let pokemonRepository = (function () {
    let repository = [
        {name: 'Psyduck', height: 79, types: ['Water'], abilities: ['Damp', 'Cloud Nine']},
        {name: 'Clefairy', height: 61, types: ['Fairy'], abilities: ['Cute Charm', 'Magic Guard']},
        {name: 'Slowpoke', height: 119, types: ['Water', 'Psychic'], abilities: ['Oblivious', 'Own Tempo']}
    ];

    function getAll() {
        return repository;
    }

    function add(pokemon) {
        if (typeof pokemon === 'object'){
        repository.push(pokemon);
        }
    }

    function addListItem(pokemon){
        let pokemonList = document.querySelector('.pokemon-list');
        // creating li element inside the ul
        let listpokemon = document.createElement('li');
        // creating button element inside the li
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        // Append button to the li listpokemon as its child
        listpokemon.appendChild(button);
        // Append the li listpokemon to the ul pokemonList as its child
        pokemonList.appendChild(listpokemon);
        // Add event listener to button with the showDetails function
        button.addEventListener('click', function() {
            showDetails(pokemon.name);
        });
    }

    function showDetails(pokemon){
        console.log(pokemon) ;
    }

    return {
        getAll: getAll,
        add: add,
        showDetails: showDetails,
        addListItem: addListItem
    };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
}); 
    
