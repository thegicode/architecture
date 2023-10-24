공통된 이벤트 핸들링은 여러 컴포넌트나 페이지에 걸쳐 재사용될 가능성이 있는 이벤트 로직을 의미합니다. 이러한 로직을 중앙에서 관리하면 코드의 중복을 줄이고 유지보수를 용이하게 할 수 있습니다.

아래는 공통된 이벤트 핸들링을 위한 몇 가지 방법을 제시합니다:

1. **이벤트 핸들러를 유틸리티 함수로 분리**:
    - 공통된 이벤트 핸들링 로직을 별도의 유틸리티 함수로 분리하고 필요한 곳에서 임포트하여 사용합니다.

```javascript
// utils/eventHandlers.js
export function commonClickHandler(e) {
    // 공통 로직
}

// src/components/Button.js
import { commonClickHandler } from "../utils/eventHandlers";

class Button {
    // ...
    someMethod() {
        someElement.addEventListener("click", commonClickHandler);
    }
}
```

2. **이벤트 핸들러를 Mixin으로 제공**:
    - 공통된 이벤트 핸들링 로직을 Mixin 형태로 제공하면 여러 컴포넌트에서 공유하여 사용할 수 있습니다.

```javascript
// mixins/eventHandlersMixin.js
export const eventHandlersMixin = {
    methods: {
        commonClickHandler(e) {
            // 공통 로직
        },
    },
};

// src/components/Button.js
import { eventHandlersMixin } from "../mixins/eventHandlersMixin";

class Button {
    // Mixin 메소드 사용
    someMethod() {
        someElement.addEventListener("click", this.commonClickHandler);
    }
}
```

3. **Event Bus 패턴 사용**:
    - Event Bus는 중앙에서 이벤트를 관리하고 발행/구독하는 메커니즘을 제공합니다. 컴포넌트 간에 직접적인 연결 없이 이벤트를 전달하고자 할 때 유용합니다.

```javascript
// utils/eventBus.js
const eventBus = new EventTarget();

export default eventBus;

// src/components/Sender.js
import eventBus from "../utils/eventBus";

class Sender {
    someMethod() {
        eventBus.dispatchEvent(new Event("customEvent"));
    }
}

// src/components/Receiver.js
import eventBus from "../utils/eventBus";

class Receiver {
    constructor() {
        eventBus.addEventListener("customEvent", this.handleCustomEvent);
    }

    handleCustomEvent(e) {
        // 이벤트 처리
    }
}
```

이러한 방법 중에서 프로젝트의 요구사항과 구조에 가장 적합한 방법을 선택하여 공통된 이벤트 핸들링 로직을 구현할 수 있습니다.
