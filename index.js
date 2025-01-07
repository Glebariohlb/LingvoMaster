const TelegramBot = require('node-telegram-bot-api');

require('dotenv').config();

const token = process.env.TOKEN;

console.log('Bot has been started ....')

const bot = new TelegramBot(token, {
  polling: true
});


bot.onText(/\/start/, msg => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, `Привет, ${msg.from.first_name}! В этом боте ты сможешь проверить свой словарный запас. Чтобы узнать парвила напиши коамнду /rules`)
})


bot.onText(/\/rules/, msg => {

  const chatId = msg.chat.id;

  const html = `
<strong>Вот правила, ${msg.from.first_name}:</strong>
<pre>1. Я отправляю тебе редкое слово, а внизу будут варианты ответа.
2. Чтобы ответить, тебе нужно нажать кнопку с правильным вариантом ответа.
3. Далее я напишу тебе, если твой ответ неправильный и скажу правильное значение.
4. Для более комфортной игры, переверни телефон в горизонтальное положение
5. Чтобы начать, введи /go.
6. Удачи!!</pre>
  `
  bot.sendMessage(chatId, html, {
    parse_mode: 'HTML'
  })
})


bot.onText(/\/levels/, msg => {
  const chatId = msg.chat.id;

  const html2 = `
<strong>Уровни:</strong>
<pre>/go - первый уровень
/2 - второй уровень
/3 - третий уровень
/4 - четвёртый уровень
/5 - пятый уровень
/6 - шестой уровень
/7 - седьмой уровень
/8 - восьмой уровень
/9 - девятый уровень
/10- десятый уровень
/11 - одиннадцатый уровень
/12 - двенадцатый уровень
/13 - тренадцатый уровень
/14 - четырнадцатый уровень
/15 - пятнадцатый уровень
/16 - шестнадцатый уровень
/17 - семнадцатый уровень
/18 - восемнадцатый уровень
/19 - девятнадцатый уровень
/20 - двадцатый уровень</pre>
  `

  bot.sendMessage(chatId, html2, {
    parse_mode: 'HTML'
  })
})


bot.onText(/\/go/, msg => {

  const chatId = msg.chat.id

  bot.sendMessage(chatId, 'Что означает слово Софа?', {

    reply_markup: {
      inline_keyboard: [
        [{text:'Термин', callback_data: 'termin'},
          {text:'Диван', callback_data: 'divan'}],
          
        [{text:'Нет такого слова', callback_data: 'non word1'},
          {text:'Оружие', callback_data: 'gun'}]
      ]
    }
  })

  bot.on('callback_query', (callbackQuery) => {
    const ChatId = callbackQuery.message.chat.id;
    const action = callbackQuery.data
    
    if (action === 'divan') {
      bot.sendMessage(ChatId, 'Все верно!! Но почему?\nСлово "Софа" обозначало диван потому, что раньше русский и французский языки были тесно связаны\nследующий уровень /2')
    }
  
    else if (action === 'termin') {
      bot.sendMessage(ChatId, 'Это неверный ответ, слово "Софа" раньше обозначало диван. Сейчас слово почти не используется\nследующий уровень /2')
    }

    else if (action === 'non word1') {
      bot.sendMessage(ChatId, 'Это неверный ответ, слово "Софа" раньше обозначало диван. Сейчас слово почти не используется\nследующий уровень /2')
    }

    else if (action === 'gun') {
      bot.sendMessage(ChatId, 'Это неверный ответ, слово "Софа" раньше обозначало диван. Сейчас слово почти не используется\nследующий уровень /2')
    }
  })
  
})


