import React from 'react';
import './Footer.css';

function FooterAdmin() {
  const letters = 'TRUST'.split('');
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

  const handlePatientClick = () => {
    alert('Redirecting to Patient Info...');
  };

  return (
    <div className="footer-main-split" style={{ display: 'flex', width: '100vw', height: '100vh' }}>
      {/* LEFT SIDE */}
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
          <h2 className="let-there-be-care-a">Let there be care</h2>

          {/* SINGLE OUTER BOX FOR BOTH COLUMNS */}
          <div className="footer-box-wrapper">
            <div className="footer-columns">
              <div className="footer-col">
                <a href="/patient-info">Patient Info</a>
                <a href="/doctor-info">Doctor Info</a>
                <a href="/consultation">Consultation</a>
                <a href="/billing">Billing</a>
                <a href="/reports">Reports</a>
              </div>
              <div className="footer-col">
                <a href="/lab-info">Lab Info</a>
                <a href="/feedback">Feedback</a>
                <a href="/help-desk">Help Desk</a>
                <a
                  href="/"
                  onClick={handlePatientClick}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#4dabf7';
                    e.target.style.textDecoration = 'underline';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#fff';
                    e.target.style.textDecoration = 'none';
                  }}
                >
                  Patient Info
                </a>
              </div>
            </div>
          </div>

          <div className="footer-copy-center" style={{ textAlign: 'center', width: '100%', marginTop: 48 }}>
            © 2025 Manipal-Hospital. All Rights Reserved.
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
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

export default FooterAdmin;
