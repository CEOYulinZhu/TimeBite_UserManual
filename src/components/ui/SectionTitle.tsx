interface SectionTitleProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = false }: SectionTitleProps) => {
    return (
        <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-truffle">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-3 text-lg text-gray-600">
                    {subtitle}
                </p>
            )}
            <div className={`mt-4 h-1 w-20 bg-avocado rounded ${centered ? 'mx-auto' : ''}`}></div>
        </div>
    );
};

export default SectionTitle; 