import { defineStore } from 'pinia'
import { VxeUI } from 'vxe-pc-ui'

const currTheme = localStorage.getItem('VXE_THEME') as 'dark' | 'default' || 'default'

VxeUI.setTheme(currTheme)

document.documentElement.setAttribute('vxe-run-theme', currTheme)

export const useAppStore = defineStore('app', {
  state () {
    return {
      theme: currTheme,
      serveTY: new Date().getFullYear(),
      baseApiUrl: process.env.VUE_APP_MAIN_URL
    }
  },
  actions: {
    setTheme (name: any) {
      this.theme = name || 'default'
      VxeUI.setTheme(name)
      document.documentElement.setAttribute('vxe-run-theme', name)
      localStorage.setItem('VXE_THEME', name)
    }
  }
})
