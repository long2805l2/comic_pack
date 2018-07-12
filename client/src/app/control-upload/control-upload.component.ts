import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-control-upload',
	templateUrl: './control-upload.component.html',
	styleUrls: ['./control-upload.component.css']
})
export class ControlUploadComponent implements OnInit
{
	fileTypes = [
		'image/jpeg',
		'image/png'
	];

	listFiles = [];
	
	inputElement;
	listElements;
	previewElement;

	constructor()
	{
	}

	ngOnInit()
	{
		let THIS = this;
		this.listElements  = document.createElement('ol');

		this.inputElement = document.getElementById('image_uploads');
		this.inputElement.addEventListener('change', function updateImageDisplay (e)
		{
			var curFiles = THIS.inputElement.files;
			for(var i = 0; i < curFiles.length; i++)
			{
				var file = curFiles[i];
				THIS.addFile (file);
			}
		}, false);

		this.previewElement = document.getElementById('image_preview');
		this.previewElement.appendChild(this.listElements);

		let preview = this.previewElement;
		preview.addEventListener('dragenter', function handleDragEnter (e)
		{
			e.stopPropagation();
			e.preventDefault();
			preview.classList.add('dragover');
		}, false);
		preview.addEventListener('dragleave', function handleDragLeave (e)
		{
			e.stopPropagation();
			e.preventDefault();
			preview.classList.remove('dragover');
		}, false);
		preview.addEventListener('dragover', function handleDragOver (e)
		{
			e.stopPropagation();
			e.preventDefault();
			e.dataTransfer.dropEffect = 'copy';
		}, false);
		preview.addEventListener('drop', function handleFileSelect(e)
		{
			e.stopPropagation();
			e.preventDefault();
			preview.classList.remove('dragover');
			
			let files = e.dataTransfer.files; 
			for (var i = 0; i < files.length; i++)
			{
				var file = files [i];
				THIS.addFile (file);
			}
		}, false);
	}
	
	addFile (file)
	{
		var image = document.createElement('img');
		image.src = window.URL.createObjectURL(file);

		var para = document.createElement('p');
		para.textContent = file.name;

		var listItem = document.createElement('li');
		listItem.appendChild(image);
		listItem.appendChild(para);

		// let img = new Image ();
		// img.onload = () =>
		// {
		// 	var canvas = document.createElement('canvas');
		// 	canvas.width = img.naturalWidth;
		// 	canvas.height = img.naturalHeight;
		// 	canvas.getContext('2d').drawImage(img, 0, 0);
		// 	this.listFiles.push ({
		// 		name: file.name,
		// 		url: canvas.toDataURL('image/png')
		// 	});
		// };
		// img.src = image.src;
		
		this.listElements.appendChild(listItem);
	}
	
	returnFileSize(number)
	{
		if(number < 1024)
			return number + 'bytes';
		if(number < 1048576)
			return (number/1024).toFixed(1) + 'KB';
		return (number/1048576).toFixed(1) + 'MB';
	}
}
