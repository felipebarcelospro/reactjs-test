import styled from 'styled-components'

export const Container = styled.section`
  margin-top: var(--space-xl);
  margin-bottom: var(--space-xl);

  position: relative;
  height: 24rem;
  background: var(--color-bg-accent);
  border: 3px solid var(--color-border);
  border-radius: var(--radius-base);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: 800px) {
    height: 14rem;
  }

  @media (min-width: 800px) {
    :hover {
      border-color: var(--color-white);
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }
  }

  > span {
    position: absolute;
  }
`

export const Overlay = styled.div`
  position: absolute;
  padding-left: var(--space-xl);
  padding-bottom: var(--space-lg);
  bottom: 0;

  h1, h2 {
    font-size: var(--size-xs);
  }

  h1 {
    line-height: 120%;
  }

  h2 {
    opacity: 0.6;
    font-weight: 400;
  }
`
