import Navbar from "../Navbar";

const Header = () => {
  return (
    <header className="flex h-[29.188rem] flex-col items-center justify-end gap-[5.375rem] bg-gradient-to-b from-[#b6dcf7] from-80% to-[#edf0eb] to-100%">
      <Navbar />
      <div className="h-[1px] w-[74.563rem] bg-black"></div>
    </header>
  );
};
export default Header;
