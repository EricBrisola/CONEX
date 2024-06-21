import yane from "../assets/Professionals/psm/imgYanePsm.svg";
import miguel from "../assets/Professionals/pi/imgMiguelPi.svg";
import lucas from "../assets/Professionals/pai/imgLucasPai.svg";
import fernanda from "../assets/Professionals/at/imgFernandaAt.svg";
import fernando from "../assets/Professionals/tcc/imgFernandoTcc.svg";

import psmProfessionalsImg from "../assets/Professionals/psm/imgPsm.svg";
import piProfessionalImg from "../assets/Professionals/pi/imgPi.svg";
import paiProfessionalImg from "../assets/Professionals/pai/imgPai.svg";
import atProfessionalImg from "../assets/Professionals/at/imgAt.svg";
import tccProfessionalImg from "../assets/Professionals/tcc/imgTcc.svg";

const professionalsData = [
  {
    id: 0,
    title: "Psicologia e Saúde da Mulher",
    text: "“Como psicóloga especializada na saúde da mulher, sinto uma conexão profunda com cada paciente, pois juntas exploramos os caminhos da mente e do corpo, buscando bem-estar e harmonia em todas as fases da vida.”",
    image: yane,
    secondaryImage: psmProfessionalsImg,
    name: "Yane Martins",
    crp: "CRP 12/74937",
    phoneNumber: "(99) 9 9988 - 8888",
    email: "yane_martinss@hotmail.com",
    infoCardStyle:
      "absolute left-20 top-[5.813rem] z-30 flex flex-col items-center gap-[1.375rem]",
    textSectionStyle:
      "absolute right-[6.875rem] top-[5.125rem] z-30 flex flex-col-reverse items-center gap-[1.375rem]",
    blueCardStyle:
      "absolute left-0 top-0 z-20 h-[30.438rem] w-[65.438rem] rounded-[2.188rem] bg-[#b6dcf7]",
    blueBorderStyle:
      "absolute bottom-0 right-0 z-10 h-[30.438rem] w-[65.438rem] rounded-[2.188rem] border-[0.4375rem] border-[#b6dcf7]",
    titleStyle: "pt-3 text-center font-JosefinSans text-[2rem] font-light",
  },
  {
    id: 1,
    title: "Psicologia Infantil",
    text: "“Como psicóloga especializada na saúde da mulher, sinto uma conexão profunda com cada paciente, pois juntas exploramos os caminhos da mente e do corpo, buscando bem-estar e harmonia em todas as fases da vida.”",
    image: miguel,
    secondaryImage: piProfessionalImg,
    name: "Miguel de Assis",
    crp: "CRP 12/62534",
    phoneNumber: "(99) 9 8888 - 9999",
    email: "miguelAssis345@gmail.com",
    infoCardStyle:
      "absolute right-[6.25rem] top-[4.438rem] z-30 flex flex-col-reverse items-center gap-[1.375rem]",
    textSectionStyle:
      "absolute left-[6.688rem] top-[10.5rem] z-30 flex flex-col items-center gap-[1.375rem]",
    blueCardStyle:
      "absolute bottom-0 right-0 z-20 flex h-[30.438rem] w-[65.438rem] items-end justify-center rounded-[2.188rem] bg-[#b6dcf7]",
    blueBorderStyle:
      "absolute left-0 top-0 z-10 h-[30.438rem] w-[65.438rem] rounded-[2.188rem] border-[0.4375rem] border-[#b6dcf7]",
    titleStyle: "pb-3 text-center font-JosefinSans text-[2rem] font-light",
  },
  {
    id: 2,
    title: "Psicologia do adulto e do Idoso",
    text: "“Na Psicologia do Adulto e do Idoso, ofereço um espaço acolhedor para cada fase da vida, promovendo bem-estar e equilíbrio emocional.”",
    image: lucas,
    secondaryImage: paiProfessionalImg,
    name: "Lucas Guimarães",
    crp: "CRP 87/23628",
    phoneNumber: "(99) 9 9123 - 4444",
    email: "luc_guimaraes@hotmail.com",
    infoCardStyle:
      "absolute left-20 top-[5.813rem] z-30 flex flex-col items-center gap-[1.375rem]",
    textSectionStyle:
      "absolute right-[6.875rem] top-[5.125rem] z-30 flex flex-col-reverse items-center gap-[1.375rem]",
    blueCardStyle:
      "absolute left-0 top-0 z-20 h-[30.438rem] w-[65.438rem] rounded-[2.188rem] bg-[#b6dcf7]",
    blueBorderStyle:
      "absolute bottom-0 right-0 z-10 h-[30.438rem] w-[65.438rem] rounded-[2.188rem] border-[0.4375rem] border-[#b6dcf7]",
    titleStyle: "pt-3 text-center font-JosefinSans text-[2rem] font-light",
  },
  {
    id: 3,
    title: "Arteterapia",
    text: "“Acredito na arte como caminho para a cura e autodescoberta. Com Arteterapia, ofereço um espaço onde a expressão criativa promove bem-estar e transformação pessoal.”",
    image: fernanda,
    secondaryImage: atProfessionalImg,
    name: "Fernanda Cordeiro",
    crp: "CRP 54/62890",
    phoneNumber: "(99) 9 9943 - 5379",
    email: "fernandacordeiro@hotmail.com",
    infoCardStyle:
      "absolute right-[6.25rem] top-[4.438rem] z-30 flex flex-col-reverse items-center gap-[1.375rem]",
    textSectionStyle:
      "absolute left-[6.688rem] top-[10.5rem] z-30 flex flex-col items-center gap-[1.375rem]",
    blueCardStyle:
      "absolute bottom-0 right-0 z-20 flex h-[30.438rem] w-[65.438rem] items-end justify-center rounded-[2.188rem] bg-[#b6dcf7]",
    blueBorderStyle:
      "absolute left-0 top-0 z-10 h-[30.438rem] w-[65.438rem] rounded-[2.188rem] border-[0.4375rem] border-[#b6dcf7]",
    titleStyle: "pb-3 text-center font-JosefinSans text-[2rem] font-light",
  },
  {
    id: 4,
    title: "Terapia cognitivo comportamental",
    text: "“Como psicólogo, vejo diariamente o poder transformador da Terapia Cognitivo-Comportamental. Se você busca uma nova perspectiva. Vamos juntos nessa jornada de autoconhecimento e cura.”",
    image: fernando,
    secondaryImage: tccProfessionalImg,
    name: "Fernando Carlos",
    crp: "CRP 67/36685",
    phoneNumber: "(99) 9 8643 - 4222",
    email: "fernandocarlos@yahoo.com",
    infoCardStyle:
      "absolute left-20 top-[5.813rem] z-30 flex flex-col items-center gap-[1.375rem]",
    textSectionStyle:
      "absolute right-[6.875rem] top-[5.125rem] z-30 flex flex-col-reverse items-center gap-[1.375rem]",
    blueCardStyle:
      "absolute left-0 top-0 z-20 h-[30.438rem] w-[65.438rem] rounded-[2.188rem] bg-[#b6dcf7]",
    blueBorderStyle:
      "absolute bottom-0 right-0 z-10 h-[30.438rem] w-[65.438rem] rounded-[2.188rem] border-[0.4375rem] border-[#b6dcf7]",
    titleStyle: "pt-3 text-center font-JosefinSans text-[2rem] font-light",
  },
];

export default professionalsData;
