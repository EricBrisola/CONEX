import Header from "../../components/Header";
import Footer from "../../components/Footer";
import data from "../../data/professionalsData";
import ProfessionalSection from "../../components/ProfessionalSection";
import { useState, useEffect } from "react";

const Professionals = () => {
  const [professionalsInfos, setProfessionalsInfos] = useState(null);

  useEffect(() => {
    setProfessionalsInfos(data);
  }, []);

  return (
    <main className="max-w-screen relative flex min-h-screen flex-col bg-[#EDF0EB]">
      <Header />
      <section className="mb-6 mt-[4.563rem] flex h-28 justify-center">
        <p className="font-JosefinSans text-[2.813rem] font-extralight">
          CONHEÇA AS ÁREAS ATENDIDAS
        </p>
      </section>
      <section className="relative mb-[10.344rem] flex flex-1 flex-col items-center gap-40">
        {professionalsInfos &&
          professionalsInfos.map((professional) => {
            return (
              <ProfessionalSection
                key={professional.id}
                blueCardStyle={professional.blueCardStyle}
                blueBorderStyle={professional.blueBorderStyle}
                title={professional.title}
                titleStyle={professional.titleStyle}
                picture={professional.image}
                name={professional.name}
                crp={professional.crp}
                phone={professional.phoneNumber}
                email={professional.email}
                infoStyle={professional.infoCardStyle}
                image={professional.secondaryImage}
                text={professional.text}
                contentStyle={professional.textSectionStyle}
              />
            );
          })}
      </section>
      <Footer />
    </main>
  );
};
export default Professionals;
