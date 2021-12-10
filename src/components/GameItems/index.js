import {GameImage, ChoiceButtons} from './styledComponents'

const GameItems = props => {
  const {gameDetails, gameResult} = props
  const {imageUrl, id} = gameDetails

  const clickImage = () => {
    gameResult(id)
  }

  const testId = id.toLowerCase()
  const dataTestId = `${testId}Button`

  return (
    <ChoiceButtons onClick={clickImage} data-testid={dataTestId}>
      <GameImage src={imageUrl} alt={id} />
    </ChoiceButtons>
  )
}
export default GameItems
