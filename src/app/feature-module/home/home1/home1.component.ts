import { DatePipe } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { DataService } from 'src/app/shared/services/data/data.service';
import {  testimonials, thumbnails1 } from 'src/app/shared/services/model/model';
interface data {
  value: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css'],
})
export class HomeComponent implements AfterViewInit{
  activeTab: string = 'hangover';

  openedHang: number | null = null;
  openedSleep: number | null = null;

  toggle(i: number, type: string) {
    if (type === 'hang') {
      this.openedHang = this.openedHang === i ? null : i;
    } else {
      this.openedSleep = this.openedSleep === i ? null : i;
    }
  }

hangoverFAQ = [
  { q: "What is MorningShot Hangover Drink?", 
    a: "An Ayurvedic detox drink that supports liver function, boosts hydration, and helps you wake up fresh after drinking." },

  { q: "How does it reduce hangovers?", 
    a: "Its herbal blend helps break down alcohol toxins faster, reducing headache, nausea, and fatigue the next day." },

  { q: "When should I take it?", 
    a: "For best results, drink it after your last drink—before going to sleep." },

  { q: "Can I take it before drinking?", 
    a: "Yes, it prepares the liver and helps reduce next-day discomfort." },

  { q: "Is it safe for daily use?", 
    a: "Yes, it is made from natural Ayurvedic herbs and safe for regular use." },

  { q: "How fast does it work?", 
    a: "You feel the difference the next morning with reduced tiredness and dehydration." },

  { q: "Is it Ayurvedic and chemical-free?", 
    a: "Yes, it is 100% Ayurvedic, non-addictive, and free from harmful chemicals." }
];

sleepFAQ = [
  { q: "What is MorningShot Sleep Aid?", 
    a: "A natural herbal sleep formula that helps you fall asleep faster and enjoy deep, restorative sleep." },

  { q: "Is it habit-forming?", 
    a: "No, it is 100% non-habit forming and safe for long-term use." },

  { q: "How quickly does it work?", 
    a: "Typically within 20–30 minutes after consumption." },

  { q: "Will I feel sleepy or heavy the next morning?", 
    a: "No, you wake up fresh and energised with no grogginess." },

  { q: "Does it help reduce anxiety or overthinking?", 
    a: "Yes, calming herbs support relaxation and mental calmness." },

  { q: "Can I take it every night?", 
    a: "Yes, it is herbal and suitable for nightly use." },

  { q: "Is it safe with other medications?", 
    a: "Generally yes, but consult a doctor if you are on regular medication." }
];

public routes = routes
  public thumbnails1: thumbnails1[] = [];
  public testimonials: testimonials[] = [];
 
  constructor(private data: DataService, private datePipe: DatePipe) {
    this.testimonials = this.data.testimonials;
    this.thumbnails1 = this.data.thumbnails1;
    
    
  }
  contactNow() {
    alert('Contact form or chat popup triggered!');
  }



  newArrivalProducts = [
  {
    image: 'assets/img/product/fab-you1.webp',
    title: 'Retinol Peptide Youthful Serum',
    brandname:'febyou',
    price: 1596,
    oldPrice: null,
    discount: null
  },
  {
    image: 'assets/img/product/product-2.avif',
    title: 'Plum Simply Bright 2% Niacinamide Face Wash With',
    brandname:'Plum',
    price: 299,
    oldPrice: null,
    discount: null,
  },
  {
    image: 'assets/img/product/fab-you2.webp',
    title: 'Rice Glow Foam Toner',
    brandname:'febyou',
    price: 1191,
    oldPrice: null,
    discount: null,
  },
  {
    image: 'assets/img/product/fab-you3.webp',
    title: 'KRice Mask Cleanser',
    brandname:'febyou',
    price: 1407,
    oldPrice: null,
    discount: null,
  },
  {
    image: 'assets/img/product/ratplan-6.jpg',
    title: 'Donghae Deep Moisturizing Cream 1+1',
    brandname:'Ratiplan',
    price: 2000,
    oldPrice: null,
    discount: null,
  }
];


promotionProducts = [
  {
    image: 'assets/img/banners/Loche Tox 100Unit.jpg',
    title: 'HOME.PROMO.LOCHE_TOX_100',
  },
  {
    image: 'assets/img/banners/Loche Tox 200Unit.jpg',
    title: 'HOME.PROMO.LOCHE_TOX_200',
  },
  {
    image: 'assets/img/banners/PDRNelle.jpg',
    title: 'HOME.PROMO.PDRNELLE',
  },
  {
    image: 'assets/img/banners/IMG-20251025-WA0033.jpg',
    title: 'HOME.PROMO.PDRNELLE_SKINBOOSTER',
  },
  {
    image: 'assets/img/banners/Loche injector .jpg',
    title: 'HOME.PROMO.LOCHE_INJECTOR',
  },
  {
    image: 'assets/img/banners/Pdrnelle vega shine.jpg',
    title: 'HOME.PROMO.PDRNELLE_VEGA_SHINE',
  },
  {
    image: 'assets/img/banners/pdrnelle V .jpg',
    title: 'HOME.PROMO.PDRNELLE_V',
  },
];


