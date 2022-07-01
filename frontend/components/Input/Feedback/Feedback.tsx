import { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled";

type Props = {
  isValid?: boolean;
};

export const Feedback = styled.span<Props>`
  color: ${({ isValid, theme }) =>
    isValid ? theme.font.valid : theme.font.invalid};
`;
export const ConditionalFeedback: FC<PropsWithChildren> = ({ children }) =>
  children ? <Feedback>{children}</Feedback> : <>&nbsp;</>;
