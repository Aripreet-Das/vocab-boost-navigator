
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Flame, BookOpen, Target } from 'lucide-react';
import { useTheme } from "next-themes";

interface ProgressStatsProps {
  stats: {
    totalWordsLearned: number;
    totalWordsAvailable: number;
    streakDays: number;
    completedModules: number;
    masteryLevel: string;
  };
}

const ProgressStats = ({ stats }: ProgressStatsProps) => {
  const progressPercentage = (stats.totalWordsLearned / stats.totalWordsAvailable) * 100;
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <Card className={`shadow-lg animate-fade-in progress-stats-card ${isDark ? 'bg-corporate-darkblue text-white' : ''}`}>
      <CardHeader className="pb-2">
        <CardTitle className={`text-xl font-bold ${isDark ? 'text-white' : 'text-corporate-navy'} flex items-center`}>
          <Award className="h-5 w-5 mr-2 text-corporate-gold" />
          Your Learning Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className={`${isDark ? 'bg-corporate-darkgray' : 'bg-white'} p-4 rounded-md shadow-sm flex flex-col items-center justify-center text-center`}>
            <BookOpen className="h-6 w-6 text-corporate-gold mb-2" />
            <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Words Mastered</div>
            <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-corporate-navy'} mt-1`}>
              {stats.totalWordsLearned} / {stats.totalWordsAvailable}
            </div>
          </div>
          
          <div className={`${isDark ? 'bg-corporate-darkgray' : 'bg-white'} p-4 rounded-md shadow-sm flex flex-col items-center justify-center text-center`}>
            <Flame className="h-6 w-6 text-corporate-gold mb-2" />
            <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Daily Streak</div>
            <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-corporate-navy'} mt-1`}>
              {stats.streakDays} Days
            </div>
          </div>
          
          <div className={`${isDark ? 'bg-corporate-darkgray' : 'bg-white'} p-4 rounded-md shadow-sm flex flex-col items-center justify-center text-center`}>
            <Target className="h-6 w-6 text-corporate-gold mb-2" />
            <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Modules Completed</div>
            <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-corporate-navy'} mt-1`}>
              {stats.completedModules}
            </div>
          </div>
        </div>
        
        <div className={`${isDark ? 'bg-corporate-darkgray' : 'bg-white'} p-4 rounded-md shadow-sm`}>
          <div className="flex justify-between items-center mb-2">
            <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-corporate-navy'}`}>Current Mastery Level</h3>
            <span className="text-corporate-gold font-medium">{stats.masteryLevel}</span>
          </div>
          
          <div className="relative h-2 bg-gray-600 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-corporate-gold rounded-full animate-progress-fill"
              style={{ '--progress-width': `${progressPercentage}%` } as React.CSSProperties}
            ></div>
          </div>
          
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Beginner</span>
            <span>Intermediate</span>
            <span>Advanced</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressStats;
