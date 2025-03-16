
export type WordCategory = 
  | 'leadership' 
  | 'finance' 
  | 'marketing' 
  | 'negotiations' 
  | 'project-management'
  | 'human-resources';

export interface Word {
  id: string;
  term: string;
  definition: string;
  partOfSpeech: string;
  example: string;
  usageTip: string;
  category: WordCategory;
  synonyms: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Module {
  id: string;
  title: string;
  description: string;
  category: WordCategory;
  totalWords: number;
  imageIcon: string;
  progress: number;
  color: string;
}

export const wordData: Word[] = [
  {
    id: 'word-001',
    term: 'Leverage',
    definition: 'Use something to its maximum advantage',
    partOfSpeech: 'verb',
    example: 'We can leverage our international presence to expand into new markets.',
    usageTip: 'Often used when discussing resources or strengths that can be utilized strategically.',
    category: 'leadership',
    synonyms: ['utilize', 'exploit', 'capitalize on'],
    difficulty: 'intermediate'
  },
  {
    id: 'word-002',
    term: 'Strategic',
    definition: 'Relating to the identification of long-term or overall aims and interests and the means of achieving them',
    partOfSpeech: 'adjective',
    example: 'We need a strategic approach to solve this complex problem.',
    usageTip: 'Used to describe plans or actions that serve a larger purpose or long-term goal.',
    category: 'leadership',
    synonyms: ['planned', 'calculated', 'deliberate'],
    difficulty: 'intermediate'
  },
  {
    id: 'word-003',
    term: 'ROI',
    definition: 'Return on Investment: a performance measure used to evaluate the efficiency of an investment',
    partOfSpeech: 'noun',
    example: 'The marketing campaign delivered a 300% ROI in the first quarter.',
    usageTip: 'Commonly used in financial discussions to justify expenditures.',
    category: 'finance',
    synonyms: ['return', 'yield', 'profit'],
    difficulty: 'beginner'
  },
  {
    id: 'word-004',
    term: 'Synergy',
    definition: 'The interaction of elements that when combined produce a total effect greater than the sum of the individual elements',
    partOfSpeech: 'noun',
    example: 'The merger created synergy between the two companies, improving overall productivity.',
    usageTip: 'Use this term when discussing collaboration that creates enhanced results.',
    category: 'leadership',
    synonyms: ['cooperation', 'collaboration', 'combined effect'],
    difficulty: 'intermediate'
  },
  {
    id: 'word-005',
    term: 'Scalable',
    definition: 'Able to be changed in size or scale, especially to increase capacity or output',
    partOfSpeech: 'adjective',
    example: 'We need a scalable solution that can grow with our business needs.',
    usageTip: 'Often used in discussions about growth, technology, and business models.',
    category: 'project-management',
    synonyms: ['expandable', 'adaptable', 'flexible'],
    difficulty: 'intermediate'
  },
  {
    id: 'word-006',
    term: 'Paradigm shift',
    definition: 'A fundamental change in approach or underlying assumptions',
    partOfSpeech: 'noun',
    example: 'Remote work has caused a paradigm shift in how companies operate.',
    usageTip: 'Use when discussing major transformations in thinking or methodology.',
    category: 'leadership',
    synonyms: ['transformation', 'revolution', 'sea change'],
    difficulty: 'advanced'
  },
  {
    id: 'word-007',
    term: 'Incentivize',
    definition: 'Motivate or encourage someone to do something by offering rewards',
    partOfSpeech: 'verb',
    example: 'We need to incentivize the sales team to reach their quarterly targets.',
    usageTip: 'Used when discussing motivation strategies for employees or customers.',
    category: 'human-resources',
    synonyms: ['motivate', 'encourage', 'stimulate'],
    difficulty: 'intermediate'
  },
  {
    id: 'word-008',
    term: 'Stakeholder',
    definition: 'A person with an interest or concern in something, especially a business',
    partOfSpeech: 'noun',
    example: 'We need to consult all stakeholders before making this decision.',
    usageTip: 'Broader than "shareholder" - includes anyone affected by business decisions.',
    category: 'leadership',
    synonyms: ['interested party', 'participant', 'investor'],
    difficulty: 'beginner'
  },
  {
    id: 'word-009',
    term: 'Due diligence',
    definition: 'A comprehensive appraisal of a business undertaken by a prospective buyer to establish assets and liabilities',
    partOfSpeech: 'noun',
    example: 'Our legal team will conduct due diligence before finalizing the acquisition.',
    usageTip: 'Used in contexts of business transactions, investments, and risk assessments.',
    category: 'finance',
    synonyms: ['investigation', 'research', 'examination'],
    difficulty: 'advanced'
  },
  {
    id: 'word-010',
    term: 'Bandwidth',
    definition: 'Figuratively, the energy, mental capacity, or time available to work on something',
    partOfSpeech: 'noun',
    example: 'I don\'t have the bandwidth to take on any more projects this month.',
    usageTip: 'Originally a technical term, now commonly used to discuss personal capacity.',
    category: 'project-management',
    synonyms: ['capacity', 'resources', 'ability'],
    difficulty: 'intermediate'
  },
];

export const moduleData: Module[] = [
  {
    id: 'module-001',
    title: 'Leadership Lexicon',
    description: 'Master the vocabulary of effective leadership and management',
    category: 'leadership',
    totalWords: 25,
    imageIcon: 'briefcase',
    progress: 20,
    color: 'bg-blue-600'
  },
  {
    id: 'module-002',
    title: 'Financial Fluency',
    description: 'Build expertise in financial terminology for business success',
    category: 'finance',
    totalWords: 30,
    imageIcon: 'line-chart',
    progress: 10,
    color: 'bg-green-600'
  },
  {
    id: 'module-003',
    title: 'Marketing Mastery',
    description: 'Enhance your marketing vocabulary to communicate effectively',
    category: 'marketing',
    totalWords: 20,
    imageIcon: 'megaphone',
    progress: 5,
    color: 'bg-purple-600'
  },
  {
    id: 'module-004',
    title: 'Negotiation Know-How',
    description: 'Learn the language of successful negotiations and deals',
    category: 'negotiations',
    totalWords: 15,
    imageIcon: 'handshake',
    progress: 0,
    color: 'bg-amber-600'
  },
  {
    id: 'module-005',
    title: 'Project Management Proficiency',
    description: 'Master the terms essential for effective project management',
    category: 'project-management',
    totalWords: 20,
    imageIcon: 'clipboard-list',
    progress: 3,
    color: 'bg-cyan-600'
  },
  {
    id: 'module-006',
    title: 'HR Handbook',
    description: 'Develop vocabulary for human resources and talent management',
    category: 'human-resources',
    totalWords: 18,
    imageIcon: 'users',
    progress: 0,
    color: 'bg-pink-600'
  }
];

export const getWordOfTheDay = (): Word => {
  // In a real app, this would use the current date to determine the word
  // For demo purposes, return a random word
  const randomIndex = Math.floor(Math.random() * wordData.length);
  return wordData[randomIndex];
};

export const getModulesByCategory = (category: WordCategory): Module[] => {
  return moduleData.filter(module => module.category === category);
};

export const getUserProgress = () => {
  // In a real app, this would be calculated from user data
  return {
    totalWordsLearned: 38,
    totalWordsAvailable: 128,
    streakDays: 7,
    completedModules: 1,
    masteryLevel: 'Emerging Professional'
  };
};

export const getBusinessScenario = () => {
  return {
    title: "Quarterly Strategy Meeting",
    context: "You are leading a quarterly strategy meeting with department heads.",
    content: `
      "I'd like to open this meeting by discussing our Q3 performance. Our team has successfully **leveraged** our new technology platform to generate a substantial **ROI** on our digital investments. 
      
      However, we need to be more **strategic** in our approach to market expansion. The **synergy** between our marketing and product teams has created excellent results, but we need a more **scalable** solution for customer support.
      
      This remote-first approach represents a **paradigm shift** in our operations. I propose we **incentivize** our regional managers to implement the new framework, making sure to involve all **stakeholders** in the process.
      
      Before our next steps, the finance team will conduct proper **due diligence** on the proposed vendors. I understand everyone has limited **bandwidth** right now, so let's prioritize accordingly."
    `,
    vocabularyHighlighted: ["leveraged", "ROI", "strategic", "synergy", "scalable", "paradigm shift", "incentivize", "stakeholders", "due diligence", "bandwidth"]
  };
};
