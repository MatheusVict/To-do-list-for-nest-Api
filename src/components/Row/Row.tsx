import styled from "styled-components";
import { layout, LayoutProps } from "styled-system";

type RowProps = LayoutProps;


export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  ${layout}
`;