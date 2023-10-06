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
        pokemonList.push(pokemon);
    }

    return {
        getAll: getAll,
        add: add
    };
})();

// Retrieve pokemonList array from IIFE
let pokemonList = pokemonRepository.getAll();

pokemonList.forEach(function(pokemon) {
    if (pokemon.height >100){ //if pokemon's height is over 100cm also print 'Wow that's big'
    document.write(pokemon.name + ' (height: ' + pokemon.height + ' cm) - Wow, that\'s big!<br>');
    }else {
    document.write(pokemon.name + ' (height: ' + pokemon.height + ' cm)<br>');
    }
}); 
    
