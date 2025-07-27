import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, ArrowLeft, CheckCircle, Clock, Users, Sun, Thermometer, Droplets } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RooftopFarmingPage() {
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <Badge variant="outline" className="w-fit border-yellow-200 text-yellow-700">
                Large Scale Solution
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                Rooftop Farming Solutions
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Transform your rooftop into a productive farm with our comprehensive large-scale farming solutions.
                Maximize space utilization and yield with professional-grade systems.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                  Schedule Site Visit
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-yellow-200 text-yellow-700 hover:bg-yellow-50 bg-transparent"
                >
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/rooftop-farming-service.png"
                width={600}
                height={500}
                alt="Rooftop Farming Setup"
                className="aspect-[4/3] overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Rooftop Farming?</h2>
            <p className="text-lg text-gray-600">Maximize your space potential with professional farming solutions</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Sun className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Optimal Sunlight</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rooftops receive maximum sunlight exposure throughout the day, perfect for photosynthesis and plant
                  growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Thermometer className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Climate Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Advanced climate control systems maintain optimal growing conditions year-round for maximum yield.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Droplets className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Water Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Integrated rainwater harvesting and efficient irrigation systems reduce water consumption by 40%.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Rooftop Farming Packages</h2>
            <p className="text-lg text-gray-600">Scalable solutions for different rooftop sizes and requirements</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Compact Rooftop</CardTitle>
                <div className="text-3xl font-bold text-yellow-600">₹89,999</div>
                <p className="text-gray-600">Up to 500 sq ft</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• 20-30 growing beds</li>
                  <li>• Basic irrigation system</li>
                  <li>• Shade structures</li>
                  <li>• 50+ plants included</li>
                  <li>• 3-month support</li>
                  <li>• Monthly maintenance</li>
                </ul>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700">Choose Compact</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-600 shadow-lg">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-yellow-600">Most Popular</Badge>
                <CardTitle>Standard Rooftop</CardTitle>
                <div className="text-3xl font-bold text-yellow-600">₹1,89,999</div>
                <p className="text-gray-600">500-1000 sq ft</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• 50-80 growing beds</li>
                  <li>• Advanced drip irrigation</li>
                  <li>• Climate control structures</li>
                  <li>• 100+ plants included</li>
                  <li>• 6-month support</li>
                  <li>• Bi-weekly maintenance</li>
                  <li>• Rainwater harvesting</li>
                </ul>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700">Choose Standard</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Premium Rooftop</CardTitle>
                <div className="text-3xl font-bold text-yellow-600">₹3,99,999</div>
                <p className="text-gray-600">1000+ sq ft</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• 100+ growing beds</li>
                  <li>• Smart irrigation system</li>
                  <li>• Greenhouse structures</li>
                  <li>• 200+ plants included</li>
                  <li>• 12-month support</li>
                  <li>• Weekly maintenance</li>
                  <li>• IoT monitoring system</li>
                  <li>• Solar power integration</li>
                </ul>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700">Choose Premium</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Setup Included</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Structural Assessment</h3>
                      <p className="text-gray-600">
                        Professional evaluation of rooftop load capacity and structural integrity.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Growing Infrastructure</h3>
                      <p className="text-gray-600">
                        Raised beds, growing containers, and support structures designed for rooftop conditions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Weather Protection</h3>
                      <p className="text-gray-600">
                        Shade nets, wind barriers, and protective structures for harsh weather conditions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Professional Installation</h3>
                      <p className="text-gray-600">
                        Expert team handles complete installation with minimal disruption to your routine.
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
                    <Clock className="h-5 w-5 text-yellow-600" />
                    <span>Project Timeline</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Site Assessment</span>
                    <span className="text-yellow-600 font-semibold">2-3 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Design & Planning</span>
                    <span className="text-yellow-600 font-semibold">1 week</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Material Procurement</span>
                    <span className="text-yellow-600 font-semibold">1-2 weeks</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Installation & Setup</span>
                    <span className="text-yellow-600 font-semibold">3-5 days</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-yellow-600" />
                    <span>Ongoing Support</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Dedicated project manager</li>
                    <li>• 24/7 WhatsApp support</li>
                    <li>• Regular maintenance visits</li>
                    <li>• Seasonal crop planning</li>
                    <li>• Pest and disease management</li>
                    <li>• Yield optimization guidance</li>
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
