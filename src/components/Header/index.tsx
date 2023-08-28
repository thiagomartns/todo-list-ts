import { HeaderContainer } from "./styles";
import LogoImg from "../../assets/Logo (1).svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={LogoImg} alt="" />
    </HeaderContainer>
  );
};
