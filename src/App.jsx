import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './globalStyle';
import Layout from './components/Layout';
import IssueList from './pages/IssueList/IssueList';
import IssueDetail from './pages/IssueDetail/IssueDetail';
import Error from './pages/Error/Error';

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
