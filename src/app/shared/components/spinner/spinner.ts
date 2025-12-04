import { Component, Input, OnInit } from '@angular/core';
import { AngularModule } from '@app/shared/modules';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
    selector: 'app-spinner',
    imports: [AngularModule, MatProgressSpinnerModule],
    templateUrl: './spinner.html',
    styleUrls: ['./spinner.scss'],
})
export class Spinner  implements OnInit {
  @Input() fullPage: boolean = false;
  @Input() color: 'white' | 'green' = 'green';
  @Input() diameter: number = 100;

  constructor() { }

  ngOnInit() { }

}
