
import React from 'react';
import Layout from '@/components/Layout';
import { useTheme } from 'next-themes';
import { BookOpenCheck, BarChart3, Target, Users, BarChart2, LightbulbIcon } from 'lucide-react';

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8 text-center">
          <h1 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-corporate-navy'} mb-4`}>
            About CorVoMaster
          </h1>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto leading-relaxed`}>
            Welcome to <span className="font-bold">CorVoMaster</span>, where we believe <span className="font-bold text-corporate-navy dark:text-corporate-gold">synergy</span> <span className="italic text-gray-600 dark:text-gray-400">(combined effort resulting in a greater outcome)</span> is the secret sauce behind professional growth. Our platform is here to be your <span className="font-bold text-corporate-navy dark:text-corporate-gold">game-changer</span> <span className="italic text-gray-600 dark:text-gray-400">(something that significantly alters the way things are done)</span> in mastering corporate communication. We blend daily learning, practical examples, and interactive features to help you sharpen your <span className="font-bold text-corporate-navy dark:text-corporate-gold">competitive edge</span> <span className="italic text-gray-600 dark:text-gray-400">(an advantage that sets you apart)</span> and elevate your career.
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-corporate-navy'} mb-6 text-center`}>
            What We Offer
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className={`p-6 rounded-lg ${isDark ? 'bg-corporate-darkgray' : 'bg-gray-50'} border ${isDark ? 'border-corporate-navy' : 'border-gray-200'} shadow-sm`}>
              <div className="flex items-center mb-4">
                <BookOpenCheck className="h-6 w-6 mr-3 text-corporate-gold" />
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-corporate-navy'}`}>Word of the Day</h3>
              </div>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Kick off each morning with a fresh business term, complete with its definition, usage examples, and fun tidbits to make learning both effective and enjoyable. Start building your <span className="font-bold text-corporate-navy dark:text-corporate-gold">ROI</span> <span className="italic text-gray-600 dark:text-gray-400">(Return on Investment)</span> in professional vocabulary one word at a time.
              </p>
            </div>
            
            <div className={`p-6 rounded-lg ${isDark ? 'bg-corporate-darkgray' : 'bg-gray-50'} border ${isDark ? 'border-corporate-navy' : 'border-gray-200'} shadow-sm`}>
              <div className="flex items-center mb-4">
                <Target className="h-6 w-6 mr-3 text-corporate-gold" />
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-corporate-navy'}`}>Learning Modules</h3>
              </div>
              <ul className={`list-disc pl-5 ${isDark ? 'text-gray-300' : 'text-gray-600'} space-y-2 leading-relaxed`}>
                <li><span className="font-semibold">Basic Corporate Vocabulary</span>: Strengthen your foundation with must-know terms for leadership, teamwork, and beyond.</li>
                <li><span className="font-semibold">Financial Fluency</span>: Learn the language of finance to discuss <span className="font-bold text-corporate-navy dark:text-corporate-gold">cash flow</span> <span className="italic text-gray-600 dark:text-gray-400">(movement of money in and out of a business)</span>, budgets, and investments like a pro.</li>
                <li><span className="font-semibold">Marketing Mastery</span>: Dive into strategic terms to craft a standout <span className="font-bold text-corporate-navy dark:text-corporate-gold">value proposition</span> <span className="italic text-gray-600 dark:text-gray-400">(the promise of value to be delivered)</span> for any brand.</li>
                <li><span className="font-semibold">Negotiation Know-How</span>: Master the art of deal-making by learning to leverage your <span className="font-bold text-corporate-navy dark:text-corporate-gold">BATNA</span> <span className="italic text-gray-600 dark:text-gray-400">(Best Alternative to a Negotiated Agreement)</span> and close high-stakes discussions confidently.</li>
              </ul>
            </div>
            
            <div className={`p-6 rounded-lg ${isDark ? 'bg-corporate-darkgray' : 'bg-gray-50'} border ${isDark ? 'border-corporate-navy' : 'border-gray-200'} shadow-sm`}>
              <div className="flex items-center mb-4">
                <LightbulbIcon className="h-6 w-6 mr-3 text-corporate-gold" />
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-corporate-navy'}`}>Vocabulary in Context</h3>
              </div>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Discover how words like <span className="font-bold text-corporate-navy dark:text-corporate-gold">paradigm shift</span> <span className="italic text-gray-600 dark:text-gray-400">(fundamental change in approach or assumptions)</span> or <span className="font-bold text-corporate-navy dark:text-corporate-gold">stakeholders</span> <span className="italic text-gray-600 dark:text-gray-400">(people or groups with an interest in an organization's success)</span> come to life in real-world business scenarios. From brainstorming sessions to quarterly reviews, we help you see—and use—these terms where they matter most.
              </p>
            </div>
            
            <div className={`p-6 rounded-lg ${isDark ? 'bg-corporate-darkgray' : 'bg-gray-50'} border ${isDark ? 'border-corporate-navy' : 'border-gray-200'} shadow-sm`}>
              <div className="flex items-center mb-4">
                <BarChart3 className="h-6 w-6 mr-3 text-corporate-gold" />
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-corporate-navy'}`}>Progress Dashboard</h3>
              </div>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Track your milestones with our intuitive dashboard. Whether it's your daily streak, modules completed, or words mastered, we'll show you just how close you are to becoming a <span className="font-bold text-corporate-navy dark:text-corporate-gold">powerhouse communicator</span> <span className="italic text-gray-600 dark:text-gray-400">(someone with exceptionally strong communication skills)</span>.
              </p>
            </div>
            
            <div className={`p-6 rounded-lg ${isDark ? 'bg-corporate-darkgray' : 'bg-gray-50'} border ${isDark ? 'border-corporate-navy' : 'border-gray-200'} shadow-sm md:col-span-2`}>
              <div className="flex items-center mb-4">
                <BarChart2 className="h-6 w-6 mr-3 text-corporate-gold" />
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-corporate-navy'}`}>Premium Access</h3>
              </div>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Unlock advanced modules for deeper insights into financial jargon, marketing buzzwords, and negotiation strategies. These specialized lessons provide a <span className="font-bold text-corporate-navy dark:text-corporate-gold">scalability</span> <span className="italic text-gray-600 dark:text-gray-400">(ability to handle increased demand or growth smoothly)</span> factor for your vocabulary as your career ambitions expand.
              </p>
            </div>
          </div>
          
          <div className={`p-6 rounded-lg ${isDark ? 'bg-corporate-darkgray' : 'bg-gray-50'} border ${isDark ? 'border-corporate-navy' : 'border-gray-200'} shadow-sm mb-10`}>
            <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-corporate-navy'} mb-4 text-center`}>Our Vision</h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed text-center max-w-3xl mx-auto`}>
              At CorVoMaster, we believe that effective communication is the backbone of every thriving organization. By fusing engaging content, interactive learning, and real-world examples, our mission is to help you <span className="font-bold text-corporate-navy dark:text-corporate-gold">leverage</span> <span className="italic text-gray-600 dark:text-gray-400">(use something to its maximum advantage)</span> your newfound language skills for maximum impact—be it in boardrooms, pitch meetings, or everyday workplace conversations.
            </p>
          </div>
          
          <div>
            <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-corporate-navy'} mb-6 text-center`}>Who We Serve</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className={`p-5 rounded-lg ${isDark ? 'bg-corporate-darkgray' : 'bg-gray-50'} border ${isDark ? 'border-corporate-navy' : 'border-gray-200'} text-center`}>
                <Users className="h-8 w-8 mx-auto mb-3 text-corporate-gold" />
                <h4 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-corporate-navy'}`}>Ambitious Graduates</h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Step into the corporate world with confidence.
                </p>
              </div>
              
              <div className={`p-5 rounded-lg ${isDark ? 'bg-corporate-darkgray' : 'bg-gray-50'} border ${isDark ? 'border-corporate-navy' : 'border-gray-200'} text-center`}>
                <Users className="h-8 w-8 mx-auto mb-3 text-corporate-gold" />
                <h4 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-corporate-navy'}`}>Entrepreneurs & Startups</h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Articulate your <span className="font-bold">value proposition</span> clearly to partners, investors, and clients.
                </p>
              </div>
              
              <div className={`p-5 rounded-lg ${isDark ? 'bg-corporate-darkgray' : 'bg-gray-50'} border ${isDark ? 'border-corporate-navy' : 'border-gray-200'} text-center`}>
                <Users className="h-8 w-8 mx-auto mb-3 text-corporate-gold" />
                <h4 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-corporate-navy'}`}>Seasoned Professionals</h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Refine your corporate lexicon to maintain your <span className="font-bold">competitive edge</span>.
                </p>
              </div>
              
              <div className={`p-5 rounded-lg ${isDark ? 'bg-corporate-darkgray' : 'bg-gray-50'} border ${isDark ? 'border-corporate-navy' : 'border-gray-200'} text-center`}>
                <Users className="h-8 w-8 mx-auto mb-3 text-corporate-gold" />
                <h4 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-corporate-navy'}`}>Executives & Leaders</h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Lead with clarity, authority, and a well-honed vocabulary.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-12 p-8 rounded-lg bg-corporate-navy text-white">
          <h2 className="text-2xl font-bold mb-4">Join CorVoMaster Today</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Discover how a robust professional vocabulary can spark a <span className="font-bold text-corporate-gold">paradigm shift</span> in your career. Let's create <span className="font-bold text-corporate-gold">synergy</span> together and turn every conversation into an opportunity to shine!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
