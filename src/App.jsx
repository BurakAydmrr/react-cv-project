import { useState } from 'react'
import Header from './Header'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Hobbies from './Hobbies'
import './App.css'

function App() {

  return (
    <div className="cv-container" style={{ marginTop: "10px" }}>

      {/* Bu Kısımda Hedader.jsx dosyamızı Çağırıyorum  */}
      <Header />

      {/* Bu Kısımda Eğitim Bilgilerimi Çağırıyorum */}

      <Education />

      {/* Bu Kısımda İş Deneyimlerimi Çağırıyorum */}
      <Experience />

      {/* Bu Kısımda Yeteneklerimi Çağırıyorum */}

      <Skills />

      {/* Bu Kısımda Hobilerimi Çağırıyorum */}

      <Hobbies />




    </div>
  )
}

export default App
