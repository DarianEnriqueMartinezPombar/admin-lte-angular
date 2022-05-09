import {
	trigger,
	transition,
	style,
	animate,
	state,
} from '@angular/animations';

export const slideLeft = trigger('slideLeft', [
	state('in', style({ transform: 'translateX(0)' })),
	transition('void => *', [
		style({ transform: 'translateX(100%)' }),
		animate(100),
	]),
	transition('* => void', [
		style({ transform: 'translateX(0)' }),
		animate(100),
	])
]);

export const slideRight = trigger('slideRight', [
	state('in', style({ transform: 'translateX(0)' })),
	transition('void => *', [
		style({ transform: 'translateX(-100%)' }),
		animate(100),
	]),
	transition('* => void', [
		style({ transform: 'translateX(0)' }),
		animate(100),
	])
]);

export const slideUp = trigger('slideUp', [
	state('in', style({ transform: 'translateY(0)' })),
	transition('void => *', [
		style({ transform: 'translateY(100%)' }),
		animate(100),
	]),
	transition('* => void', [
		style({ transform: 'translateY(0)' }),
		animate(100),
	])
]);

export const slideDown = trigger('slideDown', [
	state('in', style({ transform: 'translateY(0)' })),
	transition('void => *', [
		style({ transform: 'translateY(-100%)' }),
		animate(100),
	]),
	transition('* => void', [
		style({ transform: 'translateY(0)' }),
		animate(100),
	])
]);
