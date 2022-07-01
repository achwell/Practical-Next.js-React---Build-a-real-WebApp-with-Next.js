import { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { Tile, Props } from "./Tile";

const CommonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  ${CommonStyles};
`;

const StyledTile: FC<PropsWithChildren<Props>> = styled(Tile)`
  ${CommonStyles};
  flex-flow: column;
`;

export const CenteredTile: FC<PropsWithChildren<Props>> = ({
  children,
  header,
  ...rest
}) => (
  <Wrapper {...rest}>
    <StyledTile header={header}>{children}</StyledTile>
  </Wrapper>
);
