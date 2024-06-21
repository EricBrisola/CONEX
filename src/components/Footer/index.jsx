import { Link } from "react-router-dom";
import cursorImage from "../../assets/homePage/divConexe/cursormouse-1.png";
import facebook from "../../assets/homePage/Footer/IconFacebook.png";
import instagram from "../../assets/homePage/Footer/IconInstagram.png";
import linkedin from "../../assets/homePage/Footer/IconLinkedin.png";
import youtube from "../../assets/homePage/Footer/IconYoutube.png";
import line from "../../assets/homePage/Footer/line_footer.png";

const Footer = (props) => {
  console.log(!!props.noButton)
  let isHidden = (!!props.noButton ? " hidden" : "")
  const listItemStyle = "pt-10 pl-4 text-lg font-semibold";
  const navLinksStyle = "text-white text-lg font-semibold";
  const iconStyle = "px-2";
  return (
    <div className="max-w-screen mt-[6.875rem] h-[29.375rem]">
      <div className="flex h-2/5 w-full flex-col items-center justify-start">
        <div className="flex h-full w-full flex-col items-center justify-start overflow-visible rounded-t-full bg-[#b6dcf7]">
          <div className={"relative top-[-6.25rem] flex h-[13.125rem] w-2/5 items-center justify-center rounded-full bg-[#b6dcf7] shadow-[-3.125rem_2.1875rem_0.3125rem_-0.9375rem_rgba(0,0,0,0.3)] hover:cursor-pointer" + isHidden}>
            <h1 className="text-[3.375rem] font-medium">Conexe Conosco</h1>
            <img
              src={cursorImage}
              alt="log-image"
              className="absolute -right-[12rem] top-[0rem] cursor-default "
            />
          </div>
        </div>
      </div>

      <div className="flex h-3/5 w-full bg-[#b6dcf7]">
        <div className="flex w-1/2 flex-col pl-28">
          <div className="text-2xl font-semibold text-white">
            CONEX - Conexão Emocional e Acolhimento
          </div>
          <div className="mt-32 flex">
            <img src={facebook} alt="log-image" className={iconStyle} width={40} height={40} />
            <img src={linkedin} alt="log-image" className={iconStyle} width={40} height={40} />
            <img src={youtube} alt="log-image" className={iconStyle} width={40} height={40} />
            <img src={instagram} alt="log-image" className={iconStyle} width={40} height={40} />
          </div>
        </div>
        <div className="flex w-1/4 flex-col bg-[#b6dcf7] pl-16">
          <div className="h-auto text-2xl font-semibold text-white">
            Áreas Trabalhadas
          </div>
          <div className="flex">
            <div className="flex h-auto w-full flex-col text-white">
              <p className={listItemStyle}>PSM</p>
              <p className={listItemStyle}>PI</p>
              <p className={listItemStyle}>PAI</p>
            </div>
            <div className="flex h-auto w-full flex-col text-white">
              <p className={listItemStyle}>AT</p>
              <p className={listItemStyle}>TCC</p>
            </div>
          </div>
        </div>
        <img
          src={line}
          alt="log-image"
          className="absolute left-[80%] mt-[50px] h-[200px] w-[1px]"
        />
        <div className="flex w-1/4 flex-col justify-around pb-8 pl-28 pt-10">
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
      </div>
    </div>
  );
};

export default Footer;
