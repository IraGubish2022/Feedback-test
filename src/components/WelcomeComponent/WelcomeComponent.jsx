import welcome from '../images/welcome.gif';
import {
  Wrapper,
  Title,
  Text,
  ImgWrapper,
  Img,
  StyledLink,
} from './WelcomeComponent.styled';

const WelcomeComponent = () => {
  return (
    <Wrapper>
      <Title>Welcome to our app!</Title>
      <ImgWrapper>
        <Img src={welcome} alt="Welcome to our app" width={288} />
      </ImgWrapper>

      <Text>
      Rather follow <StyledLink to={'/tweets'}>the link</StyledLink> and find new friends and like-minded people!
      </Text>
    </Wrapper>
  );
};

export default WelcomeComponent;