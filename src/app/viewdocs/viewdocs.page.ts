import { Component, OnInit } from '@angular/core';
import { DocumentViewer } from '@awesome-cordova-plugins/document-viewer/ngx';

@Component({
  selector: 'app-viewdocs',
  templateUrl: './viewdocs.page.html',
  styleUrls: ['./viewdocs.page.scss'],
})
export class ViewdocsPage implements OnInit {

  constructor(private document: DocumentViewer) {
    
   }

  ngOnInit() {
  }

}
