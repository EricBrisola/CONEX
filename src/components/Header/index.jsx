import Navbar from "../Navbar";
import logo from "../../assets/homePage/Header/logo.png";
import brainImage from "../../assets/homePage/Header/img-header-brain.png";
import meaning from "../../assets/homePage/Header/meaning.png";
import whiteLines from "../../assets/homePage/Header/white-line.png";
const Header = () => {
  return (
    <header className="relative flex h-[41.25rem] flex-col items-center justify-end gap-[5.375rem] overflow-x-hidden bg-gradient-to-b from-[#b6dcf7] from-80% to-[#edf0eb] to-100%">
      <img
        src={logo}
        alt="log-image"
        className="left-50 absolute top-[14.5rem] object-contain"
      />
      <img
        src={brainImage}
        alt="brain-image"
        className="absolute right-0 top-0 h-[41.188rem] w-[23.25rem] object-cover"
      />
      <img
        src={meaning}
        alt="brain-image"
        className="absolute left-[14.3rem] top-[4.2rem] h-[9.206rem] w-[23rem] object-contain"
      />
      <img
        src={whiteLines}
        alt="brain-image"
        className="absolute left-[13rem] top-[4.75rem] object-contain"
      />
      <Navbar />
      <div className="h-[1px] w-[74.563rem] bg-black"></div>
    </header>
  );
};
export default Header;
