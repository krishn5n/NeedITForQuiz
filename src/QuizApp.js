import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

const quizData = [
    {
        id: 1,
        question: "The Russian scientist Vladimir Vernadsky is credited with popularizing the concept of the:",
        options: ["Food web", "Biosphere", "Niche", "Ecosystem"],
        correct: 1
    },
    {
        id: 2,
        question: "Which of these is NOT a primary macronutrient required by plants?",
        options: ["Calcium (Ca)", "Phosphorus (P)", "Potassium (K)", "Nitrogen (N)"],
        correct: 0
    },
    {
        id: 3,
        question: "According to Thomas Malthus, what are 'positive checks' on population growth?",
        options: [
            "Factors like foresight and moral restraint that lower the birth rate.",
            "Technological advancements that increase food supply.",
            "Government policies promoting family planning.",
            "Factors like famine, disease, and war that increase the death rate."
        ],
        correct: 3
    },
    {
        id: 4,
        question: "The geographical area within which a species is found is defined as its:",
        options: ["Range", "Territory", "Niche", "Habitat"],
        correct: 0
    },
    {
        id: 5,
        question: "The Lotka-Volterra equations model the cyclical population dynamics between:",
        options: ["A host and a parasite", "A predator and its prey", "Two competing species", "A plant and its pollinator"],
        correct: 1
    },
    {
        id: 6,
        question: "Establishing a National Park to protect a tiger population in its natural habitat is an example of which conservation strategy?",
        options: ["In-situ conservation", "Restoration ecology", "Reintroduction program", "Ex-situ conservation"],
        correct: 0
    },
    {
        id: 7,
        question: "A transition area where two distinct communities, like a forest and a grassland, meet and integrate is called a(n):",
        options: ["Biome", "Ecotone", "Niche", "Guild"],
        correct: 1
    },
    {
        id: 8,
        question: "The use of plants and their associated microorganisms to degrade or remove contaminants from soil and water is called:",
        options: ["Eutrophication", "Biomagnification", "Bioaccumulation", "Phytoremediation"],
        correct: 3
    },
    {
        id: 9,
        question: "The total amount of energy or carbon fixed by autotrophs through photosynthesis per unit time is referred to as:",
        options: ["Gross Primary Production (GPP)", "Light Use Efficiency (LUE)", "Net Primary Production (NPP)", "Standing Crop"],
        correct: 0
    },
    {
        id: 10,
        question: "A biodiversity hotspot is a region characterized by high species richness, a high degree of endemism, and which other factor?",
        options: ["A large geographical area", "Low human population density", "A high degree of threat", "A stable climate"],
        correct: 2
    },
    {
        id: 11,
        question: "Building a seawall to protect a coastal city from rising sea levels is an example of which type of response to climate change?",
        options: ["Restoration", "Adaptation", "Geoengineering", "Mitigation"],
        correct: 1
    },
    {
        id: 12,
        question: "What is the primary cause of eutrophication in lakes and rivers?",
        options: ["Excess nutrient input (nitrogen and phosphorus)", "Heavy metal pollution", "Acid rain", "Sedimentation"],
        correct: 0
    },
    {
        id: 13,
        question: "The one-way movement of an individual away from its place of birth to a new habitat is called:",
        options: ["Migration", "Dispersal", "Commuting", "Nomadism"],
        correct: 1
    },
    {
        id: 14,
        question: "The use of a natural enemy, such as a predatory insect, to control a pest population is known as:",
        options: ["Biological control", "Integrated Pest Management", "Cultural control", "Chemical control"],
        correct: 0
    },
    {
        id: 15,
        question: "The phenomenon where a small population suffers reduced fitness due to mating between closely related individuals is known as:",
        options: ["The founder effect", "Inbreeding depression", "Genetic drift", "Demographic stochasticity"],
        correct: 1
    },
    {
        id: 16,
        question: "In the logistic growth curve, the initial slow-growth phase due to a small population size is known as the:",
        options: ["Lag phase", "Log phase", "Decline phase", "Stationary phase"],
        correct: 0
    },
    {
        id: 17,
        question: "A species that has a disproportionately large effect on its environment relative to its abundance is called a:",
        options: ["Indicator species", "Keystone species", "Dominant species", "Pioneer species"],
        correct: 1
    },
    {
        id: 18,
        question: "The concentration of toxins like DDT increasing at higher trophic levels is an example of:",
        options: ["Biomagnification", "Bioaccumulation", "Bioremediation", "Biodegradation"],
        correct: 0
    },
    {
        id: 19,
        question: "The 'tragedy of the commons' describes a situation where:",
        options: [
            "Individuals acting in their own self-interest deplete a shared, limited resource.",
            "A population exceeds its carrying capacity and crashes.",
            "An invasive species outcompetes native species.",
            "A keystone species is removed from an ecosystem."
        ],
        correct: 0
    },
    {
        id: 20,
        question: "The process of assisting the recovery of a degraded ecosystem to a state that resembles its condition prior to the disturbance is called:",
        options: ["Conservation", "Rehabilitation", "Ecological restoration", "Preservation"],
        correct: 2
    },
    {
        id: 21,
        question: "In the community theories, who proposed the 'organismic' concept, viewing the community as a discrete superorganism?",
        options: ["Hubbell", "Gleason", "Clements", "Tansley"],
        correct: 2
    },
    {
        id: 22,
        question: "The regular, seasonal movement of animals along fixed routes, like that of Demoiselle cranes, is known as:",
        options: ["Nomadism", "Migration", "Dispersal", "Range expansion"],
        correct: 1
    },
    {
        id: 23,
        question: "The phenomenon where the presence of one prey species negatively impacts another prey species by increasing the population of a shared predator is known as:",
        options: ["Intraspecific competition", "Apparent competition", "Exploitative competition", "Interference competition"],
        correct: 1
    },
    {
        id: 24,
        question: "The process where the evolution of one species drives the evolution of another species with which it closely interacts is known as:",
        options: ["Coevolution", "Speciation", "Genetic drift", "Adaptive radiation"],
        correct: 0
    },
    {
        id: 25,
        question: "The initial step in an Environmental Impact Assessment (EIA) that determines if a full EIA is required is known as:",
        options: ["Monitoring", "Reporting", "Scoping", "Screening"],
        correct: 3
    },
    {
        id: 26,
        question: "In community ecology, what is a 'guild'?",
        options: [
            "A stable, final stage of ecological succession.",
            "The most numerically abundant species in a community.",
            "All species living in a specific habitat.",
            "A group of species that utilize resources in a similar way."
        ],
        correct: 3
    },
    {
        id: 27,
        question: "Which of the following describes a 'disclimax' community?",
        options: [
            "A final community stage determined solely by the regional climate.",
            "A stable community maintained by continuous human or domestic animal disturbance.",
            "A stable community maintained by a recurring catastrophic event like fire.",
            "An intermediate stage in ecological succession."
        ],
        correct: 1
    },
    {
        id: 28,
        question: "A symbiotic relationship where both organisms benefit and the interaction is OBLIGATORY for their survival (e.g., Rhizobium bacteria and leguminous plants) is called:",
        options: ["Protocooperation", "Commensalism", "Mutualism", "Parasitism"],
        correct: 2
    },
    {
        id: 29,
        question: "Which sampling method involves capturing, marking, releasing, and then recapturing individuals to estimate population size?",
        options: ["Removal method", "Line transect method", "Quadrat sampling", "Mark-recapture method"],
        correct: 3
    },
    {
        id: 30,
        question: "A sampling method where a heterogeneous area is divided into homogeneous sub-populations (strata) from which samples are then taken is called:",
        options: ["Simple random sampling", "Systematic sampling", "Multistage sampling", "Stratified sampling"],
        correct: 3
    },
    {
        id: 31,
        question: "A plant releasing chemicals into the soil that inhibit the growth of nearby competing plants is an example of:",
        options: ["Exploitative competition", "Allelopathy (Interference competition)", "Apparent competition", "Predation"],
        correct: 1
    },
    {
        id: 32,
        question: "The industrial Haber process is a significant human intervention in which nutrient cycle?",
        options: ["Water cycle", "Carbon cycle", "Nitrogen cycle", "Phosphorus cycle"],
        correct: 2
    },
    {
        id: 33,
        question: "Which concept is defined as meeting the needs of the present generation without compromising the ability of future generations to meet their own needs?",
        options: ["Economic Growth", "Sustainable Development", "Resource Exploitation", "Maximum Sustainable Yield"],
        correct: 1
    },
    {
        id: 34,
        question: "In community ecology, what term describes the ability of a community to resist change when faced with external pressures?",
        options: ["Resistance", "Succession", "Resilience", "Dominance"],
        correct: 0
    },
    {
        id: 35,
        question: "Who is considered the 'father of modern taxonomy' for creating a comprehensive system of naming and classifying species?",
        options: ["Theophrastus", "Gregor Mendel", "Carolus Linnaeus", "Charles Darwin"],
        correct: 2
    },
    {
        id: 36,
        question: "Ecological succession that begins on a substrate that previously supported life but has undergone a disturbance, such as a forest fire, is known as:",
        options: ["Primary succession", "Secondary succession", "Allogenic succession", "Cyclic succession"],
        correct: 1
    },
    {
        id: 37,
        question: "Which principle states that the growth and distribution of an organism is limited by the single essential factor that is in the least supply relative to its requirements?",
        options: ["Competitive Exclusion Principle", "Liebig's Law of the Minimum", "Shelford's Law of Tolerance", "The Allee Effect"],
        correct: 1
    },
    {
        id: 38,
        question: "The concept that a system, such as a colony of ants forming a raft, exhibits properties that its individual components do not possess is known as the:",
        options: ["Principle of Limiting Factors", "Competitive Exclusion Principle", "Hierarchical Principle", "Emergent Principle"],
        correct: 3
    },
    {
        id: 39,
        question: "The very first hardy species, like lichens on bare rock, that colonize a new or severely disturbed ecosystem are known as:",
        options: ["Climax species", "Dominant species", "Pioneer species", "Keystone species"],
        correct: 2
    },
    {
        id: 40,
        question: "The process of a large, continuous habitat being broken down into smaller, isolated patches is called:",
        options: ["Habitat succession", "Habitat selection", "Habitat fragmentation", "Habitat degradation"],
        correct: 2
    },
    {
        id: 41,
        question: "The phenomenon where a small population size leads to reduced individual fitness (e.g., difficulty finding mates or performing group behaviors) is known as:",
        options: ["Inbreeding depression", "Demographic stochasticity", "Genetic drift", "The Allee effect"],
        correct: 3
    },
    {
        id: 42,
        question: "The total economic value of biodiversity is divided into 'Use Value' and which other category?",
        options: ["Ecological Value", "Intrinsic Value", "Non-Use Value", "Market Value"],
        correct: 2
    },
    {
        id: 43,
        question: "A management adage states: 'What cannot be measured cannot be ______.'",
        options: ["controlled", "conserved", "improved", "managed"],
        correct: 3
    },
    {
        id: 44,
        question: "Which population parameter refers to the average number of live births per 1000 individuals in a year?",
        options: ["General fertility rate", "Crude birth rate", "Age-specific fertility rate", "Total fertility rate"],
        correct: 1
    },
    {
        id: 45,
        question: "A stable community, like a mature forest, that has reached the final stage of ecological succession is known as a:",
        options: ["Pioneer community", "Transient community", "Seral community", "Climax community"],
        correct: 3
    },
    {
        id: 46,
        question: "In the context of population parameters, what is 'fecundity'?",
        options: [
            "The death rate of juveniles.",
            "The potential reproductive capacity of an individual or population.",
            "The average lifespan of an individual.",
            "The ratio of males to females."
        ],
        correct: 1
    },
    {
        id: 47,
        question: "The hypothesis suggesting that predation can increase biodiversity by preventing superior competitors from monopolizing resources is part of the:",
        options: ["Interspecific Interactions Hypothesis", "Geographical Area Hypothesis", "Ambient Energy Hypothesis", "Evolutionary Speed Hypothesis"],
        correct: 0
    },
    {
        id: 48,
        question: "A hierarchical process of behavioral responses that results in the disproportionate use of certain habitats over others is defined as:",
        options: ["Habitat selection", "Territoriality", "Migration", "Dispersal"],
        correct: 0
    },
    {
        id: 49,
        question: "The Kuczera curve illustrates that after a forest fire or clear-cutting, the annual water yield in streams initially:",
        options: ["Remains unchanged", "Decreases significantly before recovering", "Fluctuates unpredictably", "Increases rapidly"],
        correct: 3
    },
    {
        id: 50,
        question: "The I=PAT equation models human environmental impact. What does the 'A' represent?",
        options: ["Affluence", "Adaptation", "Agriculture", "Area"],
        correct: 0
    }
];

