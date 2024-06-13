import cursorImage from '../../assets/homePage/divConexe/cursormouse-1.png'

const Footer = () => {
  return (
    <div className='w-screen h-[470px] mt-[110px]'>
      <div className='w-full h-2/5 flex flex-col items-center justify-start'>
        <div className='bg-[#b6dcf7] w-full h-full rounded-t-full flex justify-start items-center flex-col overflow-visible'>
          <div className='flex items-center justify-center h-[210px] w-2/5 bg-[#b6dcf7] rounded-full shadow-[-50px_35px_5px_-15px_rgba(0,0,0,0.3)] relative top-[-100px]'>
            <h1 className='font-medium text-[54px]'>Conexe Conosco</h1>
          </div>
        </div>
      </div>
      
      <div className='bg-[#b6dcf7] h-3/5 w-full flex'>
        <div className='bg-[#c6ecff] w-1/3'></div>
        <div className='bg-[#d6fcff] w-1/3'></div>
        <div className='bg-[#e6ffff] w-1/3'></div>
      </div>
    </div>
  );
};
export default Footer;
