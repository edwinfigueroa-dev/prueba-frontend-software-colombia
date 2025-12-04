import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularModule } from '@app/shared/modules';
import { Sidebar } from "@app/shared/components/sidebar/sidebar";
import { Header } from '@app/shared/components/header/header';

@Component({
  selector: 'app-features',
  imports: [AngularModule, RouterOutlet, Header, Sidebar],
  templateUrl: './features.html',
  styleUrl: './features.scss'
})
export class Features {

  isCollapsedSignal = signal<boolean>(false);
  isHoveredSignal = signal<boolean>(false);

  toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
  }
}
