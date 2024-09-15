import { Component, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPopover, IonButton, IonCard, IonImg } from '@ionic/angular/standalone';
import { ExpertisePopoverComponent } from '../expertise-popover/expertise-popover.component';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonPopover, IonButton, IonCard, IonImg, ExpertisePopoverComponent],
})
export class HomePage {
	@ViewChild('expertise-popover') popover: any;
	isPopoverOpen: boolean = false;
	
	constructor(
	) {}

	async openPopover(e: Event) {
	}
}
