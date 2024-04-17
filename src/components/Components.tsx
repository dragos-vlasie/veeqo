import React, { FC } from "react";
import IntroImagesSection from "./IntroImageSection";
import Section from "./Section";
import IconsText from "./IconsText";
import Header from "./Header";

// Define the types for item props
type ItemProps = {
  contentType: string;
  padding?: string;
  theme?: string;
  content?: any[];
};

// Define the Components object with appropriate types
const Components: { [key: string]: FC<any> } = {
  IntroImagesSection,
  Section,
  IconsText,
  Header
};

// Define the renderComponent function with proper types
export const renderComponent = (item: ItemProps) => {
  const Component = Components[item.contentType];
  if (Component) {
    return <Component {...item} />;
  } else {
    return <div>The component {item.contentType} has not been created yet.</div>;
  }
};
