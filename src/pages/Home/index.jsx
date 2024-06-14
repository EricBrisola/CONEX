import Footer from "../../components/Footer";
import Header from "../../components/Header";

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
      text: "Atua com crianças, ajudando-as a ter um desenvolvimento saudável. É um ramo da ciência que trata das questões psíquicas de crianças. Assim, essa especialidade investiga e analisa o comportamento dessa faixa etária.",
      mainImage: "../../assets/homePage/Main/pi/piImg.png",
      background: "../../assets/homePage/Main/pi/pi-bg.png",
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
      text: "Recorre a elementos da atividade artística como forma de intervenção profissional. É direcionada à qualidade de vida e melhora da saúde. Abrange as mais diversas linguagens: pintura, dança, escultura, a história oral, música, modelagem, poesia, o audiovisual, entre outros. Uma forma de permitir o bem-estar e deixar fluir sentimentos por meio da expressão das obras.",
      mainImage: "../../assets/homePage/Main/at/arImg 1.png",
      background: "../../assets/homePage/Main/at/atRetangle.png",
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
    <main className="max-w-screen flex min-h-screen flex-col bg-[#EDF0EB]">
      <Header />
      <section className="mb-6 mt-[4.563rem] flex h-28 justify-center">
        <p className="font-JosefinSans text-[2.813rem] font-extralight">
          CONHEÇA AS ÁREAS ATENDIDAS
        </p>
      </section>
      <section className="flex flex-col items-center gap-36">
        <article className="relative flex w-[52.5rem] justify-end font-JosefinSans">
          <img
            src={infoCards[0].mainImage}
            alt="card-main-image"
            className="absolute bottom-[3.344rem] left-[1.85rem] z-20 object-contain"
          />
          <img
            src={infoCards[0].background}
            alt="card-background-image"
            className="absolute left-11 z-10 object-contain"
          />

          <img
            src={infoCards[0].textBackground}
            alt="card-border-image"
            className="z-0 w-[39.375rem]"
          />

          <div className="absolute right-[6rem] top-[4.21rem] flex w-[23.688rem] flex-col gap-[0.419rem]">
            <p className="text-xl font-bold">{infoCards[0].title}</p>
            <p className="text-wrap text-lg font-light leading-[1.51]">
              {infoCards[0].text}
            </p>
          </div>
        </article>
        <article className="relative flex w-[52.5rem] justify-end font-JosefinSans">
          <img
            src={infoCards[2].mainImage}
            alt="card-main-image"
            className="absolute bottom-2 left-[3.9rem] z-20 object-contain"
          />
          <img
            src={infoCards[2].background}
            alt="card-background-image"
            className="absolute bottom-2 left-5 z-10 object-contain"
          />

          <img
            src={infoCards[2].textBackground}
            alt="card-border-image"
            className="z-0 w-[39.375rem]"
          />

          <div className="absolute right-[6rem] top-[5.21rem] flex w-[23.688rem] flex-col gap-[0.419rem]">
            <p className="text-xl font-bold">{infoCards[2].title}</p>
            <p className="text-wrap text-lg font-light leading-[1.51]">
              {infoCards[2].text}
            </p>
          </div>
        </article>
        <article className="relative flex w-[52.5rem] justify-end font-JosefinSans">
          <img
            src={infoCards[4].mainImage}
            alt="card-main-image"
            className="absolute bottom-10 left-[2.5rem] z-20 object-contain"
          />
          <img
            src={infoCards[4].background}
            alt="card-background-image"
            className="absolute bottom-2 left-5 z-10 object-contain"
          />

          <img
            src={infoCards[4].textBackground}
            alt="card-border-image"
            className="z-0 w-[39.375rem]"
          />

          <div className="absolute right-[6rem] top-[5.21rem] flex w-[23.688rem] flex-col gap-[0.419rem]">
            <p className="text-xl font-bold">{infoCards[4].title}</p>
            <p className="text-wrap text-lg font-light leading-[1.65]">
              {infoCards[4].text}
            </p>
          </div>
        </article>
      </section>
      <Footer />
    </main>
  );
};
export default Home;
