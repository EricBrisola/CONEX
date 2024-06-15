import Footer from "../../components/Footer";
import Header from "../../components/Header";
import line1 from "../../assets/homePage/Main/line-1.svg";
import line2 from "../../assets/homePage/Main/line-2.svg";
import line3 from "../../assets/homePage/Main/line-3.svg";
import line4 from "../../assets/homePage/Main/line-4.svg";
import line5 from "../../assets/homePage/Main/line-5.svg";

const Home = () => {
  const infoCards = [
    {
      id: 0,
      title: "Psicologia e saúde da mulher",
      text: "Aborda uma variedade de tópicos relacionados à saúde integral das mulheres: física, mental e emocional, em diferentes fases do desenvolvimento",
      mainImage: "src/assets/homePage/Main/psm/psm-img.png",
      background: "src/assets/homePage/Main/psm/psm-retangle.svg",
      textBackground: "src/assets/homePage/Main/cloud-blue.png",
      abbreviatedtitle: "PSM",
    },
    {
      id: 1,
      title: "Psicologia Infantil",
      text: "Atua com crianças, ajudando-as a ter um desenvolvimento saudável. É um ramo da ciência que trata das questões psíquicas",
      mainImage: "src/assets/homePage/Main/pi/piImg.png",
      background: "src/assets/homePage/Main/pi/piCircle.svg",
      textBackground: "",
      abbreviatedtitle: "PI",
    },

    {
      id: 2,
      title: "Psicologia Do Adulto E Do Idoso ",
      text: "Geralmente, essas terapias são desempenhadas em grupo para que o idoso também possa desenvolver a socialização",
      mainImage: "src/assets/homePage/Main/pai/father-img.png",
      background: "src/assets/homePage/Main/pai/pai-circle.svg",
      textBackground: "src/assets/homePage/Main/cloud-blue.png",
      abbreviatedtitle: "PAI",
    },
    {
      id: 3,
      title: "Arteterapia",
      text: "Recorre a elementos da atividade artística como forma de intervenção profissional. É direcionada à qualidade de vida e melhora",
      mainImage: "src/assets/homePage/Main/at/arImg 1.png",
      background: "src/assets/homePage/Main/at/atRetangle.png",
      textBackground: "",
      abbreviatedtitle: "AT",
    },
    {
      id: 4,
      title: "Terapia Cognitivo Comportamental",
      text: "Uma abordagem estruturada, estabelecida a partir da colaboração entre terapeuta e paciente. É recomendada e produz resultados.",
      mainImage: "src/assets/homePage/Main/tcc/tccImg.png",
      background: "src/assets/homePage/Main/tcc/tccImg.svg",
      textBackground: "src/assets/homePage/Main/cloud-blue.png",
      abbreviatedtitle: "TCC",
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
        <article className="relative flex h-[20.375rem] w-[52.5rem] justify-end font-JosefinSans">
          <img
            src={infoCards[0].mainImage}
            alt="card-main-image"
            className="absolute left-[0rem] top-[1.2rem] z-20 object-contain"
          />
          <img
            src={infoCards[0].background}
            alt="card-background-image"
            className="absolute left-3 top-[0.825rem] z-10 object-contain"
          />

          <img
            src={infoCards[0].textBackground}
            alt="card-border-image"
            className="z-0 h-[18.625rem] w-[41.25rem]"
          />
          <p className="absolute bottom-[0.3rem] left-24 h-[3.6rem] font-ReenieBeanie text-[4.063rem] leading-none">
            {infoCards[0].abbreviatedtitle}
          </p>
          <div className="absolute right-[6rem] top-[5.21rem] flex w-[23.688rem] flex-col gap-[0.419rem]">
            <p className="text-xl font-bold">{infoCards[0].title}</p>
            <p className="text-wrap text-lg font-light leading-[1.51]">
              {infoCards[0].text}
            </p>
          </div>
        </article>
        <img src={line1} alt="line-1" className="absolute top-[15.8rem] z-30" />
        <article className="relative flex h-[23.513rem] w-[52.5rem] justify-end font-JosefinSans">
          <img
            src={infoCards[1].mainImage}
            alt="card-main-image"
            className="absolute right-4 top-[2.10rem] z-20 object-contain"
          />
          <img
            src={infoCards[1].background}
            alt="card-background-image"
            className="absolute right-0 top-[1.7rem] z-10 object-contain"
          />
          <p className="absolute right-[7.5rem] top-[20.163rem] h-[3.6rem] font-ReenieBeanie text-[4.063rem] leading-none">
            {infoCards[1].abbreviatedtitle}
          </p>
          <div className="absolute right-[19rem] top-[8.5rem] flex w-[23.688rem] flex-col items-end gap-[0.419rem]">
            <p className="text-xl font-bold">{infoCards[1].title}</p>
            <p className="text-wrap text-right text-lg font-light leading-[1.65]">
              {infoCards[1].text}
            </p>
          </div>
        </article>
        <img
          src={line2}
          alt="line-2"
          className="absolute top-[39rem] z-0 h-[12rem] translate-x-[3.2rem] transform"
        />
        <article className="relative flex h-[25.913rem] w-[52.5rem] justify-end font-JosefinSans">
          <img
            src={infoCards[2].mainImage}
            alt="card-main-image"
            className="absolute left-[3.4rem] z-20 object-contain"
          />
          <img
            src={infoCards[2].background}
            alt="card-background-image"
            className="absolute left-5 top-16 z-10 object-contain"
          />

          <img
            src={infoCards[2].textBackground}
            alt="card-border-image"
            className="absolute top-[4.75rem] z-0 h-[18.625rem] w-[41.25rem]"
          />
          <p className="absolute bottom-0 left-32 h-[3.6rem] font-ReenieBeanie text-[4.063rem] leading-none">
            {infoCards[2].abbreviatedtitle}
          </p>
          <div className="absolute right-[6rem] top-[10.5rem] flex w-[23.688rem] flex-col gap-[0.419rem]">
            <p className="text-xl font-bold">{infoCards[2].title}</p>
            <p className="text-wrap text-lg font-light leading-[1.51]">
              {infoCards[2].text}
            </p>
          </div>
        </article>
        <img
          src={line3}
          alt="line-3"
          className="absolute top-[64.5rem] z-0 h-[12rem] -translate-x-[2rem] transform"
        />

        <article className="relative flex h-[23.513rem] w-[52.5rem] justify-end font-JosefinSans">
          <img
            src={infoCards[3].mainImage}
            alt="card-main-image"
            className="absolute right-[2.6rem] top-[4.42rem] z-20 object-contain"
          />
          <img
            src={infoCards[3].background}
            alt="card-background-image"
            className="absolute right-0 top-[1.7rem] z-10 object-contain"
          />
          <p className="absolute right-[6rem] top-[17.4rem] h-[3.6rem] font-ReenieBeanie text-[4.063rem] leading-none">
            {infoCards[3].abbreviatedtitle}
          </p>
          <div className="absolute right-[18.55rem] top-[6.7rem] flex w-[23.688rem] flex-col items-end gap-[0.419rem]">
            <p className="text-xl font-bold">{infoCards[3].title}</p>
            <p className="text-wrap text-right text-lg font-light leading-[1.65]">
              {infoCards[3].text}
            </p>
          </div>
        </article>
        <img
          src={line4}
          alt="line-4"
          className="absolute left-1/2 top-[85.2rem] z-0 h-[12rem] -translate-x-1/4 transform"
        />
        <article className="relative flex h-[23.513rem] w-[52.5rem] justify-end font-JosefinSans">
          <img
            src={infoCards[4].mainImage}
            alt="card-main-image"
            className="absolute left-[2.2rem] top-2 z-20 object-contain"
          />
          <img
            src={infoCards[4].background}
            alt="card-background-image"
            className="absolute left-5 top-0 z-10 object-contain"
          />

          <img
            src={infoCards[4].textBackground}
            alt="card-border-image"
            className="absolute top-10 z-0 h-[18.625rem] w-[41.25rem]"
          />
          <p className="absolute left-32 top-[20.163rem] h-[3.6rem] font-ReenieBeanie text-[4.063rem] leading-none">
            {infoCards[4].abbreviatedtitle}
          </p>
          <div className="absolute right-[6rem] top-[8rem] flex w-[23.688rem] flex-col gap-[0.419rem]">
            <p className="text-xl font-bold">{infoCards[4].title}</p>
            <p className="text-wrap text-lg font-light leading-[1.65]">
              {infoCards[4].text}
            </p>
          </div>
        </article>
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
