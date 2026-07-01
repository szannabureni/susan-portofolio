import { useState, useEffect } from 'react';
import './App.css';

// Type definitions
type TabType = 'Home' | 'Experience' | 'Social Activity' | 'Tools' | 'Education';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [carouselIndices, setCarouselIndices] = useState<number[]>([0, 0, 0, 0, 0]);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [showCertsModal, setShowCertsModal] = useState(false);
  const [activeCertIndex, setActiveCertIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<{ src: string; alt: string }[]>([]);
  const [lightboxActiveIdx, setLightboxActiveIdx] = useState<number>(0);

  const certificates = [
    {
      image: '/cert_1.jpg',
      title: '3rd Place Winner — PsychoVoice (Dekan Cup UNJ 2023)'
    },
    {
      image: '/cert_2.png',
      title: 'Staff of Equipment Division — UNJ Psychology Inauguration 2022'
    },
    {
      image: '/cert_3.jpg',
      title: '3rd Place Winner — UI/UX Web Design Competition (FMIPA UNJ 2023)'
    },
    {
      image: '/cert_4.jpg',
      title: 'Committee Member — ADHD Early Detection Psychoeducation (UNJ 2025)'
    },
    {
      image: '/cert_5.jpg',
      title: 'Committee Member — ADHD Teacher Knowledge Optimization (UNJ 2025)'
    }
  ];

  useEffect(() => {
    if (!showCertsModal) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowCertsModal(false);
      } else if (e.key === 'ArrowRight') {
        setActiveCertIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
      } else if (e.key === 'ArrowLeft') {
        setActiveCertIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showCertsModal, certificates.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndices((prev) => {
        const copy = [...prev];
        if (copy.length >= 5) {
          copy[0] = (copy[0] + 1) % 3;
          copy[1] = (copy[1] + 1) % 3;
          copy[2] = (copy[2] + 1) % 3;
          copy[3] = (copy[3] + 1) % 3; // GROW Secretary (3 photos)
          copy[4] = (copy[4] + 1) % 3; // DNA Kids Sunday School Teacher (now 3 photos)
        }
        return copy;
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (lightboxImages.length === 0) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxImages([]);
      } else if (e.key === 'ArrowRight') {
        setLightboxActiveIdx((prev) => (prev === lightboxImages.length - 1 ? 0 : prev + 1));
      } else if (e.key === 'ArrowLeft') {
        setLightboxActiveIdx((prev) => (prev === 0 ? lightboxImages.length - 1 : prev - 1));
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImages]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      return next;
    });
  };

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
      { src: '/kemnaker_intern_1.jpg?v=1', alt: 'Foto tim HR iNews Media Group' },
      { src: '/kemnaker_intern_2.jpg?v=1', alt: 'Foto HR Intern iNews Media Group' },
      { src: '/kemnaker_intern_3.jpg?v=1', alt: 'Salah satu dokumentasi kegiatan training saya' }
    ],
    [
      { src: '/suitmedia_freelance_1.jpg?v=1', alt: 'Foto Tim HR Suitmedia Jakarta' },
      { src: '/suitmedia_freelance_2.jpg?v=1', alt: 'Dokumentasi kegiatan employee engagement dengan Suitmedia Bandung' },
      { src: '/suitmedia_freelance_3.jpg?v=1', alt: 'Dokumentasi Onboarding Intern Suitmedia Jakarta Program MSIB Batch 7' }
    ],
    [
      { src: '/suitmedia_intern_1.jpg?v=1', alt: 'Dokumentasi kegiatan employee engagement yaitu offboarding intern Suitmedia program MSIB Batch 6' },
      { src: '/suitmedia_intern_2.jpg?v=1', alt: 'Foto salah satu kegiatan employee engagement di Jakarta' },
      { src: '/suitmedia_intern_3.jpg?v=1', alt: 'Foto kegiatan Halal Bi Halal Suitmedia Jakarta' }
    ]
  ];

  const socialImages = [
    [
      { src: '/grow_secretary_1.jpg?v=1', alt: 'GROW Youth Community Outing' },
      { src: '/grow_secretary_2.jpg?v=1', alt: 'GROW Christmas Dancer Team' },
      { src: '/grow_secretary_3.jpg?v=1', alt: 'GROW Youth Service Group' }
    ],
    [
      { src: '/sunday_school_1.jpg?v=1', alt: 'DNA Kids Sunday School Christmas Event' },
      { src: '/sunday_school_2.jpg?v=1', alt: 'DNA Kids Sunday School Activity' },
      { src: '/sunday_school_3.jpg?v=1', alt: 'DNA Kids Sunday School Teacher & Kids Christmas Celebration Group Photo' }
    ]
  ];

  // Interactive profile data
  const profile = {
    name: 'Susana Bureni',
    role: 'Psychology Graduate | HR & Employer Branding',
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
                <img src="/susana.png?v=2" alt="Susana Bureni" className="home-hero-img" />
              </div>
            </div>

            <h3 className="section-header">Key Statistics & Achievements</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-header-horizontal">
                  <div className="stat-value-large">24+</div>
                  <div className="stat-label-single-line">Training Sessions</div>
                </div>
                <div className="stat-desc">Attended by 400+ participants with a 3.5/4.0 satisfaction score at iNews Media Group.</div>
              </div>
              <div className="stat-card">
                <div className="stat-header-horizontal">
                  <div className="stat-value-large">20K+</div>
                  <div className="stat-label-stack">
                    <div className="stat-label-line-text">Employer</div>
                    <div className="stat-label-line-text">Branding Views</div>
                  </div>
                </div>
                <div className="stat-desc">Reached 7k+ accounts with 67.4% non-follower views captured in 90 days.</div>
              </div>
              <div className="stat-card">
                <div className="stat-header-horizontal">
                  <div className="stat-value-large">500+</div>
                  <div className="stat-label-single-line">CVs Screened</div>
                </div>
                <div className="stat-desc">Screened application profiles and recruited 12 interns for 5 divisions at Suitmedia.</div>
              </div>
            </div>
          </div>
        );

      case 'Experience':
        return (
          <div key="experience">
            <div className="content-title-section">
              <h2 className="content-title">Work Experience</h2>
            </div>
            <p className="content-subtitle">
              A look into my professional journey, bridging the gap between a <span className="highlight">strong focus on people in Human Resources</span> and <span className="highlight">creative Employer Branding</span>.
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
                                if (offset === 0) {
                                  setLightboxImages(expImages[0]);
                                  setLightboxActiveIdx(imgIdx);
                                }
                                else if (offset === 1) handleNext(0);
                                else if (offset === 2) handlePrev(0);
                              }}
                            >
                              <img src={img.src} alt={img.alt} className="carousel-card-img" />
                            </div>
                          );
                        })}
                      </div>
                      <div className="exp-carousel-controls">
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
                      </div>
                    </div>

                    {/* Right Column: Text Information */}
                    <div className="experience-card-info">
                      <div className="experience-header">
                        <div className="experience-title-area">
                          <h3>HR Intern (MagangHub Kemnaker Program)</h3>
                          <div className="experience-company">MNC Television Network (iNews Media Group) — Jakarta</div>
                        </div>
                        <span className="experience-date">Nov 2025 – May 2026</span>
                      </div>
                      <div className="experience-company-desc">
                        <p>
                          As a fresh graduate, passing the highly competitive MagangHub Kemnaker national selection was an incredible stepping stone. Out of over 180,000 applicants nationwide, I was chosen as one of the 62,754 talents and eventually completed my tenure with an 'Excellent' predicate. At iNews Media Group, my role went far beyond conventional HR administrative tasks. I was challenged to bring a fresh perspective by integrating HR management with a creative visual approach, from overseeing employee development to building the company's digital presence.
                        </p>
                        <p>
                          During my 6-month tenure, here are the key areas where I made a tangible impact:
                        </p>
                      </div>
                      
                      <ul className="experience-details">
                        <li className="experience-detail-item">
                          <strong className="experience-detail-title">Learning & Training Development</strong>
                          <p className="experience-detail-desc">
                            Contributed to the execution of dozens of training sessions for hundreds of employees with highly satisfactory feedback. I also revamped the new hire onboarding experience to be more modern by creating interactive modules and comprehensive handbooks.
                          </p>
                        </li>

                        <li className="experience-detail-item">
                          <strong className="experience-detail-title">Creative Employer Branding</strong>
                          <p className="experience-detail-desc">
                            Acted as the driving force behind the company's social media content strategy, specifically for the Human Resources department. This ranged from refreshing the visual identity to producing dozens of content pieces that successfully expanded our reach to thousands of new organic audiences.
                          </p>
                        </li>
                      </ul>
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
                                if (offset === 0) {
                                  setLightboxImages(expImages[1]);
                                  setLightboxActiveIdx(imgIdx);
                                }
                                else if (offset === 1) handleNext(1);
                                else if (offset === 2) handlePrev(1);
                              }}
                            >
                              <img src={img.src} alt={img.alt} className="carousel-card-img" />
                            </div>
                          );
                        })}
                      </div>
                      <div className="exp-carousel-controls">
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
                      </div>
                    </div>

                    {/* Right Column: Text Information */}
                    <div className="experience-card-info">
                      <div className="experience-header">
                        <div className="experience-title-area">
                          <h3>Jr. HR Freelance</h3>
                          <div className="experience-company">Suitmedia — Jakarta</div>
                        </div>
                        <span className="experience-date">Jul 2024 – Oct 2024</span>
                      </div>
                      <div className="experience-company-desc">
                        <p>
                          Being entrusted once again by Suitmedia after my internship ended gave me the room to take on more independent responsibilities. In this freelance role, my focus centered on managing the internship recruitment cycle, handling internal initiatives, and strengthening communication bridges within the digital agency environment. This experience sharpened my ability to manage HR operations more tactically and structurally.
                        </p>
                        <p>
                          Here are my main areas of contribution:
                        </p>
                      </div>
                      
                      <ul className="experience-details">
                        <li className="experience-detail-item">
                          <strong className="experience-detail-title">Internship Recruitment</strong>
                          <p className="experience-detail-desc">
                            Managed the entire internship recruitment process end-to-end. These responsibilities included screening hundreds of incoming CVs, selecting potential candidates for various positions, and handling the drafting and coordination of their employment contracts.
                          </p>
                        </li>

                        <li className="experience-detail-item">
                          <strong className="experience-detail-title">Employee Engagement</strong>
                          <p className="experience-detail-desc">
                            Designed and executed various employee engagement programs to maintain work motivation, efficiently managed event budget allocations, and compiled in-depth evaluation reports that met the company's KPI standards.
                          </p>
                        </li>

                        <li className="experience-detail-item">
                          <strong className="experience-detail-title">Internal Communication</strong>
                          <p className="experience-detail-desc">
                            Scheduled and coordinated regular monthly meetings for each department to minimize communication barriers and improve cross-functional synergy within the company.
                          </p>
                        </li>
                      </ul>
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
                                if (offset === 0) {
                                  setLightboxImages(expImages[2]);
                                  setLightboxActiveIdx(imgIdx);
                                }
                                else if (offset === 1) handleNext(2);
                                else if (offset === 2) handlePrev(2);
                              }}
                            >
                              <img src={img.src} alt={img.alt} className="carousel-card-img" />
                            </div>
                          );
                        })}
                      </div>
                      <div className="exp-carousel-controls">
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
                      </div>
                    </div>

                    {/* Right Column: Text Information */}
                    <div className="experience-card-info">
                      <div className="experience-header">
                        <div className="experience-title-area">
                          <h3>HR Intern (MSIB Program)</h3>
                          <div className="experience-company">Suitmedia — Jakarta</div>
                        </div>
                        <span className="experience-date">Feb 2024 – Jun 2024</span>
                      </div>
                      <div className="experience-company-desc">
                        <p>
                          Being part of the Kampus Merdeka MSIB Batch 6 program at Suitmedia was an extraordinary competitive achievement. Out of more than 150,000 university students applying from all over Indonesia, only 47,984 passed the national selection, and I successfully became one of them. This valuable experience served as my initial foundation in exploring the HR world practically, specifically in balancing operational stability and creativity within the digital agency industry.
                        </p>
                        <p>
                          Some of the tangible contributions I made during this program include:
                        </p>
                      </div>
                      
                      <ul className="experience-details">
                        <li className="experience-detail-item">
                          <strong className="experience-detail-title">Operational & Engagement Support</strong>
                          <p className="experience-detail-desc">
                            Actively contributed to maintaining a positive work environment through the execution of employee engagement activities, regular budget management, and the preparation of accurate event evaluation reports.
                          </p>
                        </li>

                        <li className="experience-detail-item">
                          <strong className="experience-detail-title">Content Documentation & Asset Management</strong>
                          <p className="experience-detail-desc">
                            Supported the company's social media branding strategy by acting as the primary asset provider. I took full responsibility for documenting company events, curating the best photos, and summarizing activities into ready-to-use materials for the creative team.
                          </p>
                        </li>

                        <li className="experience-detail-item">
                          <strong className="experience-detail-title">Cross-Functional Communication</strong>
                          <p className="experience-detail-desc">
                            Facilitated the smooth flow of internal information by organizing schedules and agendas for regular cross-departmental meetings.
                          </p>
                        </li>
                      </ul>
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
              <h2 className="content-title">Social Activity</h2>
            </div>
            <p className="content-subtitle">
              Beyond the office, I love <span className="highlight">giving back to my local community</span>. Serving in these roles lets me <span className="highlight">channel my creative energy</span> into something truly meaningful. Take a peek at some of the <span className="highlight">visual stories</span> I’ve helped create!
            </p>

            <div className="timeline">
              {/* GROW Secretary */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="experience-card">
                  <div className="experience-card-content">
                    {/* Left Column: 3D Image Stack Carousel */}
                    <div className="exp-carousel-wrapper">
                      <div className="exp-carousel-container">
                        {socialImages[0].map((img, imgIdx) => {
                          const activeIdx = carouselIndices[3];
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
                                if (offset === 0) {
                                  setLightboxImages(socialImages[0]);
                                  setLightboxActiveIdx(imgIdx);
                                }
                                else if (offset === 1) handleNext(3);
                                else if (offset === 2) handlePrev(3);
                              }}
                            >
                              <img src={img.src} alt={img.alt} className="carousel-card-img" />
                            </div>
                          );
                        })}
                      </div>
                      <div className="exp-carousel-controls">
                        <div className="carousel-dots">
                          {[0, 1, 2].map((dot) => (
                            <span 
                              key={dot} 
                              className={`carousel-dot ${carouselIndices[3] === dot ? 'active' : ''}`}
                              onClick={() => {
                                setCarouselIndices(prev => {
                                  const copy = [...prev];
                                  copy[3] = dot;
                                  return copy;
                                });
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Text Information */}
                    <div className="experience-card-info">
                      <div className="experience-header">
                        <div className="experience-title-area">
                          <h3>Secretary</h3>
                          <div className="experience-company">GROW (Gereja Kristus Bojong Indah Youth Community) — Jakarta</div>
                        </div>
                        <span className="experience-date">2024 – Present</span>
                      </div>
                      <ul className="experience-details social-activity-details" style={{ marginTop: '12px' }}>
                        <li className="experience-detail-item">
                          <p className="experience-detail-desc">
                            Breathed life into our community updates by designing weekly flyers and vibrant visual assets, keeping our members warmly connected and well-informed.
                          </p>
                        </li>
                        <li className="experience-detail-item">
                          <p className="experience-detail-desc">
                            Collaborated closely with the core committee to brainstorm, shape, and bring our annual youth programs to life—always ensuring our budget was managed with care and precision.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sunday School Teacher */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="experience-card">
                  <div className="experience-card-content">
                    {/* Left Column: 3D Image Stack Carousel */}
                    <div className="exp-carousel-wrapper">
                      <div className="exp-carousel-container">
                        {socialImages[1].map((img, imgIdx) => {
                          const activeIdx = carouselIndices[4];
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
                                if (offset === 0) {
                                  setLightboxImages(socialImages[1]);
                                  setLightboxActiveIdx(imgIdx);
                                }
                                else if (offset === 1) handleNext(4);
                                else if (offset === 2) handlePrev(4);
                              }}
                            >
                              <img src={img.src} alt={img.alt} className="carousel-card-img" />
                            </div>
                          );
                        })}
                      </div>
                      <div className="exp-carousel-controls">
                        <div className="carousel-dots">
                          {[0, 1, 2].map((dot) => (
                            <span 
                              key={dot} 
                              className={`carousel-dot ${carouselIndices[4] === dot ? 'active' : ''}`}
                              onClick={() => {
                                setCarouselIndices(prev => {
                                  const copy = [...prev];
                                  copy[4] = dot;
                                  return copy;
                                });
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Text Information */}
                    <div className="experience-card-info">
                      <div className="experience-header">
                        <div className="experience-title-area">
                          <h3>Sunday School Teacher</h3>
                          <div className="experience-company">DNA Kids (Gereja Bethel Indonesia Puri Indah) — Jakarta</div>
                        </div>
                        <span className="experience-date">2021 – 2023</span>
                      </div>
                      <ul className="experience-details social-activity-details" style={{ marginTop: '12px' }}>
                        <li className="experience-detail-item">
                          <p className="experience-detail-desc">
                            Teamed up with fellow educators during monthly creative sessions to dream up and construct playful, engaging learning materials that spark kids' curiosity.
                          </p>
                        </li>
                        <li className="experience-detail-item">
                          <p className="experience-detail-desc">
                            Stepped in front of the camera as a host and storyteller for our online Sunday School broadcasts, while also weaving behind-the-scenes magic to produce fresh, engaging social media content.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Tools':
        return (
          <div key="tools">
            <div className="content-title-section">
              <h2 className="content-title">Skills & Work Tools</h2>
            </div>
            <p className="content-subtitle">
              A combination of <span className="highlight">Technical Tools</span> and <span className="highlight">Core Skills</span> that I use to support HR and branding performance.
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
                  Other Experience
                </h3>
                <div className="achievements-grid">
                  <div className="achievement-card">
                    <span className="achievement-icon">📅</span>
                    <div className="achievement-content">
                      <h4>Course Scheduler & Liaison Coordinator (2023)</h4>
                      <p>Responsible for coordinating class lecture schedules, facilitating smooth communication between lecturers and students, and ensuring classroom readiness along with all supporting equipment runs well.</p>
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
              <h2 className="content-title">Education</h2>
            </div>
            <p className="content-subtitle">
              A glimpse into my academic journey, highlighting not just grades, but <span className="highlight">active participations</span> and milestones that shaped my personal growth.
            </p>

            <div className="education-grid">
              {/* UNJ */}
              <div className="education-card">
                <div className="edu-card-content">
                  <div className="edu-image-wrapper">
                    <img src="/unj_campus.png?v=3" alt="Universitas Negeri Jakarta" className="edu-card-img" />
                  </div>
                  <div className="edu-info-wrapper">
                    <span className="edu-year">2021 – 2025</span>
                    <h3 className="edu-school">Universitas Negeri Jakarta</h3>
                    <p className="edu-degree">Bachelor of Psychology</p>
                    <div className="edu-score">
                      GPA: <span className="score-badge">3.80 / 4.00</span>
                    </div>
                  </div>
                </div>
                <hr className="edu-divider" />
                <div className="edu-details">
                  <h4 className="edu-details-title">Key Involvements & Awards:</h4>
                  <ul className="edu-details-list">
                    <li>
                      <span className="edu-bullet">✦</span>
                      <span className="edu-bullet-text">Class Coordinator for Urban Environmental Psychology (1 Semester)</span>
                    </li>
                    <li>
                      <span className="edu-bullet">✦</span>
                      <span className="edu-bullet-text">Committee Member for UNJ Psychology Expo & Inauguration</span>
                    </li>
                    <li>
                      <span className="edu-bullet">✦</span>
                      <span className="edu-bullet-text">Active Participant in Lecturers' Community Service Programs</span>
                    </li>
                    <li>
                      <span className="edu-bullet">✦</span>
                      <span className="edu-bullet-text">3rd Place Winner: Web Portfolio Design Competition (UI/UX)</span>
                    </li>
                    <li>
                      <span className="edu-bullet">✦</span>
                      <span className="edu-bullet-text">3rd Place Winner: Faculty-Level Singing Competition</span>
                    </li>
                  </ul>
                </div>
                <div className="edu-certs-footer">
                  <button className="view-certs-btn" onClick={() => { setActiveCertIndex(0); setShowCertsModal(true); }}>
                    <span className="btn-icon">📜</span>
                    <span className="btn-text">View Certifications</span>
                  </button>
                </div>
              </div>

              {/* SMAN 33 */}
              <div className="education-card">
                <div className="edu-card-content">
                  <div className="edu-image-wrapper">
                    <img src="/sman33_school.png?v=3" alt="SMAN 33 Jakarta" className="edu-card-img" />
                  </div>
                  <div className="edu-info-wrapper">
                    <span className="edu-year">2018 – 2021</span>
                    <h3 className="edu-school">SMAN 33 Jakarta</h3>
                    <p className="edu-degree">Senior High School (IPS)</p>
                    <div className="edu-score">
                      Average Score: <span className="score-badge">88.00 / 100.00</span>
                    </div>
                  </div>
                </div>
                <hr className="edu-divider" />
                <div className="edu-details">
                  <h4 className="edu-details-title">Key Involvements & Awards:</h4>
                  <ul className="edu-details-list">
                    <li>
                      <span className="edu-bullet">✦</span>
                      <span className="edu-bullet-text">Student Council (OSIS) Member (1 Period)</span>
                    </li>
                    <li>
                      <span className="edu-bullet">✦</span>
                      <span className="edu-bullet-text">President of Choir Extracurricular (1 Period)</span>
                    </li>
                    <li>
                      <span className="edu-bullet">✦</span>
                      <span className="edu-bullet-text">Fundraising Committee for Christian Spiritual Retreat</span>
                    </li>
                  </ul>
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
      {/* Floating Theme Switch Selector */}
      <div className="theme-switch-container">
        <button 
          className={`theme-switch-toggle ${theme === 'dark' ? 'active' : ''}`} 
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          <span className="theme-switch-knob">
            <svg className="knob-icon sun-icon" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <svg className="knob-icon moon-icon" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </span>
        </button>
      </div>

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
            <img src="/susana.png?v=2" alt="Susana Bureni" className="profile-img" />
            <div className="profile-info" style={{ flexGrow: 1 }}>
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

      {/* Certificate Lightbox Modal */}
      {showCertsModal && (
        <div className="certs-modal-overlay" onClick={() => setShowCertsModal(false)}>
          <div className="certs-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="certs-modal-close" onClick={() => setShowCertsModal(false)} aria-label="Close modal">
              &times;
            </button>
            
            <button 
              className="certs-nav-btn prev" 
              onClick={() => setActiveCertIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1))}
              aria-label="Previous certificate"
            >
              &#8249;
            </button>
            
            <div className="certs-slide-container">
              <div className="certs-image-wrapper">
                <img 
                  src={certificates[activeCertIndex].image} 
                  alt={certificates[activeCertIndex].title} 
                  className="certs-modal-img" 
                />
              </div>
              <div className="certs-modal-caption">
                <span className="certs-counter">{activeCertIndex + 1} / {certificates.length}</span>
                <p className="certs-title">{certificates[activeCertIndex].title}</p>
              </div>
            </div>
            
            <button 
              className="certs-nav-btn next" 
              onClick={() => setActiveCertIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1))}
              aria-label="Next certificate"
            >
              &#8250;
            </button>

            <div className="certs-indicator-dots">
              {certificates.map((_, idx) => (
                <button
                  key={idx}
                  className={`certs-dot ${idx === activeCertIndex ? 'active' : ''}`}
                  onClick={() => setActiveCertIndex(idx)}
                  aria-label={`Go to certificate ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Reusable Image Zoom/Lightbox Modal */}
      {lightboxImages.length > 0 && (
        <div className="lightbox-modal-overlay" onClick={() => setLightboxImages([])}>
          <div className="lightbox-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-modal-close" onClick={() => setLightboxImages([])} aria-label="Close image">
              &times;
            </button>
            
            {lightboxImages.length > 1 && (
              <button 
                className="lightbox-nav-btn prev" 
                onClick={() => setLightboxActiveIdx((prev) => (prev === 0 ? lightboxImages.length - 1 : prev - 1))}
                aria-label="Previous image"
              >
                &#8249;
              </button>
            )}
            
            <div className="lightbox-modal-image-wrapper">
              <img 
                src={lightboxImages[lightboxActiveIdx].src} 
                alt={lightboxImages[lightboxActiveIdx].alt} 
                className="lightbox-modal-img" 
              />
            </div>
            
            {lightboxImages.length > 1 && (
              <button 
                className="lightbox-nav-btn next" 
                onClick={() => setLightboxActiveIdx((prev) => (prev === lightboxImages.length - 1 ? 0 : prev + 1))}
                aria-label="Next image"
              >
                &#8250;
              </button>
            )}
            
            <div className="lightbox-modal-footer">
              <span className="lightbox-counter">{lightboxActiveIdx + 1} / {lightboxImages.length}</span>
              {lightboxImages[lightboxActiveIdx].alt && (
                <p className="lightbox-modal-caption">{lightboxImages[lightboxActiveIdx].alt}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