bot.onText(/\/2/, msg => {
  
  const chatId = msg.chat.id

  bot.sendMessage(chatId, 'Что означает слово Алтын?', {

    reply_markup: {
      inline_keyboard: [
        [{text:'Монета', callback_data: 'moneta'},
          {text:'Водка', callback_data: 'vodka'}],
          
        [{text:'Нет такого слова', callback_data: 'non word2'},
          {text:'Символ в математике', callback_data: 'symbol in math'}]
      ]
    }
  })

  bot.on('callback_query', (callbackQuery) => {
    const ChatId = callbackQuery.message.chat.id;
    const action2 = callbackQuery.data;
  
    if(action2 === 'moneta') {
      bot.sendMessage(ChatId, 'Да, это слово означало старинную серебряную монету достоинством в три копейки\nследующий уровень /3')
    }
  
    else if (action2 === 'vodka') {
      bot.sendMessage(ChatId, 'К сожалению нет.\nЭто слово означало старинную серебряную монету достоинством в три копейки.\nследующий уровень /3')
    }

    else if (action2 === 'non word2') {
      bot.sendMessage(ChatId, 'К сожалению нет.\nЭто слово означало старинную серебряную монету достоинством в три копейки.\nследующий уровень /3')
    }

    else if (action2 === 'symbol in math') {
      bot.sendMessage(ChatId, 'К сожалению нет.\nЭто слово означало старинную серебряную монету достоинством в три копейки.\nследующий уровень /3')
    }
  })

})


bot.onText(/\/3/, msg => {

  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Что означает слово Баженый?', {

    reply_markup: {
      inline_keyboard: [
        [{text: 'Любимый', callback_data:'lub'},
          {text: 'Странный', callback_data:'crazy'}],

        [{text: 'Высокий', callback_data: 'visokiy'},
          {text: 'Красивый', callback_data: 'krasiviy'}]
      ]
    }
  })

  bot.on('callback_query', (callbackQuery) => {
    const ChatId = callbackQuery.message.chat.id;
    const action3 = callbackQuery.data

    if (action3 === 'lub') {
      bot.sendMessage(ChatId, 'Это правда так, слово "Баженый" означало любимый от слова бажать(любить, желать)\nследующий уровень /4') 
    }

    else if (action3 === 'crazy') {
      bot.sendMessage(ChatId, 'Не верно, слово "Баженый" означало любимый от слова бажать(любить, желать)\nследующий уровень /4') 
    }

    else if (action3 === 'visokiy') {
      bot.sendMessage(ChatId, 'Не верно, слово "Баженый" означало любимый от слова бажать(любить, желать)\nследующий уровень /4') 
    }

    else if (action3 === 'krasiviy') {
      bot.sendMessage(ChatId, 'Не верно, слово "Баженый" означало любимый от слова бажать(любить, желать)\nследующий уровень /4') 
    }

  })

})


bot.onText(/\/4/, msg => {

  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Что означает слово Баталия?', {
    reply_markup: {
      inline_keyboard: [
        [{text: 'Город в Европе', callback_data: 'gorod'},
          {text: 'Разговор в небрежной форме', callback_data: 'razgovor'}],

        [{text: 'Сражение', callback_data: 'batalia'},
          {text: 'Четыре снопа овса', callback_data:'snop ovsa'}]
      ]
    }
  })

  bot.on('callback_query', (callbackQuery) => {
    const ChatId = callbackQuery.message.chat.id;
    const action4 = callbackQuery.data;

    if (action4 === 'gorod') {
      bot.sendMessage(ChatId, 'Жаль, но это не так. Баталия означала битву или какое-либо сражение\nследующий уровень /5')
    }

    else if (action4 === 'razgovor') {
      bot.sendMessage(ChatId, 'Жаль, но это не так. Баталия означала битву или какое-либо сражение\nследующий уровень /5')
    }

    else if (action4 === 'batalia') {
      bot.sendMessage(ChatId, 'Это действительно так! Слово "баталия" означала битву или какое-либо сражение\nследующий уровень /5')
    }

    else if (action4 === 'snop ovsa') {
      bot.sendMessage(ChatId, 'Жаль, но это не так. Баталия означала битву или какое-либо сражение\nследующий уровень /5')
    }

  })
})


