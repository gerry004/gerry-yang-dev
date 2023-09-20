function Contact() {
  return (
    <div className="flex flex-col justify-center items-center bg-primary py-6">
      <h1 className="text-white p-4">Contact</h1>
      <div className="flex flex-row flex-wrap justify-around">
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gerry-yang-5b98ab190/"
          className="m-2 p-2 border-white border-2 text-white rounded-md">LinkedIn</a>
        <a target="_blank" rel="noreferrer" href="https://github.com/gerry004"
          className="m-2 p-2 border-white border-2 text-white rounded-md">Github</a>
        <a target="_blank" rel="noreferrer" href="mailto:gerry04y@gmail.com"
          className="m-2 p-2 border-white border-2 text-white rounded-md">Email</a>
        <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1Bg2wTxCRDBKf9GwrqIqedWG6u5NlgURa/view?usp=sharing"
          className="m-2 p-2 border-white border-2 text-white rounded-md">Download CV</a>
      </div>
    </div>
  )
}
export default Contact;