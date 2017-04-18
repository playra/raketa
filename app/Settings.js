import { observable } from 'mobx'

class SettingsStore {
  @observable volume = 1
  @observable silenceRatio = .3
}

const settingsStore = new SettingsStore()
export default settingsStore