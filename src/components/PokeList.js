import React from 'react';
import Pokemon from './Pokemon'

class PokeList extends React.Component {
constructor(props){
    super(props);
    this.getInputValuePokemon = this.getInputValuePokemon.bind(this);
}

getInputValuePokemon(event){
    let pokemonSearch = event.target.value;
    console.log('Quiero buscar:', pokemonSearch);
}

  render() {
      console.log(this.props.data);
    return (
        <div>
            <h1 className="h1">Mi lista de Pokémon</h1>
            <input type="text" placeholder="Search your pokémon..." onChange={this.getInputValuePokemon}/>
            <ul className="item-list">
                    <Pokemon
                        id="1" 
                        name="bulbasaur" 
                        types={[
                            "poison",
                            "grass"
                        ]}
                        evolution=""
                        url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                    />
                    <Pokemon 
                        id="2"
                        name="ivysaur"
                        types={[
                            "poison",
                            "grass"
                        ]}
                        evolution="bulbasaur"
                        url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
                    />
                    <Pokemon 
                        id="3"
                        name="venusaur"
                        types={[
                            "poison",
                            "grass"
                        ]}
                        evolution="ivysaur"
                        url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
                    />
                    <Pokemon 
                        id="4"
                        name="charmander"
                        types={[
                            "fire"
                        ]}
                        evolution="charmeleon"
                        url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
                    />
                    <Pokemon 
                        id="5"
                        name="charmeleon"
                        types={[
                            "fire"
                        ]}
                        evolution="charizard"
                        url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
                    />
                    <Pokemon 
                        id="6"
                        name="charizard"
                        types={[
                            "fire"
                        ]}
                        evolution=""
                        url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
                    />
                    <Pokemon 
                        id="7"
                        name="squirtle"
                        types={[
                            "water"
                        ]}
                        evolution="wartortle"
                        url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
                    />
                    <Pokemon 
                        id="8"
                        name="wartortle"
                        types={[
                            "water"
                        ]}
                        evolution="blastoise"
                        url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
                    />
                    <Pokemon 
                        id="9"
                        name="blastoise"
                        types={[
                            "water"
                        ]}
                        evolution=""
                        url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
                    />
                    <Pokemon 
                        id="10"
                        name="caterpie"
                        types={[
                            "bug"
                        ]}
                        evolution="metapod"
                        url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
                    />
        </ul>
      </div>
    );
  }
}

export default PokeList;
