import { animate, group, keyframes, query, stagger, state, style, transition, trigger } from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState', [
  state('default', style({
    border: '2px solid #B2B6FF'
  })),
  state('highlighted', style({
    border: '4px solid #B2B6FF',
    filter: 'brightness(92%)'
  })),
  transition('default => highlighted', [
    animate('200ms ease-out', style({
      transform: 'scale(1.02)'
    })),
    animate(200)
  ])
])


export const shownStateTrigger = trigger('shownState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(300, style({
      opacity: 1
    }))
  ]),
  transition(':leave', [
    animate(300, style({
      opacity: 0
    }))
  ])
])


export const checkButtonTrigger = trigger('checkButton', [
  transition('* => checked', [
    animate('400ms ease-in', style({
      transform: 'scale(0.4)'
    }))
  ])
])

export const filterTrigger = trigger('filterAnimation', [
  transition(':enter', [
    style({ opacity: 0, width: 0 }),
    animate('800ms ease-out', keyframes([
      style({ opacity: 0, width: 0, offset: 0 }),
      style({ opacity: 0.5, width: '*', offset: 0.5 }),
      style({ opacity: 1, width: '*', offset: 1 })
    ]))
  ]),
  transition(':leave', [
    animate('800ms cubic-bezier(.13,.9,.8,.1)',
      style({ opacity: 0, width: 0 })
    )
  ])
])

export const formButtonTrigger = trigger('formButton', [
  transition('invalid => valid', [
    query('#botao-salvar', [
      group([
        animate(200, style({
          backgroundColor: '#63B77C'
        })),
        animate(200, style({
          transform: 'scale(1.1)'
        }))
      ]),
      animate(200, style({
        transform: 'scale(1)'
      }))
    ]),
    query('#botao-salvar', [
      transition('valid => invalid', [
        group([
          animate(600, style({
            backgroundColor: '#6C757D'
          })),
          animate(200, style({
            transform: 'scale(1.1)'
          }))
        ])
      ]),
      animate(200, style({
        transform: 'scale(1)'
      }))
    ])
  ])
])

export const shakeTrigger = trigger('shakeAnimation', [
  transition('* => *', [
    query('input.ng-invalid:focus', [
      animate('0.5s', keyframes([
        style({ border: '2px solid red' }),
        style({ transform: 'translateX(0)' }),
        style({ transform: 'translateX(-10px)' }),
        style({ transform: 'translateX(10px)' }),
        style({ transform: 'translateX(-10px)' }),
        style({ transform: 'translateX(10px)' }),
        style({ transform: 'translateX(-10px)' }),
        style({ transform: 'translateX(10px)' }),
        style({ transform: 'translateX(0)' }),
      ]))
    ], { optional: true })
  ])
])

export const listStateTrigger = trigger('listState', [
  transition('* => *', [
    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)',
      }),
      stagger(100, [
        animate('500ms ease-out', keyframes([
          style({
            opacity: 1,
            transform: 'translateX(15%)',
            offset: 0.7,
          }),
          style({
            opacity: 1,
            transform: 'translateX(0)',
            offset: 1,
          })
        ]))
      ])
    ], { optional: true }),
  ])
])