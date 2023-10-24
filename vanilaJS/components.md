components/
│
├── common/ # 공통으로 사용되는 재사용 가능한 컴포넌트
│ ├── Button/
│ │ ├── index.js
│ │ └── styles.css
│ │
│ ├── Modal/
│ │ ├── index.js
│ │ └── styles.css
│ │
│ ├── Input/
│ │ ├── index.js
│ │ └── styles.css
│ │
│ └── ... (기타 공통 컴포넌트)
│
└── pages/ # 각 페이지나 라우트에 해당하는 메인 컴포넌트
├── HomePage/
│ ├── index.js
│ └── styles.css
│
├── ProfilePage/
│ ├── index.js
│ └── styles.css
│
├── ProductPage/
│ ├── index.js
│ ├── components/ # 해당 페이지에서만 사용하는 하위 컴포넌트
│ │ ├── ProductDetail/
│ │ │ ├── index.js
│ │ │ └── styles.css
│ │ └── ProductReviews/
│ │ ├── index.js
│ │ └── styles.css
│ └── styles.css
│
└── ... (기타 페이지 컴포넌트)
