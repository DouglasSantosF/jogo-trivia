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
    global.alert('Configuração Salva!');
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
        <h1 className="title" data-testid="settings-title">Página de configuração</h1>
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
            <option value="12">Música</option>
            <option value="11">Filmes</option>
            <option value="10">Livros</option>
            <option value="21">Esporte</option>
            <option value="23">História</option>
            <option value="19">Matemática</option>
            <option value="18"> Computadores</option>
            <option value="15">Video Games</option>
            <option value="31">Anime e Mangá</option>
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
