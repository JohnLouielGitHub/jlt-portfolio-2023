function Contact() {
  const contactList = [
    {
      contact: "0975223467",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      ),
    },
    {
      contact: "tamargo.louiel@gmail.com",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      ),
    },
  ];
  const Contacts = () => {
    return contactList.map((item, key) => {
      return (
        <div
          key={key}
          className="flex justify-center items-center p-4 my-4 md:mx-4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-zinc-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-4"
          >
            {item.icon}
          </svg>

          {item.contact}
        </div>
      );
    });
  };
  return (
    <>
      <div className="text-center lg:px-32 xl:px-40">
        <h3 className="text-yellow-500 font-bold">CONTACT US</h3>
        <h2 className="font-bold">Ways To Contact Me</h2>
        <p>
          Ready to start a project together or have any inquiries? Feel free to
          reach out to me! Whether it&#39;s discussing a potential collaboration
          or just saying hello, I&#39;m always excited to connect with fellow
          professionals. Let&#39;s get in touch and explore how we can bring
          your ideas to life.
        </p>
        <div className="sm:flex justify-center items-center">{Contacts()}</div>
      </div>
      <div className="border-t-2 border-solid border-yellow-500 text-center p-2 md:p-4 font-bold">
        &#169; Copyright - JLT | All Rights Reserve
      </div>
    </>
  );
}

export default Contact;
