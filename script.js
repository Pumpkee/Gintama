const dialogueContainer = document.getElementById('dialogue');
const optionsContainer = document.getElementById('options');


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

//顯示故事
function showStory(storyNode) {
    displayDialogue(storyNode.character,storyNode.message);
    displayOptions(storyNode.options);
}

//對話框內容更新
function displayDialogue(character, message) {
    if (character == '') {
        dialogueContainer.innerHTML += `<p>${message}</p>`;
    } else {
        dialogueContainer.innerHTML += `<p><strong>${character.name}:</strong> ${message}</p>`;
    }
    // 滾動至最底部
    dialogueContainer.scrollTop = dialogueContainer.scrollHeight;
}

//選項按鈕
function displayOptions(options) {
    optionsContainer.innerHTML = '';
    options.forEach(options => {
        const button = document.createElement('button');
        button.textContent = options.text;
        //button.classList.add('options');
        button.onclick = () => {
            // 隐藏所有按钮
            const allButtons = optionsContainer.querySelectorAll('button');
            allButtons.forEach(btn => btn.style.display = 'none');

            //顯示對話
            displayDialogue(player, options.text); // 顯示玩家選擇
            setTimeout(() => {  //延遲一秒再顯示回應
                displayDialogue(options.character, options.response); // 角色回應
                setTimeout(() => {  //延遲一秒再進入下一段
                    showStory(gameData[options.next]); // 進入下一段
                }, 1000); 
            }, 1000); 
        }
        optionsContainer.appendChild(button);
    });
}



// 遊戲開始，NPC說話，並顯示選項
showStory(gameData.start);