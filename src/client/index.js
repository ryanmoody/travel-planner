// Styles
import './styles/base.scss';
import './styles/header.scss';
import './styles/main.scss';
import './styles/footer.scss';

// Scripts
import { handleSubmit, handleLogoClick } from './js/app';

// Event Listeners
document.querySelector('.form').addEventListener('submit', handleSubmit);

document.querySelector('.logo').addEventListener('click', handleLogoClick);
