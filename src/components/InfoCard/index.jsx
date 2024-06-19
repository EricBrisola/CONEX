/* eslint-disable react/prop-types */
const InfoCard = ({ infoCard, onClick }) => {
  return (
    <article className={infoCard.cardStyle}>
      <img
        src={infoCard.mainImage}
        alt="card-main-image"
        className={infoCard.mainImageStyle}
      />
      <img
        src={infoCard.background}
        alt="card-background-image"
        className={infoCard.backgroundStyle}
      />

      {infoCard.textBackground && (
        <img
          src={infoCard.textBackground}
          alt="text-background"
          className={infoCard.textBackgroundStyle}
        />
      )}
      <p className={infoCard.abbreviatedTitleStyle}>
        {infoCard.abbreviatedTitle}
      </p>
      <div className={infoCard.textSectionStyle}>
        <p className="text-xl font-bold">{infoCard.title}</p>
        <p className={infoCard.textStyle}>{infoCard.text}</p>
      </div>
      <button className={infoCard.btnStyle} onClick={onClick}>
        ...
      </button>
    </article>
  );
};
export default InfoCard;
