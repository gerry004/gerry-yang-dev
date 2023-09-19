import headshot from '../assets/fw-headshot-1.JPG';

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center text-center my-4 mx-2 md:mt-16">
      <img src={headshot} alt="Gerry Yang" className="rounded-full object-cover h-72 w-72 m-6" />
      <h1>Gerry Yang</h1>
      <p>MSISS Student at Trinity College Dublin. Naughton Scholar. Developer that loves to build cool stuff.</p>
    </div>
  )
}
export default Hero;