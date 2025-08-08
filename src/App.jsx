import ExportPopup from './components/ExportPopup.jsx';
import { useState } from 'react';
function App() {
  const [showPopup, setShowPopup] = useState(false);
  return (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'white',
    }}
  >
    <button
      onClick={() => setShowPopup(true)}
      style={{
        width: '130px',
        height: '32px',
        borderRadius: '4px',
        border: 'none',
        padding: '8px 16px',
        background: 'linear-gradient(180deg, #444444 0%, #333333 100%)',
        color: 'white',
        cursor: 'pointer',
      }}
    >
      Export Code
    </button>

    {showPopup && <ExportPopup onClose={() => setShowPopup(false)} />}
  </div>
);

}

export default App
