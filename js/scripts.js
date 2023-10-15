// IIFE including the functions getAll and add
let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    // Other functions

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        if (typeof pokemon === 'object'){
        pokemonList.push(pokemon);
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
        button.addEventListener('click', function(event) {
            showDetails(pokemon);
        });
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // Now we add details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showDetails(item){
        pokemonRepository.loadDetails(item).then(function () {
            console.log(item);
        });
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
})();

pokemonRepository.loadList().then(function() {
    // Now the data is loaded
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    }); 
})

    
