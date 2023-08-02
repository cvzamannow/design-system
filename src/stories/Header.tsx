import React from 'react';

import { Button } from './Button';
import './header.css';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="storybook-header">
      <div>
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#0D4A3E"/>
      <rect x="56.5088" y="25.3428" width="44.0702" height="9.48573" transform="rotate(135 56.5088 25.3428)" fill="white"/>
      <path d="M49.9478 56.6504L43.1147 49.8173L49.9478 49.8173L56.6552 49.943L49.9478 56.6504Z" fill="white"/>
      <rect x="49.8008" y="80.999" width="44.0702" height="9.48573" transform="rotate(-135 49.8008 80.999)" fill="white"/>
      <rect x="80.9834" y="49.8164" width="44.0702" height="9.48573" transform="rotate(135 80.9834 49.8164)" fill="white"/>
      </svg>

        <h1>CV ZAMAN NOW</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);