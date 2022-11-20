import { MdCall, BsFillChatFill } from "../../../../utils/icons";
import { ChatCard, CallCard, IconCard } from "./Element";
function HeaderIcons() {
  return (
    <>
      <IconCard>
        <ChatCard>
          <BsFillChatFill
            style={{
              fontSize: "13px",
              color: "green",
            }}
          />
        </ChatCard>
        <CallCard>
          <MdCall
            style={{
              fontSize: "13px",
              color: "green",
            }}
          />
        </CallCard>
      </IconCard>
    </>
  );
}
export default HeaderIcons;
