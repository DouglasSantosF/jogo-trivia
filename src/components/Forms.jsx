import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { setLoading, setLogin, setQuestions } from '../Actions';
import './Forms.css';

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.apiFetch = this.apiFetch.bind(this);
    this.apiFetchTrivia = this.apiFetchTrivia.bind(this);
  }

  async onSubmitForm() {
    const { dispatchSetLogin, history, reduxLoading } = this.props;
    dispatchSetLogin(this.state);
    await this.apiFetch();
    await this.apiFetchTrivia();
    if (!reduxLoading) { history.push('/jogo'); }
  }

  async apiFetchTrivia() {
    const { dispatchSetQuestions, dispatchSetLoading,
      reduxConfig } = this.props;
    dispatchSetLoading();
    const token = localStorage.getItem('token');
    const response = await fetch(`https://opentdb.com/api.php?amount=5&category=${reduxConfig.category}&difficulty=${reduxConfig.difficulty}&type=${reduxConfig.type}&${token}`);
    const json = await response.json();
    const { results } = json;
    dispatchSetQuestions(results);
  }

  async apiFetch() {
    const Api = await fetch('https://opentdb.com/api_token.php?command=request');
    const json = await Api.json();
    localStorage.setItem('token', json.token);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  validEmail(email, nome) {
    const valid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (!valid || nome.length === 0) {
      return true;
    }
    return false;
  }

  render() {
    const { nome, email } = this.state;
    return (
      <div className="countainer">
        <fieldset className="countainer-Form">
          <form action="">
            <label className="label-name" htmlFor="name">
              Nome:
              <input
                id="name"
                type="text"
                name="nome"
                placeholder="username"
                value={ nome }
                data-testid="input-player-name"
                onChange={ this.handleChange }
              />
            </label>
            <label className="label-email" htmlFor="email">
              Email:
              <input
                id="email"
                type="text"
                name="email"
                placeholder="email"
                value={ email }
                data-testid="input-gravatar-email"
                onChange={ this.handleChange }
              />
            </label>
            <button
              className="button-login"
              type="button"
              data-testid="btn-play"
              disabled={ this.validEmail(email, nome) }
              onClick={ this.onSubmitForm }
            >
              Jogar
            </button>
          </form>
        </fieldset>
      </div>
    );
  }
}

Forms.propTypes = {
  dispatchSetLogin: PropTypes.func.isRequired,
  dispatchSetQuestions: PropTypes.func.isRequired,
  reduxConfig: PropTypes.arrayOf(PropTypes.object).isRequired,
  reduxLoading: PropTypes.bool.isRequired,
  dispatchSetLoading: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetLogin: (state) => dispatch(setLogin(state)),
  dispatchSetQuestions: (state) => dispatch(setQuestions(state)),
  dispatchSetLoading: () => dispatch(setLoading),
});

const mapStateToProps = (state) => ({
  reduxConfig: state.reducerConfig,
  reduxLoading: state.reducerQuestions.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Forms));
