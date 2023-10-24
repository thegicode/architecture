`store` 디렉토리는 상태 관리와 관련된 모든 코드를 포함합니다. 여기서 상태는 일반적으로 UI의 상태, 서버 응답 데이터, 사용자 입력 및 설정 등 애플리케이션에서 관리해야 하는 모든 데이터를 의미합니다. Vanilla JavaScript로 아키텍처를 구성할 때 다양한 방법으로 `store`를 정의할 수 있습니다.

다음은 `store` 디렉토리에 포함될 수 있는 일반적인 파일 및 구조의 예시입니다:

1. **State**:

    - 애플리케이션의 전체 상태를 나타내는 객체나 변수.

    예:

    ```javascript
    // store/state.js
    export const state = {
        user: null,
        posts: [],
        settings: {
            theme: "light",
        },
    };
    ```

2. **Actions**:

    - 애플리케이션 상태를 변경하거나 비즈니스 로직을 수행하는 함수.

    예:

    ```javascript
    // store/actions.js
    import { state } from "./state";

    function setUser(user) {
        state.user = user;
    }

    function addPost(post) {
        state.posts.push(post);
    }

    // ... more actions
    ```

3. **Mutations (선택사항)**:

    - 상태를 변경하는 연산만 수행하는 함수. 일부 상태 관리 패턴에서는 actions와 mutations를 분리합니다.

    예:

    ```javascript
    // store/mutations.js
    import { state } from "./state";

    function _setUser(user) {
        state.user = user;
    }

    function _addPost(post) {
        state.posts.push(post);
    }

    // ... more mutations
    ```

4. **Getters**:

    - 상태를 기반으로 계산된 값을 반환하는 함수.

    예:

    ```javascript
    // store/getters.js
    import { state } from "./state";

    function isLoggedIn() {
        return state.user !== null;
    }

    function activePosts() {
        return state.posts.filter((post) => post.isActive);
    }

    // ... more getters
    ```

5. **Store Initialization/Setup**:

    - 초기 상태, 상태 변경 리스너, 로컬 스토리지와의 연동 등 상태 관리와 관련된 모든 것을 설정하는 코드.

    예:

    ```javascript
    // store/index.js
    import { state } from "./state";
    import * as actions from "./actions";
    import * as getters from "./getters";

    // ... store initialization and setup
    ```

6. **Middlewares (선택사항)**:

    - 액션을 실행하기 전후로 추가적인 작업을 수행하기 위한 함수.

    예:

    ```javascript
    // store/middlewares.js
    function loggingMiddleware(actionName, payload) {
        console.log(`Action ${actionName} was called with`, payload);
    }

    // ... more middlewares
    ```

위의 구조는 일반적인 상태 관리 구조의 예입니다. 실제 구현 시에는 프로젝트의 요구사항에 따라 적절한 구조와 패턴을 선택해야 합니다.
