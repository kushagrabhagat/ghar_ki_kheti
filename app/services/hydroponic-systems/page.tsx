import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, ArrowLeft, CheckCircle, Clock, Users, Droplets, Zap, Beaker } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HydroponicSystemsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-green-800">Ghar ki Kheti</span>
          </Link>
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <Badge variant="outline" className="w-fit border-blue-200 text-blue-700">
                Soil-Free Technology
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                Advanced Hydroponic Systems
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Experience the future of farming with our cutting-edge hydroponic systems. Grow more with less space,
                water, and effort while achieving superior yields.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Explore Systems
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/hydroponic-systems-service.png"
                width={600}
                height={500}
                alt="Hydroponic Systems"
                className="aspect-[4/3] overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* System Types */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hydroponic System Types</h2>
            <p className="text-lg text-gray-600">Choose the perfect system for your space and growing needs</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Droplets className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Deep Water Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Roots suspended in nutrient-rich water solution with constant oxygenation for rapid growth.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Best for: Leafy greens, herbs</li>
                  <li>• Growth rate: 25-30% faster</li>
                  <li>• Maintenance: Low</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Zap className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Nutrient Film Technique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Thin film of nutrient solution flows continuously over roots in sloped channels.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Best for: Strawberries, lettuce</li>
                  <li>• Water efficiency: 90% less</li>
                  <li>• Space utilization: Maximum</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Beaker className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Ebb and Flow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Periodic flooding and draining cycles provide optimal root oxygenation and nutrition.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Best for: Tomatoes, peppers</li>
                  <li>• Versatility: High</li>
                  <li>• Yield increase: 40-50%</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hydroponic System Packages</h2>
            <p className="text-lg text-gray-600">Complete systems with everything you need to start growing</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Starter System</CardTitle>
                <div className="text-3xl font-bold text-blue-600">₹45,999</div>
                <p className="text-gray-600">Perfect for beginners</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• 6-plant DWC system</li>
                  <li>• LED grow lights</li>
                  <li>• Nutrient solutions (3 months)</li>
                  <li>• pH testing kit</li>
                  <li>• Setup & training</li>
                  <li>• 30-day support</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Choose Starter</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-600 shadow-lg">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-blue-600">Best Value</Badge>
                <CardTitle>Professional System</CardTitle>
                <div className="text-3xl font-bold text-blue-600">₹89,999</div>
                <p className="text-gray-600">For serious growers</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• 20-plant NFT system</li>
                  <li>• Full spectrum LED lights</li>
                  <li>• Automated nutrient dosing</li>
                  <li>• pH/EC monitoring</li>
                  <li>• Climate control system</li>
                  <li>• 90-day support</li>
                  <li>• Monthly maintenance</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Choose Professional</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Commercial System</CardTitle>
                <div className="text-3xl font-bold text-blue-600">₹1,99,999</div>
                <p className="text-gray-600">Maximum production</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• 50+ plant capacity</li>
                  <li>• Multi-tier growing system</li>
                  <li>• IoT monitoring & control</li>
                  <li>• Automated everything</li>
                  <li>• Environmental controls</li>
                  <li>• 1-year support</li>
                  <li>• Weekly maintenance</li>
                  <li>• Yield guarantee</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Choose Commercial</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Hydroponics?</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">90% Less Water Usage</h3>
                      <p className="text-gray-600">
                        Recirculating nutrient solutions dramatically reduce water consumption compared to soil farming.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">3x Faster Growth</h3>
                      <p className="text-gray-600">
                        Direct nutrient delivery to roots accelerates plant growth and reduces harvest time.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">No Soil-Borne Diseases</h3>
                      <p className="text-gray-600">
                        Eliminate soil-related pests and diseases for healthier, more productive plants.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Year-Round Growing</h3>
                      <p className="text-gray-600">
                        Controlled environment allows for continuous production regardless of weather conditions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>Installation Process</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>System Design</span>
                    <span className="text-blue-600 font-semibold">1-2 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Equipment Setup</span>
                    <span className="text-blue-600 font-semibold">1 day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>System Testing</span>
                    <span className="text-blue-600 font-semibold">1 day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Training & Handover</span>
                    <span className="text-blue-600 font-semibold">Half day</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span>Expert Support</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Hydroponic specialists on call</li>
                    <li>• Nutrient solution management</li>
                    <li>• System optimization guidance</li>
                    <li>• Troubleshooting support</li>
                    <li>• Crop planning assistance</li>
                    <li>• Performance monitoring</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
