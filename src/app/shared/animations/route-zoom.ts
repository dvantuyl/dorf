import {
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query,
} from '@angular/animations';

// Routable animations
export default trigger('routeAnimation', [
  transition('dorf <=> games', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
      }),
    ]),
    query(':enter', [style({ transform: 'scale(0)' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('1s ease-in', style({ transform: 'scale(100)' })),
      ]),
      query(':enter', [
        animate('1s ease-in', style({ transform: 'scale(1)' })),
      ]),
    ]),
    query(':enter', animateChild()),
  ]),
]);
