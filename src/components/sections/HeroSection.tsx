import { useEffect, useRef, useState } from 'react';
import ScreenshotDisplay from '../ui/ScreenshotDisplay';

const HeroSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    // 确保箭头在视窗水平中央底部并调整高度
    useEffect(() => {
        const handleResize = () => {
            if (sectionRef.current && arrowRef.current) {
                // 计算并设置箭头的位置，确保水平居中
                arrowRef.current.style.left = `50%`; // 使用CSS百分比定位，更可靠
            }
        };

        // 调整hero区域高度，减去导航栏高度
        const adjustHeight = () => {
            if (sectionRef.current) {
                const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                sectionRef.current.style.height = `calc(100vh - ${headerHeight}px)`;
                sectionRef.current.style.minHeight = `calc(100vh - ${headerHeight}px)`;
            }
        };

        // 添加自定义动画到文档
        const addAnimation = () => {
            const styleEl = document.createElement('style');
            styleEl.textContent = `
                @keyframes pulse-and-bounce {
                    0%, 100% {
                        transform: translateY(0) scale(1);
                    }
                    50% {
                        transform: translateY(10px) scale(1.05);
                    }
                }
            `;
            document.head.appendChild(styleEl);

            return () => {
                document.head.removeChild(styleEl);
            };
        };

        // 处理滚动，决定是否显示箭头
        const handleScroll = () => {
            // 当滚动超过视口高度的10%时，隐藏箭头
            if (window.scrollY > window.innerHeight * 0.1) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
                // 重新确保位置正确
                setTimeout(handleResize, 10);
            }
        };

        handleResize();
        adjustHeight();
        const removeAnimation = addAnimation();

        window.addEventListener('resize', () => {
            handleResize();
            adjustHeight();
        });

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
            removeAnimation();
        };
    }, []);

    // 滚动到指定元素的函数，添加偏移量
    const scrollToElement = (selector: string) => {
        const element = document.querySelector(selector);
        if (element) {
            // 获取导航栏高度作为偏移量
            const headerHeight = document.querySelector('header')?.offsetHeight || 0;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

            // 滚动到目标位置，减去导航栏高度和额外的空间（20px）
            window.scrollTo({
                top: elementPosition - headerHeight - 20,
                behavior: 'smooth'
            });
        }
    };

    // 跳转到简介部分
    const scrollToIntroduction = () => {
        scrollToElement('#introduction');
    };

    // 跳转到首页介绍部分
    const scrollToHomeIntro = () => {
        scrollToElement('#features');
    };

    return (
        <section
            ref={sectionRef}
            id="hero"
            className="bg-gradient-to-br from-sandwhite to-sandwhite/70 relative overflow-hidden flex items-center"
        >
            {/* 装饰图形 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-avocado/10 rounded-full -translate-y-1/3 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-wheat/10 rounded-full translate-y-1/3 -translate-x-1/3"></div>

            <div className="container-custom py-16 md:py-24 relative z-10 w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="md:order-1 order-2">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-truffle leading-tight">
                            食光机 <span className="text-avocado">使用手册</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-lg">
                            智能食材管理与食谱推荐小程序，帮助您管理食材库存、提供个性化食谱推荐和营养分析，让健康饮食更简单。
                        </p>

                        <div className="mt-8 space-x-4 flex flex-wrap gap-4">
                            <button onClick={scrollToIntroduction} className="btn-primary">
                                了解小程序
                            </button>
                            <button onClick={scrollToHomeIntro} className="btn-secondary">
                                使用介绍
                            </button>
                        </div>
                    </div>

                    <div className="md:order-2 order-1 flex justify-center">
                        {/* 使用封装的截图展示组件 */}
                        <ScreenshotDisplay
                            src="https://i.postimg.cc/m2NpYWGV/image.png"
                            alt="食光机小程序首页截图"
                            caption="首页界面 - 实际小程序截图"
                            maxHeight={650}
                        />
                    </div>
                </div>
            </div>

            {/* 向下滚动提示 - 一直保持DOM中但控制可见性 */}
            <div
                ref={arrowRef}
                className="absolute z-20 left-1/2"
                style={{
                    bottom: '32px',
                    width: '48px',
                    height: '48px',
                    transform: 'translateX(-50%)',
                    opacity: isScrolled ? 0 : 1,
                    visibility: isScrolled ? 'hidden' : 'visible',
                    transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
                    pointerEvents: isScrolled ? 'none' : 'auto'
                }}
            >
                <div
                    className="relative flex items-center justify-center w-12 h-12"
                    style={{
                        animation: 'pulse-and-bounce 2s infinite'
                    }}
                >
                    {/* 外圈光晕 */}
                    <div className="absolute w-full h-full rounded-full bg-avocado/20 animate-pulse"></div>

                    {/* 主按钮 */}
                    <div className="absolute w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center animate-bounce">
                        <svg className="w-6 h-6 text-avocado" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection; 