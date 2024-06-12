
//顯示故事
function showStory(storyNode) {
    saveData.key = storyNode.key
    displayAction(storyNode.action);
    displayDialogue(storyNode.character,storyNode.message);
    displayOptions(storyNode.options);
}

//畫面動作
function displayAction(action){
    //清除已有對話
    if(action == 'cleanText') 
        dialogueContainer.innerHTML ='';
}

//對話框內容更新
function displayDialogue(character, message) {
    if (character == '') 
    {
        dialogueContainer.innerHTML += `<p>${message}</p>`;
    } 
    else 
    {
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


//存檔功能
const saveDataKey = 'saveData';
function saveGame() {
    localStorage.setItem(saveDataKey, JSON.stringify(saveData));
    console.log('存檔成功');
}

// 加载存档数据
function loadGame() {
    savedGameData = localStorage.getItem(saveDataKey);
    if (savedGameData) {
        saveData = JSON.parse(savedGameData);
        console.log('讀檔成功:', saveData);
    } else {
        console.log('沒有讀檔數據');
    }
}