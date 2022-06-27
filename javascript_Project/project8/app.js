const $startScreen = document.getElementById('start-screen');
const $gameMenu = document.getElementById('game-menu');
const $battleMenu = document.getElementById('battle-menu');
const $heroName = document.getElementById('hero-name');
const $heroLevel = document.getElementById('hero-level');
const $heroHp = document.getElementById('hero-hp');
const $heroXp = document.getElementById('hero-xp');
const $heroAtt = document.getElementById('hero-att');
const $monsterName = document.getElementById('monster-name');
const $monsterHp = document.getElementById('monster-hp');
const $monsterXp = document.getElementById('monster-xp');
const $monsterAtt = document.getElementById('monster-att');
const $message = document.getElementById('message');

class Unit {
    constructor(game, name, hp, att, xp) {
        this.game = game;
        this.name = name;
        this.maxHp = hp;
        this.hp = hp;
        this.xp = xp;
        this.att = att;
    }

    attack(target) {
        target.hp -= this.att;
    }
}

class Hero extends Unit{
    constructor(game, name) {
        super(game, name, 100, 10, 0);
        this.lev = 1;
    }

    attack(target) {
        super.attack(target);
    }

    heal(monster) {
        this.hp += 20;
        this.hp -= monster.att;
    }

    getXp(xp) {
        this.xp += xp;
        if(this.xp >= this.lev*15) {
            this.xp -= this.lev*15;
            this.lev += 1;
            this.maxHp += 5;
            this.att += 5;
            this.hp = this.maxHp;
            this.game.showMessage(`레벨업!! 레벨${this.lev}`);
        }
    }
}

class Monster extends Unit {
    constructor(game, name, hp, att, xp) {
        super(game, name, hp, att, xp);
    }
}

class Game {
    constructor(name) {
        this.monster = null;
        this.hero = null;
        this.monsterList = [
            { name: '슬라임', hp: 25, att: 10, xp: 10 },
            { name: '스켈레톤', hp: 50, att: 15, xp: 20 },
            { name: '마왕', hp: 150, att: 35, xp: 50 },
        ];
        this.start(name);
    }

    start(name) {
        $gameMenu.addEventListener('submit', this.gameMenuInput);
        $battleMenu.addEventListener('submit', this.battleMenuInput);
        this.changeScreen('game');
        this.hero = new Hero(this, name);
        this.upDateHeroState();
    }

    upDateHeroState() {
        const { hero } = this;
        if (hero === null) {
            $heroName.textContent = '';
            $heroLevel.textContent = '';
            $heroHp.textContent = '';
            $heroXp.textContent = '';
            $heroAtt.textContent = '';
            return;
        }
        $heroName.textContent = hero.name + "님!!!";
        $heroLevel.textContent = `${hero.lev}Lev`;
        $heroHp.textContent = `HP : ${hero.hp} / ${hero.maxHp}`;
        $heroXp.textContent = `Xp : ${hero.xp} / ${15 * hero.lev}`;
        $heroAtt.textContent = `ATT : ${hero.att}`;
    }

    upDateMonsterState() {
        const { monster } = this;
        if (monster === null) {
            $monsterName.textContent = '';
            $monsterHp.textContent = '';
            $monsterAtt.textContent = '';
            return;
        }
        $monsterName.textContent = monster.name;
        $monsterHp.textContent = `HP : ${monster.hp} / ${monster.maxHp}`;
        $monsterAtt.textContent = `ATT : ${monster.att}`;
    }

    changeScreen(screen) {
        if (screen === 'game') {
            $startScreen.style.display = 'none';
            $gameMenu.style.display = 'block';
            $battleMenu.style.display = 'none';
        } else if (screen === 'battle') {
            $startScreen.style.display = 'none';
            $gameMenu.style.display = 'none';
            $battleMenu.style.display = 'block';
        } else if (screen === 'start') {
            $startScreen.style.display = 'block';
            $gameMenu.style.display = 'none';
            $battleMenu.style.display = 'none';
        }
    }

    showMessage(text) {
        $message.textContent = text;
    }

    gameMenuInput = (event) => {
        event.preventDefault();
        const input = event.target['menu-input'].value;
        console.log(input === '3');
        if (input === '1') {
            this.changeScreen('battle');
            const randomNum = Math.floor(Math.random() * this.monsterList.length);
            const monster = this.monsterList[randomNum];
            this.monster = new Monster(this, monster.name, monster.hp, monster.att, monster.xp);
            this.upDateMonsterState();
            this.showMessage(`${this.monster.name}출현!!`)
        } else if (input === '2') {

        } else if (input === '3') {
            this.changeScreen('start');
            $heroName.textContent = '';
            $heroLevel.textContent = '';
            $heroHp.textContent = '';
            $heroXp.textContent = '';
            $heroAtt.textContent = '';
            return;
        }
    }

    battleMenuInput = (event) => {
        event.preventDefault();
        const input = event.target['battle-input'].value;
        if (input === '1') {
            const { hero, monster } = this;
            hero.attack(monster);
            monster.attack(hero);
            if(hero.hp <= 0) {
                this.showMessage(`${hero.lev} 레벨에서 전사. 새 주인공을 생성하세요.`);
                this.quit();
            } else if(monster.hp <= 0) {
                this.showMessage(`몬스터 사냥 성공, ${monster.xp} 경험치를 얻었습니다.`);
                hero.getXp(monster.xp);
                this.monster = null;
                this.changeScreen('game');
            } else {
                this.showMessage(`${hero.att} 만큼 데미지를 주고, ${monster.att} 만큼 맞았습니다.`);
            }
            this.upDateHeroState();
            this.upDateMonsterState();
        } else if (input === '2') {
        } else if (input === '3') {
            this.changeScreen('game');
            $monsterName.textContent = '';
            $monsterHp.textContent = '';
            $monsterAtt.textContent = '';
        }
    }

    quit() {
        this.hero = null;
        this.monster = null;
        this.upDateHeroState();
        this.upDateMonsterState();
        $gameMenu.removeEventListener('submit', this.gameMenuInput);
        $battleMenu.removeEventListener('submit', this.battleMenuInput);
        this.changeScreen('start');
        game = null;
    }
}

let game = null;
function subminEvet(event) {
    event.preventDefault();
    const name = event.target['name-input'].value;
    game = new Game(name);
}

$startScreen.addEventListener('submit', subminEvet);


