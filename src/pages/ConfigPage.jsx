import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setConfig } from '../Actions';
import './ConfigPage.css';

class ConfigPage extends React.Component {
  constructor() {
    super();
    this.state = {
      difficulty: 'medium',
      category: '',
      type: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { dispatchsetConfig } = this.props;
    dispatchsetConfig(this.state);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="config">
        <h1 className="title" data-testid="settings-title">Página de configuraçao</h1>
        <label htmlFor="dif">
          Dificuldade:
          <select name="difficulty" id="dif" onClick={ this.handleChange }>
            <option value="">Qualquer dificuldade</option>
            <option value="easy">Fácil</option>
            <option value="medium" selected>Médio</option>
            <option value="hard">Difícil</option>
          </select>
        </label>
        <label htmlFor="cat">
          Categoria:
          <select name="category" id="cat" onClick={ this.handleChange }>
            <option value="">Qualquer categoria</option>
            <option value="Entertainment: Music">Música</option>
            <option value="Entertainment: Film">Filmes</option>
            <option value="Entertainment: Books">Filmes</option>
            <option value="Sports">Esporte</option>
            <option value="History">História</option>
            <option value="Mathematics">Matemática</option>
            <option value="Science: Computers">Computadores</option>
            <option value="Entertainment: Video Games">Video Games</option>
            <option value="Entertainment: Japanese Anime & Manga">Anime e Mangá</option>
          </select>
        </label>
        <label htmlFor="tipo">
          Tipo:
          <select name="type" id="tipo" onClick={ this.handleChange }>
            <option value="">Qualquer tipo</option>
            <option value="boolean">Verdadeiro ou falso</option>
            <option value="multiple">Multipla escolha</option>
          </select>
        </label>
        <div className="div-test">
          <Link to="/">
            <button className="btn-config" type="button">Voltar</button>
          </Link>
          <button
            className="btn-config"
            type="button"
            onClick={ this.onSubmit }
          >
            Salvar
          </button>
        </div>
      </div>);
  }
}

ConfigPage.propTypes = {
  dispatchsetConfig: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchsetConfig: (state) => dispatch(setConfig(state)),
});

export default connect(null, mapDispatchToProps)(ConfigPage);
