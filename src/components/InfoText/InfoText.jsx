import PropTypes from 'prop-types';
import { FOLLOW } from 'components/constants';
import nothingImg from '../images/nothing.gif';

import { InfoWrapper, StyledImg, ImgWrapper } from './InfoText.styled';

const InfoText = ({ filter }) => {
  return (
    <InfoWrapper>
      <p>There are no users {filter === FOLLOW ? 'to follow' : 'you follow'}</p>
      <ImgWrapper>
        <StyledImg src={nothingImg} alt="John Travolta" width={288} />
      </ImgWrapper>
    </InfoWrapper>
  );
};

export default InfoText;

InfoText.propTypes = {
  filter: PropTypes.string.isRequired,
};