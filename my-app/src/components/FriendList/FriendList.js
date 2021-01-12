import FriendListItem from './FriendListItem'
import s from './FriendList.module.css'
import PropTypes from 'prop-types'

const FriendList = ({ friends }) => {
    return (
        <ul className={s.friendList}>
            {friends.map(({ id, name, avatar, isOnline }) =>
        <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline = {isOnline}/>)}</ul>
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
