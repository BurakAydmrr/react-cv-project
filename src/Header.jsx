import React from 'react'
import KunLogo from './assets/kun.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Header() {
    return (
        <header className="cv-header">
            <div className="profile-info">
                <h1>Burak Aydemir (20)</h1>
                <h3 style={{ marginTop: 10, fontSize: '20px', color: '#1e90ff' }}>Junior Software Developer</h3>

                <div className="contact-info">
                    <p><strong>Email:</strong> burak.aydemir@kun.edu.tr</p>
                    <p><strong>Telefon:</strong> 555-1234-5678</p>
                    <p><strong>Adres:</strong> Kayseri</p>
                    <p><strong>Doğum Tarihi:</strong> 18.01.2005</p>
                </div>

                <div className="social-links" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '4px' }}>
                    <h3 style={{ margin: 0, fontSize: '18px', color: '#4a4a4a' }}>Sosyal Medya:</h3>

                    {/* LinkedIn Bağlantısı */}
                    <a
                        href="https://www.linkedin.com/in/burakaydemir038"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: '#0077b5', fontSize: '24px' }}
                    >
                        <FaLinkedin />
                    </a>

                    {/* GitHub Bağlantısı */}
                    <a
                        href="https://github.com/BurakAydmrr"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: '#000', fontSize: '24px' }}
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>
            <div className="profile-image">
                <img src={KunLogo} alt="Profile" />
            </div>
        </header>
    )
}


export default Header
