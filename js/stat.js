'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_GAP = 30;
var TEXT_MARGIN = 20;

var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_COL = BAR_WIDTH + BAR_GAP;

var renderCloud = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var renderCloudText = function (ctx, text, x, y) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText(text, x, y);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#fff');

  renderCloudText(ctx, 'Ура вы победили!', CLOUD_X + BAR_GAP, CLOUD_Y + TEXT_GAP, '#000');
  renderCloudText(ctx, 'Список результатов:', CLOUD_X + BAR_GAP, CLOUD_Y + TEXT_GAP + TEXT_MARGIN, '#000');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var barColor = (players[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + Math.random().toFixed(1) + ')';

    renderCloud(ctx, CLOUD_X + BAR_GAP + BAR_COL * i, CLOUD_HEIGHT - TEXT_MARGIN, BAR_WIDTH, ((BAR_HEIGHT * Math.round(times[i])) / maxTime) * -1, barColor);
    renderCloudText(ctx, players[i], CLOUD_X + BAR_GAP + BAR_COL * i, CLOUD_HEIGHT);
    renderCloudText(ctx, Math.round(times[i]), CLOUD_X + BAR_GAP + BAR_COL * i, (CLOUD_HEIGHT - TEXT_GAP) - (BAR_HEIGHT * Math.round(times[i])) / maxTime);
  }
};
