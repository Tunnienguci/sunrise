import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface Experience {
   id: string;
   title: string;
   description: string;
   imageUrl: string;
   category: string;
}

@Component({
   selector: 'sunrise-services',
   imports: [],
   changeDetection: ChangeDetectionStrategy.OnPush,
   template: `
    <div class="services-page">
        <!-- Hero Banner -->
        <div class="services-hero">
            <img src="https://media.sixsenses.com/B60H3R33/at/45ttbnpg7vfn36wmh6q428mn/Into_Watersports.jpg?format=webp&width=790&height=987&fit=crop"
                 alt="Six Senses Ninh Van Bay experiences" class="services-hero__bg" />
            <div class="services-hero__overlay"></div>
            <div class="services-hero__content">
                <span class="services-hero__label">Six Senses Ninh Van Bay</span>
                <h1 class="services-hero__title">Trải Nghiệm</h1>
                <p class="services-hero__subtitle">Quý khách muốn khám phá hòn đảo hay thảnh thơi nghỉ dưỡng?</p>
            </div>
        </div>

        <!-- Filter Tabs -->
        <div class="services-filter">
            <div class="services-filter__container">
                @for (cat of categories; track cat.id) {
                    <button
                        class="services-filter__btn"
                        [class.services-filter__btn--active]="activeCategory() === cat.id"
                        (click)="activeCategory.set(cat.id)"
                        type="button">
                        {{ cat.label }}
                    </button>
                }
            </div>
        </div>

        <!-- Experiences Grid -->
        <div class="services-grid">
            <div class="services-grid__container">
                @for (exp of filteredExperiences(); track exp.id) {
                    <article class="exp-card">
                        <div class="exp-card__image-wrapper">
                            <img [src]="exp.imageUrl" [alt]="exp.title" class="exp-card__image" loading="lazy" />
                            <div class="exp-card__category">{{ getCategoryLabel(exp.category) }}</div>
                        </div>
                        <div class="exp-card__body">
                            <h3 class="exp-card__title">{{ exp.title }}</h3>
                            <p class="exp-card__desc">{{ exp.description }}</p>
                            <button class="exp-card__link" type="button">
                                Khám phá thêm
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>
                    </article>
                }
            </div>
        </div>
    </div>
    `,
   styles: [`
        .services-page {
            min-height: 100vh;
        }

        /* Hero */
        .services-hero {
            position: relative;
            height: 480px;
            overflow: hidden;
        }
        .services-hero__bg {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .services-hero__overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 100%);
        }
        .services-hero__content {
            position: absolute;
            bottom: 4rem;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            color: #fff;
            width: 100%;
            max-width: 700px;
            padding: 0 2rem;
        }
        .services-hero__label {
            display: inline-block;
            font-size: 0.75rem;
            font-weight: 600;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            opacity: 0.8;
            margin-bottom: 1rem;
        }
        .services-hero__title {
            font-family: 'Playfair Display', serif;
            font-size: 3.5rem;
            font-weight: 500;
            margin-bottom: 1rem;
            line-height: 1.1;
        }
        .services-hero__subtitle {
            font-size: 1.1rem;
            opacity: 0.9;
            line-height: 1.6;
        }

        /* Filters */
        .services-filter {
            background: #fff;
            border-bottom: 1px solid #f0f0f0;
            position: sticky;
            top: 60px;
            z-index: 10;
        }
        .services-filter__container {
            max-width: 1320px;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            gap: 0.5rem;
            overflow-x: auto;
            scrollbar-width: none;
            &::-webkit-scrollbar { display: none; }
        }
        .services-filter__btn {
            padding: 0.6rem 1.5rem;
            border-radius: 100px;
            border: 1px solid #e0e0e0;
            background: #fff;
            font-size: 0.875rem;
            font-weight: 500;
            cursor: pointer;
            white-space: nowrap;
            transition: all 0.2s ease;
            color: #555;

            &:hover {
                border-color: #1a1a1a;
                color: #1a1a1a;
            }
        }
        .services-filter__btn--active {
            background: #1a1a1a;
            color: #fff;
            border-color: #1a1a1a;

            &:hover {
                background: #333;
                color: #fff;
            }
        }

        /* Grid */
        .services-grid {
            background: #fafafa;
            padding: 3rem 0 5rem;
        }
        .services-grid__container {
            max-width: 1320px;
            margin: 0 auto;
            padding: 0 2rem;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
            gap: 2rem;
        }

        /* Card */
        .exp-card {
            background: #fff;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 2px 12px rgba(0,0,0,0.06);
            transition: transform 0.3s ease, box-shadow 0.3s ease;

            &:hover {
                transform: translateY(-4px);
                box-shadow: 0 12px 32px rgba(0,0,0,0.1);
            }
            &:hover .exp-card__image {
                transform: scale(1.05);
            }
        }
        .exp-card__image-wrapper {
            position: relative;
            height: 240px;
            overflow: hidden;
        }
        .exp-card__image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        .exp-card__category {
            position: absolute;
            top: 1rem;
            left: 1rem;
            background: rgba(255,255,255,0.92);
            backdrop-filter: blur(8px);
            padding: 0.35rem 1rem;
            border-radius: 100px;
            font-size: 0.75rem;
            font-weight: 600;
            color: #1a1a1a;
            letter-spacing: 0.03em;
        }
        .exp-card__body {
            padding: 1.5rem;
        }
        .exp-card__title {
            font-family: 'Playfair Display', serif;
            font-size: 1.25rem;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 0.75rem;
        }
        .exp-card__desc {
            font-size: 0.875rem;
            color: #666;
            line-height: 1.7;
            margin-bottom: 1.25rem;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        .exp-card__link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
            font-weight: 600;
            color: #1a1a1a;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
            transition: gap 0.2s ease;

            &:hover {
                gap: 0.75rem;
            }
        }

        @media (max-width: 768px) {
            .services-hero { height: 360px; }
            .services-hero__title { font-size: 2.5rem; }
            .services-grid__container {
                grid-template-columns: 1fr;
            }
        }
    `]
})
export class ServicesComponent {
   readonly categories = [
      { id: 'all', label: 'Tất cả' },
      { id: 'adventure', label: 'Phiêu lưu' },
      { id: 'culinary', label: 'Ẩm thực' },
      { id: 'nature', label: 'Thiên nhiên' },
      { id: 'relaxation', label: 'Thư giãn' },
   ];

