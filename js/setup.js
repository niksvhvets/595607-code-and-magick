'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117]', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

var nameGenerate = function () {
  var nameWizard = Math.floor(Math.random() * WIZARD_NAMES.length);
  var surnameWizard = Math.floor(Math.random() * WIZARD_SURNAME.length);
  var fullNameWizard = WIZARD_NAMES[nameWizard] + ' ' + WIZARD_SURNAME[surnameWizard];
  return fullNameWizard;
};

var coatGenerate = function () {
  var coatColorWizard = Math.floor(Math.random() * WIZARD_COATCOLOR.length);
  return WIZARD_COATCOLOR[coatColorWizard];
};

var eyesGenerate = function () {
  var eyesColorWizard = Math.floor(Math.random() * WIZARD_EYESCOLOR.length);
  return WIZARD_EYESCOLOR[eyesColorWizard];
};

var wizards = [
  {
    name: nameGenerate(),
    coatColor: coatGenerate(),
    eyesColor: eyesGenerate()
  },
  {
    name: nameGenerate(),
    coatColor: coatGenerate(),
    eyesColor: eyesGenerate()
  },
  {
    name: nameGenerate(),
    coatColor: coatGenerate(),
    eyesColor: eyesGenerate()
  },
  {
    name: nameGenerate(),
    coatColor: coatGenerate(),
    eyesColor: eyesGenerate()
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyestColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
