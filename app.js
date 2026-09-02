/**
 * KERO TRAVEL - LUXURY TRAVEL & VIP LIMOUSINE
 * Interactive Bilingual Application & WhatsApp Dispatch Engine
 * Phone / WhatsApp: +201277297984
 * Facebook: https://www.facebook.com/share/1C6Qq1kWgP/
 */

// Official Company Data
const COMPANY_CONFIG = {
  phone: "+201277297984",
  rawPhone: "01277297984",
  whatsappNumber: "201277297984",
  facebookUrl: "https://www.facebook.com/share/1C6Qq1kWgP/",
  location: "Alexandria Governorate, Egypt"
};

// Bilingual Translations Dictionary
const translations = {
  ar: {
    // Nav
    nav_home: "الرئيسية",
    nav_fleet: "أسطول السيارات",
    nav_packages: "الرحلات السياحية",
    nav_services: "خدماتنا",
    nav_booking: "احجز الآن",
    nav_why_us: "لماذا كيرو ترافيل",
    nav_reviews: "آراء العملاء",
    nav_contact: "تواصل وموقعنا",
    quick_call: "اتصال مباشر",
    quick_whatsapp: "واتساب فوري",
    lang_toggle_btn: "English",

    // Top Bar
    top_announcement: "✨ خدمة ليموزين VIP وسياحة فاخرة على مدار 24 ساعة في الإسكندرية وجميع محافظات مصر",

    // Hero Section
    hero_badge: "⭐ الشركة الأولى في رحلات وليموزين VIP",
    hero_title_1: "سافر بأعلى درجات",
    hero_title_2: "الرفاهية والأمان",
    hero_title_3: "مع كيرو ترافيل",
    hero_subtitle: "نقدم لك أرقى خدمات الليموزين والنقل السياحي الفاخر في الإسكندرية، الساحل الشمالي، القاهرة، وجميع أنحاء مصر بأحدث أسطول سيارات مكيف وسائقين محترفين.",
    hero_cta_book: "احجز رحلتك عبر واتساب",
    hero_cta_fleet: "استكشف أسطولنا",
    stat_clients: "عميل متميز",
    stat_rating: "تقييم 5 نجوم",
    stat_fleet: "أسطول حديث 2024+",
    stat_support: "خدمة 24/7",

    // Quick Search Widget
    qs_title: "التخطيط السريع للرحلة",
    qs_service_label: "نوع الخدمة / الرحلة",
    qs_car_label: "السيارة المفضلة",
    qs_date_label: "تاريخ الانطلاق",
    qs_btn: "متابعة الحجز الفوري",

    // Services
    services_tag: "خدماتنا المتميزة",
    services_title: "حلول نقل وسياحة بمقاييس عالمية",
    srv_1_title: "ليموزين مطارات VIP",
    srv_1_desc: "توصيل واستقبال من وإلى مطار برج العرب، مطار القاهرة الدولي، ومطار سفنكس مع متابعة دقيقة لمواعيد الرحلات.",
    srv_2_title: "رحلات الإسكندرية والساحل",
    srv_2_desc: "جولات سياحية يومية داخل الإسكندرية والساحل الشمالي والعلمين الجديدة ومراسي ورأس الحكمة برفاهية متكاملة.",
    srv_3_title: "رحلات سياحية لجميع المحافظات",
    srv_3_desc: "برامج سياحية متكاملة للأهرامات، المتحف المصري الكبير، واحة سيوة، شرم الشيخ، والغردقة بسيارات خاصة.",
    srv_4_title: "خدمة رجال الأعمال والمناسبات",
    srv_4_desc: "سيارات سيدان فارهة وسائقين بزي رسمي لخدمة الشركات والمؤتمرات والمناسبات الخاصة بأعلى معايير الخصوصية.",

    // Fleet Section
    fleet_tag: "أسطول سيارات كيرو ترافيل",
    fleet_title: "اختر سيارتك الفاخرة للرحلة",
    fleet_subtitle: "جميع سياراتنا موديلات حديثة، مكيفة بالكامل ومعقمة، مزودة بأحدث وسائل الراحة والأمان وسائقين خبراء بالطرق.",
    fleet_btn_book: "احجز هذه السيارة",
    fleet_btn_details: "تفاصيل السيارة",
    passengers_unit: "ركاب",
    luggage_unit: "حقائب",

    // Cars Specific
    car_hiace_title: "تويوتا هايس VIP (تويوتا سياحي سقف عالي)",
    car_hiace_badge: "الأفضل للرحلات الجماعية والعائلية",
    car_hiace_desc: "ميني باص VIP سياحي فخم سقف عالي، كراسي طيارة مريحة قابلة للإمالة، تكييف قوي أمامي وخلفي، ومساحة واسعة جداً للحقائب.",
    car_hiace_feat1: "يتسع لـ 14 راكب براحة تامة",
    car_hiace_feat2: "مساحة تخزين حقائب عملاقة",
    car_hiace_feat3: "تكييف سنترال لكل المقاعد",
    car_hiace_feat4: "مثالية لرحلات الساحل وسيوة والمجموعات",

    car_xpander_title: "ميتسوبيشي إكسباندر (Mitsubishi Xpander)",
    car_xpander_badge: "عائلية 7 راكب - ساحلية وسفاري",
    car_xpander_desc: "سيارة كروس أوفر فسيحة وعصرية تتسع لـ 7 ركاب، ارتفاع ممتاز عن الأرض ومثالية لرحلات الشواطئ والمصايف والرحلات العائلية.",
    car_xpander_feat1: "تتسع لـ 7 ركاب براحة",
    car_xpander_feat2: "تكييف مزدوج قوي لجميع الصفوف",
    car_xpander_feat3: "ثبات عالي على الطرق السريعة والشاطئية",
    car_xpander_feat4: "شاشات وترفيه وأنظمة أمان متطورة",

    car_elantra_white_title: "هيونداي إلنترا CN7 بيضاء (Elantra CN7)",
    car_elantra_white_badge: "ليموزين مطارات ومشاوير VIP",
    car_elantra_white_desc: "سيدان فاخرة بتصميم انسيابي جذاب، تضمن لك وصولاً سريعاً ومريحاً ومناسباً لاستقبال وتوديع المطارات والمشاوير الخاصة.",
    car_elantra_white_feat1: "تتسع لـ 4 ركاب مع شنط السفر",
    car_elantra_white_feat2: "تكييف تاتش فائق البرودة",
    car_elantra_white_feat3: "صالون جلدي مريح ونظام صوتي نقي",
    car_elantra_white_feat4: "مثالية لمطار برج العرب والقاهرة",

    car_elantra_black_title: "هيونداي إلنترا CN7 سوداء فارهة",
    car_elantra_black_badge: "رجال أعمال ومناسبات خاصة",
    car_elantra_black_desc: "الفخامة والأناقة باللون الأسود الملكي، مخصصة لرجال الأعمال، كبار الزوار، والوفود الرسمية والمناسبات الراقية.",
    car_elantra_black_feat1: "تصميم أنيق جداً باللون الأسود الملكي",
    car_elantra_black_feat2: "عزل صوتي فائق لراحة وخصوصية تامة",
    car_elantra_black_feat3: "سائق خاص بزي رسمي واحترافية",
    car_elantra_black_feat4: "مجهزة بكافة وسائل الراحة والاتصال",

    // Packages Section
    pkg_tag: "وجهات وبرامج مميزة",
    pkg_title: "أشهر رحلاتنا السياحية في مصر",
    pkg_subtitle: "برامج سياحية متكاملة مصممة لتستمتع بأجمل معالم مصر برفقة عائلتك أو أصدقائك بأسعار منافسة.",
    pkg_duration: "المدة:",
    pkg_book_btn: "احجز الرحلة عبر واتساب",
    pkg_badge_popular: "الأكثر طلباً",
    pkg_badge_vip: "VIP خاص",

    pkg_1_title: "جولة عروس البحر الأبيض (الإسكندرية)",
    pkg_1_desc: "جولة ساحرة تشمل قلعة قايتباي، قصر المنتزه، مكتبة الإسكندرية، كوبري ستانلي، وأشهى وجبة أسماك إسكندراني على الكورنيش.",
    pkg_1_dur: "يوم كامل (8 - 10 ساعات)",
    pkg_1_feat: "سائق خاص + مرونة في المسار",

    pkg_2_title: "رحلات الساحل الشمالي والعلمين ومراسي",
    pkg_2_desc: "توصيل وانتقالات فاخرة إلى قرى الساحل الشمالي، مارينا، مراسي، العلمين الجديدة، وسيدي عبد الرحمن ورأس الحكمة.",
    pkg_2_dur: "توصيل سريع / رحلة يومية",
    pkg_2_feat: "مكيف بالكامل + حمولة شنط",

    pkg_3_title: "رحلة الأهرامات والمتحف المصري الكبير (القاهرة)",
    pkg_3_desc: "زيارة أهرامات الجيزة وأبو الهول، المتحف المصري الجديد، خان الخليلي، والحسين مع جولة نيلية راقية.",
    pkg_3_dur: "يوم كامل (من الإسكندرية للقاهرة)",
    pkg_3_feat: "ذهاب وعودة مع الانتظار",

    pkg_4_title: "سفاري وبحيرات الملح الساحرة (واحة سيوة)",
    pkg_4_desc: "مغامرة لا تُنسى في واحة سيوة، عيون المياه الطبيعية، جبل الموتى، قلعة شالي، وبحيرات الملح الكريستالية.",
    pkg_4_dur: "3 أيام / ليلتان",
    pkg_4_feat: "برنامج متكامل وسيارات مجهزة",

    pkg_5_title: "خدمة ليموزين المطارات (برج العرب / القاهرة)",
    pkg_5_desc: "خدمة نقلVIP على مدار 24 ساعة من وإلى مطار برج العرب، مطار القاهرة الدولي، ومطار سفنكس مع الالتزام التام بالمواعيد.",
    pkg_5_dur: "حسب موعد الطائرة",
    pkg_5_feat: "متابعة مسار الطائرة + استقبال بالاسم",

    pkg_6_title: "رحلات شواطئ البحر الأحمر (شرم الشيخ والغردقة)",
    pkg_6_desc: "سفر مريح ومباشر بسيارات VIP معقمة ومجهزة لمسافات السفر الطويلة لتستمتع برحلتك من باب بيتك حتى الفندق.",
    pkg_6_dur: "ذهاب فقط أو ذهاب وعودة",
    pkg_6_feat: "سائقين محترفين للطرق السريعة",

    // Booking Wizard
    book_tag: "حجز مباشر عبر واتساب",
    book_title: "احجز رحلتك الآن في ثوانٍ معدودة",
    book_subtitle: "اختر بيانات رحلتك وسيتم تجهيز رسالة حجز مخصصة وإرسالها مباشرة لمسؤول الحجوزات على واتساب.",
    
    form_step1: "1. تفاصيل الرحلة والسيارة",
    form_step2: "2. المواعيد والأفراد",
    form_step3: "3. بيانات التواصل والحجز",

    label_service: "اختر الرحلة / الخدمة المطلوبة *",
    label_vehicle: "نوع السيارة المفضلة *",
    label_trip_direction: "نوع المشوار *",
    opt_oneway: "ذهاب فقط",
    opt_roundtrip: "ذهاب وعودة (مع الانتظار)",
    opt_multidays: "رحلة عدة أيام",

    label_pickup_city: "مكان الانطلاق (نقطة التحرك) *",
    label_dest_city: "الوجهة المطلوبة (مكان الوصول) *",
    label_dep_date: "تاريخ الانطلاق *",
    label_dep_time: "وقت التحرك التقريبي *",
    label_return_date: "تاريخ العودة (في حال الذهاب والعودة)",
    label_passengers: "عدد المسافرين (أفراد) *",
    label_luggage: "عدد الحقائب المتوقع",

    label_name: "الاسم الكريم *",
    label_phone: "رقم الهاتف / واتساب *",
    label_notes: "ملاحظات إضافية أو طلبات خاصة (اختياري)",

    preview_title: "معاينة رسالة الحجز على واتساب",
    preview_tip: "هذه الرسالة المنظمة ستصلنا فور ضغطك على زر الحجز:",
    btn_submit_booking: "إرسال الحجز عبر واتساب الآن 🚀",
    btn_copy_message: "نسخ نص الرسالة",

    // Why Us
    why_tag: "لماذا كيرو ترافيل؟",
    why_title: "معايير استثنائية تجعلنا خيارك الأول",
    why_1_title: "سيارات حديثة ومكيفة 100%",
    why_1_desc: "أسطول متجدد من أحدث الموديلات يخضع لصيانة دورية وفحص شامل قبل كل رحلة لضمان أقصى درجات الأمان.",
    why_2_title: "سائقون محترفون وخبراء",
    why_2_desc: "كادر قيادة مدرب على أعلى مستويات القيادة الآمنة واللباقة وحفظ جميع الطرق والمحاور السريعة في مصر.",
    why_3_title: "دقة متناهية في المواعيد",
    why_3_desc: "نصلك قبل موعدك دائماً، مع متابعة حية لمواعيد إقلاع وهبوط الطائرات لضمان استقبالك بدون أي تأخير.",
    why_4_title: "أفضل الأسعار وشفافية تامة",
    why_4_desc: "أسعار واضحة ومناسبة بدون أي رسوم خفية مع باقات وعروض خاصة للرحلات الجماعية والعائلية والشركات.",

    // Reviews
    reviews_tag: "آراء عملائنا",
    reviews_title: "ثقة متبادلة وتجارب سفر لا تُنسى",
    rev_1_text: "تجربة ممتازة جداً مع كيرو ترافيل! حجزت ليموزين من مطار برج العرب للإسكندرية، السائق وصل قبل الميعاد والسيارة الإلنترا CN7 كانت نظيفة جداً ومريحة. أنصح بالتعامل معهم بشدة.",
    rev_1_name: "م. أحمد الشناوي",
    rev_1_role: "رجل أعمال - الإسكندرية",

    rev_2_text: "سافرنا عيلة كاملة للساحل الشمالي بتويوتا هايس VIP، الميني باص كان تحفة وكراسي مريحة جداً والتكييف ثلاجة والسائق محترم وأمين جداً. شكراً كيرو ترافيل على الخدمة الراقية.",
    rev_2_name: "د. هبة عبد المنعم",
    rev_2_role: "رحلة عائلية - الساحل الشمالي",

    rev_3_text: "حجزنا الميتسوبيشي إكسباندر لرحلة اليوم الواحد للقاهرة والأهرامات. الرحلة كانت منظمة ومريحة جداً وتوفقنا في السواق اللي كان صبور معانا وساعدنا في كل الأماكن.",
    rev_3_name: "أ. مينا رفيق",
    rev_3_role: "جولة القاهرة والأهرامات",

    // Location & Contact
    contact_tag: "موقعنا وتواصل معنا",
    contact_title: "نحن في خدمتك على مدار 24 ساعة",
    contact_subtitle: "مقرنا الرئيسي في محافظة الإسكندرية ونغطي كافة المحافظات والمطارات والمزارات السياحية في مصر.",
    card_loc_title: "المقر والفرع الرئيسي",
    card_loc_desc: "محافظة الإسكندرية، جمهورية مصر العربية",
    card_phone_title: "اتصل بنا هاتفياً",
    card_phone_desc: "متاح 24 ساعة لاستقبال طلباتكم واستفساراتكم",
    card_wa_title: "مراسلة واتساب فورية",
    card_wa_desc: "رد سريع وتأكيد فوري للحجوزات",
    card_fb_title: "صفحتنا الرسمية على فيسبوك",
    card_fb_desc: "تابع أحدث عروضنا ورحلاتنا اليومية والصور",
    btn_visit_facebook: "زيارة صفحة فيسبوك ↗",

    // Footer
    footer_about: "كيرو ترافيل (Kero Travel) - الشركة الرائدة في خدمات الليموزين والنقل السياحي الفاخر في الإسكندرية ومصر. رحلات سياحية، توصيل مطارات، وأحدث أسطول سيارات VIP.",
    footer_quick_links: "روابط سريعة",
    footer_fleet_links: "سياراتنا الفاخرة",
    footer_contact_info: "معلومات التواصل",
    footer_rights: "جميع الحقوق محفوظة لـ كيرو ترافيل © 2025 - Kero Travel",
    footer_call_us: "اتصل بنا:",
    footer_wa_us: "واتساب:",
    footer_loc: "الإسكندرية، مصر",

    // Modals & Dynamic Alerts
    copied_success: "تم نسخ الرسالة بنجاح!",
    fill_required: "يرجى تعبئة الحقول المطلوبة (الاسم، الهاتف، نوع الخدمة) لإتمام الحجز.",
    vehicle_selected_toast: "تم اختيار السيارة بنجاح ونقلها لنموذج الحجز!",
    package_selected_toast: "تم اختيار الرحلة بنجاح ونقلها لنموذج الحجز!"
  },

  en: {
    // Nav
    nav_home: "Home",
    nav_fleet: "VIP Fleet",
    nav_packages: "Tour Packages",
    nav_services: "Services",
    nav_booking: "Book Now",
    nav_why_us: "Why Us",
    nav_reviews: "Reviews",
    nav_contact: "Contact & Location",
    quick_call: "Direct Call",
    quick_whatsapp: "Instant WhatsApp",
    lang_toggle_btn: "العربية",

    // Top Bar
    top_announcement: "✨ 24/7 VIP Limousine & Luxury Travel Services in Alexandria & All Egypt | Call: +201277297984",

    // Hero Section
    hero_badge: "⭐ #1 Premier Travel & VIP Limousine in Egypt",
    hero_title_1: "Experience Ultimate",
    hero_title_2: "Luxury & Safety",
    hero_title_3: "With Kero Travel",
    hero_subtitle: "Your premier gateway to first-class limousine transfers and tailored private tours across Alexandria, North Coast, Cairo, and all over Egypt with modern luxury vehicles and professional chauffeurs.",
    hero_cta_book: "Book via WhatsApp",
    hero_cta_fleet: "Explore VIP Fleet",
    stat_clients: "Happy Travelers",
    stat_rating: "5.0 Rating",
    stat_fleet: "Modern 2024+ Fleet",
    stat_support: "24/7 VIP Support",

    // Quick Search Widget
    qs_title: "Quick Trip Planner",
    qs_service_label: "Select Service / Trip",
    qs_car_label: "Preferred Vehicle",
    qs_date_label: "Departure Date",
    qs_btn: "Proceed to Instant Booking",

    // Services
    services_tag: "Our Premium Services",
    services_title: "World-Class Travel & Limousine Solutions",
    srv_1_title: "VIP Airport Transfers",
    srv_1_desc: "24/7 direct transfers to/from Borg El Arab (HBE), Cairo International (CAI), and Sphinx (SPX) with live flight tracking.",
    srv_2_title: "Alexandria & North Coast Tours",
    srv_2_desc: "Full-day scenic tours in Alexandria, Marassi, New Alamein, Marina, and Ras El Hekma with complete comfort.",
    srv_3_title: "All-Egypt Private Tours",
    srv_3_desc: "Private customized trips to Giza Pyramids, Grand Egyptian Museum, Siwa Oasis, Sharm El Sheikh, and Hurghada.",
    srv_4_title: "Corporate & VIP Chauffeur",
    srv_4_desc: "Executive black sedans, uniformed drivers, and discrete business travel for corporate clients, delegations & events.",

    // Fleet Section
    fleet_tag: "Kero Travel Fleet",
    fleet_title: "Choose Your Luxury Ride",
    fleet_subtitle: "Every car in our fleet is a late-model, fully air-conditioned, impeccably maintained vehicle driven by certified professional drivers.",
    fleet_btn_book: "Book This Car",
    fleet_btn_details: "Car Specs",
    passengers_unit: "Passengers",
    luggage_unit: "Luggage Bags",

    // Cars Specific
    car_hiace_title: "Toyota HiAce VIP (High-Roof Tour Van)",
    car_hiace_badge: "Best for Groups & Big Families",
    car_hiace_desc: "High-roof luxury passenger van with premium reclining captain chairs, powerful multi-zone climate control, and massive luggage capacity.",
    car_hiace_feat1: "Comfortably seats up to 14 Passengers",
    car_hiace_feat2: "Massive luggage compartment",
    car_hiace_feat3: "Multi-zone dual AC throughout",
    car_hiace_feat4: "Ideal for North Coast, Siwa & Group Tours",

    car_xpander_title: "Mitsubishi Xpander (7-Seater Crossover)",
    car_xpander_badge: "Family 7-Seater - Coastal & Safari",
    car_xpander_desc: "Modern, high-clearance 7-seater crossover with flexible seating, excellent ride smoothness, and ideal ergonomics for beach and safari trips.",
    car_xpander_feat1: "Seats 7 passengers comfortably",
    car_xpander_feat2: "Dual air conditioning for all rows",
    car_xpander_feat3: "High clearance for highway & coast rides",
    car_xpander_feat4: "Modern multimedia & top safety ratings",

    car_elantra_white_title: "Hyundai Elantra CN7 White",
    car_elantra_white_badge: "VIP Airport & City Limousine",
    car_elantra_white_desc: "Sleek, ultra-modern aerodynamic sedan offering supreme cabin quietness, luxury leather seating, and swift airport transfers.",
    car_elantra_white_feat1: "Accommodates 4 passengers + luggage",
    car_elantra_white_feat2: "Ice-cold touch climate control",
    car_elantra_white_feat3: "Premium acoustic insulation & sound system",
    car_elantra_white_feat4: "Top choice for Borg El Arab & Cairo Airport",

    car_elantra_black_title: "Hyundai Elantra CN7 Black VIP",
    car_elantra_black_badge: "Executive & Special Occasions",
    car_elantra_black_desc: "Executive black finish crafted for business leaders, VIP guests, official delegations, and high-end personal occasions.",
    car_elantra_black_feat1: "Royal black executive exterior",
    car_elantra_black_feat2: "Tinted privacy windows & quiet cabin",
    car_elantra_black_feat3: "Uniformed professional private chauffeur",
    car_elantra_black_feat4: "Equipped with luxury amenities & phone chargers",

    // Packages Section
    pkg_tag: "Curated Itineraries",
    pkg_title: "Egypt's Most Popular Tour Packages",
    pkg_subtitle: "Handcrafted journeys to Egypt's most iconic destinations with flexible private itineraries and top-tier hospitality.",
    pkg_duration: "Duration:",
    pkg_book_btn: "Book Tour via WhatsApp",
    pkg_badge_popular: "Popular",
    pkg_badge_vip: "VIP Private",

    pkg_1_title: "Pearl of the Mediterranean (Alexandria Tour)",
    pkg_1_desc: "Explore Qaitbay Citadel, Montaza Palace & Gardens, Bibliotheca Alexandrina, Stanley Bridge, and authentic Mediterranean seafood on the Corniche.",
    pkg_1_dur: "Full Day (8 - 10 Hours)",
    pkg_1_feat: "Private Chauffeur + Flexible route",

    pkg_2_title: "North Coast, New Alamein & Marassi VIP",
    pkg_2_desc: "Luxury direct transfer and day tours across Sahel resorts: Marina, Marassi, New Alamein City, Sidi Abdel Rahman, and Ras El Hekma.",
    pkg_2_dur: "Fast Transfer / Full Day",
    pkg_2_feat: "Full AC + Extra luggage space",

    pkg_3_title: "Cairo & Giza Pyramids VIP Day Trip",
    pkg_3_desc: "Discover the Great Pyramids of Giza, the Sphinx, the Grand Egyptian Museum (GEM), Khan El Khalili bazaar, and an optional Nile Felucca ride.",
    pkg_3_dur: "Full Day (From Alexandria to Cairo)",
    pkg_3_feat: "Round-trip with driver waiting",

    pkg_4_title: "Siwa Oasis Desert Safari & Salt Lakes",
    pkg_4_desc: "An unforgettable desert expedition to Siwa's crystal salt lakes, natural hot springs, Cleopatra's Bath, Shali Fortress, and Great Sand Sea dunes.",
    pkg_4_dur: "3 Days / 2 Nights",
    pkg_4_feat: "All-inclusive route & safari prep",

    pkg_5_title: "24/7 Airport Limousine (Borg El Arab / Cairo)",
    pkg_5_desc: "Stress-free airport pickups and drop-offs to Borg El Arab (HBE), Cairo (CAI), and Sphinx (SPX) airports with punctual flight tracking.",
    pkg_5_dur: "Tailored to Flight Time",
    pkg_5_feat: "Live Flight Tracking + Meet & Greet",

    pkg_6_title: "Red Sea Escapes (Sharm El Sheikh & Hurghada)",
    pkg_6_desc: "Door-to-door private VIP limousine travel from Alexandria/Cairo straight to your Red Sea resort hotel in maximum comfort.",
    pkg_6_dur: "One-way or Round-trip",
    pkg_6_feat: "Professional long-distance drivers",

    // Booking Wizard
    book_tag: "Direct WhatsApp Dispatch",
    book_title: "Book Your Journey in Seconds",
    book_subtitle: "Choose your travel preferences and our engine will generate an instant, structured booking message ready to send to our 24/7 team on WhatsApp.",
    
    form_step1: "1. Trip & Vehicle Selection",
    form_step2: "2. Schedule & Passengers",
    form_step3: "3. Contact & Instant Dispatch",

    label_service: "Select Service / Destination *",
    label_vehicle: "Preferred Vehicle *",
    label_trip_direction: "Trip Type *",
    opt_oneway: "One-Way Transfer",
    opt_roundtrip: "Round-Trip (With Wait)",
    opt_multidays: "Multi-Day Tour",

    label_pickup_city: "Pickup Location / City *",
    label_dest_city: "Destination / Drop-off *",
    label_dep_date: "Departure Date *",
    label_dep_time: "Approx. Departure Time *",
    label_return_date: "Return Date (If Round-Trip)",
    label_passengers: "Number of Passengers *",
    label_luggage: "Estimated Luggage Pieces",

    label_name: "Your Full Name *",
    label_phone: "WhatsApp / Phone Number *",
    label_notes: "Special Requests / Notes (Optional)",

    preview_title: "WhatsApp Message Live Preview",
    preview_tip: "This structured booking message will be sent instantly upon clicking book:",
    btn_submit_booking: "Dispatch Booking via WhatsApp 🚀",
    btn_copy_message: "Copy Message Text",

    // Why Us
    why_tag: "Why Kero Travel?",
    why_title: "Exceptional Standards That Set Us Apart",
    why_1_title: "100% Modern & Air-Conditioned Fleet",
    why_1_desc: "Latest vehicle models undergo strict routine maintenance and sanitization before every single journey for your utmost safety.",
    why_2_title: "Certified Professional Chauffeurs",
    why_2_desc: "Courteous, multilingual drivers trained in defensive driving with deep knowledge of Egypt's major highways and scenic routes.",
    why_3_title: "Zero-Delay Punctuality Guarantee",
    why_3_desc: "We always arrive ahead of schedule and track flights in real-time to guarantee seamless airport pickups without wait times.",
    why_4_title: "Transparent & Competitive Rates",
    why_4_desc: "Clear upfront pricing with no hidden charges, plus customized corporate and group packages.",

    // Reviews
    reviews_tag: "Client Testimonials",
    reviews_title: "Trusted by Travelers Across Egypt & Abroad",
    rev_1_text: "Outstanding service with Kero Travel! I booked an airport limousine from Borg El Arab to Alexandria. The driver arrived 15 mins early, and the Elantra CN7 was spotless. Highly recommended!",
    rev_1_name: "Eng. Ahmed El-Shennawy",
    rev_1_role: "Business Executive - Alexandria",

    rev_2_text: "Our entire family traveled to North Coast in their Toyota HiAce VIP van. High-roof comfort, ice-cold AC, and very polite driver. Kero Travel made our vacation start with pure joy.",
    rev_2_name: "Dr. Heba Abdel-Moneim",
    rev_2_role: "Family Vacation - North Coast",

    rev_3_text: "We booked the Mitsubishi Xpander for a full-day Cairo & Pyramids tour from Alex. The car was very spacious, ride was super smooth, and the chauffeur was patient and knowledgeable.",
    rev_3_name: "Mina Rafik",
    rev_3_role: "Cairo & Pyramids Day Tour",

    // Location & Contact
    contact_tag: "Our Location & Contact",
    contact_title: "We Are at Your Service 24/7",
    contact_subtitle: "Headquartered in Alexandria Governorate, providing comprehensive travel and VIP limousine coverage across all Egypt.",
    card_loc_title: "Headquarters & City Branch",
    card_loc_desc: "Alexandria Governorate, Egypt",
    card_phone_title: "Call Us 24/7",
    card_phone_desc: "Round-the-clock telephone support for bookings & inquiries",
    card_wa_title: "Instant WhatsApp Chat",
    card_wa_desc: "Instant confirmations and direct reservations",
    card_fb_title: "Official Facebook Page",
    card_fb_desc: "Follow our daily trips, photos, and exclusive promotional offers",
    btn_visit_facebook: "Visit Facebook Page ↗",

    // Footer
    footer_about: "Kero Travel - Leading travel agency and VIP limousine provider in Alexandria & Egypt. Private tours, airport transfers, and premier vehicle fleet.",
    footer_quick_links: "Quick Navigation",
    footer_fleet_links: "Our Luxury Fleet",
    footer_contact_info: "Contact Information",
    footer_rights: "All Rights Reserved to Kero Travel © 2025",
    footer_call_us: "Call Us:",
    footer_wa_us: "WhatsApp:",
    footer_loc: "Alexandria, Egypt",

    // Modals & Dynamic Alerts
    copied_success: "Message copied to clipboard successfully!",
    fill_required: "Please fill in all required fields (Name, Phone, Service) to dispatch your booking.",
    vehicle_selected_toast: "Vehicle selected and transferred to the booking form!",
    package_selected_toast: "Tour package selected and transferred to the booking form!"
  }
};

