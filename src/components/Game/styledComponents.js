import styled from 'styled-components'

export const GameAppContainer = styled.div`
  background-color: #223a5f;
  height: 100%;
  background-size: cover;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ScoreNamesContainer = styled.div`
  border: 1px solid #ffffff;
  padding: 20px;
  width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  width: 190px;
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NamesContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Names = styled.h1`
  color: #ffffff;
  font-family: BreeSerif;
  font-size: 20px;
`
export const ScoreText = styled.p`
  color: #223a5f;
  font-family: BreeSerif;
  font-size: 20px;
`

export const Score = styled.p`
  color: #223a5f;
  font-family: Roboto;
  font-size: 40px;
  font-weight: bold;
`
export const GameListItemsContainer = styled.ul`
  display: flex;
  flex-direction: row;
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  color: #223a5f;
  font-family: Bree Serif;
  align-self: flex-end;
`

export const ModalContainer = styled.div`
  background-color: #223a5f;
  padding: 20px;
  width: 700px;
  height: 700px;
`

export const RulesImage = styled.img`
  height: 400px;
`

export const ResultImage = styled.img`
  height: 200px;
  margin: 20px;
`

export const OpponentImage = styled.img`
  height: 200px;
  margin: 20px;
`
export const YourChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`

export const OpponentChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`
export const ResultChoiceContainer = styled.div`
  display: flex;
`
export const ResultText = styled.p`
  color: #ffffff;
  font-family: Roboto;
  text-align: center;
`

export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  padding: 10px;
  border-radius: 5px;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border-color: transparent;
`
