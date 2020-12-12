function inredients(name, howMany, ofWhat, type) {
    this.name = name;
    this.howMany = howMany;
    this.ofWhat = ofWhat;
    this. type = type;
}
/// Типы: 1 - овощи/фрукты
    /// 2 - мясо
    ///3 - молочка
    ///4 - консервы
    ///5 - крупы
    ///6 - приправы
    ///7 - другое
function dish(name, ingredients){
    this.name = name;
    this.ingredients = ingredients;
}



let borsh = new dish("Борщ", 
    [new inredients("Капуста", 1, "шт", 1),
    new inredients("Мясо_говядины", 700, "гр", 2),
    new inredients("Буряк", 1, "шт", 1),
    new inredients("Морковь", 1, "шт", 1),
    new inredients("Чеснок", 5, "зубчиков", 1),
    new inredients("Лук", 2, "шт", 1),
    new inredients("Картошка", 4, "шт", 1),
    new inredients("Томатная_паста", 1, "шт", 7),
    new inredients("Сметана", 300, "гр", 3)])




    let greenBorsh = new dish("Зеленый борщ", 
    [new inredients("Мясо_говядины", 700, "гр", 2),
    new inredients("Картошка", 4, "шт", 1), 
    new inredients("Морковь", 1, "шт", 1), 
    new inredients("Лук", 2, "шт", 1), 
    new inredients("Щавель/Шпинат", 3, "пучка", 1), 
    new inredients("Сметана", 300, "гр", 3),
    new inredients("Яйца", 8, "шт", 7)
])

let solyanka = new dish("Солянка", 
    [new inredients("Мясо_говядины", 700, "гр", 2),
    new inredients("Маслины", 1, "банка", 4),
    new inredients("Лимон", 1, "шт", 1),
    new inredients("Салями", 100, "гр", 2),
    new inredients("Охотничьи_колбаски", 100, "гр", 2),
    new inredients("Морковь", 1, "шт", 1),
    new inredients("Лук", 1, "шт", 1),
    new inredients("Сметана", 250, "гр", 3),
    new inredients("Балык", 100, "гр", 2),
    new inredients("Маринованные_огурцы", 200, "гр", 4)])

let bulion = new dish("Бульйон",
    [new inredients("Мясо ", 700, "гр", 2),
    new inredients("Лук", 1, "шт", 1),
    new inredients("Гречка", 150, "гр", 5)])

let soupHarcho = new dish("Суп Харчо",
    [new inredients("Мясо_говядины", 700, "гр", 2),
    new inredients("Грецкие_орехи", 150, "гр", 7),
    new inredients("Аджика", 1, "банка", 7),
    new inredients("Соус_Ткемали", 1, "банка", 4),
    new inredients("Чеснок", 1, "головка", 1),
    new inredients("Картошка", 5, "шт", 1),
    new inredients("Лук", 1, "шт", 1),
    new inredients("Рис", 150, "гр", 5),
    new inredients("Томатная_паста", 1, "шт", 7),
    new inredients("Перец_чили", 1, "шт", 1),
    new inredients("Кинза", 2, "пучка", 1),
])

let soupgrechka = new dish("Гречневый суп",
    [new inredients("Мясо_говядины", 700, "гр", 2),
    new inredients("Картошка", 5, "шт", 1),
    new inredients("Лук", 1, "шт", 1),
    new inredients("Морковь", 1, "шт", 1),
    new inredients("Гречка", 200, "гр", 5)
    ])


let okroshka = new dish("Окрошка",
    [new inredients("Мясо_говядины", 700, "гр", 2),
    new inredients("Яйца", 6, "шт", 7),
    new inredients("Огурцы", 4, "шт", 1),
    new inredients("Картошка", 6, "шт", 1),
    new inredients("Сметана", 500, "гр", 3),
    new inredients("Лимонная_кислота", 1, "ч.л", 6),
    new inredients("Горчица", 1, "Ст.л", 7),
    new inredients("Зеленый_лук", 1, "пучок", 1),
    new inredients("Укроп", 1, "пучок", 1)
    ])

let sausage = new dish("Сосиски в тесте",
    [new inredients("Сосиски", 10, "шт", 2),
    new inredients("Слоеное_тесто", 500, "гр", 7)
    ])

