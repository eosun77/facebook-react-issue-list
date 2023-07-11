import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './globalStyle';
import Layout from './Layout';
import IssueList from './component/IssueList';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IssueList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
