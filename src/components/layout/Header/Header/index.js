import {
  HeaderMain,
  LeftHeader,
  RightHeader,
  QuoteTag,
  NameTag,
  About,
  ButtonTag,
  ButtonSign,
  Circular,
  Heart,
  IconDiv,
  HeaderCircle,
  Profile,
} from "./Elements";
import { ContactButton } from "../../../custom/Button/ContactButton";
import heart from "../../../../assets/heart.png";
import profile from "../../../../assets/personal.png";
import saif from "../../../../assets/saifprofile.png";
import HeaderIcons from "../HeaderIcons/index";
import HeaderCardBottom from "../../../../pages/AllMainpages/HeaderCards/HeaderCardBottom";
import HeaderCardTop from "../../../../pages/AllMainpages/HeaderCards/HeaderCardtop";
import HeaderCardLeft from "../../../../pages/AllMainpages/HeaderCards/HeaderCardLeft";
function Header() {
  return (
    <>
      <HeaderMain>
        <LeftHeader>
          <QuoteTag>
            <Heart src={heart} alt="heart" />
            <br />
            Speed Up <br />
            Communiction
          </QuoteTag>
          <NameTag>
            Hi I'm Saif ur
            <Circular />
            <br />
            Rehman
          </NameTag>

          <About>
            This is the place where you can find every thing realted to the best
            of
            {/* <br /> */}
            project to-do list or communication
          </About>
          <ButtonTag>
            <ContactButton
              $width={"150px"}
              $fontSize={"20px"}
              $backgroundColor={"blue"}
              $color={"white"}
              $height={"56px"}
              $borderRadius={"100px"}
            >
              Hire Me
            </ContactButton>
            <ButtonSign />
          </ButtonTag>
          <IconDiv>
            <HeaderIcons />
          </IconDiv>
        </LeftHeader>
        <RightHeader>
          <HeaderCardTop />
          {/* <HeaderCardBottom /> */}
          <HeaderCardLeft />
          <HeaderCircle>
            {/* <Profile src={profile} alt="Profile image" /> */}
            <Profile
              // style={{ height: 500, width: 500, marginLeft: 120 }}
              src={saif}
              alt="Profile image"
            />
          </HeaderCircle>
        </RightHeader>
      </HeaderMain>
    </>
  );
}
export default Header;
