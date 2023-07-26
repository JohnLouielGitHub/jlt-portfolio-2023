function Contact() {
  const contactList = [
    {
      contact: "0975-253-4057",
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
          className="text-center flex items-center justify-center p-4 mx-auto w-full md:mx-4 sm:w-max bg-gray-100 dark:bg-zinc-800 mb-4 last-of-type:mb-0 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
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
      <div className="px-4 py-12 lg:px-20 xl:px-40" id="contact">
        <h3>CONTACT US</h3>
        <h2>Ways To Contact Me</h2>
        <p className="md:text-center mb-4">
          Ready to start a project together or have any inquiries? Feel free to
          reach out to me! Let&#39;s get in touch and explore how we can bring
          your ideas to life.
        </p>
        <div className="sm:flex sm:flex-col md:flex-row md:items-center md:justify-center">
          {Contacts()}
        </div>
      </div>
      {/* FOOTER */}
      <div id="footer">&#169; Copyright - JLT | All Rights Reserve</div>
    </>
  );
}

export default Contact;
