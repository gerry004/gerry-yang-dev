import { useState } from "react";

const Card = ({
  image,
  title,
  dates,
  description,
  points = [],
  skills = [],
  link,
  inverseColors = false,
}) => {
  const [showMore, setShowMore] = useState(false);
  const backgroundColor = inverseColors ? "bg-white" : "bg-primary";
  const titleTextColor = inverseColors ? "text-primary" : "text-white";
  const textColor = inverseColors ? "text-gray" : "text-white";

  return (
    <div
      className={`${backgroundColor} p-6 my-6 rounded-md shadow-lightgray shadow-md hover:shadow-lightgray hover:shadow-lg hover:-translate-y-2 md:my-2`}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="border-2 border-black w-full rounded-md shadow-lightgray shadow-md"
        />
      )}
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h2 className={`${titleTextColor} hover:underline mt-4`}>{title}</h2>
      </a>
      <p className={`${titleTextColor} mb-4`}>{dates}</p>

      <p className={`${textColor} my-2`}>{description}</p>
      {showMore && (
        <ul>
          {points.map((point) => (
            <li className={`${textColor} list-disc list-inside`}>{point}</li>
          ))}
        </ul>
      )}
      {points && points.length > 0 && (
        <button
          onClick={() => setShowMore(!showMore)}
          className={`${textColor} my-2 underline hover:text-secondary`}
        >
          {showMore ? "Read Less..." : "Read More..."}
        </button>
      )}
      <div className="flex flex-wrap">
        {skills.map((skill) => (
          <p
            className="bg-white border-solid border-secondary text-secondary border-2 rounded-md mt-2 mr-2 p-2 hover:bg-secondary hover:text-white"
            key={skills.indexOf(skill)}
          >
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
