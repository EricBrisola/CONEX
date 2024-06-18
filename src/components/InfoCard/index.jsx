/* eslint-disable react/prop-types */
const InfoCard = ({
  cardStyle,
  title,
  text,
  mainImage,
  background,
  textBackground,
  mainImageStyle,
  backgroundStyle,
  textBackgroundStyle,
  textSectionStyle,
  abreviatedTitle,
  abreviatedTitleStyle,
  btnStyle,
  textStyle,
}) => {
  return (
    <article className={cardStyle}>
      <img src={mainImage} alt="card-main-image" className={mainImageStyle} />
      <img
        src={background}
        alt="card-background-image"
        className={backgroundStyle}
      />

      {textBackground && (
        <img
          src={textBackground}
          alt="text-background"
          className={textBackgroundStyle}
        />
      )}
      <p className={abreviatedTitleStyle}>{abreviatedTitle}</p>
      <div className={textSectionStyle}>
        <p className="text-xl font-bold">{title}</p>
        <p className={textStyle}>{text}</p>
      </div>
      <button className={btnStyle}>...</button>
    </article>
  );
};
export default InfoCard;
