import './index.css'

const DenominationItem = props => {
  const {denominationsList, cashWithdraw} = props
  const {value} = denominationsList
  const onWithdraw = () => {
    cashWithdraw(value)
  }

  return (
    <li className="button-container">
      <button className="button" type="button" onClick={onWithdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
