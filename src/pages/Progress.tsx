
import React from 'react';
import Layout from '@/components/Layout';
import { getUserProgress, moduleData } from '@/data/vocabularyData';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Book, Calendar, Flame, ChevronUp } from 'lucide-react';
import { Progress as ProgressBar } from "@/components/ui/progress";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  Tooltip
} from "recharts";

const ProgressPage = () => {
  const userProgress = getUserProgress();
  
  // Fake activity data for the chart
  const activityData = [
    { day: 'Mon', wordsLearned: 3 },
    { day: 'Tue', wordsLearned: 5 },
    { day: 'Wed', wordsLearned: 2 },
    { day: 'Thu', wordsLearned: 7 },
    { day: 'Fri', wordsLearned: 4 },
    { day: 'Sat', wordsLearned: 6 },
    { day: 'Sun', wordsLearned: 8 }
  ];
  
  // Calculate module category distribution
  const categoryDistribution = moduleData.reduce((acc, module) => {
    if (!acc[module.category]) {
      acc[module.category] = { 
        total: 0, 
        learned: 0, 
        name: getCategoryName(module.category) 
      };
    }
    
    acc[module.category].total += module.totalWords;
    acc[module.category].learned += module.progress;
    
    return acc;
  }, {} as Record<string, { total: number; learned: number; name: string }>);
  
  const categoryData = Object.entries(categoryDistribution).map(([key, data]) => ({
    category: key,
    name: data.name,
    total: data.total,
    learned: data.learned,
    percentage: Math.round((data.learned / data.total) * 100)
  }));
  
  function getCategoryName(category: string): string {
    const names: Record<string, string> = {
      'leadership': 'Leadership',
      'finance': 'Finance',
      'marketing': 'Marketing',
      'negotiations': 'Negotiations',
      'project-management': 'Project Management',
      'human-resources': 'Human Resources'
    };
    
    return names[category] || category;
  }
  
  // Sort categories by progress percentage
  const sortedCategoryData = [...categoryData].sort((a, b) => b.percentage - a.percentage);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-corporate-navy mb-2">
            Learning Progress
          </h1>
          <p className="text-lg text-gray-600">
            Track your vocabulary learning journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-sm">
            <CardContent className="p-6 flex items-center">
              <div className="mr-4 bg-corporate-gold/10 p-3 rounded-full">
                <Book className="h-6 w-6 text-corporate-gold" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Words Mastered</p>
                <h3 className="text-2xl font-bold text-corporate-navy">{userProgress.totalWordsLearned}</h3>
                <div className="flex items-center text-green-600 text-xs">
                  <ChevronUp className="h-3 w-3 mr-1" />
                  <span>+12 this week</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm">
            <CardContent className="p-6 flex items-center">
              <div className="mr-4 bg-blue-100 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Study Streak</p>
                <h3 className="text-2xl font-bold text-corporate-navy">{userProgress.streakDays} days</h3>
                <div className="flex items-center text-green-600 text-xs">
                  <ChevronUp className="h-3 w-3 mr-1" />
                  <span>+3 days</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm">
            <CardContent className="p-6 flex items-center">
              <div className="mr-4 bg-purple-100 p-3 rounded-full">
                <Flame className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Weekly Goal</p>
                <h3 className="text-2xl font-bold text-corporate-navy">68%</h3>
                <div className="flex items-center text-green-600 text-xs">
                  <ChevronUp className="h-3 w-3 mr-1" />
                  <span>On track</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm">
            <CardContent className="p-6 flex items-center">
              <div className="mr-4 bg-green-100 p-3 rounded-full">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Mastery Level</p>
                <h3 className="text-xl font-bold text-corporate-navy">{userProgress.masteryLevel}</h3>
                <div className="flex items-center text-blue-600 text-xs">
                  <span>30% to next level</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold text-corporate-navy">
                Weekly Learning Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={activityData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" />
                    <YAxis allowDecimals={false} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        borderColor: '#e2e8f0',
                        borderRadius: '0.375rem',
                        fontSize: '0.875rem'
                      }} 
                      formatter={(value) => [`${value} words`, 'Learned']}
                    />
                    <Bar 
                      dataKey="wordsLearned" 
                      fill="#E6AF2E" 
                      radius={[4, 4, 0, 0]} 
                      barSize={40}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold text-corporate-navy">
                Vocabulary by Category
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {sortedCategoryData.map(category => (
                  <div key={category.category}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{category.name}</span>
                      <span className="text-sm text-gray-500">{category.learned}/{category.total}</span>
                    </div>
                    <div className="flex items-center">
                      <ProgressBar 
                        className="h-2 flex-grow mr-2" 
                      />
                      <span className="text-xs font-medium w-8 text-right">
                        {category.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="shadow-md mb-8">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold text-corporate-navy">
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "First Word", icon: "🔤", unlocked: true },
                { name: "7-Day Streak", icon: "🔥", unlocked: true },
                { name: "Finance Master", icon: "💰", unlocked: false },
                { name: "Leadership Pro", icon: "👔", unlocked: false },
                { name: "Perfect Quiz", icon: "⭐", unlocked: true },
                { name: "30-Day Streak", icon: "📊", unlocked: false }
              ].map((achievement, index) => (
                <div 
                  key={index} 
                  className={`bg-white p-4 rounded-lg border text-center ${
                    achievement.unlocked ? "" : "opacity-40"
                  }`}
                >
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <div className="text-sm font-medium">{achievement.name}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {achievement.unlocked ? "Unlocked" : "Locked"}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ProgressPage;
