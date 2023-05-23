import PropTypes from 'prop-types';


import { StatsSection, StatList, StatListItem } from './Statistics.styled';
import { getRandomHexColor } from 'components/Utility/randomColor';

export const Statistics = ({title, stats}) => {
    
    return (
    <StatsSection>
            {title && <h2 className="title">{title}</h2>}

        <StatList>
            {stats.map(({id, label, percentage}) => {
                return (<StatListItem key={id} color={getRandomHexColor()}>
                    <span className='label'>{label}</span> 
                    <span className='percentage'>{percentage}%</span> 
                </StatListItem>)
            })}
        </StatList>
    </StatsSection>
)
}
    
    
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

