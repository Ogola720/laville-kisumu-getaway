
import { CreditCard, Smartphone, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function PaymentSection() {
  return (
    <section id="payment" className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-600 text-white">
            <CreditCard className="mr-2 h-4 w-4" />
            Payment Options
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Easy Payment Methods</h2>
          <p className="text-xl text-gray-600">Choose your preferred payment method for a seamless booking experience</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* MPESA Payment */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-green-200">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-green-700">M-PESA Payment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-4 text-center">Laville Suites Payment Details</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-green-700 font-medium">Paybill No:</span>
                      <span className="font-bold text-green-800 text-lg">247247</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-green-700 font-medium">Account No:</span>
                      <span className="font-bold text-green-800 text-lg">0726263281</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 space-y-2">
                  <p className="font-medium">How to pay via M-PESA:</p>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Go to M-PESA menu on your phone</li>
                    <li>Select "Lipa na M-PESA"</li>
                    <li>Select "Pay Bill"</li>
                    <li>Enter Business No: <strong>247247</strong></li>
                    <li>Enter Account No: <strong>0726263281</strong></li>
                    <li>Enter the amount</li>
                    <li>Enter your M-PESA PIN and confirm</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            {/* Direct Contact */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-blue-700">Direct Payment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-4 text-center">Contact for Payment Assistance</h4>
                  <div className="space-y-3">
                    <div className="text-center">
                      <p className="text-blue-700 font-medium mb-2">Call us for payment support:</p>
                      <p className="font-bold text-blue-800 text-lg">(+254) 726263281</p>
                      <p className="font-bold text-blue-800 text-lg">(+254) 732894577</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 space-y-2">
                  <p className="font-medium">Alternative payment methods:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Bank transfer</li>
                    <li>Cash payment on arrival</li>
                    <li>Mobile banking</li>
                    <li>Credit/Debit card (via phone)</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">
                    * Contact us to arrange alternative payment methods
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">Secure Payment Guarantee</h3>
              <p className="text-gray-600">
                All payments are processed securely. You will receive a confirmation message after successful payment.
                For any payment issues, please contact us immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
