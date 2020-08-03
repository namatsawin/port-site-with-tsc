import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkStyle = styled(Link)`
  color: inherit;
`;

type Props = {
  to: string;
  children: React.ReactElement;
}
const LinkNoneStyle = ({ children, to }: Props) => {
  return <LinkStyle to={to}>{children}</LinkStyle>;
};

export default LinkNoneStyle;
