const Footer = () => {
    // 定义滚动到指定ID的函数
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // 获取导航栏高度
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 0;

            // 计算元素距离页面顶部的距离
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

            // 滚动到目标位置，减去导航栏高度和一个小偏移量(20px)，确保内容不被导航栏遮挡
            window.scrollTo({
                top: elementPosition - headerHeight - 20,
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer className="bg-truffle text-white py-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-serif font-semibold mb-4 text-wheat">食光机使用手册</h3>
                        <p className="text-gray-300 mb-4">
                            本使用手册详细介绍了食光机微信小程序的各项功能与操作方法，
                            帮助用户快速上手，充分利用智能食材管理、个性化食谱推荐、
                            餐饮计划安排及营养分析等功能，提升家庭饮食管理体验。
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-serif font-semibold mb-4 text-wheat">快速导航</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <button
                                    onClick={() => scrollToSection('hero')}
                                    className="hover:text-wheat transition-colors cursor-pointer"
                                >
                                    首页
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('introduction')}
                                    className="hover:text-wheat transition-colors cursor-pointer"
                                >
                                    简介
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('features')}
                                    className="hover:text-wheat transition-colors cursor-pointer"
                                >
                                    使用介绍
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('faq')}
                                    className="hover:text-wheat transition-colors cursor-pointer"
                                >
                                    常见问题
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-serif font-semibold mb-4 text-wheat">关于我们</h3>
                        <p className="text-gray-300 mb-2">食光机 - 让每份食材物尽其用</p>
                        <p className="text-gray-300 mb-2">食光机 - 让健康饮食简单起来</p>
                        <p className="text-gray-300 mb-2">开发者微信：19108427390</p>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} 食光机  | 使用手册网站</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 