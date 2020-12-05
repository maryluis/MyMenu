function menuForWeek(obj, yourdish){
    let menuStr = "Ваше меню на эту неделю \n\n";
    let menuIngr = [];
    let yourIngr = "Для этого вам потребуется \n\n";
    for (let key in obj){
        key = obj[key]
        for (let i = 0; i < key.howMany; i++){
            yourdish = key.dishes[Math.floor(Math.random() * key.dishes.length)]
                menuStr += `${yourdish.name} \n`
                menuIngr.push(yourdish.ingredients)
        }
    }



    for (let key of menuIngr){

        for (let Ingr of key) {

            if(!yourIngr.includes(Ingr.name)){
                Ingr.count = 0
                             
                Ingr.count += Ingr.howMany;
                yourIngr += `${Ingr.name} ${Ingr.count} ${Ingr.ofWhat} \n`
            } else {

                let name = Ingr.name
                let sub = (yourIngr.substr(yourIngr.indexOf(`${name}`, )))
                sub = (sub.substr(0, sub.indexOf(`\n`)))
                Ingr.count = sub.substr(sub.indexOf(` `), )
                Ingr.count = (+(Ingr.count.substr(1, Ingr.count.indexOf(` ${Ingr.ofWhat}`)))) + Ingr.howMany

                yourIngr = yourIngr.replace(sub, `${Ingr.name} ${Ingr.count} ${Ingr.ofWhat}`) 
            }


        }
         
}
    menuStr += '\n\n' + yourIngr
    console.log(menuStr)
    
}
menuForWeek(fullMenu)