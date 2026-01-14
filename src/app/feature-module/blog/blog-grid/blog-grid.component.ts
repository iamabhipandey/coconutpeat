import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.css']
})
export class BlogGridComponent {
  public routes = routes;

  blogPosts = [
    {
      title: 'Why Cocopeat is the Future of Sustainable Farming',
      category: 'Sustainable Farming',
      description: 'Discover how switching to cocopeat can maximize crop yields while minimizing environmental impact. A deep dive into water retention and aeration.',
      author: 'Dr. Aruna Rao',
      date: 'Jan 15, 2024',
      image: 'assets/img/banner-section2/product03.jpeg',
      authorImg: 'assets/img/profiles/avatar-13.jpg'
    },
    {
      title: '5 Ways Coir Mats Protect Your Soil from Erosion',
      category: 'Landscaping',
      description: 'Soil erosion is a major challenge for landscapers. Learn how natural coir mats provide an effective, biodegradable solution for slope stabilization.',
      author: 'Rajesh Kumar',
      date: 'Feb 02, 2024',
      image: 'assets/img/banner-section2/product2.png',
      authorImg: 'assets/img/profiles/avatar-04.jpg'
    },
    {
      title: 'Hydroponics 101: Mastering Growth with Coco Coir',
      category: 'Hydroponics',
      description: 'Coco coir is the gold standard for hydroponic mediums. We explore the best mixes and nutrient schedules for your soil-less garden.',
      author: 'Sarah Jenkins',
      date: 'Feb 20, 2024',
      image: 'assets/img/banner-section2/product8.jpg',
      authorImg: 'assets/img/profiles/avatar-03.jpg'
    },
    {
      title: 'From Husk to Harvest: The Journey of a Coconut',
      category: 'Production',
      description: 'Ever wondered how a rough coconut husk becomes the fine peat in your garden? Take a tour of our sustainable processing journey.',
      author: 'Loche Team',
      date: 'Mar 10, 2024',
      image: 'assets/img/banner-section2/product9.png',
      authorImg: 'assets/img/profiles/avatar-11.jpg'
    },
    {
      title: 'Indoor Gardening Hacks using Coir Pots',
      category: 'Home Gardening',
      description: 'Stop using plastic! Coir pots are breathable, organic, and promote air pruning for healthier root systems in your indoor plants.',
      author: 'Priya Sethi',
      date: 'Mar 25, 2024',
      image: 'assets/img/banner-section2/product5.png',
      authorImg: 'assets/img/profiles/avatar-13.jpg'
    },
    {
      title: 'Peat Moss vs. Coco Peat: The Environmental Choice',
      category: 'Eco-Education',
      description: 'Why are gardeners switching from peat moss to coco peat? We break down the environmental costs and benefits of each substrate.',
      author: 'Green Earth',
      date: 'Apr 05, 2024',
      image: 'assets/img/banner-section2/product7.png',
      authorImg: 'assets/img/profiles/avatar-04.jpg'
    }
  ];

  categories = [
    'Sustainable Farming',
    'Hydroponics',
    'Home Gardening',
    'Landscaping',
    'Eco-Education',
    'Industrial Coir'
  ];

  tags = [
    'Organic', 'Soil-less', 'Growth', 'Water Retention', 'Biodegradable', 'Farming', 'Nature'
  ];

  recentPosts = [
    {
      title: 'Hydroponics 101: Mastering Growth',
      date: 'Feb 20, 2024',
      image: 'assets/img/banner-section2/product8.jpg'
    },
    {
      title: 'Why Cocopeat is the Future',
      date: 'Jan 15, 2024',
      image: 'assets/img/banner-section2/product03.jpeg'
    },
    {
      title: 'Indoor Gardening Hacks',
      date: 'Mar 25, 2024',
      image: 'assets/img/banner-section2/product5.png'
    }
  ];
}
