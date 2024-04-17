import React from "react";
import IntroImagesSection from "./IntroImageSection";
import Section from "./Section";
import IconsText from "./IconsText";
import Header from "./Header";

const Components = {
  IntroImagesSection,
  Section,
  IconsText,
  Header
  // Add more components as needed
};

export const renderComponent = (item: any) => {
    const Component = Components[item.contentType];
    if (Component) {
      return <Component {...item} />;
    } else {
      return <div>The component {item.contentType} has not been created yet.</div>;
    }
  };