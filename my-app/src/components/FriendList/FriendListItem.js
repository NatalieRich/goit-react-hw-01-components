import PropTypes from 'prop-types'
import s from './FriendList.module.css'

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <>
            <span className={s.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}>{isOnline}</span>
             <img className={s.avatar} src={avatar} alt="" width="48" />
            <p className={s.name}>{name}</p>
        </>
    )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem