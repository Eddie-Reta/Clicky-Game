import React, { Component } from "react";
import shinobi from "./shinobi.json";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ShinobiGame from "./components/ShinobiGame";
import Navbar from "./components/Navbar";



class App extends Component {
    state = {
        shinobi,
        score: 0,
        topScore: 0,
        selectedCards: [],
        alert: "Click an Image to begin!"
    };
    
    cardRandomizer = () => {
        const shinobi = this.state.shinobi.sort(() => 
            Math.floor(Math.random() * 2 - 1)
        );
        this.setState({shinobi: shinobi})
    };
    handleYouWin = () => {
        if (this.state.selectedCards.length === 12) {
            this.setState({
                alert: "You win!!! Click Clicky Game to Play Again!!"
            });
            this.handleAddScore = null;
        }

        };

    handleAddScore = (id) =>{
        
        if (!this.state.selectedCards.includes(id.target.id)) {
            this.state.selectedCards.push(id.target.id);
            console.log(id.target.id)
            this.setState({
                score: this.state.score + 1,
                alert: "CORRECT! Keep Going!!"
            });
            this.cardRandomizer();
            this.handleYouWin();
            } else {
                if (this.state.score > this.state.topScore){
                this.setState({topScore: this.state.score}
                )} 
                this.setState({
                        score: 0,
                        selectedCards: [],
                        alert: "GAME-OVER!!!"

                    });
            
            setTimeout(() => {
                this.setState({
                    alert: "Play Again!!"
                });
            },2000);
        }
        }
        pageReload = () => {
            window.location.reload();
        }
    
    //this.state.score + 1


    render() {
        return (
           <Wrapper>
           
               <Navbar score={this.state.score} topScore={this.state.topScore} alert={this.state.alert} refresh={this.pageReload}/>
              
        
               <Title>
                   <h1 className="h1_title">Clicky Game!</h1>
                   <p className="p_title"><strong>Click on an image to earn points, but don't click on any more than once!</strong></p>
               </Title>
               <div className="cards">
               {this.state.shinobi.map(ninja =>(
                   <ShinobiGame 
                    id={ninja.id}
                    key={ninja.id}
                    name={ninja.name}
                    gif={ninja.gif}
                    handleAddScore={this.handleAddScore}
                    />
                      ))};
              
               </div>
           </Wrapper>
        )
    }
}

export default App;

