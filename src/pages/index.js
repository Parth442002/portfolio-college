import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Parth Katiyar Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection
          sectionId="articles"
          heading="Projects"
          sources={["Medium"]}
        />
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="details" heading="Skills" />
        <ProjectsSection sectionId="features" heading="Certificates" />
        <ContactSection sectionId="github" heading="Contact Me" />
      </Page>
    </>
  );
}
