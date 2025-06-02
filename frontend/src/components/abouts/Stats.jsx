import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
      <div className="flex gap-4">
        <div className="flex text-5xl font-bold text-accent">
          <CountUp end={4} duration={5} delay={2} className="block w-[35px]" />
          <div>+</div>
        </div>
        <span>
          Years <br /> Experience
        </span>
      </div>
      <div className="flex gap-4">
        <div className="flex text-5xl font-bold text-accent">
          <CountUp end={5} duration={5} delay={2} className="block w-[35px]" />
          <div>+</div>
        </div>
        <span>
          Clients <br /> Worldwide
        </span>
      </div>
    </div>
  );
};

export default Stats;