bot.onText(/\/5/, msg => {
  const chatId = msg.chat.id

  bot.sendMessage(chatId, 'Что означает слово Зоконоломный?', {
    reply_markup: {
      inline_keyboard: [
        [{text: 'Крестьянин, который не выполнял все требования', callback_data: 'krest'},
          {text: 'Невольный', callback_data: 'non vola'}],
        [{text: 'Переастал сориться', callback_data: 'non sora'},
          {text: 'Противозаконный', callback_data: 'non zakon'}]
      ]
    }
  })

  bot.on('callback_query', (callbackQuery) => {
    const ChatId = callbackQuery.message.chat.id;
    const action5 = callbackQuery.data;

    if (action5 === 'krest') {
      bot.sendMessage(ChatId, 'Это неправильный ответ. Слово Законоломный означало прилагательное Противозаконный \nследующий уровень /6')
    }

    else if (action5 === 'non vola') {
      bot.sendMessage(ChatId, 'Это неправильный ответ. Слово Законоломный означало прилагательное Противозаконный \nследующий уровень /6')
    }

    else if (action5 === 'non sora') {
      bot.sendMessage(ChatId, 'Это неправильный ответ. Слово Законоломный означало прилагательное Противозаконный \nследующий уровень /6')
    }

    else if (action5 === 'non zakon') {
      bot.sendMessage(ChatId, 'У тебя хороший словарный запас.\nДа, слово Законоломный означало прилагательное Противозаконный \nследующий уровень /6')
    }
  })
})


bot.onText(/\/6/, msg => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Что означает слово Зря', {
    reply_markup: {
      inline_keyboard: [
        [{text: 'Напрасно', callback_data: 'naprasno'}, 
          {text: 'Зреть(видеть)', callback_data: 'videt'}],

        [{text: 'Презирать', callback_data: 'prezirat'}, 
          {text: 'Раньше не было такого слова', callback_data: 'non word6'}]
      ]
    }
  })

  bot.on('callback_query', (callbackQuery) => {
    const ChatId = callbackQuery.message.chat.id;
    const action6 = callbackQuery.data;

    if (action6 === 'naprasno') {
      bot.sendMessage(ChatId, 'В наше время это слово действительно означает Напрасно, но к сожалению ответ неправильный. Раньше это слово означало Видеть.\nследующий уровень /7')
    }

    else if (action6 === 'videt') {
      bot.sendMessage(ChatId, 'Действительно!!\nЭто слово означало Видеть(зреть).\nСледующий уровень /7')
    }

    else if (action6 === 'prezirat') {
      bot.sendMessage(ChatId, 'К сожалению нет, раньше это слово означало Видеть(Зреть).\nследующий уровень /7')
    }

    else if (action6 === 'non word6') {
      bot.sendMessage(ChatId, 'Ответ неправильный, раьнше это слово означало Видеть(зреть).\nследующий уровень /7')
    }
  })
})


bot.onText(/\/7/, msg => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Что означает слово Персть', {
    reply_markup: {
      inline_keyboard: [
        [{text: 'Пыль, прах', callback_data: 'pil'}, 
          {text: 'Кольцо из золота', callback_data: 'colco zoloto'}],

        [{text: 'Длина в один метр', callback_data: 'dlina metr'}, 
          {text: 'Рыба из диких вод', callback_data: 'riba dikih vod'}]
      ]
    }
  })

  bot.on('callback_query', (callbackQuery) => {
    const ChatId = callbackQuery.message.chat.id;
    const action7 = callbackQuery.data;

    if (action7 === 'pil') {
      bot.sendMessage(ChatId, 'Верно! Персть - это пыль или прах\nследующий уровень /8')
    }

    else if (action7 === 'colco zoloto') {
      bot.sendMessage(ChatId, 'Не верный ответ. Персть - это пыль или прах\nследующий уровень /8')
    }

    else if (action7 === 'dlina metr') {
      bot.sendMessage(ChatId, 'К сожалению нет, Персть - это пыль или прах\nследующий уровень /8')
    }

    else if (action7 === 'riba dikih vod') {
      bot.sendMessage(ChatId, 'Ответ неправильный, Персть - это пыль или прах\nследующий уровень /8')
    }
  })
})


