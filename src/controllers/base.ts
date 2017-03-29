import * as Phaser from 'phaser';
import Signal = Phaser.Signal;

export abstract class BaseController {
	protected signals: {[key: number]: Signal} = {};

	abstract init(): void;
	abstract update(): void;

	subscribe(event: number, callback: Function) {
		this._createSignalIfNew(event);
		this.signals[event].add(callback);
	}
	
	dispatch(event: number, payload: any) {
		this._createSignalIfNew(event);
		this.signals[event].dispatch(payload);
	}
	
	private _createSignalIfNew(event: number) {
		if (!this.signals[event])
			this.signals[event] = new Signal();
	}
}