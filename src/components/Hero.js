import headshot from '../assets/fw-headshot-1.JPG';

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center text-center py-8 px-2 min-h-[100vh] lg:flex-row md:mt-16 md:max-w-[70%] lg:max-w-[50%] md:ml-auto md:mr-auto md:min-h-[94vh]">
      <img src={headshot} alt="Gerry Yang"
        className="rounded-full border border-lightgray shadow-lightgray shadow-lg object-cover h-72 w-72 m-6 lg:h-80 lg:w-80 xl:h-96 xl:w-96 transform
        transition ease-in-out hover:shadow-2xl hover:-translate-y-4" />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-primary">Gerry Yang</h1>
        <p className="p-4">I'm an MSISS student at Trinity College Dublin, Former Co-Founder of Kreoh, Naughton Scholar, Patch 2021 Alumni, but really - I'm a self taught programmer that loves figuring out new ideas and building cool stuff.</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-primary py-1 w-10 h-10 animate-bounce">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </div>
    </div>
  )
}
export default Hero;