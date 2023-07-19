import ProfileImage from "../assets/profile.png";

function Hero() {
  return (
    <div
      className="px-4 sm:flex sm:h-screen md:h-1/2 flex flex-col justify-center 
      md:grid md:grid-cols-2 md:grid-rows-2 md:mt-20 lg:flex lg:flex-row lg:items-center lg:h-560 lg:px-32 xl:px-40"
    >
      <div className="md:flex md:flex-col md:justify-end md:row-span-2 md:col-start-2 md:row-start-1 lg:order-2 lg:flex lg:justify-end lg:items-center lg:w-1/3 lg:h-full">
        <img
          src={ProfileImage}
          alt="profile.png"
          className="m-0 object-cover w-full h-full lg:w-5/6 lg:h-4/6"
        />
      </div>
      <div className="font-bold my-4 md:m-0 md:flex md:flex-col md:justify-end md:items-center md:col-start-1 md:row-start-1 lg:order-1 lg:w-1/3 lg:text-left lg:block">
        <h1 className="my-4">
          JOHN LOUIEL TAMARGO{" "}
          <span className="text-yellow-500 font-bold">.</span>
        </h1>
        <a
          href=""
          className="text-yellow-500 border-solid border-2 border-yellow-500 px-4"
        >
          CONTACT ME
        </a>
      </div>
      <div className="lg:order-3 lg:w-1/3">
        <p className="text-yellow-500 font-bold my-4">INTRODUCTION</p>
        <h2 className="my-4 font-semibold">FRONTEND WEB DEVELOPER</h2>
        <p className="sm:px-4 md:px-4 lg:px-0 mb-4 font-medium">
          I am a junior web developer, in line with my tech career. I would like
          to endorse myself, reaching my goals to the next step of becoming a
          certified professional in my career being a developer.
        </p>
        <a href="" className="text-yellow-500 font-semibold">
          LEARN MORE
        </a>
      </div>
    </div>
  );
}

export default Hero;
