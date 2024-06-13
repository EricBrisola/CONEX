import Area from "../../components/AreaCard";
import Header from "../../components/Header";
import mainImage from "../../assets/homePage/Main/psm/psm-img.png";
import psmBg from "../../assets/homePage/Main/psm/psm-bg.png";
import border from "../../assets/homePage/Main/cloud-blue.png";

const Home = () => {
  const title = "Psicologia e saúde da mulher";
  const text =
    "Aborda uma variedade de tópicos relacionados à saúde integral das mulheres: física, mental e emocional, em diferentes fases do desenvolvimento";
  return (
    <main className="max-w-screen flex min-h-screen flex-col bg-[#EDF0EB]">
      <Header />
      <section className="mb-6 mt-[4.563rem] flex h-28 justify-center">
        <p className="font-JosefinSans text-[2.813rem] font-extralight">
          CONHEÇA AS ÁREAS ATENDIDAS
        </p>
      </section>
      <section className="flex flex-col items-center gap-6">
        <Area
          text={text}
          title={title}
          background={psmBg}
          mainImage={mainImage}
          cardBorder={border}
        />
        <Area
          text={text}
          title={title}
          background={psmBg}
          mainImage={mainImage}
          cardBorder={border}
        />
      </section>
    </main>
  );
};
export default Home;
