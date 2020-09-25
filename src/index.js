import 'bootstrap';
import './css/app.scss';
import sideBar from './components/sideBar';

const content = document.querySelector('#content');

const mainPage = () => {
  const page = document.createElement('div');
  const side = document.createElement('div');
  const main = document.createElement('main');

  page.classList.add('row');
  side.classList.add('col-2', 'p-5', 'side-bar');
  main.classList.add('col-10', 'bg-light', 'p-5', 'main', 'd-flex', 'flex-wrap');

  side.appendChild(sideBar());
  main.innerHTML = '<h1>Main Element</h1>';
  page.appendChild(side);
  page.appendChild(main);

  return page;
};

const displayPage = () => {
  content.appendChild(mainPage());
};

window.addEventListener('load', () => {
  displayPage();
});