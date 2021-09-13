import React from 'react';
import { Link } from 'react-router-dom';
/* import Header from '../components/Header'; */
import HeaderFeedback from '../components/HeaderFeedback';

class Feedback extends React.Component {
  render() {
    return (
      <>
        <HeaderFeedback />
        {/* <Header/> */}
        <p data-testid="feedback-text" />
        <Link to="/">
          <button type="button" data-testid="btn-play-again">Jogar novamente</button>
        </Link>
        <Link to="/ranking">
          <button data-testid="btn-ranking" type="button">Ver Ranking</button>
        </Link>
      </>
    );
  }
}

export default Feedback;
