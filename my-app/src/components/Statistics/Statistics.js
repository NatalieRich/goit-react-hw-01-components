import PropTypes from 'prop-types'
import Statistic from './Statistic'
import s from './Statistics.module.css'

const Statistics = ({title, stats}) => {
    return (
      <section className={s.statistics}>
        
         {title && <h2 className={s.title}>{title}</h2>}
            
        <ul className={s.list}>
          {stats.map(stat => (<li
            key={stat.id}
            className={s.item}>
            <Statistic
                label={stat.label}
                percentage={stat.percentage}/>
                </li>))}
        </ul>
      </section>
    )
};

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
export default Statistics