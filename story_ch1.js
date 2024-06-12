//ch1故事選項
gameData.start= {
    key: 'start',
    message: '你正待在宅邸街，孤儿院就在这条街上，街上到处都是外观相似的小房子。 这条街现在看起来很忙碌，人们都穿着雨衣或打着雨伞去上班。你刚踏出孤儿院大门，就撞上了一个路过的丰腴女人。她踉跄了一下差点摔倒，然后愤怒地回头看向你，但当她看到你的脸时，她眼中的愤怒变成了色欲，"你是我这周里见过最可爱的小家伙！来吧，到我这儿来。',
    character: '',
    options: [
        { text: '不要', response: '那我只好來硬的了' , character: npc, next: 'A' },
        { text: '順從', response: '好孩子'          , character: npc, next: 'B' }
    ],
    action:'cleanText'
};

gameData.A= {
    key: 'A',
    message: '你被女人強行帶走了。',
    character: '',
    options: [
        { text: '抵抗', response: '你拼命掙扎...', character: npc, next: 'end' },
        { text: '放棄', response: '你無力地放棄了抵抗...', character: npc, next: 'end' }
    ],
    action:''
};

gameData.B= {
    key: 'B',
    message: '你順從地跟著女人走了。',
    character: '',
    options: [
        { text: '問她要帶你去哪', response: '她微笑著說...', character: npc, next: 'end' },
        { text: '保持沉默', response: '你默默跟著她走...', character: npc, next: 'end' }
    ],
    action:''
};

gameData.end= {
    key: 'end',
    message: '故事結束。',
    character: '',
    options: [
        { text: '...?', response: '...', character: '', next: 'ch2_start' }
    ],
    action:''
};
