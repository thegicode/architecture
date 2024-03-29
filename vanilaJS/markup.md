만약 SPA가 아닌, 각 페이지마다 별도의 HTML 파일이 있는 전통적인 MPA (Multi Page Application) 형식의 웹사이트를 구축하고자 한다면, 아래와 같은 디렉토리 구조를 고려할 수 있습니다:

```
project-root/
│
├── public/
│   ├── assets/               # 이미지, 폰트와 같은 정적 자원을 위한 디렉토리
│   │   ├── images/
│   │   ├── fonts/
│   │   └── ...
│   ├── css/                  # 전역 및 페이지별 스타일시트
│   └── js/                   # 전역 및 페이지별 자바스크립트 파일
│   ├── index.html            # 메인 페이지 HTML
│   ├── about.html            # 소개 페이지 HTML
│   ├── contact.html          # 연락처 페이지 HTML
│   └── ...
│
├── src/
│   ├── pages/                # 각 페이지의 HTML 파일
│   │   ├── index.html
│   │   ├── about.html
│   │   ├── contact.html
│   │   └── ...
│   ├── components/           # 재사용 가능한 UI 컴포넌트
│   └── services/             # API 통신, 데이터 처리 등의 서비스 로직
│
└── ...
```

-   `src/pages/`: 애플리케이션의 각 페이지에 대한 `html` 파일들이 위치하는 디렉토리입니다. 예를 들어, 메인 페이지, 소개 페이지, 연락처 페이지 등 각 페이지에 해당하는 `html` 파일들이 이 디렉토리 내에 위치합니다.

-   `public/`: 웹사이트에서 사용되는 정적 자원들 (이미지, 스타일시트, JS 파일 등)을 저장하기 위한 디렉토리입니다.

-   `public/css/`와 `public/js/`: 각각 스타일시트와 자바스크립트 파일들을 위한 디렉토리입니다. 페이지별로 스타일시트나 자바스크립트 파일을 분리하여 관리할 수 있습니다.

이런 구조를 사용하면 각 페이지별로 HTML, CSS, JS를 분리하여 관리할 수 있어, MPA 형식의 웹사이트를 구축하는 데 있어 효율적입니다.

-   만약 웹팩, Parcel, Rollup과 같은 모듈 번들러를 사용하여 프로젝트를 빌드한다면, src/ 디렉토리의 모든 파일들은 번들링 과정을 거쳐 public/ 디렉토리에 출력될 것입니다. 이렇게 되면 src/pages/에 있는 HTML 파일들도 번들링 후에는 public/에 위치하게 되어 웹 서버에서 직접 제공될 수 있습니다.

그러나 모듈 번들러를 사용하지 않는다면, HTML 파일들이 public/ 디렉토리에 위치해야 웹 서버가 직접 접근할 수 있습니다. 이 경우에는 HTML 파일을 public/ 내에 유지하는 것이 바람직합니다.