let pelmen = new dish("Пельмени",
    [new inredients("Пельмени", 1, "пачка", 7)])

let varen = new dish("Вареники",
    [new inredients("Вареники", 1, "пачка", 7)])




let fastPizza = new dish("Готовая пицца",
    [new inredients("Готовая_пицца", 1, "шт", 7)])

let plov = new dish("Плов",
    [new inredients("Мясо_свинины", 700, "гр", 2),
    new inredients("Лук", 1, "шт", 1),
    new inredients("Приправа_для_плова", 2, "ст.л", 6),
    new inredients("Томаты", 3, "шт", 1),
    new inredients("Морковь", 1, "шт", 1),
    new inredients("Чеснок", 1, "головка", 1),
    new inredients("Рис", 400, "гр", 5)
    ])

let beaf = new dish("Запеченая говядина",
    [new inredients("Мясо_говядины", 1000, "гр", 2),
    new inredients("Соевый_соус", 4, "ст.л", 7),
    new inredients("Базилик", 2, "ст.л", 1),
    new inredients("Рис", 300, "гр", 5),
    new inredients("Яблочный_уксус", 2, "ст.л", 7)])

let frySausage = new dish("Запеченые колбаски",
    [new inredients("Колбаски", 1, "Пачка", 2),
    new inredients("Салат_айсберг", 1, "Пучок", 1),
    new inredients("Перец_болгарский", 1, "шт", 1),
    new inredients("Огурец", 1, "шт", 1),
    new inredients("Томат", 1, "шт", 1)])

let kotlyeta = new dish("Котлетки",
    [new inredients("Фарш_куриный", 800, "гр", 2),
    new inredients("Лук", 1, "шт", 1),
    new inredients("Болгарский_перец", 1, "шт", 1),
    new inredients("Яйца", 1, "шт", 7),
    new inredients("Морковь", 1, "шт", 1),
    new inredients("Картошка", 8, "шт", 1),
    new inredients("Сливочное_масло", 50, "гр", 3)
    ])

let svin = new dish("Свинина в кисло-сладком соусе",
    [new inredients("Мясо_свинины", 700, "гр", 2),
    new inredients("Рис", 300, "гр", 5),
    new inredients("Лук", 1, "шт", 5),
    new inredients("Морковь", 1, "шт", 1),
    new inredients("Консервированные_ананасы", 1, "б", 4),
    new inredients("Болгарский_перец", 1, "шт", 1),
    new inredients("Чеснок", 4, "зубчиков", 1),
    new inredients("Томатная_паста", 1, "шт", 7),
    new inredients("Крахмал", 3, "ст.л", 7),
    new inredients("Яблочный_уксус", 5, "ст.л", 7)
    ])

let odbivn = new dish("Отбивные",
    [new inredients("Мясо ", 1000, "гр", 2),
    new inredients("Картошка", 12, "шт", 1)])

let zucchini = new dish("Фаршированные кабачки",
    [new inredients("Фарш_куриный", 700, "гр", 2),
    new inredients("Лук", 1, "шт", 1),
    new inredients("Кабачки", 4, "шт", 1),
    new inredients("Томаты", 2, "шт", 1),
    new inredients("Сметана", 200, "гр", 3),
    new inredients("Сыр", 150, "гр", 3)
    ])

let jarkBeaf = new dish("Жаркое из говядины",
    [new inredients("Картошка", 6, "шт", 1),
    new inredients("Лук", 1, "шт", 1),
    new inredients("Грибы", 300, "гр", 1),
    new inredients("Морковь", 2, "шт", 1)
    ])

let hashlama = new dish("Хашлама",
    [new inredients("Мясо_говядины", 700, "гр", 2),
    new inredients("Морковь", 2, "шт", 1),
    new inredients("Баклажаны", 3, "шт", 1),
    new inredients("Лук", 3, "шт", 1),
    new inredients("Томаты", 4, "шт", 1),
    new inredients("Базилик", 2, "пучка", 1),
    new inredients("Болгарский перец", 2, "шт", 1),
    new inredients("Вино_красное_сухое", 1, "бут", 7)
    ])

