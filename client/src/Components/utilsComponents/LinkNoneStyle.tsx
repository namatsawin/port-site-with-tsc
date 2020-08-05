import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkStyle = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

type Props = {
  to: string;
  children: React.ReactNode;
};
const LinkNoneStyle = ({ children, to }: Props) => {
  return <LinkStyle to={to}>{children}</LinkStyle>;
};

export default LinkNoneStyle;
