import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, ArrowLeft, Package, Star, ShoppingCart, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function StarterKitsPage() {
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
                src="/images/starter-kit-product.png"
                width={600}
                height={500}
                alt="Starter Garden Kit"
                className="aspect-square overflow-hidden rounded-xl object-cover"
              />
              <div className="grid grid-cols-4 gap-4">
                <Image
                  src="/images/starter-kit-planters.png"
                  width={150}
                  height={150}
                  alt="Planters"
                  className="aspect-square overflow-hidden rounded-lg object-cover cursor-pointer hover:opacity-80"
                />
                <Image
                  src="/images/starter-kit-tools.png"
                  width={150}
                  height={150}
                  alt="Tools"
                  className="aspect-square overflow-hidden rounded-lg object-cover cursor-pointer hover:opacity-80"
                />
                <Image
                  src="/images/starter-kit-seeds.png"
                  width={150}
                  height={150}
                  alt="Seeds"
                  className="aspect-square overflow-hidden rounded-lg object-cover cursor-pointer hover:opacity-80"
                />
                <Image
                  src="/images/starter-kit-soil.png"
                  width={150}
                  height={150}
                  alt="Soil"
                  className="aspect-square overflow-hidden rounded-lg object-cover cursor-pointer hover:opacity-80"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="border-green-200 text-green-700 mb-4">
                  Beginner Friendly
                </Badge>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Starter Garden Kit</h1>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(127 reviews)</span>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-green-600">₹2,999</span>
                  <span className="text-lg text-gray-500 line-through">₹3,999</span>
                  <Badge className="bg-red-100 text-red-800">25% OFF</Badge>
                </div>
                <p className="text-gray-600 mb-6">
                  Everything you need to start your urban farming journey. This comprehensive kit includes planters,
                  premium soil, organic seeds, and essential tools - perfect for beginners who want to grow fresh
                  vegetables and herbs at home.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex space-x-4">
                  <Button size="lg" className="flex-1 bg-green-600 hover:bg-green-700">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button size="lg" variant="outline" className="border-green-200 text-green-700 bg-transparent">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="outline" size="lg" className="w-full bg-transparent">
                  Buy Now - Free Delivery
                </Button>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4">What's Included:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 6 Premium Planters (different sizes)</li>
                  <li>• 10kg Organic Potting Mix</li>
                  <li>• 8 Varieties of Organic Seeds</li>
                  <li>• Essential Gardening Tools Set</li>
                  <li>• Plant Care Guide & Calendar</li>
                  <li>• 30-day WhatsApp Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Package className="h-5 w-5 text-green-600" />
                  <span>Kit Contents</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Planters</span>
                    <span className="font-semibold">6 pieces</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Organic Seeds</span>
                    <span className="font-semibold">8 varieties</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Potting Mix</span>
                    <span className="font-semibold">10kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tools</span>
                    <span className="font-semibold">5 pieces</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Seed Varieties</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Tomato (Cherry)</li>
                  <li>• Lettuce (Butterhead)</li>
                  <li>• Spinach</li>
                  <li>• Coriander</li>
                  <li>• Mint</li>
                  <li>• Basil</li>
                  <li>• Chili (Green)</li>
                  <li>• Radish</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Growing Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Herbs</span>
                      <span className="text-sm font-semibold">2-3 weeks</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Leafy Greens</span>
                      <span className="text-sm font-semibold">4-6 weeks</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-1/2"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Tomatoes</span>
                      <span className="text-sm font-semibold">8-12 weeks</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-1/4"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
