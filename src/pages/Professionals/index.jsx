import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
        <article className="relative h-[35.175rem] w-[48.2125rem] bg-slate-400">
          <div className="absolute left-0 top-0 z-20 h-[21.3066rem] w-[45.8066rem] rounded-[1.5316rem] bg-[#b6dcf7]"></div>
          <div className="absolute bottom-0 right-0 z-10 h-[21.3066rem] w-[45.8066rem] rounded-[1.5316rem] border-[0.4375rem] border-[#b6dcf7]"></div>
        </article>
      </section>
      <Footer />
    </main>
  );
};
export default Professionals;
