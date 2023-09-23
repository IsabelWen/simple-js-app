let pokemonList = [
    {name: 'Psyduck', height: 79, types: ['Water'], abilities: ['Damp', 'Cloud Nine']},
    {name: 'Clefairy', height: 61, types: ['Fairy'], abilities: ['Cute Charm', 'Magic Guard']},
    {name: 'Slowpoke', height: 119, types: ['Water', 'Psychic'], abilities: ['Oblivious', 'Own Tempo']}
];
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height >100){ //if pokemon's height is over 100cm print also print 'Wow that's big
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ' cm) - Wow, that\'s big!');
    }else {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ' cm) ');
    }
}
    
