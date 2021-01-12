import PropTypes from 'prop-types'
import Transaction from './Transaction'
import s from './TransactionHistory.module.css'

const TransactionHistory = ({items}) => {
    return (
  <table className={s.transactionHistory}>
    <thead className={s.title}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
          
    <tbody className={s.tbody}>
            {items.map(item => (<tr
              key={item.id}
              className={s.tr}>
              <Transaction
                type={item.type}
                amount={item.amount}
                currency={item.currency}/>
              </tr>))}
    </tbody>
  </table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory