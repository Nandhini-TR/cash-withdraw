import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  constructor(props) {
    super(props)
    const {denominationsList} = props
    this.state = {denominationList: denominationsList, amount: 2000}
  }

  cashWithdraw = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {denominationList, amount} = this.state
    return (
      <div className="bg-container">
        <div className="name-container">
          <p className="logo">s</p>
          <h1 className="name">Sarah Williams</h1>
        </div>
        <div className="balance-container">
          <p className="balance">Your Balance</p>
          <div className="amount-container">
            <p className="amount">{amount}</p>
            <p className="rupees">In Rupees</p>
          </div>
        </div>
        <p className="name">Withdraw</p>
        <p className="balance-description">CHOOSE SUM (IN RUPEES)</p>
        <ul className="button-container">
          {denominationList.map(each => (
            <DenominationItem
              denominationsList={each}
              key={each.id}
              cashWithdraw={this.cashWithdraw}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
