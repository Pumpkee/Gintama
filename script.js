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

const dialogueContainer = document.getElementById('dialogue');
const optionsContainer = document.getElementById('options');

// 定義角色
const player = { name: '玩家' };
const npc = { name: 'NPC' };

function displayDialogue(character, message) {
    dialogueContainer.innerHTML += `<p><strong>${character.name}:</strong> ${message}</p>`;
    // 滾動至最底部
    dialogueContainer.scrollTop = dialogueContainer.scrollHeight;
}

function displayOptions(options) {
    optionsContainer.innerHTML = '';
    options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.onclick = () => {
            selectOption(index);
        };
        optionsContainer.appendChild(button);
    });
}

function selectOption(index) {
    // 根據玩家的選擇回應相應的對話
    const option = options[index];
    displayDialogue(player, option.response);

    // 清空選項
    optionsContainer.innerHTML = '';

    // NPC 根據玩家的選擇給出回應
    setTimeout(() => {
        const npcResponse = '你選擇了 ' + option.text;
        displayDialogue(npc, npcResponse);

        // 根據玩家的選擇，給出下一輪的選項
        if (option.nextOptions) {
            displayOptions(option.nextOptions);
        }
    }, 1000); // 假設 NPC 需要一秒鐘時間來回應
}

// 遊戲開始，NPC說話，並顯示選項
displayDialogue(npc, '你正待在宅邸街，孤儿院就在这条街上，街上到处都是外观相似的小房子。 这条街现在看起来很忙碌，人们都穿着雨衣或打着雨伞去上班。你刚踏出孤儿院大门，就撞上了一个路过的丰腴女人。她踉跄了一下差点摔倒，然后愤怒地回头看向你，但当她看到你的脸时，她眼中的愤怒变成了色欲，"你是我这周里见过最可爱的小家伙！来吧，到我这儿来。');
const options = [
    { text: '不要', response: '那我只好來硬的了' },
    { text: '順從', response: '好孩子' }
];
displayOptions(options);