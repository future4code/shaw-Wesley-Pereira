import React from 'react';
import Styled from 'styled-components';



const Alinhar = Styled.div`
  text-align: center;
`
const Espaço = Styled.div`
  margin: 10px;

`


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      name: '',
      email: '',
      age: '',
      select: '',
      selectValue: '',
      selectOptions: [
        { value: '', display: 'Selecione' },
        { value: 'option1', display: 'Ensino médio incompleto' },
        { value: 'option2', display: 'Ensino médio completo' },
        { value: 'option3', display: 'Ensino superior incompleto' },
        { value: 'option4', display: 'Ensino superior completo' },
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.handleSubmit3 = this.handleSubmit3.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSelectChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit2(event) {
    event.preventDefault();
    this.setState({ page: 2 });
  }
  
  handleSubmit3(event) {
    event.preventDefault();
    this.setState({ page: 2 });
  }

  

  render() {
    const { page, name, email, age, select, corse, selectOptions } = this.state;
    return (
      <Alinhar>
        {page === 1 &&
          <div>
          <div>
            <h1>Etapa1 - Dados Gerais</h1>            
          </div>
            
            
            <form onSubmit={this.handleSubmit2}>
              1. Qual o seu nome?
              <div>
              <Espaço>
                <input type="text" name="name" value={name} onChange={this.handleChange} />
              </Espaço>
              </div>
              2. Qual a sua idade?
              <div>
              <Espaço>              
                <input type="age" name="age" value={age}
    
                />
              </Espaço>
              </div>
              3. Qual o seu email?
              <div>
              <Espaço>
                <input type="email" name="email" value={email} onChange={this.handleChange} />
              </Espaço>
              </div>
              4. Qual a sua escolaridade?
              <div>
              <Espaço>
                <select name="select" value={select} onChange={this.handleSelectChange}>
                  {selectOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.display}
                    </option>
                  ))}
                </select>
              </Espaço>
              </div>
              <div>
              <button type="submit">Próxima etapa</button>
              </div>
            </form>
          </div>
        }
        {page === 2 &&
          <div>
            <div>
            <h1>Etapa2 - Informações do Ensino Superio</h1>            
          </div>
            5. Qual o seu curso?
              <div>
              <Espaço>
                <input type="text" name="corse" value={corse} onChange={this.handleChange} />
              </Espaço>
              </div>
              6. Qual a unidade de ensino?
              <div>
              <Espaço>
                <input type="text" name="corse" value={corse} onChange={this.handleChange} />
              </Espaço>
              </div>
              <div>
              <button type="submit">Próxima etapa</button>
              </div>
            <h1>Thank You</h1>
            <p>Thank you for your message.</p>
      
          </div>
        }
        {page === 3 &&
          <div>
            <div>
            <h1>Etapa3 - Informações Gerais de Ensino</h1>            
          </div>
            7. Por que você não terminou um curso de graduação?
              <div>
              <Espaço>
                <input type="text" name="corse" value={corse} onChange={this.handleChange} />
              </Espaço>
              </div>
              8. Você fez algum curso de complementação?
              <div>
              <Espaço>
                <select name="select" value={select} onChange={this.handleSelectChange}>
                  {selectOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.display}
                    </option>
                  ))}
                </select>
              </Espaço>
              <div>
              <button type="submit">Próxima etapa</button>
              </div>
              </div>
            <h1>Thank You</h1>
            <p>Thank you for your message.</p>
      
          </div>
        }
      </Alinhar>
    );
  };
};

