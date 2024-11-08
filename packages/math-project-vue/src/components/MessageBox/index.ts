// import { createApp } from 'vue'
// import MessageBox from './MessageBox.vue'

// export interface MessageBoxProps {
//   /** 标题 */
//   title?: string

//   /** 内容 */
//   content: string

//   /** 可关闭 */
//   closeable?: boolean

//   /** 显示取消按钮 */
//   showCancel?: boolean

//   /** 显示确定按钮 */
//   showConfirm?: boolean

//   /** 显示Icon图标 */
//   showIcon?: boolean
// }

// interface MessageBoxOptions extends MessageBoxProps {
//   onCancel?: Function
//   onConfirm?: Function
// }

// export function showMsg(options: MessageBoxOptions) {
//   const div = document.createElement('div')
//   document.body.appendChild(div)

//   // 渲染组件到界面上
//   const app = createApp(MessageBox, {
//     ...options,
//     onCancel: () => {
//       options.onCancel ? options.onCancel() : null
//       app.unmount()
//       div.remove()
//     },
//     onConfirm: () => {
//       options.onConfirm ? options.onConfirm() : null
//       app.unmount()
//       div.remove()
//     },
//   })

//   app.mount(div)
// }
// MessageBox/index.ts
import { createApp } from 'vue'
import MessageBox from './MessageBox.vue'

export interface MessageBoxProps {
  /** 标题 */
  title?: string

  /** 内容 */
  content: string

  /** 可关闭 */
  closeable?: boolean

  /** 显示取消按钮 */
  showCancel?: boolean

  /** 显示确定按钮 */
  showConfirm?: boolean

  /** 显示Icon图标 */
  showIcon?: boolean
}

export interface MessageBoxOptions extends MessageBoxProps {
  onCancel?: () => void
  onConfirm?: () => void
}

export function showMsg(options: MessageBoxOptions) {
  const div = document.createElement('div')
  document.body.appendChild(div)

  // 渲染组件到界面上
  const app = createApp(MessageBox, {
    ...options,
    onCancel: () => {
      if (options.onCancel) {
        options.onCancel()
      }
      app.unmount()
      div.remove()
    },
    onConfirm: () => {
      if (options.onConfirm) {
        options.onConfirm()
      }
      app.unmount()
      div.remove()
    },
  })

  app.mount(div)
}
