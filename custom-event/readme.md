# VanilaJS, 커스텀 이벤트를 대체할 수 있는 방법은?

커스텀 이벤트를 대체할 수 있는 방법은 상황에 따라 다르지만, 대체할 수 있는 대안으로는 다음과 같은 것들이 있습니다.

## 콜백 함수
콜백 함수를 사용하여 이벤트와 같은 동작을 처리할 수 있습니다. 콜백 함수는 해당 동작이 발생할 때 호출되며, 필요한 인자를 전달받을 수 있습니다.
```
function onClick() {
  console.log('Button clicked')
}

const button = document.querySelector('#myButton')
button.addEventListener('click', onClick)
```

## Pub/Sub 패턴
Pub/Sub 패턴을 사용하여 이벤트와 같은 동작을 처리할 수 있습니다. Pub/Sub 패턴은 관찰자(observer)와 주체(subject)가 서로 분리된 패턴입니다. 주체는 상태 변경을 발생시키며, 관찰자는 상태 변경을 구독하여 해당 동작을 처리합니다.
```
const eventBus = new EventBus()

eventBus.subscribe('buttonClick', () => {
  console.log('Button clicked')
})

const button = document.querySelector('#myButton')
button.addEventListener('click', () => {
  eventBus.publish('buttonClick')
})
```

## Promise 객체
Promise 객체를 사용하여 비동기 동작을 처리할 수 있습니다. Promise 객체는 비동기 작업의 결과를 처리할 때 사용되며, then과 catch 메서드를 사용하여 성공과 실패를 처리할 수 있습니다.

```
function fetchData() {
  return new Promise((resolve, reject) => {
    // 비동기 작업 수행
    if (/* 성공 */) {
      resolve(data)
    } else {
      reject(error)
    }
  })
}

fetchData().then((data) => {
  console.log(`Data fetched: ${data}`)
}).catch((error) => {
  console.error(`Error fetching data: ${error}`)
})
```

## EventTarget 객체
EventTarget 객체를 사용하여 이벤트를 발생시키고 처리할 수 있습니다. EventTarget 객체는 이벤트를 발생시키는 요소나 객체입니다. addEventListener 메서드를 사용하여 이벤트 리스너를 등록하고, dispatchEvent 메서드를 사용하여 이벤트를 발생시킬 수 있습니다.

```
const eventTarget = new EventTarget()

eventTarget.addEventListener('custom', () => {
  console.log('Custom event triggered')
})

eventTarget.dispatchEvent(new Event('custom'))
```
위의 코드에서는 EventTarget 객체를 생성하고, custom 이벤트 리스너를 등록하고, Event 객체를 생성하여 custom 이벤트를 발생시킵니다. 이 때, custom 이벤트를 처리하는 이벤트 핸들러가 호출됩니다.

