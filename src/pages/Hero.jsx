import ProfileImage from "../assets/profile.png";
import ProfileImage1 from "../assets/Profile-closeup.png";

function Hero() {
  return (
    <div
      id="hero"
      className="px-4 my-20 sm:my-0 lg:mb-0 flex sm:h-screen md:h-1/2 flex-col justify-center items-center md:justify-start md:items-stretch
      md:grid md:grid-cols-2 md:grid-rows-2 md:mt-20 lg:flex lg:flex-row lg:items-center lg:h-560 lg:px-20 xl:px-40"
    >
      <div className="relative h-[260px] md:h-full md:flex md:flex-col md:justify-end md:row-span-2 md:col-start-2 md:row-start-1 lg:order-2 lg:flex lg:justify-end lg:items-center lg:w-1/3 lg:h-full">
        <img
          src={ProfileImage}
          alt="profile.png"
          className="z-10 m-0 object-cover w-full h-full hidden md:block"
        />
        <img
          src={ProfileImage1}
          alt="profile.png"
          className="z-10 m-0 object-cover w-full h-full block md:hidden"
        />
        <div className="absolute z-[-100] top-10 left-1/2 transform -translate-x-1/2 rounded-full bg-yellow-300 dark:bg-yellow-500 w-[128px] h-[128px] md:w-[256px] md:h-[256px] lg:w-[360px] lg:h-[360px]"></div>
      </div>
      <div className="text-center md:text-left my-4 flex flex-col justify-center items-center md:m-0 md:flex md:items-start md:col-start-1 md:row-start-1 lg:order-1 lg:w-1/3 lg:text-left lg:block">
        <h1 className="my-4 text-4xl lg:text-5xl font-bold">
          JOHN LOUIEL TAMARGO
          <span className="text-yellow-300 dark:text-yellow-500 text-4xl font-bold">
            .
          </span>
        </h1>

        <a href="#contact" className="">
          <div className="text-yellow-300 dark:text-yellow-500 font-medium border-solid border-2 border-yellow-300 dark:border-yellow-500 w-max p-2">
            CONTACT ME
          </div>
        </a>
      </div>
      <div className="flex flex-col md:block lg:order-3 lg:w-1/3">
        <h3 className="text-center md:text-left font-extrabold my-4 lg:text-lg">
          INTRODUCTION
        </h3>
        <h2 className="text-center md:text-left text-2xl lg:text-3xl font-semibold mb-4">
          FRONTEND WEB DEVELOPER
        </h2>
        <p className="sm:px-4 md:px-0 mb-4">
          Junior web developer, in line with my tech career. I endorse myself,
          reaching my goals to the next step of becoming a certified
          professional.
        </p>
        <a href="">LEARN MORE</a>
      </div>
    </div>
  );
}

export default Hero;
