import s from './Profile.module.css'

import PropTypes from 'prop-types'

const Profile = ({avatar, name, tag, location, stats}) => {
  return (
  <div className={s.profile}>
      
    <div className="description">
      <img
        src={avatar}
        alt="Аватар пользователя"
        className={s.avatar}
      />
      <p className={s.name}>{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className={s.stats}>
      <li className={s.list}>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{stats.followers}</span>
      </li>
      <li className={s.list}>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{stats.views}</span>
      </li>
      <li className={s.list}>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>{stats.likes}</span>
      </li>
    </ul>
      
  </div>)
}


Profile.protoTypes = {
  avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      stats: PropTypes.objectOf(
        PropTypes.shape({
          followers: PropTypes.number.isRequired,
          views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
        })
      )
}

export default Profile