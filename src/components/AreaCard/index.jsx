const AreaCard = ({ title, text, mainImage, background, cardBorder }) => {
  return (
    <article className="relative flex w-[52.5rem] justify-end font-JosefinSans">
      <img
        src={mainImage}
        alt="card-main-image"
        className="absolute bottom-[3.344rem] left-[1.85rem] z-20 object-contain"
      />
      <img
        src={background}
        alt="card-background-image"
        className="absolute left-11 z-10 object-contain"
      />

      <img
        src={cardBorder}
        alt="card-border-image"
        className="z-0 w-[39.375rem]"
      />

      <div className="absolute right-[6rem] top-[4.21rem] flex w-[23.688rem] flex-col gap-[0.419rem]">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-wrap text-lg font-extralight">{text}</p>
      </div>
    </article>
  );
};
export default AreaCard;
