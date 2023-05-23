import PropTypes from 'prop-types';
import { List, FriendItem} from './FriendList.styled'

export const FriendList = (( {friends} ) => {
    return (
        <List>
            {friends.map(({ id, avatar, name, isOnline }) => {
                return (
                    <FriendItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    >
                            <span className='status'></span>
                            <img className='avatar' src={avatar} alt="User avatar" width="48" />
                        <p className='name'>{name}</p>
                         
                    </FriendItem>
                )
            })}
            
        </List>
    )
})


FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })).isRequired
  
};