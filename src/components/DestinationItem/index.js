// Write your code here
import './index.css'

const DestinationItem = props => {
  // console.log(props)
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="destination-item">
      <img className="destination-image" src={imgUrl} alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}
export default DestinationItem
