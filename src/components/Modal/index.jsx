const Modal = ({ children, closeModal }) => {
  return (
    <section className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-40">
      <article className="relative h-[27.813rem] w-[63rem] rounded-[2.875rem] bg-[#b6dcf7]">
        <div className="relative">{children}</div>
        <button
          type="button"
          className="absolute right-[2.375rem] top-[2.125rem] font-JosefinSans text-[3.125rem] leading-none"
          onClick={closeModal}
        >
          X
        </button>
      </article>
    </section>
  );
};
export default Modal;
