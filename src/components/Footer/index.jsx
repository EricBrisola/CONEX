import cursorImage from "../../assets/homePage/divConexe/cursormouse-1.png";

const Footer = () => {
  return (
    <div className="max-w-screen mt-[6.875rem] h-[29.375rem]">
      <div className="flex h-2/5 w-full flex-col items-center justify-start">
        <div className="flex h-full w-full flex-col items-center justify-start overflow-visible rounded-t-full bg-[#b6dcf7]">
          <div className="relative top-[-6.25rem] flex h-[13.125rem] w-2/5 items-center justify-center rounded-full bg-[#b6dcf7] shadow-[-3.125rem_2.1875rem_0.3125rem_-0.9375rem_rgba(0,0,0,0.3)]">
            <h1 className="text-[3.375rem] font-medium">Conexe Conosco</h1>
          </div>
        </div>
      </div>

      <div className="flex h-3/5 w-full bg-[#b6dcf7]">
        <div className="w-1/3 bg-[#c6ecff]"></div>
        <div className="w-1/3 bg-[#d6fcff]"></div>
        <div className="w-1/3 bg-[#e6ffff]"></div>
      </div>
    </div>
  );
};

export default Footer;
