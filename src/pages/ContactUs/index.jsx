import Footer from "../../components/Footer";
import Header from "../../components/Header";
import imagem from "../../assets/contactUs/imgContactUsFix.png"

const ContactUs = () => {
  const labelClass = "font-JosefinSans font-extralight text-[25px]"
  const inputClass = "px-5 font-JosefinSans font-light text-[25px] text-black h-[50px] rounded-full bg-[#b6dcf7] "
  return (
  <div className="bg-[#EDF0EB]">
    <Header />
    <main className="flex flex-col items-center justify-start mb-[28rem]">
      <title className="flex w-full h-28 justify-center mt-20 mb-8">
        <h1 className="text-6xl font-JosefinSans font-extralight">CONEXE CONOSCO</h1>
      </title>

      <div className="h-44 rounded-[50px] w-[50%] bg-[#b6dcf7] py-10 flex flex-col items-center justify-between">
        <h2 className="font-JosefinSans font-medium text-[35px] text-white">Formulário para conexão:</h2>
        <h3 className="font-JosefinSans font-extralight text-[25px]">Lembre-se é de extrema relevância que todas as caixinhas sejam preenchidas :)</h3>
      </div>

      <div className="z-20 border-[10px] border-[#b6dcf7] h-[60rem] w-[50%] rounded-[30px] mt-10 flex flex-col px-[100px] py-[40px]">
        <div className="flex flex-col">
          <label className={labelClass}>Nome: </label>
          <input type="text" className={inputClass + "w-[600px]"}/>
        </div>
        
        <div className="flex mt-16">
          <div className="flex flex-col mr-10">
            <label className={labelClass}>Telefone: </label>
            <input type="text" className={inputClass + "w-[290px]"}/>
          </div>

          <div className="flex flex-col">
            <label className={labelClass}>Email: </label>
            <input type="text" className={inputClass + "w-[490px]"}/>
          </div>
        </div>

        <div className="mt-16 h-[60%]">
          <label className={labelClass}>Caixa aberta para qualquer necessidade de expressão:</label>
          <textarea className="resize-none p-5 font-JosefinSans font-light text-[25px] text-black rounded-[35px] bg-[#b6dcf7] w-[100%] h-[100%]"/>
        </div>
      </div>
      <div className="mt-24 z-20">
        <button className="bg-[#b6dcf7] shadow-contactCard rounded-full font-JosefinSans font-extralight text-[25px] p-3 px-7">CONECTAR</button>
      </div>
      <div className="bg-white h-[45rem] w-2/3 translate-y-[68rem] rounded-[35px] absolute z-10">
      <img
        src={imagem}
        alt="log-image"
        width={"100%"}
        className="absolute top-[37rem] cursor-default "
      />
      </div>
    </main>

    <Footer noButton={true}/>
  </div>
  )
};
export default ContactUs;
