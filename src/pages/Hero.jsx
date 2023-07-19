import ProfileImage from "../assets/profile.png";

function Hero() {
  return (
    <div
      className="px-4 my-20 lg:mb-0 flex sm:h-screen md:h-1/2 flex-col justify-center items-center md:justify-start md:items-stretch
      md:grid md:grid-cols-2 md:grid-rows-2 md:mt-20 lg:flex lg:flex-row lg:items-center lg:h-560 lg:px-20 xl:px-40"
    >
      <div className="md:flex md:flex-col md:justify-end md:row-span-2 md:col-start-2 md:row-start-1 lg:order-2 lg:flex lg:justify-end lg:items-center lg:w-1/3 lg:h-full">
        <img
          src={ProfileImage}
          alt="profile.png"
          className="m-0 object-cover w-full h-full lg:h-4/6"
        />
      </div>
      <div className="text-center md:text-left sm:text-left my-4 md:m-0 md:flex md:flex-col md:justify-center md:items-start md:col-start-1 md:row-start-1 lg:order-1 lg:w-1/3 lg:text-left lg:block">
        <h1 className="my-4 text-4xl lg:text-5xl font-bold">
          JOHN LOUIEL TAMARGO
          <span className="text-yellow-500 text-4xl font-bold">.</span>
        </h1>
        <a
          href=""
          className="text-yellow-500 font-medium border-solid border-2 border-yellow-500 px-4"
        >
          CONTACT ME
        </a>
      </div>
      <div className="flex flex-col md:block lg:order-3 lg:w-1/3">
        <p className="text-center md:text-left text-yellow-500 font-extrabold my-4 lg:text-lg">
          INTRODUCTION
        </p>
        <h2 className="text-center md:text-left text-2xl lg:text-3xl font-semibold mb-4">
          FRONTEND WEB DEVELOPER
        </h2>
        <p className="sm:px-4 md:px-0 mb-4">
          Junior web developer, in line with my tech career. I endorse myself,
          reaching my goals to the next step of becoming a certified
          professional.
        </p>
        <a
          href=""
          className="text-center self-center text-yellow-500 font-medium"
        >
          LEARN MORE
        </a>
      </div>
    </div>
  );
}

export default Hero;