let chickenPie = new dish("Пирог с курицей",
    [new inredients("Фарш_куриный", 300, "гр", 2),
    new inredients("Лук", 2, "шт", 1),
    new inredients("Слоеное_тесто", 500, "гр", 7),
    new inredients("Яйца", 1, "шт", 7)
    ])

let tefteli = new dish("Тефтели", 
    [new inredients("Фарш_куриный", 700, "гр", 2),
    new inredients("Лук", 1, "шт", 1),
    new inredients("Морковь", 1, "шт", 1),
    new inredients("Рис", 200, "гр", 5),
    new inredients("Томатная_паста", 1, "шт", 7),
    new inredients("Сметана", 300, "гр", 3)
    ])

let fryChicken = new dish("Запеченые бедрышки", 
    [new inredients("Куриные_бедрышки", 1000, "гр", 2),
    new inredients("Картошка", 15, "шт", 1),
    new inredients("Соевый_соус", 5, "ст.л", 7),
    ])

let fullMenu = {
    soup: {
        howMany: 1,
        dishes: [borsh, greenBorsh, solyanka, bulion, soupHarcho, odbivn, soupgrechka, okroshka],
     },

    mainDishes: {
        howMany: 2,
        dishes:[plov, svin, jarkBeaf, hashlama],
    },
    
    fryMany: {
        howMany: 1,
        dishes: [kotlyeta, odbivn, fryChicken]
    },

    farsh: {
        howMany: 1,
        dishes: [zucchini, chickenPie, tefteli]
    },

    fastFood: { 
        howMany: 1,
        dishes: [pelmen, varen, fastPizza, sausage, frySausage],
    }
}
         ////Бульйон с фрикадельками
         ///Грибной суп
         ///Гороховый суп
         ///с галушками
    // Гедлибже, 
    /// Перцы, Тбилисси
    ///рулеты с рыбой
    ///
    /// Лазанья




////Поехали

function menuForWeek(obj, yourdish){

    let menuStr = "Ваше меню на эту неделю \n\n";
    let menuIngr = [];
    let yourIngr = "Для этого вам потребуется \n\n";

    ///Выбираем вид блюда
    for (let key in obj){
        key = obj[key]

        ///Смотрим сколько этого вида нужно и рандомно выбираем

        for (let i = 0; i < key.howMany; i++){
            yourdish = key.dishes[Math.floor(Math.random() * key.dishes.length)]
            ///Добавляем имя блюда в строку
                menuStr += `${yourdish.name} \n`

                ///добавляем ингредиенты в отдельный массив
                for(let ingr of yourdish.ingredients) {
                  
                    menuIngr.push(ingr)
                }
                ///Тут вырезаем выбранное блюдо, чтобы оно не повторялось
                key.dishes.splice(key.dishes.indexOf(yourdish), 1)

        }
    }
////Сортируем продукты по типу (молочка, мясо итд)

    for(let i = 0; i < menuIngr.length;i++){
        let k = 0;
        for(let j = 1; j < menuIngr.length; j++) {

            menuIngr.sort(function (firstType, secondType) {
                if (firstType.type > secondType.type) {
                    return 1;
                  }
                  if (firstType.type < secondType.type) {
                    return -1;
                  }
                  return 0;      
            })
            
        }
    }


    ///Перебираем массив обьектов из ингредиентов и добавляем, если видим одинаковые и создаем общую строку
    for (let key of menuIngr){

        if(!yourIngr.includes(key.name)){
            key.count = 0                        
            key.count += key.howMany;
            yourIngr += `${key.name} ${key.count} ${key.ofWhat} \n`

        } else {
            let name = key.name
            let sub = (yourIngr.substr(yourIngr.indexOf(`${name}`, )))
            sub = (sub.substr(0, sub.indexOf(`\n`)))
            key.count = sub.substr(sub.indexOf(` `), )
            key.count = (+(key.count.substr(1, key.count.indexOf(` ${key.ofWhat}`)))) + key.howMany

            yourIngr = yourIngr.replace(sub, `${key.name} ${key.count} ${key.ofWhat}`) 

        }
         
    }
    menuStr += '\n\n' + yourIngr
    console.log(menuStr)
    
}
menuForWeek(fullMenu)