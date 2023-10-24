Vanilla JS로 프론트엔드 아키텍처를 설정하려면, 프레임워크나 라이브러리에 의존하지 않고 순수한 JavaScript만을 사용하여 애플리케이션의 기반이 될 구조를 만들어야 합니다.

아래는 Vanilla JS를 사용하여 프론트엔드 아키텍처를 설정하는 간단한 가이드입니다:

1. **프로젝트 폴더 구조 설정**:

    - `src/`: 소스 코드 디렉토리
        - `components/`: UI 컴포넌트
        - `models/`: 데이터 모델
        - `services/`: API 호출, 유틸리티 함수 등의 서비스
        - `store/`: 상태 관리 (옵셔널)
        - `assets/`: 이미지, 스타일시트 등의 자원
        - `index.js`: 엔트리 포인트

2. **Component 기반 아키텍처 구현**:
    - 각 UI 컴포넌트는 재사용 가능하며 독립적인 구성요소로 개발됩니다.

```javascript
// src/components/Button.js
class Button {
    constructor(text, onClick) {
        this.text = text;
        this.onClick = onClick;
    }

    render() {
        const button = document.createElement("button");
        button.innerText = this.text;
        button.addEventListener("click", this.onClick);
        return button;
    }
}
```

3. **Event Handling**:

    - DOM 이벤트를 처리하기 위해 리스너를 추가합니다.

4. **상태 관리 (선택 사항)**:

    - 복잡한 애플리케이션에서는 상태 관리를 위한 간단한 스토어를 구현할 수 있습니다.
    - [Redux](https://redux.js.org/)나 [Vuex](https://vuex.vuejs.org/)와 유사한 패턴을 적용할 수 있습니다.

5. **API 호출 및 데이터 관리**:

    - `fetch` API나 `XMLHttpRequest`를 사용하여 백엔드 서비스와 통신합니다.

6. **라우팅 (선택 사항)**:

    - SPA(Single Page Application)를 만들고 싶다면 라우팅을 구현할 수 있습니다.
    - [page.js](https://visionmedia.github.io/page.js/)와 같은 작은 라이브러리를 사용하거나 직접 라우터를 구현할 수 있습니다.

7. **빌드 및 번들링**:

    - [Webpack](https://webpack.js.org/)나 [Rollup](https://rollupjs.org/guide/en/)과 같은 도구를 사용하여 JavaScript 파일을 번들링합니다.

8. **개발 서버 및 HMR**:
    - [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)와 같은 도구를 사용하여 실시간 리로드 기능을 갖춘 개발 서버를 실행합니다.

이와 같은 방식으로 Vanilla JS를 사용하여 프론트엔드 아키텍처를 설정하면, 복잡한 프레임워크나 라이브러리 없이도 효과적인 프론트엔드 애플리케이션을 구축할 수 있습니다.
