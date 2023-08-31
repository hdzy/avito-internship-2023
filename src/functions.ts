import {Game, GameWithTimer} from "./types";

/**
 * Функция, которая сохраняет переданный объект типа Game в sessionStorage,
 * добавляя поля таймер, равное текущему времени плюс пять минут
 */
export const savePage = (game: Game) => {

    const gameWithTimer: GameWithTimer = {
        ...game,
        timer: Date.now() + (1000 * 60 * 5)
    }

    let gamesLocal = window.sessionStorage.getItem('games')

    if (gamesLocal) {
        let gamesArray: GameWithTimer[] = JSON.parse(gamesLocal);

        const isSaved = gamesArray.find(e => e.id === gameWithTimer.id);

        console.log(isSaved);

        if (!isSaved) {
            gamesArray.push(gameWithTimer);
            const newArr = JSON.stringify(gamesArray);

            window.sessionStorage.setItem('games', newArr);
        }  else {
            gamesArray.forEach(e => e.timer = e.id === isSaved.id ? gameWithTimer.timer : e.timer);

            window.sessionStorage.setItem('games', JSON.stringify(gamesArray));
        }

    } else {
        const newArr = JSON.stringify([gameWithTimer]);

        window.sessionStorage.setItem('games', newArr);
    }
}

/**
 * Функция, которая находит игру по ключу в sessionStorage или возвращает undefined
 */
export  const getGameFromStorage = (id: number) => {

    let gamesLocal = window.sessionStorage.getItem('games');

    if (gamesLocal) {
        let gamesArray: GameWithTimer[] = JSON.parse(gamesLocal);
        const game = gamesArray.find(e => e.id === id);

        if (game) delete game.timer

        return game as Game;
    } else return;
}