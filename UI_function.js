const dialogueContainer = document.getElementById('dialogue');
const optionsContainer = document.getElementById('options');
const saveButton = document.getElementById('saveButton');
const loadButton = document.getElementById('loadButton');

//遊戲開始
showStory(gameData[saveData.key]);

//選單
document.addEventListener('DOMContentLoaded', function() {
  var menu = document.getElementById('menu');
  var toggleMenu = document.getElementById('toggleMenu');
  var closeMenuButton = document.getElementById('closeMenu'); // 新增的關閉選單按鈕

  toggleMenu.addEventListener('click', function() {
    menu.classList.toggle('open'); // 切換選單的打開/關閉狀態
  });
    closeMenuButton.addEventListener('click', function() {
    menu.classList.remove('open'); // 關閉選單
  });
});

saveButton.addEventListener('click', function() {
    saveGame();
});

// 绑定读档按钮的点击事件
loadButton.addEventListener('click', function() {
    loadGame();
    // 由讀檔處開始
    dialogueContainer.innerHTML  = '';
    showStory(gameData[saveData.key]);
});