// State Management
let currentLanguage = localStorage.getItem('kero_lang') || 'ar';

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initLanguage(currentLanguage);
  initBookingForm();
  initFleetSelectors();
  initPackageSelectors();
  initMobileMenu();
  initScrollEffects();
  initImageModals();
});

/**
 * Language Switching System
 */
function initLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('kero_lang', lang);

  const htmlEl = document.documentElement;
  const isRTL = lang === 'ar';

  htmlEl.setAttribute('lang', lang);
  htmlEl.setAttribute('dir', isRTL ? 'rtl' : 'ltr');

  // Update All Data-I18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.setAttribute('placeholder', translations[lang][key]);
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });

  // Update Language Switcher Button Text
  const langButtons = document.querySelectorAll('.lang-switcher-btn');
  langButtons.forEach(btn => {
    const label = btn.querySelector('.lang-label');
    if (label) {
      label.textContent = lang === 'ar' ? 'English' : 'العربية';
    }
  });

  // Re-render live WhatsApp message preview
  updateWhatsAppPreview();
}

function toggleLanguage() {
  const nextLang = currentLanguage === 'ar' ? 'en' : 'ar';
  initLanguage(nextLang);
}

/**
 * Mobile Navigation Drawer
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('mobile-menu-close');
  const menuLinks = document.querySelectorAll('.mobile-nav-link');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  }

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) mobileMenu.classList.add('hidden');
    });
  });
}

/**
 * Dynamic WhatsApp Booking Message Engine
 */
