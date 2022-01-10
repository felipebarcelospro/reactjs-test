import styled from 'styled-components'

export const Container = styled.div``

export const Banner = styled.section`
  padding: var(--space-xl) 0;
  background: var(--color-bg-accent);
  border-bottom: 1px solid var(--color-border);

  > div {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: var(--space-lg);

    .thumbnail-container {
      overflow: hidden;
      box-shadow: var(--shadow);
      border-radius: var(--radius-base);
    }

    .info-container {
      display: flex;
      flex-direction: column;
      justify-content: center;

      > h1 {
        font-size: 1.8rem;
        margin-bottom: var(--space-lg);
      }

      > hr {
        opacity: 0.05;
      }

      .item {
        margin: var(--space-sm) 0;

        h1, h2 {
          font-size: var(--font-size-md);
          line-height: 120%;
        }

        h2, p {
          opacity: 0.6;

          font-weight: 400;
          font-size: var(--font-size-md);
        }
      }
    }
  }
`
