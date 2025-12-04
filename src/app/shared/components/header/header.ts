import { Component, input, output } from '@angular/core';
import { AngularModule } from '@app/shared/modules';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [AngularModule, MatIconModule, MatToolbarModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isCollapsed = input<boolean>(false);
  eventButtonMenu = output<boolean>();

  toggleSidebar() {
    this.eventButtonMenu.emit(!this.isCollapsed());
  }
}
