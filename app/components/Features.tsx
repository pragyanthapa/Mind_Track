"use client"
import { Activity, Calendar, MessageCircle, BarChart, Book, Target, Bell, Users } from 'lucide-react'

export default function Features() {
  const features = [
    {
      name: 'Daily Check-ins',
      description: 'Track your mood and mental state with quick daily check-ins. Our AI analyzes your patterns to provide personalized insights.',
      icon: Activity,
    },
    {
      name: 'Guided Meditations',
      description: 'Access a vast library of guided meditations tailored to your specific needs, from stress relief to better sleep and improved focus.',
      icon: Calendar,
    },
    {
      name: 'AI Chatbot Support',
      description: 'Get 24/7 support from our AI-powered chatbot for immediate assistance. Its trained to provide empathetic responses and coping strategies.',
      icon: MessageCircle,
    },
    {
      name: 'Progress Tracking',
      description: 'Visualize your mental health journey with detailed progress reports. Set goals and celebrate your achievements along the way.',
      icon: BarChart,
    },
    {
      name: 'Educational Resources',
      description: 'Access a wealth of articles, videos, and interactive modules on various mental health topics, curated by expert psychologists.',
      icon: Book,
    },
    {
      name: 'Goal Setting',
      description: 'Set personalized mental health goals and receive step-by-step guidance on how to achieve them effectively.',
      icon: Target,
    },
    {
      name: 'Reminders & Notifications',
      description: 'Set up custom reminders for meditation sessions, mood check-ins, or to practice your coping strategies throughout the day.',
      icon: Bell,
    },
    {
      name: 'Community Forums',
      description: 'Connect with others on similar journeys in our moderated community forums. Share experiences, tips, and support each other.',
      icon: Users,
    },
  ]

  return (
    <div className="w-full bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="bg-gray-800 overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-gray-700">
              <div className="p-5">
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-purple-400" aria-hidden="true" />
                  <h3 className="ml-3 text-lg font-medium">{feature.name}</h3>
                </div>
                <p className="text-base text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Continuous Improvement</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            At MindTrack, we're constantly evolving. Our team of developers and mental health professionals work tirelessly to bring you new features and improvements based on the latest research in psychology and neuroscience. Your feedback drives our innovation, ensuring that MindTrack remains at the forefront of digital mental health solutions.
          </p>
        </div>
      </div>
    </div>
  )
}