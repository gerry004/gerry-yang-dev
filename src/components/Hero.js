import headshot from '../assets/fw-headshot-1.JPG';

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center text-center py-8 px-2 md:flex-row md:mt-16 md:max-w-[50%] md:ml-auto md:mr-auto md:min-h-[80vh]">
      <img src={headshot} alt="Gerry Yang" className="rounded-full border border-gray shadow-gray shadow-md object-cover h-72 w-72 m-6" />
      <div>
        <h1 className="text-primary">Gerry Yang</h1>
        <p className="p-4">I'm an MSISS student at Trinity College Dublin, Former Co-Founder of Kreoh, Naughton Scholar, Patch 2021 Alumni, but really - I'm a self taught programmer that loves figuring out new ideas and building cool stuff.</p>
      </div>
    </div>
  )
}
export default Hero;