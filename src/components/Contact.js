function Contact() {
  return (
    <div className="flex flex-col justify-center items-center my-6">
      <h1 className="m-4">Contact</h1>
      <div className="flex flex-row flex-wrap justify-around">
        <button className="m-2 p-2 border border-black rounded-md">LinkedIn</button>
        <button className="m-2 p-2 border border-black rounded-md">GitHub</button>
        <button className="m-2 p-2 border border-black rounded-md">Email</button>
      </div>
    </div>
  )
}
export default Contact;