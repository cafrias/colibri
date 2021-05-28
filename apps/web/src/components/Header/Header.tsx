import './Header.css';

import React from 'react';

//
// Styles
//
const css = {
  header: 'header',
  homeLink: 'euiHeaderLogo',
  homeLinkIcon: 'euiIcon euiIcon--large euiHeaderLogo__icon',
  homeLinkText: 'euiHeaderLogo__text',
  spinnerContainer: 'euiHeaderSectionItem',
  spinnerIcon: 'euiLoadingSpinner euiLoadingSpinner--medium',
  spinnerIconHidden: 'kbnLoadingIndicator-hidden',
  searchBar: 'euiFieldSearch euiFieldSearch--fullWidth euiFieldSearch--compressed euiFieldSearch-isClearable euiSelectableSearch euiSelectableTemplateSitewide__search',
  menuButton: 'euiHeaderSectionItem__button',
};

//
// Types
//

//
// Component
//
const Header: React.FunctionComponent = () => (
  <header className={css.header}>
    {/* HomeLink */}
    <a className={css.homeLink} href="/">
      <svg
        width="32"
        height="32"
        fill="none"
        viewBox="0 0 32 32"
        className={css.homeLinkIcon}
        focusable="false"
        role="img"
        aria-label="Elastic"
      >
        <path
          fill="#FFF"
          d="M32 16.77a6.334 6.334 0 00-1.14-3.641 6.298 6.298 0 00-3.02-2.32 9.098 9.098 0 00-.873-5.965A9.05 9.05 0 0022.56.746a9.007 9.007 0 00-5.994-.419 9.037 9.037 0 00-4.93 3.446 4.789 4.789 0 00-5.78-.07A4.833 4.833 0 004.198 9.26a6.384 6.384 0 00-3.035 2.33A6.42 6.42 0 000 15.242 6.341 6.341 0 001.145 18.9a6.305 6.305 0 003.039 2.321 9.334 9.334 0 00-.16 1.725 9.067 9.067 0 001.727 5.333 9.014 9.014 0 004.526 3.287 8.982 8.982 0 005.587-.023 9.016 9.016 0 004.5-3.322 4.789 4.789 0 005.77.074 4.833 4.833 0 001.672-5.542 6.383 6.383 0 003.032-2.331A6.419 6.419 0 0032 16.77z"
        />
        <path
          fill="#FEC514"
          d="M12.58 13.787l7.002 3.211 7.066-6.213a7.854 7.854 0 00.152-1.557 7.944 7.944 0 00-1.54-4.704 7.897 7.897 0 00-4.02-2.869 7.87 7.87 0 00-4.932.086 7.9 7.9 0 00-3.92 3.007l-1.174 6.118 1.367 2.92z"
        />
        <path
          fill="#00BFB3"
          d="M5.333 21.228A7.964 7.964 0 006.72 27.53a7.918 7.918 0 004.04 2.874 7.89 7.89 0 004.95-.097 7.921 7.921 0 003.926-3.03l1.166-6.102-1.555-2.985-7.03-3.211-6.885 6.248z"
        />
        <path
          fill="#F04E98"
          d="M5.288 9.067l4.8 1.137L11.14 4.73a3.785 3.785 0 00-4.538-.023A3.82 3.82 0 005.29 9.065"
        />
        <path
          fill="#1BA9F5"
          d="M4.872 10.214a5.294 5.294 0 00-2.595 1.882 5.324 5.324 0 00-.142 6.124 5.287 5.287 0 002.505 2l6.733-6.101-1.235-2.65-5.266-1.255z"
        />
        <path
          fill="#93C90E"
          d="M20.873 27.277a3.737 3.737 0 002.285.785 3.783 3.783 0 003.101-1.63 3.813 3.813 0 00.451-3.484l-4.8-1.125-1.037 5.454z"
        />
        <path
          fill="#07C"
          d="M21.848 20.563l5.28 1.238a5.34 5.34 0 002.622-1.938 5.37 5.37 0 001.013-3.106 5.312 5.312 0 00-.936-3.01 5.283 5.283 0 00-2.475-1.944l-6.904 6.07 1.4 2.69z"
        />
      </svg>
      <span className={css.homeLinkText}>Elastic</span>
    </a>

    {/* Spinner */}
    <div className={css.spinnerContainer}>
      <span className={css.spinnerIcon} data-test-subj="globalLoadingIndicator-hidden" aria-hidden="true" aria-label="Loading content" />
    </div>

    {/* SearchBar */}
    <input type="search" placeholder="Search Elastic" className={css.searchBar} autoComplete="off" aria-haspopup="listbox" aria-activedescendant="" aria-label="Filter options" data-test-subj="header-search" value="" />

    {/* HeaderMenu */}
    <ul>
      <li>
        <button className={css.menuButton} type="button" aria-expanded="false" aria-haspopup="true" aria-label="Help menu"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="euiIcon euiIcon--medium" focusable="false" role="img" aria-hidden="true"><path fillRule="evenodd" d="M13.6 12.186l-1.357-1.358c-.025-.025-.058-.034-.084-.056.53-.794.84-1.746.84-2.773a4.977 4.977 0 00-.84-2.772c.026-.02.059-.03.084-.056L13.6 3.813a6.96 6.96 0 010 8.373zM8 15A6.956 6.956 0 013.814 13.6l1.358-1.358c.025-.025.034-.057.055-.084C6.02 12.688 6.974 13 8 13a4.978 4.978 0 002.773-.84c.02.026.03.058.056.083l1.357 1.358A6.956 6.956 0 018 15zm-5.601-2.813a6.963 6.963 0 010-8.373l1.359 1.358c.024.025.057.035.084.056A4.97 4.97 0 003 8c0 1.027.31 1.98.842 2.773-.027.022-.06.031-.084.056l-1.36 1.358zm5.6-.187A4 4 0 118 4a4 4 0 010 8zM8 1c1.573 0 3.019.525 4.187 1.4l-1.357 1.358c-.025.025-.035.057-.056.084A4.979 4.979 0 008 3a4.979 4.979 0 00-2.773.842c-.021-.027-.03-.059-.055-.084L3.814 2.4A6.957 6.957 0 018 1zm0-1a8.001 8.001 0 10.003 16.002A8.001 8.001 0 008 0z" /></svg></button>
      </li>
      <li>
        <a className={css.menuButton} href="https://www.elastic.co/legal/privacy-statement" target="_blank" rel="noopener noreferrer">
          <span className="euiButtonContent euiButtonEmpty__content">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="euiIcon euiIcon--medium euiButtonContent__icon" focusable="false" role="img" aria-hidden="true"><path d="M4 5v-.8C4 1.88 5.79 0 8 0s4 1.88 4 4.2V5h1.143c.473 0 .857.448.857 1v9c0 .552-.384 1-.857 1H2.857C2.384 16 2 15.552 2 15V6c0-.552.384-1 .857-1H4zM3 15h10V6H3v9zm5.998-3.706L9.5 12.5h-3l.502-1.206A1.644 1.644 0 016.5 10.1c0-.883.672-1.6 1.5-1.6s1.5.717 1.5 1.6c0 .475-.194.901-.502 1.194zM11 4.36C11 2.504 9.657 1 8 1S5 2.504 5 4.36V5h6v-.64z" /></svg>
            <span className="euiButtonEmpty__text" />
          </span>
        </a>
      </li>
      <li>
        <button className={css.menuButton} type="button" data-test-subj="newsfeed" aria-controls="keyPadMenu" aria-expanded="false" aria-haspopup="true" aria-label="Newsfeed menu - all items read"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="euiIcon euiIcon--medium" focusable="false" role="img" aria-hidden="true"><path d="M4.934 3.063a1.5 1.5 0 01.547.321l.112.115 6.07 6.915a1.5 1.5 0 01-.646 2.41l-.142.04-9.031 2.097A1.5 1.5 0 01.037 13.19l.043-.159L3.04 4.02a1.5 1.5 0 011.893-.957zM4.027 4.25l-.036.083-2.961 9.011a.5.5 0 00.498.656l.09-.013 2.937-.681-1.399-1.508a.5.5 0 01.666-.74l.067.06 1.788 1.927 2.634-.611-3.198-3.601a.5.5 0 01.682-.726l.066.062 3.559 4.007 1.229-.284a.5.5 0 00.15-.063l.067-.049a.5.5 0 00.099-.632l-.053-.073-6.07-6.916a.5.5 0 00-.138-.11l-.082-.035-.088-.02a.5.5 0 00-.507.256zm11.66 5.039a2.5 2.5 0 01-.975 3.399.5.5 0 01-.485-.875 1.5 1.5 0 00-1.454-2.624.5.5 0 01-.485-.875 2.5 2.5 0 013.399.975zm-5.03-6.206a.5.5 0 01.338.544l-.02.088-.677 2.035 2.068-.721a.5.5 0 01.6.225l.036.082a.5.5 0 01-.225.6l-.082.037L9.67 7.028a.5.5 0 01-.659-.55l.02-.08.995-3a.5.5 0 01.632-.316zM14.5 4a.5.5 0 110 1 .5.5 0 010-1zM7.862.403a2.5 2.5 0 01.735 3.459.5.5 0 01-.839-.545 1.5 1.5 0 10-2.516-1.634.5.5 0 01-.839-.545A2.5 2.5 0 017.862.403zM13.5 2a.5.5 0 110 1 .5.5 0 010-1zm-3-1a.5.5 0 110 1 .5.5 0 010-1zm4-1a.5.5 0 110 1 .5.5 0 010-1z" /></svg></button>
      </li>
      <li>
        <button className={css.menuButton} type="button" aria-controls="headerUserMenu" aria-expanded="false" aria-haspopup="true" aria-label="Account menu" data-test-subj="userMenuButton">
          <div
            className="euiAvatar euiAvatar--s euiAvatar--user"
            aria-label="Guest User"
            title="Guest User"
            style={{
              backgroundImage: 'none',
              backgroundColor: 'rgb(109, 204, 177)',
              color: 'rgb(0, 0, 0)',
            }}
          >
            <span aria-hidden="true">GU</span>
          </div>
        </button>
      </li>
    </ul>
  </header>
);

export default Header;
