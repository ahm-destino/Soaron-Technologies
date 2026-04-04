import { motion } from "motion/react";
import { 
  Sparkles, Rocket, Gamepad2, Brain, Palette, Music, Video, 
  Code, Star, Calendar, Users, CheckCircle, ArrowRight, 
  Zap, Trophy, Heart, Lightbulb, GraduationCap, Clock, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Video,
    title: "AI Video Creation",
    description: "Kids create stunning videos and visual stories using AI tools. Learn prompt engineering while bringing imagination to life.",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: Music,
    title: "AI Music Studio",
    description: "Compose original music about their passions using AI. From lyrics generation to beat making - become a mini music producer.",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
  },
  {
    icon: Code,
    title: "App Building",
    description: "Build real apps that solve problems! No-code and low-code platforms make it easy for kids to create functional applications.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Brain,
    title: "Train Your AI",
    description: "Teach AI to answer questions and help people. Understanding machine learning through fun, interactive projects.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Palette,
    title: "AI Digital Art",
    description: "Create cartoons, posters, and digital masterpieces with AI art tools. From DALL-E to Midjourney-style experiences for kids.",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Gamepad2,
    title: "Game Design",
    description: "Design and build games! Learn game mechanics, storytelling, and basic coding while creating playable experiences.",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-500/10",
  },
];

const ageGroups = [
  {
    range: "Ages 5-8",
    name: "Little Explorers",
    icon: Star,
    description: "Visual coding, creative play, and AI-assisted storytelling. Perfect for beginners!",
    color: "from-yellow-400 to-orange-400",
    duration: "2 weeks • 2 hrs/day",
  },
  {
    range: "Ages 9-12",
    name: "Junior Innovators",
    icon: Rocket,
    description: "Block-based coding, AI art creation, and intro to app building. Build confidence!",
    color: "from-cyan-400 to-blue-500",
    duration: "3 weeks • 3 hrs/day",
  },
  {
    range: "Ages 13-16",
    name: "Teen Creators",
    icon: Zap,
    description: "Real coding, AI model training, and advanced projects. Create portfolio-worthy work!",
    color: "from-purple-500 to-pink-500",
    duration: "4 weeks • 4 hrs/day",
  },
];

const testimonials = [
  {
    name: "Tunde, 11",
    quote: "I made my own game and an AI that tells jokes! Best summer ever!",
    avatar: "👦🏾",
  },
  {
    name: "Amara, 14",
    quote: "Created an app to help my mom track her plants. AI camp changed how I see tech!",
    avatar: "👩🏾",
  },
  {
    name: "Mrs. Adeyemi",
    quote: "My daughter went from consuming content to CREATING it. Absolutely transformational.",
    avatar: "👩🏾‍💼",
  },
];

const highlights = [
  "Expert instructors with child-friendly teaching methods",
  "Small groups (max 10 kids per instructor)",
  "Certificate of completion & portfolio showcase",
  "All equipment and software provided",
  "Lunch and healthy snacks included",
  "Parent progress updates every 3 days",
  "After-camp online community access",
  "Scholarships available for exceptional students",
];

export function SummerCamp() {
  return (
    <div className="min-h-screen bg-white" id="summer-camp">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-800 text-white">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[150px]" />
          
          {/* Floating Elements */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: "100%",
                opacity: 0 
              }}
              animate={{ 
                y: "-10%",
                opacity: [0, 1, 0],
              }}
              transition={{ 
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 10,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 pt-32 pb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4 text-yellow-300" />
                Summer 2026 Registration Now Open
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                  AI Summer
                </span>
                <br />
                <span className="text-white">Camp 2026</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl"
              >
                Where kids aged 5-16 learn to create with AI, build apps, make games, 
                and turn imagination into reality. 🚀
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white hover:opacity-90 rounded-full px-8 h-14 text-lg font-bold shadow-2xl shadow-yellow-500/25 group"
                >
                  <Rocket className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                  Enroll Your Child
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/50 bg-transparent text-white hover:bg-white/20 rounded-full px-8 h-14 text-lg"
                >
                  Watch Video
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8 text-sm text-white/60"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  April 1st - April 30th
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Lagos & Online
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Ages 5-16
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { icon: Video, label: "AI Videos", color: "bg-pink-500" },
                      { icon: Music, label: "Music", color: "bg-violet-500" },
                      { icon: Code, label: "Apps", color: "bg-cyan-500" },
                      { icon: Brain, label: "AI Models", color: "bg-emerald-500" },
                      { icon: Palette, label: "Art", color: "bg-orange-500" },
                      { icon: Gamepad2, label: "Games", color: "bg-red-500" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex flex-col items-center gap-2"
                      >
                        <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-xs font-medium text-white/80">{item.label}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-white/10 rounded-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex -space-x-2">
                        {["👦🏾", "👩🏾", "👦🏼", "👧🏾"].map((emoji, i) => (
                          <span key={i} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm border-2 border-purple-900">
                            {emoji}
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-white/80">+500 kids enrolled</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                      <span className="ml-2 text-sm text-white/80">4.9/5 from parents</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* What Kids Learn */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              <Lightbulb className="w-4 h-4" />
              What They'll Learn
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-4"
            >
              From Consumers to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Creators</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              We transform screen time into creation time. Your child will master cutting-edge AI tools while building real projects.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              <GraduationCap className="w-4 h-4" />
              Age-Appropriate Learning
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-4"
            >
              Programs for Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Age Group</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <motion.div
                key={group.range}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${group.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${group.color}`} />
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${group.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                      <group.icon className={`w-8 h-8 bg-gradient-to-r ${group.color} bg-clip-text`} style={{ color: 'transparent' }} />
                    </div>
                    <div className="text-sm font-medium text-gray-500 mb-1">{group.range}</div>
                    <h3 className="text-2xl font-bold mb-3">{group.name}</h3>
                    <p className="text-gray-600 mb-6">{group.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      {group.duration}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-violet-800 to-fuchsia-700 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              <Heart className="w-4 h-4 text-pink-300" />
              Parent & Kid Reviews
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold"
            >
              Loved by Kids & Parents
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
              >
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p className="text-lg mb-4 leading-relaxed">"{testimonial.quote}"</p>
                <div className="font-semibold text-white/80">— {testimonial.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Trophy className="w-4 h-4" />
                Why Choose Soar AI Camp
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Best</span> Summer Experience
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We go beyond coding. We build confidence, creativity, and future-ready skills that last a lifetime.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-cyan-100 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "500+", label: "Kids Taught" },
                    { value: "50+", label: "AI Projects" },
                    { value: "30+", label: "Expert Mentors" },
                    { value: "98%", label: "Satisfaction" },
                  ].map((stat, i) => (
                    <div key={stat.label} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center">
                      <div className="text-3xl font-bold text-purple-600">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-heading font-bold mb-6"
            >
              Ready to Give Your Child a Future-Ready Summer?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/90 mb-8"
            >
              Limited spots available. Early bird pricing ends March 31st.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-white/90 rounded-full px-10 h-16 text-lg font-bold shadow-2xl group"
              >
                <Rocket className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                Enroll Now - 20% Off
              </Button>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-sm text-white/60 mt-6"
            >
              Questions? WhatsApp us: +234 123 456 7890
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
}
