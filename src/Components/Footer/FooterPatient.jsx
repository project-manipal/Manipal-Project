
import React from 'react';
import './Footer.css';

function FooterPatient() {
  const letters = 'HEALTHY'.split('');
  const [hoveredIndex, setHoveredIndex] = React.useState(-1);

  const handleMouseMove = (e) => {
    const rightDiv = document.getElementById('beleave-right');
    if (!rightDiv) return;
    const rect = rightDiv.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const partWidth = rect.width / letters.length;
    const index = Math.floor(x / partWidth);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => setHoveredIndex(-1);

  return (
    <div className="footer-main-split" style={{ display: 'flex', width: '100vw', height: '100vh' }}>
      {/* Left Half */}
      <div
        className="footer-left-half"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'none',
        }}
      >
        <div
          className="footer-left"
          style={{
            width: '100%',
            maxWidth: 600,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <h2 className="let-there-be-care-p" >Let there be care</h2>

          {/* SINGLE OUTER BOX FOR BOTH COLUMNS */}
          <div className="footer-box-wrapper">
            <div className="footer-columns">
              <div className="footer-col">
                <a href="/appointment" className="footer-link">Appointment Info</a>
                <a href="/reports" className="footer-link">Reports</a>
                <a href="/consultation" className="footer-link">Consultation</a>
                <a href="/billing" className="footer-link">Billing</a>
              </div>
              <div className="footer-col">
                <a href="/insurance" className="footer-link">Insurance</a>
                <a href="/labs" className="footer-link">Lab Info</a>
                <a href="/feedback" className="footer-link">Feedback</a>
                <a href="/help" className="footer-link">Help Desk</a>
              </div>
            </div>
          </div>

          <div className="footer-copy-center" style={{ textAlign: 'center', width: '100%', marginTop: 48 }}>
            © 2025 Manipal-Hospital. All Rights Reserved.
          </div>
        </div>
      </div>

      {/* Right Half */}
      <div
        id="beleave-right"
        className="footer-right-half"
        style={{
          flex: 1,
          background: 'none',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div style={{ display: 'flex', flexDirection: 'row', width: '80%', height: '60%', justifyContent: 'center', alignItems: 'center' }}>
          {letters.map((letter, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: hoveredIndex === i ? '5rem' : '4rem',
                fontWeight: 'bold',
                color: hoveredIndex === i ? '#1976d2' : '#fff',
                transition: 'all 0.2s',
                transform: hoveredIndex === i ? 'scaleY(1.2)' : 'scaleY(1)',
                background: hoveredIndex === i ? 'rgba(25,118,210,0.08)' : 'none',
                borderRadius: hoveredIndex === i ? '12px' : '0',
                boxShadow: hoveredIndex === i ? '0 2px 16px rgba(25,118,210,0.15)' : 'none',
              }}
            >
              {letter}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterPatient;
