import styled from "styled-components";

export const LoginMain = styled.main`
  background: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    width: clamp(296px, 20vw, 20vw);
    background: var(--gray);
    padding: clamp(16px, 1.667vw, 1.667vw);
    border-radius: clamp(8px, 0.833vw, 0.833vw);
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 1.25vw, 1.25vw);
`;
