import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './globalStyle';
import Layout from './Layout';
import IssueList from './component/IssueList/IssueList';
import IssueDetail from './component/IssueDetail/IssueDetail';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IssueList />} />
          <Route path="/detail/:number" element={<IssueDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
