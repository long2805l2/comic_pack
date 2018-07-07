"use strict";

export class Sequence
{
	private funcs = {};
	private order: string[];
	private objs = {};
	private current: number;

	constructor ()
	{
		this.funcs = {};
		this.order = [];
		this.objs = {};
		this.current = 0;
	}

	public add (key:string, func)
	{
		if(!func || this.funcs [key])
			return this;

		this.funcs [key] = func;
		this.order.push (key);

		return this;
	}

	public run ()
	{
		if (this.current >= this.order.length)
		{
			console.log ("sequence completed");
			return;
		}

		let name = this.order [this.current];
		let func = this.funcs [name];
		console.log ("sequence " + this.current + "." + name + " start");
		func (this.objs, this.next.bind (this));
	}

	public next (canNext:boolean)
	{
		let name = this.order [this.current];
		console.log ("sequence " + this.current + "." + name + (canNext ? " ok" : " fail"));
		if (!canNext)
			return;

		this.current += 1;		
		this.run ();
	}
}