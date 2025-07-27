"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Leaf,
  Sun,
  Droplets,
  Users,
  MapPin,
  Calendar,
  Phone,
  Mail,
  MapPinIcon,
  ArrowRight,
  Sprout,
  TreePine,
  Flower2,
  Scissors,
  Package,
  Wrench,
  Menu,
  X,
  Star,
  Award,
  Shield,
  Zap,
  Settings,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const [refAbout, inViewAbout] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [refServices, inViewServices] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [refProducts, inViewProducts] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [refUnique, inViewUnique] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [refPortfolio, inViewPortfolio] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [refServe, inViewServe] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [refHow, inViewHow] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [refContact, inViewContact] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const services = [
    {
      title: "Balcony Garden Setup",
      description: "Transform your balcony into a productive garden space with custom planters and irrigation systems.",
      icon: Leaf,
      href: "/services/balcony-garden",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Rooftop Farming",
      description: "Large-scale rooftop farming solutions for maximum yield and sustainability.",
      icon: Sun,
      href: "/services/rooftop-farming",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      title: "Hydroponic Systems",
      description: "Soil-free growing systems that maximize space efficiency and crop yield.",
      icon: Droplets,
      href: "/services/hydroponic-systems",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Vertical Gardens",
      description: "Space-saving vertical growing solutions perfect for urban environments.",
      icon: TreePine,
      href: "/services/vertical-gardens",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      title: "Garden Maintenance",
      description: "Ongoing care and maintenance services to keep your garden thriving year-round.",
      icon: Scissors,
      href: "/services/garden-maintenance",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Consultation Services",
      description: "Expert advice and planning for your urban farming project from start to finish.",
      icon: Users,
      href: "/services/consultation",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  const products = [
    {
      title: "Starter Garden Kits",
      description: "Complete beginner-friendly kits with everything needed to start your urban farm.",
      icon: Package,
      href: "/products/starter-kits",
      price: "₹2,999",
      image: "/images/starter-kit-product.png",
      rating: 4.8,
      reviews: 127,
    },
    {
      title: "Hydroponic Towers",
      description: "Vertical hydroponic systems for maximum space efficiency and yield.",
      icon: Droplets,
      href: "/products/hydroponic-towers",
      price: "₹15,999",
      image: "/images/hydroponic-tower-product.png",
      rating: 4.9,
      reviews: 89,
    },
    {
      title: "Smart Planters",
      description: "IoT-enabled planters with automated watering and monitoring systems.",
      icon: Wrench,
      href: "/products/smart-planters",
      price: "₹8,999",
      image: "/images/smart-planter-product.png",
      rating: 4.7,
      reviews: 156,
    },
    {
      title: "Organic Seeds Collection",
      description: "Premium organic seeds specially selected for urban farming conditions.",
      icon: Sprout,
      href: "/products/seeds-collection",
      price: "₹499",
      image: "/images/seeds-collection-product.png",
      rating: 4.9,
      reviews: 234,
    },
    {
      title: "Growing Medium Sets",
      description: "High-quality soil mixes and growing mediums for optimal plant growth.",
      icon: Flower2,
      href: "/products/growing-medium",
      price: "₹1,299",
      image: "/images/growing-medium-product.png",
      rating: 4.6,
      reviews: 189,
    },
    {
      title: "Irrigation Systems",
      description: "Automated drip irrigation systems for efficient water management.",
      icon: Droplets,
      href: "/products/irrigation-systems",
      price: "₹5,999",
      image: "/images/irrigation-system-product.png",
      rating: 4.8,
      reviews: 167,
    },
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Enhanced Header */}
      <motion.header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg supports-[backdrop-filter]:bg-white/80"
            : "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Leaf className="h-8 w-8 text-green-600" />
            </motion.div>
            <span className="text-2xl font-bold text-green-800">Ghar ki Kheti</span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Services", "Products", "Portfolio", "Contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium hover:text-green-600 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-green-600 hover:bg-green-700 hidden md:block">Get Started</Button>
            </motion.div>

            <motion.button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t bg-white"
            >
              <div className="container py-4 space-y-4">
                {["Home", "About", "Services", "Products", "Portfolio", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-sm font-medium hover:text-green-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
                <Button className="w-full bg-green-600 hover:bg-green-700">Get Started</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Enhanced Hero Section */}
      <motion.section
        id="home"
        className="relative py-20 lg:py-32 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-emerald-300 rounded-full opacity-30"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-teal-200 rounded-full opacity-25"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />

        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                  <Badge variant="outline" className="w-fit border-green-200 text-green-700 bg-white/50 backdrop-blur">
                    <Leaf className="w-3 h-3 mr-1" />
                    Your Flora, Our Expertise
                  </Badge>
                </motion.div>

                <motion.h1
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Explore your journey towards urban farming with{" "}
                  <motion.span
                    className="text-green-600 relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Ghar ki Kheti's
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-green-200 rounded"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1.3 }}
                    />
                  </motion.span>{" "}
                  expert guidance
                </motion.h1>

                <motion.p
                  className="max-w-[600px] text-gray-600 md:text-xl"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Transform your urban space into a thriving farm. From balconies to rooftops, we help you grow fresh,
                  chemical-free food right at home.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col gap-2 min-[400px]:flex-row"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(34, 197, 94, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 shadow-lg">
                    <Sprout className="w-4 h-4 mr-2" />
                    Start Your Farm Journey
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-green-200 text-green-700 hover:bg-green-50 bg-white/50 backdrop-blur"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="flex items-center justify-center"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.02, rotate: 1 }} transition={{ duration: 0.3 }} className="relative">
                <Image
                  src="/images/hero-urban-farming.png"
                  width={600}
                  height={500}
                  alt="Urban farming setup"
                  className="aspect-[4/3] overflow-hidden rounded-xl object-cover shadow-2xl"
                />
                <motion.div
                  className="absolute -top-4 -right-4 bg-green-600 text-white p-3 rounded-full shadow-lg"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Leaf className="w-6 h-6" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced About Us Section */}
      <motion.section
        id="about"
        className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-green-50"
        ref={refAbout}
        variants={containerVariants}
        initial="hidden"
        animate={inViewAbout ? "visible" : "hidden"}
      >
        <div className="container px-4 md:px-6">
          <motion.div className="mx-auto max-w-3xl text-center mb-16" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-6"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Users className="w-8 h-8" />
            </motion.div>

            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-4"
              variants={itemVariants}
            >
              About Us
            </motion.h2>

            <motion.p className="text-lg text-gray-600 leading-relaxed" variants={itemVariants}>
              We believe fresh food should be grown, not bought. In the rush of urban life, we help families pause,
              reconnect with nature, and experience the simple satisfaction of growing what they eat.
            </motion.p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.p
                className="text-gray-600 leading-relaxed text-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                From balconies to rooftops, we turn unused spaces into living, breathing farms. With the right tools,
                guidance, and care - anyone can become a home farmer. You bring curiosity, we bring everything else.
              </motion.p>

              <motion.p
                className="text-gray-600 leading-relaxed text-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Built by people who love both soil and solutions, we're here to make farming feel easy, beautiful, and
                truly yours.
              </motion.p>

              <motion.div className="flex flex-wrap gap-4" variants={containerVariants}>
                {[
                  { icon: Shield, text: "Expert Guidance" },
                  { icon: Star, text: "Personalized Setup" },
                  { icon: Zap, text: "Ongoing Support" },
                ].map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconComponent className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium">{item.text}</span>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>

            <motion.div
              className="flex justify-center"
              variants={itemVariants}
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <Image
                  src="/images/about-family-farming.png"
                  width={500}
                  height={400}
                  alt="Family farming"
                  className="aspect-[5/4] overflow-hidden rounded-xl object-cover shadow-2xl"
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg"
                  initial={{ scale: 0 }}
                  animate={inViewAbout ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Growing Fresh</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Services Section */}
      <motion.section
        id="services"
        className="py-20 lg:py-32 bg-white"
        ref={refServices}
        variants={containerVariants}
        initial="hidden"
        animate={inViewServices ? "visible" : "hidden"}
      >
        <div className="container px-4 md:px-6">
          <motion.div className="mx-auto max-w-3xl text-center mb-16" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-6"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Wrench className="w-8 h-8" />
            </motion.div>

            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-4"
              variants={itemVariants}
            >
              Our Services
            </motion.h2>

            <motion.p className="text-lg text-gray-600" variants={itemVariants}>
              Comprehensive urban farming solutions tailored to your space and needs
            </motion.p>
          </motion.div>

          <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" variants={containerVariants}>
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div key={index} variants={cardVariants}>
                  <Link href={service.href}>
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        y: -10,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="h-full"
                    >
                      <Card
                        className={`border-0 shadow-lg overflow-hidden h-full cursor-pointer group ${service.bgColor} hover:shadow-2xl transition-all duration-300`}
                      >
                        <CardHeader className="relative">
                          <div className="flex items-center justify-between">
                            <motion.div
                              className={`p-3 rounded-lg bg-white shadow-md ${service.color}`}
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                            >
                              <IconComponent className="h-6 w-6" />
                            </motion.div>

                            <motion.div
                              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              whileHover={{ x: 5 }}
                            >
                              <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                            </motion.div>
                          </div>

                          <CardTitle className="group-hover:text-green-600 transition-colors text-xl">
                            {service.title}
                          </CardTitle>
                        </CardHeader>

                        <CardContent>
                          <p className="text-gray-600 leading-relaxed">{service.description}</p>

                          <motion.div
                            className="mt-4 flex items-center text-sm text-green-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ x: 5 }}
                          >
                            Learn more <ArrowRight className="w-4 h-4 ml-1" />
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Products Section */}
      <motion.section
        id="products"
        className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50"
        ref={refProducts}
        variants={containerVariants}
        initial="hidden"
        animate={inViewProducts ? "visible" : "hidden"}
      >
        <div className="container px-4 md:px-6">
          <motion.div className="mx-auto max-w-3xl text-center mb-16" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-6"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Package className="w-8 h-8" />
            </motion.div>

            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-4"
              variants={itemVariants}
            >
              Our Products
            </motion.h2>

            <motion.p className="text-lg text-gray-600" variants={itemVariants}>
              High-quality products and equipment for your urban farming journey
            </motion.p>
          </motion.div>

          <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" variants={containerVariants}>
            {products.map((product, index) => {
              const IconComponent = product.icon
              return (
                <motion.div key={index} variants={cardVariants}>
                  <Link href={product.href}>
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        y: -10,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="h-full"
                    >
                      <Card className="border-0 shadow-lg overflow-hidden h-full cursor-pointer group bg-white hover:shadow-2xl transition-all duration-300">
                        <motion.div
                          className="aspect-[4/3] overflow-hidden relative"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            src={product.image || "/placeholder.svg"}
                            width={300}
                            height={200}
                            alt={product.title}
                            className="object-cover w-full h-full"
                          />

                          <motion.div
                            className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                          >
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs font-medium">{product.rating}</span>
                            </div>
                          </motion.div>
                        </motion.div>

                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <motion.div
                              className="p-2 rounded-lg bg-green-100 text-green-600"
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                            >
                              <IconComponent className="h-5 w-5" />
                            </motion.div>

                            <div className="flex items-center space-x-2">
                              <motion.span className="text-lg font-bold text-green-600" whileHover={{ scale: 1.1 }}>
                                {product.price}
                              </motion.span>

                              <motion.div
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                whileHover={{ x: 5 }}
                              >
                                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                              </motion.div>
                            </div>
                          </div>

                          <CardTitle className="group-hover:text-green-600 transition-colors">
                            {product.title}
                          </CardTitle>
                        </CardHeader>

                        <CardContent>
                          <p className="text-gray-600 leading-relaxed mb-3">{product.description}</p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-gray-500">({product.reviews})</span>
                            </div>

                            <motion.div
                              className="flex items-center text-sm text-green-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              whileHover={{ x: 5 }}
                            >
                              View details <ArrowRight className="w-4 h-4 ml-1" />
                            </motion.div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced What Makes Us Unique */}
      <motion.section
        className="py-20 lg:py-32 bg-white"
        ref={refUnique}
        initial={{ opacity: 0 }}
        animate={inViewUnique ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container px-4 md:px-6">
          <motion.div className="mx-auto max-w-3xl text-center mb-16">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-6"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Award className="w-8 h-8" />
            </motion.div>

            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-4">
              What Makes Us Unique
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ghar Ki Kheti is not a garden kit - it's a personalized farming experience. We don't believe in
              one-size-fits-all.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Sun,
                title: "Tailored to Your Space",
                description:
                  "Every setup is crafted based on your space, sunlight, lifestyle, and aesthetic preferences.",
                color: "bg-yellow-50",
                iconColor: "text-yellow-600",
              },
              {
                icon: Calendar,
                title: "One-Day Installation",
                description:
                  "Our expert team installs everything in just one day, so you can start farming immediately.",
                color: "bg-blue-50",
                iconColor: "text-blue-600",
              },
              {
                icon: Phone,
                title: "30-Day Support",
                description: "Dedicated WhatsApp support for 30 days to ensure your farm thrives from day one.",
                color: "bg-green-50",
                iconColor: "text-green-600",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={inViewUnique ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card
                    className={`border-0 shadow-lg h-full ${feature.color} hover:shadow-2xl transition-all duration-300`}
                  >
                    <CardHeader>
                      <motion.div
                        className={`w-12 h-12 ${feature.iconColor} mb-4 bg-white rounded-lg flex items-center justify-center shadow-md`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent className="h-6 w-6" />
                      </motion.div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Vision & Mission */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100 h-full">
                <CardHeader>
                  <motion.div
                    className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Leaf className="w-6 h-6" />
                  </motion.div>
                  <CardTitle className="text-2xl text-green-800">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    At Ghar Ki Kheti, we empower individuals and families to grow their own food through personalized,
                    space-conscious hydroponic solutions. By blending simplicity, design, and expert care, we transform
                    urban spaces into vibrant farms - nurturing not just plants, but healthier, more connected lives.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 h-full">
                <CardHeader>
                  <motion.div
                    className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Star className="w-6 h-6" />
                  </motion.div>
                  <CardTitle className="text-2xl text-blue-800">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    To redefine urban living by making home farming a natural, joyful part of every household - where
                    every balcony, rooftop, or wall has the power to grow fresh, sustainable food and reconnect people
                    with nature.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Section */}
      <motion.section
        id="portfolio"
        className="py-20 lg:py-32 bg-white"
        ref={refPortfolio}
        variants={containerVariants}
        initial="hidden"
        animate={inViewPortfolio ? "visible" : "hidden"}
      >
        <div className="container px-4 md:px-6">
          <motion.div className="mx-auto max-w-3xl text-center mb-16" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-6"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <TreePine className="w-8 h-8" />
            </motion.div>

            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-4"
              variants={itemVariants}
            >
              Explore Our Home Farming Projects
            </motion.h2>

            <motion.p className="text-lg text-gray-600" variants={itemVariants}>
              Discover how we transform urban spaces into thriving green oases
            </motion.p>
          </motion.div>

          <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" variants={containerVariants}>
            {[
              {
                image: "/images/balcony-garden-portfolio.png",
                title: "Balcony Gardens",
                description:
                  "Transform your balcony into a flourishing green oasis, producing a variety of fruits, vegetables, and herbs right at home.",
                icon: Leaf,
              },
              {
                image: "/images/rooftop-farm-portfolio.png",
                title: "Rooftop Farms",
                description:
                  "Showcase the potential of creating thriving, sustainable farms in urban environments, providing fresh, chemical-free produce.",
                icon: Sun,
              },
              {
                image: "/images/hydroponic-setup-portfolio.png",
                title: "Hydroponic Setups",
                description:
                  "Innovative hydroponic setups combining cutting-edge technology with elegant design, enabling cultivation without soil.",
                icon: Droplets,
              },
            ].map((project, index) => {
              const IconComponent = project.icon
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="border-0 shadow-lg overflow-hidden h-full group hover:shadow-2xl transition-all duration-300">
                    <motion.div
                      className="aspect-[4/3] overflow-hidden relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        width={400}
                        height={300}
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />

                      <motion.div
                        className="absolute inset-0 bg-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                      >
                        <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full">
                          <span className="text-green-600 font-medium">View Project</span>
                        </div>
                      </motion.div>
                    </motion.div>

                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <motion.div
                          className="p-2 bg-green-100 rounded-lg"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <IconComponent className="h-5 w-5 text-green-600" />
                        </motion.div>
                        <span className="group-hover:text-green-600 transition-colors">{project.title}</span>
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{project.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Who We Serve */}
      <motion.section
        className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-green-50"
        ref={refServe}
        initial={{ opacity: 0 }}
        animate={inViewServe ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container px-4 md:px-6">
          <motion.div className="mx-auto max-w-3xl text-center mb-16">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-6"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Users className="w-8 h-8" />
            </motion.div>

            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-4">
              Who We Serve
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We bring home farming to urban lifestyles. Whether you're someone who loves gardening, an elder looking to
              spend your day meaningfully, or a family that values fresh, chemical-free vegetables - Ghar Ki Kheti is
              for you.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: "Families",
                description: "Families who value fresh, chemical-free vegetables for their loved ones",
                color: "bg-blue-50",
              },
              {
                icon: Leaf,
                title: "Garden Enthusiasts",
                description: "People who love gardening and want to expand their green thumb",
                color: "bg-green-50",
              },
              {
                icon: Sun,
                title: "Sustainability Advocates",
                description: "Individuals who care about sustainability and growing their own food",
                color: "bg-yellow-50",
              },
              {
                icon: MapPin,
                title: "Urban Dwellers",
                description: "City residents who want to add a touch of green to their living space",
                color: "bg-purple-50",
              },
            ].map((audience, index) => {
              const IconComponent = audience.icon
              return (
                <motion.div
                  key={index}
                  className="text-center space-y-4"
                  initial={{ y: 50, opacity: 0 }}
                  animate={inViewServe ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card
                    className={`border-0 shadow-lg p-6 ${audience.color} hover:shadow-xl transition-all duration-300`}
                  >
                    <motion.div
                      className="mx-auto w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className="h-8 w-8" />
                    </motion.div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">{audience.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{audience.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Enhanced How It Works */}
      <motion.section
        className="py-16 lg:py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"
        ref={refHow}
        initial={{ opacity: 0 }}
        animate={inViewHow ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container px-4 md:px-6">
          <motion.div className="mx-auto max-w-3xl text-center mb-16">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-6"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Settings className="w-8 h-8" />
            </motion.div>

            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">Simple steps to transform your space into a thriving farm</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Pick Your Space",
                description: "Balcony, terrace, backyard, or rooftop - any space can become a farm.",
                icon: MapPin,
              },
              {
                step: "2",
                title: "We Visit & Plan",
                description: "Our team assesses your space, maps sunlight, and creates a customized layout.",
                icon: Users,
              },
              {
                step: "3",
                title: "We Set It Up",
                description:
                  "Our experts handle the full setup - from planters and soil to seedlings and irrigation - all in one day.",
                icon: Wrench,
              },
            ].map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={index}
                  className="text-center space-y-4"
                  initial={{ y: 50, opacity: 0 }}
                  animate={inViewHow ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="border-0 shadow-lg p-8 bg-white hover:shadow-xl transition-all duration-300">
                    <motion.div
                      className="mx-auto w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {step.step}
                    </motion.div>

                    <motion.div
                      className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Contact Section */}
      <motion.section
        id="contact"
        className="py-16 lg:py-24 bg-white"
        ref={refContact}
        variants={containerVariants}
        initial="hidden"
        animate={inViewContact ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container px-4 md:px-6">
          <motion.div className="mx-auto max-w-3xl text-center mb-16" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-6"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Phone className="w-8 h-8" />
            </motion.div>

            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-4"
              variants={itemVariants}
            >
              Ready to Start Your Farm?
            </motion.h2>

            <motion.p className="text-lg text-gray-600" variants={itemVariants}>
              Get in touch with us to begin your urban farming journey
            </motion.p>
          </motion.div>

          <motion.div className="grid gap-8 lg:grid-cols-2" variants={containerVariants}>
            <motion.div
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-0 shadow-lg h-full bg-gradient-to-br from-green-50 to-emerald-50">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <CardDescription className="text-lg">Reach out to us for a personalized consultation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { icon: Phone, text: "+91 98765 43210", color: "text-green-600" },
                    { icon: Mail, text: "hello@gharkikheti.com", color: "text-blue-600" },
                    { icon: MapPinIcon, text: "Mumbai, Maharashtra, India", color: "text-purple-600" },
                  ].map((contact, index) => {
                    const IconComponent = contact.icon
                    return (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm"
                        whileHover={{ x: 10, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className={`p-3 rounded-full bg-gray-100 ${contact.color}`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <IconComponent className="h-5 w-5" />
                        </motion.div>
                        <span className="text-lg">{contact.text}</span>
                      </motion.div>
                    )
                  })}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-0 shadow-lg h-full bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardHeader>
                  <CardTitle className="text-2xl">Get Started Today</CardTitle>
                  <CardDescription className="text-lg">
                    Schedule a free consultation to discuss your farming goals
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Free Consultation
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full border-green-200 text-green-700 hover:bg-green-50 bg-white/50 backdrop-blur text-lg py-6"
                    >
                      <Package className="w-5 h-5 mr-2" />
                      Download Brochure
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Footer */}
      <footer className="border-t bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              className="space-y-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Leaf className="h-6 w-6 text-green-600" />
                </motion.div>
                <span className="text-xl font-bold text-green-800">Ghar ki Kheti</span>
              </motion.div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Transforming urban spaces into thriving farms, one home at a time.
              </p>

              <div className="flex space-x-4">
                {[
                  { icon: Star, color: "text-yellow-500" },
                  { icon: Shield, color: "text-blue-500" },
                  { icon: Award, color: "text-purple-500" },
                ].map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.div
                      key={index}
                      className={`w-8 h-8 ${social.color} cursor-pointer`}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-full h-full" />
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {[
              {
                title: "Services",
                links: ["Balcony Gardens", "Rooftop Farms", "Hydroponic Setups", "Consultation"],
              },
              {
                title: "Company",
                links: ["About Us", "Our Mission", "Portfolio", "Contact"],
              },
              {
                title: "Legal",
                links: [
                  { text: "Privacy Policy", href: "/privacy-policy" },
                  "Terms of Service",
                  "WhatsApp Support",
                  "Email Us",
                ],
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                className="space-y-4"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-gray-900 text-lg">{section.title}</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {section.links.map((link, linkIndex) => (
                    <motion.li key={linkIndex} whileHover={{ x: 5, color: "#16a34a" }} transition={{ duration: 0.2 }}>
                      {typeof link === "object" ? (
                        <Link href={link.href} className="hover:text-green-600 transition-colors">
                          {link.text}
                        </Link>
                      ) : (
                        <span className="cursor-pointer hover:text-green-600 transition-colors">{link}</span>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="border-t mt-8 pt-8 text-center text-sm text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>&copy; {new Date().getFullYear()} Ghar ki Kheti. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
