'use client';

import { Metadata } from 'next';
import { 
  Shield, 
  Award, 
  Users, 
  Zap, 
  Clock, 
  Headphones,
  Star,
  Quote,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedCounter from '@/components/shared/AnimatedCounter';

// Remove metadata export from client components
// export const metadata: Metadata = { ... } 

const stats = [
  { value: 50000, suffix: '+', label: 'Happy Customers' },
  { value: 200, suffix: '+', label: 'Products' },
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 99, suffix: '%', label: 'Satisfaction Rate' },
];

const trustBadges = [
  { icon: Shield, title: 'ISO 9001 Certified', desc: 'Quality management certified' },
  { icon: Award, title: 'BIS Approved', desc: 'Bureau of Indian Standards' },
  { icon: Zap, title: 'Energy Star', desc: 'Energy efficient products' },
  { icon: Clock, title: '5 Year Warranty', desc: 'On all products' },
  { icon: Users, title: '50K+ Clients', desc: 'Across India' },
  { icon: Headphones, title: '24/7 Support', desc: 'Always here to help' },
];

const sponsors = [
  { name: 'Philips', initials: 'PH' },
  { name: 'Osram', initials: 'OS' },
  { name: 'Havells', initials: 'HV' },
  { name: 'Syska', initials: 'SY' },
  { name: 'Wipro', initials: 'WP' },
  { name: 'Bajaj', initials: 'BJ' },
];

const reviews = [
  {
    name: 'Rahul Sharma',
    role: 'Interior Designer',
    rating: 5,
    text: 'ElectricEye transformed my client projects. The smart LED bulbs are flawless and the radar sensors are incredibly responsive. Best lighting partner I have worked with.',
    avatar: 'RS',
  },
  {
    name: 'Priya Patel',
    role: 'Homeowner, Mumbai',
    rating: 5,
    text: 'Installed their sensor lights across my entire home. The energy savings are real — my electricity bill dropped by 40%. Plus they look premium!',
    avatar: 'PP',
  },
  {
    name: 'Amit Kumar',
    role: 'Facility Manager, Tech Park',
    rating: 5,
    text: 'We retrofitted our entire office complex with ElectricEye panels and tube lights. 3 years running, zero failures. That 5-year warranty gives real peace of mind.',
    avatar: 'AK',
  },
  {
    name: 'Sneha Gupta',
    role: 'Architect',
    rating: 4,
    text: 'The color temperature range on their LED bulbs is perfect for mood lighting. My clients always ask where I source from. Highly recommend for commercial projects.',
    avatar: 'SG',
  },
];

const team = [
  { name: 'Vikram Mehta', role: 'Founder & CEO', initials: 'VM' },
  { name: 'Ananya Reddy', role: 'Head of Design', initials: 'AR' },
  { name: 'Rajesh Khanna', role: 'Chief Engineer', initials: 'RK' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 hero-bg overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
              <Shield className="h-4 w-4" />
              <span>Trusted Since 2024</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Lighting the Future with{' '}
              <span className="gradient-text">Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              ElectricEye is India&apos;s leading provider of premium LED lighting solutions. 
              We combine cutting-edge technology with sustainable design to illuminate every space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border/50 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Why Trust ElectricEye"
            subtitle="Certified quality, proven reliability, and unwavering commitment to excellence"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <badge.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{badge.title}</h3>
                  <p className="text-sm text-muted-foreground">{badge.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors / Partners */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Partners"
            subtitle="Trusted by leading brands across the industry"
          />
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {sponsors.map((sponsor) => (
              <motion.div
                key={sponsor.name}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors cursor-pointer"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {sponsor.initials}
                </div>
                <span className="font-semibold text-foreground text-lg">{sponsor.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Meet the Team"
            subtitle="The visionaries behind ElectricEye"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-primary-foreground text-2xl font-bold">
                  {member.initials}
                </div>
                <h3 className="font-semibold text-foreground text-lg">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="What Our Customers Say"
            subtitle="Real reviews from real people"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border/50 relative"
              >
                <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-muted'}`}
                    />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">{review.text}</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-foreground font-semibold">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ready to Light Up Your Space?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join 50,000+ satisfied customers. Experience the ElectricEye difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/products" className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
                Shop Now
              </a>
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-border hover:bg-muted transition-colors text-foreground">
                Contact Sales
              </a>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Free Shipping
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> 5 Year Warranty
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Easy Returns
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}