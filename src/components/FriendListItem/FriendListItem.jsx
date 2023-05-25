import PropTypes from 'prop-types';
import { FriendItem } from './FriendListItem.syled';

export const FriendListItem = ({ name, avatar, isOnline }) => {
    return (
        <FriendItem isOnline={isOnline}>
            <span></span>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </FriendItem>
    )
};


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}