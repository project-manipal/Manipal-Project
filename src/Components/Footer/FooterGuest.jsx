import React from 'react';
import './Footer.css';

function FooterGuest() {
  const letters = 'BELIEVE'.split('');
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
    <div className="footer-main-split" style={{ display: 'flex', flexWrap: 'wrap', width: '100vw', height: '100vh' }}>
      
      {/* LEFT SIDE */}
      <div
        className="footer-left-half"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'none',
          padding: '20px',
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
          }}
        >
         <h2 className="let-there-be-care">Let there be care</h2>


          <div className="footer-box-wrapper">
            <div className="footer-columns">
              <div className="footer-col">
                <a href="/">Home</a>
                <a href="/about">About Us</a>
                <a href="/contact">Contact Us</a>
                <a href="/services">Services</a>
                <a href="/doctors">Doctors</a>
                <a href="/locations">Locations</a>
              </div>
              <div className="footer-col">
                <a href="/terms">Terms</a>
                <a href="/privacy">Privacy Policy</a>
                <a href="/careers">Careers</a>
                <a href="/sitemap">Sitemap</a>
                <a href="/help">Help Center</a>
                <a href="/feedback">Feedback</a>
              </div>
            </div>
          </div>

          <div className="footer-copy-center" style={{ textAlign: 'center', marginTop: '48px' }}>
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

export default FooterGuest;
