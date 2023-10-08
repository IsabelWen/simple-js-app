// IIFE including the functions getAll and add
let pokemonRepository = (function () {
    let pokemonList = [
        {name: 'Psyduck', height: 79, types: ['Water'], abilities: ['Damp', 'Cloud Nine']},
        {name: 'Clefairy', height: 61, types: ['Fairy'], abilities: ['Cute Charm', 'Magic Guard']},
        {name: 'Slowpoke', height: 119, types: ['Water', 'Psychic'], abilities: ['Oblivious', 'Own Tempo']}
    ];

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        if (typeof pokemon === 'object'){
        pokemonList.push(pokemon);
        }
    }

    return {
        getAll: getAll,
        add: add
    };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    // creating li element inside the ul
    let listpokemon = document.createElement('li');
    // creating button element inside the li
    let button = document.createElement('button');
    button.innerText = 'placeholder';
    button.classList.add('button-class');
    // Append button to the li listpokemon as its child
    listpokemon.appendChild(button);
    // Append the li listpokemon to the ul pokemonList as its child
    pokemonList.appendChild(listpokemon);

    /*if (pokemon.height >100){ //if pokemon's height is over 100cm also print 'Wow that's big'
    document.write(pokemon.name + ' (height: ' + pokemon.height + ' cm) - Wow, that\'s big!<br>');
    }else {
    document.write(pokemon.name + ' (height: ' + pokemon.height + ' cm)<br>');
    }*/
}); 
    
