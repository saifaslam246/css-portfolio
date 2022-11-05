import {
  MainCard,
  UpperDiv,
  CenterDiv,
  BottomDiv,
  Heading,
  Title,
  UpperImage,
  Followers,
  Following,
  Tag,
  Number,
  ShowIcons,
} from "./Element";
import IconCard from "../IconCard";
import profile from "../../../../assets/profile-img.jpg";
function HeaderCardBottom() {
  return (
    <>
      <MainCard>
        <UpperDiv>
          <UpperImage src={profile} alt="profile" />
        </UpperDiv>
        <CenterDiv>
          <Heading>Saif ur</Heading>
          <Title>MERN Stack Devloper</Title>
        </CenterDiv>
        <BottomDiv>
          <Followers>
            <Tag>FOLLOWER</Tag>
            <Number>600</Number>
          </Followers>
          <Following>
            <Tag>FOLLOWING</Tag>
            <Number>940</Number>
          </Following>
        </BottomDiv>
        <ShowIcons>
          <IconCard />
        </ShowIcons>
      </MainCard>
    </>
  );
}
export default HeaderCardBottom;
