const Contact = () => {
  return (
    <div>
      <h1 className="p-4 m-4 text-3xl font-bold">Contact Us</h1>
      <form className="m-4 ">
        <input
          type="text"
          placeholder="Name"
          className="p-2 m-2 border border-black"
        />
        <input
          type="text"
          placeholder="Message"
          className="p-2 m-2 border border-black"
        />
        <button className="p-2 m-2 bg-gray-300 border border-black rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
