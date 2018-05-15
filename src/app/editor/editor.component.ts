import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit
{
  comic = {
    header: {
      title: "Infinity War (2018)",
      cover: "",
      tags: ["English", "Mavel", "Superhero"],
    },
    contents: []
  };
  
  constructor() { }

  ngOnInit()
  {
  }
  
	abortHandler(e)
	{
		alert('File read Canceled');
	}

	errorHandler (e)
	{
		switch(e.target.error.code)
		{
			case e.target.error.NOT_FOUND_ERR:
				alert('File Not Found!');
				break;
			case e.target.error.NOT_READABLE_ERR:
				alert('File is not readable');
				break;
			case e.target.error.ABORT_ERR:
				break; // noop
			default:
				alert('An error occurred reading this file.');
		}
	}

	// Display the progress of FileReading.
	progressHandler(e)
	{
		if (e.lengthComputable)
		{
			var loaded = Math.round((e.loaded / e.total) * 100);
		}
	}

	// Event after loading a file completed (Append thumbnail.)
	loadHandler(theFile)
	{
	  var editor = this;
		return function(e)
		{
		  editor.comic.contents.push ({
		    name: theFile.name,
		    url: e.target.result
		  });
		  console.log (editor.comic.contents);
		}
	}
  
  onDrop(event: any)
  {
    event.preventDefault();
    event.stopPropagation();
    var files = event.dataTransfer.files;
    for (var i = 0; i < files.length; i++) 
    {
      var file = files[i];
      if (!file.type.match("image.*"))
        continue;
      
  		var reader = new FileReader();
  		reader.onerror = this.errorHandler;
  		reader.onabort = this.abortHandler;
  		reader.onprogress = this.progressHandler;
  		reader.onload = this.loadHandler(file);
  		reader.readAsDataURL(file);
    }
  }
  
  onDragEnter(evt)
  {
    evt.preventDefault();
    evt.stopPropagation();
  }
  
  onDragOver(evt)
  {
    evt.preventDefault();
    evt.stopPropagation();
  }

  onDragLeave(evt)
  {
    evt.preventDefault();
    evt.stopPropagation();
  }
}