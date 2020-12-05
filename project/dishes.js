function inredients(name, howMany, ofWhat) {
    this.name = name;
    this.howMany = howMany;
    this.ofWhat = ofWhat;
}
function dish(name, ingredients){
    this.name = name;
    this.ingredients = ingredients;
}


let borsh = new dish("Борщ", 
    [new inredients("Капуста", 1, "шт"),
    new inredients("Мясо_говядины", 700, "гр"),
    new inredients("Буряк", 1, "шт"),
    new inredients("Морковь", 1, "шт"),
    new inredients("Чеснок", 5, "зубчиков"),
    new inredients("Лук", 2, "шт"),
    new inredients("Картошка", 4, "шт"),
    new inredients("Томатная_паста", 1, "шт"),
    new inredients("Сметана", 300, "гр")])



let greenBorsh = new dish("Зеленый борщ", 
    [new inredients("Мясо_говядины", 700, "гр"),
    new inredients("Картошка", 4, "шт"), 
    new inredients("Морковь", 1, "шт"), 
    new inredients("Лук", 2, "шт"), 
    new inredients("Щавель/Шпинат", 3, "пучка"), 
    new inredients("Сметана", 300, "гр"),
    new inredients("Яйца", 8, "шт")
])

let solyanka = new dish("Солянка", 
    [new inredients("Мясо_говядины", 700, "гр"),
    new inredients("Маслины", 1, "б"),
    new inredients("Лимон", 1, "шт"),
    new inredients("Салями", 100, "гр"),
    new inredients("Охотничьи_колбаски", 100, "гр"),
    new inredients("Морковь", 1, "шт"),
    new inredients("Лук", 1, "шт"),
    new inredients("Сметана", 250, "гр"),
    new inredients("Балык", 100, "гр"),
    new inredients("Маринованные_огурцы", 200, "гр")])

let bulion = new dish("Бульйон",
    [new inredients("Мясо_говядины ", 700, "гр"),
    new inredients("Лук", 1, "шт"),
    new inredients("Гречка", 150, "гр")])

let soupHarcho = new dish("Суп Харчо",
    [new inredients("Мясо_говядины", 700, "гр"),
    new inredients("Грецкие_орехи", 150, "гр"),
    new inredients("Аджика", 1, "б"),
    new inredients("Соус_Ткемали", 1, "б"),
    new inredients("Чеснок", 7, "зубчиков"),
    new inredients("Картошка", 5, "шт"),
    new inredients("Лук", 1, "шт"),
    new inredients("Рис", 150, "гр"),
    new inredients("Томатная_паста", 1, "шт"),
    new inredients("Перец_чили", 1, "шт"),
    new inredients("Кинза", 2, "пучка"),
])

let soupgrechka = new dish("Гречневый суп",
    [new inredients("Мясо_говядины", 700, "гр"),
    new inredients("Картошка", 5, "шт"),
    new inredients("Лук", 1, "шт"),
    new inredients("Морковь", 1, "шт"),
    new inredients("Гречка", 200, "гр")
    ])


let okroshka = new dish("Окрошка",
    [new inredients("Мясо_говядины", 700, "гр"),
    new inredients("Яйца", 6, "шт"),
    new inredients("Огурцы", 4, "шт"),
    new inredients("Картошка", 6, "шт"),
    new inredients("Сметана", 500, "гр"),
    new inredients("Лимонная_кислота", 1, "ч.л"),
    new inredients("Горчица", 1, "ст.л"),
    new inredients("Зеленый_лук", 1, "пучок"),
    new inredients("Укроп", 1, "пучок")
    ])

let sausage = new dish("Сосиски в тесте",
    [new inredients("Сосиски", 10, "шт"),
    new inredients("Слоеное_тесто", 500, "гр")
    ])

let pelmen = new dish("Пельмени",
    [new inredients("Пельмени", 1, "пачка")])

let varen = new dish("Вареники",
    [new inredients("Вареники", 1, "пачка")])

let fastPizza = new dish("Готовая пицца",
    [new inredients("Готовая_пицца", 1, "шт")])

let plov = new dish("Плов",
    [new inredients("Мясо_свинины", 700, "гр"),
    new inredients("Лук", 1, "шт"),
    new inredients("Приправа_для_плова", 2, "ст.л"),
    new inredients("Томаты", 3, "шт"),
    new inredients("Морковь", 1, "шт"),
    new inredients("Чеснок", 7, "зубчиков"),
    new inredients("Рис", 400, "гр")
    ])

let beaf = new dish("Запеченая говядина",
    [new inredients("Мясо_говядины", 1000, "гр"),
    new inredients("Соевый_соус", 4, "ст.л"),
    new inredients("Базилик", 2, "ст.л"),
    new inredients("Рис", 300, "гр"),
    new inredients("Яблочный_уксус", 2, "ст.л")])

let frySausage = new dish("Запеченые колбаски",
    [new inredients("Колбаски", 1, "Пачка"),
    new inredients("Салат_айсберг", 1, "Пучок"),
    new inredients("Болгарский_перец", 1, "шт"),
    new inredients("Огурец", 1, "шт"),
    new inredients("Томат", 1, "шт")])

let kotlyeta = new dish("Котлетки",
    [new inredients("Фарш_куриный", 800, "гр"),
    new inredients("Лук", 1, "шт"),
    new inredients("Болгарский_перец", 1, "шт"),
    new inredients("Яйца", 1, "шт"),
    new inredients("Морковь", 1, "шт"),
    new inredients("Картошка", 8, "шт"),
    new inredients("Сливочное_масло", 50, "гр")
    ])

let svin = new dish("Свинина в кисло-сладком соусе",
    [new inredients("Мясо_свинины", 700, "гр"),
    new inredients("Рис", 300, "гр"),
    new inredients("Лук", 1, "шт"),
    new inredients("Морковь", 1, "шт"),
    new inredients("Консервированные_ананасы", 1, "б"),
    new inredients("Болгарский_перец", 1, "шт"),
    new inredients("Чеснок", 4, "зубчиков"),
    new inredients("Томатная_паста", 1, "шт"),
    new inredients("Крахмал", 3, "ст.л"),
    new inredients("Яблочный_уксус", 5, "ст.л")

    ])


let odbivn = new dish("Отбивные",
    [new inredients("Мясо_любое", 1000, "гр"),
    new inredients("Картошка", 12, "шт")])

let zucchini = new dish("Фаршированные кабачки",
    [new inredients("Фарш_куриный", 700, "гр"),
    new inredients("Лук", 1, "шт"),
    new inredients("Кабачки", 4, "шт"),
    new inredients("Томаты", 2, "шт"),
    new inredients("Сметана", 200, "гр"),
    new inredients("Сыр", 150, "гр")
    


    ])

let fullMenu = {
    soup: {
        howMany: 1,
        dishes: [borsh, greenBorsh, solyanka, bulion, soupHarcho, odbivn, soupgrechka, okroshka],
     },

    mainDishes: {
        howMany: 2,
        dishes:[plov, svin],
    },
    
    fryMany: {
        howMany: 1,
        dishes: [kotlyeta, odbivn,]
    },

    farsh: {
        howMany: 1,
        dishes: [zucchini]
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
    ///  Жаркое говядины, Гедлибже, 
    ///Хашлама, Перцы, тефтели, кабачки, Тбилисси
    ///Запеченые бедрышки, 
    ///
    /// Лазанья
