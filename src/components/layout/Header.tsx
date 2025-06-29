import { useState } from 'react';
import logoIcon from '../../assets/images/logo-icon.svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 关闭菜单并滚动到目标位置
    const scrollToSection = (id: string) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            // 获取导航栏高度
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 0;

            // 计算元素距离页面顶部的距离
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

            // 滚动到目标位置，减去导航栏高度和一个小偏移量(10px)，确保内容不被导航栏遮挡
            window.scrollTo({
                top: elementPosition - headerHeight - 10,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container-custom py-4">
                <div className="flex items-center justify-between">
                    <a
                        href="#hero"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('hero');
                        }}
                        className="flex items-center space-x-2"
                    >
                        <img src={logoIcon} alt="食光机Logo" className="w-8 h-8" />
                        <span className="text-2xl font-serif font-bold text-truffle">食光机</span>
                    </a>

                    {/* 桌面端导航 */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a
                            href="#hero"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('hero');
                            }}
                            className="text-truffle hover:text-avocado transition-colors"
                        >
                            首页
                        </a>
                        <a
                            href="#introduction"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('introduction');
                            }}
                            className="text-truffle hover:text-avocado transition-colors"
                        >
                            简介
                        </a>
                        <a
                            href="#features"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('features');
                            }}
                            className="text-truffle hover:text-avocado transition-colors"
                        >
                            使用介绍
                        </a>
                        <a
                            href="#faq"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('faq');
                            }}
                            className="text-truffle hover:text-avocado transition-colors"
                        >
                            常见问题
                        </a>
                    </nav>

                    {/* 移动端菜单按钮 */}
                    <button
                        className="md:hidden text-truffle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>

                {/* 移动端导航菜单 */}
                {isMenuOpen && (
                    <nav className="md:hidden pt-4 pb-2 border-t mt-4">
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#hero"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection('hero');
                                    }}
                                    className="block py-1 text-truffle hover:text-avocado transition-colors"
                                >
                                    首页
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#introduction"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection('introduction');
                                    }}
                                    className="block py-1 text-truffle hover:text-avocado transition-colors"
                                >
                                    简介
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#features"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection('features');
                                    }}
                                    className="block py-1 text-truffle hover:text-avocado transition-colors"
                                >
                                    使用介绍
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#faq"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection('faq');
                                    }}
                                    className="block py-1 text-truffle hover:text-avocado transition-colors"
                                >
                                    常见问题
                                </a>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header; 