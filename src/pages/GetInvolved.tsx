
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GetInvolved = () => {
  const location = useLocation();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // If hash is present in URL, scroll to that section
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-baft-cream/30">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 heading-decoration">
            Get Involved
          </h1>
          <p className="text-xl max-w-3xl">
            Join us in our mission to preserve Bulbul Ahmed's legacy and make a positive impact 
            in communities across Bangladesh. Your support can make a difference.
          </p>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-20">
        <div className="container">
          <h2 className="text-3xl font-playfair font-semibold mb-12 heading-decoration text-center">
            Support Our Cause
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="one-time" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="one-time">One-Time Donation</TabsTrigger>
                <TabsTrigger value="recurring">Recurring Donation</TabsTrigger>
              </TabsList>
              
              <TabsContent value="one-time">
                <Card>
                  <CardHeader>
                    <CardTitle>Make a One-Time Donation</CardTitle>
                    <CardDescription>
                      Your contribution will support our programs and initiatives.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form>
                      <div className="grid gap-6">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="relative">
                            <input type="radio" id="amount-1" name="donation-amount" className="peer sr-only" />
                            <label 
                              htmlFor="amount-1" 
                              className="flex h-14 w-full cursor-pointer items-center justify-center rounded-md border border-gray-200 bg-white text-center text-sm transition-all peer-checked:border-2 peer-checked:border-baft-maroon peer-checked:font-medium"
                            >
                              ৳1,000
                            </label>
                          </div>
                          <div className="relative">
                            <input type="radio" id="amount-2" name="donation-amount" className="peer sr-only" defaultChecked />
                            <label 
                              htmlFor="amount-2" 
                              className="flex h-14 w-full cursor-pointer items-center justify-center rounded-md border border-gray-200 bg-white text-center text-sm transition-all peer-checked:border-2 peer-checked:border-baft-maroon peer-checked:font-medium"
                            >
                              ৳5,000
                            </label>
                          </div>
                          <div className="relative">
                            <input type="radio" id="amount-3" name="donation-amount" className="peer sr-only" />
                            <label 
                              htmlFor="amount-3" 
                              className="flex h-14 w-full cursor-pointer items-center justify-center rounded-md border border-gray-200 bg-white text-center text-sm transition-all peer-checked:border-2 peer-checked:border-baft-maroon peer-checked:font-medium"
                            >
                              ৳10,000
                            </label>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-1">
                            Custom Amount (BDT)
                          </label>
                          <Input 
                            type="number" 
                            id="custom-amount" 
                            placeholder="Enter custom amount" 
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                              First Name
                            </label>
                            <Input id="first-name" placeholder="First name" />
                          </div>
                          <div>
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                              Last Name
                            </label>
                            <Input id="last-name" placeholder="Last name" />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                          </label>
                          <Input id="email" type="email" placeholder="your.email@example.com" />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-baft-maroon hover:bg-baft-maroon/90">
                      Donate Now
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="recurring">
                <Card>
                  <CardHeader>
                    <CardTitle>Set Up a Recurring Donation</CardTitle>
                    <CardDescription>
                      Provide ongoing support with a monthly contribution.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form>
                      <div className="grid gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Monthly Donation Amount
                          </label>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="relative">
                              <input type="radio" id="monthly-1" name="monthly-amount" className="peer sr-only" />
                              <label 
                                htmlFor="monthly-1" 
                                className="flex h-14 w-full cursor-pointer items-center justify-center rounded-md border border-gray-200 bg-white text-center text-sm transition-all peer-checked:border-2 peer-checked:border-baft-maroon peer-checked:font-medium"
                              >
                                ৳500/mo
                              </label>
                            </div>
                            <div className="relative">
                              <input type="radio" id="monthly-2" name="monthly-amount" className="peer sr-only" defaultChecked />
                              <label 
                                htmlFor="monthly-2" 
                                className="flex h-14 w-full cursor-pointer items-center justify-center rounded-md border border-gray-200 bg-white text-center text-sm transition-all peer-checked:border-2 peer-checked:border-baft-maroon peer-checked:font-medium"
                              >
                                ৳1,000/mo
                              </label>
                            </div>
                            <div className="relative">
                              <input type="radio" id="monthly-3" name="monthly-amount" className="peer sr-only" />
                              <label 
                                htmlFor="monthly-3" 
                                className="flex h-14 w-full cursor-pointer items-center justify-center rounded-md border border-gray-200 bg-white text-center text-sm transition-all peer-checked:border-2 peer-checked:border-baft-maroon peer-checked:font-medium"
                              >
                                ৳2,000/mo
                              </label>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="custom-monthly" className="block text-sm font-medium text-gray-700 mb-1">
                            Custom Monthly Amount (BDT)
                          </label>
                          <Input 
                            type="number" 
                            id="custom-monthly" 
                            placeholder="Enter custom amount" 
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="r-first-name" className="block text-sm font-medium text-gray-700 mb-1">
                              First Name
                            </label>
                            <Input id="r-first-name" placeholder="First name" />
                          </div>
                          <div>
                            <label htmlFor="r-last-name" className="block text-sm font-medium text-gray-700 mb-1">
                              Last Name
                            </label>
                            <Input id="r-last-name" placeholder="Last name" />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="r-email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                          </label>
                          <Input id="r-email" type="email" placeholder="your.email@example.com" />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-baft-maroon hover:bg-baft-maroon/90">
                      Set Up Monthly Donation
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="bg-baft-cream/30 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-medium mb-3">Other Ways to Donate</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Bank Transfer</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Account Name: Bulbul Ahmed Foundation Trust<br />
                    Bank: Bangladesh National Bank<br />
                    Account Number: 1234567890<br />
                    Branch: Gulshan, Dhaka
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Check Donations</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Please make checks payable to "Bulbul Ahmed Foundation Trust" and mail to:<br />
                    House 123, Road 456, Gulshan, Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-baft-cream/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-playfair font-semibold mb-12 heading-decoration text-center">
              Contact Us for Partnerships
            </h2>
            
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <Input id="name" placeholder="Your full name" required />
                    </div>
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                        Organization
                      </label>
                      <Input id="organization" placeholder="Your organization (if applicable)" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input id="contact-email" type="email" placeholder="your.email@example.com" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <Input id="phone" placeholder="Your phone number" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Subject of your inquiry" required />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe how you would like to partner with us" 
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-baft-maroon hover:bg-baft-maroon/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInvolved;
