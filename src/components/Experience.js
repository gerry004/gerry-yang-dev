import EXPERIENCES from "../content/experiences";
import Card from "./Card";

function Experience() {
  return (
    <div className="bg-primary w-full flex flex-col justify-center items-center py-16 md:py-18">
      <h1 className="text-white py-4 md:py-12">Experience</h1>
      <div className="md:grid md:grid-cols-2 md:gap-4 md:justify-between lg:max-w-[70%] md:max-w-[80%]">
        {EXPERIENCES.map(
          ({ title, image, link, description, points, skills }) => (
            <Card
              image={image}
              link={link}
              title={title}
              description={description}
              points={points}
              skills={skills}
              inverseColors={true}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Experience;
