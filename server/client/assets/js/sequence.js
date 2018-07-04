"use strict";

class sequence
{
	constructor ()
	{
		this.funcs = {};
		this.order = [];
		this.objs = [];
		this.current = 0;
	}

	add (key, func)
	{
		if(!func || this.funcs [key])
			return this;

		this.funcs [key] = func;
		this.order.push (key);

		return this;
	}

	run ()
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

	next (canNext)
	{
		let name = this.order [this.current];
		console.log ("sequence " + this.current + "." + name + (canNext ? " ok" : " fail"));
		if (!canNext)
			return;

		this.current += 1;		
		this.run ();
	}
}