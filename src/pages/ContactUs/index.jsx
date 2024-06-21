import Footer from "../../components/Footer";
import Header from "../../components/Header";

const ContactUs = () => {
  const labelClass = "font-JosefinSans font-extralight text-[30px]"
  const inputClass = "font-JosefinSans font-medium text-[35px] text-white h-[50px] rounded-full bg-[#b6dcf7] "
  return (
  <div className="bg-[#EDF0EB]">
    <Header />
    <main className="flex flex-col items-center justify-start">
      <title className="flex w-full h-28 justify-center mt-20 mb-8">
        <h1 className="text-6xl font-JosefinSans font-extralight">CONEXE CONOSCO</h1>
      </title>

      <div className="h-44 rounded-[50px] w-[50%] bg-[#b6dcf7] py-10 flex flex-col items-center justify-between">
        <h2 className="font-JosefinSans font-medium text-[35px] text-white">Formulário para conexão:</h2>
        <h3 className="font-JosefinSans font-extralight text-[25px]">Lembre-se é de extrema relevância que todas as caixinhas sejam preenchidas :)</h3>
      </div>

      <div className="border-[10px] border-[#b6dcf7] h-[60rem] w-[50%] rounded-[30px] mt-10 flex flex-col px-[100px] py-[40px]">
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

      </div>
    </main>
    <Footer noButton={true}/>
  </div>
  )
};
export default ContactUs;
