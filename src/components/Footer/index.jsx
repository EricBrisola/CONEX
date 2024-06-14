import { Link } from "react-router-dom";
import cursorImage from "../../assets/homePage/divConexe/cursormouse-1.png";
import facebook from "../../assets/homePage/Footer/Iconfacebook.png"
import instagram from "../../assets/homePage/Footer/IconInstagram.png"
import linkedin from "../../assets/homePage/Footer/IconLinkedin.png"
import youtube from "../../assets/homePage/Footer/IconYoutube.png"
import line from "../../assets/homePage/Footer/line_footer.png"

const Footer = () => {
  let listItemClass = "pt-10 pl-4 text-xl font-bold"
  let navLinksStyle = "text-white text-lg font-semibold"
  return (
    <div className="max-w-screen mt-[6.875rem] h-[29.375rem]">
      <div className="flex h-2/5 w-full flex-col items-center justify-start">
        <div className="flex h-full w-full flex-col items-center justify-start overflow-visible rounded-t-full bg-[#b6dcf7]">
          <div className="hover:cursor-pointer relative top-[-6.25rem] flex h-[13.125rem] w-2/5 items-center justify-center rounded-full bg-[#b6dcf7] shadow-[-3.125rem_2.1875rem_0.3125rem_-0.9375rem_rgba(0,0,0,0.3)]">
            <h1 className="text-[3.375rem] font-medium">Conexe Conosco</h1>
            <img
              src={cursorImage}
              alt="log-image"
              className="-right-[12rem] absolute top-[0rem] cursor-default"
            />
          </div>
        </div>
      </div>

      <div className="flex h-3/5 w-full bg-[#b6dcf7]">
        <div className="w-1/2 flex pl-28 flex-col">
          <div className="text-white text-2xl font-bold">CONEX - Conexão Emocional e Acolhimento</div>
          <div className="flex mt-32">
            <img
              src={facebook}
              alt="log-image"
              className=""
            />
            <img
              src={linkedin}
              alt="log-image"
              className=""
            />
            <img
              src={youtube}
              alt="log-image"
              className=""
            />
            <img
              src={instagram}
              alt="log-image"
              className=""
            />
          </div>
        </div>
        <div className="w-1/4 bg-[#b6dcf7] pl-16 flex flex-col">
          <div className="text-white text-2xl font-bold h-auto">Áreas Trabalhadas</div>
          <div className="flex">
            <div className="w-full h-auto text-white flex flex-col">
              <p className={listItemClass}>PSM</p>
              <p className={listItemClass}>PI</p>
              <p className={listItemClass}>PAI</p>
            </div>
            <div className="w-full h-auto text-white flex flex-col">
              <p className={listItemClass}>AT</p>
              <p className={listItemClass}>TCC</p>
            </div>
          </div>
        </div>
        <img
          src={line}
          alt="log-image"
          className="h-[200px] w-[1px] mt-[50px] absolute left-[80%]"
        />
        <div className="w-1/4 flex flex-col justify-around pl-28 pt-10 pb-8">
          <p className={navLinksStyle}>
            <Link to={"/"}>Início</Link>
          </p>
          <p className={navLinksStyle}>
            <Link to={"/about-us"}>Sobre Nós</Link>
          </p>
          <p className={navLinksStyle}>
            <Link to={"/professionals"}>Contatos</Link>
          </p>
          <p className={navLinksStyle}>
            <Link to={"/contact-us"}>Fale Conosco</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
