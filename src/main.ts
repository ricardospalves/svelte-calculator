import App from './App.svelte'

const app = new App({
  target: document.body,
  props: {
    appName: 'Svelte Calculator',
  },
})

export default app
