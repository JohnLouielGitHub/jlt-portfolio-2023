import ProfileImage from "../assets/profile.png";

function Hero() {
  return (
    <div className="px-4 text-center sm:flex h-screen flex flex-col justify-center">
      <div className="">
        <img
          src={ProfileImage}
          alt="profile.png"
          className="m-0 object-cover w-full"
        />
      </div>
      <div className="font-bold my-4">
        <h1>JOHN LOUIEL TAMARGO</h1>
      </div>
      <div>
        <p className="text-yellow-500 font-bold my-4">INTRODUCTION</p>
        <h2 className="my-4 font-semibold">FRONTEND WEB DEVELOPER</h2>
        <p className="sm:px-4 md:px-4 lg:px-6 mb-4 font-medium">
          I am a junior web developer, in line with my tech career. I would like
          to endorse myself, reaching my goals to the next step of becoming a
          certified professional in my career being a developer.
        </p>
        <a
          href=""
          className="text-yellow-500 font-semibold px-4 border-solid border-2 border-yellow-500"
        >
          CONTACT ME
        </a>
      </div>
    </div>
  );
}

export default Hero;
