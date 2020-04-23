import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import RouteZoom from '@shared/animations/route-zoom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [RouteZoom],
})
export class AppComponent {
  getAnimationData(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
