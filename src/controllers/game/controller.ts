import * as Phaser from 'phaser'
import Game = Phaser.Game;
import {GameConfig} from "../../config";
import Signal = Phaser.Signal;
import {BaseController} from "../base";

export class GameController extends BaseController {
	game: Game;
	state: {[key:string]: any}; // global state obj accessible to other controllers
	config: GameConfig;

	constructor(game:Game, config: GameConfig) {
		super();
		
		this.config = config;
		this.game = game;
		this.state = {
		};
		
		this.signals = {};
		
		for(let i in [0,1,2,3,4]) {
			this.subscribe(parseInt(i), _ => console.log(GameEvent[parseInt(i)], _));
		}
	}

	init(){ }

	update() {
	}
}

export enum GameEvent {
	GridCellActivated,
	UnitSelected,
	UnitMoveActionSelected,
	UnitMoved,
	CancelAction
}