   readonly activeCategory = signal('all');

   private readonly experiences: Experience[] = [
      {
         id: 'exp1',
         title: 'Trải nghiệm leo núi',
         description: 'Dù là con đường mòn leo núi ngoằn ngoèo hay vách đá dựng đứng mạo hiểm, trải nghiệm leo núi xứng đáng để tận hưởng cảm giác chinh phục trong khung cảnh kỳ vĩ của thiên nhiên. Một buổi dã ngoại riêng tư tại bãi biển đích đến sẽ là phần thưởng đáng nhớ.',
         imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80',
         category: 'adventure',
      },
      {
         id: 'exp2',
         title: 'Du ngoạn bằng thuyền gỗ',
         description: 'Du ngoạn bằng thuyền gỗ truyền thống và dịch vụ tàu thuyền. Tận hưởng một ngày hoàn hảo dưới ánh dương chiều tà khi chu du trên vịnh Ninh Vân, thưởng thức đồ uống và tiệc bánh giữa biển khơi.',
         imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
         category: 'adventure',
      },
      {
         id: 'exp3',
         title: 'Lớp học nấu ăn',
         description: 'Khám phá những kỹ thuật chế biến món ăn tinh tế cùng với đầu bếp của khu nghỉ — từ món ăn Việt Nam truyền thống cho đến các công thức nấu ăn thuần chay, đậm vị mà nhiều dinh dưỡng.',
         imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
         category: 'culinary',
      },
      {
         id: 'exp4',
         title: 'Khám phá thế giới hoang dã',
         description: 'Hành trình tìm hiểu thế giới hoang dã và các hoạt động mà Six Senses Ninh Vân Bay đang làm để bảo vệ và bảo tồn các loài có nguy cơ tuyệt chủng, bao gồm loài voọc quý hiếm trong khu vực.',
         imageUrl: 'https://media.sixsenses.com/B60H3R33/at/4hhwtbk64xvvtrpfkvqgv3/Black_Shanked_Langur.jpg?format=webp&width=426&height=568&fit=crop',
         category: 'nature',
      },
      {
         id: 'exp5',
         title: 'Thể thao dưới nước',
         description: 'Rất nhiều hoạt động thú vị trên mặt nước và dưới lòng biển đang chờ quý khách khám phá — lặn biển, chèo kayak, lướt ván, và paddleboard cùng đội ngũ hướng dẫn chuyên nghiệp.',
         imageUrl: 'https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=800&q=80',
         category: 'adventure',
      },
      {
         id: 'exp6',
         title: 'Câu cá',
         description: 'Trải nghiệm câu cá độc đáo vào sáng sớm trên vịnh Ninh Vân. Cùng ngư dân địa phương ra khơi và tận hưởng giây phút yên bình giữa biển trời mênh mông.',
         imageUrl: 'https://media.sixsenses.com/B60H3R33/at/c3kr7v98twrc694cvtx49xf/Fishing_in_the_bay.jpg?format=webp&width=426&height=568&fit=crop',
         category: 'adventure',
      },
      {
         id: 'exp7',
         title: 'Tiệc nướng BBQ trên bãi biển',
         description: 'Thưởng thức bữa tiệc nướng BBQ lãng mạn và riêng tư trong thời khắc chuyển giao hoàng hôn tuyệt đẹp khi màn đêm buông xuống, bên cạnh là nến và tiếng sóng biển vỗ rì rào.',
         imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
         category: 'culinary',
      },
      {
         id: 'exp8',
         title: "Let's Go Green",
         description: 'Hãy biến kì nghỉ của quý khách trở nên thân thiện hơn với môi trường tại một trong những khu nghỉ có sự đa dạng sinh học phong phú nhất tại Việt Nam. Tham gia các hoạt động bảo tồn và phát triển bền vững.',
         imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
         category: 'nature',
      },
      {
         id: 'exp9',
         title: 'Xem phim dưới trời sao',
         description: 'Thư giãn trên những chiếc ghế tựa êm ái, lắng nghe tiếng sóng biển và thưởng thức những bộ phim hay — một trải nghiệm mang đậm phong cách của Six Senses.',
         imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
         category: 'relaxation',
      },
      {
         id: 'exp10',
         title: 'Thăm quan đảo',
         description: 'Cùng lên tàu cao tốc và du ngoạn trên biển trong xanh để khám phá ba hòn đảo của bờ vịnh — nơi mà quý khách có thể lặn và đắm mình trong làn nước mát và khung cảnh tuyệt đẹp của tự nhiên.',
         imageUrl: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=80',
         category: 'adventure',
      },
   ];

   filteredExperiences = () => {
      const cat = this.activeCategory();
      if (cat === 'all') return this.experiences;
      return this.experiences.filter(e => e.category === cat);
   };

   getCategoryLabel(categoryId: string): string {
      return this.categories.find(c => c.id === categoryId)?.label ?? categoryId;
   }
}
