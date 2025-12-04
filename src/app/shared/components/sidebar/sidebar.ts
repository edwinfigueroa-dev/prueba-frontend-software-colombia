import { Component, HostListener, inject, input, output } from '@angular/core';
import { Router } from '@angular/router';
import { AngularModule } from '@app/shared/modules';

// Material
import { MatIconModule } from '@angular/material/icon';

export interface MenuItem {
  key: string;
  label: string;
  icon: string;
  route?: string;
  children?: MenuItem[];
}


@Component({
  selector: 'app-sidebar',
  imports: [AngularModule, MatIconModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  private _router = inject(Router);

  toggleStates: { [key: number]: boolean } = {};
  isCollapsed = input<boolean>(false);
  isHovered = input<boolean>(false);

  eventChangeStatusSidebar = output<boolean>();
  eventChangeStatusHoverSidebar = output<boolean>();

  menuItems: MenuItem[] = [
    {
      key: 'heroes',
      label: 'Heroes',
      icon: 'person',
      route: '/heroes'
    },
  ];

  ngOnInit() {
    this.showOptionCurrentMenu();
    this.ensureMobileCollapsed();
  }

  showOptionCurrentMenu() {
    this.menuItems.forEach((item, index) => {
      if (item.children) {
        item.children.forEach((child, childIndex) => {
          if (child.route === this._router.url) this.toggleStates[index] = true;
        });
      }

      if (item.route === this._router.url) this.toggleStates[index] = true;
    });
  }

  toggleSubmenu(index: number) {
    this.toggleStates[index] = !this.toggleStates[index];
  }

  toggleSidebar() {
    this.eventChangeStatusSidebar.emit(!this.isCollapsed());
  }

  onMouseEnter() {
    if (this.isCollapsed()) this.eventChangeStatusHoverSidebar.emit(true);
  }

  onMouseLeave() {
    if (this.isCollapsed()) this.eventChangeStatusHoverSidebar.emit(false);
  }

  onItemClicked() {
    try {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
      if (isMobile) {
        this.eventChangeStatusSidebar.emit(true);
        this.eventChangeStatusHoverSidebar.emit(false);
      }
    } catch { }
  }

  private ensureMobileCollapsed() {
    try {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
      if (isMobile && !this.isCollapsed()) {
        this.eventChangeStatusSidebar.emit(true);
        this.eventChangeStatusHoverSidebar.emit(false);
      }
    } catch { }
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.ensureMobileCollapsed();
  }
}