export default function QuizApp() {
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(0);

    const getQuizQuestions = (quizNum) => {
        const start = (quizNum - 1) * 10;
        return quizData.slice(start, start + 10);
    };

    const handleQuizSelect = (quizNum) => {
        setSelectedQuiz(quizNum);
        setCurrentQuestion(0);
        setAnswers({});
        setScore(0);
    };

    const handleAnswerClick = (questionId, selectedOption) => {
        if (answers[questionId] !== undefined) return;

        const question = quizData.find(q => q.id === questionId);
        const isCorrect = selectedOption === question.correct;

        setAnswers(prev => ({
            ...prev,
            [questionId]: selectedOption
        }));

        if (isCorrect) {
            setScore(prev => prev + 1);
        }
    };

    const handleNext = () => {
        const questions = getQuizQuestions(selectedQuiz);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(prev => prev - 1);
        }
    };

    const handleReset = () => {
        setSelectedQuiz(null);
        setCurrentQuestion(0);
        setAnswers({});
        setScore(0);
    };

    if (!selectedQuiz) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center p-4">
                <div className="w-full max-w-2xl">
                    <h1 className="text-4xl font-bold text-white text-center mb-8">
                        Ecology Quiz
                    </h1>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map(num => (
                            <button
                                key={num}
                                onClick={() => handleQuizSelect(num)}
                                className="w-full bg-white text-black py-4 px-6 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors"
                            >
                                Quiz {num} (Questions {(num - 1) * 10 + 1}-{num * 10})
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    const questions = getQuizQuestions(selectedQuiz);
    const currentQ = questions[currentQuestion];
    const isAnswered = answers[currentQ.id] !== undefined;
    const allAnswered = questions.every(q => answers[q.id] !== undefined);

    return (
        <div className="min-h-screen bg-black text-white p-4">
            <div className="max-w-3xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <button
                        onClick={handleReset}
                        className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                    >
                        <RotateCcw size={18} />
                        Back to Menu
                    </button>
                    <div className="text-xl font-semibold">
                        Score: {score}/{questions.length}
                    </div>
                </div>

                <div className="bg-gray-900 rounded-3xl p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-400">Question {currentQuestion + 1} of {questions.length}</span>
                        <span className="text-gray-400">Quiz {selectedQuiz}</span>
                    </div>

                    <div className="h-1 bg-gray-700 rounded-full mb-6">
                        <div
                            className="h-full bg-white rounded-full transition-all duration-300"
                            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                        />
                    </div>

                    <h2 className="text-2xl font-semibold mb-6 leading-relaxed">
                        {currentQ.question}
                    </h2>

                    <div className="space-y-3">
                        {currentQ.options.map((option, idx) => {
                            let bgColor = 'bg-white';

                            if (isAnswered) {
                                if (idx === currentQ.correct) {
                                    bgColor = 'bg-green-400 bg-opacity-60';
                                } else if (idx === answers[currentQ.id] && idx !== currentQ.correct) {
                                    bgColor = 'bg-red-400 bg-opacity-60';
                                } else {
                                    bgColor = 'bg-white bg-opacity-50';
                                }
                            }

                            return (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswerClick(currentQ.id, idx)}
                                    disabled={isAnswered}
                                    className={`w-full ${bgColor} text-black py-4 px-6 rounded-2xl font-medium text-left hover:bg-opacity-80 transition-all ${isAnswered ? 'cursor-default' : 'hover:scale-[1.02]'
                                        }`}
                                >
                                    {option}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <button
                        onClick={handlePrev}
                        disabled={currentQuestion === 0}
                        className={`flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold transition-all ${currentQuestion === 0
                                ? 'opacity-30 cursor-not-allowed'
                                : 'hover:bg-gray-100'
                            }`}
                    >
                        <ChevronLeft size={20} />
                        Previous
                    </button>

                    {allAnswered && currentQuestion === questions.length - 1 ? (
                        <div className="text-center">
                            <div className="text-2xl font-bold mb-2">
                                Quiz Complete!
                            </div>
                            <div className="text-lg">
                                Final Score: {score}/{questions.length} ({Math.round((score / questions.length) * 100)}%)
                            </div>
                        </div>
                    ) : (
                        <button
                            onClick={handleNext}
                            disabled={currentQuestion === questions.length - 1}
                            className={`flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold transition-all ${currentQuestion === questions.length - 1
                                    ? 'opacity-30 cursor-not-allowed'
                                    : 'hover:bg-gray-100'
                                }`}
                        >
                            Next
                            <ChevronRight size={20} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
