import { ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import BackToTop from '../ui/BackToTop';
import ReadingProgressBar from '../ui/ReadingProgressBar';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    // 添加调试日志
    useEffect(() => {
        console.log('布局组件已加载，样式应该已应用');
        console.log('检查Tailwind是否正确加载:', document.body.classList);
    }, []);

    return (
        <>
            <ReadingProgressBar />
            <div className="flex flex-col min-h-screen bg-sandwhite">
                <Header />
                <main className="flex-grow w-full">
                    {children}
                </main>
                <Footer />
            </div>
            <BackToTop />
        </>
    );
};

export default Layout; 