import FontPoppins from "../assets/font/Poppins";
import StorybookHeader, { HeaderNav } from "./header.styles";

interface HeaderProps {
  /**
   * What logo in header
   */
  NavLogo?: JSX.Element[];
  /**
   * What menu in header
   */
  menuItems?: JSX.Element[];
  /**
   * What menu in header
   */
  ProfileWrapper?: JSX.Element[];
  /**
   * What background color to use
   */
  backgroundColor?: string;
}

const Header = ({ backgroundColor = "#0D4A3E", NavLogo = [], menuItems = [], ProfileWrapper = [] }: HeaderProps) => {
  return (
    <>
      <FontPoppins />
      <HeaderNav>
        <StorybookHeader style={{ backgroundColor }}>
          <div className="NavLogo">
            {NavLogo}
          </div>
          <div className="menuItems">
            {menuItems}
          </div>
          <div className="ProfileWrapper">
            {ProfileWrapper}
          </div>
        </StorybookHeader>
      </HeaderNav>
    </>
  );
};

export default Header;