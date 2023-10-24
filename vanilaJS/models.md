`models` 디렉토리는 일반적으로 데이터 모델 또는 애플리케이션의 비즈니스 로직과 관련된 구조를 정의하는 파일들을 포함합니다. 이 디렉토리는 프론트엔드 애플리케이션에서 데이터를 나타내는 객체나 클래스, 그리고 이러한 데이터와 관련된 연산을 정의하는 곳입니다.

다음은 `models` 디렉토리에 포함될 수 있는 일반적인 파일 및 구조의 예시입니다:

1. **Entity Models**:

    - 서버에서 가져온 데이터 또는 프론트엔드에서 사용되는 데이터의 구조와 관련된 메서드를 정의하는 클래스나 객체.

    예:

    ```javascript
    // models/User.js
    class User {
        constructor(id, name, email) {
            this.id = id;
            this.name = name;
            this.email = email;
        }

        get displayName() {
            return `${this.name} (${this.email})`;
        }
    }
    ```

2. **Enums and Constants**:

    - 애플리케이션에서 사용되는 고정된 값 또는 열거형 타입.

    예:

    ```javascript
    // models/Status.js
    export const Status = {
        ACTIVE: "ACTIVE",
        INACTIVE: "INACTIVE",
        PENDING: "PENDING",
    };
    ```

3. **Utility Models**:

    - 특정 데이터 연산이나 변환과 관련된 유틸리티 함수.

    예:

    ```javascript
    // models/utils.js
    export function transformData(data) {
        // 데이터 변환 로직
    }
    ```

4. **Interfaces or Types (TypeScript의 경우)**:

    - 데이터 모델 또는 다른 객체의 구조를 정의하는 인터페이스나 타입.

    예:

    ```typescript
    // models/types.ts
    export interface User {
        id: number;
        name: string;
        email: string;
    }
    ```

이러한 파일들은 애플리케이션의 다른 부분에서 임포트되어 사용될 수 있으며, 데이터와 관련된 로직을 한 곳에서 관리하도록 돕습니다.
