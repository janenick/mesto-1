const prInfo = document.querySelector('.profile__info');
const editBtn = prInfo.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const closeBtn = popup.querySelector('.popup__btn-close');
const saveBtn = popup.querySelector('.popup__btn-save');
const formElement = popup.querySelector('.popup__container');
let prTitle = document.querySelector('.profile__title');
let prSubtitle = document.querySelector('.profile__subtitle');

function showPopup() {
    popup.classList.toggle('popup_opened');
  
    let nameInput = popup.querySelector('.popup__text_type_name');
    nameInput.value = prTitle.textContent;

    let jobInput = popup.querySelector('.popup__text_type_job');
    jobInput.value = prSubtitle.textContent;
}
editBtn.addEventListener('click', showPopup);

function closePopup() {
    popup.classList.remove('popup_opened');
}
closeBtn.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();
 
    let newName = popup.querySelector('.popup__text_type_name').value;
    console.log('New name of Jack Custo is');
    console.log(newName);

    let newJob = popup.querySelector('.popup__text_type_job').value;
    console.log('New job of исследователь is');
    console.log(newJob);
   
    let profileName = document.querySelector('.profile__title');
    profileName.textContent = newName;

    let profileJob = document.querySelector('.profile__subtitle');
    profileJob.textContent = newJob;
   
    closePopup();
}
formElement.addEventListener('submit', formSubmitHandler);
