let pokemonList = [
    {name: 'Psyduck', height: 79, types: ['Water'], abilities: ['Damp', 'Cloud Nine']},
    {name: 'Clefairy', height: 61, types: ['Fairy'], abilities: ['Cute Charm', 'Magic Guard']},
    {name: 'Slowpoke', height: 119, types: ['Water', 'Psychic'], abilities: ['Oblivious', 'Own Tempo']}
];
for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ' cm) ')
}
    
