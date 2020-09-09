import React from "react";
import {
  Hero,
  Carusele,
  CaruseleTextOne,
  CaruseleTextTwo,
  SecondaryText,
  Link,
  Links,
  Goals,
  StyledButton,
} from "./styles";

import Carusel from "./Carusel";

const Main = () => {
  return (
    <section>
      <Hero className="hero">
        <Carusele>
          <div>
            <CaruseleTextOne>
              Watch Daily <br /> Live Classes
            </CaruseleTextOne>
            <CaruseleTextTwo>
              Lorem Ipsu <br /> Dolo sitame
            </CaruseleTextTwo>
          </div>
          <SecondaryText>World’s largest learning platform</SecondaryText>
          <StyledButton>Start Learning</StyledButton>
        </Carusele>

        <Carusel />
      </Hero>
      <Links>
        <Goals>Popular goals</Goals>
        <Link href="/">GOAL I</Link>
        <Link href="/">GOAL II</Link>
        <Link href="/">NEXT GOAL</Link>
        <Link href="/">EXAMS</Link>
        <Link href="/">EXAMS II</Link>
      </Links>
    </section>
  );
};

export default Main;
