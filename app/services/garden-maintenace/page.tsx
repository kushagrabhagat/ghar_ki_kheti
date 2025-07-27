import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, ArrowLeft, CheckCircle, Clock, Users, Scissors, Calendar, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GardenMaintenancePage() {
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <Badge variant="outline" className="w-fit border-purple-200 text-purple-700">
                Professional Care
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                Garden Maintenance Services
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Keep your urban farm thriving year-round with our professional maintenance services. From routine care
                to seasonal optimization, we ensure your garden stays healthy and productive.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Schedule Service
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-200 text-purple-700 hover:bg-purple-50 bg-transparent"
                >
                  View Plans
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/garden-maintenance-service.png"
                width={600}
                height={500}
                alt="Garden Maintenance Services"
                className="aspect-[4/3] overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Care Services</h2>
            <p className="text-lg text-gray-600">Everything your garden needs to stay healthy and productive</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Scissors className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Pruning & Trimming</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Regular pruning to promote healthy growth, increase yields, and maintain plant shape.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Deadheading flowers</li>
                  <li>• Removing diseased parts</li>
                  <li>• Shape maintenance</li>
                  <li>• Growth optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Calendar className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Seasonal Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Seasonal adjustments to keep your garden thriving through changing weather conditions.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Seasonal plant rotation</li>
                  <li>• Weather protection setup</li>
                  <li>• Fertilization schedules</li>
                  <li>• Harvest planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Shield className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Pest & Disease Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Proactive monitoring and organic treatment of pests and diseases to protect your crops.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Regular health inspections</li>
                  <li>• Organic pest control</li>
                  <li>• Disease prevention</li>
                  <li>• Beneficial insect introduction</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Maintenance Plans</h2>
            <p className="text-lg text-gray-600">Choose the level of care that fits your garden's needs</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Basic Care</CardTitle>
                <div className="text-3xl font-bold text-purple-600">₹2,999</div>
                <p className="text-gray-600">Per month</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• Monthly garden visit</li>
                  <li>• Basic pruning & trimming</li>
                  <li>• Watering system check</li>
                  <li>• Plant health assessment</li>
                  <li>• WhatsApp support</li>
                  <li>• Seasonal advice</li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Choose Basic</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-600 shadow-lg">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-purple-600">Most Popular</Badge>
                <CardTitle>Premium Care</CardTitle>
                <div className="text-3xl font-bold text-purple-600">₹5,999</div>
                <p className="text-gray-600">Per month</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• Bi-weekly garden visits</li>
                  <li>• Complete pruning service</li>
                  <li>• Fertilization program</li>
                  <li>• Pest & disease monitoring</li>
                  <li>• Plant replacement (if needed)</li>
                  <li>• Harvest assistance</li>
                  <li>• 24/7 expert support</li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Choose Premium</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Complete Care</CardTitle>
                <div className="text-3xl font-bold text-purple-600">₹9,999</div>
                <p className="text-gray-600">Per month</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• Weekly garden visits</li>
                  <li>• Full maintenance service</li>
                  <li>• Organic fertilization</li>
                  <li>• Advanced pest control</li>
                  <li>• Seasonal plant rotation</li>
                  <li>• Yield optimization</li>
                  <li>• Equipment maintenance</li>
                  <li>• Dedicated garden manager</li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Choose Complete</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Take Care Of</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Plant Health Monitoring</h3>
                      <p className="text-gray-600">
                        Regular assessment of plant health, growth patterns, and early detection of issues.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Irrigation System Maintenance</h3>
                      <p className="text-gray-600">
                        Cleaning, adjusting, and optimizing your watering systems for efficient operation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Soil & Nutrient Management</h3>
                      <p className="text-gray-600">
                        Testing soil quality, adjusting pH levels, and providing appropriate fertilization.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Equipment Servicing</h3>
                      <p className="text-gray-600">
                        Regular maintenance of pumps, timers, and other garden equipment to ensure longevity.
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
                    <Clock className="h-5 w-5 text-purple-600" />
                    <span>Service Schedule</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Spring Setup</span>
                    <span className="text-purple-600 font-semibold">March-April</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Summer Care</span>
                    <span className="text-purple-600 font-semibold">May-August</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Monsoon Protection</span>
                    <span className="text-purple-600 font-semibold">June-September</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Winter Preparation</span>
                    <span className="text-purple-600 font-semibold">October-February</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    <span>Expert Team</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Certified horticulturists</li>
                    <li>• Organic farming specialists</li>
                    <li>• Pest management experts</li>
                    <li>• Irrigation technicians</li>
                    <li>• Plant pathologists</li>
                    <li>• Customer support team</li>
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
