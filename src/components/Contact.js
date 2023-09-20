function Contact() {
  return (
    <div className="flex flex-col justify-center items-center bg-primary py-6">
      <h1 className="text-white p-4">Contact</h1>
      <div className="flex flex-row flex-wrap justify-around">
        <button className="m-2 p-2 border-white border-2 text-white rounded-md">LinkedIn</button>
        <button className="m-2 p-2 border-white border-2 text-white rounded-md">Github</button>
        <button className="m-2 p-2 border-white border-2 text-white rounded-md">Email</button>
      </div>
    </div>
  )
}
export default Contact;