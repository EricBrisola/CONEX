/* eslint-disable react/prop-types */
import ProfessionalInfo from "../ProfessionalInfo";
import ProfessionalCardContent from "../ProfessionalCardContent";

const ProfessionalSection = ({
  blueCardStyle,
  blueBorderStyle,
  title,
  titleStyle,
  picture,
  name,
  crp,
  phone,
  email,
  infoStyle,
  image,
  text,
  contentStyle,
}) => {
  return (
    <article className="relative flex h-[39.5rem] w-[68.875rem] items-center">
      <div className={blueCardStyle}>
        <p className={titleStyle}>{title}</p>
      </div>
      <ProfessionalInfo
        picture={picture}
        name={name}
        crp={crp}
        phone={phone}
        email={email}
        infoStyle={infoStyle}
      />
      <ProfessionalCardContent
        image={image}
        contentStyle={contentStyle}
        text={text}
      />
      <div className={blueBorderStyle}></div>
    </article>
  );
};

export default ProfessionalSection;
