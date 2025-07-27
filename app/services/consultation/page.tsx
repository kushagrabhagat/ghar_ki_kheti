import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, ArrowLeft, CheckCircle, Clock, Users, MessageCircle, BookOpen, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ConsultationPage() {
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <Badge variant="outline" className="w-fit border-orange-200 text-orange-700">
                Expert Guidance
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                Urban Farming Consultation
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Get personalized expert advice for your urban farming journey. From planning to execution, our
                specialists guide you every step of the way to ensure your farming success.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Book Free Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-200 text-orange-700 hover:bg-orange-50 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/consultation-service.png"
                width={600}
                height={500}
                alt="Urban Farming Consultation"
                className="aspect-[4/3] overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Consultation Services</h2>
            <p className="text-lg text-gray-600">Comprehensive guidance for every aspect of urban farming</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Planning Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive planning session to design your perfect urban farming setup.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Space assessment & analysis</li>
                  <li>• Crop selection guidance</li>
                  <li>• System recommendations</li>
                  <li>• Budget planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Technical Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Ongoing technical guidance for troubleshooting and optimization.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Problem diagnosis</li>
                  <li>• System optimization</li>
                  <li>• Maintenance guidance</li>
                  <li>• Performance improvement</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Growth Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Strategic planning to scale and expand your urban farming operations.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Expansion planning</li>
                  <li>• Yield optimization</li>
                  <li>• Market analysis</li>
                  <li>• ROI calculations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Consultation Packages */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Consultation Packages</h2>
            <p className="text-lg text-gray-600">Choose the level of expert guidance that suits your needs</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Basic Consultation</CardTitle>
                <div className="text-3xl font-bold text-orange-600">₹2,999</div>
                <p className="text-gray-600">One-time session</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• 2-hour consultation session</li>
                  <li>• Space assessment report</li>
                  <li>• Basic crop recommendations</li>
                  <li>• System suggestions</li>
                  <li>• Follow-up email support</li>
                  <li>• Resource materials</li>
                </ul>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Choose Basic</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-600 shadow-lg">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-orange-600">Recommended</Badge>
                <CardTitle>Premium Consultation</CardTitle>
                <div className="text-3xl font-bold text-orange-600">₹7,999</div>
                <p className="text-gray-600">Comprehensive package</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• 4-hour detailed consultation</li>
                  <li>• Complete site analysis</li>
                  <li>• Custom design blueprint</li>
                  <li>• Equipment specifications</li>
                  <li>• Implementation timeline</li>
                  <li>• 30-day WhatsApp support</li>
                  <li>• Progress review session</li>
                </ul>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Choose Premium</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Enterprise Consultation</CardTitle>
                <div className="text-3xl font-bold text-orange-600">₹19,999</div>
                <p className="text-gray-600">Complete guidance</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• Multiple consultation sessions</li>
                  <li>• Detailed feasibility study</li>
                  <li>• Complete project planning</li>
                  <li>• Vendor recommendations</li>
                  <li>• Implementation oversight</li>
                  <li>• 90-day ongoing support</li>
                  <li>• Monthly review meetings</li>
                  <li>• Performance optimization</li>
                </ul>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Choose Enterprise</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process & Benefits */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Consultation Process</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Initial Assessment</h3>
                      <p className="text-gray-600">
                        Comprehensive evaluation of your space, goals, and constraints to understand your unique needs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Custom Strategy Development</h3>
                      <p className="text-gray-600">
                        Creation of a tailored farming strategy that maximizes your space potential and meets your
                        objectives.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Implementation Guidance</h3>
                      <p className="text-gray-600">
                        Step-by-step guidance on executing your farming plan with timeline and resource recommendations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Ongoing Support</h3>
                      <p className="text-gray-600">
                        Continuous support and optimization recommendations to ensure long-term success.
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
                    <Clock className="h-5 w-5 text-orange-600" />
                    <span>Consultation Timeline</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Initial Booking</span>
                    <span className="text-orange-600 font-semibold">Same day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Site Visit</span>
                    <span className="text-orange-600 font-semibold">Within 2 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Report Delivery</span>
                    <span className="text-orange-600 font-semibold">3-5 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Follow-up Session</span>
                    <span className="text-orange-600 font-semibold">Within 1 week</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-orange-600" />
                    <span>Expert Team</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Agricultural engineers</li>
                    <li>• Horticulture specialists</li>
                    <li>• Hydroponic experts</li>
                    <li>• Business consultants</li>
                    <li>• Sustainability advisors</li>
                    <li>• Technology specialists</li>
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
