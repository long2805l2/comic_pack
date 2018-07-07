import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';

// , HttpHeaders, HttpParams 
import { API } from '../../lib/api';
import { protos } from '../../lib/protos';

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit
{
	data: protos.comic;

	constructor(private http: HttpClient)
	{
	}

	ngOnInit()
	{
		let THIS = this;
		this.load (function (data:protos.comic)
		{
			THIS.data = data;
			let viewer = document.getElementById ("viewer");

			for (let i:number = 0; i < data.gallery.length; i++)
			{
				let image = data.gallery [i];
				let element:HTMLImageElement = document.createElement ("img");
				let canvas = document.createElement ("canvas");
				element.onload = function ()
				{
					canvas.id = image.name;
					canvas.className = "viewer_image";
					canvas.width = element.naturalWidth;
					canvas.height = element.naturalHeight;
					
					let context = canvas.getContext('2d');
					context.drawImage (element, 0, 0);
				}
				element.src = "data:image/png;base64, " + image.url;
				viewer.appendChild (canvas);
			}
		});
	}

	load (callback)
	{
		const body = {
			cmd: "test"
		};

		const httpOptions = {
			headers: new HttpHeaders({'Content-Type': 'application/octet-stream'}),
			reportProgress: true,
			responseType: 'arraybuffer' as 'json',
			withCredentials: false
		};
		
		this.http.post<ArrayBuffer>("http://localhost:4200/request", body, httpOptions)
		.subscribe (
			function(buffer:ArrayBuffer){
				let message = API.responseDecode (buffer);
				if (callback && message)
					callback (message.comic);
			},
			function (error) {
				console.log (error.error.error);
			},
			function () {
				console.log ("complete");
			}
		);
	}
}
