import React from "react";
import TextType from "./TextType";

const HeroSection = () => {
  return (
    <section className="bg-[#F4F4F4] py-16 md:py-24" id="home">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-0 md:gap-8">
          {/* Left Section */}
          <div className="md:w-1/2 text-center md:text-left ">
            <h1 className="text-4xl font-bold text-secondary mb-4 md:mt-0 mt-6 ">
              Piyush Garg
            </h1>
            
            {/* Animated Text Type Effect */}
            <div className="text-xl font-semibold text-[#606060] mb-4 h-8">
              <TextType
                text={["Full Stack Developer","Full Stack Developer","Full Stack Developer"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter=""
              />
            </div>

            <p className="text-secondary mb-6 text-justify">
              I believe great things can be achieved through the use of
              technology and research. But those are merely the tools. Behind
              the tools are the people. Teamwork and passion, those are what
              matter the most.
            </p>
            {/* Call to Action Button */}
            <a
              href="https://www.canva.com/design/DAG2-ERpFnI/yHyGRXR0w7hAjjH1BaCo6w/view?utm_content=DAG2-ERpFnI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6b25ff6547"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-[#F4F4F4] hover:text-primary hover:border-primary border transition-all"
              title="Download Resume">
              Download Resume
            </a>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/3 mt-6 md:mt-0">
            <img
              src="/images/Dp-portfolio.jpeg"
              alt="Piyush Garg - Full Stack Developer"
              className="w-full h-auto rounded-lg shadow-lg"
              title="Piyush Garg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;