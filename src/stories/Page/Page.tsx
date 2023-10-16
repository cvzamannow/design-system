import React from 'react';
import Header from '../Header/Header';
import Button from '../Button/Button';
import StorybookPage from './page.styles';
import FontPoppins from '../assets/font/Poppins';
import Card from '../Card/Card';

export const Page: React.FC = () => {

  return (
    <article>
        <FontPoppins />
        <Header
            NavLogo={[
                <><svg fill="none" height="32" viewBox="0 0 100 100" width="32" xmlns="http://www.w3.org/2000/svg"><rect fill="transparant" height="100" width="100"/><rect fill="white" height="9.48573" transform="rotate(135 56.5088 25.3428)" width="44.0702" x="56.5088" y="25.3428"/><path d="M49.9478 56.6504L43.1147 49.8173L49.9478 49.8173L56.6552 49.943L49.9478 56.6504Z" fill="white"/><rect fill="white" height="9.48573" transform="rotate(-135 49.8008 80.999)" width="44.0702" x="49.8008" y="80.999"/><rect fill="white" height="9.48573" transform="rotate(135 80.9834 49.8164)" width="44.0702" x="80.9834" y="49.8164"/></svg><div className="text-logo">CV ZAMAN NOW</div></>
            ]}
            menuItems={[
                <ul>
                    <li className="active">Beranda</li>
                    <li>Tentang Kami</li>
                    <li>Buat CV</li>
                    <li>Surat Lamaran</li>
                </ul>
            ]}
            ProfileWrapper={[
                <>
                <Button ButtonType="nolo" label="Daftar" style={{height: '48px', width: '118px'}}/>
                <Button ButtonType="text" label="Masuk" style={{marginLeft: '20px'}}/></>
            ]}
        />

      <StorybookPage>
        <h2>Pages in Storybook</h2>
        <Card
          card="CardDefault"
          content={[
            <img src='https://source.unsplash.com/600x200/?japan' />
          ]}
          style={{ 
            marginTop: "20px",
            maxWidth: "10px",
         }}
        />
        <p>
          We recommend building UIs with a{' '}
          <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
            <strong>component-driven</strong>
          </a>{' '}
          process starting with atomic components and ending with pages.
        </p>
        <p>
          Render pages with mock data. This makes it easy to build and review page states without
          needing to navigate to them in your app. Here are some handy patterns for managing page
          data in Storybook:
        </p>
        <ul>
          <li>
            Use a higher-level connected component. Storybook helps you compose such data from the
            "args" of child component stories
          </li>
          <li>
            Assemble data in the page component from your services. You can mock these services out
            using Storybook.
          </li>
        </ul>
        <p>
          Get a guided tutorial on component-driven development at{' '}
          <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
            Storybook tutorials
          </a>
          . Read more in the{' '}
          <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">
            docs
          </a>
          .
        </p>
        <div className="tip-wrapper">
          <span className="tip">Tip</span> Adjust the width of the canvas with the{' '}
          <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path
                d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                id="a"
                fill="#999"
              />
            </g>
          </svg>
          Viewports addon in the toolbar
        </div>
      </StorybookPage>
    </article>
  );
};
