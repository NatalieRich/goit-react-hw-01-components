import FriendListItem from './FriendListItem'
import s from './FriendList.module.css'
import PropTypes from 'prop-types'

const FriendList = ({ friends }) => {
    return (
        <ul className={s.friendList}>
            {friends.map(friend => (
            <li key={friend.id} className={s.item}>
                <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />
           </li>))}
           
        </ul>
    )
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendList
