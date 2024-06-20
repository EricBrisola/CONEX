import yane from "../../assets/Professionals/psm/imgYanePsm.svg";
const ProfessionalCard = () => {
  return (
    <article className="absolute left-20 top-[5.813rem] z-30 flex flex-col items-center gap-[2.156rem]">
      <img src={yane} alt="professional-image" className="size-[16.281rem]" />
      <article className="shadow-contactCard flex h-[11.444rem] w-[22.188rem] flex-col items-center justify-center rounded-[2.188rem] bg-[#edf0eb]">
        <article className="font-JosefinSans text-lg font-light">
          <p>Nome</p>
        </article>
        <article className="font-JosefinSans text-lg font-light">
          <p>CRP</p>
        </article>
        <article className="font-JosefinSans text-lg font-light">
          <p>Telefone</p>
        </article>
        <article className="font-JosefinSans text-lg font-light">
          <p>Email</p>
        </article>
      </article>
    </article>
  );
};

export default ProfessionalCard;
