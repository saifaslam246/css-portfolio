import {
  MainCard,
  Heart,
  Heading,
  HeadingCard,
  RatioHeading,
  RatioHeadingSpan,
} from "./Element";
import heart from "../../../../assets/heart.png";
function HeaderCardTop() {
  return (
    <>
      <MainCard>
        <Heart src={heart} alt="heart" />
        <Heading>Great Project</Heading>
        <HeadingCard>10+ Done</HeadingCard>
        <RatioHeading>
          <RatioHeadingSpan>2.1%</RatioHeadingSpan> vs last month
        </RatioHeading>
      </MainCard>
    </>
  );
}
export default HeaderCardTop;
