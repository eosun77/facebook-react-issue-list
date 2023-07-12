import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './globalStyle';
import Layout from './Layout';
import IssueList from './page/IssueList/IssueList';
import IssueDetail from './page/IssueDetail/IssueDetail';
import Error from './page/Error/Error';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IssueList />} />
          <Route path="/detail/:number" element={<IssueDetail />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
