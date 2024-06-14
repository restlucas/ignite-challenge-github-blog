import { css } from 'styled-components'

export const mixins = {
  fonts: {
    titleL: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1.5rem;
      line-height: 160%;
      font-weight: 800;
    `,
    titleM: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1.25rem;
      line-height: 160%;
      font-weight: 800;
    `,
    titleS: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1.125rem;
      line-height: 160%;
      font-weight: 700;
    `,
    textM: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1rem;
      line-height: 160%;
      font-weight: 400;
    `,
    textS: css`
      font-family: 'Nunito', sans-serif;
      font-size: 0.875rem;
      line-height: 160%;
      font-weight: 400;
    `,
    link: css`
      font-family: 'Nunito', sans-serif;
      font-size: 0.75rem;
      line-height: 160%;
      font-weight: bold;
      text-decoration: none;
    `,
  },
}
