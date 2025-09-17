// ...existing code...

interface ProblemSectionProps {
    problem: {
        hookStatistic: string;
        description: string;
        costBreakdown: {
            time: string;
            money: string;
            opportunity: string;
            stress: string;
        };
        realExample: string;
    };
}

export default function ProblemSection({ problem }: ProblemSectionProps) {
    return (
        <section className="mb-8">
            <h2 className="text-xl font-bold text-primary-600 mb-2">Problem</h2>
            <p className="text-lg mb-2 font-semibold">{problem.hookStatistic}</p>
            <p className="mb-4 text-gray-700">{problem.description}</p>
            <ul className="mb-4 text-gray-600">
                <li><strong>Time:</strong> {problem.costBreakdown.time}</li>
                <li><strong>Money:</strong> {problem.costBreakdown.money}</li>
                <li><strong>Opportunity:</strong> {problem.costBreakdown.opportunity}</li>
                <li><strong>Stress:</strong> {problem.costBreakdown.stress}</li>
            </ul>
            <div className="bg-gray-50 rounded p-4 text-sm text-gray-800">
                <strong>Real Example:</strong> {problem.realExample}
            </div>
        </section>
    );
}
