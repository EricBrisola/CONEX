import Footer from "../../components/Footer";
import Header from "../../components/Header";
import line1 from "../../assets/homePage/Main/line-1.svg";
import line2 from "../../assets/homePage/Main/line-2.svg";
import line3 from "../../assets/homePage/Main/line-3.svg";
import line4 from "../../assets/homePage/Main/line-4.svg";
import line5 from "../../assets/homePage/Main/line-5.svg";
import InfoCard from "../../components/InfoCard";

const Home = () => {
  const infoCards = [
    {
      id: 0,
      cardStyle:
        "relative flex h-[20.375rem] w-[52.5rem] justify-end font-JosefinSans",
      title: "Psicologia e saúde da mulher",
      text: "Aborda uma variedade de tópicos relacionados à saúde integral das mulheres: física, mental e emocional, em diferentes fases do desenvolvimento",
      mainImage: "src/assets/homePage/Main/psm/psm-img.png",
      background: "src/assets/homePage/Main/psm/psm-retangle.svg",
      textBackground: "src/assets/homePage/Main/cloud-blue.png",
      abbreviatedtitle: "PSM",
      mainImageStyle: "absolute left-[0rem] top-[1.2rem] z-20 object-contain",
      backgroundStyle: "absolute left-3 top-[0.825rem] z-10 object-contain",
      textBackgroundStyle: "z-0 h-[18.625rem] w-[41.25rem]",
      textSectionStyle:
        "absolute right-[6rem] top-[5.21rem] flex w-[23.688rem] flex-col gap-[0.419rem]",
      abreviatedTitleStyle:
        "absolute bottom-[0.3rem] left-24 h-[3.6rem] font-ReenieBeanie text-[4.063rem] leading-none",
    },
    {
      id: 1,
      cardStyle:
        "relative flex h-[23.513rem] w-[52.5rem] justify-end font-JosefinSans",
      title: "Psicologia Infantil",
      text: "Atua com crianças, ajudando-as a ter um desenvolvimento saudável. É um ramo da ciência que trata das questões psíquicas",
      mainImage: "src/assets/homePage/Main/pi/piImg.png",
      background: "src/assets/homePage/Main/pi/piCircle.svg",
      textBackground: "",
      abbreviatedtitle: "PI",
      mainImageStyle: "absolute right-4 top-[2.10rem] z-20 object-contain",
      backgroundStyle: "absolute right-0 top-[1.7rem] z-10 object-contain",
      textBackgroundStyle: "",
      textSectionStyle:
        "absolute right-[19rem] top-[8.5rem] flex w-[23.688rem] flex-col items-end gap-[0.419rem]",
      abreviatedTitleStyle:
        "absolute right-[7.5rem] top-[20.163rem] h-[3.6rem] font-ReenieBeanie text-[4.063rem] leading-none",
    },
    {
      id: 2,
      cardStyle:
        "relative flex h-[25.913rem] w-[52.5rem] justify-end font-JosefinSans",
      title: "Psicologia Do Adulto E Do Idoso ",
      text: "Geralmente, essas terapias são desempenhadas em grupo para que o idoso também possa desenvolver a socialização",
      mainImage: "src/assets/homePage/Main/pai/father-img.png",
      background: "src/assets/homePage/Main/pai/pai-circle.svg",
      textBackground: "src/assets/homePage/Main/cloud-blue.png",
      abbreviatedtitle: "PAI",
      mainImageStyle: "absolute left-[3.4rem] z-20 object-contain",
      backgroundStyle: "absolute left-5 top-16 z-10 object-contain",
      textBackgroundStyle:
        "absolute top-[4.75rem] z-0 h-[18.625rem] w-[41.25rem]",
      textSectionStyle:
        "absolute right-[6rem] top-[10.5rem] flex w-[23.688rem] flex-col gap-[0.419rem]",
      abreviatedTitleStyle:
        "absolute bottom-0 left-32 h-[3.6rem] font-ReenieBeanie text-[4.063rem] leading-none",
    },
    {
      id: 3,
      cardStyle:
        "relative flex h-[23.513rem] w-[52.5rem] justify-end font-JosefinSans",
      title: "Arteterapia",
      text: "Recorre a elementos da atividade artística como forma de intervenção profissional. É direcionada à qualidade de vida e melhora",
      mainImage: "src/assets/homePage/Main/at/arImg 1.png",
      background: "src/assets/homePage/Main/at/atRetangle.png",
      textBackground: "",
      abbreviatedtitle: "AT",
      mainImageStyle:
        "absolute right-[2.6rem] top-[4.42rem] z-20 object-contain",
      backgroundStyle: "absolute right-0 top-[1.7rem] z-10 object-contain",
      textBackgroundStyle: "",
      textSectionStyle:
        "absolute right-[18.55rem] top-[6.7rem] flex w-[23.688rem] flex-col items-end gap-[0.419rem]",
      abreviatedTitleStyle:
        "absolute right-[6rem] top-[17.4rem] h-[3.6rem] font-ReenieBeanie text-[4.063rem] leading-none",
    },
    {
      id: 4,
      cardStyle:
        "relative flex h-[23.513rem] w-[52.5rem] justify-end font-JosefinSans",
      title: "Terapia Cognitivo Comportamental",
      text: "Uma abordagem estruturada, estabelecida a partir da colaboração entre terapeuta e paciente. É recomendada e produz resultados.",
      mainImage: "src/assets/homePage/Main/tcc/tccImg.png",
      background: "src/assets/homePage/Main/tcc/tccImg.svg",
      textBackground: "src/assets/homePage/Main/cloud-blue.png",
      abbreviatedtitle: "TCC",
      mainImageStyle: "absolute left-[2.2rem] top-2 z-20 object-contain",
      backgroundStyle: "absolute left-5 top-0 z-10 object-contain",
      textBackgroundStyle: "absolute top-10 z-0 h-[18.625rem] w-[41.25rem]",
      textSectionStyle:
        "absolute right-[6rem] top-[8rem] flex w-[23.688rem] flex-col gap-[0.419rem]",
      abreviatedTitleStyle:
        "absolute left-32 top-[20.163rem] h-[3.6rem] font-ReenieBeanie text-[4.063rem] leading-none",
    },
  ];
  return (
    <main className="max-w-screen relative flex min-h-screen flex-col bg-[#EDF0EB]">
      <Header />
      <section className="mb-6 mt-[4.563rem] flex h-28 justify-center">
        <p className="font-JosefinSans text-[2.813rem] font-extralight">
          CONHEÇA AS ÁREAS ATENDIDAS
        </p>
      </section>
      <section className="relative mb-[18.344rem] flex flex-1 flex-col items-center">
        {infoCards.map((infoCard) => {
          return (
            <InfoCard
              key={infoCard.id}
              cardStyle={infoCard.cardStyle}
              title={infoCard.title}
              text={infoCard.text}
              mainImage={infoCard.mainImage}
              background={infoCard.background}
              textBackground={infoCard?.textBackground}
              textBackgroundStyle={infoCard.textBackgroundStyle}
              textSectionStyle={infoCard.textSectionStyle}
              abreviatedTitle={infoCard.abbreviatedtitle}
              abreviatedTitleStyle={infoCard.abreviatedTitleStyle}
              backgroundStyle={infoCard.backgroundStyle}
              mainImageStyle={infoCard.mainImageStyle}
            />
          );
        })}
        <img src={line1} alt="line-1" className="absolute top-[15.8rem] z-30" />
        <img
          src={line2}
          alt="line-2"
          className="absolute top-[39rem] z-0 h-[12rem] translate-x-[3.2rem] transform"
        />
        <img
          src={line3}
          alt="line-3"
          className="absolute top-[64.5rem] z-0 h-[12rem] -translate-x-[2rem] transform"
        />
        <img
          src={line4}
          alt="line-4"
          className="absolute left-1/2 top-[85.2rem] z-0 h-[12rem] -translate-x-1/4 transform"
        />
      </section>
      <img
        src={line5}
        alt="line-5"
        className="absolute bottom-[13rem] left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 transform"
      />
      <Footer />
    </main>
  );
};
export default Home;
