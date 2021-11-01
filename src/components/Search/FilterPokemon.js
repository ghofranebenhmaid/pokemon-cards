const filterPokemon = ({ searchTerm, value }) => {
  //   if (!query) {
  //     return posts;
  //   }

  //   return posts.filter((post) => {
  //     const postName = post.name.toLowerCase();
  //     return postName.includes(query);
  //   });

  const name = value.name.toLowerCase();
  const ability1 = value.abilities.map((item) => item.ability.name);
  const ability = ability1.map((item) => item);

  if (searchTerm == '') {
    return value;
  } else if (
    name.includes(searchTerm.toLowerCase()) ||
    ability[0].includes(searchTerm.toLowerCase()) ||
    ability[1].includes(searchTerm.toLowerCase())
  ) {
    return value;
  }
}

expect default filterPokemon;