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
    <nav ref={navbar} id="navbar" className="flex flex-row justify-center h-16 px-6 py-2 fixed top-0 right-0 left-0 bg-white z-50">
      <button onClick={() => goTo(navbar)} className="hidden md:block ml-2 text-xl font-bold">Gerry Yang</button>
      <div className="flex flex-row w-full justify-evenly md:w-1/3 md:ml-auto">
        <button onClick={() => goTo(projectsRef)}>Projects</button>
        <button onClick={() => goTo(experienceRef)}>Experience</button>
        <button onClick={() => goTo(contactRef)}>Contact</button>
      </div>
    </nav>
  )
}
export default Navbar;