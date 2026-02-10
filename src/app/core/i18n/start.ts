
export const LANGUAGES = [
    { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' }
] as const;

export type LanguageCode = typeof LANGUAGES[number]['code'];

export const TRANSLATIONS = {
    vi: {
        locations: {
            placeholder: 'Chọn địa điểm',
            ninhvan: 'Ninh Vân Bay',
            dalat: 'Đà Lạt',
            phuquoc: 'Phú Quốc',
            condao: 'Côn Đảo',
            hanoi: 'Hà Nội',
            hcm: 'TP. Hồ Chí Minh',
            danang: 'Đà Nẵng'
        },
        nav: {
            home: 'Trang Chủ',
            about: 'Về Chúng Tôi',
            services: 'Dịch Vụ',
            facilities: 'Tiện Nghi',
            membership: 'Thành Viên'
        },
        hero: {
            badge: 'Tải ứng dụng',
            title: 'Tìm khách sạn tuyệt vời, so sánh giá và đặt kỳ nghỉ mơ ước dễ dàng',
            subtitle: 'Tìm kiếm khách sạn tin cậy cho kỳ nghỉ đáng nhớ và đặt phòng không rắc rối. Tìm khách sạn tốt nhất gần bạn ngay!',
            search_placeholder: 'Tìm kiếm...',
            book_now: 'Đặt Ngay',
            watch_video: 'Xem Video',
            location: 'Địa điểm',
            type: 'Loại',
            price: 'Giá',
            date: 'Ngày',
            search_btn: 'Tìm Khách Sạn',
            select_location: 'Chọn địa điểm',
            select_type: 'Chọn loại',
            select_price: 'Khoảng giá'
        },
        about: {
            pill_top: 'Hãy để chúng tôi',
            heading: 'Khám Phá Nơi Nghỉ, Trải Nghiệm Tiện Nghi, Ưu Tiên Của Chúng Tôi',
            pill_side: 'Về Chúng Tôi',
            desc: 'Sunrise là nền tảng tin cậy kết nối du khách với các khách sạn hàng đầu trên cả nước, mang lại sự thoải mái và sang trọng.',
            learn_more: 'Tìm Hiểu Thêm'
        },
        services: {
            heading: 'Dịch Vụ Của Chúng Tôi',
            subheading: 'Chúng tôi cung cấp những tiện nghi tốt nhất cho bạn',
            desc: 'Trải nghiệm các tiện ích đẳng cấp thế giới được thiết kế cho sự thoải mái và tận hưởng của bạn.',
            tabs: {
                clinic: 'Phòng Khám',
                beauty: 'Làm Đẹp',
                hospital: 'Bệnh Viện'
            },
            see_all: 'Xem Tất Cả'
        },
        explore: {
            heading: 'Khám Phá Khách Sạn Tốt Nhất',
            search_placeholder: 'Tìm kiếm...',
            view_all: 'Xem Tất Cả'
        },
        partners: {
            heading: 'Khám Phá các tùy chọn khách sạn hàng đầu gần bạn'
        },
        testimonial: {
            heading: 'Mỗi Kỳ Nghỉ Đều Có Câu Chuyện',
            subheading: 'Khách Hàng Nói Gì'
        },
        footer: {
            company: 'Công Ty',
            support: 'Hỗ Trợ',
            services: 'Dịch Vụ',
            subscribe: 'Đăng Ký Nhận Tin',
            copyright: 'Bản quyền thuộc về Sunrise Hotel.'
        },
        types: {
            luxury: 'Sang Trọng',
            resort: 'Khu Nghỉ Dưỡng',
            boutique: 'Boutique',
            villa: 'Biệt Thự'
        }
    },
    en: {
        locations: {
            placeholder: 'Select Location',
            ninhvan: 'Ninh Van Bay',
            dalat: 'Dalat',
            phuquoc: 'Phu Quoc',
            condao: 'Con Dao',
            hanoi: 'Hanoi',
            hcm: 'Ho Chi Minh City',
            danang: 'Da Nang'
        },
        nav: {
            home: 'Home',
            about: 'About Us',
            services: 'Services',
            facilities: 'Facilities',
            membership: 'Membership'
        },
        hero: {
            badge: 'Get the app',
            title: 'Find amazing hotels, compare prices, and book your dream vacation easily',
            subtitle: 'Search trusted hotels for unforgettable stays and hassle-free bookings. Find the best hotels near you in seconds!',
            search_placeholder: 'Search here...',
            book_now: 'Book Now',
            watch_video: 'Watch video',
            location: 'Location',
            type: 'Type',
            price: 'Price',
            date: 'Date',
            search_btn: 'Search Hotel',
            select_location: 'Select Location',
            select_type: 'Select Type',
            select_price: 'Price Range'
        },
        about: {
            pill_top: 'Let\'s know us',
            heading: 'Explore Stays, About Comfort, Your Stay, Our Priority',
            pill_side: 'About Us',
            desc: 'Sunrise is a trusted platform connecting travelers with top hotels across the country.',
            learn_more: 'Learn More'
        },
        services: {
            heading: 'Our Services',
            subheading: 'We provide the best facilities for you',
            desc: 'Experience world-class amenities designed for your comfort and enjoyment.',
            tabs: {
                clinic: 'Clinic',
                beauty: 'Beauty',
                hospital: 'Hospital'
            },
            see_all: 'See All'
        },
        explore: {
            heading: 'Explore Best Hotel',
            search_placeholder: 'Search here...',
            view_all: 'View All'
        },
        partners: {
            heading: 'Discover top hotel options nearby'
        },
        testimonial: {
            heading: 'Every Stay Has a Story',
            subheading: 'Here’s What Our Guests Say'
        },
        footer: {
            company: 'Company',
            support: 'Support',
            services: 'Services',
            subscribe: 'Subscribe',
            copyright: 'Copyright Sunrise Hotel.'
        },
        types: {
            luxury: 'Luxury',
            resort: 'Resort',
            boutique: 'Boutique',
            villa: 'Villa'
        }
    },
    ko: {
        locations: {
            placeholder: '위치 선택',
            ninhvan: '닌반 베이',
            dalat: '달랏',
            phuquoc: '푸꾸옥',
            condao: '꼰다오',
            hanoi: '하노이',
            hcm: '호치민',
            danang: '다낭'
        },
        nav: {
            home: '홈',
            about: '회사 소개',
            services: '서비스',
            facilities: '시설',
            membership: '멤버십'
        },
        hero: {
            badge: '앱 다운로드',
            title: '놀라운 호텔을 찾고, 가격을 비교하고, 꿈의 휴가를 쉽게 예약하세요',
            subtitle: '잊을 수 없는 숙박과 번거로움 없는 예약을 위해 신뢰할 수 있는 호텔을 검색하세요. 내 주변 최고의 호텔을 찾아보세요!',
            search_placeholder: '검색...',
            book_now: '지금 예약',
            watch_video: '동영상 보기',
            location: '위치',
            type: '유형',
            price: '가격',
            date: '날짜',
            search_btn: '호텔 검색',
            select_location: '위치 선택',
            select_type: '유형 선택',
            select_price: '가격 범위'
        },
        about: {
            pill_top: '우리에 대해',
            heading: '숙박 탐색, 편안함에 대하여, 귀하의 편안함이 최우선',
            pill_side: '회사 소개',
            desc: 'Sunrise는 전국의 최고급 호텔과 여행자를 연결하는 신뢰할 수 있는 플랫폼입니다.',
            learn_more: '더 알아보기'
        },
        services: {
            heading: '우리의 서비스',
            subheading: '최고의 시설을 제공합니다',
            desc: '귀하의 편안함과 즐거움을 위해 설계된 세계적 수준의 시설을 경험하세요.',
            tabs: {
                clinic: '클리닉',
                beauty: '뷰티',
                hospital: '병원'
            },
            see_all: '모두 보기'
        },
        explore: {
            heading: '최고의 호텔 탐색',
            search_placeholder: '검색...',
            view_all: '모두 보기'
        },
        partners: {
            heading: '가까운 최고의 호텔 옵션 발견'
        },
        testimonial: {
            heading: '모든 숙박에는 이야기가 있습니다',
            subheading: '고객 후기'
        },
        footer: {
            company: '회사',
            support: '지원',
            services: '서비스',
            subscribe: '구독',
            copyright: 'Sunrise Hotel 판권 소유.'
        },
        types: {
            luxury: '럭셔리',
            resort: '리조트',
            boutique: '부티크',
            villa: '빌라'
        }
    }
};
