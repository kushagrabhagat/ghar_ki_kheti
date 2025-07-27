import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, ArrowLeft, Star, ShoppingCart, Heart, Sprout, Droplets, Sun } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SeedsCollectionPage() {
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
                src="/images/seeds-collection-product.png"
                width={600}
                height={500}
                alt="Organic Seeds Collection"
                className="aspect-square overflow-hidden rounded-xl object-cover"
              />
              <div className="grid grid-cols-4 gap-4">
                <Image
                  src="/images/vegetable-seeds.png"
                  width={150}
                  height={150}
                  alt="Vegetable Seeds"
                  className="aspect-square overflow-hidden rounded-lg object-cover cursor-pointer hover:opacity-80"
                />
                <Image
                  src="/images/herb-seeds.png"
                  width={150}
                  height={150}
                  alt="Herb Seeds"
                  className="aspect-square overflow-hidden rounded-lg object-cover cursor-pointer hover:opacity-80"
                />
                <Image
                  src="/images/flower-seeds.png"
                  width={150}
                  height={150}
                  alt="Flower Seeds"
                  className="aspect-square overflow-hidden rounded-lg object-cover cursor-pointer hover:opacity-80"
                />
                <Image
                  src="/images/microgreen-seeds.png"
                  width={150}
                  height={150}
                  alt="Microgreen Seeds"
                  className="aspect-square overflow-hidden rounded-lg object-cover cursor-pointer hover:opacity-80"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="border-green-200 text-green-700 mb-4">
                  Premium Quality
                </Badge>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Organic Seeds Collection</h1>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(234 reviews)</span>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-green-600">₹499</span>
                  <span className="text-lg text-gray-500 line-through">₹699</span>
                  <Badge className="bg-red-100 text-red-800">30% OFF</Badge>
                </div>
                <p className="text-gray-600 mb-6">
                  Premium organic seeds specially selected for urban farming conditions. Our collection includes
                  vegetables, herbs, flowers, and microgreens - all tested for high germination rates and optimal growth
                  in containers and small spaces.
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
                  Buy Now - Free Shipping
                </Button>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4">Collection Includes:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 15 Vegetable Seed Varieties</li>
                  <li>• 10 Herb Seed Varieties</li>
                  <li>• 5 Flower Seed Varieties</li>
                  <li>• 8 Microgreen Varieties</li>
                  <li>• Planting Calendar & Guide</li>
                  <li>• Germination Guarantee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seed Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Seed Categories</h2>
            <p className="text-lg text-gray-600">Carefully curated varieties for urban farming success</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Sprout className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Vegetables</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Fast-growing varieties perfect for containers</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tomatoes (3 varieties)</li>
                  <li>• Peppers (2 varieties)</li>
                  <li>• Leafy greens (5 varieties)</li>
                  <li>• Root vegetables (3 varieties)</li>
                  <li>• Beans & peas (2 varieties)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Leaf className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Herbs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Aromatic herbs for cooking and wellness</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Basil (3 varieties)</li>
                  <li>• Mint (2 varieties)</li>
                  <li>• Coriander</li>
                  <li>• Parsley</li>
                  <li>• Oregano</li>
                  <li>• Thyme</li>
                  <li>• Rosemary</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Sun className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Flowers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Beautiful blooms for aesthetic appeal</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Marigold</li>
                  <li>• Nasturtium</li>
                  <li>• Sunflower (dwarf)</li>
                  <li>• Zinnia</li>
                  <li>• Cosmos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Droplets className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Microgreens</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Nutrient-dense baby greens</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Radish microgreens</li>
                  <li>• Pea shoots</li>
                  <li>• Sunflower microgreens</li>
                  <li>• Broccoli microgreens</li>
                  <li>• Mustard microgreens</li>
                  <li>• Wheatgrass</li>
                  <li>• Fenugreek microgreens</li>
                  <li>• Alfalfa sprouts</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
