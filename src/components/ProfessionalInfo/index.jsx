import nameIcon from "../../assets/Professionals/iconProfessionalsInfo/iconName.svg";
import crpIcon from "../../assets/Professionals/iconProfessionalsInfo/iconCrp.svg";
import emailIcon from "../../assets/Professionals/iconProfessionalsInfo/iconEmail.svg";
import phoneIcon from "../../assets/Professionals/iconProfessionalsInfo/iconPhone.svg";

const ProfessionalInfo = ({ picture, name, crp, phone, email, infoStyle }) => {
  return (
    <article className={infoStyle}>
      <img
        src={picture}
        alt="professional-image"
        className="size-[16.281rem]"
      />
      <article className="shadow-contactCard flex h-[11.444rem] w-[22.188rem] flex-col items-center justify-center gap-3 rounded-[2.188rem] bg-[#edf0eb]">
        <article className="flex w-[17.7rem] items-start gap-3 text-center font-JosefinSans text-xl font-light">
          <img src={nameIcon} alt="name-icon" className="size-[1.775rem]" />
          <p>{name}</p>
        </article>
        <article className="flex w-[17.7rem] items-start gap-3 font-JosefinSans text-xl font-light">
          <img src={crpIcon} alt="crp-icon" className="size-[1.775rem]" />
          <p>{crp}</p>
        </article>
        <article className="flex w-[17.7rem] items-start gap-3 font-JosefinSans text-xl font-light">
          <img src={phoneIcon} alt="phone-icon" className="size-[1.775rem]" />
          <p>{phone}</p>
        </article>
        <article className="flex w-[17.7rem] items-start gap-3 font-JosefinSans text-xl font-light">
          <img src={emailIcon} alt="email-icon" className="size-[1.775rem]" />
          <p>{email}</p>
        </article>
      </article>
    </article>
  );
};

export default ProfessionalInfo;
