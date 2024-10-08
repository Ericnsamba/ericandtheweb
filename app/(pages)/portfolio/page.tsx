import Project from "../../components/project";

export default function Home() {
  const projects = [
    {
      title1: "Ro",
      title2: "am",
      src: "jomor_design.jpeg",
    },
    {
      title1: "Solve.",
      title2: "Money",
      src: "la_grange.jpeg",
    },
    {
      title1: "Even",
      title2: "tify",
      src: "la_grange.jpeg",
    },
    {
      title1: "Peach",
      title2: "Payment",
      src: "deux_huit_huit.jpeg",
    },
    {
      title1: "Bae",
      title2: "Flag",
      src: "mambo_mambo.jpeg",
    },
  ];

  return (
    <main className={``}>
      <div className={` w-[100%] lg:p-20`}>
        <p>Featured Work</p>
        {projects.map((project) => {
          return <Project project={project} key={project.title1} />;
        })}
      </div>
    </main>
  );
}
