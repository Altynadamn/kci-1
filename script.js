const MICRO_ROWS = [
    ["7 мм, 80 м/мин", "35 км", "770 км", "9240 км", "37800 км"],
    ["10 мм, 70 м/мин", "30 км", "660 км", "7920 км", "32400 км"],
    ["12 мм, 60 м/мин", "28 км", "616 км", "7392 км", "30240 км"],
    ["14 мм, 50 м/мин", "24 км", "528 км", "6336 км", "25920 км"],
    ["16 мм, 45 м/мин", "21 км", "462 км", "5544 км", "22680 км"],
];

const BUNDLE_ROWS = [
    ["2x14 мм, 25 м/мин", "12 км", "264 км", "3168 км", "13000 км"],
    ["4x14 мм, 12,5 м/мин", "6 км", "132 км", "1584 км", "6500 км"],
    ["7x14 мм, 7 м/мин", "3,4 км", "74,8 км", "897 км", "3700 км"],
    ["10x14 мм, 5 м/мин", "2,4 км", "52,8 км", "633 км", "2600 км"],
    ["8x7 + 1x12 мм, 7,9 м/мин", "3,8 км", "83,6 км", "1000 км", "4100 км"],
];

const CABLE_ROWS = {
    ru: [
        ["Ленточная броня KCI-ОКЛ / ОКЛО", "8–144 ОКЛ / 4–12 ОКЛО", "12–16 км", "264–352 км", "3168–4224 км"],
        ["Задувка в трубы KCI-ОКГ", "8–144", "12–16 км", "264–352 км", "3168–4224 км"],
        ["Задувка в микро KCI-ОКМ", "8–144", "24 км", "528 км", "6336 км"],
        ["Дроп-кабели KCI-FTTH / FTTH-SC / Simplex / Duplex", "1–2", "48 км", "1056 км", "12672 км"],
        ["Подвесной малогабаритный KCI-ОККО", "4, 8, 12", "28 км", "616 км", "7392 км"],
    ],
    kz: [
        ["Таспалы бронь KCI-ОКЛ / ОКЛО", "8–144 ОКЛ / 4–12 ОКЛО", "12–16 км", "264–352 км", "3168–4224 км"],
        ["Құбырларға үрлеуге арналған KCI-ОКГ", "8–144", "12–16 км", "264–352 км", "3168–4224 км"],
        ["Микроқұбырға үрлеуге арналған KCI-ОКМ", "8–144", "24 км", "528 км", "6336 км"],
        ["Дроп-кабельдер KCI-FTTH / FTTH-SC / Simplex / Duplex", "1–2", "48 км", "1056 км", "12672 км"],
        ["Аспалы шағын габаритті KCI-ОККО", "4, 8, 12", "28 км", "616 км", "7392 км"],
    ],
    en: [
        ["Ribbon armored KCI-OKL / OKLO", "8–144 OKL / 4–12 OKLO", "12–16 km", "264–352 km", "3168–4224 km"],
        ["Duct blowing cable KCI-OKG", "8–144", "12–16 km", "264–352 km", "3168–4224 km"],
        ["Microduct blowing cable KCI-OKM", "8–144", "24 km", "528 km", "6336 km"],
        ["Drop cables KCI-FTTH / FTTH-SC / Simplex / Duplex", "1–2", "48 km", "1056 km", "12672 km"],
        ["Compact aerial cable KCI-OKKO", "4, 8, 12", "28 km", "616 km", "7392 km"],
    ],
};

