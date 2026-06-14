import { useState } from 'react';
import './App.css';

// Type definitions
type TabType = 'Home' | 'Experience' | 'Social Activity' | 'Tools' | 'Education';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [carouselIndices, setCarouselIndices] = useState<number[]>([0, 0, 0]);

  const handleNext = (cardIdx: number) => {
    setCarouselIndices((prev) => {
      const copy = [...prev];
      copy[cardIdx] = (copy[cardIdx] + 1) % 3;
      return copy;
    });
  };

  const handlePrev = (cardIdx: number) => {
    setCarouselIndices((prev) => {
      const copy = [...prev];
      copy[cardIdx] = (copy[cardIdx] - 1 + 3) % 3;
      return copy;
    });
  };

  const expImages = [
    [
      { src: '/hr_training.png', alt: 'Training & Development' },
      { src: '/hr_interview.png', alt: 'Talent Acquisition' },
      { src: '/hr_branding.png', alt: 'Employer Branding Content' }
    ],
    [
      { src: '/hr_interview.png', alt: 'Recruitment & Screening' },
      { src: '/hr_branding.png', alt: 'Employee Engagement' },
      { src: '/hr_training.png', alt: 'Internal Communication' }
    ],
    [
      { src: '/hr_branding.png', alt: 'Company Branding Socials' },
      { src: '/hr_training.png', alt: 'Departmental Meetings' },
      { src: '/hr_interview.png', alt: 'Employee Onboarding' }
    ]
  ];

  // Interactive profile data
  const profile = {
    name: 'Susana Bureni',
    role: 'HR & Employer Branding Specialist',
    location: 'Cengkareng, Jakarta Barat',
    email: 'susanna.bureni@gmail.com',
    phone: '089602646150',
    linkedin: 'https://www.linkedin.com/in/susana-bureni-49957323b',
    summary: 'A communicative professional with a background in Human Resources and company branding. I specialize in employee engagement and building a positive workplace culture to support both internal and external company image.'
  };

  // Nav items config with icons
  const navItems: { name: TabType; icon: React.ReactNode }[] = [
    {
      name: 'Home',
      icon: (
        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      )
    },
    {
      name: 'Experience',
      icon: (
        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'Social Activity',
      icon: (
        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'Tools',
      icon: (
        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'Education',
      icon: (
        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  // Helper component to render current active tab's content
  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <div key="home">
            <div className="home-hero-section">
              <div className="home-hero-text">
                <div className="content-title-section" style={{ marginBottom: '32px' }}>
                  <h2 className="content-title">
                    Hello there! I'm {profile.name}. <span className="emoji-badge">👋</span>
                  </h2>
                </div>
                
                <p className="content-subtitle">
                  A passionate HR & Employer Branding professional with a background in Psychology. I have a deep interest and practical experience in talent development, employee engagement, and shaping a positive workplace culture.
                </p>

                <p className="intro-text">
                  I am genuinely looking forward to the opportunity to collaborate and grow with your company! Please get to know me better and explore my track record, projects, and work by navigating through the available menus.
                </p>
              </div>

              <div className="home-hero-image-wrap">
                <img src="/susana.png" alt="Susana Bureni" className="home-hero-img" />
              </div>
            </div>

            <h3 className="section-header">Statistik & Pencapaian Utama</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">24+</div>
                <div className="stat-label">Training Sessions</div>
                <div className="stat-desc">Diikuti oleh 400+ peserta dengan tingkat kepuasan 3.5/4.0 di iNews Media Group.</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">20k+</div>
                <div className="stat-label">Employer Branding Views</div>
                <div className="stat-desc">Menjangkau 7k+ akun dengan capture 67.4% non-follower views dalam 90 hari.</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">500+</div>
                <div className="stat-label">CV Screened</div>
                <div className="stat-desc">Menyeleksi berkas pendaftaran dan merekrut 12 anak magang untuk 5 divisi di Suitmedia.</div>
              </div>
            </div>
          </div>
        );

      case 'Experience':
        return (
          <div key="experience">
            <div className="content-title-section">
              <h2 className="content-title">Pengalaman Kerja</h2>
            </div>
            <p className="content-subtitle">
              Berikut adalah perjalanan karier saya di bidang <span className="highlight">Human Resources (HR)</span> dan <span className="highlight">Branding</span> korporat.
            </p>

            <div className="timeline">
              {/* MNC iNews */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="experience-card">
                  <div className="experience-card-content">
                    {/* Left Column: 3D Image Stack Carousel */}
                    <div className="exp-carousel-wrapper">
                      <div className="exp-carousel-container">
                        {expImages[0].map((img, imgIdx) => {
                          const activeIdx = carouselIndices[0];
                          const offset = (imgIdx - activeIdx + 3) % 3;
                          let cardClass = "carousel-card";
                          if (offset === 0) cardClass += " active";
                          else if (offset === 1) cardClass += " right";
                          else if (offset === 2) cardClass += " left";

                          return (
                            <div 
                              key={imgIdx} 
                              className={cardClass}
                              onClick={() => {
                                if (offset === 1) handleNext(0);
                                else if (offset === 2) handlePrev(0);
                              }}
                            >
                              <img src={img.src} alt={img.alt} className="carousel-card-img" />
                            </div>
                          );
                        })}
                      </div>
                      <div className="exp-carousel-controls">
                        <button className="carousel-arrow prev" onClick={() => handlePrev(0)}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="15 18 9 12 15 6" />
                          </svg>
                        </button>
                        <div className="carousel-dots">
                          {[0, 1, 2].map((dot) => (
                            <span 
                              key={dot} 
                              className={`carousel-dot ${carouselIndices[0] === dot ? 'active' : ''}`}
                              onClick={() => {
                                setCarouselIndices(prev => {
                                  const copy = [...prev];
                                  copy[0] = dot;
                                  return copy;
                                });
                              }}
                            />
                          ))}
                        </div>
                        <button className="carousel-arrow next" onClick={() => handleNext(0)}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Right Column: Text Information */}
                    <div className="experience-card-info">
                      <div className="experience-header">
                        <div className="experience-title-area">
                          <h3>HR Intern (Program MagangHub Kemnaker)</h3>
                          <div className="experience-company">MNC Television Network (iNews Media Group) — Jakarta</div>
                        </div>
                        <span className="experience-date">Nov 2025 – Mei 2026</span>
                      </div>
                      <p className="experience-company-desc">
                        iNews Media Group merupakan bagian dari MNC Media, grup media terintegrasi terbesar di Asia Tenggara yang menjangkau platform televisi, digital, cetak, dan radio di Indonesia.
                      </p>
                      
                      <div className="experience-details">
                        <div className="experience-detail-item">
                          <span className="experience-detail-title">Learning & Development</span>
                          <p className="experience-detail-desc">
                            Mengelola dan mengarahkan 24 pelatihan (end-to-end training sessions) untuk 400+ peserta dengan skor kepuasan 3.5/4.0, serta merumuskan laporan evaluasi mingguan divisi.
                          </p>
                        </div>

                        <div className="experience-detail-item">
                          <span className="experience-detail-title">Onboarding & Employee Experience</span>
                          <p className="experience-detail-desc">
                            Merampingkan proses onboarding dengan membuat modul pembelajaran interaktif menggunakan Canva dan menulis 2 panduan utama: <i>New Joiner Employee Handbook</i> & <i>HR Intern Handbook</i>.
                          </p>
                        </div>

                        <div className="experience-detail-item">
                          <span className="experience-detail-title">Employer Branding</span>
                          <p className="experience-detail-desc">
                            Menyusun strategi konten branding korporat selama 6 bulan (50 post) dan mendesain ulang logo profil resmi perusahaan. Menghasilkan 20,286 views serta jangkauan ke 7,072 akun unik (67.4% non-follower reach).
                          </p>
                        </div>

                        <div className="experience-detail-item">
                          <span className="experience-detail-title">Talent Acquisition & HR Operations</span>
                          <p className="experience-detail-desc">
                            Melakukan seleksi resume (screening), wawancara awal, dan mengoordinasikan jadwal interview pelamar. Menjaga integritas data 100% dengan mengaudit database absensi bulanan dan mengelola arsip digital anak magang.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Suitmedia Freelance */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="experience-card">
                  <div className="experience-card-content">
                    {/* Left Column: 3D Image Stack Carousel */}
                    <div className="exp-carousel-wrapper">
                      <div className="exp-carousel-container">
                        {expImages[1].map((img, imgIdx) => {
                          const activeIdx = carouselIndices[1];
                          const offset = (imgIdx - activeIdx + 3) % 3;
                          let cardClass = "carousel-card";
                          if (offset === 0) cardClass += " active";
                          else if (offset === 1) cardClass += " right";
                          else if (offset === 2) cardClass += " left";

                          return (
                            <div 
                              key={imgIdx} 
                              className={cardClass}
                              onClick={() => {
                                if (offset === 1) handleNext(1);
                                else if (offset === 2) handlePrev(1);
                              }}
                            >
                              <img src={img.src} alt={img.alt} className="carousel-card-img" />
                            </div>
                          );
                        })}
                      </div>
                      <div className="exp-carousel-controls">
                        <button className="carousel-arrow prev" onClick={() => handlePrev(1)}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="15 18 9 12 15 6" />
                          </svg>
                        </button>
                        <div className="carousel-dots">
                          {[0, 1, 2].map((dot) => (
                            <span 
                              key={dot} 
                              className={`carousel-dot ${carouselIndices[1] === dot ? 'active' : ''}`}
                              onClick={() => {
                                setCarouselIndices(prev => {
                                  const copy = [...prev];
                                  copy[1] = dot;
                                  return copy;
                                });
                              }}
                            />
                          ))}
                        </div>
                        <button className="carousel-arrow next" onClick={() => handleNext(1)}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Right Column: Text Information */}
                    <div className="experience-card-info">
                      <div className="experience-header">
                        <div className="experience-title-area">
                          <h3>Jr. HR Freelance</h3>
                          <div className="experience-company">Suitmedia — Jakarta</div>
                        </div>
                        <span className="experience-date">Jul 2024 – Okt 2024</span>
                      </div>
                      <p className="experience-company-desc">
                        Suitmedia adalah agensi digital full-service yang berfokus pada solusi teknologi dan pemasaran terintegrasi (digital marketing & app/web development).
                      </p>
                      
                      <div className="experience-details">
                        <div className="experience-detail-item">
                          <span className="experience-detail-title">Recruitment</span>
                          <p className="experience-detail-desc">
                            Mengelola rekrutmen anak magang dari hulu ke hilir: menyeleksi lebih dari 500 CV, menyaring kandidat, hingga meloloskan 12 anak magang untuk 5 posisi berbeda, serta mengurus draf kontrak kerja.
                          </p>
                        </div>

                        <div className="experience-detail-item">
                          <span className="experience-detail-title">Employee Engagement & Internal Communication</span>
                          <p className="experience-detail-desc">
                            Menyelenggarakan kegiatan kebersamaan karyawan (engagement activities), mengelola anggaran, menyusun laporan berbasis KPI, serta mengoordinasikan pertemuan bulanan antar departemen.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Suitmedia Intern */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="experience-card">
                  <div className="experience-card-content">
                    {/* Left Column: 3D Image Stack Carousel */}
                    <div className="exp-carousel-wrapper">
                      <div className="exp-carousel-container">
                        {expImages[2].map((img, imgIdx) => {
                          const activeIdx = carouselIndices[2];
                          const offset = (imgIdx - activeIdx + 3) % 3;
                          let cardClass = "carousel-card";
                          if (offset === 0) cardClass += " active";
                          else if (offset === 1) cardClass += " right";
                          else if (offset === 2) cardClass += " left";

                          return (
                            <div 
                              key={imgIdx} 
                              className={cardClass}
                              onClick={() => {
                                if (offset === 1) handleNext(2);
                                else if (offset === 2) handlePrev(2);
                              }}
                            >
                              <img src={img.src} alt={img.alt} className="carousel-card-img" />
                            </div>
                          );
                        })}
                      </div>
                      <div className="exp-carousel-controls">
                        <button className="carousel-arrow prev" onClick={() => handlePrev(2)}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="15 18 9 12 15 6" />
                          </svg>
                        </button>
                        <div className="carousel-dots">
                          {[0, 1, 2].map((dot) => (
                            <span 
                              key={dot} 
                              className={`carousel-dot ${carouselIndices[2] === dot ? 'active' : ''}`}
                              onClick={() => {
                                setCarouselIndices(prev => {
                                  const copy = [...prev];
                                  copy[2] = dot;
                                  return copy;
                                });
                              }}
                            />
                          ))}
                        </div>
                        <button className="carousel-arrow next" onClick={() => handleNext(2)}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Right Column: Text Information */}
                    <div className="experience-card-info">
                      <div className="experience-header">
                        <div className="experience-title-area">
                          <h3>HR Intern (Program MSIB)</h3>
                          <div className="experience-company">Suitmedia — Jakarta</div>
                        </div>
                        <span className="experience-date">Feb 2024 – Jun 2024</span>
                      </div>
                      <p className="experience-company-desc">
                        Program Magang & Studi Independen Bersertifikat (MSIB) Kampus Merdeka di agensi digital Suitmedia.
                      </p>
                      
                      <div className="experience-details">
                        <div className="experience-detail-item">
                          <span className="experience-detail-title">Employee Engagement & Communication</span>
                          <p className="experience-detail-desc">
                            Mengorganisasi aktivitas kebersamaan, menyusun anggaran pengeluaran, mendokumentasikan kegiatan dalam laporan KPI, serta menjadwalkan rapat rutin tiap departemen.
                          </p>
                        </div>

                        <div className="experience-detail-item">
                          <span className="experience-detail-title">Company Branding</span>
                          <p className="experience-detail-desc">
                            Mendukung branding media sosial agensi dengan mengkurasi ide konten kreatif, membuat draf takarir (caption), dan menjadwalkan publikasi konten.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Social Activity':
        return (
          <div key="social-activity">
            <div className="content-title-section">
              <h2 className="content-title">Aktivitas Organisasi</h2>
            </div>
            <p className="content-subtitle">
              Keterlibatan aktif saya dalam <span className="highlight">organisasi sosial, komunitas, dan kepanitiaan</span> kampus.
            </p>

            <div className="timeline">
              {/* GKBI */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="experience-title-area">
                      <h3>Sekretaris (Secretary)</h3>
                      <div className="experience-company">GKBI Youth Community — Jakarta</div>
                    </div>
                    <span className="experience-date">Mag 2024 – Sekarang</span>
                  </div>
                  <p className="experience-detail-desc" style={{ marginTop: '8px' }}>
                    Menjadwalkan pertemuan bulanan komunitas, menyusun rancangan anggaran belanja (RAB) kegiatan, serta mengoordinasikan logistik untuk berbagai acara pemuda. Mengawasi alokasi sumber daya dan menyusun laporan evaluasi pasca-kegiatan demi memastikan akuntabilitas program.
                  </p>
                </div>
              </div>

              {/* Psychology Expo */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="experience-title-area">
                      <h3>Staff of Public Relation Division</h3>
                      <div className="experience-company">Psychology Expo UNJ — Jakarta</div>
                    </div>
                    <span className="experience-date">Jun 2023 – Des 2023</span>
                  </div>
                  <p className="experience-detail-desc" style={{ marginTop: '8px' }}>
                    Menjembatani komunikasi acara dengan berbagai mitra media (media partners), sponsor, dan pemangku kepentingan. Mengembangkan materi promosi digital, menjalankan kampanye di media sosial, menanggapi pertanyaan publik, serta menyusun undangan dan rilis pers resmi.
                  </p>
                </div>
              </div>

              {/* Inauguration Committee */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="experience-title-area">
                      <h3>Staff of Logistics Department</h3>
                      <div className="experience-company">Psychology Inauguration Organizing Committee — Jakarta</div>
                    </div>
                    <span className="experience-date">Sep 2022</span>
                  </div>
                  <p className="experience-detail-desc" style={{ marginTop: '8px' }}>
                    Mengatur logistik acara pelantikan mahasiswa psikologi, mengelola penataan tempat acara (venue setup), dan menjamin ketersediaan serta kelengkapan seluruh peralatan/perlengkapan. Mengawasi inventarisasi barang, menangani pengadaan (procurement), dan memperlancar aspek operasional selama acara berlangsung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Tools':
        return (
          <div key="tools">
            <div className="content-title-section">
              <h2 className="content-title">Keahlian & Alat Kerja</h2>
            </div>
            <p className="content-subtitle">
              Kombinasi <span className="highlight">Alat Teknis</span> dan <span className="highlight">Kemampuan Inti</span> yang saya gunakan untuk menunjang performa kerja HR dan Branding.
            </p>

            <div className="skills-container">
              {/* Technical Tools */}
              <div className="skills-section-block">
                <h3>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  Software & Technical Tools
                </h3>
                <div className="skills-grid">
                  <div className="skill-tag-card">
                    <div className="skill-icon-wrap">🎨</div>
                    <div className="skill-info">
                      <span className="skill-name">Canva</span>
                      <span className="skill-category">Design & Layout</span>
                    </div>
                  </div>

                  <div className="skill-tag-card">
                    <div className="skill-icon-wrap">📊</div>
                    <div className="skill-info">
                      <span className="skill-name">Google Workspace</span>
                      <span className="skill-category">Docs, Sheets, Slides, Calendar</span>
                    </div>
                  </div>

                  <div className="skill-tag-card">
                    <div className="skill-icon-wrap">🤝</div>
                    <div className="skill-info">
                      <span className="skill-name">Meta Business Suite</span>
                      <span className="skill-category">Social Media Admin</span>
                    </div>
                  </div>

                  <div className="skill-tag-card">
                    <div className="skill-icon-wrap">🎬</div>
                    <div className="skill-info">
                      <span className="skill-name">CapCut</span>
                      <span className="skill-category">Video Editing</span>
                    </div>
                  </div>

                  <div className="skill-tag-card">
                    <div className="skill-icon-wrap">💻</div>
                    <div className="skill-info">
                      <span className="skill-name">Microsoft Office</span>
                      <span className="skill-category">Word, Excel, PowerPoint</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Skills */}
              <div className="skills-section-block">
                <h3>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  Core & Professional Skills
                </h3>
                <div className="skills-grid">
                  <div className="skill-tag-card">
                    <div className="skill-icon-wrap">🚀</div>
                    <div className="skill-info">
                      <span className="skill-name">Project Management</span>
                      <span className="skill-category">Organizing & Budgeting</span>
                    </div>
                  </div>

                  <div className="skill-tag-card">
                    <div className="skill-icon-wrap">✍️</div>
                    <div className="skill-info">
                      <span className="skill-name">Content Creation</span>
                      <span className="skill-category">Social Media Strategy</span>
                    </div>
                  </div>

                  <div className="skill-tag-card">
                    <div className="skill-icon-wrap">🗣️</div>
                    <div className="skill-info">
                      <span className="skill-name">Presentations</span>
                      <span className="skill-category">Public Speaking & Pitching</span>
                    </div>
                  </div>

                  <div className="skill-tag-card">
                    <div className="skill-icon-wrap">📱</div>
                    <div className="skill-info">
                      <span className="skill-name">Social Media Admin</span>
                      <span className="skill-category">Employer Branding</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Experience (2023) */}
              <div className="skills-section-block">
                <h3>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4M12 8h.01"/>
                  </svg>
                  Pengalaman Lainnya
                </h3>
                <div className="achievements-grid">
                  <div className="achievement-card">
                    <span className="achievement-icon">📅</span>
                    <div className="achievement-content">
                      <h4>Koordinator Jadwal Kuliah & Liaison (2023)</h4>
                      <p>Bertanggung jawab mengoordinasikan jadwal kuliah kelas, memfasilitasi komunikasi yang lancar antara dosen dan mahasiswa, serta memastikan persiapan ruangan kelas beserta seluruh peralatan penunjang berjalan baik.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Education':
        return (
          <div key="education">
            <div className="content-title-section">
              <h2 className="content-title">Pendidikan</h2>
            </div>
            <p className="content-subtitle">
              Riwayat akademis saya dari <span className="highlight">Universitas Negeri Jakarta</span> hingga tingkat sekolah menengah.
            </p>

            <div className="education-grid">
              {/* UNJ */}
              <div className="education-card">
                <span className="edu-year">2021 – 2025</span>
                <h3 className="edu-school">Universitas Negeri Jakarta</h3>
                <p className="edu-degree">Bachelor of Psychology (Sarjana Psikologi)</p>
                <div className="edu-score">
                  IPK: <span className="score-badge">3.80 / 4.00</span>
                </div>
              </div>

              {/* SMAN 33 */}
              <div className="education-card">
                <span className="edu-year">2018 – 2021</span>
                <h3 className="edu-school">SMAN 33 Jakarta</h3>
                <p className="edu-degree">Senior High School (MIPA/IPA)</p>
                <div className="edu-score">
                  Nilai Rata-rata: <span className="score-badge">88.00 / 100.00</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      {/* Mobile Sticky Header */}
      <header className="mobile-header">
        <button className="menu-toggle" onClick={() => setIsMobileMenuOpen(true)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <span className="mobile-header-title">{profile.name}</span>
      </header>

      {/* Sidebar Overlay (Backdrop) */}
      <div 
        className={`sidebar-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Sidebar navigation */}
      <aside className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-top">
          <div className="profile-section">
            <img src="/susana.png" alt="Susana Bureni" className="profile-img" />
            <div className="profile-info">
              <h1 className="profile-name">{profile.name}</h1>
              <span className="profile-title">{profile.role}</span>
            </div>
            
            {/* Close Toggle Button for mobile drawer */}
            <button className="close-toggle" onClick={() => setIsMobileMenuOpen(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="nav-menu">
            {navItems.map((item) => (
              <button
                key={item.name}
                className={`nav-item ${activeTab === item.name ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(item.name);
                  setIsMobileMenuOpen(false); // Auto-close sidebar on mobile
                }}
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </nav>

          <div className="socials-section">
            <h4 className="socials-title">SOCIALS</h4>
            <div className="socials-list">
              <a href="https://www.linkedin.com/in/susana-bureni-49957323b/" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
              
              <a href="https://www.instagram.com/susana.bureni/" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                Instagram
              </a>

              <a href="https://www.tiktok.com/@keritingz?_r=1&_t=ZS-97B6ZE0kJsY" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 9a5 5 0 0 0-5-5v12a3 3 0 1 1-3-3"/>
                </svg>
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="sidebar-bottom">
          <a href="/CV-Susana Bureni (Juni 2026).pdf" target="_blank" rel="noopener noreferrer" className="cv-button">
            Read Resume
            <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
        </div>
      </aside>

      {/* Main card panel */}
      <main className="main-content">
        <div className="card-container">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;
