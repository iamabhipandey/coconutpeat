import { Component } from '@angular/core';

@Component({
  selector: 'app-frequently-asked-questions',
  templateUrl: './frequently-asked-questions.component.html',
  styleUrl: './frequently-asked-questions.component.css'
})
export class FrequentlyAskedQuestionsComponent {
  selectedCategory: string = 'Ordering'; // default active

  faqCategories = [
    { icon: 'fas fa-shopping-cart', title: 'Ordering', questions: 10 },
    { icon: 'fas fa-credit-card', title: 'Payments', questions: 8 },
    { icon: 'fas fa-truck', title: 'Shipping', questions: 8 },
    { icon: 'fas fa-leaf', title: 'Products', questions: 8 },
    { icon: 'fas fa-user', title: 'Account', questions: 6 },
    { icon: 'fas fa-info-circle', title: 'About Us', questions: 5 },
  ];

  // Category wise questions
  orderingQuestions = [
    {
      q: 'How can I place an order on coconut.loche.in?',
      a: 'You can easily place an order from our website by adding your preferred coir or peat products to the cart and completing the checkout process.'
    },
    {
      q: 'Do I need an account to place an order?',
      a: 'Yes, creating an account helps you track orders, view purchase history, and access easier reordering for agricultural supplies.'
    },
    {
      q: 'Do you offer bulk ordering?',
      a: 'Yes! We specialize in bulk supply for farms and nurseries. You can place large volume orders directly or contact our B2B team for verified wholesale pricing.'
    },
    {
      q: 'Can I modify my order after it has been placed?',
      a: 'Once the order is processed, modifications may not be possible. Please contact support immediately if you need to make changes.'
    },
    {
      q: 'Is there a minimum order quantity (MOQ)?',
      a: 'For standard retail packs, there is no MOQ. For wholesale bulk pallets, please refer to the specific product page or contact sales.'
    },
    {
      q: 'How do I check the status of my order?',
      a: 'You can track your order in real-time from the “My Orders” section in your dashboard.'
    },
    {
      q: 'Can I cancel my order?',
      a: 'Orders can be canceled before dispatch. Once the shipment has left our facility, cancellations are not possible.'
    },
    {
      q: 'Do you provide invoices for tax purposes?',
      a: 'Yes, a GST-compliant invoice is generated for every order and can be downloaded from your account.'
    },
    {
      q: 'What if an item is out of stock?',
      a: 'You can use the "Notify Me" feature to get an alert when fresh stock of coir products arrives.'
    },
    {
      q: 'Can I reorder the same shipment?',
      a: 'Yes, use the "Reorder" button in your order history to quickly repeat a previous purchase.'
    }
  ];

  paymentsQuestions = [
    {
      q: 'What payment methods does coconut.loche.in accept?',
      a: 'We accept all major credit/debit cards, UPI, Net Banking, and wallet payments.'
    },
    {
      q: 'Is Cash on Delivery (COD) available?',
      a: 'COD is available for select locations within India. International orders require prepaid payment.'
    },
    {
      q: 'Are online transactions safe?',
      a: 'Absolutely. We use secure SSL encryption and trusted payment gateways to ensure your data is protected.'
    },
    {
      q: 'Do you accept international payments?',
      a: 'Yes, we accept international credit cards for global export orders.'
    },
    {
      q: 'Are there hidden charges?',
      a: 'No. All taxes and fees are displayed at checkout. International orders may be subject to import duties depending on the destination country.'
    },
    {
      q: 'What currency is used for billing?',
      a: 'All transactions are processed in INR. International banks handle currency conversion automatically.'
    },
    {
      q: 'Can I get a refund if my payment fails?',
      a: 'If a payment fails but the amount is deducted, it is usually refunded automatically by your bank within 3-5 business days.'
    },
    {
      q: 'Do you offer credit terms for B2B?',
      a: 'Credit terms may be available for verified long-term wholesale partners. Please contact our finance department.'
    }
  ];

