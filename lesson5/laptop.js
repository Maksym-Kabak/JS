// Тобі треба зробити компютерний клуб з горою компів.
//Має бути загальний клас компа від якого всі будуть наслідуватись.
// Мають бути стаціонрані компи, ноутбуки, ультрабуки, моноблоки і так далі.
// В деяких компів має бути метод який оновляє йому хартеристики.
// Деякі компи мають бути з жостики параметрами, типу ультрабуків в яких ти не можеш нічого міняти.
//На кожному компі можна пограти ігри.
//Гра також має бути створена як клас з жанорм і симтемними вимогами.
//Гру ти передаєш як аргумент в метод. І якшо гра занадто важка для компа, ти маєш бачити шо її не запустити тут.
// Якшо вона 1 в 1 як комп, то має бути повідомлення, що гра лагає. Якшо все чудово, то ти будеш грати в неї без проблем.
// Ну і мають бути компи на яких заборонено грати ігри.
// Наприклад моноблоки або сервери, які використовуються тільки для роботи


class Computer {
    constructor(type, RAM, CPU, OS, HDD, Video) {
        this.type = type;
        this.RAM = RAM;
        this.CPU = CPU;
        this.OS = OS;
        this.HDD = HDD;
        this.Video = Video;
    }


    play(game) {
        if(this.type === 'server'){
            document.write(`<h1>ГРАТИ НЕ МОЖНА ЦЕ СЕРВЕР!!!</h1>`)
        }else
        if (this.RAM < game.RAM && this.HDD < game.HDD) {
            document.write(`<h2>${this.type} слабий комп треба обновити!</h2>`);

        }else
         if (this.RAM === game.RAM && this.HDD === game.HDD){
            document.write(`<h2>${this.type} грати можна, але буде лагати обновись и буде КАЙФ</h2>`);

        }else
        if(this.RAM > game.RAM && this.HDD > game.HDD ){
            document.write(`<h2>${this.type}  ГРА полетить це РАКЕТААААААААА!!!!!!</h2>`);

        }

    }

}
class ClubComp extends Computer{
    constructor(type, RAM, CPU, OS, HDD, Video) {
        super(type, RAM, CPU, OS, HDD, Video);
    }
    update(upRam, upVideo, upHDD) {
        if (this.type === 'ultraBook') {
            document.write(`<h2>${this.type}  НЕ МОЖНА ОБНОВИТИ!!!</h2>`);

        } else {
            this.RAM += upRam;
            this.Video += upVideo;
            this.HDD += upHDD;
        }
    }

}

class Game {
    constructor(genre, CPU, RAM, HDD, Video) {
        this.genre = genre;
        this.RAM = RAM;
        this.CPU = CPU;
        this.HDD = HDD;
        this.Video = Video;
    }

}

let dota2 = new Game('MOBA',2.26,10,8,50);

let pentiumOne = new ClubComp('PC',2,2.22,'Windows',3,10);
let alienware = new ClubComp('laptop',20,3.22,'OS',100,10);
let samsung = new ClubComp('laptop',10,2.26,'Windows 98',8,50);
let zenBook = new ClubComp('ultraBook',10,4,'XP',200,50);
let server = new ClubComp('server',100,48,'Ubunta',2000,1000);




zenBook.update(100,100,100);

pentiumOne.update(100,100,100);
// pentiumOne.play(dota2)
// alienware.play(dota2);
// samsung.play(dota2);
// server.play(dota2);
