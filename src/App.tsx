import { HashRouter, Route, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { lightTheme, darkTheme } from './theme/themeConfig';
import { useTheme } from './hooks/useTheme';
import IndexPage from './pages/Index';
import Privacy from './pages/Privacy';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = () => {
  const { mode, toggle, isDark } = useTheme();

  return (
    <ConfigProvider theme={isDark ? darkTheme : lightTheme}>
      <div
        style={{
          background: isDark ? '#000' : '#f5f5f5',
          minHeight: '100vh',
          transition: 'background 0.3s',
        }}
      >
        <HashRouter>
          <Routes>
            <Route path="/" element={<IndexPage onToggleTheme={toggle} isDark={isDark} />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </div>
    </ConfigProvider>
  );
};

export default App;
