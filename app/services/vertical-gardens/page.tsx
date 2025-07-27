import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, ArrowLeft, CheckCircle, Clock, Users, TreePine, Maximize, Home } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function VerticalGardensPage() {
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <Badge variant="outline" className="w-fit border-emerald-200 text-emerald-700">
                Space-Saving Innovation
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                Vertical Garden Solutions
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Maximize your growing potential with innovative vertical gardening systems. Perfect for small spaces,
                walls, and urban environments where every square foot counts.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Design My Garden
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
                >
                  View Gallery
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/vertical-garden-service.png"
                width={600}
                height={500}
                alt="Vertical Garden Solutions"
                className="aspect-[4/3] overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Garden Types */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vertical Garden Types</h2>
            <p className="text-lg text-gray-600">Choose the perfect vertical solution for your space</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <TreePine className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Living Walls</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Transform any wall into a lush green space with our modular living wall systems.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Modular panel design</li>
                  <li>• Integrated irrigation</li>
                  <li>• Indoor/outdoor options</li>
                  <li>• Easy maintenance access</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Maximize className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Tower Gardens</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cylindrical growing towers that maximize vertical space for herbs and vegetables.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 360-degree growing</li>
                  <li>• Rotating options available</li>
                  <li>• High plant density</li>
                  <li>• Compact footprint</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Home className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle>Pocket Gardens</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Individual planting pockets arranged vertically for herbs and small vegetables.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Flexible arrangement</li>
                  <li>• Easy plant replacement</li>
                  <li>• Perfect for herbs</li>
                  <li>• Decorative options</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vertical Garden Packages</h2>
            <p className="text-lg text-gray-600">Complete vertical solutions for every space and budget</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Compact Wall</CardTitle>
                <div className="text-3xl font-bold text-emerald-600">₹18,999</div>
                <p className="text-gray-600">4x4 feet coverage</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• 16 planting pockets</li>
                  <li>• Drip irrigation system</li>
                  <li>• Mounting hardware</li>
                  <li>• 20 plants included</li>
                  <li>• Installation service</li>
                  <li>• 30-day care guide</li>
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Choose Compact</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-600 shadow-lg">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-emerald-600">Popular Choice</Badge>
                <CardTitle>Standard Wall</CardTitle>
                <div className="text-3xl font-bold text-emerald-600">₹35,999</div>
                <p className="text-gray-600">6x8 feet coverage</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• 48 planting pockets</li>
                  <li>• Automated irrigation</li>
                  <li>• LED grow lights</li>
                  <li>• 50 plants included</li>
                  <li>• Professional installation</li>
                  <li>• 60-day support</li>
                  <li>• Monthly maintenance</li>
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Choose Standard</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Premium Wall</CardTitle>
                <div className="text-3xl font-bold text-emerald-600">₹65,999</div>
                <p className="text-gray-600">8x10 feet coverage</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• 80 planting pockets</li>
                  <li>• Smart irrigation system</li>
                  <li>• Full spectrum LED lights</li>
                  <li>• 80+ plants included</li>
                  <li>• Custom design consultation</li>
                  <li>• 90-day support</li>
                  <li>• Bi-weekly maintenance</li>
                  <li>• Plant replacement warranty</li>
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Choose Premium</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits & Features */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Vertical Garden Benefits</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Space Efficiency</h3>
                      <p className="text-gray-600">
                        Grow 10x more plants in the same floor space compared to traditional gardening.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Better Air Quality</h3>
                      <p className="text-gray-600">
                        Living walls naturally purify air and increase oxygen levels in your space.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Easy Harvesting</h3>
                      <p className="text-gray-600">
                        Eye-level growing makes maintenance and harvesting comfortable and accessible.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Aesthetic Appeal</h3>
                      <p className="text-gray-600">
                        Transform blank walls into beautiful, productive green spaces that enhance your environment.
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
                    <Clock className="h-5 w-5 text-emerald-600" />
                    <span>Installation Timeline</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Site Assessment</span>
                    <span className="text-emerald-600 font-semibold">1 day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Custom Design</span>
                    <span className="text-emerald-600 font-semibold">2-3 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>System Installation</span>
                    <span className="text-emerald-600 font-semibold">1-2 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Plant Installation</span>
                    <span className="text-emerald-600 font-semibold">Half day</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-emerald-600" />
                    <span>Maintenance Support</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Regular health check-ups</li>
                    <li>• Pruning and trimming service</li>
                    <li>• Nutrient management</li>
                    <li>• Plant replacement as needed</li>
                    <li>• Irrigation system maintenance</li>
                    <li>• Seasonal plant rotation</li>
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
