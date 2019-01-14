import React from 'react';

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {types: this.props.types}
    }
    render() {
        const typesList = this.state.types.map(type => <li className="li">{type}</li>)
      return (
        <div className="container-pokemon">
            <img className="img" src={this.props.url} alt=""></img>
            <h1 className="h2">{this.props.name}</h1>
            <ul className="types-list">{typesList}</ul>
        </div>
      );
    }
  }

export default Pokemon;