  secondsection: OwlOptions = {
    loop:true,
    margin:15,
    nav:true,
    dots: false,
    autoplay:true,
    smartSpeed: 1000,
    items:1,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
    responsive:{
      0:{
        items:1
      },
      
      550:{
        items:2
      },
      700:{
        items:3
      },
      1000:{
        items:3
      },
      1200:{
        items:3
      },

    },
  };
    bikefeatureOwlOptions: OwlOptions = {
    loop:true,
    margin:24,
    nav:true,
    dots: false,
    autoplay:false,
    smartSpeed: 2000,
    items:1,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
    responsive:{
      0:{
        items:1
      },
      
      550:{
        items:1
      },
      700:{
        items:2
      },
      1000:{
        items:3
      },
      1400:{
        items:4
      }
    },
  };
    carimagesliderOwlOptions: OwlOptions = {
    loop:true,
    margin:24,
    nav:true,
    dots: true,
    autoplay:false,
    smartSpeed: 2000,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
    responsive:{
      0:{
        items:1
      },
      
      550:{
        items:1
      },
      700:{
        items:2
      },
      1000:{
        items:6
      },
      1200:{
        items:6
      }
    }
  };
  firstsecOptions: OwlOptions = {
    loop:true,
    margin:20,
    nav:true,
    dots: false,
    autoplay:false,
    smartSpeed: 2000,
    items:1,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
    responsive:{
      0:{
        items:3
      },
      550:{
        items:4
      },
      700:{
        items:5
      },
      1000:{
        items:6
      },
      1200:{
        items:7
      },

    },
  };
  categorysec: OwlOptions = {
    loop:true,
    margin:24,
    nav:true,
    dots: false,
    autoplay:false,
    smartSpeed: 2000,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
    responsive:{
      0:{
        items:2
      },
      
      550:{
        items:3
      },
      700:{
        items:4
      },
      1000:{
        items:5
      },
      1200:{
        items:5
      }
    }
  };
    yachttypeOwlOptions: OwlOptions = {
    loop:true,
			margin:24,
			nav:false,
			dots: false,
			autoplay:true,
			smartSpeed: 2000,
      responsive:{
				0:{
					items:2
				},
				
				550:{
					items:8
				},
				1200:{
					items:8
				},
				1400:{
					items:10
				}
			}
  };
  BrandsliderOwlOptions: OwlOptions = {
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay:false,
    smartSpeed: 2000,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
    responsive:{
      0:{
        items:2
      },
      
      550:{
        items:3
      },
      700:{
        items:4
      },
      1000:{
        items:7
      },
      1200:{
        items:7
      }
    }
  };
  TopBrands: OwlOptions = {
   loop:true,
    margin:20,
    nav:true,
    dots: false,
    autoplay:false,
    smartSpeed: 2000,
    items:1,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
    responsive:{
      0:{
        items:2
      },
      
      550:{
        items:2
      },
      700:{
         items:3
      },
      1000:{
        items:4
      },
      1200:{
        items:5
      },
      1400:{
        items:5
      }
    },
  };
    NewArrival: OwlOptions = {
   loop:true,
    margin:10,
    nav:true,
    dots: false,
    autoplay:false,
    smartSpeed: 2000,
    items:1,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
    responsive:{
      0:{
        items:2
      },
      
      550:{
        items:2
      },
      700:{
         items:3
      },
      1000:{
        items:4
      },
      1200:{
        items:5
      },
      1400:{
        items:5
      }
    },
  };
  
  pramotionsec: OwlOptions = {
   loop:true,
    margin:10,
    nav:true,
    dots: false,
    autoplay:false,
    smartSpeed: 2000,
    items:1,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
    responsive:{
      0:{
        items:2
      },
      
      550:{
        items:2
      },
      700:{
         items:3
      },
      1000:{
        items:4
      },
      1200:{
        items:5
      },
      1400:{
        items:5
      }
    },
  };

  public ngAfterViewInit(): void{
    window.dispatchEvent(new Event('resize'))
  }
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    asNavFor: '.testimonial-thumbnails'
  };

  thumbnailConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.testimonial-slider',
    focusOnSelect: true
  };
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
  public isClassAdded: boolean[] = [false];
}