function getBookingFormData() {
  return {
    service: document.getElementById('booking-service')?.value || '',
    vehicle: document.querySelector('input[name="booking-vehicle"]:checked')?.value || 'Toyota HiAce VIP',
    tripType: document.getElementById('booking-trip-type')?.value || 'Round-Trip',
    pickup: document.getElementById('booking-pickup')?.value || 'Alexandria',
    destination: document.getElementById('booking-destination')?.value || '',
    depDate: document.getElementById('booking-dep-date')?.value || '',
    depTime: document.getElementById('booking-dep-time')?.value || '',
    returnDate: document.getElementById('booking-return-date')?.value || '',
    passengers: document.getElementById('booking-passengers')?.value || '1',
    luggage: document.getElementById('booking-luggage')?.value || '0',
    name: document.getElementById('booking-name')?.value || '',
    phone: document.getElementById('booking-phone')?.value || '',
    notes: document.getElementById('booking-notes')?.value || ''
  };
}

function buildWhatsAppMessageText(data, lang) {
  const isAr = lang === 'ar';
  
  if (isAr) {
    let msg = `✨ *طلب حجز جديد - كيرو ترافيل (Kero Travel)* ✨\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `👤 *اسم العميل:* ${data.name || 'لم يُحدد'}\n`;
    msg += `📞 *رقم الهاتف / واتساب:* ${data.phone || 'لم يُحدد'}\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `🗺️ *نوع الخدمة / الوجهة:* ${data.service || 'مشوار سياحي خاص'}\n`;
    msg += `🚗 *السيارة المختارة:* ${data.vehicle}\n`;
    msg += `🔄 *نوع المشوار:* ${data.tripType}\n`;
    msg += `📍 *مكان التحرك:* ${data.pickup || 'الإسكندرية'}\n`;
    msg += `🏁 *مكان الوصول:* ${data.destination || 'حسب الاتفاق'}\n`;
    msg += `📅 *تاريخ الانطلاق:* ${data.depDate || 'في أقرب وقت'}\n`;
    msg += `⏰ *وقت التحرك:* ${data.depTime || 'مرن'}\n`;
    if (data.returnDate) {
      msg += `🔙 *تاريخ العودة:* ${data.returnDate}\n`;
    }
    msg += `👥 *عدد المسافرين:* ${data.passengers} فرد\n`;
    msg += `🧳 *عدد الحقائب:* ${data.luggage} شنطة\n`;
    if (data.notes && data.notes.trim()) {
      msg += `📝 *ملاحظات خاصة:* ${data.notes}\n`;
    }
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `📍 *المرسل عبر الموقع الإلكتروني الرسمي لـ Kero Travel*`;
    return msg;
  } else {
    let msg = `✨ *NEW BOOKING INQUIRY - KERO TRAVEL* ✨\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `👤 *Client Name:* ${data.name || 'Not specified'}\n`;
    msg += `📞 *Phone / WhatsApp:* ${data.phone || 'Not specified'}\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `🗺️ *Service / Trip:* ${data.service || 'Private Custom Tour'}\n`;
    msg += `🚗 *Selected Vehicle:* ${data.vehicle}\n`;
    msg += `🔄 *Trip Type:* ${data.tripType}\n`;
    msg += `📍 *Pickup Location:* ${data.pickup || 'Alexandria'}\n`;
    msg += `🏁 *Destination:* ${data.destination || 'To be discussed'}\n`;
    msg += `📅 *Departure Date:* ${data.depDate || 'ASAP'}\n`;
    msg += `⏰ *Departure Time:* ${data.depTime || 'Flexible'}\n`;
    if (data.returnDate) {
      msg += `🔙 *Return Date:* ${data.returnDate}\n`;
    }
    msg += `👥 *Travelers Count:* ${data.passengers} pax\n`;
    msg += `🧳 *Luggage Count:* ${data.luggage} bags\n`;
    if (data.notes && data.notes.trim()) {
      msg += `📝 *Special Requests:* ${data.notes}\n`;
    }
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `📍 *Sent via official website: Kero Travel Alexandria*`;
    return msg;
  }
}

