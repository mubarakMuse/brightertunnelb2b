import React from 'react';

const Step = ({ stepNumber, title, description }) => {
  return (
    <div className="card flex-shrink-0 w-full md:w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex gap-4 items-start">
          <div className="avatar placeholder">
            <div className="bg-blue-400 text-white rounded-full w-12">
              <span className="text-xl">{stepNumber}</span>
            </div>
          </div>
          <div>
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const InterviewSteps = () => {
  return (
    <section className="bg-base-200 overflow-hidden" id="process">
      <div className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <p className="font-medium text-blue-500 mb-8">Our Process</p>
          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">
            Streamlined Interviewing for Optimal Results
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 lg:gap-16">
          <Step
            stepNumber="01"
            title="Analyze Hiring Needs"
            description="Work closely with our experienced team to define your specific hiring requirements, identifying key roles and skills needed for your team's success."
          />
          <Step
            stepNumber="02"
            title="Coordinate Candidate Interviews"
            description="Utilize our seamless scheduling system to arrange interviews that fit your timeline, ensuring a smooth experience for both you and the candidates."
          />
          <Step
            stepNumber="03"
            title="Make Informed Hiring Decisions"
            description="Leverage our expert assessments and detailed candidate reports to make confident hiring decisions, securing top talent for your team."
          />
        </div>
      </div>
    </section>
  );
};

export default InterviewSteps;
