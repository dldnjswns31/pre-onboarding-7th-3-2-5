# 원티드 프리온보딩 프론트엔드 - Week 3-2

원티드 프리온보딩 **프론트엔드 5팀**입니다.<br>
해당 레포지토리는 원티드 프리온보딩 과제로 투자 관리 서비스의 관리자 페이지를 구현한 프로젝트입니다.<br>
해당 프로젝트에서는 제공받은 json-server api를 사용하였습니다.

## 📅 프로젝트 기간

기간 : 2022년 11월 12일 ~ 2022년 11월 17일

## 👥 팀원 소개

## 🛠 기술 스택

<div align=center>
<img src="[https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white](https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white)">
<img src="[https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white](https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white)">
<img src="[https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)">
<br>

<img src="[https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)">
<img src="[https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)">
<img src="[https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white](https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)">
<br>

<img src="[https://img.shields.io/badge/vs_code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white](https://img.shields.io/badge/vs_code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)">
<img src="[https://img.shields.io/badge/react_router_dom-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white](https://img.shields.io/badge/react_router_dom-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)">
<br>

<img src="[https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white)">
<img src="[https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white](https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white)">
<img src="[https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white](https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white)">
<br>
</div>

## 🏁 프로젝트 실행 방법

1. 의존성 패키지를 설치합니다.

```
$ yarn
```

1. 프로젝트를 실행합니다.

```
$ yarn dev
```

- 현재 repository를 클론한 뒤, 위 순서대로 입력하면 localhost:3000 포트에서 해당 코드가 실행됩니다.

## 🔗 배포 링크

