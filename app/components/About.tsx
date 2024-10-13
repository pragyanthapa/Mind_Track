"use client"
import { Brain, Heart, Smile, Users, Zap, Shield } from 'lucide-react'

export default function About() {
  return (
    <div className="w-full bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-center mb-8">About MindTrack</h2>
        <p className="text-xl text-gray-300 text-center mb-12">
          MindTrack is your personal companion on the journey to better mental health and well-being. We combine cutting-edge technology with evidence-based practices to provide you with a comprehensive mental wellness solution.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-gray-800 p-6 rounded-lg">
            <Brain className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Cognitive Health</h3>
            <p className="text-gray-300">Improve your mental clarity and cognitive function with our tailored exercises and brain-training games.</p>
          </div>
          <div className="text-center bg-gray-800 p-6 rounded-lg">
            <Heart className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Emotional Balance</h3>
            <p className="text-gray-300">Learn to understand and manage your emotions for a more balanced life through guided meditations and mood tracking.</p>
          </div>
          <div className="text-center bg-gray-800 p-6 rounded-lg">
            <Smile className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Overall Well-being</h3>
            <p className="text-gray-300">Achieve a state of contentment and fulfillment in your daily life with personalized well-being plans and progress tracking.</p>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-center mb-8">Why Choose MindTrack?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-gray-800 p-6 rounded-lg">
            <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h4 className="text-lg font-medium mb-2">Community Support</h4>
            <p className="text-gray-300">Connect with like-minded individuals on similar mental health journeys for mutual support and encouragement.</p>
          </div>
          <div className="text-center bg-gray-800 p-6 rounded-lg">
            <Zap className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h4 className="text-lg font-medium mb-2">AI-Powered Insights</h4>
            <p className="text-gray-300">Benefit from our advanced AI algorithms that provide personalized recommendations based on your unique mental health patterns.</p>
          </div>
          <div className="text-center bg-gray-800 p-6 rounded-lg">
            <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h4 className="text-lg font-medium mb-2">Privacy First</h4>
            <p className="text-gray-300">Your mental health data is sensitive. We employ state-of-the-art encryption and privacy measures to keep your information secure.</p>
          </div>
        </div>
      </div>
    </div>
  )
}