bot.onText(/\/8/, msg => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Что означает слово Пласти', {
    reply_markup: {
      inline_keyboard: [
        [{text: 'Пластовые куски рыбы', callback_data: 'plasti_ribi'}, 
          {text: 'Снасти раньше', callback_data: 'snasti'}],
        [{text: 'Места где водится много рыбы', callback_data: 'mesta_s_riboy'}, 
          {text: 'Нет такого слова', callback_data: 'non_word_8'}]
      ]
    }
  })

  bot.on('callback_query', (callbackQuery) => {
    const ChatId = callbackQuery.message.chat.id;
    const action8 = callbackQuery.data;

    if (action8 === 'plasti_ribi') {
      bot.sendMessage(ChatId, 'Верно! Пласти - это высушенный пластовые куски рыбы.\nследующий уровень /9')
    }

    else if (action8 === 'snasti') {
      bot.sendMessage(ChatId, 'Жаль, но нет\nЭто слово означало высушенный пластовые куски рыбы.\nСледующий уровень /9')
    }

    else if (action8 === 'mesta_s_riboy') {
      bot.sendMessage(ChatId, 'К сожалению нет, раньше это слово означало высушенный пластовые куски рыбы.\nследующий уровень /9')
    }

    else if (action8 === 'non_word_8') {
      bot.sendMessage(ChatId, 'Ответ неправильный, раьнше это слово означало высушенный пластовые куски рыбы.\nследующий уровень /9')
    }
  })
})


bot.onText(/\/9/, msg => {
  const chatId = msg.chat.id

  bot.sendMessage(chatId, 'Что означает слово Персты', {
    reply_markup: {
      inline_keyboard: [
        [{text: 'Ругательство', callback_data: 'rugatelstvo'}, 
          {text: 'Пальцы', callback_data: 'palci'}],

        [{text: 'Фамилия(знатная)', callback_data: 'last_name'}, 
          {text: 'Выдуманное слово', callback_data: 'non_word9'}]
      ]
    }
  })

  bot.on('callback_query', (callbackQuery) => {
    const ChatId = callbackQuery.message.chat.id;
    const action9 = callbackQuery.data;

    if (action9 === 'rugatelstvo') {
      bot.sendMessage(ChatId, 'Не верно, раньше это слово означало Пальцы.\nследующий уровень /10')
    }

    else if (action9 === 'palci') {
      bot.sendMessage(ChatId, 'Действительно!!\nЭто слово означало Пальцы.\nСледующий уровень /10')
    }

    else if (action9 === 'last_name') {
      bot.sendMessage(ChatId, 'К сожалению нет, раньше это слово означало Пальцы.\nследующий уровень /10')
    }

    else if (action9 === 'non_word9') {
      bot.sendMessage(ChatId, 'Ответ неправильный, раьнше это слово означало Пальцы.\nследующий уровень /10')
    }
  })
})


bot.onText(/\/10/, msg => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Что означает слово Позорище', {
    reply_markup: {
      inline_keyboard: [
        [{text: 'Усиленная форма слова Позор', callback_data: 'pozor'}, 
          {text: 'Не знаю', callback_data: 'ne_znayu'}],

        [{text: 'Зрелище', callback_data: 'zrelihe'}, 
          {text: 'Наказание за воровство', callback_data: 'nakazinie_vorovstvo'}]
      ]
    }
  })

  bot.on('callback_query', (callbackQuery) => {
    const ChatId = callbackQuery.message.chat.id;
    const action10 = callbackQuery.data;

    if (action10 === 'pozor') {
      bot.sendMessage(ChatId, 'Не верно, раньше это слово означало Зрелище(представление).\nследующий уровень /11')
    }

    else if (action10 === 'zrelihe') {
      bot.sendMessage(ChatId, 'Действительно!!\nЭто слово означало Зрелище(представление).\nСледующий уровень /11')
    }

    else if (action10 === 'ne_znayu') {
      bot.sendMessage(ChatId, 'Жаль, давай расскажу!\nРаньше это слово означало Зрелище(представление).\nследующий уровень /11')
    }

    else if (action10 === 'nakazinie_vorovstvo') {
      bot.sendMessage(ChatId, 'Ответ неправильный, раьнше это слово означало Зрелище(представление).\nследующий уровень /11')
    }
  })
})


