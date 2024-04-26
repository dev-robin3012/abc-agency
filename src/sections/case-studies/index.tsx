import type { FC } from "react";
import SingleCaseStudy from "./single-case-study";
import StudyContent from "./study-content";

const CaseStudies: FC = () => {
  return (
    <>
      <SingleCaseStudy image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <StudyContent title="Built for all of us." subTitle="Collaborate" />
      </SingleCaseStudy>

      <SingleCaseStudy image="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <StudyContent title="Never compromise." subTitle="Quality" />
      </SingleCaseStudy>
    </>
  );
};

export default CaseStudies;
