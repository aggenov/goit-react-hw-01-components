import PropTypes from 'prop-types';

import {
    ProfileCard,
    ProfileDescription,
    Avatar,
    ProfileName,
    ProfileTag,
    ProfileLocation,
    ProfileStats,
    StatsLabel,
    StatsQuantity
} from './Profile.styled';


export const Profile = ({ username, tag, location, avatar, stats }) => {
    const { followers, views, likes } = stats;

return (
    <ProfileCard>
        <ProfileDescription>
            <Avatar src={avatar} alt="User avatar" className="avatar" width={80}/>
            <ProfileName>{username}</ProfileName>
            <ProfileTag>@{tag}</ProfileTag>
            <ProfileLocation>{location}</ProfileLocation>
        </ProfileDescription>

        <ProfileStats>
            <li>
                <StatsLabel>Followers</StatsLabel>
                <StatsQuantity>{new Intl.NumberFormat('de-DE').format(followers)}</StatsQuantity>
            </li>
            <li>
                <StatsLabel>Views</StatsLabel>
                <StatsQuantity>{new Intl.NumberFormat('de-DE').format(views)}</StatsQuantity>
            </li>
            <li>
                <StatsLabel>Likes</StatsLabel>
                <StatsQuantity>{new Intl.NumberFormat('de-DE').format(likes)}</StatsQuantity>
            </li>
        </ProfileStats>
    </ProfileCard>
)} ;


Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};