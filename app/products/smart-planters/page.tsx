import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, ArrowLeft, Star, ShoppingCart, Heart, Smartphone, Wifi, Thermometer } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SmartPlantersPage() {
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
                src="/images/smart-planter-product.png"
                width={600}
                height={500}
                alt="Smart Planter System"
                className="aspect-square overflow-hidden rounded-xl object-cover"
              />
              <div className="grid grid-cols-4 gap-4">
                <Image
                  src="/images/smart-planter-sensors.png"
                  width={150}
                  height={150}
                  alt="Smart Sensors"
                  className="aspect-square overflow-hidden rounded-lg object-cover cursor-pointer hover:opacity-80"
                />
                <Image
                  src="/images/smart-planter-app.png"
                  width={150}
                  height={150}
                  alt="Mobile App"
                  className="aspect-square overflow-hidden rounded-lg object-cover cursor-pointer hover:opacity-80"
                />
                <Image
                  src="/images/smart-planter-watering.png"
                  width={150}
                  height={150}
                  alt="Auto Watering"
                  className="aspect-square overflow-hidden rounded-lg object-cover cursor-pointer hover:opacity-80"
                />
                <Image
                  src="/images/smart-planter-growing.png"
                  width={150}
                  height={150}
                  alt="Growing Plants"
                  className="aspect-square overflow-hidden rounded-lg object-cover cursor-pointer hover:opacity-80"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="border-purple-200 text-purple-700 mb-4">
                  IoT Enabled
                </Badge>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Smart Planter System</h1>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(156 reviews)</span>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-purple-600">₹8,999</span>
                  <span className="text-lg text-gray-500 line-through">₹11,999</span>
                  <Badge className="bg-red-100 text-red-800">25% OFF</Badge>
                </div>
                <p className="text-gray-600 mb-6">
                  Revolutionary IoT-enabled smart planter that monitors and cares for your plants automatically.
                  Features real-time monitoring, automated watering, and mobile app control for the perfect growing
                  environment.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex space-x-4">
                  <Button size="lg" className="flex-1 bg-purple-600 hover:bg-purple-700">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button size="lg" variant="outline" className="border-purple-200 text-purple-700 bg-transparent">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="outline" size="lg" className="w-full bg-transparent">
                  Buy Now - Free Setup & App Training
                </Button>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4">Smart Features:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Real-time soil moisture monitoring</li>
                  <li>• Automated watering system</li>
                  <li>• Temperature & humidity sensors</li>
                  <li>• Mobile app with notifications</li>
                  <li>• Growth tracking & analytics</li>
                  <li>• WiFi connectivity & cloud sync</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Features */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Intelligent Plant Care Technology</h2>
            <p className="text-lg text-gray-600">Advanced sensors and automation for optimal plant health</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Mobile App Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Monitor and control your plants remotely with our intuitive mobile app. Get real-time alerts and
                  insights.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Wifi className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>WiFi Connectivity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Stay connected to your plants from anywhere. Cloud-based monitoring and data analytics included.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Thermometer className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Environmental Sensors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Advanced sensors monitor soil moisture, temperature, humidity, and light levels for optimal growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Smart App Features</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Real-time Monitoring</h3>
                    <p className="text-gray-600">
                      Track soil moisture, temperature, and light levels in real-time with detailed graphs and
                      analytics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Smart Notifications</h3>
                    <p className="text-gray-600">
                      Receive alerts when your plants need water, fertilizer, or when environmental conditions change.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Growth Tracking</h3>
                    <p className="text-gray-600">
                      Document your plant's growth journey with photos and notes. Track progress over time.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Care Recommendations</h3>
                    <p className="text-gray-600">
                      Get personalized care tips and recommendations based on your plant type and growing conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/mobile-app-interface.png"
                width={400}
                height={600}
                alt="Mobile App Interface"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-lg text-gray-600">Advanced technology in an elegant design</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Physical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Dimensions</span>
                    <span className="font-semibold">40 x 30 x 25 cm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weight</span>
                    <span className="font-semibold">3.5 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Material</span>
                    <span className="font-semibold">Food-grade plastic</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Water Capacity</span>
                    <span className="font-semibold">5 liters</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Smart Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Soil moisture sensor</li>
                  <li>• Temperature sensor</li>
                  <li>• Humidity sensor</li>
                  <li>• Light level sensor</li>
                  <li>• WiFi 802.11 b/g/n</li>
                  <li>• Rechargeable battery backup</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>App Compatibility</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">iOS Compatibility</span>
                      <span className="text-sm font-semibold text-green-600">iOS 12+</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Android Compatibility</span>
                      <span className="text-sm font-semibold text-green-600">Android 8+</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Cloud Storage</span>
                      <span className="text-sm font-semibold text-blue-600">Unlimited</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-full"></div>
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