const CONTENT = {
    ru: {
        meta: {
            title: "KCI | Завод по производству пакета микротрубки и оптических кабелей",
            description: "KCI: завод в Кентау, продукция, производственные мощности и планы дальнейшего развития.",
        },
        nav: {
            overview: "О заводе",
            equipment: "Оборудование",
            products: "Продукция",
            roadmap: "Развитие",
            contacts: "Контакты",
        },
        hero: {
            eyebrow: "Кентау • СЭЗ «TURAN» • полный производственный цикл",
            title: "Завод по производству пакета микротрубки и оптических кабелей.",
            text: "Одностраничный сайт собран на основе всей презентации KCI: здесь собраны сведения о заводе, текущем статусе, производственных мощностях, линейке продукции, а также о планах расширения и испытательной инфраструктуре.",
            ctaPrimary: "Смотреть продукцию",
            ctaSecondary: "Планы развития",
            panelLabel: "Продукция KCI",
        },
        metrics: [
            { value: "1+ млрд", label: "стоимость проекта" },
            { value: "37 000 км", label: "проектная мощность в год" },
            { value: "100+", label: "рабочих мест" },
            { value: "KCI", label: "зарегистрированный товарный знак" },
        ],
        overview: {
            kicker: "01 / о заводе",
            title: "Производственный проект в Кентау",
            intro: "По презентации KCI завод финансируется за счет собственных средств, работает в электротехнической промышленности и ориентирован на выпуск пакета микротрубки и оптических кабелей. Производство размещено в городе Кентау на территории СЭЗ «TURAN».",
            facts: [
                {
                    label: "Стоимость",
                    title: "Более 1 млрд тенге",
                    text: "В презентации стоимость проекта зафиксирована на уровне более одного миллиарда тенге.",
                },
                {
                    label: "Источник финансирования",
                    title: "Собственные средства",
                    text: "Проект представлен как производственная инициатива, поддержанная внутренним капиталом.",
                },
                {
                    label: "Мощность проекта",
                    title: "37 000 км в год",
                    text: "Слайд о заводе прямо указывает годовую мощность производства на уровне 37 000 километров.",
                },
                {
                    label: "Вид продукции",
                    title: "Пакет микротрубки и оптические кабели",
                    text: "Ключевая специализация завода — микротрубка, пакеты микротрубок и различные виды волоконно-оптического кабеля.",
                },
            ],
            statusKicker: "текущий статус",
            statusTitle: "Проект находится в активной производственной фазе",
            statusItems: [
                "Участник СЭЗ «TURAN».",
                "Завод введен в эксплуатацию.",
                "Получена лицензия на строительно-монтажные работы III категории.",
                "Зарегистрирован товарный знак KCI.",
                "Проходят процедуры регистрации ОТП.",
                "Закуплено сырье для начала серийного производства.",
            ],
            galleryLabel: "Производственная база",
            galleryTitle: "Завод рассчитан на работу в разных климатических условиях",
            galleryText: "Уникальность, отмеченная в презентации: конструкция кабеля с расширенным диапазоном рабочих температур от -40°C до +70°C, а микротрубка оптимизирована для быстрой задувки и выдерживает высокие нагрузки при монтаже.",
        },
        equipment: {
            kicker: "02 / оборудование",
            title: "Оборудование кабельного завода",
            intro: "Отдельный слайд презентации посвящен именно оборудованию. Акцент сделан на полном цикле, автоматизации и высокоточном выпуске микротрубки и кабельной продукции.",
            body1: "На заводе кабельной продукции развернуто производство полного цикла по выпуску широкой линейки кабельной продукции. Для производства используются автоматизированные линии с программным управлением параметров процесса.",
            body2: "Компонентная база оборудования состоит из решений ведущих мировых поставщиков автоматики Siemens, Bosch, ADVANTECH и Panasonic. Финальная сборка машин произведена в КНР, а линии Kaidemac обеспечивают выпуск трубок с допуском по диаметру ±0,1 мм.",
            cards: [
                { label: "Экструзия", title: "Автоматизированные линии с программным управлением" },
                { label: "Точность", title: "Контроль геометрии и стабильности микротрубки" },
                { label: "Сборка", title: "Развернутый полный цикл по кабельной продукции" },
                { label: "Компоненты", title: "Подготовка материалов и управляемая подача" },
                { label: "Kaidemac", title: "Высокоточные экструзионные линии с допуском ±0,1 мм" },
            ],
        },
        products: {
            kicker: "03 / продукция",
            title: "Вся продуктовая линейка из презентации",
            intro: "На слайдах 4–6 приведены точные производственные показатели по микротрубкам, пакетам микротрубок и оптическому кабелю. Ниже они перенесены в веб-формат без потери чисел.",
            heroKicker: "производственный ассортимент",
            heroTitle: "Микротрубки, пакеты микротрубок и оптический кабель KCI",
            heroText: "Презентация описывает KCI как завод с несколькими связанными направлениями производства. Это важно: собственная микротрубка и пакетные решения логично дополняют линейку кабелей для задувки, подвеса и FTTH.",
            micro: {
                label: "Слайд 4",
                title: "Микротрубки KCI",
                headers: ["Диаметр / скорость", "Смена", "Месяц", "Год", "3 смены"],
            },
            bundle: {
                label: "Слайд 5",
                title: "Пакеты микротрубок",
                headers: ["Типоразмер", "Смена", "Месяц", "Год", "3 смены"],
            },
            cable: {
                label: "Слайд 6",
                title: "Оптический кабель KCI",
                headers: ["Тип", "Волоконность", "Смена", "Месяц", "Год"],
            },
        },
        roadmap: {
            kicker: "04 / развитие",
            title: "Планы по дальнейшему развитию",
            intro: "Слайды 7–11 описывают стратегию роста KCI: дооснащение линий, расширение номенклатуры, рост производительности, запуск новых направлений и создание испытательной базы.",
            cards: [
                {
                    step: "01",
                    title: "Струйные принтеры для маркировки",
                    text: "Планируется дооснастить линии двумя комплектами струйных принтеров: один для белой краски, второй для нанесения маркировки черными чернилами. Они могут использоваться и на трубке, и на кабеле.",
                },
                {
                    step: "02",
                    title: "Выход в ADSS",
                    text: "Для расширения номенклатуры производимых кабелей и выпуска самонесущих кабелей типа ADSS предлагается закупить обмоточные установки для арамидных нитей.",
                },
                {
                    step: "03",
                    title: "Дополнительная линия по микротрубке",
                    text: "Новая более скоростная линия должна выпускать трубки диаметром 14 мм со скоростью 80 м/мин, а суммарная производительность двух линий достигнет 120 м/мин.",
                },
                {
                    step: "04",
                    title: "Плоские пакеты 4 и 6 микротрубок",
                    text: "Для производства плоских пакетов на 4 и 6 микротрубок предлагается закупить инструмент для линии наложения оболочки пакета.",
                },
                {
                    step: "05",
                    title: "Капельное орошение и гофрированные трубы",
                    text: "Предлагается автоматизированная линия для производства трубок капельного орошения мощностью до 260 м/мин и линии для гофрированных одностенных труб диаметром 16–32 мм.",
                },
                {
                    step: "06",
                    title: "Лаборатория и тестовый трек",
                    text: "Для проверки соответствия продукции расчетным характеристикам требуется закуп испытательных установок, лабораторного оборудования и создание современного тестового трека.",
                },
            ],
            printer: {
                label: "Маркировка",
                title: "Резерв для маркировки и отказоустойчивость линий",
                text: "Идея презентации здесь простая: лазерные установки не должны быть единственной опцией, поэтому струйная маркировка закладывается как резерв и как более гибкий инструмент производства.",
            },
            adss: {
                label: "Расширение номенклатуры",
                title: "Оборудование под новые кабельные конструкции",
                text: "Блок развития предполагает расширение линейки в сторону ADSS и дополнительных пакетов микротрубок с большим числом каналов.",
            },
            irrigation: {
                label: "Новые рынки",
                title: "Линия для трубок капельного орошения",
                text: "В презентации прямо указана производственная мощность новой линии: до 260 м/мин. Это выводит завод за рамки только кабельной тематики.",
            },
            pipe: {
                label: "Дополнительная продукция",
                title: "Гофрированные одностенные трубы 16–32 мм",
                text: "Еще одно направление расширения — автоматизированные линии для производства гофрированных одностенных труб диаметром от 16 до 32 мм.",
            },
            labBanner: {
                kicker: "испытательная инфраструктура",
                title: "Современный тестовый трек для реальных условий прокладки",
                text: "Отдельный акцент презентации — сертификационные испытания на задувку микротрубок и микрокабелей. Для этого предлагается постройка и оснащение тестового трека, а также сертификация материалов и исполнителей работ.",
            },
            labCards: [
                {
                    title: "Испытательные установки",
                    text: "Презентация требует закупа испытательных установок и лабораторного оборудования для проверки соответствия продукции расчетным техническим характеристикам.",
                },
                {
                    title: "Вертикальные испытания",
                    text: "Лабораторный контур должен покрывать механические и эксплуатационные проверки, необходимые для сертификации и контроля качества.",
                },
                {
                    title: "Испытания на изгиб и протяжку",
                    text: "Для микротрубок и кабелей критичны сценарии, максимально приближенные к реальной прокладке и монтажным нагрузкам.",
                },
                {
                    title: "Сопровождение сертификации",
                    text: "Испытательная база рассматривается не отдельно, а как часть общей системы подтверждения материалов, продукции и компетенций исполнителей.",
                },
            ],
        },
        contacts: {
            kicker: "05 / контакты",
            title: "Связаться с KCI",
            text: "Контактные данные перенесены из последнего слайда презентации. Сайт остается одностраничным, но теперь в нем собран весь основной материал из deck-файла и доступны русская, казахская и английская версии.",
        },
    },
    kz: {
        meta: {
            title: "KCI | Микроқұбырлар пакеті мен оптикалық кабельдер өндіретін зауыт",
            description: "KCI: Кентаудағы зауыт, өнімдер, өндірістік қуаттар және даму жоспары.",
        },
        nav: {
            overview: "Зауыт туралы",
            equipment: "Жабдық",
            products: "Өнімдер",
            roadmap: "Даму",
            contacts: "Байланыс",
        },
        hero: {
            eyebrow: "Кентау • «TURAN» АЭА • толық өндірістік цикл",
            title: "Микроқұбырлар пакеті мен оптикалық кабельдер өндіретін зауыт.",
            text: "Бұл бір беттік сайт KCI презентациясының толық мазмұнына негізделген: мұнда зауыт туралы мәлімет, ағымдағы мәртебе, өндірістік қуаттар, өнім желісі және кеңейту мен сынақ инфрақұрылымына қатысты жоспарлар жинақталған.",
            ctaPrimary: "Өнімдерді көру",
            ctaSecondary: "Даму жоспарлары",
            panelLabel: "KCI өнімі",
        },
        metrics: [
            { value: "1+ млрд", label: "жоба құны" },
            { value: "37 000 км", label: "жылдық жобалық қуат" },
            { value: "100+", label: "жұмыс орны" },
            { value: "KCI", label: "тіркелген тауар белгісі" },
        ],
        overview: {
            kicker: "01 / зауыт туралы",
            title: "Кентаудағы өндірістік жоба",
            intro: "KCI презентациясы бойынша зауыт өз қаражаты есебінен қаржыландырылады, электротехникалық өнеркәсіпте жұмыс істейді және микроқұбырлар пакеті мен оптикалық кабельдер шығаруға бағытталған. Өндіріс Кентау қаласында, «TURAN» АЭА аумағында орналасқан.",
            facts: [
                {
                    label: "Құны",
                    title: "1 млрд теңгеден астам",
                    text: "Презентацияда жоба құны бір миллиард теңгеден жоғары деңгейде көрсетілген.",
                },
                {
                    label: "Қаржыландыру көзі",
                    title: "Өз қаражаты",
                    text: "Жоба ішкі капиталмен қамтамасыз етілген өндірістік бастама ретінде ұсынылған.",
                },
                {
                    label: "Жоба қуаты",
                    title: "Жылына 37 000 км",
                    text: "Зауыт туралы слайдта өндірістің жылдық қуаты 37 000 километр деп нақты көрсетілген.",
                },
                {
                    label: "Өнім түрі",
                    title: "Микроқұбыр пакеттері және оптикалық кабельдер",
                    text: "Зауыттың негізгі мамандануы — микроқұбырлар, микроқұбыр пакеттері және әртүрлі талшықты-оптикалық кабельдер.",
                },
            ],
            statusKicker: "ағымдағы мәртебе",
            statusTitle: "Жоба белсенді өндірістік кезеңде",
            statusItems: [
                "«TURAN» АЭА қатысушысы.",
                "Зауыт пайдалануға берілген.",
                "III санаттағы құрылыс-монтаж жұмыстарына лицензия алынған.",
                "KCI тауар белгісі тіркелген.",
                "ӨТП тіркеу рәсімдері жүріп жатыр.",
                "Сериялық өндірісті бастау үшін шикізат сатып алынған.",
            ],
            galleryLabel: "Өндірістік база",
            galleryTitle: "Зауыт әртүрлі климаттық жағдайларға есептелген",
            galleryText: "Презентацияда ерекше атап өтілген сипат: кабель конструкциясы -40°C-тан +70°C-қа дейінгі жұмыс температурасын көтереді, ал микроқұбыр жылдам үрлеуге бейімделген және монтаж кезінде жоғары жүктемеге шыдайды.",
        },
        equipment: {
            kicker: "02 / жабдық",
            title: "Кабель зауытының жабдығы",
            intro: "Презентацияда жеке слайд жабдыққа арналған. Негізгі екпін толық циклге, автоматтандыруға және микроқұбыр мен кабель өнімдерін жоғары дәлдікпен шығаруға қойылған.",
            body1: "Кабель өнімдері зауытында кең өнім желісін шығаратын толық циклді өндіріс іске қосылған. Өндіріс процесінің параметрлерін бағдарламалық басқаруы бар автоматтандырылған желілер пайдаланылады.",
            body2: "Жабдықтың компоненттік базасы Siemens, Bosch, ADVANTECH және Panasonic сияқты әлемдік автоматтандыру жеткізушілерінің шешімдерінен тұрады. Машиналардың финалдық жинағы ҚХР-да орындалған, ал Kaidemac желілері құбырларды ±0,1 мм дәлдікпен шығаруға мүмкіндік береді.",
            cards: [
                { label: "Экструзия", title: "Бағдарламалық басқаруы бар автоматтандырылған желілер" },
                { label: "Дәлдік", title: "Микроқұбыр геометриясы мен процестің тұрақтылығын бақылау" },
                { label: "Жинақтау", title: "Кабель өнімдері бойынша толық цикл" },
                { label: "Компоненттер", title: "Материалдарды дайындау және басқарылатын беру" },
                { label: "Kaidemac", title: "±0,1 мм дәлдігі бар жоғары дәлдікті экструзиялық желілер" },
            ],
        },
        products: {
            kicker: "03 / өнімдер",
            title: "Презентациядағы толық өнім желісі",
            intro: "4–6-слайдтарда микроқұбырлар, микроқұбыр пакеттері және оптикалық кабель бойынша нақты өндірістік көрсеткіштер берілген. Төменде олар веб-пішімде толық сандарымен көрсетілген.",
            heroKicker: "өндірістік ассортимент",
            heroTitle: "KCI микроқұбырлары, пакеттері және оптикалық кабельдері",
            heroText: "Презентацияда KCI бірнеше өзара байланысты өндіріс бағыты бар зауыт ретінде сипатталады. Бұл маңызды: өз микроқұбыры мен пакет шешімдері үрлеу, аспа және FTTH кабель желісін табиғи түрде толықтырады.",
            micro: {
                label: "4-слайд",
                title: "KCI микроқұбырлары",
                headers: ["Диаметр / жылдамдық", "Ауысым", "Ай", "Жыл", "3 ауысым"],
            },
            bundle: {
                label: "5-слайд",
                title: "Микроқұбыр пакеттері",
                headers: ["Типоөлшем", "Ауысым", "Ай", "Жыл", "3 ауысым"],
            },
            cable: {
                label: "6-слайд",
                title: "KCI оптикалық кабелі",
                headers: ["Түрі", "Талшық саны", "Ауысым", "Ай", "Жыл"],
            },
        },
        roadmap: {
            kicker: "04 / даму",
            title: "Одан арғы даму жоспарлары",
            intro: "7–11-слайдтар KCI өсім стратегиясын сипаттайды: желілерді толықтыру, номенклатураны кеңейту, өнімділікті арттыру, жаңа бағыттарды іске қосу және сынақ базасын құру.",
            cards: [
                {
                    step: "01",
                    title: "Маркілеуге арналған сиялы принтерлер",
                    text: "Желілерді екі жиынтық сиялы принтермен толықтыру жоспарланған: бірі ақ бояуға, екіншісі қара сиямен таңбалауға арналған. Олар құбырда да, кабельде де қолданылады.",
                },
                {
                    step: "02",
                    title: "ADSS бағытына шығу",
                    text: "Өндірілетін кабель номенклатурасын кеңейту және ADSS типті өзін-өзі ұстайтын кабельдер шығару үшін арамид жіптеріне арналған орау қондырғыларын сатып алу ұсынылады.",
                },
                {
                    step: "03",
                    title: "Микроқұбырға арналған қосымша желі",
                    text: "Жаңа жылдам желі 14 мм құбырларды 80 м/мин жылдамдықпен шығаруы тиіс, ал екі желінің жиынтық өнімділігі 120 м/мин-ке жетеді.",
                },
                {
                    step: "04",
                    title: "4 және 6 микроқұбырлы жалпақ пакеттер",
                    text: "4 және 6 микроқұбырлы жалпақ пакеттер өндіру үшін пакет қабығын салу желісіне арналған құрал сатып алу ұсынылады.",
                },
                {
                    step: "05",
                    title: "Тамшылатып суару және гофрленген құбырлар",
                    text: "Өнімділікті минутына 260 метрге дейін жеткізетін тамшылатып суару түтіктеріне арналған автоматтандырылған желі және диаметрі 16–32 мм гофрленген бір қабатты құбырларға арналған желілер ұсынылған.",
                },
                {
                    step: "06",
                    title: "Зертхана және тесттік трек",
                    text: "Өнімнің есептік сипаттамаларға сәйкестігін тексеру үшін сынақ қондырғылары, зертханалық жабдық және заманауи тесттік трек қажет.",
                },
            ],
            printer: {
                label: "Маркілеу",
                title: "Маркілеуге резерв және желілердің тұрақтылығы",
                text: "Презентациядағы логика айқын: лазерлік қондырғылар жалғыз шешім болмауы тиіс, сондықтан сиялы маркілеу резервтік әрі икемді өндірістік құрал ретінде қарастырылады.",
            },
            adss: {
                label: "Номенклатураны кеңейту",
                title: "Жаңа кабель конструкцияларына арналған жабдық",
                text: "Даму блогы ADSS сегментіне шығуды және арна саны көп қосымша микроқұбыр пакеттерін шығаруды көздейді.",
            },
            irrigation: {
                label: "Жаңа нарықтар",
                title: "Тамшылатып суару түтіктеріне арналған желі",
                text: "Презентацияда жаңа желінің нақты қуаты көрсетілген: 260 м/мин-ке дейін. Бұл зауытты тек кабель тақырыбымен шектемейді.",
            },
            pipe: {
                label: "Қосымша өнім",
                title: "16–32 мм гофрленген бір қабатты құбырлар",
                text: "Кеңеюдің тағы бір бағыты — диаметрі 16-дан 32 мм-ге дейінгі гофрленген бір қабатты құбырларға арналған автоматтандырылған желілер.",
            },
            labBanner: {
                kicker: "сынақ инфрақұрылымы",
                title: "Нақты төсеу жағдайларына арналған заманауи тесттік трек",
                text: "Презентацияда микроқұбырлар мен микрокабельдерді үрлеу бойынша сертификаттық сынақтарға ерекше назар аударылған. Ол үшін тесттік тректі салу және жарақтандыру, сондай-ақ материалдар мен орындаушыларды сертификаттау ұсынылады.",
            },
            labCards: [
                {
                    title: "Сынақ қондырғылары",
                    text: "Презентация өнімнің есептік техникалық сипаттамаларына сәйкестігін тексеру үшін сынақ қондырғылары мен зертханалық жабдық сатып алуды талап етеді.",
                },
                {
                    title: "Тік сынақтар",
                    text: "Зертханалық контур сертификаттау мен сапаны бақылауға қажетті механикалық және пайдалану сынақтарын қамтуы тиіс.",
                },
                {
                    title: "Иілу және тарту сынақтары",
                    text: "Микроқұбырлар мен кабельдер үшін нақты төсеу және монтаждық жүктемелерге жақын сценарийлер аса маңызды.",
                },
                {
                    title: "Сертификаттауды сүйемелдеу",
                    text: "Сынақ базасы бөлек қаралмайды, ол материалдарды, өнімді және орындаушылар құзыретін растаудың жалпы жүйесінің бір бөлігі ретінде беріледі.",
                },
            ],
        },
        contacts: {
            kicker: "05 / байланыс",
            title: "KCI-мен байланысу",
            text: "Байланыс деректері презентацияның соңғы слайдынан алынды. Сайт бір беттік күйінде қалды, бірақ енді онда deck-файлдағы негізгі материал толық қамтылған және орыс, қазақ, ағылшын нұсқалары қолжетімді.",
        },
    },
    en: {
        meta: {
            title: "KCI | Microduct bundle and optical cable manufacturing plant",
            description: "KCI plant in Kentau: products, production capacity, and development roadmap.",
        },
        nav: {
            overview: "Plant",
            equipment: "Equipment",
            products: "Products",
            roadmap: "Growth",
            contacts: "Contacts",
        },
        hero: {
            eyebrow: "Kentau • SEZ “TURAN” • full production cycle",
            title: "Manufacturing plant for microduct bundles and optical cables.",
            text: "This one-page website is built from the full KCI presentation: it includes the plant profile, current status, production capacity, product range, and the full expansion and testing roadmap.",
            ctaPrimary: "View products",
            ctaSecondary: "Development roadmap",
            panelLabel: "KCI product line",
        },
        metrics: [
            { value: "1+ bln", label: "project cost" },
            { value: "37,000 km", label: "annual project capacity" },
            { value: "100+", label: "jobs" },
            { value: "KCI", label: "registered trademark" },
        ],
        overview: {
            kicker: "01 / plant",
            title: "Industrial project in Kentau",
            intro: "According to the KCI presentation, the plant is financed with internal funds, operates in the electrical engineering sector, and is focused on microduct bundles and optical cable production. The facility is located in Kentau within the “TURAN” special economic zone.",
            facts: [
                {
                    label: "Cost",
                    title: "More than 1 billion tenge",
                    text: "The presentation fixes project cost at more than one billion tenge.",
                },
                {
                    label: "Funding source",
                    title: "Own funds",
                    text: "The project is presented as a manufacturing initiative supported by internal capital.",
                },
                {
                    label: "Project capacity",
                    title: "37,000 km per year",
                    text: "The plant overview slide directly states annual production capacity at 37,000 kilometers.",
                },
                {
                    label: "Product type",
                    title: "Microduct bundles and optical cables",
                    text: "The core specialization combines microducts, bundled microduct solutions, and multiple optical cable types.",
                },
            ],
            statusKicker: "current status",
            statusTitle: "The project is already in an active production phase",
            statusItems: [
                "Participant of the “TURAN” SEZ.",
                "The plant has been commissioned.",
                "A Category III construction and installation license has been obtained.",
                "The KCI trademark has been registered.",
                "OTP registration procedures are in progress.",
                "Raw materials have been procured for serial production launch.",
            ],
            galleryLabel: "Production base",
            galleryTitle: "The plant is designed for demanding climate conditions",
            galleryText: "One of the deck’s key differentiators is the cable design with an operating temperature range from -40°C to +70°C. The microduct is optimized for fast blowing and can handle high installation loads.",
        },
        equipment: {
            kicker: "02 / equipment",
            title: "Cable plant equipment",
            intro: "A dedicated slide in the deck focuses on equipment. The emphasis is on a full-cycle plant, automation, and high-precision output for both microducts and cable products.",
            body1: "The cable plant is configured as a full-cycle manufacturing site for a broad product range. Production is based on automated lines with programmable process parameter control.",
            body2: "The equipment base includes automation solutions from Siemens, Bosch, ADVANTECH, and Panasonic. Final machine assembly is completed in China, while Kaidemac lines support tube production with a diameter tolerance of ±0.1 mm.",
            cards: [
                { label: "Extrusion", title: "Automated lines with programmable control" },
                { label: "Precision", title: "Stable geometry and process control for microducts" },
                { label: "Assembly", title: "Full production cycle for cable products" },
                { label: "Components", title: "Material preparation and controlled feed" },
                { label: "Kaidemac", title: "High-precision extrusion lines with ±0.1 mm tolerance" },
            ],
        },
        products: {
            kicker: "03 / products",
            title: "The complete product line from the presentation",
            intro: "Slides 4–6 contain exact production figures for microducts, microduct bundles, and optical cable. They are reproduced below in web format without dropping the numbers.",
            heroKicker: "production portfolio",
            heroTitle: "KCI microducts, bundled ducts, and optical cable",
            heroText: "The presentation describes KCI as a plant with several connected production directions. That matters: in-house microduct and bundle production naturally supports the company’s duct-blown, aerial, and FTTH cable portfolio.",
            micro: {
                label: "Slide 4",
                title: "KCI microducts",
                headers: ["Diameter / speed", "Shift", "Month", "Year", "3 shifts"],
            },
            bundle: {
                label: "Slide 5",
                title: "Microduct bundles",
                headers: ["Bundle size", "Shift", "Month", "Year", "3 shifts"],
            },
            cable: {
                label: "Slide 6",
                title: "KCI optical cable",
                headers: ["Type", "Fiber count", "Shift", "Month", "Year"],
            },
        },
        roadmap: {
            kicker: "04 / growth",
            title: "Further development plans",
            intro: "Slides 7–11 describe the KCI growth strategy: line upgrades, assortment expansion, throughput increase, new product directions, and internal testing infrastructure.",
            cards: [
                {
                    step: "01",
                    title: "Inkjet printers for marking",
                    text: "The plan calls for two inkjet printer sets: one for white paint marking and one for black ink marking. They can be used both on ducts and on cables.",
                },
                {
                    step: "02",
                    title: "ADSS expansion",
                    text: "To expand the cable assortment and launch ADSS self-supporting cable production, the deck proposes winding units for aramid yarns.",
                },
                {
                    step: "03",
                    title: "Additional microduct line",
                    text: "A faster new line should produce 14 mm tubes at 80 m/min, bringing the combined throughput of two lines to 120 m/min.",
                },
                {
                    step: "04",
                    title: "Flat bundles for 4 and 6 microducts",
                    text: "The deck also proposes tooling for the bundle jacketing line to produce flat 4- and 6-microduct packages.",
                },
                {
                    step: "05",
                    title: "Drip irrigation and corrugated pipes",
                    text: "Expansion includes an automated line for drip irrigation tubes up to 260 m/min and lines for corrugated single-wall pipes in diameters from 16 to 32 mm.",
                },
                {
                    step: "06",
                    title: "Laboratory and test track",
                    text: "To validate product performance against design targets, the presentation calls for testing equipment, lab infrastructure, and a modern field-like test track.",
                },
            ],
            printer: {
                label: "Marking",
                title: "Line resilience and marking redundancy",
                text: "The deck’s logic is straightforward: laser systems should not be the only option, so inkjet marking is positioned as both backup capacity and a flexible production tool.",
            },
            adss: {
                label: "Assortment expansion",
                title: "Equipment for new cable constructions",
                text: "The development block positions KCI for ADSS cable production and for additional high-channel-count bundled duct formats.",
            },
            irrigation: {
                label: "New markets",
                title: "Drip irrigation tube line",
                text: "The presentation explicitly states the target output of the new line: up to 260 m/min. That expands the plant beyond a pure cable focus.",
            },
            pipe: {
                label: "Additional products",
                title: "Corrugated single-wall pipes, 16–32 mm",
                text: "Another expansion stream is automated production of corrugated single-wall pipes with diameters from 16 to 32 mm.",
            },
            labBanner: {
                kicker: "testing infrastructure",
                title: "A modern test track for real installation conditions",
                text: "The presentation gives special weight to certification testing for blowing microducts and microcables. It proposes building and equipping a dedicated test track and supporting certification of both materials and installers.",
            },
            labCards: [
                {
                    title: "Testing equipment",
                    text: "The deck requires procurement of testing equipment and laboratory devices to verify whether finished products meet their calculated technical characteristics.",
                },
                {
                    title: "Vertical test setups",
                    text: "The laboratory scope is intended to cover the mechanical and operational checks required for certification and production quality control.",
                },
                {
                    title: "Bending and pulling scenarios",
                    text: "For microducts and cable, it is important to test scenarios that closely reflect real installation paths and field loads.",
                },
                {
                    title: "Certification support",
                    text: "The testing base is presented as part of a larger system for qualifying materials, products, and contractor capability.",
                },
            ],
        },
        contacts: {
            kicker: "05 / contacts",
            title: "Contact KCI",
            text: "The contact details are taken from the final slide of the presentation. The site stays one-page, but it now covers the full core deck content and supports Russian, Kazakh, and English.",
        },
    },
};

