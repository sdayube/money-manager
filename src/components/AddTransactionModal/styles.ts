import styled from 'styled-components';
import { globalColors } from '../../assets/styles/global';
import { darken, transparentize } from 'polished';

const { inputBorder } = globalColors;

export const Form = styled.form`
  h2 {
    color: var(--text-title);
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    background: var(--input-background);
    border: 1px solid var(--input-border);

    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1.5rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: var(--text-button);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.25rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TypeWrapper = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface TypeButtonProps {
  selected: boolean
  activeColor: 'green' | 'red'
}

export const TypeButton = styled.button<TypeButtonProps>`
  height: 4rem;
  border-radius: 0.25rem;
  border: 1px solid var(--input-border);
  display: flex;
  align-items: center;
  justify-content: center;
  
  transition: border-color 0.2s;

  background: ${({ selected, activeColor }) => (
    selected
    ? transparentize(0.9, globalColors[activeColor])
    : 'transparent'
  )};

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    color: var(--text-title);
  }

  &:hover {
    border-color: ${darken(0.1, inputBorder)};
  }
`;
