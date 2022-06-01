const project = ({ project }) => {
  return (
    <>
      <div className="projectCard w-full h-full md:max-w-[22rem] md:h-[15rem] relative cursor-pointer overflow-hidden">
        <img src={project.img} alt="" className="w-full h-full" />
        <div className="overlay"></div>
        <div className="linkContainer absolute top-[150%] left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center z-[100] w-[85%] m-auto duration-500">
          <h2 className="text-white font-courgette font-bold text-2xl">
            {project.title}
          </h2>
          <div className="flex items-center gap-4 justify-center">
            {project?.gitLink && (
              <button className="mt-4">
                <a
                  className="actionButtonDesing block"
                  target={"_blank"}
                  rel="noreferrer"
                  href={project?.gitLink}
                >
                  GitHub
                </a>
              </button>
            )}
            {project?.liveLink && (
              <button className="mt-4">
                <a
                  className="actionButtonDesing block"
                  target={"_blank"}
                  rel="noreferrer"
                  href={project.liveLink}
                >
                  Live
                </a>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default project;
