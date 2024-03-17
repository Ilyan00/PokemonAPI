document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("pokemon-form");
  const select = document.getElementById("pokemon-select");

  const fetchPokemon = async (pokemonName) => {
    const link = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;
    const repsonse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    const data = await repsonse.json();

    displayPokemon(data);
  };

  const displayPokemon = (data) => {
    document.getElementById("pokemon-name").textContent = `Nom: ${data.name}`;
    document.getElementById("pokemon-image").src = data.sprites.front_default;
    const types = data.types.map((type) => type.type.name).join(", ");
    document.getElementById("pokemon-type").textContent = `Type(s): ${types}`;
    document.getElementById(
      "pokemon-weight"
    ).textContent = `Poids: ${data.weight} `;
    document.getElementById(
      "pokemon-height"
    ).textContent = `Taille: ${data.height} `;

    const abilities = data.abilities
      .map((ability) => ability.ability.name)
      .join(", ");
    document.getElementById(
      "pokemon-abilities"
    ).textContent = `Capacités: ${abilities}`;

    body = document.querySelector("body");
    btn = document.querySelector("button");
    switch (data.name) {
      case "pikachu":
        body.style.backgroundColor = "#f5f542";
        btn.style.backgroundColor = "#f7f702";
        break;
      case "charmander":
        body.style.backgroundColor = "#ebaf09";
        btn.style.backgroundColor = "#f7b602";
        break;
      case "bulbasaur":
        body.style.backgroundColor = "#108cb5";
        btn.style.backgroundColor = "#05bffc";
        break;
      case "squirtle":
        body.style.backgroundColor = "#05fa90";
        btn.style.backgroundColor = "#05fad9";
        break;
    }
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const selectedPokemon = select.value;
    fetchPokemon(selectedPokemon);
  });

  fetchPokemon("pikachu");
});
