import Footer from "../../components/Footer";
import Header from "../../components/Header";
import linhaCurva from "../../assets/AboutUs/main/linhaCurva.png"

const AboutUS = () => {
  return (
    <main className="max-w-screen relative flex min-h-screen flex-col bg-[#EDF0EB]">
      <Header />
      <div className="w-screen flex justify-center pt-20">
        <div className="w-[83%] h-[100vh] bg-white border-2 border-black rounded-[80px] flex flex-col items-center pt-16 px-36 mb-16">
          <h1 className="text-[72px] font-thin">SOBRE NÓS</h1>
          <img
            src={linhaCurva}
            alt=""
            className="w-[27rem] -translate-y-4"
          />
          <div className="mt-16 font-thin">
            O atendimento psicológico para idosos é direcionado ao desenvolvimento cofnitivo. Gerlamente, essas terapias são desempenhadas
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
};
export default AboutUS;
