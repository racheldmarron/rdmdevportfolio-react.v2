import Project from "./project";

import sutainable from "../assets/images/sus-clothing-co.jpg";
import nixion from "../assets/images/nixon.png";
import ingredient from "../assets/images/project-1.png";
import quize from "../assets/images/code-quiz.png";
import code from "../assets/images/code.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Susatainable Clothing Co.",
      img: sutainable,
      gitLink: "https://github.com/racheldmarron/sustainable-clothing-co",
      liveLink: "https://groupprojectii-app.herokuapp.com/",
    },
    {
      title: "E-Commerce Shopify Migration, Nixon.com",
      img: nixion,
      gitLink: "",
      liveLink: "https://www.nixon.com/",
    },
    {
      title: "Ingredient To Meal Planner",
      img: ingredient,
      gitLink: "https://github.com/racheldmarron/Ingredient-to-Meal-Planner",
      liveLink: "https://famesmyname.github.io/Ingredient-to-Meal-Planner/",
    },
    {
      title: "JavaScript Code Quiz",
      img: quize,
      gitLink: "https://github.com/racheldmarron/java-code-quiz",
    },
    {
      title: "Backend - CMS",
      img: code,
      gitLink: "https://github.com/racheldmarron/employee-business-manager",
    },
    {
      title: "Backend - E-Commerce (JS, SQL)",
      img: code,
      gitLink: "https://github.com/racheldmarron/backend-for-your-.com",
    },
  ];

  return (
    <section
      className="bg-projectBg bg-no-repeat bg-center bg-cover pb-20"
      id="projects"
    >
      <div className="w-[95%] md:w-[90%] m-auto py-20">
        <h2 className="title">Projects</h2>
        <div className="flex justify-center flex-wrap gap-12">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
