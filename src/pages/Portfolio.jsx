import {
  DuelistImage,
  BeMightyCloneImage,
  LemingCorporateLawImage,
  FurnitureImage,
} from "../assets";

function Portfolio() {
  const projects = [
    {
      title: "Gaming Dashboard Project",
      link: "https://gaming-dashboard-enhancement-git-main-johnlouielgithub.vercel.app/",
      preview: DuelistImage,
    },
    {
      title: "Leming Corporate Law",
      link: "https://johnlouielgithub.github.io/Leming-Corporate-Law-Web/",
      preview: LemingCorporateLawImage,
    },
    {
      title: "BeMighty Clone",
      link: "https://johnlouielgithub.github.io/Be-Mighty-clone/",
      preview: BeMightyCloneImage,
    },
    {
      title: "Furniture Landing Page",
      link: "https://johnlouielgithub.github.io/html-projects-2023/",
      preview: FurnitureImage,
    },
  ];

  const Project = () => {
    return projects.map((project, key) => {
      return (
        <div key={key}>
          <img
            src={
              project.preview ??
              "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="project preview"
            className="w-full h-50% mb-4"
          />
          <h3 className="mb-4">{project.title}</h3>
          <a
            href={project.link}
            target="_blank"
            className="text-yellow-500"
            rel="noreferrer"
          >
            Visit
          </a>
        </div>
      );
    });
  };

  return (
    <div className="text-center">
      <h2 className="text-yellow-500 font-bold">PORTFOLIO</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolore?
      </p>
      <div>{Project()}</div>
    </div>
  );
}

export default Portfolio;
