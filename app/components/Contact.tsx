"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="w-full bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-center mb-8">Contact Us</h2>
        <p className="text-xl text-gray-300 text-center mb-12">
          We're here to help. Whether you have a question about our services, need technical support, or just want to share your feedback, our team is ready to assist you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <Input type="text" name="name" id="name" className="mt-1 bg-gray-800 text-gray-100 border-gray-700" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <Input type="email" name="email" id="email" className="mt-1 bg-gray-800 text-gray-100 border-gray-700" required />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
              <Input type="text" name="subject" id="subject" className="mt-1 bg-gray-800 text-gray-100 border-gray-700" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <Textarea name="message" id="message" rows={4} className="mt-1 bg-gray-800 text-gray-100 border-gray-700" required />
            </div>
            <div>
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                Send Message
              </Button>
            </div>
          </form>
          <div className="space-y-8 bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-purple-400" />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-purple-400" />
              <span className="text-gray-300">support@mindtrack.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-purple-400" />
              <span className="text-gray-300">123 Wellness Street, Mindful City, MC 12345</span>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-2">Business Hours</h4>
              <p className="text-gray-300">Monday - Friday: 9am - 5pm EST</p>
              <p className="text-gray-300">Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
          <p className="text-gray-300 mb-4">
            Can't find the answer you're looking for? Check out our <a href="#" className="text-purple-400 hover:underline">FAQ page</a> for more information.
          </p>
        </div>
      </div>
    </div>
  )
}