  shippingQuestions = [
    {
      q: 'Do you ship internationally?',
      a: 'Yes, coconut.loche.in exports premium coir products globally. Shipping costs vary by destination.'
    },
    {
      q: 'How long does delivery take?',
      a: 'Domestic orders typically arrive in 3-5 business days. International sea freight shipments depend on the destination port.'
    },
    {
      q: 'How is the product packaged?',
      a: 'We use secure, moisture-resistant packaging. Coir blocks are palletized and shrink-wrapped for safe transit.'
    },
    {
      q: 'Can I track my international shipment?',
      a: 'Yes, we provide tracking details or Bill of Lading (BL) numbers for international cargo tracking.'
    },
    {
      q: 'What are the shipping charges?',
      a: 'Shipping is calculated based on weight and volume. You can see the estimated cost at checkout.'
    },
    {
      q: 'Do you offer free shipping?',
      a: 'We may offer free shipping promotions for specific bulk value orders within domestic regions.'
    },
    {
      q: 'What happens if my package is damaged?',
      a: 'Please inspect your shipment upon arrival. If damaged, take photos and contact us within 24 hours for a resolution.'
    },
    {
      q: 'Do you handle customs clearance?',
      a: 'For exports, we handle export documentation. Import clearance and duties at the destination are the responsibility of the buyer.'
    }
  ];

  productsQuestions = [
    {
      q: 'What is coconut peat?',
      a: 'Coconut peat (cocopeat) is a natural, sustainable growing medium extracted from coconut husks, known for excellent water retention.'
    },
    {
      q: 'Are your products organic?',
      a: 'Yes, our products are 100% natural and organic, suitable for organic farming and horticulture.'
    },
    {
      q: 'What is the EC (Electrical Conductivity) level?',
      a: 'We offer both Low EC (washed) and High EC (unwashed) coir product options to suit different crop requirements.'
    },
    {
      q: 'Is it suitable for hydroponics?',
      a: 'Absolutely. Our washed cocopeat is widely used in hydroponic setups due to its neutral pH and high aeration.'
    },
    {
      q: 'Do you sell grow bags?',
      a: 'Yes, we offer ready-to-use coir grow bags in various sizes for greenhouse cultivation.'
    },
    {
      q: 'Can cocopeat be reused?',
      a: 'Yes, high-quality cocopeat can be reused for multiple crop cycles if properly treated and sterilized.'
    },
    {
      q: 'What is the expansion ratio of your 5kg blocks?',
      a: 'Our premium 5kg blocks typically expand to 70-75 liters of volume when hydrated.'
    },
    {
      q: 'Do you provide certificate of analysis?',
      a: 'Yes, we provide quality test reports and phytosanitary certificates for export orders.'
    }
  ];

  accountQuestions = [
    {
      q: 'How do I create an account?',
      a: 'Click "Sign Up", enter your details, and verify your email to get started.'
    },
    {
      q: 'Can I change my registered email?',
      a: 'You can update contact details from the "My Profile" section.'
    },
    {
      q: 'How do I reset my password?',
      a: 'Use the "Forgot Password" link on the login page to receive a reset instruction email.'
    },
    {
      q: 'Can I view my past orders?',
      a: 'Yes, your complete order history is available in the dashboard.'
    },
    {
      q: 'Is my personal data safe?',
      a: 'Yes, we verify strict data privacy policies and do not share your information with third parties.'
    },
    {
      q: 'How do I delete my account?',
      a: 'Please contact support if you wish to permanently delete your account and data.'
    }
  ];

  aboutQuestions = [
    {
      q: 'What is coconut.loche.in?',
      a: 'coconut.loche.in is a dedicated platform for premium coconut coir and peat products, connecting sustainable agriculture with quality inputs.'
    },
    {
      q: 'Where are you based?',
      a: 'We operate from the heart of the coconut belt in India, ensuring direct sourcing from farms.'
    },
    {
      q: 'Do you manufacture your own products?',
      a: 'We work with partner manufacturing units and direct farm sourcing to ensure consistent quality control.'
    },
    {
      q: 'What is your mission?',
      a: 'To provide sustainable, eco-friendly growing media solutions to farmers and gardeners worldwide.'
    },
    {
      q: 'How can I contact support?',
      a: 'You can reach us via the Contact Us page, email, or our support helpline.'
    }
  ];

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  getQuestionsFor(category: string) {
    switch (category) {
      case 'Ordering': return this.orderingQuestions;
      case 'Payments': return this.paymentsQuestions;
      case 'Shipping': return this.shippingQuestions;
      case 'Products': return this.productsQuestions; // Updated mapping
      case 'Account': return this.accountQuestions;
      case 'About Us': return this.aboutQuestions;
      default: return [];
    }
  }
}
