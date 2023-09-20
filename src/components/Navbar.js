import { useRef } from "react";

function Navbar(props) {
  const { projectsRef, experienceRef, contactRef } = props;
  const navbar = useRef();

  const goTo = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - navbar.current.offsetHeight,
      behavior: "smooth"
    });
  }

  return (
    <nav ref={navbar} id="navbar" className="hidden md:flex flex-row justify-center h-16 px-6 py-2 fixed top-0 right-0 left-0 bg-primary z-50">
      <button onClick={() => goTo(navbar)} className="hidden md:block m-2 text-2xl font-semibold text-white">Gerry Yang</button>
      <div className="flex flex-row w-full justify-evenly items-center md:w-1/2 ml-auto text-white">
        <button onClick={() => goTo(projectsRef)}>Projects</button>
        <button onClick={() => goTo(experienceRef)}>Experience</button>
        <a href="https://drive.google.com/file/d/1Bg2wTxCRDBKf9GwrqIqedWG6u5NlgURa/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
        <button onClick={() => goTo(contactRef)}>Contact</button>
      </div>
    </nav>
  )
}
export default Navbar;