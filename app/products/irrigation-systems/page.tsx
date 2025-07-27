import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, ArrowLeft, Star, ShoppingCart, Heart, Droplets, Timer, Settings } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function IrrigationSystemsPage() {
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
                src="/images/irrigation-system-product.png"
                width={600}
                height={500}
                alt="Irrigation Systems"
                className="aspect-square overflow-hidden rounded-xl object-cover"
              />
              <div className="grid grid-cols-4 gap-4">
                <Image
                  src="/images/drip-irrigation.png"
                  width={150}
                  height={150}
                  alt="Drip Irrigation"
                  className="aspect-square overflow-hidden rounded-lg object-cover cursor-pointer hover:opacity-80"
                />
                <Image
                  src="/images/timer-system.png"
                  width={150}
                  height={150}
                  alt="Timer System"
                  className="aspect-square overflow-hidden rounded-lg object-cover cursor-pointer hover:opacity-80"
                />
                <Image
                  src="/images/water-pump.png"
                  width={150}
                  height={150}
                  alt="Water Pump"
                  className="aspect-square overflow-hidden rounded-lg object-cover cursor-pointer hover:opacity-80"
                />
                <Image
                  src="/images/irrigation-tubing.png"
                  width={150}
                  height={150}
                  alt="Irrigation Tubing"
                  className="aspect-square overflow-hidden rounded-lg object-cover cursor-pointer hover:opacity-80"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="border-blue-200 text-blue-700 mb-4">
                  Automated System
                </Badge>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Irrigation Systems</h1>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(167 reviews)</span>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-blue-600">₹5,999</span>
                  <span className="text-lg text-gray-500 line-through">₹7,999</span>
                  <Badge className="bg-red-100 text-red-800">25% OFF</Badge>
                </div>
                <p className="text-gray-600 mb-6">
                  Automated drip irrigation systems for efficient water management in your urban farm. Save time,
                  conserve water, and ensure consistent plant hydration with our precision irrigation technology.
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
                <h3 className="font-semibold mb-4">System Includes:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Programmable Timer Controller</li>
                  <li>• 50m Drip Irrigation Tubing</li>
                  <li>• 20 Adjustable Drippers</li>
                  <li>• Water Pump & Reservoir Tank</li>
                  <li>• Pressure Regulator & Filter</li>
                  <li>• Installation Kit & Manual</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Features */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">System Features</h2>
            <p className="text-lg text-gray-600">Advanced irrigation technology for urban farming</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Droplets className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Water Efficient</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Drip irrigation delivers water directly to plant roots, reducing waste by up to 50%.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Precise water delivery</li>
                  <li>• Reduces evaporation</li>
                  <li>• Prevents overwatering</li>
                  <li>• Conserves water resources</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Timer className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Automated Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Programmable timer system waters your plants automatically, even when you're away.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Multiple daily cycles</li>
                  <li>• Adjustable duration</li>
                  <li>• Battery backup</li>
                  <li>• Easy programming</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Settings className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Customizable Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Flexible system design adapts to any garden layout and plant requirements.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Modular components</li>
                  <li>• Expandable design</li>
                  <li>• Adjustable flow rates</li>
                  <li>• Easy maintenance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
