import {
  GrFacebookOption,
  RiLinkedinFill,
  AiOutlineInstagram,
} from "../../../../utils/icons";
function HeaderIcons() {
  return (
    <>
      <GrFacebookOption
        style={{
          borderRadius: "25%",
          fontSize: "30px",
          color: "#002366",
          boxShadow: "0.22em -0.22em 0 -0.18em",
        }}
      />
      <RiLinkedinFill
        style={{
          borderRadius: "25%",
          fontSize: "30px",
          boxShadow: "0.22em -0.22em 0 -0.18em",
          color: "#0072b1",
          marginLeft: "20px",
        }}
      />
      <AiOutlineInstagram
        style={{
          borderRadius: "25%",
          boxShadow: "0.22em -0.22em 0 -0.18em",
          fontSize: "30px",
          color: "#fb3958",
          marginLeft: "20px",
        }}
      />
    </>
  );
}
export default HeaderIcons;
