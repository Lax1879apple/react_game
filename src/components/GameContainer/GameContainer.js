 import React, {Component} from 'react';
 import Card from '../Card';
 import Navbar from "../Navbar";
 import Container from "../Container";
 import cards from "../../cards.json";
 import Footer from "../Footer";

 class GameContainer extends Component{
     state = {
         cards,
         score: 0,
         topScore: 0
         
     };

     componentDidMount() {
         this.setState({cards: this.shuffleArray(this.state.cards) });
     }

     handleCorrectGuess = newCards => {
         const { topScore, score } = this.state;
         const newScore = score + 1;
         const newTopScore = newScore > topScore ? newScore : topScore;
         this.setState({
             cards: this.shuffleArray(newCards),
             score: newScore,
             topScore: newTopScore
         });
     };

     handleIncorrectGuess = cards => {
         this.setState({
             cards: this.resetCards(cards),
             score: 0
         });
     };

     resetCards = cards => {
         const resetCards = cards.map(card => ({ ...card, clicked: false }));
         return this.shuffleArray(resetCards);
     };

     handleClick = (id) => {
        let guessedCorrectly = false;
        const newCards = this.state.cards.map(card => {
            const newCard = { ...card};
            if(newCard.id === id) {
                if(!newCard.clicked) {
                    newCard.clicked = true;
                    guessedCorrectly = true;
                }
            }
            return newCard;
        });
        guessedCorrectly 
            ? this.handleCorrectGuess(newCards) 
            : this.handleIncorrectGuess(newCards);        
     };

     shuffleArray =(cards) =>{
        for (let i = cards.length -1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            const temp = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;
        }
        return cards;
     };

     render(){
         return(
             <div>
                <Navbar score={this.state.score} topScore={this.state.topScore}/>
                <header style={{ marginTop: 100, textAlign: "center", color: "white"}}><p>Click image once only to play the clicky game.Double clicking the same image will drop score to zero</p></header>
                <Container>
                    {this.state.cards.map(card => (
                        <Card 
                            key={card.id}
                            image={card.image}
                            clicked ={card.clicked} 
                            handleClick ={this.handleClick} 
                            shake={!this.state.score && this.state.topScore}
                            id = {card.id} 
                        />    
                    ))}
                </Container>
                <div>
            <Footer/>
        </div>
               
             </div>
            
               
         );

         
     }
 }

 export default GameContainer;
