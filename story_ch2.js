//ch2故事選項
gameData.ch2_start= {
    key: 'ch2_start',
    message: '第二章開始',
    character: '',
    options: [
        { text: '繼續', response: '繼續第二章', character: npc, next: 'C' },
        { text: '重來', response: '回到第一章', character: npc, next: 'start' }
    ],
    action:''
};

gameData.C= {
    key: 'C',
    message: '結束',
    character: '',
    options: [
        { text: '重來', response: 'loading...', character: npc, next: 'start' },
    ],
    action:''
};

