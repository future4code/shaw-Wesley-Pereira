import React from 'react'
import Styled from 'styled-components'
import axios from 'axios'
import Icon1 from './img/hug.png'
import Icon2 from './img/left.png'
import Heart from './img/heart.png'
import Close from './img/close.png'
import Lista from './Lista'


const AreaToda = Styled.div`
  
background-color: #383838;
  width: 375px;
  height: 667px;
  border: 1px solid black;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin: 0 auto;
`

const Header = Styled.div`
display: flex;
`
  
  const Astromatch1 = Styled.div`
  display: flex;
  
  margin-left: 7.5rem;
  padding-top: 0;
  border: 0;
  `
  const Astromatch2 = Styled.div`
  display: flex;
  
  `
  const BotaoIcone1 = Styled.div`
  display: flex; 
  margin-top: 0.9rem;
  margin-left: 3rem;
  cursor: pointer;
  `
  const BotaoIcone2 = Styled.div`
  display: flex;
  margin-top: 1.3rem;
  margin-right: 4.5rem;
  margin-left: 0.5rem;
  cursor: pointer;
  `



  const Tela = Styled.div`
  border-box: border-box;
  width: 358px;
  height: 447.5px;
  color: #F2F2F2;
  margin: 20px auto;
  
  padding-top: 0.5rem;
  `
 

  const P1 = Styled.p`
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
  color: #CDBE78;
  font-weight: bold;
  
  `
  const P2 = Styled.p`
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
  color: #066163;
  font-weight: bold;
  
  `
  const P3 = Styled.p`
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  color: #f5f5f5;
  font-weight: bold;
  
  `
  const Button = Styled.div`
  display: flex;
  justify-content: space-evenly;
  &:hover {
    cursor: pointer;
      
  }
  `
  const Footer = Styled.div`
  
  margin-top: 1rem;
  `

const Img = Styled.img`
max-width: 358px;
max-height: 458px;
`
 



export default class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      profile: {},
      lista: [],
      clcickedChar: ""

    };
    this.handleSubmit1 = this.handleSubmit1.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
  }

  componentDidMount() {
    this.getProfile();
  }

  handleSubmit1(event) {
    event.preventDefault();
    this.setState({ page: 1 });
  }

  handleSubmit2(event) {
    event.preventDefault();
    this.setState({ page: 2 });
  }


  getProfile = async () => {
     try {
    const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gustavo/person');
    this.setState({ profile: response.data.profile });
     }
      catch (error) {
        console.log(error.response)
      }
      
  }

  chooseProfile = async (choice) => {
    try {
      
    const response = await axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wesley-shaw/choose-person', {
      body:{
        id: this.state.profile.id,
        choice: choice
      } 
    })
  }    
      catch(error) {
      console.log(error.response)
    }
  }

  clear = async () => {
    try {
      const response = await axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wesley-shaw/clear' );
    
      this.setState({ profile: response.data.profile })
    }
    catch(error) {
      console.log(error)
    
  }
  }


  


  render() {


    
    

const { page } = this.state;


     
    
    
  return (
    <div>
       {page === 1 && 
    <AreaToda>
      <Header>
    <Astromatch1>
      <P1>astro</P1><P2>match</P2>
      </Astromatch1>
      <BotaoIcone1>
      <img onClick={this.handleSubmit2} height={40} src={Icon1} alt="icon"/>
      </BotaoIcone1>
      </Header>
      <hr />
      <Tela>
        {<Img  src={this.state.profile.photo} alt="profile" />}
        <P3>{this.state.profile.name}, {this.state.profile.age} </P3>
        <P3>{this.state.profile.bio}</P3>
        
        
      </Tela>
      <Footer>
        <Button>
          <img onClick={() => this.chooseProfile(false)}  height={50} src={Close} alt="icon"/>
        
          <img onClick={() => this.chooseProfile(true)} height={50} src={Heart} alt="icon"/>
        </Button>
      </Footer>
    </AreaToda>
    }
    {page === 2 && 
    <AreaToda>
    <Header>
  <Astromatch2>
  <BotaoIcone2>
    <img onClick={this.handleSubmit1} height={40} src={Icon2} alt="icon"/>
    </BotaoIcone2>
    <P1>astro</P1><P2>match</P2>
    </Astromatch2>
    
    </Header>
    <hr />
    <Tela>
      <Lista />

      
    </Tela>
    <Button>
    <img onClick={this.clear} height={50} src={Close} alt="icon"/>
    </Button>
   
  </AreaToda>
    }

    </div>
  )
}
}