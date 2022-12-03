import { developers } from '../templates/developersCard';
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';

const refs = {
  footer: document.querySelector('.footer'),

  openModalBtnFoot: document.querySelector('[data-action="open-modal"]'),
  closeModalBtnFoot: document.querySelector('[data-action="close-modal"]'),
  backdropTeamFoot: document.querySelector('.js-backdrop'),

  team: document.querySelector('.dev-set'),
};

const developersBoard = document.querySelector('.js-dev-set');
developersBoard.innerHTML = personalCard(developers);

refs.openModalBtnFoot.addEventListener('click', onOpenModal);
refs.backdropTeamFoot.addEventListener('click', onBackdropClick);
refs.closeModalBtnFoot.addEventListener('click', onCloseModal);

function personalCard(developers) {
  const markup = developers
    .map(({ img, name, position, instagram, github, linkedin, facebook }) => {
      return `
        <li class='devcont-item'>
  <a href="#" class='devcont-link'>
    <div class='devcont-imgbox'>
      <img src="${img}" alt='${name}' class='devcont-img' />
    </div>

    <div class='devcont-description'>
      <p class='devcont-name'>${name}</p>
      <p class='devcont-position'>${position}</p>
    </div>

        <div class='devcont-social-network'>
      <ul class='social-network-box'>


        <li class='social-network-item'>
          <a href="${github}" class='social-network-link'>
            <i class="icon fab fa-github"></i>
          </a>
        </li>

        <li class='social-network-item'>
          <a href="${instagram}" class='social-network-link'>
            <i class="icon fab fa-instagram"></i>
          </a>
        </li>

          <li class='social-network-item'>
          <a href="${facebook}" class='social-network-link'>
            <i class="icon fab fa-facebook"></i>
          </a>
        </li>

        <li class='social-network-item'>
          <a href="${linkedin}" class='social-network-link'>
            <i class="icon fab fa-linkedin"></i>
          </a>
        
        </li>
      </ul>
    </div>
  </a>
</li>
        `;
    })
    .join('');
  return markup;
}

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  refs.backdropTeamFoot.classList.remove('is-hidden');
  refs.backdropTeamFoot.classList.remove('show-modal');
  const body = document.body
    body.style.overflowY = 'hidden'
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.backdropTeamFoot.classList.remove('show-modal');
  refs.backdropTeamFoot.classList.add('is-hidden');
  const body = document.body
    body.style.overflowY = ''
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}
