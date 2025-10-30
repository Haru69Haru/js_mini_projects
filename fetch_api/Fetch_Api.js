
// fetch("https://pokeapi.co/api/v2/pokemon/mojako")
//     .then(response => {
//
//         if(!response.ok){
//             throw new Error("Could not fetch resource")
//         }
//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
//



async function fetchData(){

    try{

        const pokemonName =  document.getElementById("pokemonName").value.toLowerCase();


        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource")
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const pokemonImage = document.getElementById("pokemonSprite");
        pokemonImage.src = pokemonSprite;
        pokemonImage.style.display = "block"
        console.log(data)

    }
    catch (error){
        console.error(error)
    }
}