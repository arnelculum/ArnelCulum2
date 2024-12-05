import { Service } from '../types/project';

export const videoServices: Service[] = [
  {
    id: 'basic-video',
    name: 'Basic Video Edit',
    price: 150,
    description: 'Professional video editing for single videos',
    features: [
      'Basic editing',
      'Subtitles',
      'Social optimization'
    ],
    deliveryTime: '3-5 business days',
    paymentLink: 'https://buy.stripe.com/basic_video'
  },
  {
    id: 'video-pack-10',
    name: '10 Videos Package',
    price: 1500,
    description: 'Comprehensive video editing package for 10 videos',
    features: [
      'Basic editing',
      'Subtitles',
      'Social optimization'
    ],
    deliveryTime: '2 weeks',
    paymentLink: 'https://buy.stripe.com/video_pack_10'
  },
  {
    id: 'video-pack-20',
    name: '20 Videos Package',
    price: 2500,
    description: 'Premium video editing package for 20 videos',
    features: [
      'Advanced editing',
      'All platform sizes',
      'Comprehensive proofing'
    ],
    deliveryTime: '3 weeks',
    paymentLink: 'https://buy.stripe.com/video_pack_20'
  },
  {
    id: 'video-pack-30',
    name: '30 Videos Package',
    price: 4000,
    description: 'Professional video editing package for 30 videos',
    features: [
      'Priority editing',
      '2 dedicated editors',
      'All premium features'
    ],
    deliveryTime: '4 weeks',
    paymentLink: 'https://buy.stripe.com/video_pack_30'
  }
];

export const websiteServices: Service[] = [
  {
    id: 'professional-website',
    name: 'Professional Website Package',
    price: 999,
    description: 'Complete website solution with monthly maintenance',
    features: [
      'Complete WordPress setup',
      'SEO optimization',
      'Google Business Profile',
      'Domain & SSL setup',
      'Monthly maintenance ($50/month)'
    ],
    paymentLink: 'https://buy.stripe.com/website_package'
  }
];