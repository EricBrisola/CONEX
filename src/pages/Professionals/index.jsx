import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfessionalCard from "../../components/ProfessionalCard";
import ProfessionalCardContent from "../../components/ProfessionalCardContent";

const Professionals = () => {
  return (
    <main className="max-w-screen relative flex min-h-screen flex-col bg-[#EDF0EB]">
      <Header />
      <section className="mb-6 mt-[4.563rem] flex h-28 justify-center">
        <p className="font-JosefinSans text-[2.813rem] font-extralight">
          CONHEÇA AS ÁREAS ATENDIDAS
        </p>
      </section>
      <section className="relative mb-[18.344rem] flex flex-1 flex-col items-center">
        <article className="relative flex h-[39.5rem] w-[68.875rem] items-center">
          <div className="absolute left-0 top-0 z-20 h-[30.438rem] w-[65.438rem] rounded-[2.188rem] bg-[#b6dcf7]">
            <p className="pt-3 text-center font-JosefinSans text-[2rem] font-light">
              Psicologia e Saúde da Mulher
            </p>
          </div>
          <ProfessionalCard />
          <ProfessionalCardContent />
          <div className="absolute bottom-0 right-0 z-10 h-[30.438rem] w-[65.438rem] rounded-[2.188rem] border-[0.4375rem] border-[#b6dcf7]"></div>
        </article>
      </section>
      <Footer />
    </main>
  );
};
export default Professionals;
