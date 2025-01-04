import React from 'react'

import './App.css'

function Experience() {
    return (
        <section className="experience">
            <h2>İş Deneyimi</h2>
            <div className="job">
                <h3>Software Developer</h3>
                <p><strong>Şirket Adı:</strong> Adixi İnovatif Yazılım Tasarım Danışmanlık Tic. Ltd. Şti.</p>
                <p><strong>Çalışma Süresi:</strong> 2024 - Devam Ediyor.</p>
                <p><strong>Açıklama: </strong>
                    .Net Core ile backend tarafında yazılım geliştirme yapıyorum ve devam eden projelerde yer almaktayım.
                </p>
            </div>
            <hr />

            <div className="job">
                <h3>Intern Web Developer</h3>
                <p><strong>Şirket Adı:</strong> Deniz Media Interactive</p>
                <p><strong>Çalışma Süresi:</strong> 2022 - 2023</p>
                <p><strong>Açıklama: </strong>
                    PHP Laravel Framework kullanılarak proje geliştirilmesi
                    - MySQL İlişkili Tablolar hakkında bilgiler edinmek.
                    - SEO konusunda detaylı bilgiler edinmek
                    - Front-end ve back-end geliştirme araçlarını entegre ederek Kurumsal
                    web uygulamaları oluşturmak.
                </p>
            </div>


        </section>
    )
}

export default Experience
