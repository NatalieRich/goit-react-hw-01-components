import PropTypes from 'prop-types'
import s from './Statistics.module.css'

const Statistic = ({ label, percentage}) => {
    return (
      <>
         <span className={s.label}>{label}</span>
         <span className={s.percentage}>{percentage}</span>
      </>
    
    )
}

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistic