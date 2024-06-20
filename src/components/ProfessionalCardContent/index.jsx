import psmProfessionalsImg from "../../assets/Professionals/psm/imgPsm.svg";

const ProfessionalCardContent = () => {
  return (
    <article className="absolute right-[6.875rem] top-[5.125rem] z-30 flex flex-col-reverse items-center gap-5">
      <img
        src={psmProfessionalsImg}
        alt="secondary-img"
        className="rounded-[1.53125rem]"
      />
      <article className="shadow-contactCard flex h-[9.563rem] w-[32.75rem] items-center justify-center rounded-[2.188rem] bg-[#edf0eb]">
        <p className="h-[7.188rem] w-[30.313rem] text-center font-JosefinSans text-xl font-light leading-[1.51]">
          “Como psicóloga especializada na saúde da mulher, sinto uma conexão
          profunda com cada paciente, pois juntas exploramos os caminhos da
          mente e do corpo, buscando bem-estar e harmonia em todas as fases da
          vida.”
        </p>
      </article>
    </article>
  );
};

export default ProfessionalCardContent;
