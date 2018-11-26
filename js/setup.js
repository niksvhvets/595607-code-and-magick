'use strict';

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARD_SURNAME = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var WIZARD_COATCOLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var WIZARD_EYESCOLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var wizards = [];
var wizardsCount = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');


var randomRenderElement = function (array) {
  var render = Math.floor(Math.random() * array.length);
  return array[render];
};

var randomRenderWizard = function () {
  for (var i = 0; i < wizardsCount; i++) {
    wizards[i] = {
      name: randomRenderElement(WIZARD_NAMES) + ' ' + randomRenderElement(WIZARD_SURNAME),
      coatColor: randomRenderElement(WIZARD_COATCOLOR),
      eyesColor: randomRenderElement(WIZARD_EYESCOLOR)
    };
  }
};

randomRenderWizard();

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyestColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizardsCount; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