bot.onText(/\/11/, msg => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Что означает слово Бесстудный', {
    reply_markup: {
      inline_keyboard: [
        [{text: 'Бесстыдный', callback_data: 'bstd'}, 
          {text: 'Человек, которому никогда не холодно', callback_data: 'non_freeze'}],
        [{text: 'Не знаю', callback_data: 'idk'}, 
          {text: 'Человек, никогда не простужавшийся', callback_data: 'non_prostuda'}]
      ]
    }
  })

  bot.on('callback_query', (callbackQuery) => {
    const ChatId = callbackQuery.message.chat.id;
    const action11 = callbackQuery.data;

    if (action11 === 'bstd') {
      bot.sendMessage(ChatId, 'Это правда так!\nРаньше это слово означало Бесстыдного человека.\nследующий уровень /12')
    }

    else if (action11 === 'non_freeze') {
      bot.sendMessage(ChatId, 'Неверно.\nЭто слово означало Бесстыдного человека.\nСледующий уровень /12')
    }

    else if (action11 === 'idk') {
      bot.sendMessage(ChatId, 'Жаль, давай объясню!\nРаньше это слово означало Бесстыдного человека.\nследующий уровень /12')
    }

    else if (action11 === 'non_prostuda') {
      bot.sendMessage(ChatId, 'Ответ неправильный, раьнше это слово означало Бесстыдного человека.\nследующий уровень /12')
    }
  })
})


bot.onText(/\/12/, msg => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Что означает слово Бабка', {
    reply_markup: {
      inline_keyboard: [
        [{text: 'Бабушка', callback_data: 'grandma'}, 
          {text: 'Четыре снопа овса', callback_data: 'snop_ovsa'}],
        [{text: 'Монета ценой в одну копейку', callback_data: 'one_kopeyka'}, 
          {text: 'Девушка, которая выглядит старо', callback_data: 'old_women'}]
      ]
    }
  })

  bot.on('callback_query', (callbackQuery) => {
    const ChatId = callbackQuery.message.chat.id;
    const action12 = callbackQuery.data;
    
    if (action12 === 'grandma') {
        bot.sendMessage(ChatId, 'Неа\nРаньше это слово означало Четыре снопа овса, колосьями вверх.\nследующий уровень /13')
    }

    else if (action12 === 'snop_ovsa') {
      bot.sendMessage(ChatId, 'Действительно!!\nРаньше это слово означало четыре снопа овса колосьями вверх, накрытые пятым\nследующий уровень /13')
    }

    else if (action12 === 'one_kopeyka') {
      bot.sendMessage(ChatId, 'Не правда\nРаньше это слово означало Четыре снопа овса, колосьями вверх.\nследующий уровень /13')
    }

    else if (action12 === 'old_women') {
      bot.sendMessage(ChatId, 'Нет\nРаньше это слово означало Четыре снопа овса, колосьями вверх.\nследующий уровень /13')
    }
  })
})


bot.onText(/\/13/, msg => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Что означает слово Базланить', {
    reply_markup: {
      inline_keyboard: [
        [{text: 'Подлизываться', callback_data: 'podliza'}, 
          {text: 'Не знаю', callback_data: 'i_d_k'}],
        [{text: 'Кричать', callback_data: 'krik'}, 
          {text: 'Заниматься ерундой', callback_data: 'erunda'}]
      ]
    }
  })

  bot.on('callback_query', (callbackQuery) => {
    const ChatId = callbackQuery.message.chat.id;
    const action13 = callbackQuery.data;
    
    if (action13 === 'podliza') {
        bot.sendMessage(ChatId, 'Неа\nРаньше это слово означало Реветь или кричать.\nследующий уровень /14')
    }

    else if (action13 === 'krik') {
      bot.sendMessage(ChatId, 'Действительно!!\nРаньше это слово означало Реветь или кричать\nследующий уровень /14')
    }

    else if (action13 === 'i_d_k') {
      bot.sendMessage(ChatId, 'Не правда\nРаньше это слово означало Реветь или кричать.\nследующий уровень /14')
    }

    else if (action13 === 'erunda') {
      bot.sendMessage(ChatId, 'Нет\nРаньше это слово означало Реветь или кричать.\nследующий уровень /14')
    }
  })
})


