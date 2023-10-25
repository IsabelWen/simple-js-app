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
        let pokemonList = document.querySelector('.list-group');
        // creating li element inside the ul
        let listpokemon = document.createElement('li');
        listpokemon.classList.add('list-group-item'); // bootstrap class
        // creating button element inside the li
        let button = document.createElement('button');
        button.classList.add('btn'); // bootstrap class
        button.classList.add('btn-block');
        button.setAttribute('data-toggle', 'modal'); // bootstrap attr
        button.setAttribute('data-target', '#modal'); // bootstrap attr
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        // Append button to the li listpokemon as its child
        listpokemon.appendChild(button);
        // Append the li listpokemon to the ul pokemonList as its child
        pokemonList.appendChild(listpokemon);
        // Add event listener to button with the showDetails function
        button.addEventListener('click', function() {
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
            showModal(item);
        });
    }

    // Create modal
    function showModal(item) {
        let modalBody = document.querySelector('.modal-body');
        let modalTitle = document.querySelector('.modal-title');
    
        //Clear all existing modal content
        modalTitle.innerHTML = '';
        modalBody.innerHTML = '';

        //creating element for name in modal content
        let nameElement = document.createElement('h1');
        nameElement.innerText = item.name;
        //creating img in modal content
        let imageElement = document.createElement('img');
        imageElement.classList.add('modal-img');
        imageElement.setAttribute('src', item.imageUrl);
        imageElement.classList.add('float-right'); // bootstrap class
        //creating element for height in modal content
        let heightElement = document.createElement('p');
        heightElement.innerText = 'height: ' + item.height;
        //creating element for type in modal content
        function typeCount(item) {
            if(item.types.length === 2) {
                return item.types[0].type.name + ', ' + item.types[1].type.name;
            } else {
                return item.types[0].type.name;
            }
        }
        let typeElement = document.createElement('p');
        typeElement.innerText = 'type: ' + typeCount(item);
    
        //Add the new modal content
        modalTitle.appendChild(nameElement);
        modalBody.appendChild(imageElement);
        modalBody.appendChild(heightElement);
        modalBody.appendChild(typeElement);
    }    

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal,
    };
})();

pokemonRepository.loadList().then(function() {
    // Now the data is loaded
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    }); 
})

// Create input search bar
let form = document.querySelector('.form-inline');
let input = document.createElement('input');
input.classList.add('form-control');
input.classList.add('mr-2');
input.classList.add('my-1');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Search');
input.setAttribute('aria-label', 'Search');
form.appendChild(input);

// live search function
function searchFunction() {
    // Declare variables
    var filter, li, i, txtValue, buttonPokemon;
    filter = input.value.toUpperCase();
    li = document.getElementsByClassName('list-group-item');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      buttonPokemon = li[i].getElementsByClassName('button-class')[0];
      txtValue = buttonPokemon.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
}

input.addEventListener('keyup', searchFunction);