/**
 * Ionic Patrimoine Website Renderer
 * 
 * Usage:
 *   <div id="ionic-patrimoine"></div>
 *   <script src="renderWebsite.js"></script>
 *   <script>renderWebsite('ionic-patrimoine');</script>
 * 
 * Or for Wix integration:
 *   <script src="https://your-domain.com/renderWebsite.js"></script>
 *   <script>window.ionicPatrimoine = renderWebsite();</script>
 *   // Then call: window.ionicPatrimoine.mount('selector');
 */

function renderWebsite(containerId) {
    const PREFIX = 'ip-'; // Scoped prefix for all CSS classes
    
    const translations = {
        fr: {
            nav: {
                about: "À propos de nous",
                mission: "Vision Mission Valeurs",
                services: "Nos services",
                contact: "Contactez-nous",
                book: "Rendez-vous",
                more: "Plus",
                patrimonio: "Gestion de Patrimoine",
                protections: "Protections",
                accesClient: "Accès client"
            },
            hero: {
                title: "Votre équilibre. Votre avenir. Votre héritage.",
                subtitle: "Planification financière indépendante et stratégique pour familles, professionnels et entrepreneurs.",
                bookBtn: "Prendre rendez-vous",
                servicesBtn: "Nos services"
            },
            about: {
                title: "À propos de nous",
                name: "Marc-Olivier Poulin, Pl Fin, CR®",
                subtitle: "Planificateur financier – Fondateur",
                desc1: "Marc-Olivier Poulin est planificateur financier et fondateur de Ionic Patrimoine inc., un cabinet indépendant spécialisé dans l'accompagnement stratégique des familles, des professionnels et des entrepreneurs dans la gestion et la structuration de leur patrimoine.",
                desc2: "Issu de l'Université Laval, reconnue pour la qualité de sa formation en affaires et en finance, de l'Institut de Planification Financière, The Canadian Institute of Financial Planning (CIFP), il a développé la rigueur analytique et la discipline intellectuelle qui guident aujourd'hui sa pratique professionnelle.",
                desc3: "Avant de fonder Ionic Patrimoine inc., Marc-Olivier a évolué au sein de services spécialisés de grandes institutions financières canadiennes. Cette expérience lui a permis de développer une compréhension approfondie des enjeux financiers auxquels font face les clientèles exigeantes.",
                desc4: "Dans un univers financier de plus en plus complexe, Marc-Olivier privilégie une approche stratégique et intégrée de la planification financière. Son travail s'appuie sur les sept domaines fondamentaux de la planification financière, permettant d'intégrer l'ensemble des dimensions financières, fiscales, successorales et de gestion des risques dans une stratégie globale et cohérente.",
                mica: {
                    title: "Un réseau de spécialistes",
                    desc: "En tant que professionnel affilié à MICA Capital, j'ai accès à un réseau de haut niveau de spécialistes pour offrir à mes clients des solutions personnalisées et indépendantes."
                },
                clientAccess: {
                    title: "Accès Client",
                    desc: "Accédez à votre espace client pour consulter vos documents et suivre l'évolution de votre patrimoine.",
                    btn: "Portail Client"
                }
            },
            why: {
                title: "Pourquoi la colonne ionique grecque est-elle au cœur de notre image ?",
                subtitle: "Comme une colonne soutient une structure, nous sommes un pilier stable et discret dans la vie financière de nos clients.",
                equilibre: {
                    title: "Équilibre",
                    desc: "Notre approche est fondée sur l'équilibre, la rigueur et l'humanité. Chaque plan est bâti avec soin, pour aujourd'hui mais aussi pour demain."
                },
                perennite: {
                    title: "Pérennité",
                    desc: "Inspirée de l'architecture grecque classique, la colonne symbolise la pérennité. La sagesse, la structure et la durabilité ne se démodent jamais."
                },
                confiance: {
                    title: "Confiance",
                    desc: "Bâtir, protéger et transmettre un patrimoine qui résiste au temps. Nous sommes avec vous, pour vous, et pour les générations à venir."
                },
                conclusion: "Inspirée de l'architecture grecque classique, la colonne symbolise la pérennité. Elle nous rappelle que la sagesse, la structure et la durabilité ne se démodent jamais. Elle reflète notre vision : bâtir, protéger et transmettre un patrimoine qui résiste au temps.",
                closing: "Chez Ionic Patrimoine, nous bâtissons avec vous, pour vous, et pour les générations à venir."
            },
            mission: {
                title: "Notre Mission, Vision & Valeurs",
                mission: {
                    title: "Notre Mission",
                    desc: "Accompagner nos clients dans toutes les étapes clés de leur vie financière. Nous aidons à bâtir, protéger et transmettre leur patrimoine grâce à une approche personnalisée et efficace. Nous sommes libres de recommander les meilleurs produits et stratégies du marché, sans restriction et pleinement axé sur la personnalisation. Nous bâtissons des relations de confiance, durables, fondées sur des décisions éclairées, pas sur des produits imposés."
                },
                vision: {
                    title: "Notre Vision",
                    desc: "Être une référence incontournable en planification financière et en gestion de patrimoine durable au Québec, en alliant expertise, intégrité et accessibilité. Nous aspirons à bâtir un cabinet reconnu pour sa profonde humanité, son indépendance intellectuelle et sa capacité à livrer une valeur concrète, stratégique et intergénérationnelle."
                },
                valeurs: {
                    title: "Nos Valeurs",
                    eq: "Équilibre",
                    eqDesc: "Nous concevons des stratégies qui trouvent le bon équilibre entre croissance, protection et flexibilité, toujours en fonction du profil, des besoins et du confort de chaque client.",
                    per: "Pérennité",
                    perDesc: "Nous bâtissons avec une vision à long terme. Chaque recommandation est pensée pour résister au temps : préserver les acquis, protéger les générations futures et assurer une croissance durable du patrimoine familial.",
                    transp: "Transparence",
                    transpDesc: "Nous croyons que la confiance se construit sur la clarté. C'est pourquoi nous nous engageons à expliquer chaque frais, chaque option, chaque avantage et chaque risque avec rigueur et honnêteté.",
                    indep: "Indépendance",
                    indepDesc: "Nous ne sommes liés à aucun produit maison, à aucune banque, ni à aucun quota de vente. Cette liberté totale nous permet de recommander uniquement ce qui est dans l'intérêt exclusif de nos clients.",
                    prox: "Proximité humaine",
                    proxDesc: "Derrière chaque stratégie, il y a une relation humaine réelle. Nous nous impliquons personnellement auprès de chaque client, avec loyauté, disponibilité et constance."
                }
            },
            services: {
                title: "NOS SERVICES",
                invest: {
                    title: "Épargne & Investissements",
                    items: [
                        "Fonds négociés en bourse",
                        "Mandat de gestion privée",
                        "Fonds communs de placement",
                        "Fonds alternatifs liquides",
                        "Fonds distincts & rentes viagères",
                        "Certificats de placement garanti"
                    ],
                    desc: "Nous concevons des stratégies d'épargne et de placement alignées sur vos objectifs, votre horizon de temps et votre tolérance au risque.",
                    footer: "Nous concevons des stratégies alignées sur vos objectifs, votre horizon et votre tolérance au risque.",
                    disclaimer: "Les recommandations de placement, y compris celles portant sur les fonds listés précédemment, sont effectuées par l'entremise de MICA Capital inc., cabinet de services financiers dûment inscrit auprès des autorités réglementaires."
                },
                plan: {
                    title: "Planification Financière",
                    desc: "Nous offrons une approche globale qui tient compte de toutes les dimensions de votre situation. Notre rôle est de vous aider à clarifier vos objectifs, structurer vos finances et prendre des décisions éclairées à chaque étape de votre vie.",
                    footer: "Grâce à notre expertise, nous élaborons des plans personnalisés, réalistes et durables. Toujours dans votre intérêt."
                },
                protect: {
                    title: "Protection du patrimoine",
                    desc: "Nous veillons à ce que votre patrimoine soit protégé de manière optimale, sans complexité inutile ni multiplication de produits. Notre approche repose sur une analyse rigoureuse des risques réels et sur des solutions simples, ciblées et efficaces."
                }
            },
            booking: {
                title: "Prenez rendez-vous",
                subtitle: "Planifiez une consultation gratuite pour discuter de votre situation financière.",
                btn: "Réserver maintenant",
                call: "Nous appeler"
            },
            contact: {
                title: "Contactez-nous",
                form: {
                    prenom: "Prénom",
                    nom: "Nom de famille",
                    email: "E-mail",
                    message: "Message",
                    send: "Envoyer",
                    success: "Merci pour votre envoi !"
                },
                info: {
                    title: "Informations de contact"
                },
                phone: "1-418-957-3162",
                email: "info@ionicpatrimoine.com",
                address: "7900 Blvd Pierre-Bertrand bureau 300, Québec, QC G2J 0C5",
                social: {
                    title: "Suivez-nous"
                },
                hours: "Heures d'ouverture: Lun-Ven 9h-17h"
            },
            footer: {
                tagline: "Votre partenaire pour bâtir, protéger et transmettre votre patrimoine.",
                links: {
                    title: "Liens rapides"
                },
                legal: {
                    title: "Légal",
                    privacy: "Politique de confidentialité",
                    terms: "Mentions légales",
                    cookies: "Politique de cookies"
                },
                privacyUrl: "https://www.ionicpatrimoine.com/politique-de-confidentialité",
                termsUrl: "https://www.ionicpatrimoine.com/mentions-légales",
                cookiesUrl: "https://www.ionicpatrimoine.com/politique-de-cookies",
                rights: "Tous droits réservés."
            }
        },
        en: {
            nav: {
                about: "About",
                mission: "Vision Mission Values",
                services: "Our Services",
                contact: "Contact",
                book: "Book Appointment",
                more: "More",
                patrimonio: "Wealth Management",
                protections: "Protections",
                accesClient: "Client Access"
            },
            hero: {
                title: "Your balance. Your future. Your legacy.",
                subtitle: "Independent and strategic financial planning for families, professionals and entrepreneurs.",
                bookBtn: "Book an appointment",
                servicesBtn: "Our services"
            },
            about: {
                title: "About us",
                name: "Marc-Olivier Poulin, CFP, CR®",
                subtitle: "Financial Planner – Founder",
                desc1: "Marc-Olivier Poulin is a financial planner and founder of Ionic Patrimoine inc., an independent firm specializing in strategic guidance for families, professionals and entrepreneurs in managing and structuring their assets.",
                desc2: "A graduate of Université Laval and the Financial Planning Institute (CIFP), he developed the analytical rigor and intellectual discipline that guide his professional practice.",
                desc3: "Before founding Ionic Patrimoine inc., Marc-Olivier worked within specialized services of major Canadian financial institutions, developing a thorough understanding of the financial challenges facing demanding clients.",
                desc4: "In an increasingly complex financial universe, Marc-Olivier prioritizes a strategic and integrated approach to financial planning. His work draws on the seven fundamental domains of financial planning.",
                mica: {
                    title: "A Network of Specialists",
                    desc: "As a professional affiliated with MICA Capital, I have access to a high-level network of specialists to offer my clients personalized and independent solutions."
                },
                clientAccess: {
                    title: "Client Access",
                    desc: "Access your client portal to view your documents and track your wealth progress.",
                    btn: "Client Portal"
                }
            },
            why: {
                title: "Why is the Greek ionic column at the heart of our brand?",
                subtitle: "Like a column supports a structure, we are a stable and discreet pillar in our clients' financial lives.",
                equilibre: {
                    title: "Balance",
                    desc: "Our approach is founded on balance, rigor and humanity. Every plan is built with care, for today and for tomorrow."
                },
                perennite: {
                    title: "Durability",
                    desc: "Inspired by classical Greek architecture, the column symbolizes permanence. Wisdom, structure and durability never go out of style."
                },
                confiance: {
                    title: "Trust",
                    desc: "Building, protecting and transmitting assets that stand the test of time. We are with you, for you, and for generations to come."
                },
                conclusion: "Inspired by classical Greek architecture, the column symbolizes permanence. It reminds us that wisdom, structure and durability never go out of style. It reflects our vision: building, protecting and transmitting assets that stand the test of time.",
                closing: "At Ionic Patrimoine, we build with you, for you, and for generations to come."
            },
            mission: {
                title: "Our Mission, Vision & Values",
                mission: {
                    title: "Our Mission",
                    desc: "To accompany our clients through all key stages of their financial life. We help them build, protect and transmit their assets through a personalized and effective approach."
                },
                vision: {
                    title: "Our Vision",
                    desc: "To be a leading reference in financial planning and sustainable wealth management in Quebec, combining expertise, integrity and accessibility."
                },
                valeurs: {
                    title: "Our Values",
                    eq: "Balance",
                    eqDesc: "We design strategies that find the right balance between growth, protection and flexibility, always based on each client's profile, needs and comfort.",
                    per: "Durability",
                    perDesc: "We build with a long-term vision. Every recommendation is designed to withstand time: preserving assets, protecting future generations and ensuring sustainable family wealth growth.",
                    transp: "Transparency",
                    transpDesc: "We believe that trust is built on clarity. That's why we commit to explaining every fee, every option, every advantage and every risk with rigor and honesty.",
                    indep: "Independence",
                    indepDesc: "We're not tied to any house product, any bank, or any sales quota. This total freedom allows us to recommend only what is in the exclusive interest of our clients.",
                    prox: "Human Proximity",
                    proxDesc: "Behind every strategy, there's a real human relationship. We personally engage with each client, with loyalty, availability and consistency."
                }
            },
            services: {
                title: "OUR SERVICES",
                invest: {
                    title: "Savings & Investments",
                    items: [
                        "Exchange-traded funds",
                        "Private management mandate",
                        "Mutual funds",
                        "Liquid alternative funds",
                        "Segregated funds & annuities",
                        "Guaranteed investment certificates"
                    ],
                    desc: "We design savings and investment strategies aligned with your objectives, your time horizon and your risk tolerance.",
                    footer: "We design strategies aligned with your objectives, your time horizon and your risk tolerance.",
                    disclaimer: "Investment recommendations, including those relating to the funds listed above, are made through MICA Capital inc., a duly registered financial services firm with regulatory authorities."
                },
                plan: {
                    title: "Financial Planning",
                    desc: "We offer a comprehensive approach that considers all dimensions of your situation. Our role is to help you clarify your objectives, structure your finances and make informed decisions.",
                    footer: "Through our expertise, we develop personalized, realistic and durable plans. Always in your best interest."
                },
                protect: {
                    title: "Asset Protection",
                    desc: "We ensure your assets are optimally protected, without unnecessary complexity or multiplication of products. Our approach is based on rigorous analysis of real risks and simple, targeted and effective solutions."
                }
            },
            booking: {
                title: "Book an appointment",
                subtitle: "Schedule a free consultation to discuss your financial situation.",
                btn: "Book now",
                call: "Call us"
            },
            contact: {
                title: "Contact us",
                form: {
                    prenom: "First name",
                    nom: "Last name",
                    email: "Email",
                    message: "Message",
                    send: "Send",
                    success: "Thank you for your message!"
                },
                info: {
                    title: "Contact information"
                },
                phone: "1-418-957-3162",
                email: "info@ionicpatrimoine.com",
                address: "7900 Blvd Pierre-Bertrand Suite 300, Quebec City, QC G2J 0C5",
                social: {
                    title: "Follow us"
                },
                hours: "Business hours: Mon-Fri 9am-5pm"
            },
            footer: {
                tagline: "Your partner to build, protect and transmit your wealth.",
                links: {
                    title: "Quick links"
                },
                legal: {
                    title: "Legal",
                    privacy: "Privacy policy",
                    terms: "Terms of use",
                    cookies: "Cookie policy"
                },
                privacyUrl: "https://www.ionicpatrimoine.com/politique-de-confidentialité",
                termsUrl: "https://www.ionicpatrimoine.com/mentions-légales",
                cookiesUrl: "https://www.ionicpatrimoine.com/politique-de-cookies",
                rights: "All rights reserved."
            }
        }
    };

    const icons = {
        personCheck: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>',
        hourglass: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg>',
        shield: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>',
        pillar: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#1a5276" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16"/><path d="M5 20v-4h14v4"/><path d="M6 16v-3h3v3"/><path d="M10 16v-3h4v3"/><path d="M15 16v-3h3v3"/><path d="M6 13v-2h3v2"/><path d="M10 13v-2h4v2"/><path d="M15 13v-2h3v2"/><path d="M7 11V8h10v3"/><path d="M6 8V5h12v3"/></svg>',
        bullseye: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
        eye: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
        gem: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/></svg>',
        graphUp: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
        calculator: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>',
        check: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
        phone: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
        envelope: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
        geoAlt: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
        clock: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
        calendarPlus: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><line x1="19" x2="19" y1="16" y2="22"/><line x1="16" x2="22" y1="19" y2="19"/></svg>',
        facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
        linkedin: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>',
        arrowUp: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>',
        personCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/></svg>',
        translate: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>'
    };

    const logoIMG = `<img src="favicon.png" alt="Ionic Patrimoine" height="40" style="width: auto;">`;

    const micaLogo = `<img src="https://static.wixstatic.com/media/725b68_76378c74aed24fa8ae63110a914445e4~mv2.png/v1/fill/w_186,h_141,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/725b68_76378c74aed24fa8ae63110a914445e4~mv2.png" alt="MICA Capital" class="${PREFIX}mica-logo">`;

    let currentLang = 'fr';
    let container = null;

    function t(key) {
        const keys = key.split('.');
        let value = translations[currentLang];
        for (const k of keys) {
            value = value ? value[k] : null;
        }
        return value || key;
    }

    function applyTranslations() {
        document.querySelectorAll(`[data-${PREFIX}i18n]`).forEach(el => {
            const key = el.getAttribute(`data-${PREFIX}i18n`);
            el.textContent = t(key);
        });
        document.getElementById(`${PREFIX}langLabel`).textContent = currentLang === 'fr' ? 'EN' : 'FR';
    }

    function getCSS() {
        return `
            .${PREFIX}* {
                box-sizing: border-box;
            }
            .${PREFIX}container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 15px;
            }
            .${PREFIX}section {
                padding: 80px 0;
            }
            .${PREFIX}text-primary { color: #1a5276 !important; }
            .${PREFIX}text-muted { color: #6c757d !important; }
            .${PREFIX}bg-light { background-color: #f8f9fa !important; }
            .${PREFIX}bg-dark { background-color: #1a1a2e !important; }
            .${PREFIX}bg-primary { background-color: #1a5276 !important; }
            .${PREFIX}text-white { color: #ffffff !important; }
            .${PREFIX}text-white-50 { color: rgba(255,255,255,0.5) !important; }
            .${PREFIX}display-3 { font-size: 3rem; font-weight: 700; }
            .${PREFIX}display-4 { font-size: 2.5rem; }
            .${PREFIX}display-5 { font-size: 2rem; }
            .${PREFIX}lead { font-size: 1.25rem; font-weight: 300; }
            .${PREFIX}fw-bold { font-weight: 700 !important; }
            .${PREFIX}mb-0 { margin-bottom: 0 !important; }
            .${PREFIX}mb-1 { margin-bottom: 0.25rem !important; }
            .${PREFIX}mb-2 { margin-bottom: 0.5rem !important; }
            .${PREFIX}mb-3 { margin-bottom: 1rem !important; }
            .${PREFIX}mb-4 { margin-bottom: 1.5rem !important; }
            .${PREFIX}mb-5 { margin-bottom: 3rem !important; }
            .${PREFIX}mt-4 { margin-top: 1.5rem !important; }
            .${PREFIX}mt-5 { margin-top: 3rem !important; }
            .${PREFIX}me-2 { margin-right: 0.5rem !important; }
            .${PREFIX}me-3 { margin-right: 1rem !important; }
            .${PREFIX}ms-2 { margin-left: 0.5rem !important; }
            .${PREFIX}ms-3 { margin-left: 1rem !important; }
            .${PREFIX}ms-lg-3 { margin-left: 1rem !important; }
            @media (min-width: 992px) { .${PREFIX}ms-lg-3 { margin-left: 1rem !important; } }
            .${PREFIX}py-5 { padding-top: 3rem !important; padding-bottom: 3rem !important; }
            .${PREFIX}p-3 { padding: 1rem !important; }
            .${PREFIX}p-4 { padding: 1.5rem !important; }
            .${PREFIX}pt-5 { padding-top: 3rem !important; }
            .${PREFIX}pb-3 { padding-bottom: 1rem !important; }
            .${PREFIX}row { display: flex; flex-wrap: wrap; margin: 0 -15px; }
            .${PREFIX}col-md-4 { width: 100%; padding: 0 15px; margin-bottom: 1.5rem; }
            .${PREFIX}col-md-6 { width: 100%; padding: 0 15px; margin-bottom: 1.5rem; }
            .${PREFIX}col-lg-4 { width: 100%; padding: 0 15px; margin-bottom: 1.5rem; }
            @media (min-width: 768px) {
                .${PREFIX}col-md-4 { width: 33.333%; }
                .${PREFIX}col-md-6 { width: 50%; }
            }
            @media (min-width: 992px) {
                .${PREFIX}col-lg-4 { width: 33.333%; }
            }
            .${PREFIX}align-items-center { align-items: center !important; }
            .${PREFIX}justify-content-center { justify-content: center !important; }
            .${PREFIX}flex-wrap { flex-wrap: wrap !important; }
            .${PREFIX}d-flex { display: flex !important; }
            .${PREFIX}d-none { display: none !important; }
            .${PREFIX}text-center { text-align: center !important; }
            .${PREFIX}w-100 { width: 100% !important; }
            .${PREFIX}h-100 { height: 100% !important; }
            
            /* Navbar */
            .${PREFIX}navbar {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                z-index: 1000;
                background: #1a5276;
                padding: 15px 0;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                transition: all 0.3s ease;
            }
            .${PREFIX}navbar.scrolled {
                padding: 10px 0;
                background: rgba(26, 82, 118, 0.98) !important;
            }
            .${PREFIX}navbar-collapse {
                display: none;
                flex-direction: column;
            }
            .${PREFIX}navbar-collapse.show {
                display: flex;
            }
            @media (min-width: 992px) {
                .${PREFIX}navbar-collapse {
                    display: flex !important;
                    flex-direction: row;
                    align-items: center;
                }
            }
            .${PREFIX}navbar-nav {
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }
            @media (min-width: 992px) {
                .${PREFIX}navbar-nav {
                    flex-direction: row;
                    align-items: center;
                    gap: 0;
                }
            }
            .${PREFIX}nav-link {
                color: rgba(255,255,255,0.85);
                text-decoration: none;
                padding: 8px 15px;
                font-weight: 500;
                transition: color 0.3s ease;
                cursor: pointer;
            }
            .${PREFIX}nav-link:hover { color: #ffffff; }
            .${PREFIX}navbar-brand {
                display: flex;
                align-items: center;
                gap: 10px;
                color: #ffffff;
                font-weight: 600;
                font-size: 1.25rem;
                text-decoration: none;
            }
            .${PREFIX}navbar-toggler {
                display: flex;
                background: none;
                border: 1px solid rgba(255,255,255,0.5);
                border-radius: 4px;
                padding: 8px 12px;
                cursor: pointer;
                color: #ffffff;
            }
            @media (min-width: 992px) {
                .${PREFIX}navbar-toggler { display: none; }
            }
            .${PREFIX}toggler-icon {
                width: 24px;
                height: 2px;
                background: currentColor;
                position: relative;
            }
            .${PREFIX}toggler-icon::before,
            .${PREFIX}toggler-icon::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 2px;
                background: currentColor;
                left: 0;
            }
            .${PREFIX}toggler-icon::before { top: -7px; }
            .${PREFIX}toggler-icon::after { bottom: -7px; }
            .${PREFIX}ms-auto { margin-left: auto !important; }
            .${PREFIX}dropdown { position: relative; }
            .${PREFIX}dropdown-menu {
                display: none;
                position: absolute;
                background: white;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                border-radius: 4px;
                min-width: 180px;
                padding: 0.5rem 0;
                list-style: none;
                z-index: 1001;
            }
            .${PREFIX}dropdown.show .${PREFIX}dropdown-menu { display: block; }
            .${PREFIX}dropdown-item {
                padding: 8px 16px;
                color: #333;
                text-decoration: none;
                display: block;
            }
            .${PREFIX}dropdown-item:hover { background: #f8f9fa; }
            
            /* Hero */
            .${PREFIX}hero-section {
                min-height: 100vh;
                background: linear-gradient(135deg, rgba(26, 82, 118, 0.9), rgba(46, 134, 171, 0.8)),
                    linear-gradient(135deg, #1a5276, #2e86ab);
                display: flex;
                align-items: center;
                padding-top: 80px;
            }
            .${PREFIX}hero-section h1 {
                animation: ${PREFIX}fadeInUp 1s ease;
            }
            .${PREFIX}hero-section .${PREFIX}lead {
                animation: ${PREFIX}fadeInUp 1s ease 0.2s both;
            }
            @keyframes ${PREFIX}fadeInUp {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            /* Buttons */
            .${PREFIX}btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 10px 25px;
                font-weight: 500;
                border-radius: 5px;
                text-decoration: none;
                cursor: pointer;
                border: none;
                transition: all 0.3s ease;
                font-size: 1rem;
            }
            .${PREFIX}btn-primary {
                background: #1a5276;
                color: #ffffff;
                border: 2px solid #1a5276;
            }
            .${PREFIX}btn-primary:hover {
                background: #2e86ab;
                border-color: #2e86ab;
                transform: translateY(-2px);
                box-shadow: 0 5px 20px rgba(26, 82, 118, 0.3);
            }
            .${PREFIX}btn-outline-primary {
                background: transparent;
                color: #1a5276;
                border: 2px solid #1a5276;
            }
            .${PREFIX}btn-outline-primary:hover {
                background: #1a5276;
                color: #ffffff;
            }
            .${PREFIX}btn-outline-light {
                background: transparent;
                color: #ffffff;
                border: 2px solid #ffffff;
            }
            .${PREFIX}btn-outline-light:hover {
                background: rgba(255,255,255,0.1);
            }
            .${PREFIX}btn-outline-secondary {
                background: transparent;
                color: #6c757d;
                border: 2px solid #6c757d;
            }
            .${PREFIX}btn-outline-secondary:hover {
                background: #6c757d;
                color: #ffffff;
            }
            .${PREFIX}btn-lg {
                padding: 12px 30px;
                font-size: 1.1rem;
            }
            .${PREFIX}gap-3 { gap: 1rem !important; }
            
            /* Cards */
            .${PREFIX}card {
                background: #ffffff;
                border-radius: 10px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                height: 100%;
                transition: all 0.3s ease;
                border: none;
            }
            .${PREFIX}card:hover {
                transform: translateY(-5px);
                box-shadow: 0 8px 25px rgba(0,0,0,0.12);
            }
            .${PREFIX}card-body {
                padding: 30px;
            }
            .${PREFIX}card-title {
                font-size: 1.25rem;
                font-weight: 600;
                margin-bottom: 1rem;
                color: #1a5276;
            }
            .${PREFIX}card-text {
                color: #6c757d;
                line-height: 1.6;
            }
            .${PREFIX}service-card {
                transition: all 0.3s ease;
            }
            .${PREFIX}service-card:hover {
                transform: translateY(-10px);
                box-shadow: 0 15px 40px rgba(0,0,0,0.1);
            }
            .${PREFIX}list-unstyled {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            .${PREFIX}list-unstyled li {
                padding: 5px 0;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            /* Forms */
            .${PREFIX}form-label {
                font-weight: 500;
                margin-bottom: 0.5rem;
                display: block;
            }
            .${PREFIX}form-control {
                width: 100%;
                padding: 12px 15px;
                border: 1px solid #ddd;
                border-radius: 8px;
                font-size: 1rem;
                transition: all 0.3s ease;
            }
            .${PREFIX}form-control:focus {
                border-color: #1a5276;
                box-shadow: 0 0 0 3px rgba(26, 82, 118, 0.1);
                outline: none;
            }
            textarea.${PREFIX}form-control {
                resize: vertical;
                min-height: 120px;
            }
            
            /* Footer */
            .${PREFIX}footer {
                background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
                padding: 60px 0 30px;
            }
            .${PREFIX}footer a {
                color: rgba(255,255,255,0.5);
                text-decoration: none;
                transition: color 0.3s ease;
            }
            .${PREFIX}footer a:hover {
                color: #d4af37 !important;
            }
            .${PREFIX}footer h5 {
                color: #ffffff;
                font-size: 1.1rem;
                margin-bottom: 1.5rem;
            }
            .${PREFIX}footer hr {
                border: none;
                border-top: 1px solid rgba(255,255,255,0.1);
                margin: 30px 0;
            }
            
            /* Utilities */
            .${PREFIX}img-fluid {
                max-width: 100%;
                height: auto;
            }
            .${PREFIX}rounded { border-radius: 10px; }
            .${PREFIX}shadow-sm { box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
            .${PREFIX}border-0 { border: none !important; }
            .${PREFIX}mica-logo { max-height: 80px; width: auto; }
            
            /* Back to top */
            .${PREFIX}back-to-top {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: #1a5276;
                color: white;
                border: none;
                cursor: pointer;
                z-index: 999;
                box-shadow: 0 5px 20px rgba(0,0,0,0.2);
                display: none;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
            }
            .${PREFIX}back-to-top.show { display: flex; }
            .${PREFIX}back-to-top:hover {
                background: #2e86ab;
                transform: translateY(-3px);
            }
            
            /* Language toggle */
            .${PREFIX}lang-toggle {
                border-radius: 20px;
                padding: 5px 15px;
                font-size: 0.9rem;
                background: transparent;
                color: #ffffff;
                border: 1px solid rgba(255,255,255,0.5);
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 5px;
                transition: all 0.3s ease;
            }
            .${PREFIX}lang-toggle:hover {
                background: rgba(255,255,255,0.2);
                border-color: #ffffff;
            }
            
            /* Toast */
            .${PREFIX}toast {
                position: fixed;
                bottom: 30px;
                left: 50%;
                transform: translateX(-50%) translateY(100px);
                background: #28a745;
                color: white;
                padding: 15px 30px;
                border-radius: 50px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.2);
                z-index: 9999;
                transition: transform 0.3s ease;
            }
            .${PREFIX}toast.show {
                transform: translateX(-50%) translateY(0);
            }
            
            /* Modals */
            .${PREFIX}modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.5);
                display: none;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                padding: 20px;
            }
            .${PREFIX}modal-overlay.show {
                display: flex;
            }
            .${PREFIX}modal-content-wrapper {
                background: white;
                border-radius: 10px;
                max-width: 700px;
                width: 100%;
                max-height: 80vh;
                display: flex;
                flex-direction: column;
                animation: ${PREFIX}fadeIn 0.3s ease;
            }
            @keyframes ${PREFIX}fadeIn {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
            }
            .${PREFIX}modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px;
                border-bottom: 1px solid #eee;
            }
            .${PREFIX}modal-header h5 {
                margin: 0;
                color: #1a5276;
            }
            .${PREFIX}modal-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #666;
            }
            .${PREFIX}modal-close:hover { color: #333; }
            .${PREFIX}modal-body {
                padding: 20px;
                overflow-y: auto;
                flex: 1;
            }
            .${PREFIX}modal-body h6 {
                color: #1a5276;
                margin-top: 1rem;
                margin-bottom: 0.5rem;
            }
            .${PREFIX}modal-body ul, .${PREFIX}modal-body ol {
                padding-left: 20px;
                margin: 0.5rem 0;
            }
            .${PREFIX}modal-footer {
                padding: 15px 20px;
                border-top: 1px solid #eee;
                text-align: right;
            }
            
            /* Calendly */
            .${PREFIX}calendly-widget {
                min-width: 320px;
                height: 700px;
            }
            
            /* Responsive */
            @media (max-width: 991px) {
                .${PREFIX}navbar-collapse {
                    background: #1a5276;
                    padding: 20px;
                    border-radius: 10px;
                    margin-top: 15px;
                }
                .${PREFIX}section { padding: 60px 0; }
            }
            @media (max-width: 767px) {
                .${PREFIX}hero-section { padding: 120px 0 60px; min-height: auto; }
                .${PREFIX}display-3 { font-size: 2rem; }
                .${PREFIX}display-4 { font-size: 2rem; }
                .${PREFIX}display-5 { font-size: 1.75rem; }
                .${PREFIX}lead { font-size: 1.1rem; }
                .${PREFIX}card-body { padding: 20px; }
                .${PREFIX}calendly-widget { height: 600px; }
            }
            @media (max-width: 575px) {
                .${PREFIX}display-3 { font-size: 1.75rem; }
                .${PREFIX}section { padding: 50px 0; }
                .${PREFIX}btn-lg { width: 100%; }
            }
        `;
    }

    function getHTML() {
        return `
            <!-- Navigation -->
            <nav class="${PREFIX}navbar" id="${PREFIX}navbar">
                <div class="${PREFIX}container">
                    <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                        <a class="${PREFIX}navbar-brand" href="#">
                            ${logoIMG}
                            <span>Ionic Patrimoine</span>
                        </a>
                        <button class="${PREFIX}navbar-toggler" id="${PREFIX}toggler">
                            <span class="${PREFIX}toggler-icon"></span>
                        </button>
                    </div>
                    <div class="${PREFIX}navbar-collapse" id="${PREFIX}navCollapse">
                        <ul class="${PREFIX}navbar-nav ${PREFIX}ms-auto">
                            <li class="${PREFIX}nav-item"><a class="${PREFIX}nav-link" href="#${PREFIX}about" data-${PREFIX}i18n="nav.about">À propos de nous</a></li>
                            <li class="${PREFIX}nav-item"><a class="${PREFIX}nav-link" href="#${PREFIX}mission" data-${PREFIX}i18n="nav.mission">Vision Mission Valeurs</a></li>
                            <li class="${PREFIX}nav-item"><a class="${PREFIX}nav-link" href="#${PREFIX}services" data-${PREFIX}i18n="nav.services">Nos services</a></li>
                            <li class="${PREFIX}nav-item"><a class="${PREFIX}nav-link" href="#${PREFIX}contact" data-${PREFIX}i18n="nav.contact">Contactez-nous</a></li>
                            <li class="${PREFIX}nav-item ${PREFIX}dropdown" id="${PREFIX}moreDropdown">
                                <a class="${PREFIX}nav-link" href="#" id="${PREFIX}moreLink" data-${PREFIX}i18n="nav.more">Plus</a>
                                <ul class="${PREFIX}dropdown-menu">
                                    <li><a class="${PREFIX}dropdown-item" href="https://www.micasf.com/services/epargne-et-investissement" target="_blank" data-${PREFIX}i18n="nav.patrimonio">Gestion de Patrimoine</a></li>
                                    <li><a class="${PREFIX}dropdown-item" href="https://www.micasf.com/services/assurances" target="_blank" data-${PREFIX}i18n="nav.protections">Protections</a></li>
                                    <li><a class="${PREFIX}dropdown-item" href="https://portailmica.com/login" target="_blank" data-${PREFIX}i18n="nav.accesClient">Accès client</a></li>
                                </ul>
                            </li>
                        </ul>
                        <a href="https://calendly.com/marc-ionicpatrimoine" target="_blank" class="${PREFIX}btn ${PREFIX}btn-primary ${PREFIX}ms-lg-3" data-${PREFIX}i18n="nav.book">Rendez-vous</a>
                        <button class="${PREFIX}lang-toggle ${PREFIX}ms-2" id="${PREFIX}langToggle" title="Changer de langue">
                            ${icons.translate} <span id="${PREFIX}langLabel">EN</span>
                        </button>
                    </div>
                </div>
            </nav>

            <!-- Hero Section -->
            <section class="${PREFIX}hero-section">
                <div class="${PREFIX}container ${PREFIX}text-center ${PREFIX}text-white">
                    <h1 class="${PREFIX}display-3 ${PREFIX}fw-bold ${PREFIX}mb-4" data-${PREFIX}i18n="hero.title">Votre équilibre. Votre avenir. Votre héritage.</h1>
                    <p class="${PREFIX}lead ${PREFIX}mb-4" data-${PREFIX}i18n="hero.subtitle">Planification financière indépendante et stratégique pour familles, professionnels et entrepreneurs.</p>
                    <div class="${PREFIX}d-flex ${PREFIX}justify-content-center ${PREFIX}gap-3 ${PREFIX}flex-wrap">
                        <a href="https://calendly.com/marc-ionicpatrimoine" target="_blank" class="${PREFIX}btn ${PREFIX}btn-primary ${PREFIX}btn-lg">
                            <i class="${PREFIX}me-2"></i><span data-${PREFIX}i18n="hero.bookBtn">Prendre rendez-vous</span>
                        </a>
                        <a href="#${PREFIX}services" class="${PREFIX}btn ${PREFIX}btn-outline-light ${PREFIX}btn-lg">
                            <span data-${PREFIX}i18n="hero.servicesBtn">Nos services</span>
                        </a>
                    </div>
                </div>
            </section>

            <!-- About Section -->
            <section id="${PREFIX}about" class="${PREFIX}section">
                <div class="${PREFIX}container">
                    <div class="${PREFIX}row ${PREFIX}align-items-center">
                        <div class="${PREFIX}col-md-6 ${PREFIX}mb-4 ${PREFIX}mb-md-0">
                            <img src="https://static.wixstatic.com/media/725b68_85802c94d5954fe793203dcd8a6f729b~mv2.jpg/v1/fill/w_399,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/725b68_85802c94d5954fe793203dcd8a6f729b~mv2.jpg" alt="Marc-Olivier Poulin" class="${PREFIX}img-fluid ${PREFIX}rounded" style="box-shadow: 0 10px 40px rgba(0,0,0,0.15);">
                        </div>
                        <div class="${PREFIX}col-md-6">
                            <h2 class="${PREFIX}mb-4 ${PREFIX}text-primary" data-${PREFIX}i18n="about.title">À propos de nous</h2>
                            <h3 class="${PREFIX}text-primary ${PREFIX}mb-2">Marc-Olivier Poulin, Pl Fin, CR®</h3>
                            <p class="${PREFIX}text-muted ${PREFIX}mb-4" data-${PREFIX}i18n="about.subtitle">Planificateur financier – Fondateur</p>
                            <p class="${PREFIX}card-text ${PREFIX}mb-3" data-${PREFIX}i18n="about.desc1">Marc-Olivier Poulin est planificateur financier et fondateur de Ionic Patrimoine inc., un cabinet indépendant spécialisé dans l'accompagnement stratégique des familles, des professionnels et des entrepreneurs dans la gestion et la structuration de leur patrimoine.</p>
                            <p class="${PREFIX}card-text ${PREFIX}mb-3" data-${PREFIX}i18n="about.desc2">Issu de l'Université Laval, reconnue pour la qualité de sa formation en affaires et en finance, de l'Institut de Planification Financière, The Canadian Institute of Financial Planning (CIFP), il a développé la rigueur analytique et la discipline intellectuelle qui guident aujourd'hui sa pratique professionnelle.</p>
                            <p class="${PREFIX}card-text ${PREFIX}mb-4" data-${PREFIX}i18n="about.desc3">Avant de fonder Ionic Patrimoine inc., Marc-Olivier a évolué au sein de services spécialisés de grandes institutions financières canadiennes. Cette expérience lui a permis de développer une compréhension approfondie des enjeux financiers auxquels font face les clientèles exigeantes.</p>
                            
                            <div class="${PREFIX}row ${PREFIX}g-4 ${PREFIX}mt-4">
                                <div class="${PREFIX}col-md-6">
                                    <div class="${PREFIX}card ${PREFIX}h-100 ${PREFIX}border-0 ${PREFIX}shadow-sm">
                                        <div class="${PREFIX}card-body ${PREFIX}text-center">
                                            <h5 class="${PREFIX}card-title" data-${PREFIX}i18n="about.mica.title">Un réseau de spécialistes</h5>
                                            ${micaLogo}
                                            <p class="${PREFIX}card-text ${PREFIX}mt-3" data-${PREFIX}i18n="about.mica.desc">En tant que professionnel affilié à MICA Capital, j'ai accès à un réseau de haut niveau de spécialistes pour offrir à mes clients des solutions personnalisées et indépendantes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="${PREFIX}col-md-6">
                                    <div class="${PREFIX}card ${PREFIX}h-100 ${PREFIX}border-0 ${PREFIX}shadow-sm">
                                        <div class="${PREFIX}card-body ${PREFIX}text-center">
                                            <h5 class="${PREFIX}card-title" data-${PREFIX}i18n="about.clientAccess.title">Accès Client</h5>
                                            <div class="${PREFIX}text-primary ${PREFIX}mb-3">${icons.personCircle}</div>
                                            <p class="${PREFIX}card-text" data-${PREFIX}i18n="about.clientAccess.desc">Accédez à votre espace client pour consulter vos documents et suivre l'évolution de votre patrimoine.</p>
                                            <a href="https://portailmica.com/login" target="_blank" class="${PREFIX}btn ${PREFIX}btn-primary" data-${PREFIX}i18n="about.clientAccess.btn">Portail Client</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Why Ionic Section -->
            <section class="${PREFIX}py-5 ${PREFIX}bg-light">
                <div class="${PREFIX}container">
                    <div class="${PREFIX}text-center ${PREFIX}mb-5">
                        <h2 class="${PREFIX}text-primary" data-${PREFIX}i18n="why.title">Pourquoi la colonne ionique grecque est-elle au cœur de notre image ?</h2>
                        <p class="${PREFIX}lead" data-${PREFIX}i18n="why.subtitle">Comme une colonne soutient une structure, nous sommes un pilier stable et discret dans la vie financière de nos clients.</p>
                    </div>
                    <div class="${PREFIX}row ${PREFIX}g-4">
                        <div class="${PREFIX}col-md-4 ${PREFIX}text-center">
                            <div class="${PREFIX}p-4">
                                <div class="${PREFIX}text-primary ${PREFIX}mb-3">${icons.balanceScale}</div>
                                <h4 data-${PREFIX}i18n="why.equilibre.title">Équilibre</h4>
                                <p class="${PREFIX}text-muted" data-${PREFIX}i18n="why.equilibre.desc">Notre approche est fondée sur l'équilibre, la rigueur et l'humanité. Chaque plan est bâti avec soin, pour aujourd'hui mais aussi pour demain.</p>
                            </div>
                        </div>
                        <div class="${PREFIX}col-md-4 ${PREFIX}text-center">
                            <div class="${PREFIX}p-4">
                                <div class="${PREFIX}text-primary ${PREFIX}mb-3">${icons.hourglass}</div>
                                <h4 data-${PREFIX}i18n="why.perennite.title">Pérennité</h4>
                                <p class="${PREFIX}text-muted" data-${PREFIX}i18n="why.perennite.desc">Inspirée de l'architecture grecque classique, la colonne symbolise la pérennité. La sagesse, la structure et la durabilité ne se démodent jamais.</p>
                            </div>
                        </div>
                        <div class="${PREFIX}col-md-4 ${PREFIX}text-center">
                            <div class="${PREFIX}p-4">
                                <div class="${PREFIX}text-primary ${PREFIX}mb-3">${icons.shield}</div>
                                <h4 data-${PREFIX}i18n="why.confiance.title">Confiance</h4>
                                <p class="${PREFIX}text-muted" data-${PREFIX}i18n="why.confiance.desc">Bâtir, protéger et transmettre un patrimoine qui résiste au temps. Nous sommes avec vous, pour vous, et pour les générations à venir.</p>
                            </div>
                        </div>
                    </div>
                    <div class="${PREFIX}text-center ${PREFIX}mt-5">
                        <p class="${PREFIX}lead" data-${PREFIX}i18n="why.conclusion">Inspirée de l'architecture grecque classique, la colonne symbolise la pérennité. Elle nous rappelle que la sagesse, la structure et la durabilité ne se démodent jamais. Elle reflète notre vision : bâtir, protéger et transmettre un patrimoine qui résiste au temps.</p>
                        <p class="${PREFIX}lead ${PREFIX}fw-bold ${PREFIX}text-primary" data-${PREFIX}i18n="why.closing">Chez Ionic Patrimoine, nous bâtissons avec vous, pour vous, et pour les générations à venir.</p>
                    </div>
                </div>
            </section>

            <!-- Mission & Values -->
            <section id="${PREFIX}mission" class="${PREFIX}section">
                <div class="${PREFIX}container">
                    <h2 class="${PREFIX}text-center ${PREFIX}mb-5 ${PREFIX}text-primary" data-${PREFIX}i18n="mission.title">Notre Mission, Vision & Valeurs</h2>
                    <div class="${PREFIX}row ${PREFIX}g-4">
                        <div class="${PREFIX}col-md-4">
                            <div class="${PREFIX}card ${PREFIX}h-100 ${PREFIX}border-0 ${PREFIX}shadow-sm">
                                <div class="${PREFIX}card-body ${PREFIX}text-center">
                                    <div class="${PREFIX}text-primary ${PREFIX}mb-3">${icons.bullseye}</div>
                                    <h4 class="${PREFIX}text-primary" data-${PREFIX}i18n="mission.mission.title">Notre Mission</h4>
                                    <p class="${PREFIX}card-text" data-${PREFIX}i18n="mission.mission.desc">Accompagner nos clients dans toutes les étapes clés de leur vie financière. Nous aidons à bâtir, protéger et transmettre leur patrimoine grâce à une approche personnalisée et efficace.</p>
                                </div>
                            </div>
                        </div>
                        <div class="${PREFIX}col-md-4">
                            <div class="${PREFIX}card ${PREFIX}h-100 ${PREFIX}border-0 ${PREFIX}shadow-sm">
                                <div class="${PREFIX}card-body ${PREFIX}text-center">
                                    <div class="${PREFIX}text-primary ${PREFIX}mb-3">${icons.eye}</div>
                                    <h4 class="${PREFIX}text-primary" data-${PREFIX}i18n="mission.vision.title">Notre Vision</h4>
                                    <p class="${PREFIX}card-text" data-${PREFIX}i18n="mission.vision.desc">Être une référence incontournable en planification financière et en gestion de patrimoine durable au Québec, en alliant expertise, intégrité et accessibilité.</p>
                                </div>
                            </div>
                        </div>
                        <div class="${PREFIX}col-md-4">
                            <div class="${PREFIX}card ${PREFIX}h-100 ${PREFIX}border-0 ${PREFIX}shadow-sm">
                                <div class="${PREFIX}card-body ${PREFIX}text-center">
                                    <div class="${PREFIX}text-primary ${PREFIX}mb-3">${icons.gem}</div>
                                    <h4 class="${PREFIX}text-primary" data-${PREFIX}i18n="mission.valeurs.title">Nos Valeurs</h4>
                                    <ul class="${PREFIX}text-start ${PREFIX}list-unstyled">
                                        <li class="${PREFIX}fw-bold" data-${PREFIX}i18n="mission.valeurs.eq">Équilibre</li>
                                        <li class="${PREFIX}fw-bold" data-${PREFIX}i18n="mission.valeurs.per">Pérennité</li>
                                        <li class="${PREFIX}fw-bold" data-${PREFIX}i18n="mission.valeurs.transp">Transparence</li>
                                        <li class="${PREFIX}fw-bold" data-${PREFIX}i18n="mission.valeurs.indep">Indépendance</li>
                                        <li class="${PREFIX}fw-bold" data-${PREFIX}i18n="mission.valeurs.prox">Proximité humaine</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Services -->
            <section id="${PREFIX}services" class="${PREFIX}py-5 ${PREFIX}bg-light">
                <div class="${PREFIX}container">
                    <h2 class="${PREFIX}text-center ${PREFIX}mb-5 ${PREFIX}text-primary" data-${PREFIX}i18n="services.title">NOS SERVICES</h2>
                    <div class="${PREFIX}row ${PREFIX}g-4">
                        <div class="${PREFIX}col-lg-4">
                            <div class="${PREFIX}card ${PREFIX}h-100 ${PREFIX}service-card">
                                <div class="${PREFIX}card-body">
                                    <div class="${PREFIX}text-primary ${PREFIX}mb-3">${icons.graphUp}</div>
                                    <h4 class="${PREFIX}text-primary" data-${PREFIX}i18n="services.invest.title">Épargne & Investissements</h4>
                                    <ul class="${PREFIX}list-unstyled">
                                        <li>${icons.check} <span data-${PREFIX}i18n="services.invest.items.0">Fonds négociés en bourse</span></li>
                                        <li>${icons.check} <span data-${PREFIX}i18n="services.invest.items.1">Mandat de gestion privée</span></li>
                                        <li>${icons.check} <span data-${PREFIX}i18n="services.invest.items.2">Fonds communs de placement</span></li>
                                        <li>${icons.check} <span data-${PREFIX}i18n="services.invest.items.3">Fonds alternatifs liquides</span></li>
                                        <li>${icons.check} <span data-${PREFIX}i18n="services.invest.items.4">Fonds distincts & rentes viagères</span></li>
                                        <li>${icons.check} <span data-${PREFIX}i18n="services.invest.items.5">Certificats de placement garanti</span></li>
                                    </ul>
                                    <p class="${PREFIX}card-text ${PREFIX}mt-3" data-${PREFIX}i18n="services.invest.desc">Nous concevons des stratégies alignées sur vos objectifs, votre horizon et votre tolérance au risque.</p>
                                    <p class="${PREFIX}mt-3 ${PREFIX}small ${PREFIX}text-muted ${PREFIX}fst-italic" data-${PREFIX}i18n="services.invest.disclaimer">Les recommandations de placement, y compris celles portant sur les fonds listés précédemment, sont effectuées par l'entremise de MICA Capital inc., cabinet de services financiers dûment inscrit auprès des autorités réglementaires.</p>
                                </div>
                            </div>
                        </div>
                        <div class="${PREFIX}col-lg-4">
                            <div class="${PREFIX}card ${PREFIX}h-100 ${PREFIX}service-card">
                                <div class="${PREFIX}card-body">
                                    <div class="${PREFIX}text-primary ${PREFIX}mb-3">${icons.calculator}</div>
                                    <h4 class="${PREFIX}text-primary" data-${PREFIX}i18n="services.plan.title">Planification Financière</h4>
                                    <p class="${PREFIX}card-text" data-${PREFIX}i18n="services.plan.desc">Approche globale tenant compte de toutes les dimensions de votre situation. Nous vous aidons à clarifier vos objectifs, structurer vos finances et prendre des décisions éclairées.</p>
                                    <p class="${PREFIX}card-text ${PREFIX}mt-3" data-${PREFIX}i18n="services.plan.footer">Élaboration de plans personnalisés, réalistes et durables. Toujours dans votre intérêt.</p>
                                </div>
                            </div>
                        </div>
                        <div class="${PREFIX}col-lg-4">
                            <div class="${PREFIX}card ${PREFIX}h-100 ${PREFIX}service-card">
                                <div class="${PREFIX}card-body">
                                    <div class="${PREFIX}text-primary ${PREFIX}mb-3">${icons.shield}</div>
                                    <h4 class="${PREFIX}text-primary" data-${PREFIX}i18n="services.protect.title">Protection du patrimoine</h4>
                                    <p class="${PREFIX}card-text" data-${PREFIX}i18n="services.protect.desc">Analyse rigoureuse des risques réels et solutions simples, ciblées et efficaces. Nous veillons à ce que votre patrimoine soit protégé de manière optimale.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Booking Section -->
            <section id="${PREFIX}booking" class="${PREFIX}section">
                <div class="${PREFIX}container">
                    <div class="${PREFIX}row ${PREFIX}justify-content-center">
                        <div class="${PREFIX}col-lg-8 ${PREFIX}text-center">
                            <h2 class="${PREFIX}mb-4 ${PREFIX}text-primary" data-${PREFIX}i18n="booking.title">Prenez rendez-vous</h2>
                            <p class="${PREFIX}lead ${PREFIX}mb-4" data-${PREFIX}i18n="booking.subtitle">Planifiez une consultation gratuite pour discuter de votre situation financière.</p>
                            <div class="${PREFIX}d-flex ${PREFIX}justify-content-center ${PREFIX}gap-3 ${PREFIX}flex-wrap ${PREFIX}mb-5">
                                <a href="https://calendly.com/marc-ionicpatrimoine" target="_blank" class="${PREFIX}btn ${PREFIX}btn-primary ${PREFIX}btn-lg">
                                    ${icons.calendarPlus} <span class="${PREFIX}me-2"></span><span data-${PREFIX}i18n="booking.btn">Réserver maintenant</span>
                                </a>
                                <a href="tel:1-418-957-3162" class="${PREFIX}btn ${PREFIX}btn-outline-primary ${PREFIX}btn-lg">
                                    ${icons.phone} <span class="${PREFIX}me-2"></span><span data-${PREFIX}i18n="booking.call">Nous appeler</span>
                                </a>
                            </div>
                            <div class="${PREFIX}calendly-widget">
                                <div class="calendly-inline-widget" data-url="https://calendly.com/marc-ionicpatrimoine" style="min-width:320px;height:700px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Contact Section -->
            <section id="${PREFIX}contact" class="${PREFIX}py-5 ${PREFIX}bg-light">
                <div class="${PREFIX}container">
                    <h2 class="${PREFIX}text-center ${PREFIX}mb-5 ${PREFIX}text-primary" data-${PREFIX}i18n="contact.title">Contactez-nous</h2>
                    <div class="${PREFIX}row ${PREFIX}g-4">
                        <div class="${PREFIX}col-md-6">
                            <div class="${PREFIX}card ${PREFIX}border-0 ${PREFIX}shadow-sm ${PREFIX}h-100">
                                <div class="${PREFIX}card-body">
                                    <form id="${PREFIX}contactForm">
                                        <div class="${PREFIX}mb-3">
                                            <label class="${PREFIX}form-label" data-${PREFIX}i18n="contact.form.prenom">Prénom</label>
                                            <input type="text" class="${PREFIX}form-control" id="${PREFIX}prenom" required>
                                        </div>
                                        <div class="${PREFIX}mb-3">
                                            <label class="${PREFIX}form-label" data-${PREFIX}i18n="contact.form.nom">Nom de famille</label>
                                            <input type="text" class="${PREFIX}form-control" id="${PREFIX}nom" required>
                                        </div>
                                        <div class="${PREFIX}mb-3">
                                            <label class="${PREFIX}form-label" data-${PREFIX}i18n="contact.form.email">E-mail</label>
                                            <input type="email" class="${PREFIX}form-control" id="${PREFIX}email" required>
                                        </div>
                                        <div class="${PREFIX}mb-3">
                                            <label class="${PREFIX}form-label" data-${PREFIX}i18n="contact.form.message">Message</label>
                                            <textarea class="${PREFIX}form-control" id="${PREFIX}message" rows="4" required></textarea>
                                        </div>
                                        <button type="submit" class="${PREFIX}btn ${PREFIX}btn-primary ${PREFIX}w-100" data-${PREFIX}i18n="contact.form.send">Envoyer</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="${PREFIX}col-md-6">
                            <div class="${PREFIX}card ${PREFIX}border-0 ${PREFIX}shadow-sm ${PREFIX}h-100">
                                <div class="${PREFIX}card-body">
                                    <h5 class="${PREFIX}card-title" data-${PREFIX}i18n="contact.info.title">Informations de contact</h5>
                                    <div class="${PREFIX}mb-3">
                                        <span class="${PREFIX}text-primary">${icons.phone}</span>
                                        <a href="tel:1-418-957-3162">1-418-957-3162</a>
                                    </div>
                                    <div class="${PREFIX}mb-3">
                                        <span class="${PREFIX}text-primary">${icons.envelope}</span>
                                        <a href="mailto:info@ionicpatrimoine.com">info@ionicpatrimoine.com</a>
                                    </div>
                                    <div class="${PREFIX}mb-4">
                                        <span class="${PREFIX}text-primary">${icons.geoAlt}</span>
                                        <span>7900 Blvd Pierre-Bertrand bureau 300, Québec, QC G2J 0C5</span>
                                    </div>
                                    <div class="${PREFIX}mt-4">
                                        <h5 class="${PREFIX}mb-3" data-${PREFIX}i18n="contact.social.title">Suivez-nous</h5>
                                        <a href="https://www.facebook.com/profile.php?id=61583619986274" class="${PREFIX}btn ${PREFIX}btn-outline-secondary ${PREFIX}me-2" target="_blank">
                                            ${icons.facebook}
                                        </a>
                                        <a href="https://www.linkedin.com/in/marc-olivier-poulin" class="${PREFIX}btn ${PREFIX}btn-outline-secondary" target="_blank">
                                            ${icons.linkedin}
                                        </a>
                                    </div>
                                    <div class="${PREFIX}mt-4 ${PREFIX}p-3 ${PREFIX}bg-primary ${PREFIX}text-white ${PREFIX}rounded">
                                        ${icons.clock}
                                        <span data-${PREFIX}i18n="contact.hours">Heures d'ouverture: Lun-Ven 9h-17h</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Footer -->
            <footer class="${PREFIX}footer ${PREFIX}text-white">
                <div class="${PREFIX}container">
                    <div class="${PREFIX}row ${PREFIX}g-4">
                        <div class="${PREFIX}col-md-4">
                            ${logoIMG}
                            <p class="${PREFIX}mt-4" data-${PREFIX}i18n="footer.tagline">Votre partenaire pour bâtir, protéger et transmettre votre patrimoine.</p>
                        </div>
                        <div class="${PREFIX}col-md-4">
                            <h5 data-${PREFIX}i18n="footer.links.title">Liens rapides</h5>
                            <ul class="${PREFIX}list-unstyled">
                                <li><a href="#${PREFIX}about" data-${PREFIX}i18n="nav.about">À propos</a></li>
                                <li><a href="#${PREFIX}services" data-${PREFIX}i18n="nav.services">Services</a></li>
                                <li><a href="#${PREFIX}booking" data-${PREFIX}i18n="nav.book">Rendez-vous</a></li>
                                <li><a href="#${PREFIX}contact" data-${PREFIX}i18n="nav.contact">Contact</a></li>
                            </ul>
                        </div>
                        <div class="${PREFIX}col-md-4">
                            <h5 data-${PREFIX}i18n="footer.legal.title">Légal</h5>
                            <ul class="${PREFIX}list-unstyled">
                                <li><a href="#" class="${PREFIX}modal-trigger" data-modal="privacy" data-${PREFIX}i18n="footer.legal.privacy">Politique de confidentialité</a></li>
                                <li><a href="#" class="${PREFIX}modal-trigger" data-modal="legal" data-${PREFIX}i18n="footer.legal.terms">Mentions légales</a></li>
                                <li><a href="#" class="${PREFIX}modal-trigger" data-modal="cookies" data-${PREFIX}i18n="footer.legal.cookies">Politique de cookies</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr>
                    <div class="${PREFIX}text-center">
                        <p class="${PREFIX}mb-0">&copy; ${new Date().getFullYear()} Ionic Patrimoine inc. <span data-${PREFIX}i18n="footer.rights">Tous droits réservés.</span></p>
                    </div>
                </div>
            </footer>

            <!-- Back to Top -->
            <button class="${PREFIX}back-to-top" id="${PREFIX}backToTop">
                ${icons.arrowUp}
            </button>

            <!-- Privacy Modal -->
            <div class="${PREFIX}modal-overlay" id="${PREFIX}privacyModal">
                <div class="${PREFIX}modal-content-wrapper">
                    <div class="${PREFIX}modal-header">
                        <h5>Politique sur la protection des renseignements personnels</h5>
                        <button class="${PREFIX}modal-close" data-close>&times;</button>
                    </div>
                    <div class="${PREFIX}modal-body">
                        <p class="${PREFIX}text-muted">Mise-à-jour Juin 2025</p>
                        <p><strong>Cette politique est celle de :</strong> Ionic Patrimoine inc. & Marc-Olivier Poulin</p>
                        <h6>1. Contexte</h6>
                        <p>Compte tenu que les entreprises doivent avoir et adapter leurs politiques et leurs pratiques en vue de se conformer aux obligations prévues en matière de confidentialité et de protection des renseignements personnels, il est primordial d'établir une politique interne et des procédures pour la protection des renseignements personnels conformément à la Loi sur la protection des renseignements personnels dans le secteur privé.</p>
                        <h6>2. Définition</h6>
                        <p>Il faut entendre par renseignement personnel, tout renseignement qui concerne une personne physique et qui permet de l'identifier. À titre d'exemples : prénom et nom, adresse, situation financière, numéro d'assurance sociale, etc.</p>
                        <h6>3. Vos droits</h6>
                        <p><strong>Droit d'accès :</strong> Vous pouvez accéder aux renseignements personnels que nous détenons.<br>
                        <strong>Droit de rectification :</strong> Vous pouvez demander de modifier des renseignements inexacts.<br>
                        <strong>Droit de suppression :</strong> Vous pouvez demander de supprimer vos renseignements personnels, sous réserve de nos obligations légales.</p>
                        <h6>4. Contact</h6>
                        <p>Pour toute question : <a href="mailto:info@ionicpatrimoine.com">info@ionicpatrimoine.com</a></p>
                    </div>
                    <div class="${PREFIX}modal-footer">
                        <button class="${PREFIX}btn ${PREFIX}btn-primary" data-close>Fermer</button>
                    </div>
                </div>
            </div>

            <!-- Legal Modal -->
            <div class="${PREFIX}modal-overlay" id="${PREFIX}legalModal">
                <div class="${PREFIX}modal-content-wrapper">
                    <div class="${PREFIX}modal-header">
                        <h5>Politique du traitement des plaintes</h5>
                        <button class="${PREFIX}modal-close" data-close>&times;</button>
                    </div>
                    <div class="${PREFIX}modal-body">
                        <p><strong>Ionic Patrimoine inc.</strong> - Politique de traitement des plaintes</p>
                        <h6>Qu'est-ce qu'une plainte?</h6>
                        <p>Une plainte exprime un reproche ou une insatisfaction à l'égard de nos services et une attente que nous prenions des mesures pour y remédier.</p>
                        <h6>Comment formuler une plainte?</h6>
                        <p>Marc-Olivier Poulin<br>Téléphone : 418-957-3162<br>Courriel : <a href="mailto:marc@ionicpatrimoine.com">marc@ionicpatrimoine.com</a></p>
                        <h6>Étapes</h6>
                        <ol>
                            <li>Confirmation de réception dans un délai de 10 jours</li>
                            <li>Analyse de la plainte</li>
                            <li>Réponse finale dans un délai de 60 jours</li>
                        </ol>
                    </div>
                    <div class="${PREFIX}modal-footer">
                        <button class="${PREFIX}btn ${PREFIX}btn-primary" data-close>Fermer</button>
                    </div>
                </div>
            </div>

            <!-- Cookies Modal -->
            <div class="${PREFIX}modal-overlay" id="${PREFIX}cookiesModal">
                <div class="${PREFIX}modal-content-wrapper">
                    <div class="${PREFIX}modal-header">
                        <h5>Politique relative aux témoins</h5>
                        <button class="${PREFIX}modal-close" data-close>&times;</button>
                    </div>
                    <div class="${PREFIX}modal-body">
                        <p>Cette politique explique comment Ionic Patrimoine inc. utilise les témoins (cookies).</p>
                        <h6>Types de témoins</h6>
                        <ul>
                            <li><strong>Témoins essentiels :</strong> Nécessaires au fonctionnement du site</li>
                            <li><strong>Témoins de performance :</strong> Nous aident à comprendre comment les visiteurs utilisent le site</li>
                        </ul>
                        <h6>Contact</h6>
                        <p><a href="mailto:info@ionicpatrimoine.com">info@ionicpatrimoine.com</a></p>
                    </div>
                    <div class="${PREFIX}modal-footer">
                        <button class="${PREFIX}btn ${PREFIX}btn-primary" data-close>Fermer</button>
                    </div>
                </div>
            </div>
        `;
    }

    function init() {
        // Navbar scroll
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById(`${PREFIX}navbar`);
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Back to top
            const backToTop = document.getElementById(`${PREFIX}backToTop`);
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        // Toggler
        document.getElementById(`${PREFIX}toggler`).addEventListener('click', () => {
            document.getElementById(`${PREFIX}navCollapse`).classList.toggle('show');
        });

        // Dropdown
        document.getElementById(`${PREFIX}moreLink`).addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById(`${PREFIX}moreDropdown`).classList.toggle('show');
        });

        // Language toggle
        document.getElementById(`${PREFIX}langToggle`).addEventListener('click', () => {
            currentLang = currentLang === 'fr' ? 'en' : 'fr';
            localStorage.setItem('ip-lang', currentLang);
            applyTranslations();
        });

        // Load saved language
        const savedLang = localStorage.getItem('ip-lang');
        if (savedLang) {
            currentLang = savedLang;
            applyTranslations();
        }

        // Back to top click
        document.getElementById(`${PREFIX}backToTop`).addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Smooth scroll for anchor links
        document.querySelectorAll(`a[href^="#${PREFIX}"]`).forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    const offset = 80;
                    const targetPosition = target.offsetTop - offset;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                    // Close mobile menu
                    document.getElementById(`${PREFIX}navCollapse`).classList.remove('show');
                }
            });
        });

        // Contact form - uses mailto action

        // Modal functionality
        document.querySelectorAll(`.${PREFIX}modal-trigger`).forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const modalType = trigger.getAttribute('data-modal');
                const modal = document.getElementById(`${PREFIX}${modalType}Modal`);
                if (modal) modal.classList.add('show');
            });
        });

        document.querySelectorAll(`[data-close]`).forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll(`.${PREFIX}modal-overlay`).forEach(m => m.classList.remove('show'));
            });
        });

        document.querySelectorAll(`.${PREFIX}modal-overlay`).forEach(overlay => {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) overlay.classList.remove('show');
            });
        });
    }

    function mount(target) {
        container = typeof target === 'string' ? document.querySelector(target) : target;
        if (!container) {
            console.error('Ionic Patrimoine: Container not found');
            return;
        }

        // Inject styles
        const style = document.createElement('style');
        style.textContent = getCSS();
        document.head.appendChild(style);

        // Inject HTML
        container.innerHTML = getHTML();

        // Initialize
        init();
    }

    // Return public API
    return {
        mount,
        getHTML,
        getCSS,
        setLanguage: (lang) => {
            currentLang = lang;
            applyTranslations();
        },
        getLanguage: () => currentLang
    };
}

// Auto-mount if container exists
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('ionic-patrimoine');
        if (container) {
            renderWebsite().mount(container);
        }
    });
} else {
    const container = document.getElementById('ionic-patrimoine');
    if (container) {
        renderWebsite().mount(container);
    }
}
