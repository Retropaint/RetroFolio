import { Component, OnInit, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPopover, IonButton, IonCard, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-expertise-popover',
  templateUrl: './expertise-popover.component.html',
  styleUrls: ['./expertise-popover.component.scss'],
  standalone: true,
  imports: [IonContent, IonPopover, IonCard]
})
export class ExpertisePopoverComponent  implements OnInit {

	@Input('trigger') trigger!: string;	
	@Input('content') content!: string;	

  	constructor() { }

  	ngOnInit() {}
}
