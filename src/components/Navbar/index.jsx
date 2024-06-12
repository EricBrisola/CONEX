import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinksStyle =
    "font-JosefinSans rounded-2xl px-2 py-1 text-xl font-bold hover:bg-[#B6DCF7] hover:text-white duration-200";
  return (
    <nav className="shadow-custom flex h-[6.688rem] w-[55.813rem] items-center justify-center rounded-[2.188rem] bg-white">
      <div className="shadow-custom bg-custom flex h-[3.375rem] w-[42.938rem] items-center justify-center gap-[0.625rem] rounded-[2.125rem]">
        <p className={navLinksStyle}>
          <Link to={"/"}>Início</Link>
        </p>
        <p className={navLinksStyle}>
          <Link to={"/about-us"}>Sobre Nós</Link>
        </p>
        <p className={navLinksStyle}>
          <Link to={"/professionals"}>Profissionais</Link>
        </p>
        <p className={navLinksStyle}>
          <Link to={"/contact-us"}>Fale Conosco</Link>
        </p>
      </div>
    </nav>
  );
};
export default Navbar;