function updateWhatsAppPreview() {
  const data = getBookingFormData();
  const previewBox = document.getElementById('whatsapp-preview-box');
  if (previewBox) {
    const formattedText = buildWhatsAppMessageText(data, currentLanguage);
    previewBox.textContent = formattedText;
  }
}

function dispatchWhatsAppBooking() {
  const data = getBookingFormData();
  
  if (!data.name || !data.phone || !data.service) {
    showToast(translations[currentLanguage].fill_required, 'warning');
    // Scroll smoothly to the booking form if missing fields
    document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  const message = buildWhatsAppMessageText(data, currentLanguage);
  const encodedMsg = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodedMsg}`;

  // Open WhatsApp in new tab
  window.open(whatsappUrl, '_blank');
}

function copyWhatsAppMessage() {
  const data = getBookingFormData();
  const text = buildWhatsAppMessageText(data, currentLanguage);
  navigator.clipboard.writeText(text).then(() => {
    showToast(translations[currentLanguage].copied_success, 'success');
  }).catch(() => {
    showToast('Failed to copy', 'error');
  });
}

function initBookingForm() {
  const formInputs = [
    'booking-service', 'booking-trip-type', 'booking-pickup',
    'booking-destination', 'booking-dep-date', 'booking-dep-time',
    'booking-return-date', 'booking-passengers', 'booking-luggage',
    'booking-name', 'booking-phone', 'booking-notes'
  ];

  formInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', updateWhatsAppPreview);
      el.addEventListener('change', updateWhatsAppPreview);
    }
  });

  const vehicleRadios = document.querySelectorAll('input[name="booking-vehicle"]');
  vehicleRadios.forEach(radio => {
    radio.addEventListener('change', updateWhatsAppPreview);
  });

  const submitBtn = document.getElementById('btn-submit-whatsapp');
  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      dispatchWhatsAppBooking();
    });
  }

  const copyBtn = document.getElementById('btn-copy-preview');
  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      copyWhatsAppMessage();
    });
  }

  // Quick Search Jump on Hero
  const quickSearchBtn = document.getElementById('hero-quick-search-btn');
  if (quickSearchBtn) {
    quickSearchBtn.addEventListener('click', () => {
      const heroService = document.getElementById('hero-qs-service')?.value;
      const heroCar = document.getElementById('hero-qs-car')?.value;
      const heroDate = document.getElementById('hero-qs-date')?.value;

      if (heroService) {
        const targetService = document.getElementById('booking-service');
        if (targetService) targetService.value = heroService;
      }

      if (heroCar) {
        const carRadio = document.querySelector(`input[name="booking-vehicle"][value="${heroCar}"]`);
        if (carRadio) carRadio.checked = true;
      }

      if (heroDate) {
        const targetDate = document.getElementById('booking-dep-date');
        if (targetDate) targetDate.value = heroDate;
      }

      updateWhatsAppPreview();
      document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

/**
 * Fleet Card Selection Interactions
 */
function initFleetSelectors() {
  const bookCarButtons = document.querySelectorAll('.btn-book-car');
  bookCarButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const carName = btn.getAttribute('data-car');
      if (carName) {
        const carRadio = document.querySelector(`input[name="booking-vehicle"][value="${carName}"]`);
        if (carRadio) {
          carRadio.checked = true;
        }
        updateWhatsAppPreview();
        showToast(translations[currentLanguage].vehicle_selected_toast, 'success');
        document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/**
 * Tour Package Card Selection Interactions
 */
function initPackageSelectors() {
  const bookPkgButtons = document.querySelectorAll('.btn-book-pkg');
  bookPkgButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pkgName = btn.getAttribute('data-package');
      if (pkgName) {
        const serviceSelect = document.getElementById('booking-service');
        if (serviceSelect) {
          serviceSelect.value = pkgName;
        }
        updateWhatsAppPreview();
        showToast(translations[currentLanguage].package_selected_toast, 'success');
        document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/**
 * High-Resolution Image Lightbox Modal
 */
function initImageModals() {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const closeModal = document.getElementById('modal-close');

  document.querySelectorAll('.view-car-photo').forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-src');
      const title = btn.getAttribute('data-title') || 'Kero Travel VIP Fleet';
      if (modal && modalImg) {
        modalImg.src = src;
        if (modalTitle) modalTitle.textContent = title;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }
    });
  });

  if (closeModal && modal) {
    closeModal.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    });
  }
}

/**
 * Toast Notification Helper
 */
function showToast(message, type = 'info') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-6 start-6 z-50 flex flex-col gap-2 max-w-sm';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const bgColors = {
    success: 'bg-emerald-600/95 border-emerald-400',
    warning: 'bg-amber-600/95 border-amber-400',
    error: 'bg-rose-600/95 border-rose-400',
    info: 'bg-blue-600/95 border-blue-400'
  };

  toast.className = `p-4 rounded-xl text-white shadow-2xl backdrop-blur-md border ${bgColors[type] || bgColors.info} flex items-center gap-3 transform transition-all duration-300 translate-y-4 opacity-0`;
  
  let icon = 'fa-info-circle';
  if (type === 'success') icon = 'fa-check-circle';
  if (type === 'warning') icon = 'fa-exclamation-triangle';
  if (type === 'error') icon = 'fa-times-circle';

  toast.innerHTML = `
    <i class="fas ${icon} text-lg"></i>
    <span class="text-sm font-medium">${message}</span>
  `;

  toastContainer.appendChild(toast);

  // Trigger animation
  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  }, 10);

  // Auto remove after 3.5s
  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/**
 * Scroll & Navbar Effects
 */
function initScrollEffects() {
  const navbar = document.getElementById('main-header');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('bg-slate-900/90', 'shadow-xl', 'py-3');
      navbar?.classList.remove('bg-transparent', 'py-5');
      backToTopBtn?.classList.remove('opacity-0', 'pointer-events-none');
    } else {
      navbar?.classList.remove('bg-slate-900/90', 'shadow-xl', 'py-3');
      navbar?.classList.add('bg-transparent', 'py-5');
      backToTopBtn?.classList.add('opacity-0', 'pointer-events-none');
    }
  });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
