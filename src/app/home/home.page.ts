import { Component, ViewChild, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPopover, IonButton, IonCard, IonImg } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonPopover, IonButton, IonCard, IonImg],
  providers: [HttpClient]
})
export class HomePage implements OnInit {
	expertise: any;
	projects: any;
	contacts: any;

	constructor(
		private http: HttpClient
	) {}

	ngOnInit() {
		document.body.classList.toggle('dark', false);
		this.http.get('assets/data.json').subscribe((data: any) => {
			this.expertise = data.expertise;
			this.projects = data.projects;
			this.contacts= data.contacts;
		})
	}
}
