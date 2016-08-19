import React from 'react';
import CheckList from './CheckList';

class Card extends React.Component {

  constructor() {
    super(...arguments);

    this.state = {
      showDetails: false
    };

  }

  render() {

    var cardDetails;

    if (this.state.showDetails) {

      cardDetails = (

        <div className="card__details">
          {this.props.description}
          <CheckList cardId={this.props.id} tasks={this.props.tasks}/>
        </div>

      );

    }

    return (



    )

  }

}

/* <div className="card">
 <div className="card__title">{this.props.title}</div>
 <div className="card__details">
 {this.props.description}
 <CheckList cardId={this.props.id} tasks={this.props.tasks} />
 </div>
 </div>*/

export default Card;
