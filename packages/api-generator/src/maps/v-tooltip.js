module.exports = {
  'v-tooltip': {
    slots: [
      {
        name: 'default',
        props: undefined,
      },
      {
        name: 'activator',
        props: {
          attrs: '{ role: string, aria-haspopup: boolean, aria-expanded: string }',
          on: '{ [eventName]: eventHandler }',
          value: 'boolean',
        },
      },
    ],
  },
}