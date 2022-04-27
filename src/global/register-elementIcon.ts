import { App } from 'vue'
import {
  Goods,
  Setting,
  Monitor,
  ChatLineRound,
  Expand,
  Fold
} from '@element-plus/icons-vue'
const icons = [Goods, Setting, Monitor, ChatLineRound, Expand, Fold]
export default function (app: App): void {
  for (const icon of icons) {
    app.component(icon.name, icon)
  }
}
