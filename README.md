# facebook/react Issue List

> 특정 깃헙 레파지토리[(facebook/react)](https://github.com/facebook/react)의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축

![pre](https://github.com/eosun77/facebook-react-issue-list/assets/100937653/44f8fd72-26ff-4c61-a113-9c358c59affc)

## 목차

- [facebook/react Issue List](#facebookreact-issue-list)
  - [목차](#목차)
  - [시작하기](#시작하기)
  - [기능 목록](#기능-목록)
    - [1. 인피니티 스크롤](#1-인피니티-스크롤)
    - [2. 이슈 목록 상세 화면](#2-이슈-목록-상세-화면)
    - [3. 상태관리](#3-상태관리)

## 시작하기

```
git clone https://github.com/eosun77/wanted-pre-onboarding-frontend.git
```

`.env` 파일을 `facebook-react-issue-list` 폴더에 생성합니다.

```.env
REACT_APP_GITHUB_TOKEN = <your github token>
REACT_APP_BASE_URL = "https://api.github.com/repos/facebook/react"
```

`facebook-react-issue-list` 폴더에서 실행합니다.

```
npm install
npm start
```

## 기능 목록

### 1. 인피니티 스크롤

![infinityscroll](https://github.com/eosun77/facebook-react-issue-list/assets/100937653/f01ab1e6-6d1a-45d7-bd2b-49054e20a541)

- IntersectionObserver API를 사용하여 useInfiniteScroll 커스텀 훅으로 구현
- 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩

```js
// useInfiniteScroll.js
export const useInfiniteScroll = () => {
  const [page, setPage] = useState(1);
  const observer = useRef();

  const target = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  return { page, target };
};
```

```js
// IssueList.jsx
function IssueList() {
  const { state, dispatch } = useIssue();
  const { target, page } = useInfiniteScroll();
  const { loading } = useIssueList(page, dispatch);
  const { handleDetailClick } = useIssueNavigate(dispatch);

  return (
    <>
      {state.issues.map((issue, index) => (
        <div key={issue.id}>
          <IssueItem
            id={issue.number}
            number={issue.number}
            createdAt={issue.created_at}
            title={issue.title}
            userName={issue.user.login}
            comments={issue.comments}
            clickEvent={() => handleDetailClick(issue.number)}
          />
          {index % 4 === 3 && <Ad />}
        </div>
      ))}
      {loading ? <Loading /> : <div ref={target} />}
    </>
  );
}
```

### 2. 이슈 목록 상세 화면

![detail](https://github.com/eosun77/facebook-react-issue-list/assets/100937653/c344a03b-5033-401b-b878-cd148dd49438)

- 이슈 리스트에서 상세 화면 이동시 `number`로 issues에서 클릭한 issue를 찾아서 표시

```js
// useIssueNavigate.js
export default function useIssueNavigate(dispatch) {
  const navigate = useNavigate();

  const handleDetailClick = (number) => {
    dispatch({ type: 'FIND_ISSUE', payload: number });
    navigate(`/detail/${number}`);
  };

  return { handleDetailClick };
}
```

- 페이지를 새로고침하거나 `/detail/${number}`로 다이렉트로 이동시 서버에서 상세 정보를 받아와서 표시

```js
// useIssueDetail.js
export const useIssueDetail = (state, dispatch) => {
  const { number } = useParams();
  const navigate = useNavigate();

  const issueNumber = parseInt(number);

  useEffect(() => {
    if (state.issue.number !== issueNumber) {
      getIssueDetail(number)
        .then((res) => {
          dispatch({ type: 'GET_ISSUE', payload: res });
        })
        .catch((err) =>
          navigate('/error', { state: { errorStatus: err.status } }),
        );
    }
  }, [dispatch, issueNumber, navigate, number, state.issue.number]);

  return { issueNumber };
};
```

### 3. 상태관리

- useContext()를 사용하여 효율적인 전달
- useReducer 사용

```js
const issueReducer = (state, action) => {
  switch (action.type) {
    case 'INITIAL_ISSUES':
      return {
        ...state,
        issues: formatIssues(action.payload),
      };
    case 'ADD_ISSUES':
      return {
        ...state,
        issues: [...state.issues, ...formatIssues(action.payload)],
      };
    case 'FIND_ISSUE':
      return {
        ...state,
        issue: findIssue(state.issues, action.payload),
      };
    case 'GET_ISSUE':
      return {
        ...state,
        issue: formatIssue(action.payload),
      };
    case 'GET_REPO':
      return {
        ...state,
        repo: action.payload,
      };
    default:
      return state;
  }
};

export function IssueProvider({ children }) {
  const [state, dispatch] = useReducer(issueReducer, initialState);

  useEffect(() => {
    getRepo().then((res) => {
      dispatch({ type: 'GET_REPO', payload: res.full_name });
    });
  }, []);

  return (
    <IssueContext.Provider value={{ state, dispatch }}>
      {children}
    </IssueContext.Provider>
  );
}
```
