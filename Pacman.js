import { OBJECT_TYPE, DIRECTIONS } from './setup';

class Pacman {
    constructor(speed, startPos) {
        this.pos = startPos;
        this.speed = speed;
        this.dir = null;
        this.timer = 0;
        this.powerPill = false;
        this.rotaion = true;
    }

    shouldMove() {
        if (!this.dir) return false;

        if (this.timer === this.speed) {
            this.timer = 0;
            return true;
        }
        this.timer++;
    }

    getNextMove(objectExist) {
        let nextMovePos = this.pos + this.dir.movement;

        if (
            objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
            objectExist(nextMovePos, OBJECT_TYPE.GHOSTLAIR)
        ) {
            nextMovePos = this.pos;
        }

        return { nextMovePos, direction: this.dir };
    }

    makeMove() {
        const classTORemove = [OBJECT_TYPE.PACMAN];
        const classTOAdd = [OBJECT_TYPE.PACMAN];

        return { classTORemove, classTOAdd }; 
    }

    setNewPos(nextMovePos) {
        this.pos = nextMovePos;
    }

    handleKeyInput(e, objectExist) {
        // console.log(e);
        let dir;
        if (e.keycode >= 37 && e.keycode <= 40) {
            dir = DIRECTIONS[e.key];
        } else {
            return;
        }

        const nextMovePos = this.pos + this.dir.movement;

        if (objectExist(nextMovePos, OBJECT_TYPE.WALL)) return;
        this.dir = dir;
    }
}

export default Pacman;