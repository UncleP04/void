import React from "react";

const NewLetter = () => {
  const letter = [
    { text: "Career development and job opportunities" },
    { text: "Professional growth and personal development" },
    { text: "Emerging industries and startups" },
    { text: "Exclusive content and insights" },
    { text: "Skills and knowledge acquisition" },
    { text: "Career exploration and transitions" },
  ];

  const benefits = [
    { text: "Access to global student community" },
    { text: "Tips for skills and knowledge acquisition" },
    { text: "Career development resources and opportunities" },
    { text: "Guidance on professional growth and personal development" },
    { text: "Insights into emerging industries and startups" },
    { text: "Exclusive content and insights" },
    { text: "Support for career exploration and transitions" },
  ];

  const premuim = [
    { text: "Private community with expert guidance to land a job in 60 days" },
    { text: "Paths to success" },
    { text: "Career success stories" },
    { text: "Pivots and transformations" },
    { text: "Lessons from industry leaders" },
    { text: "Personal and professional development stories" },
    { text: "Executive spotlights" },
    { text: "Diverse perspectives" },
    { text: "Entrepreneurial journeys" },
    { text: "Q&A sessions with successful professionals" },
    { text: "Tips and advice from experts" },
    { text: "Accountability Group" },
  ];

  return (
    <div>
      <h1 className="text-white text-[2.1em] pb-5">Newsletter Content</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {letter.map((letters, i) => (
          <li className="text-white text-[15px] text-start list-none" key={i}>
            {letters.text}
          </li>
        ))}
      </div>
      <h1 className="text-white text-[2.1em] py-5">Freemium benefits</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {benefits.map((benefit, i) => (
          <li className="text-white text-[15px] text-start list-none" key={i}>
            {benefit.text}
          </li>
        ))}
      </div>
      <h1 className="text-white text-[2.1em] py-5">Premium benefits</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {premuim.map((benefit, i) => (
          <li className="text-white text-[15px] text-start list-none" key={i}>
            {benefit.text}
          </li>
        ))}
      </div>
    </div>
  );
};

export default NewLetter;
