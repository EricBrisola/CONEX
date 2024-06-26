import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const ContactUs = () => {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (ev) => {
    setContact((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    alert(`Obrigado por nos contatar ${contact.name}!`);
    setContact({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const labelClass = "font-JosefinSans font-extralight text-[1.563rem]";
  const inputClass =
    "px-5 font-JosefinSans font-light text-[1.563rem] text-black h-[3.125rem] rounded-md shadow-md outline-none ";
  return (
    <div className="max-w-screen flex min-h-screen flex-col bg-[#EDF0EB]">
      <Header />
      <section className="mb-6 mt-[4.563rem] flex justify-center">
        <p className="font-JosefinSans text-[2.813rem] font-extralight">
          CONEXE CONOSCO
        </p>
      </section>
      <main className="flex flex-col items-center justify-start gap-5">
        <div className="flex flex-col items-center justify-between rounded-[3.125rem] bg-[#b6dcf7] p-10">
          <h2 className="font-JosefinSans text-[2.188rem] font-medium text-white">
            Formulário para conexão:
          </h2>
          <h3 className="font-JosefinSans text-[1.563rem] font-extralight">
            ``Lembre-se é de extrema relevância que todas as caixinhas sejam
            preenchidas 😊``
          </h3>
        </div>

        <form
          className="flex flex-col gap-11 rounded-[1.875rem] bg-[#b6dcf7] p-10"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label className={labelClass}>Nome: </label>
            <input
              type="text"
              name="name"
              className={inputClass + "w-[37.5rem]"}
              value={contact.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex">
            <div className="mr-10 flex flex-col">
              <label className={labelClass}>Telefone: </label>
              <input
                type="number"
                name="phone"
                className={inputClass + "w-[18.125rem]"}
                value={contact.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>Email: </label>
              <input
                type="email"
                name="email"
                className={inputClass + "w-[31.625rem]"}
                value={contact.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="h-64">
            <label className={labelClass}>
              Caixa aberta para qualquer necessidade de expressão:
            </label>
            <textarea
              className="h-[90%] w-[100%] resize-none rounded-md p-5 font-JosefinSans text-[1.563rem] font-light text-black shadow-md outline-none"
              value={contact.message}
              name="message"
              onChange={handleChange}
              required
            />
          </div>

          <button className="rounded-md bg-white p-3 px-7 font-JosefinSans text-[1.563rem] font-extralight shadow-contactCard duration-200 hover:scale-105">
            CONECTAR
          </button>
        </form>
      </main>
      <Footer noButton={true} />
    </div>
  );
};
export default ContactUs;
