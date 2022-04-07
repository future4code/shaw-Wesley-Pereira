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
      ],
      selectOptions2: [
        { value: '', display: 'Nenhum' },
        { value: 'option1', display: 'Curso técnico' },
        { value: 'option2', display: 'Curso de inglês' },
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.handleSubmit3 = this.handleSubmit3.bind(this);
    this.handleSubmit4 = this.handleSubmit4.bind(this);
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
    this.setState({ page: 3 });
  }

  handleSubmit4(event) {
    event.preventDefault();
    this.setState({ page: 4 });
  }
  

  render() {
    const { page, name, email, age, select, corse, selectOptions, selectOptions2 } = this.state;
    return (
      <Alinhar>
        {page === 1 &&
          <div>
          <div>
            <h1>Etapa 1 - Dados Gerais</h1>            
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
        <form onSubmit={this.handleSubmit3}>
           <div>
            <h1>Etapa 2 - Informações do Ensino Superio</h1>            
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
        </form>
        }
        {page === 3 &&
          <form onSubmit={this.handleSubmit4}>
          <div>
            <div>
            <h1>Etapa 3 - Informações Gerais de Ensino</h1>            
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
                  {selectOptions2.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.display}
                    </option>
                  ))}
                </select>
              </Espaço>
              <div>
              <button type="submit">Eviar</button>
              </div>
              </div>
          </div>
          </form>

           
        }
        {page === 4 &&
        
           <div>
            <h1>O FORMULÁRIO ACABOU</h1>
            <p>Muito obrigado por participar! Entraremos em contato!</p>
              </div>
        
   }
      </Alinhar>
    );
  };
};

