
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Volume2 } from 'lucide-react';
import { Word } from '@/data/vocabularyData';

interface WordOfTheDayProps {
  word: Word;
}

const WordOfTheDay = ({ word }: WordOfTheDayProps) => {
  return (
    <Card className="shadow-lg animate-fade-in border-t-4 border-t-corporate-gold">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-2xl font-bold text-corporate-navy flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-corporate-gold" />
              Word of the Day
            </CardTitle>
            <CardDescription>Expand your vocabulary daily</CardDescription>
          </div>
          <Badge variant="outline" className="bg-corporate-gold text-white font-medium">
            {word.difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="bg-white p-4 rounded-md shadow-sm mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-2xl font-bold text-corporate-navy">{word.term}</h3>
            <button className="text-corporate-navy hover:text-corporate-gold transition-colors">
              <Volume2 className="h-5 w-5" />
            </button>
          </div>
          <div className="text-sm text-gray-500 italic">{word.partOfSpeech}</div>
          <p className="mt-2 text-gray-700">{word.definition}</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-corporate-navy">Example:</h4>
            <p className="text-gray-700 italic">"{word.example}"</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-corporate-navy">Usage Tip:</h4>
            <p className="text-gray-700">{word.usageTip}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-corporate-navy">Synonyms:</h4>
            <div className="flex flex-wrap gap-2 mt-1">
              {word.synonyms.map((synonym, index) => (
                <Badge key={index} variant="secondary" className="bg-gray-200 text-gray-700">
                  {synonym}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WordOfTheDay;