const html = document.documentElement;
const menuToggle = document.getElementById("menuToggle");
const navWrap = document.querySelector(".nav-wrap");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const langButtons = Array.from(document.querySelectorAll(".lang-btn"));

let currentLang = "ru";
let revealObserver;

function setText(id, text) {
    const node = document.getElementById(id);
    if (node) node.textContent = text;
}

function renderMetrics(metrics) {
    const container = document.getElementById("metricsGrid");
    container.innerHTML = metrics
        .map(
            (item) => `
                <article>
                    <span class="metric-value">${item.value}</span>
                    <span class="metric-label">${item.label}</span>
                </article>
            `
        )
        .join("");
}

function renderFacts(facts) {
    const container = document.getElementById("factGrid");
    container.innerHTML = facts
        .map(
            (item) => `
                <article class="fact-card">
                    <span class="fact-label">${item.label}</span>
                    <strong>${item.title}</strong>
                    <p>${item.text}</p>
                </article>
            `
        )
        .join("");
}

function renderStatus(items) {
    const container = document.getElementById("statusList");
    container.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderTable(containerId, headers, rows, isCable = false) {
    const container = document.getElementById(containerId);
    const rowClass = isCable ? "data-row cable-row" : "data-row";
    container.innerHTML = `
        <div class="${rowClass} data-row-head">
            ${headers.map((header) => `<span>${header}</span>`).join("")}
        </div>
        ${rows
            .map(
                (row) => `
                    <div class="${rowClass}">
                        ${row.map((cell) => `<span>${cell}</span>`).join("")}
                    </div>
                `
            )
            .join("")}
    `;
}

function renderRoadmap(cards) {
    const container = document.getElementById("roadmapGrid");
    container.innerHTML = cards
        .map(
            (card) => `
                <article class="roadmap-card">
                    <span class="roadmap-step">${card.step}</span>
                    <h3>${card.title}</h3>
                    <p>${card.text}</p>
                </article>
            `
        )
        .join("");
}

function applyLanguage(lang) {
    const content = CONTENT[lang];
    currentLang = lang;

    document.title = content.meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", content.meta.description);

    html.lang = lang === "kz" ? "kk" : lang;

    setText("heroEyebrow", content.hero.eyebrow);
    setText("heroTitle", content.hero.title);
    setText("heroText", content.hero.text);
    setText("heroCtaPrimary", content.hero.ctaPrimary);
    setText("heroCtaSecondary", content.hero.ctaSecondary);

    setText("overviewKicker", content.overview.kicker);
    setText("overviewTitle", content.overview.title);
    setText("overviewIntro", content.overview.intro);
    setText("statusKicker", content.overview.statusKicker);
    setText("statusTitle", content.overview.statusTitle);
    setText("factoryGalleryLabel", content.overview.galleryLabel);
    setText("factoryGalleryTitle", content.overview.galleryTitle);
    setText("factoryGalleryText", content.overview.galleryText);

    setText("equipmentKicker", content.equipment.kicker);
    setText("equipmentTitle", content.equipment.title);
    setText("equipmentIntro", content.equipment.intro);
    setText("equipmentBody1", content.equipment.body1);
    setText("equipmentBody2", content.equipment.body2);

    setText("productsKicker", content.products.kicker);
    setText("productsTitle", content.products.title);
    setText("productsIntro", content.products.intro);
    setText("productHeroKicker", content.products.heroKicker);
    setText("productHeroTitle", content.products.heroTitle);
    setText("productHeroText", content.products.heroText);
    setText("microTableLabel", content.products.micro.label);
    setText("microTableTitle", content.products.micro.title);
    setText("bundleTableLabel", content.products.bundle.label);
    setText("bundleTableTitle", content.products.bundle.title);
    setText("cableTableLabel", content.products.cable.label);
    setText("cableTableTitle", content.products.cable.title);

    setText("roadmapKicker", content.roadmap.kicker);
    setText("roadmapTitle", content.roadmap.title);
    setText("roadmapIntro", content.roadmap.intro);
    setText("printerCardLabel", content.roadmap.printer.label);
    setText("printerCardTitle", content.roadmap.printer.title);
    setText("printerCardText", content.roadmap.printer.text);
    setText("adssCardLabel", content.roadmap.adss.label);
    setText("adssCardTitle", content.roadmap.adss.title);
    setText("adssCardText", content.roadmap.adss.text);
    setText("irrigationCardLabel", content.roadmap.irrigation.label);
    setText("irrigationCardTitle", content.roadmap.irrigation.title);
    setText("irrigationCardText", content.roadmap.irrigation.text);
    setText("pipeCardLabel", content.roadmap.pipe.label);
    setText("pipeCardTitle", content.roadmap.pipe.title);
    setText("pipeCardText", content.roadmap.pipe.text);
    setText("labBannerKicker", content.roadmap.labBanner.kicker);
    setText("labBannerTitle", content.roadmap.labBanner.title);
    setText("labBannerText", content.roadmap.labBanner.text);

    setText("contactsKicker", content.contacts.kicker);
    setText("contactsTitle", content.contacts.title);
    setText("contactsText", content.contacts.text);

    navLinks[0].textContent = content.nav.overview;
    navLinks[1].textContent = content.nav.equipment;
    navLinks[2].textContent = content.nav.products;
    navLinks[3].textContent = content.nav.roadmap;
    navLinks[4].textContent = content.nav.contacts;
    document.querySelector(".panel-label").textContent = content.hero.panelLabel;

    const equipmentCards = content.equipment.cards;
    equipmentCards.forEach((card, index) => {
        setText(`equipmentCard${index + 1}Label`, card.label);
        setText(`equipmentCard${index + 1}Title`, card.title);
    });

    content.roadmap.labCards.forEach((card, index) => {
        setText(`labCard${index + 1}Title`, card.title);
        setText(`labCard${index + 1}Text`, card.text);
    });

    renderMetrics(content.metrics);
    renderFacts(content.overview.facts);
    renderStatus(content.overview.statusItems);
    renderTable("microTable", content.products.micro.headers, MICRO_ROWS);
    renderTable("bundleTable", content.products.bundle.headers, BUNDLE_ROWS);
    renderTable("cableTable", content.products.cable.headers, CABLE_ROWS[lang], true);
    renderRoadmap(content.roadmap.cards);

    langButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.lang === lang);
    });

    try {
        localStorage.setItem("kci-lang", lang);
    } catch (error) {
        // Ignore storage access errors.
    }
}

function setupRevealObserver() {
    revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            });
        },
        { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));
}

function setupSectionObserver() {
    const sections = navLinks
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                navLinks.forEach((link) => {
                    const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
                    link.classList.toggle("active", isCurrent);
                });
            });
        },
        {
            rootMargin: "-35% 0px -45% 0px",
            threshold: 0.05,
        }
    );

    sections.forEach((section) => sectionObserver.observe(section));
}

function setupMenu() {
    if (!menuToggle || !navWrap) return;

    menuToggle.addEventListener("click", () => {
        const isOpen = navWrap.classList.toggle("open");
        menuToggle.classList.toggle("is-open", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navWrap.classList.remove("open");
            menuToggle.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

function setupLanguageSwitch() {
    langButtons.forEach((button) => {
        button.addEventListener("click", () => applyLanguage(button.dataset.lang));
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let savedLang = "ru";
    try {
        savedLang = localStorage.getItem("kci-lang") || "ru";
    } catch (error) {
        savedLang = "ru";
    }

    applyLanguage(CONTENT[savedLang] ? savedLang : "ru");
    setupMenu();
    setupLanguageSwitch();
    setupRevealObserver();
    setupSectionObserver();
});
