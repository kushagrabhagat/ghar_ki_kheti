import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, ArrowLeft, Shield, Eye, Lock, Users } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
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

      {/* Privacy Policy Content */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-100 rounded-full">
                <Shield className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-green-600" />
                  <span>Information We Collect</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Personal Information</h3>
                  <p className="text-gray-600">
                    We collect information you provide directly to us, such as when you create an account, make a
                    purchase, request our services, or contact us. This may include:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                    <li>Name, email address, and phone number</li>
                    <li>Billing and shipping addresses</li>
                    <li>Payment information (processed securely by our payment partners)</li>
                    <li>Service preferences and requirements</li>
                    <li>Communication history with our support team</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Automatically Collected Information</h3>
                  <p className="text-gray-600">
                    When you visit our website or use our services, we automatically collect certain information,
                    including:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage data (pages visited, time spent, click patterns)</li>
                    <li>Location information (with your consent)</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-green-600" />
                  <span>How We Use Your Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Communicate with you about products, services, and events</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, investigate, and prevent fraudulent transactions</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lock className="h-5 w-5 text-green-600" />
                  <span>Information Sharing and Disclosure</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except as described in this policy:
                </p>
                <div>
                  <h3 className="font-semibold mb-2">Service Providers</h3>
                  <p className="text-gray-600">
                    We may share your information with third-party service providers who perform services on our behalf,
                    such as:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                    <li>Payment processing companies</li>
                    <li>Shipping and delivery services</li>
                    <li>Email and communication platforms</li>
                    <li>Analytics and marketing services</li>
                    <li>Customer support tools</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Legal Requirements</h3>
                  <p className="text-gray-600">
                    We may disclose your information if required to do so by law or in response to valid requests by
                    public authorities.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. These measures
                  include:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection practices</li>
                  <li>Secure data centers and infrastructure</li>
                </ul>
                <p className="text-gray-600">
                  However, no method of transmission over the internet or electronic storage is 100% secure, and we
                  cannot guarantee absolute security.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>
                    <strong>Access:</strong> Request a copy of the personal information we hold about you
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal information (subject to legal
                    requirements)
                  </li>
                  <li>
                    <strong>Portability:</strong> Request transfer of your data to another service provider
                  </li>
                  <li>
                    <strong>Opt-out:</strong> Unsubscribe from marketing communications at any time
                  </li>
                  <li>
                    <strong>Cookies:</strong> Control cookie preferences through your browser settings
                  </li>
                </ul>
                <p className="text-gray-600">
                  To exercise these rights, please contact us at{" "}
                  <a href="mailto:privacy@gharkikheti.com" className="text-green-600 hover:underline">
                    privacy@gharkikheti.com
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Data Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                  privacy policy, unless a longer retention period is required or permitted by law. When we no longer
                  need your personal information, we will securely delete or anonymize it.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal
                  information from children under 13. If you are a parent or guardian and believe your child has
                  provided us with personal information, please contact us immediately.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the
                  new privacy policy on this page and updating the "Last updated" date. We encourage you to review this
                  privacy policy periodically for any changes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-green-50">
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  If you have any questions about this privacy policy or our privacy practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Email:</strong> privacy@gharkikheti.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +91 98765 43210
                  </p>
                  <p>
                    <strong>Address:</strong> Ghar ki Kheti, Mumbai, Maharashtra, India
                  </p>
                </div>
                <p className="text-gray-600">
                  We will respond to your inquiry within 30 days of receiving your request.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
