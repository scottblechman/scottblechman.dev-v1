# scottblechman.dev
My portfolio site, built with React and Gatsby.

## Prerequisites
1. Install the Gatsby CLI
```sh
npm install -g gatsby-cli
```

2. Install dependencies
```sh
npm install
```

## Running in Development
```sh
npm start
```

## Create a Production Build
```sh
npm run build
```

## Libraries
- [Gatsby](https://www.gatsbyjs.com/) - A static site framework.
- [actions-gh-pages](https://github.com/peaceiris/actions-gh-pages) - Automatic deployment to [GitHub Pages](https://pages.github.com/).
- [Google Domains](https://domains.google/) - Hosting for [scottblechman.dev](https://scottblechman.dev).
- [React](https://reactjs.org/) - Handles the UI under the hood.
- [Styled Components](https://styled-components.com/) - CSS classes as JSX.
- [typography.js](https://kyleamathews.github.io/typography.js/) - Simplifies font management.
- And many more in [package.json](https://github.com/scottblechman/scottblechman.dev/blob/master/package.json).

## License
All code is licensed under the [GNU A-GPL 3.0](https://github.com/scottblechman/scottblechman.dev/blob/master/LICENSE) license. The contents of [scottblechman.dev](https://scottblechman.dev) are Copyright (c) 2020 Scott Blechman.

The code in this repository can be used in other projects, although it is not designed to be a template. The A-GPL 3.0 license requires some prerequisites when using this code:
- A work using this repository's code must be open-source if distributed (this includes hosting the code's build artifacts on a domain).
- The copyright notice and contents of the GNU A-GPL 3.0 license must remain included in [LICENSE.md](https://github.com/scottblechman/scottblechman.dev/blob/master/LICENSE).
    - A work using this repository's code must be licensed under GNU A-GPL 3.0.
- Any changes to the code in this repository by a work using this code must be documented in the work's source.

Additionally, some setup is required when cloning or forking this repository:
- All references to [scottblechman.dev](https://scottblechman.dev) must be removed, including in the CNAME.
- API references to [github.com/scottblechman](https://github.com/scottblechman) must be removed.
- Personally identifiable information must be replaced or removed.