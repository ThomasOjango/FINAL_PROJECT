import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ShareFoodPage from './pages/ShareFoodPage';
import DonatePage from './pages/DonatePage';
import TipsPage from './pages/TipsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'share':
        return <ShareFoodPage onNavigate={setCurrentPage} />;
      case 'donate':
        return <DonatePage />;
      case 'tips':
        return <TipsPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
