import Footer from "../../components/Footer";
import Header from "../../components/Header";
import linhaCurva from "../../assets/AboutUs/main/linhaCurva.png"
import alunos from "../../assets/AboutUs/main/img_alunos.png"

const AboutUS = () => {
  return (
    <main className="max-w-screen relative flex min-h-screen flex-col bg-[#EDF0EB]">
      <Header />
      <div className="w-full flex justify-center pt-20">
        <div className="w-[83%] h-[140vh] bg-white border-2 border-black rounded-[80px] flex flex-col items-center pt-16 px-36 mb-16">
          <h1 className="text-[72px] font-thin">SOBRE NÓS</h1>
          <img
            src={linhaCurva}
            alt=""
            className="w-[27rem] -translate-y-4"
          />
          <div className="h-[52%] mt-16 font-thin text-2xl">
          Somos a CONEX - Conexão Emocional e Acolhimento, aqui você encontra especialista capacitados para lhe ajudar, dentro de um ambiente amigável, empático e respeitoso.
Em 2020 na pandemia de COVID-19 quando as pessoas precisavam de ajuda e/ou apoio emocional surge a CONEX no Estado de Santa Catarina, mas especificamente em São Bento do Sul, desde então oferecemos atendimentos on-line e presenciais em: Psicologia e saúde da mulher; Psicologia infantil; Psicologia do adulto e do idoso; Arteterapia; Terapia cognitivo comportamental.
Localização: Rua Jardins da felicidade - 1355, bairro centro, São Bento do Sul.
          </div>
          <img
            src={alunos}
            alt=""
            className="overflow-hidden"
          />
        </div>
      </div>
      <Footer />
    </main>
  )
};
export default AboutUS;
