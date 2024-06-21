const ProfessionalCardContent = ({ image, text, contentStyle }) => {
  return (
    <article className={contentStyle}>
      <img src={image} alt="secondary-img" className="rounded-[1.53125rem]" />
      <article className="shadow-contactCard flex h-[9.563rem] w-[32.75rem] items-center justify-center rounded-[2.188rem] bg-[#edf0eb]">
        <p className="w-[30.313rem] text-center font-JosefinSans text-xl font-light leading-[1.51]">
          {text}
        </p>
      </article>
    </article>
  );
};

export default ProfessionalCardContent;
