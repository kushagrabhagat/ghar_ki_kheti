import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, ArrowLeft, Star, ShoppingCart, Heart, Flower2, Beaker, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GrowingMediumPage() {
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
                src="/images/growing-medium-product.png"
                width={600}
                height={500}
                alt="Growing Medium Sets"
                className="aspect-square overflow-hidden rounded-xl object-cover"
              />
              <div className="grid grid-cols-4 gap-4">
                <Image
                  src="/images/potting-mix.png"
                  width={150}
                  height={150}
                  alt="Potting Mix"
                  className="aspect-square overflow-hidden rounded-lg object-cover cursor-pointer hover:opacity-80"
                />
                <Image
                  src="/images/compost.png"
                  width={150}
                  height={150}
                  alt="Organic Compost"
                  className="aspect-square overflow-hidden rounded-lg object-cover cursor-pointer hover:opacity-80"
                />
                <Image
                  src="/images/coco-peat.png"
                  width={150}
                  height={150}
                  alt="Coco Peat"
                  className="aspect-square overflow-hidden rounded-lg object-cover cursor-pointer hover:opacity-80"
                />
                <Image
                  src="/images/perlite.png"
                  width={150}
                  height={150}
                  alt="Perlite"
                  className="aspect-square overflow-hidden rounded-lg object-cover cursor-pointer hover:opacity-80"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="border-green-200 text-green-700 mb-4">
                  Premium Quality
                </Badge>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Growing Medium Sets</h1>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(189 reviews)</span>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-green-600">₹1,299</span>
                  <span className="text-lg text-gray-500 line-through">₹1,699</span>
                  <Badge className="bg-red-100 text-red-800">24% OFF</Badge>
                </div>
                <p className="text-gray-600 mb-6">
                  High-quality soil mixes and growing mediums specially formulated for optimal plant growth in
                  containers and urban farming systems. Our blend ensures proper drainage, aeration, and nutrient
                  retention for healthy root development.
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
                <h3 className="font-semibold mb-4">Set Includes:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 20kg Premium Potting Mix</li>
                  <li>• 5kg Organic Compost</li>
                  <li>• 3kg Coco Peat</li>
                  <li>• 2kg Perlite for Drainage</li>
                  <li>• pH Testing Kit</li>
                  <li>• Mixing & Usage Guide</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medium Types */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Growing Medium Components</h2>
            <p className="text-lg text-gray-600">Scientifically formulated for optimal plant growth</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Flower2 className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Premium Potting Mix</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Balanced blend of organic matter, nutrients, and minerals for healthy plant growth.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Rich in organic nutrients</li>
                  <li>• Excellent water retention</li>
                  <li>• pH balanced (6.0-7.0)</li>
                  <li>• Disease-free sterilized</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Beaker className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Organic Compost</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Nutrient-rich organic matter that improves soil structure and fertility.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Slow-release nutrients</li>
                  <li>• Improves soil structure</li>
                  <li>• Enhances microbial activity</li>
                  <li>• 100% organic certified</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Shield className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Drainage Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Perlite and coco peat for optimal drainage and aeration in containers.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Prevents waterlogging</li>
                  <li>• Improves root aeration</li>
                  <li>• Lightweight and sterile</li>
                  <li>• Long-lasting performance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
