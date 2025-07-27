import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, ArrowLeft, CheckCircle, Clock, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BalconyGardenPage() {
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <Badge variant="outline" className="w-fit border-green-200 text-green-700">
                Premium Service
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                Balcony Garden Setup
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Transform your balcony into a productive garden space with custom planters, irrigation systems, and
                expert guidance.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Book Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-200 text-green-700 hover:bg-green-50 bg-transparent"
                >
                  Get Quote
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/balcony-garden-service.png"
                width={600}
                height={500}
                alt="Balcony Garden Setup"
                className="aspect-[4/3] overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Included</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Custom Planter Design</h3>
                      <p className="text-gray-600">
                        Tailored planters that fit your balcony dimensions and aesthetic preferences.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Drip Irrigation System</h3>
                      <p className="text-gray-600">
                        Automated watering system to ensure optimal plant health with minimal effort.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Premium Growing Medium</h3>
                      <p className="text-gray-600">
                        High-quality soil mix and organic fertilizers for maximum plant growth.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Plant Selection & Setup</h3>
                      <p className="text-gray-600">
                        Expert selection of plants suitable for your climate and space conditions.
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
                    <Clock className="h-5 w-5 text-green-600" />
                    <span>Service Timeline</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Consultation & Planning</span>
                    <span className="text-green-600 font-semibold">1-2 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Material Procurement</span>
                    <span className="text-green-600 font-semibold">3-5 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Installation & Setup</span>
                    <span className="text-green-600 font-semibold">1 day</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-green-600" />
                    <span>Support Included</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 30-day WhatsApp support</li>
                    <li>• Weekly check-ins for first month</li>
                    <li>• Plant care guidance</li>
                    <li>• Troubleshooting assistance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Packages</h2>
            <p className="text-lg text-gray-600">Choose the package that best fits your balcony and budget</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Basic Setup</CardTitle>
                <div className="text-3xl font-bold text-green-600">₹12,999</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• Up to 6 planters</li>
                  <li>• Basic irrigation system</li>
                  <li>• 10 plants included</li>
                  <li>• 15-day support</li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">Choose Basic</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-600 shadow-lg">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-green-600">Most Popular</Badge>
                <CardTitle>Premium Setup</CardTitle>
                <div className="text-3xl font-bold text-green-600">₹24,999</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• Up to 12 planters</li>
                  <li>• Advanced drip irrigation</li>
                  <li>• 20 plants included</li>
                  <li>• 30-day support</li>
                  <li>• Monthly maintenance visit</li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">Choose Premium</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Deluxe Setup</CardTitle>
                <div className="text-3xl font-bold text-green-600">₹39,999</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• Unlimited planters</li>
                  <li>• Smart irrigation system</li>
                  <li>• 30+ plants included</li>
                  <li>• 60-day support</li>
                  <li>• Bi-weekly maintenance</li>
                  <li>• Custom design consultation</li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">Choose Deluxe</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
