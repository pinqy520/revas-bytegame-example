import React from 'react';
import {renderer, noop, Container, RevasTouch, RevasTouchEvent} from 'revas/common'
import App from './App';

function createRevasTouchEvent(e: TouchEvent, type: any = e.type): RevasTouchEvent {
  const touches: { [key: number]: RevasTouch } = {}
  type = type === 'touchcancel' ? 'touchend' : type
  Object.values(e.changedTouches).forEach(touch => {
    touches[touch.identifier] = {
      identifier: touch.identifier,
      x: touch.clientX,
      y: touch.clientY
    }
  })
  return { type, touches, timestamp: e.timeStamp || Date.now() }
}

function render(app: React.ReactNode, canvas: HTMLCanvasElement) {
  const {windowWidth, windowHeight, pixelRatio} = tt.getSystemInfoSync()
  canvas.width = windowWidth * pixelRatio
  canvas.height = windowHeight * pixelRatio
  const ctx = canvas.getContext('2d')
  ctx?.scale(pixelRatio, pixelRatio)

  tt.onTouchStart((e: any) => container.handleTouch(createRevasTouchEvent(e, 'touchstart')))
  tt.onTouchMove((e: any) => container.handleTouch(createRevasTouchEvent(e, 'touchmove')))
  tt.onTouchEnd((e: any) => container.handleTouch(createRevasTouchEvent(e, 'touchend')))
  tt.onTouchCancel((e: any) => container.handleTouch(createRevasTouchEvent(e, 'touchcancel')))

  const container = new Container(ctx, windowWidth, windowHeight)
  const fiber = renderer.createContainer(container, false, false)
  renderer.updateContainer(app, fiber, null, noop)
  return {
    unmount() {
      renderer.updateContainer(null, fiber, null, noop)
      container.destory()
    }
  }
}

render(React.createElement(App), tt.createCanvas())


declare const tt: any