[배포링크](http://preonboarding-3-1.s3-website.ap-northeast-2.amazonaws.com/)

- 해당 프로젝트는 AWS S3로 배포하였습니다.
- 테스트 계정

```jsx
ID : 5@test.com
PW : 1111
```

## 🔰 사용한 패키지와 버전

```
	"antd": "^4.24.1",
"eslint": "8.27.0",
"eslint-config-next": "13.0.3",
"next": "13.0.3",
"react": "18.2.0",
"react-dom": "18.2.0",
"typescript": "4.8.4"
```

<details>
<summary>사용한 패키지 간략한 설명</summary>
<div markdown="1">

- ant design : 스타일 적용<br>
- eslint : 코딩 컨벤션에 위배되는 코드나 안티 패턴을 자동 검출하는 도구<br>
- typescript : 타입 스크립트<br>
- axios : node.js와 브라우저를 위한 Promise 기반 HTTP 클라이언트<br>
- prettier : 개발자가 작성한 코드를 정해진 코딩 스타일을 따르도록 변환해주는 도구<br>
- recoil : 전역 상태 관리

</div>
</details>

## 📦 파일 구조

<details>
<summary>파일 구조</summary>
<div markdown="1">

```
📦src
 ┣ 📂apis
 ┃ ┣ 📂core
 ┃ ┃ ┗ 📜instance.ts
 ┃ ┣ 📜account.ts
 ┃ ┗ 📜login.ts
 ┣ 📂components
 ┃ ┣ 📜AccountCreate.tsx
 ┃ ┣ 📜AccountList.tsx
 ┃ ┣ 📜Filter.tsx
 ┃ ┣ 📜Layout.tsx
 ┃ ┗ 📜Search.tsx
 ┣ 📂pages
 ┃ ┣ 📂account
 ┃ ┃ ┗ 📜[id].tsx
 ┃ ┣ 📜_app.tsx
 ┃ ┣ 📜_document.tsx
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜login.tsx
 ┣ 📂recoil
 ┃ ┣ 📜accountState.ts
 ┃ ┣ 📜searchState.ts
 ┃ ┗ 📜userState.ts
 ┣ 📂styles
 ┃ ┣ 📜Filter.module.css
 ┃ ┣ 📜Login.module.css
 ┃ ┣ 📜Search.module.css
 ┃ ┗ 📜globals.css
 ┗ 📂utils
 ┃ ┣ 📜fakers.ts
 ┃ ┣ 📜formatting.ts
 ┃ ┣ 📜token.ts
 ┃ ┗ 📜valueConversion.ts
```

</div>
</details>

## ❗️ 필수 요구사항

<br>

### 새롭게 도입한 점

1. css framework antd: 
- 미리 정의되어 있는 구성요소를 제공하기 때문에, 엔터프라이즈 환경에서도 어울리는 디자인을 만들 수 있다.
1. Next.js : 
- SSR
    - HTML이 미리 렌더링 되어 SEO 최적화에 좋습니다.
    - 서버의 데이터를 필요로 하는 페이지에 대해서는 요청 시에 서버 사이드 렌더링을 통하여 HTML을 생성하게 됩니다.
- 파일 기반 네비게이션 기능
    - 폴더의 경로에 따라 페이지의 경로가 설정되어 구축이 빠르고 관리가 편리하다는 장점이 있습니다.
- Typescript 내장
    - 타입스크립트 설정을 따로 할 필요 없이 타입스크립트를 지원하여 편리함과 안정성을 얻을 수 있습니다.

### 아쉬운 점

Next.js를 제대로 활용하지 못한 점 :

1. SSR(Server-Side-Rendering)
    - Next.js를 팀원들 대부분이 처음 접하는 상황이었는데 다른 과제에 비해 기간이 긴 것을 활용하여 사전에 학습을 하고 과제를 진행했지만 Next.js에서 지원하는 다양한 기능들 중에서 몇가지 활용을 하지 못했습니다.
2. Middleware
    - 미들웨어를 사용하면 요청이 완료되기 전에 코드를 실행할 수 있으며 들어오는 요청에 따라 요청 또는 응답 헤더를 다시 작성, 리디렉션, 수정하거나 직접 응답하여 응답을 수정할 수 있습니다.
    - 미들웨어를 통해 로그인 여부에 따른 페이지 이동을 제한을 구현하려고 했지만 이를 활용하지 못하고 다른 방법으로 토큰 여부에 따라 로그인 페이지와 메인페이지 접근을 제한 했습니다.

1. CRUD ( 계좌 관련 ) 
- 생성
    - 계좌 정보를 생성 할 수 있습니다.
    - 입력해야하는 값 : 브로커명, 계좌번호, 계좌상태, 평가금액, 입금금액, 계정 활성화 여부
    - faker 데이터 : uuid, name, userId, created_at, updated_at
    
    faker 데이터를 생성한 이유: 생성 기능(Create)을 구현하기 위해 임의의 랜덤 데이터를 `faker`를 통해 만들었습니다. 
    
- 조회
    - 전체 계좌 목록을 확인할 수 있습니다.
    - 고객명, `broker.json`을 참조한 브로커명, `마스킹 처리`된 계좌번호, `accountStatus.json`을 참조한 계좌상태, 계좌명, 평가금액, 입금금액, 계좌 활성화 여부, 계좌개설일 을 확인할 수 있습니다.
    - 계좌 리스트에서 계좌번호를 누르면 계좌상세 화면으로 이동합니다.
- 수정
    - 수정모드인지 아닌지 확인하기 위해 useState로 상태 관리를 하고있습니다.
    - 수정 버튼을 클릭하면 edit모드로 전환되며 계좌 활성화 여부를 수정할 수 있습니다.
    - 제출 버튼을 클릭했을 때 새로운 정보로 서버에 수정을 요청합니다.
    - 이후 재렌더링 되며 수정된 값을 확인할 수 있습니다.
- 삭제
    - 전체 계좌목록에서 원하는 계좌를 삭제할 수 있습니다.
1. 계좌목록 필터 및 검색 기능
    - 필터 선택 값과 검색 키워드 값을 상태로 관리하여  필터링 할 값을 선택하거나 검색 버튼을 누르면 params에 값이 담겨 서버로 요청을 보내게 됩니다.
    - 요청을 받은 서버는 params 값을 확인하여 원하는 데이터를 반환해줍니다.
    
    (아래 코드들은 나중에 깔끔하게 불러올거니까 그냥 둬주세요)
    
    - 필터 코드
        
        ```jsx
        export default function Filter() {
          const [selected, setSelected] = useRecoilState(selectedFilter);
        
          const onChangeHandle = (e: ChangeEvent<HTMLSelectElement>) => {
            const { name, value } = e.target;
        
            if (value) {
              setSelected({
                ...selected,
                [name]: value,
              });
            }
        
            if (!value) {
              setSelected({
                ...selected,
                [name]: null,
              });
            }
          };
        
          return (
            <div className="filter">
              <select name="broker_id" className={styles.select} id="broker" onChange={onChangeHandle}>
                <option value="">브로커 선택</option>
                {Object.keys(brokers).map((broker, idx) => (
                  <option key={idx} value={broker}>
                    {brokers[broker]}
                  </option>
                ))}
              </select>
              <select name="status" className={styles.select} id="status" onChange={onChangeHandle}>
                <option value="">계좌 상태 선택</option>
                {Object.keys(statusList).map((status, idx) => (
                  <option key={idx} value={statusList[status]}>
                    {status}
                  </option>
                ))}
              </select>
              <select name="is_active" className={styles.select} id="active" onChange={onChangeHandle}>
                <option value="">계좌 활성화 선택</option>
                <option value="true">활성화</option>
                <option value="false">비활성화</option>
              </select>
            </div>
          );
        }
        ```
        
    - 서치 코드
        
        ```jsx
        export default function Search() {
          const setSearchKeyword = useSetRecoilState(searchKeywordState);
        
          const [inputValue, setInputValue] = useState<string>('');
          const [isShow, setIsShow] = useState<boolean>(false);
        
          const onChangeHandle = (e: React.FormEvent<HTMLInputElement>) => {
            setInputValue((e.target as HTMLInputElement).value);
          };
        
          const onSubmitHandle = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (!inputValue) {
              alert('검색어를 입력해주세요!');
              return;
            }
            setSearchKeyword(inputValue);
            setIsShow(true);
          };
        
          const onClickHandle = (e: React.MouseEvent) => {
            e.preventDefault();
            setIsShow(false);
            setInputValue('');
            setSearchKeyword('');
          };
        
          return (
            <form onSubmit={onSubmitHandle} className="search">
              {isShow && <input type="button" className={styles.totalBtn} value="검색 해제" onClick={onClickHandle} />}
              <input
                type="text"
                className={styles.searchbar}
                value={inputValue}
                onChange={onChangeHandle}
                placeholder="계좌명을 검색해보세요."
              />
              <input type="submit" className={styles.searchBtn} value="검색" />
            </form>
          );
        }
        ```
        
    
    ```jsx
    // Layout.tsx 코드 발췌
    useEffect(() => {
      getAccountList({ ...filterParams, _page: currentPage, name_like: searchKeyword }).then((res) => {
        setAccountList(res?.data);
      });
    }, [filterParams, currentPage, searchKeyword]);
    ```
    
2. 페이지네이션 
    - `json-server` 의 Paginate API 를 사용하여 구현했습니다.
3. 계좌 상세
    - Next 라이브러리인 useRouter를 활용하여 계좌번호 클릭 시 상세페이지로 이동할 수 있도록 동적 라우팅을 구현하였습니다.
