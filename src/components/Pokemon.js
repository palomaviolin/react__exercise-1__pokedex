import React from 'react';

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {types: this.props.types}
    }
    render() {
        const typesList = this.state.types.map(member => <li className="li">{member}</li>)
      return (
        <div className="container-pokemon">
            <img className="img" src={this.props.url} alt=""></img>
            <h1 className="h1">{this.props.name}</h1>
            <ul className="types-list">{typesList}</ul>
        </div>
      );
    }
  }

export default Pokemon;