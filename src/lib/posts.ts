import { marked } from 'marked';

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  content: string;
}

const POSTS = [
  {
    slug: "shopify-ecommerce-store-for-fashion-accessories",
    title: "Shopify E-commerce Store for Fashion Accessories",
    date: "January 25, 2024",
    coverImage:     "https://cdn.dribbble.com/users/2114334/screenshots/9026429/group_151_4x.png",
    content: `
# Case Study on Shopify E-commerce Store for Fashion Accessories

A growing online fashion brand specializing in trendy apparel. They struggled with low conversion rate and needed an improvement

## Problem

The website had high traffic of potential costumers but a low conversion rate of 1.5% and wanted to improve their conversion rate

## Strategic Approach To Problem

* I conducted a funnel analysis to understand where users dropped off.
* I ran A/B tests on product pages with different CTA (call-to-action) buttons and page layouts.
* Improved the mobile user experience by making the checkout process more intuitive and reducing the number of steps.

## Results

* Increased conversion rate by 30%
* Reduced checkout abandonment by 20%

## Tools Used in This Project

* Google Analytics 
* Optimizely 
* Hotjar for heatmaps
    `,
  },
  {
    slug: "b2b-saas-startup",
    title: "SaaS Subscription Page Optimization",
    date: "May 24, 2024",
    coverImage: "https://th.bing.com/th/id/OIP.b24Ay2EQx6VnZe5AnHYtVQHaE7?w=1471&h=980&rs=1&pid=ImgDetMain",
    content: `
#  Case Study on B2B SaaS Subscription Page Optimization

A cloud-based project management software targeting small to mid-sized businesses. They faced a low trial-to-paid conversion rate and needed better pricing page optimization.

## Problem
The B2B Saas Startup was facing low free trial sign-up rate with sign-ups quantifying (2.5%). They also observed a high drop-off rate on pricing page.

## Strategic Approach To Problem

* Introduced a comparison table showing plan benefits.
* A/B tested different CTA text (“Start Free Trial” vs. “Try for Free”).
* Removed unnecessary form fields to reduce friction.
* Added urgency elements (“Limited-time 30-day trial” banner).

## Results

* Trial sign-ups increased by 47%.
* Pricing page bounce rate dropped by 18%.
* Higher conversion from free trial to paid users (20%  increase).

## Tools Used in This Project

* Google Optimize (A/B Testing)
* FullStory (User Behavior Analysis)
* HubSpot (Lead Nurturing)
    `,
  },
  {
    slug: "lead-generation-for-law-firm",
    title: " Lead Generation for a Law Firm",
    date: "October 13, 2024",  
    coverImage: "https://th.bing.com/th/id/OIP.YXgN51pvxLhCOD35hMQauQHaE8?rs=1&pid=ImgDetMain
    ",
    content: `
# Case Study on Lead Generation for a Law Firm

A boutique legal practice focusing on corporate and family law. Their website had low engagement, and they needed more leads through their contact forms and consultation bookings.

## Problem

The law firm was experiencig a low conversion rate on contact forms (1.2%) but with high traffic of vistors on their landing page. Potential clients were dropping off before booking a consultation.

## Strategic Approach To Problem

* Redesigned landing page to highlight client testimonials & case results.
* A/B tested form length (long form vs. short form).
* Added live chat for instant consultation booking.
* Improved mobile experience by reducing text and increasing  CTA visibility

## Results

* Contact form submissions increased from 1.2% to 4.5%.
* More consultation calls booked (30% increase).
* Mobile conversion rate improved by 40%.

## Tools Used for This Project

Crazy Egg (Heatmaps)
HubSpot (Lead Tracking)
Unbounce (Landing Page Optimization)
    `,
  },
];

export async function getPost(slug: string): Promise<Post | null> {
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return null;

  const content = await marked(post.content);
  return {
    ...post,
    content,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = await Promise.all(
    POSTS.map(async (post) => ({
      ...post,
      content: await marked(post.content),
    }))
  );
  return posts;
}
