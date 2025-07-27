import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, ArrowLeft, Star, ShoppingCart, Heart, Droplets, Zap, Maximize } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HydroponicTowersPage() {
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

      {/* Product Hero */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <Image
                src="/images/hydroponic-tower-product.png"
                width={600}
                height={500}
                alt="Hydroponic Tower System"
                className="aspect-square overflow-hidden rounded-xl object-cover"
              />
              <div className="grid grid-cols-4 gap-4">
                <Image
                  src="/images/hydroponic-tower-details.png"
                  width={150}
                  height={150}
                  alt="Tower Details"
                  className="aspect-square overflow-hidden rounded-lg object-cover cursor-pointer hover:opacity-80"
                />
                <Image
                  src="/images/hydroponic-tower-led.png"
                  width={150}
                  height={150}
                  alt="LED System"
                  className="aspect-square overflow-hidden rounded-lg object-cover cursor-pointer hover:opacity-80"
                />
                <Image
                  src="/images/hydroponic-tower-nutrients.png"
                  width={150}
                  height={150}
                  alt="Nutrient System"
                  className="aspect-square overflow-hidden rounded-lg object-cover cursor-pointer hover:opacity-80"
                />
                <Image
                  src="/images/hydroponic-tower-plants.png"
                  width={150}
                  height={150}
                  alt="Growing Plants"
                  className="aspect-square overflow-hidden rounded-lg object-cover cursor-pointer hover:opacity-80"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="border-blue-200 text-blue-700 mb-4">
                  Vertical Growing System
                </Badge>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Hydroponic Tower System</h1>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(89 reviews)</span>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-blue-600">₹15,999</span>
                  <span className="text-lg text-gray-500 line-through">₹19,999</span>
                  <Badge className="bg-red-100 text-red-800">20% OFF</Badge>
                </div>
                <p className="text-gray-600 mb-6">
                  Revolutionary vertical hydroponic system that maximizes growing space while minimizing water usage.
                  Perfect for growing leafy greens, herbs, and strawberries in minimal floor space with maximum
                  efficiency.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex space-x-4">
                  <Button size="lg" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button size="lg" variant="outline" className="border-blue-200 text-blue-700 bg-transparent">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="outline" size="lg" className="w-full bg-transparent">
                  Buy Now - Free Installation
                </Button>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4">Key Features:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 20 growing sites in vertical arrangement</li>
                  <li>• Automated nutrient circulation system</li>
                  <li>• Full spectrum LED grow lights included</li>
                  <li>• 90% less water usage than soil farming</li>
                  <li>• Compact 2x2 feet footprint</li>
                  <li>• Food-grade materials throughout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Hydroponic Towers?</h2>
            <p className="text-lg text-gray-600">Advanced features for maximum growing efficiency</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Droplets className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Water Efficient</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Recirculating system uses 90% less water than traditional farming while delivering optimal nutrition.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Maximize className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Space Maximizing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Grow 20 plants in just 4 square feet of floor space with our innovative vertical design.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Zap className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Energy Efficient</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  LED grow lights consume minimal electricity while providing optimal light spectrum for plant growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Dimensions & Capacity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Height</span>
                    <span className="font-semibold">6 feet</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Base Diameter</span>
                    <span className="font-semibold">2 feet</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Growing Sites</span>
                    <span className="font-semibold">20 sites</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reservoir Capacity</span>
                    <span className="font-semibold">50 liters</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>System Components</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• PVC tower structure</li>
                  <li>• Water circulation pump</li>
                  <li>• 24W LED grow light</li>
                  <li>• Timer control system</li>
                  <li>• Nutrient reservoir tank</li>
                  <li>• Growing medium (included)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Best Growing Options</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Lettuce & Leafy Greens</span>
                      <span className="text-sm font-semibold text-green-600">Excellent</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Herbs (Basil, Mint)</span>
                      <span className="text-sm font-semibold text-green-600">Excellent</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Strawberries</span>
                      <span className="text-sm font-semibold text-yellow-600">Good</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Package Includes</h2>
            <p className="text-lg text-gray-600">Everything you need to start growing immediately</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Tower System</h3>
                <p className="text-sm text-gray-600">Complete vertical growing structure with all fittings</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold mb-2">LED Grow Lights</h3>
                <p className="text-sm text-gray-600">Full spectrum LED system with timer control</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Growing Medium</h3>
                <p className="text-sm text-gray-600">Premium growing medium for all 20 planting sites</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Starter Kit</h3>
                <p className="text-sm text-gray-600">Seeds, nutrients, and pH testing kit included</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
