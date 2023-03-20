# reactJS를 대체할 수 있는 vanilaJS 방법은?

ReactJS는 SPA(Single Page Application)를 만드는 데 있어서 매우 편리한 기능들을 제공합니다. 하지만, ReactJS를 대체할 수 있는 VanillaJS 방법은 있습니다. 이를 대체하는 방법 중 몇 가지를 아래에 소개합니다.


## Web Components
Web Components는 JavaScript의 표준 기술인 Custom Elements, Shadow DOM, HTML Templates 등을 활용하여 UI 컴포넌트를 만드는 방법입니다. 이를 활용하여 SPA를 만들 수 있습니다.

// 예시 코드
```
class MyComponent extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    const div = document.createElement('div')
    div.textContent = 'Hello, World!'
    shadow.appendChild(div)
  }
}

customElements.define('my-component', MyComponent)
```

위의 코드에서는 MyComponent라는 클래스를 정의하고, constructor 메서드에서 Shadow DOM을 생성하여 DOM 트리에 추가하는 코드를 작성하였습니다. 그리고, customElements.define 메서드를 사용하여 MyComponent를 등록하였습니다.

## Virtual DOM
Virtual DOM은 JavaScript 객체로 이루어진 가상의 DOM입니다. ReactJS에서는 Virtual DOM을 활용하여 성능을 향상시킵니다. 이를 VanillaJS에서 구현하는 방법은 다음과 같습니다.

// 예시 코드
```
function createElement(tagName, props, children) {
  const element = document.createElement(tagName)
  Object.entries(props || {}).forEach(([name, value]) => {
    if (name === 'style') {
      Object.entries(value).forEach(([key, val]) => {
        element.style[key] = val
      })
    } else {
      element.setAttribute(name, value)
    }
  })
  children.forEach((child) => {
    element.appendChild(child)
  })
  return element
}

function render(element, container) {
  container.appendChild(element)
}

const div = createElement('div', { class: 'container' }, [
  createElement('h1', { style: { color: 'red' } }, ['Hello, World!']),
  createElement('p', null, ['This is a paragraph']),
])
render(div, document.body)
```

위의 코드에서는 createElement 함수를 사용하여 HTML 요소를 생성하고, render 함수를 사용하여 HTML 요소를 DOM에 추가하는 코드를 작성하였습니다.

## XHR 또는 fetch API
XHR(XMLHttpRequest) 또는 fetch API를 사용하여 서버와 데이터를 주고받을 수 있습니다. 이를 활용하여 SPA를 만들 수 있습니다.

```
function getData(url) {
  return fetch(url)
    .then((response) => response.json())
}

getData('/api/data')
  .then((data) => {
    console.log(`Data fetched: ${JSON.stringify(data)}`)
  })
  .catch((error) => {
    console.error(`Error fetching data: ${error}`)
  })
```

위의 코드에서는 getData 함수를 사용하여 서버로부터 데이터를 가져오는 코드를 작성하였습니다. 이를 활용하여 SPA를 만들 수 있습니다.