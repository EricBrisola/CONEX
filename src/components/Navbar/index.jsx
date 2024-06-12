import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="shadow-custom flex h-28 w-[55rem] items-center justify-center rounded-[2.188rem] bg-white">
      <div className="shadow-custom bg-custom flex h-[3.375rem] w-[42.938rem] items-center justify-center gap-6 rounded-[2.125rem]">
        <p className="font-JosefinSans text-xl font-bold">
          <Link to={"/"}>Início</Link>
        </p>
        <p className="font-JosefinSans text-xl font-bold">
          <Link to={"/about-us"}>Sobre Nós</Link>
        </p>
        <p className="font-JosefinSans text-xl font-bold">
          <Link to={"/professionals"}>Profissionais</Link>
        </p>
        <p className="font-JosefinSans text-xl font-bold">
          <Link to={"/contact-us"}>Fale Conosco</Link>
        </p>
      </div>
    </nav>
  );
};
export default Navbar;
