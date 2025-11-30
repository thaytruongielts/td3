import { VocabularyItem } from './types';

export const VOCABULARY_DATA: VocabularyItem[] = [
  {
    id: 21,
    word: "Access",
    meaning: "Truy cập",
    icon: "🔑",
    examples: [
      { phrase: "Gain access", sentence: "You must use a password to gain access to the system." },
      { phrase: "Easy access", sentence: "The new library provides easy access to thousands of books." },
      { phrase: "Deny access", sentence: "The security guard had to deny access to anyone without an ID card." },
      { phrase: "Internet access", sentence: "Students need reliable Internet access for online learning." }
    ],
    exercises: [
      {
        id: "21-1",
        question: "If you forget your login details, you will not be able to ___ the secure server.",
        correctAnswers: ["gain access"]
      },
      {
        id: "21-2",
        question: "Living near the subway station ensures ___ to public transport.",
        correctAnswers: ["easy access", "access"]
      }
    ]
  },
  {
    id: 22,
    word: "Influence",
    meaning: "Ảnh hưởng",
    icon: "💡",
    examples: [
      { phrase: "Directly influence", sentence: "The weather can directly influence the outcome of the game." },
      { phrase: "Influence public opinion", sentence: "Newspapers and TV channels often influence public opinion." },
      { phrase: "Influence a decision", sentence: "Her advice managed to influence his decision to take the job." },
      { phrase: "Greatly influence", sentence: "Parents' behavior can greatly influence their children's development." }
    ],
    exercises: [
      {
        id: "22-1",
        question: "The media has the power to ___ before an election.",
        correctAnswers: ["influence public opinion"]
      },
      {
        id: "22-2",
        question: "His personal background should not ___ of the jury.",
        correctAnswers: ["influence a decision", "influence the decision"] // "influence the decision" fits context grammatically too
      }
    ]
  },
  {
    id: 23,
    word: "Solution",
    meaning: "Giải pháp",
    icon: "🔧",
    examples: [
      { phrase: "Find a solution", sentence: "We need to work together to find a solution to this difficult problem." },
      { phrase: "Effective solution", sentence: "Using less plastic is an effective solution to reduce pollution." },
      { phrase: "Long-term solution", sentence: "The government is seeking a long-term solution to the housing crisis." },
      { phrase: "Come up with a solution", sentence: "The team was tasked to come up with a solution immediately." }
    ],
    exercises: [
      {
        id: "23-1",
        question: "The engineers need to quickly ___ before the machine breaks down.",
        correctAnswers: ["come up with a solution", "find a solution"]
      },
      {
        id: "23-2",
        question: "Building more public apartments is proposed as a ___ to overcrowding.",
        correctAnswers: ["long-term solution", "solution"]
      }
    ]
  },
  {
    id: 24,
    word: "Global",
    meaning: "Toàn cầu",
    icon: "🌍",
    examples: [
      { phrase: "Global warming", sentence: "Dealing with global warming requires cooperation from all countries." },
      { phrase: "Global impact", sentence: "The invention of the internet has had a huge global impact." },
      { phrase: "Global market", sentence: "Companies must be competitive to survive in the global market." },
      { phrase: "Global economy", sentence: "Fluctuations in oil prices affect the stability of the global economy." }
    ],
    exercises: [
      {
        id: "24-1",
        question: "Pollution from industrial zones can have a ___ on the environment.",
        correctAnswers: ["global impact"]
      },
      {
        id: "24-2",
        question: "More stability is needed for the ___ to recover completely.",
        correctAnswers: ["global economy"]
      }
    ]
  },
  {
    id: 25,
    word: "Challenge",
    meaning: "Thử thách",
    icon: "🧗",
    examples: [
      { phrase: "Face a challenge", sentence: "The new manager had to face a challenge of motivating the staff." },
      { phrase: "Overcome a challenge", sentence: "With teamwork, they managed to overcome the challenge of the tight deadline." },
      { phrase: "A serious challenge", sentence: "Climate change presents a serious challenge to humanity." },
      { phrase: "Meet the challenge", sentence: "The company must adapt quickly to meet the challenge of new technologies." }
    ],
    exercises: [
      {
        id: "25-1",
        question: "Learning a new language is always ___ but rewarding.",
        correctAnswers: ["a serious challenge", "a challenge"]
      },
      {
        id: "25-2",
        question: "The two athletes will ___ of completing the marathon.",
        correctAnswers: ["face a challenge", "face the challenge", "meet the challenge"]
      }
    ]
  },
  {
    id: 26,
    word: "Material",
    meaning: "Vật chất/Tài liệu",
    icon: "📚",
    examples: [
      { phrase: "Raw materials", sentence: "The factory imports raw materials from several Asian countries." },
      { phrase: "Reading material", sentence: "The teacher provided plenty of reading material for the course." },
      { phrase: "Recycled material", sentence: "They used only recycled material to build the eco-friendly house." },
      { phrase: "Material possessions", sentence: "Happiness is not dependent on material possessions." }
    ],
    exercises: [
      {
        id: "26-1",
        question: "Please ensure you have finished all the ___ before the exam.",
        correctAnswers: ["reading material", "reading materials"]
      },
      {
        id: "26-2",
        question: "The country relies heavily on the import of ___ for its industry.",
        correctAnswers: ["raw materials"]
      }
    ]
  },
  {
    id: 27,
    word: "Culture",
    meaning: "Văn hóa",
    icon: "🎭",
    examples: [
      { phrase: "Local culture", sentence: "Tourists should respect the local culture and traditions." },
      { phrase: "Cultural exchange", sentence: "The program promotes cultural exchange between different nations." },
      { phrase: "Business culture", sentence: "Understanding the business culture is crucial for working in Japan." },
      { phrase: "Preserve the culture", sentence: "We must work hard to preserve the culture of our ancestors." }
    ],
    exercises: [
      {
        id: "27-1",
        question: "The aim of the trip is to promote ___ among students.",
        correctAnswers: ["cultural exchange"]
      },
      {
        id: "27-2",
        question: "Every nation has a duty to ___ for future generations.",
        correctAnswers: ["preserve the culture", "preserve their culture"]
      }
    ]
  },
  {
    id: 28,
    word: "Effective",
    meaning: "Hiệu quả",
    icon: "⭐",
    examples: [
      { phrase: "Effective communication", sentence: "Effective communication prevents misunderstandings in the workplace." },
      { phrase: "Highly effective", sentence: "This medicine is considered highly effective against the virus." },
      { phrase: "Effective strategy", sentence: "The company adopted an effective strategy to increase sales." },
      { phrase: "Be effective", sentence: "To be effective, the new plan must be executed properly." }
    ],
    exercises: [
      {
        id: "28-1",
        question: "The manager implemented a ___ to tackle the rising costs.",
        correctAnswers: ["effective strategy", "an effective strategy"] // Handle article in logic if needed, but array allows options
      },
      {
        id: "28-2",
        question: "Listening actively is key to ___ in any team.",
        correctAnswers: ["effective communication"]
      }
    ]
  },
  {
    id: 29,
    word: "Experience",
    meaning: "Kinh nghiệm",
    icon: "🧠",
    examples: [
      { phrase: "Gain experience", sentence: "Volunteering is a good way to gain experience in the field." },
      { phrase: "Previous experience", sentence: "The job requires candidates with previous experience in sales." },
      { phrase: "Valuable experience", sentence: "Travelling abroad gives you valuable experience and broadens your mind." },
      { phrase: "Hands-on experience", sentence: "The course provides students with hands-on experience in the lab." }
    ],
    exercises: [
      {
        id: "29-1",
        question: "The company prefers to hire candidates who have some ___ with programming.",
        correctAnswers: ["previous experience", "experience"]
      },
      {
        id: "29-2",
        question: "Working on real projects allows students to ___ before they graduate.",
        correctAnswers: ["gain experience", "gain valuable experience"]
      }
    ]
  },
  {
    id: 30,
    word: "Benefit",
    meaning: "Mang lại lợi ích",
    icon: "🎁",
    examples: [
      { phrase: "Benefit greatly from", sentence: "Students would benefit greatly from smaller class sizes." },
      { phrase: "Benefit everyone", sentence: "The changes were designed to benefit everyone in the organization." },
      { phrase: "Benefit the environment", sentence: "Reducing waste will benefit the environment directly." },
      { phrase: "Benefit the health", sentence: "Regular exercise will benefit your health in the long run." }
    ],
    exercises: [
      {
        id: "30-1",
        question: "The new public transport system is expected to ___ in terms of time and cost.",
        correctAnswers: ["benefit everyone"]
      },
      {
        id: "30-2",
        question: "Both sides agreed that the trade agreement would ___ involved.",
        correctAnswers: ["benefit everyone", "benefit everyone involved"] // "benefit everyone" matches ex.
      }
    ]
  },
  {
    id: 31,
    word: "Source",
    meaning: "Nguồn",
    icon: "💧",
    examples: [
      { phrase: "Source of information", sentence: "The internet is a primary source of information for many people." },
      { phrase: "Reliable source", sentence: "You should always check if the news comes from a reliable source." },
      { phrase: "Renewable source", sentence: "Solar power is a renewable source of energy." },
      { phrase: "Source of income", sentence: "Selling handmade crafts became her main source of income." }
    ],
    exercises: [
      {
        id: "31-1",
        question: "We need to find a more ___ for our research paper.",
        correctAnswers: ["reliable source"]
      },
      {
        id: "31-2",
        question: "The government is investing heavily in ___ like wind and solar power.",
        correctAnswers: ["renewable source", "renewable sources"]
      }
    ]
  },
  {
    id: 32,
    word: "Concern",
    meaning: "Mối quan tâm",
    icon: "🤔",
    examples: [
      { phrase: "Serious concern", sentence: "Air quality has become a serious concern for city residents." },
      { phrase: "Express concern", sentence: "Parents often express concern about their children's screen time." },
      { phrase: "Main concern", sentence: "The safety of the students is the school's main concern." },
      { phrase: "Global concern", sentence: "Plastic pollution is now a global concern requiring international action." }
    ],
    exercises: [
      {
        id: "32-1",
        question: "The increasing rate of unemployment is a ___ for the country's leaders.",
        correctAnswers: ["serious concern", "main concern"]
      },
      {
        id: "32-2",
        question: "She wrote a letter to the principal to ___ about the school's facilities.",
        correctAnswers: ["express concern", "express her concern"]
      }
    ]
  },
  {
    id: 33,
    word: "Technology",
    meaning: "Công nghệ",
    icon: "📱",
    examples: [
      { phrase: "Advanced technology", sentence: "This new car uses advanced technology for safety features." },
      { phrase: "Information technology", sentence: "He works in the information technology (IT) sector." },
      { phrase: "Latest technology", sentence: "The new smartphones feature the latest technology." },
      { phrase: "Develop technology", sentence: "Governments invest in research to develop new technology." }
    ],
    exercises: [
      {
        id: "33-1",
        question: "The rapid evolution of ___ has changed the way we live.",
        correctAnswers: ["information technology", "technology"]
      },
      {
        id: "33-2",
        question: "The manufacturer uses only ___ to improve product performance.",
        correctAnswers: ["advanced technology", "the latest technology", "latest technology"]
      }
    ]
  },
  {
    id: 34,
    word: "Research",
    meaning: "Nghiên cứu",
    icon: "🔬",
    examples: [
      { phrase: "Do research", sentence: "Students must do research for their final term paper." },
      { phrase: "Scientific research", sentence: "Funding for scientific research is crucial for medical breakthroughs." },
      { phrase: "Carry out research", sentence: "They will carry out research into the effects of climate change." },
      { phrase: "Extensive research", sentence: "The documentary was based on extensive research and interviews." }
    ],
    exercises: [
      {
        id: "34-1",
        question: "The professor encouraged the students to ___ before starting their project.",
        correctAnswers: ["do research", "do their research", "carry out research"]
      },
      {
        id: "34-2",
        question: "The article is supported by ___ on the topic.",
        correctAnswers: ["scientific research", "extensive research"]
      }
    ]
  },
  {
    id: 35,
    word: "Support",
    meaning: "Ủng hộ/Hỗ trợ",
    icon: "🤝",
    examples: [
      { phrase: "Financial support", sentence: "The charity provides financial support to low-income families." },
      { phrase: "Emotional support", sentence: "Friends and family offer emotional support during tough times." },
      { phrase: "Support the idea", sentence: "Everyone in the meeting seemed to support the idea of expanding the business." },
      { phrase: "Strong support", sentence: "The campaign received strong support from the local community." }
    ],
    exercises: [
      {
        id: "35-1",
        question: "The organization is seeking ___ from sponsors to continue its work.",
        correctAnswers: ["financial support"]
      },
      {
        id: "35-2",
        question: "Even during difficult times, her family provided her with great ___.",
        correctAnswers: ["emotional support", "strong support"]
      }
    ]
  }
];