bot.onText(/\/14/, msg => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Что означает слово Баской', {
    reply_markup: {
      inline_keyboard: [
        [{text: 'Красивый(нарядный)', callback_data: 'beautiful'}, 
          {text: 'Странный', callback_data: 'stranniy'}],
        [{text: 'Осторожный', callback_data: 'warning'}, 
          {text: 'Не знаю', callback_data: 'i_d_k_3'}]
      ]
    }
  })

  bot.on('callback_query', (callbackQuery) => {
    const ChatId = callbackQuery.message.chat.id;
    const action14 = callbackQuery.data;

    if (action14 === 'beautiful') {
      bot.sendMessage(ChatId, 'Действительно!.\nРаньше это слово означало Красивый(нарядный)\nследующий уровень /15')
    }

    else if (action14 === 'stranniy') {
      bot.sendMessage(ChatId, 'Нет.\nРаньше это слово означало Красивый(нарядный)\nследующий уровень /15')
    }

    else if (action14 === 'warning') {
      bot.sendMessage(ChatId, 'Неа.\nРаньше это слово означало Красивый(нарядный)\nследующий уровень /15')
    }

    else if (action14 === 'i_d_k_3') {
      bot.sendMessage(ChatId, 'Сейчас расскажу!\nРаньше это слово означало Красивый(нарядный)\nследующий уровень /15')
    }
  })
})


bot.onText(/\/15/, msg => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Что означает слово Бирюк', {
    reply_markup: {
      inline_keyboard: [
        [{text: 'Охотник', callback_data: 'hunter'}, 
          {text: 'Лесник', callback_data: 'lesnik'}],
        [{text: 'Зверь', callback_data: 'zver'}, 
          {text: 'Подозрительный крестьянин', callback_data: 'podozritelen'}]
      ]
    }
  })

  bot.on('callback_query', (callbackQuery) => {
    const ChatId = callbackQuery.message.chat.id;
    const action15 = callbackQuery.data;

    if (action15 === 'hunter') {
      bot.sendMessage(ChatId, 'Нет\nРаньше это слово означало Зверь(медведь)\nследующий уровень /16')
    }

    else if (action15 === 'lesnik') {
      bot.sendMessage(ChatId, 'Неа\nРаньше это слово означало Зверь(медведь)\nследующий уровень /16')
    }

    else if (action15 === 'ZVER') {
      bot.sendMessage(ChatId, 'Все верно!\nРаньше это слово означало Зверь(медведь)\nследующий уровень /16')
    }

    else if (action15 === 'podozritelen') {
      bot.sendMessage(ChatId, 'Это не так\nРаньше это слово означало Зверь(медведь)\nследующий уровень /16')
    }
  })
})


bot.onText(/\/16/, msg => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Что означает слово Гарчик', {
    reply_markup: {
      inline_keyboard: [
        [{text: 'Без понятия', callback_data: 'idk4'}, 
          {text: 'Горшок', callback_data: 'gorhok'}],
        [{text: 'Подгаревшее блюдо', callback_data: 'podgar_bludo'}, 
          {text: 'Овраг', callback_data: 'ovrag'}]
      ]
    }
  })

  bot.on('callback_query', (callbackQuery) => {
    const ChatId = callbackQuery.message.chat.id;
    const action16 = callbackQuery.data;

    if (action16 === 'idk4') {
      bot.sendMessage(ChatId, 'Жаль, давай объясню\nРаньше это слово означало Горшок\nследующий уровень /17')
    }

    else if(action16 === 'gorhok') {
      bot.sendMessage(ChatId, 'Верно!\nРаньше это слово означало Горшок\nследующий уровень /17')
    }

    else if (action16 === 'podgar_bludo') {
      bot.sendMessage(ChatId, 'Это не так\nРаньше это слово обозначало Горшок\nследующий уровень /17')
    }

    else if (action16 === 'ovrag') {
      bot.sendMessage(ChatId, 'Нет\nРаньше это слово означало горшок\nследующий уровень /17')
    }
  })
})