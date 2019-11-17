import React from "react";
import StyledCta from "./styled";

interface Props {
  href: string;
  title?: string;
  children: string | JSX.Element;
}

const Cta = ({ href, title, children }: Props) => {
  return (
    <StyledCta href={href} title={title}>
      {children}
    </StyledCta>
  );
};

export default Cta;
