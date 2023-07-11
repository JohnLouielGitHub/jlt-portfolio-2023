import ProfileImage from "../assets/profile.png";

function Hero() {
  return (
    <div className="py-16 px-4 text-center sm:flex">
      <div className="h-4/5">
        <img
          src={ProfileImage}
          alt="profile.png"
          className="m-0 h-full object-cover w-full"
        />
      </div>
      <div className="font-bold">
        <h1>JOHN LOUIEL TAMARGO</h1>
      </div>
      <div>
        <p className="text-yellow-500 font-bold">INTRODUCTION</p>
        <h2>FRONTEND WEB DEVELOPER</h2>
        <p className="sm:px-4 md:px-4 lg:px-6">
          I am a junior web developer, in line with my tech career. I would like
          to endorse myself as a developer. Reaching my goals to the next step
          of becoming a certified professional in my career being a developer.
        </p>
        <a href="" className="text-yellow-500 font-semibold">
          LEARN MORE
        </a>
      </div>
    </div>
  );
}

export default Hero;
