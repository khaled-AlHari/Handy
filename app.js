<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HandyPro - Smartphone Verkauf & Reparatur | بيع وتصليح الجوالات</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #0f0f1e;
            color: #333;
            overflow-x: hidden;
        }

        .lang-toggle {
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 2000;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 10px 20px;
            border-radius: 50px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s;
        }

        .lang-toggle:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 25px rgba(0,0,0,0.3);
        }

        .header {
            background: rgba(15, 15, 30, 0.95);
            backdrop-filter: blur(10px);
            padding: 20px 0;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
        }

        .logo {
            font-size: 32px;
            font-weight: bold;
            background: linear-gradient(135deg, #00d4ff 0%, #7b2ff7 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .nav-links {
            display: flex;
            gap: 30px;
            list-style: none;
            flex-wrap: wrap;
        }

        .nav-links a {
            text-decoration: none;
            color: white;
            font-weight: 500;
            transition: all 0.3s;
            position: relative;
            padding: 5px 0;
        }

        .nav-links a:hover {
            color: #00d4ff;
        }

        .hero {
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            padding: 40px 20px;
        }

        #canvas3d {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        .hero-content {
            position: relative;
            z-index: 2;
            text-align: center;
            color: white;
            max-width: 900px;
        }

        .hero h1 {
            font-size: clamp(36px, 6vw, 72px);
            margin-bottom: 20px;
            animation: fadeInUp 0.8s ease;
            text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);
            line-height: 1.2;
        }

        .hero p {
            font-size: clamp(18px, 3vw, 28px);
            margin-bottom: 40px;
            animation: fadeInUp 0.8s ease 0.2s both;
            opacity: 0.95;
            text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .cta-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
            animation: fadeInUp 0.8s ease 0.4s both;
        }

        .cta-button {
            display: inline-block;
            padding: 18px 45px;
            background: linear-gradient(135deg, #00d4ff 0%, #7b2ff7 100%);
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            font-size: 18px;
            transition: all 0.3s;
            box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
            border: none;
            cursor: pointer;
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(0, 212, 255, 0.6);
        }

        .cta-button.secondary {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .section {
            padding: 100px 20px;
            position: relative;
        }

        .section-dark {
            background: #0f0f1e;
            color: white;
        }

        .section-light {
            background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
            color: white;
        }

        .section-title {
            text-align: center;
            font-size: clamp(32px, 5vw, 48px);
            margin-bottom: 60px;
            position: relative;
        }

        .section-title::after {
            content: '';
            display: block;
            width: 100px;
            height: 4px;
            background: linear-gradient(135deg, #00d4ff 0%, #7b2ff7 100%);
            margin: 20px auto 0;
            border-radius: 2px;
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            max-width: 1400px;
            margin: 0 auto;
        }

        .service-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            padding: 40px;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
            transition: all 0.4s;
            cursor: pointer;
        }

        .service-card:hover {
            transform: translateY(-10px);
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(0, 212, 255, 0.5);
            box-shadow: 0 20px 40px rgba(0, 212, 255, 0.3);
        }

        .service-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 20px;
            background: linear-gradient(135deg, #00d4ff 0%, #7b2ff7 100%);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
            box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
        }

        .service-card h3 {
            font-size: 24px;
            margin-bottom: 15px;
            color: white;
        }

        .service-card p {
            font-size: 16px;
            line-height: 1.6;
            opacity: 0.85;
            color: #ccc;
        }

        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
            max-width: 1400px;
            margin: 0 auto;
        }

        .product-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s;
        }

        .product-card:hover {
            transform: translateY(-5px);
            border-color: rgba(0, 212, 255, 0.5);
            box-shadow: 0 15px 40px rgba(0, 212, 255, 0.3);
        }

        .product-image {
            width: 100%;
            height: 300px;
            background: linear-gradient(135deg, #00d4ff 0%, #7b2ff7 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 100px;
            position: relative;
            overflow: hidden;
        }

        .product-image::before {
            content: '';
            position: absolute;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
            animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
            0% { transform: translate(-50%, -50%) scale(0); }
            50% { transform: translate(-50%, -50%) scale(1); }
            100% { transform: translate(-50%, -50%) scale(0); }
        }

        .product-info {
            padding: 30px;
            color: white;
        }

        .product-info h3 {
            font-size: 24px;
            margin-bottom: 10px;
        }

        .product-info p {
            color: #ccc;
            margin-bottom: 15px;
            line-height: 1.6;
        }

        .product-price {
            font-size: 32px;
            font-weight: bold;
            background: linear-gradient(135deg, #00d4ff 0%, #7b2ff7 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 15px;
        }

        .product-features {
            list-style: none;
            margin-bottom: 20px;
            font-size: 14px;
            color: #aaa;
        }

        .product-features li {
            padding: 5px 0;
            padding-right: 20px;
            position: relative;
        }

        .product-features li::before {
            content: '✓';
            position: absolute;
            right: 0;
            color: #00d4ff;
        }

        .buy-button {
            width: 100%;
            padding: 15px;
            background: linear-gradient(135deg, #00d4ff 0%, #7b2ff7 100%);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
        }

        .buy-button:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 25px rgba(0, 212, 255, 0.5);
        }

        .legal-info {
            background: rgba(255, 255, 255, 0.05);
            padding: 40px;
            border-radius: 20px;
            margin-top: 60px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
        }

        .legal-info h3 {
            font-size: 28px;
            margin-bottom: 20px;
            color: #00d4ff;
        }

        .legal-info ul {
            list-style: none;
            line-height: 1.8;
            color: #ccc;
        }

        .legal-info li {
            padding: 10px 0;
            padding-right: 25px;
            position: relative;
        }

        .legal-info li::before {
            content: '✓';
            position: absolute;
            right: 0;
            color: #00d4ff;
            font-weight: bold;
        }

        .contact-section {
            background: linear-gradient(135deg, #00d4ff 0%, #7b2ff7 100%);
            padding: 100px 20px;
            text-align: center;
        }

        .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            max-width: 1200px;
            margin: 40px auto 0;
        }

        .contact-item {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 30px;
            border-radius: 15px;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .contact-item-icon {
            font-size: 48px;
            margin-bottom: 15px;
        }

        .contact-item h3 {
            font-size: 20px;
            margin-bottom: 10px;
        }

        .contact-item p {
            font-size: 16px;
            opacity: 0.95;
        }

        .footer {
            background: #0a0a15;
            color: white;
            padding: 40px 20px;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
        }

        .footer-section h4 {
            color: #00d4ff;
            margin-bottom: 15px;
            font-size: 20px;
        }

        .footer-section p, .footer-section a {
            color: #aaa;
            line-height: 1.8;
            text-decoration: none;
            display: block;
            margin-bottom: 8px;
        }

        .footer-section a:hover {
            color: #00d4ff;
        }

        .footer-bottom {
            text-align: center;
            margin-top: 40px;
            padding-top: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: #666;
        }

        @media (max-width: 768px) {
            .nav-links {
                width: 100%;
                justify-content: center;
            }
            
            .lang-toggle {
                top: auto;
                bottom: 20px;
            }
            
            .cta-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .cta-button {
                width: 100%;
                max-width: 300px;
            }
        }

        .ar-content {
            direction: rtl;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        [lang="ar"] {
            display: none;
        }

        body.ar-lang [lang="de"] {
            display: none;
        }

        body.ar-lang [lang="ar"] {
            display: block;
        }

        body.ar-lang .ar-content {
            display: block;
        }

        body.ar-lang .de-content {
            display: none;
        }

        .warranty-badge {
            background: rgba(0, 212, 255, 0.2);
            border: 2px solid #00d4ff;
            padding: 10px 20px;
            border-radius: 50px;
            display: inline-block;
            margin-top: 15px;
            font-weight: bold;
            color: #00d4ff;
        }
    </style>
</head>
<body>
    <div class="lang-toggle" onclick="toggleLanguage()">
        <span class="de-content">🇩🇪 DE | 🇸🇦 العربية</span>
        <span class="ar-content">🇸🇦 العربية | 🇩🇪 DE</span>
    </div>

    <header class="header">
        <div class="container">
            <nav class="nav">
                <div class="logo">
                    <span>📱</span>
                    <span class="de-content">HandyPro</span>
                    <span class="ar-content">هاندي برو</span>
                </div>
                <ul class="nav-links">
                    <li><a href="#hero"><span lang="de">Home</span><span lang="ar">الرئيسية</span></a></li>
                    <li><a href="#services"><span lang="de">Dienstleistungen</span><span lang="ar">الخدمات</span></a></li>
                    <li><a href="#products"><span lang="de">Produkte</span><span lang="ar">المنتجات</span></a></li>
                    <li><a href="#legal"><span lang="de">Garantie</span><span lang="ar">الضمان</span></a></li>
                    <li><a href="#contact"><span lang="de">Kontakt</span><span lang="ar">اتصل بنا</span></a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="hero" class="hero">
        <canvas id="canvas3d"></canvas>
        <div class="hero-content">
            <h1>
                <span lang="de">Professioneller Smartphone Service in Deutschland</span>
                <span lang="ar">خدمة جوالات احترافية في ألمانيا</span>
            </h1>
            <p>
                <span lang="de">Verkauf • Reparatur • Garantie • Zertifiziert nach deutschen Standards</span>
                <span lang="ar">بيع • تصليح • ضمان • معتمد وفقاً للمعايير الألمانية</span>
            </p>
            <div class="cta-buttons">
                <a href="#contact" class="cta-button">
                    <span lang="de">Jetzt Termin vereinbaren</span>
                    <span lang="ar">احجز موعداً الآن</span>
                </a>
                <a href="#services" class="cta-button secondary">
                    <span lang="de">Unsere Services</span>
                    <span lang="ar">خدماتنا</span>
                </a>
            </div>
        </div>
    </section>

    <section id="services" class="section section-dark">
        <div class="container">
            <h2 class="section-title">
                <span lang="de">Unsere Dienstleistungen</span>
                <span lang="ar">خدماتنا المتميزة</span>
            </h2>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">📱</div>
                    <h3>
                        <span lang="de">Smartphone Verkauf</span>
                        <span lang="ar">بيع الجوالات</span>
                    </h3>
                    <p>
                        <span lang="de">Neueste Modelle aller führenden Marken mit offizieller deutscher Garantie und Rechnung</span>
                        <span lang="ar">أحدث الموديلات من جميع العلامات الرائدة مع ضمان ألماني رسمي وفاتورة</span>
                    </p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🔧</div>
                    <h3>
                        <span lang="de">Display Reparatur</span>
                        <span lang="ar">تصليح الشاشات</span>
                    </h3>
                    <p>
                        <span lang="de">Zertifizierte Originalteile mit 12 Monaten Garantie gemäß deutschem Gewährleistungsrecht</span>
                        <span lang="ar">قطع أصلية معتمدة مع ضمان 12 شهراً وفقاً لقانون الضمان الألماني</span>
                    </p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🔋</div>
                    <h3>
                        <span lang="de">Akku Austausch</span>
                        <span lang="ar">تبديل البطاريات</span>
                    </h3>
                    <p>
                        <span lang="de">Hochwertige Akkus mit CE-Zertifizierung und umweltgerechter Entsorgung</span>
                        <span lang="ar">بطاريات عالية الجودة مع شهادة CE والتخلص البيئي السليم</span>
                    </p>
                </div>
                <div class="service-card">
                    <div class="service-icon">💾</div>
                    <h3>
                        <span lang="de">Software Service</span>
                        <span lang="ar">خدمات البرمجيات</span>
                    </h3>
                    <p>
                        <span lang="de">Professionelle Software-Updates und Datenschutz nach DSGVO-Standards</span>
                        <span lang="ar">تحديثات برمجية احترافية وحماية البيانات وفقاً لمعايير GDPR</span>
                    </p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🛡️</div>
                    <h3>
                        <span lang="de">Garantie Service</span>
                        <span lang="ar">خدمة الضمان</span>
                    </h3>
                    <p>
                        <span lang="de">Umfassende Garantieleistungen gemäß BGB §§ 433-445 mit kostenlosem Ersatzgerät</span>
                        <span lang="ar">خدمات ضمان شاملة وفقاً للقانون المدني الألماني مع جهاز بديل مجاني</span>
                    </p>
                </div>
                <div class="service-card">
                    <div class="service-icon">⚡</div>
                    <h3>
                        <span lang="de">Express Service</span>
                        <span lang="ar">خدمة سريعة</span>
                    </h3>
                    <p>
                        <span lang="de">Schnelle Reparatur innerhalb von 1-2 Stunden bei den meisten Standard-Reparaturen</span>
                        <span lang="ar">تصليح سريع خلال 1-2 ساعة لمعظم التصليحات القياسية</span>
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section id="products" class="section section-light">
        <div class="container">
            <h2 class="section-title">
                <span lang="de">Aktuelle Angebote</span>
                <span lang="ar">العروض الحالية</span>
            </h2>
            <div class="products-grid">
                <div class="product-card">
                    <div class="product-image">📱</div>
                    <div class="product-info">
                        <h3>iPhone 15 Pro</h3>
                        <p>
                            <span lang="de">Neuestes Apple Flaggschiff mit A17 Pro Chip</span>
                            <span lang="ar">أحدث هاتف رائد من آبل مع معالج A17 Pro</span>
                        </p>
                        <ul class="product-features">
                            <li><span lang="de">24 Monate Herstellergarantie</span><span lang="ar">ضمان الشركة المصنعة 24 شهراً</span></li>
                            <li><span lang="de">Deutsche Rechnung inkl. MwSt</span><span lang="ar">فاتورة ألمانية مع ضريبة القيمة المضافة</span></li>
                            <li><span lang="de">14 Tage Rückgaberecht</span><span lang="ar">حق الإرجاع خلال 14 يوماً</span></li>
                        </ul>
                        <div class="product-price">1.299 €</div>
                        <div class="warranty-badge">
                            <span lang="de">✓ Geprüft & Zertifiziert</span>
                            <span lang="ar">✓ مفحوص ومعتمد</span>
                        </div>
                        <button class="buy-button" onclick="contactUs('iPhone 15 Pro')">
                            <span lang="de">Jetzt kaufen</span>
                            <span lang="ar">اشترِ الآن</span>
                        </button>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-image">📱</div>
                    <div class="product-info">
                        <h3>Samsung Galaxy S24 Ultra</h3>
                        <p>
                            <span lang="de">Premium Android mit S Pen und 200MP Kamera</span>
                            <span lang="ar">أندرويد بريميوم مع قلم S وكاميرا 200 ميجابكسل</span>
                        </p>
                        <ul class="product-features">
                            <li><span lang="de">24 Monate Samsung Garantie</span><span lang="ar">ضمان سامسونج 24 شهراً</span></li>
                            <li><span lang="de">EU-Ware mit deutscher Garantie</span><span lang="ar">منتج أوروبي مع ضمان ألماني</span></li>
                            <li><span lang="de">Kostenloser Versand</span><span lang="ar">شحن مجاني</span></li>
                        </ul>
                        <div class="product-price">1.199 €</div>
                        <div class="warranty-badge">
                            <span lang="de">✓ Geprüft & Zertifiziert</span>
                            <span lang="ar">✓ مفحوص ومعتمد</span>
                        </div>
                        <button class="buy-button" onclick="contactUs('Samsung S24 Ultra')">
                            <span lang="de">Jetzt kaufen</span>
                            <span lang="ar">اشترِ الآن</span>
                        </button>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-image">📱</div>
                    <div class="product-info">
                        <h3>Google Pixel 8 Pro</h3>
                        <p>
                            <span lang="de">Pure Android Experience mit Google AI</span>
                            <span lang="ar">تجربة أندرويد نقية مع ذكاء جوجل الاصطناعي</span>
                        </p>
                        <ul class="product-features">
                            <li><span lang="de">24 Monate Google Garantie</span><span lang="ar">ضمان جوجل 24 شهراً</span></li>
                            <li><span lang="de">7 Jahre Software-Updates</span><span lang="ar">7 سنوات تحديثات البرامج</span></li>
                            <li><span lang="de">Made in EU Standards</span><span lang="ar">معايير صنع في الاتحاد الأوروبي</span></li>
                        </ul>
                        <div class="product-price">899 €</div>
                        <div class="warranty-badge">
                            <span lang="de">✓ Geprüft & Zertifiziert</span>
                            <span lang="ar">✓ مفحوص ومعتمد</span>
                        </div>
                        <button class="buy-button" onclick="contactUs('Google Pixel 8 Pro')">
                            <span lang="de">Jetzt kaufen</span>
                            <span lang="ar">اشترِ الآن</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="legal" class="section section-dark">
        <div class="container">
            <h2 class="section-title">
                <span lang="de">Rechtliche Garantien & Qualitätsstandards</span>
                <span lang="ar">الضمانات القانونية ومعايير الجودة</span>
            </h2>
            <div class="legal-info">
                <h3>
                    <span lang="de">Unsere Verpflichtungen nach deutschem Recht:</span>
                    <span lang="ar">التزاماتنا بموجب القانون الألماني:</span>
                </h3>
                <ul>
                    <li>
                        <span lang="de">Gesetzliche Gewährleistung von 24 Monaten gemäß BGB §§ 437, 439</span>
                        <span lang="ar">ضمان قانوني لمدة 24 شهراً وفقاً للقانون المدني الألماني</span>
                    </li>
                    <li>
                        <span lang="de">14 Tage Widerrufsrecht nach Fernabsatzgesetz</span>
                        <span lang="ar">حق الإلغاء خلال 14 يوماً وفقاً لقانون البيع عن بعد</span>
                    </li>
                    <li>
                        <span lang="de">Alle Geräte werden mit deutscher Rechnung und MwSt verkauft</span>
                        <span lang="ar">جميع الأجهزة تُباع مع فاتورة ألمانية وضريبة القيمة المضافة</span>
                    </li>
                    <li>
                        <span lang="de">CE-Zertifizierung für alle Produkte und Ersatzteile</span>
                        <span lang="ar">شهادة CE لجميع المنتجات وقطع الغيار</span>
                    </li>
                    <li>
                        <span lang="de">Datenschutz nach DSGVO - Ihre Daten sind sicher</span>
                        <span lang="ar">حماية البيانات وفقاً لـ GDPR - بياناتك آمنة</span>
                    </li>
                    <li>
                        <span lang="de">Umweltgerechte Entsorgung von Altgeräten nach ElektroG</span>
                        <span lang="ar">التخلص البيئي من الأجهزة القديمة وفقاً لقانون الإلكترونيات</span>
                    </li>
                    <li>
                        <span lang="de">Zertifizierte Techniker nach IHK-Standards</span>
                        <span lang="ar">فنيون معتمدون وفقاً لمعايير غرفة الصناعة والتجارة</span>
                    </li>
                    <li>
                        <span lang="de">Transparente Preisgestaltung ohne versteckte Kosten</span>
                        <span lang="ar">تسعير شفاف بدون تكاليف خفية</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section id="contact" class="contact-section">
        <div class="container">
            <h2 class="section-title">
                <span lang="de">Kontaktieren Sie uns</span>
                <span lang="ar">تواصل معنا</span>
            </h2>
            <p style="font-size: 22px; margin-bottom: 20px;">
                <span lang="de">Besuchen Sie uns in Kiel oder kontaktieren Sie uns online</span>
                <span lang="ar">قم بزيارتنا في كييل أو تواصل معنا عبر الإنترنت</span>
            </p>
            <div class="contact-grid">
                <div class="contact-item">
                    <div class="contact-item-icon">📞</div>
                    <h3>
                        <span lang="de">Telefon</span>
                        <span lang="ar">الهاتف</span>
                    </h3>
                    <p>+49 431 123 4567</p>
                    <p style="font-size: 14px; opacity: 0.8;">
                        <span lang="de">Mo-Fr: 9:00-19:00 Uhr<br>Sa: 10:00-16:00 Uhr</span>
                        <span lang="ar">الإثنين-الجمعة: 9:00-19:00<br>السبت: 10:00-16:00</span>
                    </p>
                </div>
                <div class="contact-item">
                    <div class="contact-item-icon">📍</div>
                    <h3>
                        <span lang="de">Adresse</span>
                        <span lang="ar">العنوان</span>
                    </h3>
                    <p>Holstenstraße 15<br>24103 Kiel<br>Deutschland</p>
                </div>
                <div class="contact-item">
                    <div class="contact-item-icon">✉️</div>
                    <h3>
                        <span lang="de">E-Mail</span>
                        <span lang="ar">البريد الإلكتروني</span>
                    </h3>
                    <p>info@handypro-kiel.de</p>
                    <p style="font-size: 14px; opacity: 0.8;">
                        <span lang="de">Antwort innerhalb 24h</span>
                        <span lang="ar">الرد خلال 24 ساعة</span>
                    </p>
                </div>
                <div class="contact-item">
                    <div class="contact-item-icon">🚗</div>
                    <h3>
                        <span lang="de">Parken</span>
                        <span lang="ar">مواقف السيارات</span>
                    </h3>
                    <p>
                        <span lang="de">Kostenlose Parkplätze<br>direkt vor dem Geschäft</span>
                        <span lang="ar">مواقف مجانية<br>مباشرة أمام المحل</span>
                    </p>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>HandyPro Kiel</h4>
                    <p>
                        <span lang="de">Ihr vertrauenswürdiger Partner für Smartphones in Schleswig-Holstein</span>
                        <span lang="ar">شريكك الموثوق للهواتف الذكية في شليسفيغ هولشتاين</span>
                    </p>
                </div>
                <div class="footer-section">
                    <h4>
                        <span lang="de">Rechtliches</span>
                        <span lang="ar">القانونية</span>
                    </h4>
                    <a href="#">
                        <span lang="de">Impressum</span>
                        <span lang="ar">بيانات الناشر</span>
                    </a>
                    <a href="#">
                        <span lang="de">Datenschutz (DSGVO)</span>
                        <span lang="ar">حماية البيانات</span>
                    </a>
                    <a href="#">AGB</a>
                    <a href="#">
                        <span lang="de">Widerrufsrecht</span>
                        <span lang="ar">حق الإلغاء</span>
                    </a>
                </div>
                <div class="footer-section">
                    <h4>
                        <span lang="de">Services</span>
                        <span lang="ar">الخدمات</span>
                    </h4>
                    <a href="#">
                        <span lang="de">Reparatur-Service</span>
                        <span lang="ar">خدمة التصليح</span>
                    </a>
                    <a href="#">
                        <span lang="de">Verkauf</span>
                        <span lang="ar">البيع</span>
                    </a>
                    <a href="#">
                        <span lang="de">Garantie</span>
                        <span lang="ar">الضمان</span>
                    </a>
                    <a href="#">
                        <span lang="de">Trade-In</span>
                        <span lang="ar">الاستبدال</span>
                    </a>
                </div>
                <div class="footer-section">
                    <h4>
                        <span lang="de">Öffnungszeiten</span>
                        <span lang="ar">ساعات العمل</span>
                    </h4>
                    <p>
                        <span lang="de">Montag - Freitag: 9:00 - 19:00<br>
                        Samstag: 10:00 - 16:00<br>
                        Sonntag: Geschlossen</span>
                        <span lang="ar">الإثنين - الجمعة: 9:00 - 19:00<br>
                        السبت: 10:00 - 16:00<br>
                        الأحد: مغلق</span>
                    </p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>
                    <span lang="de">© 2024 HandyPro Kiel. Alle Rechte vorbehalten. | USt-IdNr: DE123456789</span>
                    <span lang="ar">© 2024 هاندي برو كييل. جميع الحقوق محفوظة</span>
                </p>
            </div>
        </div>
    </footer>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        let currentLang = 'de';

        function toggleLanguage() {
            currentLang = currentLang === 'de' ? 'ar' : 'de';
            document.body.classList.toggle('ar-lang');
            
            if (currentLang === 'ar') {
                document.documentElement.setAttribute('lang', 'ar');
                document.documentElement.setAttribute('dir', 'rtl');
            } else {
                document.documentElement.setAttribute('lang', 'de');
                document.documentElement.setAttribute('dir', 'ltr');
            }
        }

        function contactUs(product) {
            const message = currentLang === 'de' 
                ? `Vielen Dank für Ihr Interesse am ${product}! Wir werden uns in Kürze bei Ihnen melden.`
                : `شكراً لاهتمامك بـ ${product}! سنتواصل معك قريباً.`;
            alert(message);
        }

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        const canvas = document.getElementById('canvas3d');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        
        camera.position.z = 5;

        const geometry = new THREE.TorusGeometry(1.5, 0.4, 16, 100);
        const material = new THREE.MeshPhongMaterial({
            color: 0x00d4ff,
            emissive: 0x7b2ff7,
            shininess: 100,
            transparent: true,
            opacity: 0.8
        });
        const torus = new THREE.Mesh(geometry, material);
        scene.add(torus);

        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 1500;
        const posArray = new Float32Array(particlesCount * 3);
        
        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 15;
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.03,
            color: 0x00d4ff,
            transparent: true,
            opacity: 0.8
        });
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        const light = new THREE.PointLight(0xffffff, 1, 100);
        light.position.set(10, 10, 10);
        scene.add(light);

        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);

        let mouseX = 0;
        let mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
        });

        function animate() {
            requestAnimationFrame(animate);
            
            torus.rotation.x += 0.01;
            torus.rotation.y += 0.005;
            torus.rotation.z += 0.01;
            
            particlesMesh.rotation.y += 0.001;
            
            camera.position.x = mouseX * 0.5;
            camera.position.y = mouseY * 0.5;
            camera.lookAt(scene.position);
            
            renderer.render(scene, camera);
        }

        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.service-card, .product-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s ease';
            observer.observe(el);
        });
    </script>
</body>
</html>
