import Footer from "../../components/Footer";
import Header from "../../components/Header";
import line1 from "../../assets/homePage/Main/line-1.svg";
import line2 from "../../assets/homePage/Main/line-2.svg";
import line3 from "../../assets/homePage/Main/line-3.svg";
import line4 from "../../assets/homePage/Main/line-4.svg";
import line5 from "../../assets/homePage/Main/line-5.svg";
import InfoCard from "../../components/InfoCard";
import data from "../../data/data";
import Modal from "../../components/Modal";
import { useEffect, useState } from "react";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCardInfo, setModalCardInfo] = useState(null);
  const [infoCards, setInfoCards] = useState(null);

  useEffect(() => {
    setInfoCards(data);
  }, []);

  const getCurrentCardInfo = (currentCard) => {
    setModalCardInfo({
      title: currentCard.title,
      abbreviatedtitle: currentCard.abbreviatedtitle,
      fullText: currentCard.fullText,
      mainImage: currentCard.mainImage,
      mainContainer: currentCard.modalStyles.mainContainer,
      cardContainer: currentCard.modalStyles.cardContainer,
      imageStyle: currentCard.modalStyles.imageStyle,
      textContainer: currentCard.modalStyles.textContainer,
      titleText: currentCard.modalStyles.titleText,
      mainText: currentCard.modalStyles.mainText,
      absoluteText: currentCard.modalStyles.absoluteText,
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="max-w-screen relative flex min-h-screen flex-col bg-[#EDF0EB]">
      <Header />
      <section className="mb-6 mt-[4.563rem] flex h-28 justify-center">
        <p className="font-JosefinSans text-[2.813rem] font-extralight">
          CONHEÇA AS ÁREAS ATENDIDAS
        </p>
      </section>
      <section className="relative mb-[18.344rem] flex flex-1 flex-col items-center">
        {infoCards &&
          infoCards.map((infoCard) => {
            return (
              <InfoCard
                key={infoCard.id}
                infoCard={infoCard}
                onClick={() => {
                  openModal(), getCurrentCardInfo(infoCard);
                }}
              />
            );
          })}
        <img src={line1} alt="line-1" className="absolute top-[15.8rem] z-30" />
        <img
          src={line2}
          alt="line-2"
          className="absolute top-[39rem] z-0 h-[12rem] translate-x-[3.2rem] transform"
        />
        <img
          src={line3}
          alt="line-3"
          className="absolute top-[64.5rem] z-0 h-[12rem] -translate-x-[2rem] transform"
        />
        <img
          src={line4}
          alt="line-4"
          className="absolute left-1/2 top-[85.2rem] z-0 h-[12rem] -translate-x-1/4 transform"
        />
      </section>
      <img
        src={line5}
        alt="line-5"
        className="absolute bottom-[13rem] left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 transform"
      />
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <div className={modalCardInfo.mainContainer}>
            <div className={modalCardInfo.cardContainer}>
              <img
                src={modalCardInfo.mainImage}
                alt="main-image"
                className={modalCardInfo.imageStyle}
              />
            </div>
            <div className={modalCardInfo.textContainer}>
              <p className={modalCardInfo.titleText}>{modalCardInfo.title}</p>
              <p className={modalCardInfo.mainText}>{modalCardInfo.fullText}</p>
            </div>
          </div>
          <p className={modalCardInfo.absoluteText}>
            {modalCardInfo.abbreviatedtitle}
          </p>
        </Modal>
      )}
      <Footer />
    </main>
  );
};
export default Home;
