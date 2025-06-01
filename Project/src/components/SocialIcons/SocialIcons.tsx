import { FaVk } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaOdnoklassniki } from 'react-icons/fa';
import { RiTelegram2Fill } from 'react-icons/ri';
import type { FC } from 'react';

import './SocialIcons.css';

export const SocialIcons: FC = () => {
  return (
    <nav className="social-icons" aria-label="Социальные сети">
      <ul className="social-icons__list list-reset">
        <li className="social-icons__item">
          <a className="social-icons__link" href="#" aria-label="ВКонтакте">
            <FaVk className="social-icons__svg" />
          </a>
        </li>
        <li className="social-icons__item">
          <a className="social-icons__link" href="#" aria-label="YouTube">
            <FaYoutube className="social-icons__svg" />
          </a>
        </li>
        <li className="social-icons__item">
          <a className="social-icons__link" href="#" aria-label="Одноклассники">
            <FaOdnoklassniki className="social-icons__svg" />
          </a>
        </li>
        <li className="social-icons__item">
          <a className="social-icons__link" href="#" aria-label="Телеграмм">
            <RiTelegram2Fill className="social-icons__svg" />
          </a>
        </li>
      </ul>
    </nav>
  );
};
