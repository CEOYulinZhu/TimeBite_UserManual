import { ReactNode } from 'react';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    color?: 'avocado' | 'wheat' | 'tomato';
}

const FeatureCard = ({
    title,
    description,
    icon,
    color = 'avocado'
}: FeatureCardProps) => {

    const bgColorClass = {
        avocado: 'bg-avocado/10',
        wheat: 'bg-wheat/10',
        tomato: 'bg-tomato/10'
    }[color];

    const textColorClass = {
        avocado: 'text-avocado',
        wheat: 'text-wheat',
        tomato: 'text-tomato'
    }[color];

    return (
        <div className="card hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full ${bgColorClass} ${textColorClass}`}>
                    {icon}
                </div>
                <div>
                    <h3 className="text-xl font-serif font-semibold mb-2 text-truffle">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard; 