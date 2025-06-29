import { useEffect, useState } from 'react';

const ReadingProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    // 计算滚动进度
    useEffect(() => {
        const updateScrollProgress = () => {
            // 滚动的高度
            const scrollY = window.scrollY;
            // 文档的高度减去窗口高度
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            // 计算滚动进度
            const progress = Math.min(100, (scrollY / documentHeight) * 100);
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', updateScrollProgress);
        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
            <div
                className="h-full bg-avocado"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
};

export default ReadingProgressBar; 