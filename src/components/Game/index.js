import {Component} from 'react'
import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {
  GameAppContainer,
  ScoreNamesContainer,
  Names,
  ScoreContainer,
  ScoreText,
  Score,
  GameListItemsContainer,
  RulesButton,
  ModalContainer,
  RulesImage,
  YourChoiceContainer,
  ResultImage,
  ResultChoiceContainer,
  ResultText,
  GameResultContainer,
  PlayAgainButton,
  CloseButton,
  OpponentImage,
  OpponentChoiceContainer,
} from './styledComponents'
import GameItems from '../GameItems'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },

  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Game extends Component {
  state = {
    randomId: choicesList[Math.floor(Math.random() * choicesList.length)].id,
    isGameInProgress: true,
    activeId: '',
    score: 0,
  }

  clickPlayAgain = () => {
    this.setState({
      randomId: choicesList[Math.floor(Math.random() * choicesList.length)].id,
      isGameInProgress: true,
    })
  }

  gameResult = activeId => {
    const {randomId} = this.state
    this.setState({activeId, isGameInProgress: false})

    if (activeId === 'ROCK' && randomId === 'SCISSORS') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (activeId === 'ROCK' && randomId === 'PAPER') {
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (activeId === 'SCISSORS' && randomId === 'PAPER') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (activeId === 'SCISSORS' && randomId === 'ROCK') {
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (activeId === 'PAPER' && randomId === 'ROCK') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (activeId === 'PAPER' && randomId === 'SCISSORS') {
      this.setState(prevState => ({score: prevState.score - 1}))
    } else {
      this.setState(prevState => ({score: prevState.score}))
    }
  }

  renderGameResult = () => {
    const {activeId, randomId} = this.state
    console.log(activeId)
    console.log(randomId)

    let resultText
    if (activeId === 'ROCK' && randomId === 'SCISSORS') {
      resultText = 'YOU WON'
    } else if (activeId === 'ROCK' && randomId === 'PAPER') {
      resultText = 'YOU LOSE'
    } else if (activeId === 'SCISSORS' && randomId === 'PAPER') {
      resultText = 'YOU WON'
    } else if (activeId === 'SCISSORS' && randomId === 'ROCK') {
      resultText = 'YOU LOSE'
    } else if (activeId === 'PAPER' && randomId === 'ROCK') {
      resultText = 'YOU WON'
    } else if (activeId === 'PAPER' && randomId === 'SCISSORS') {
      resultText = 'YOU LOSE'
    } else {
      resultText = 'IT IS DRAW'
    }

    const activeUserChoice = choicesList.find(
      eachChoice => eachChoice.id === activeId,
    )

    const randomUserChoice = choicesList.find(
      eachChoice => eachChoice.id === randomId,
    )
    const yourImageUrl = activeUserChoice.imageUrl
    const randomImageUrl = randomUserChoice.imageUrl

    console.log(yourImageUrl)
    console.log(randomImageUrl)

    return (
      <GameResultContainer>
        <ResultChoiceContainer>
          <YourChoiceContainer>
            <h1>You</h1>
            <ResultImage src={yourImageUrl} alt="your choice" />
          </YourChoiceContainer>
          <OpponentChoiceContainer>
            <h1>Opponent</h1>
            <OpponentImage src={randomImageUrl} alt="opponent choice" />
          </OpponentChoiceContainer>
        </ResultChoiceContainer>
        <ResultText>{resultText}</ResultText>
        <PlayAgainButton type="button" onClick={this.clickPlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultContainer>
    )
  }

  renderChoices = () => (
    <>
      <GameListItemsContainer>
        {choicesList.map(eachItem => (
          <GameItems
            gameDetails={eachItem}
            key={eachItem.id}
            gameResult={this.gameResult}
          />
        ))}
      </GameListItemsContainer>
      <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
        {close => (
          <>
            <ModalContainer onClick={() => close()}>
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </ModalContainer>
            <CloseButton onClick={() => close()} type="button">
              <RiCloseLine />
            </CloseButton>
          </>
        )}
      </Popup>
    </>
  )

  render() {
    const {isGameInProgress, score} = this.state
    return (
      <GameAppContainer>
        <ScoreNamesContainer>
          <Names>
            Rock <br />
            Paper <br />
            Scissors
          </Names>

          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <Score>{score}</Score>
          </ScoreContainer>
        </ScoreNamesContainer>
        {isGameInProgress ? this.renderChoices() : this.renderGameResult()}
      </GameAppContainer>
    )
  }
}

export default Game
