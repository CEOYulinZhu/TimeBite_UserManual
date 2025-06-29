import SectionTitle from '../ui/SectionTitle';
import ScreenshotDisplay from '../ui/ScreenshotDisplay';

const HomeSection = () => {
    return (
        <section id="features" className="section bg-sandwhite/50">
            <div className="container-custom">
                <SectionTitle
                    title="首页"
                    subtitle="了解食光机小程序首页的各项核心功能"
                    centered
                />

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* 左侧：截图展示 */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <ScreenshotDisplay
                            src="https://i.postimg.cc/m2NpYWGV/image.png"
                            alt="食光机小程序首页截图"
                            caption="首页界面 - 实际小程序截图"
                            maxHeight={650}
                        />
                    </div>

                    {/* 右侧：功能说明 */}
                    <div className="w-full md:w-1/2">
                        <div className="mb-6">
                            <h3 className="text-xl font-serif font-semibold mb-4 text-truffle">主要功能区域</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-wheat text-white rounded-full flex items-center justify-center">1</span>
                                    <p className="text-gray-700"><span className="font-medium">临期食材提醒</span>：以醒目的红色背景提示用户关注即将过期的食材</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-wheat text-white rounded-full flex items-center justify-center">2</span>
                                    <p className="text-gray-700"><span className="font-medium">今日推荐菜谱</span>：根据用户库存食材自动推荐合适的菜谱</p>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-serif font-semibold mb-4 text-truffle">信息展示</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-avocado text-white rounded-full flex items-center justify-center">1</span>
                                    <p className="text-gray-700"><span className="font-medium">食材库存概览</span>：直观展示不同状态食材的数量统计</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-avocado text-white rounded-full flex items-center justify-center">2</span>
                                    <p className="text-gray-700"><span className="font-medium">常用功能快捷入口</span>：快速访问食材扫描、食谱推荐等功能</p>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-serif font-semibold mb-4 text-truffle">快捷操作</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-tomato text-white rounded-full flex items-center justify-center">1</span>
                                    <p className="text-gray-700"><span className="font-medium">本周食谱生成</span>：一键生成本周餐饮计划，解决"吃什么"难题</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-tomato text-white rounded-full flex items-center justify-center">2</span>
                                    <p className="text-gray-700"><span className="font-medium">一键补货</span>：基于常用食材和临期食材，智能生成购物清单</p>
                                </li>
                            </ul>
                        </div>

                        <div className="p-4 bg-truffle/5 rounded-lg border border-truffle/10">
                            <h4 className="font-medium text-truffle flex items-center gap-2">
                                <svg className="w-5 h-5 text-avocado" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                设计理念
                            </h4>
                            <p className="text-gray-600 mt-2">
                                食光机小程序界面设计遵循直观、高效的原则，通过清晰的信息层级和简洁的操作流程，帮助用户轻松管理食材和获取推荐。首页作为用户最常访问的页面，集中展示了最重要的信息和功能。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSection; 