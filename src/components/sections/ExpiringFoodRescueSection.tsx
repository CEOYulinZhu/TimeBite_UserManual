import SectionTitle from '../ui/SectionTitle';
import ScreenshotDisplay from '../ui/ScreenshotDisplay';

const ExpiringFoodRescueSection = () => {
    return (
        <section className="section bg-white">
            <div className="container-custom">
                <SectionTitle
                    title="临期救急站"
                    subtitle="巧妙利用即将过期的食材，减少浪费同时创造美味"
                    centered
                />

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* 上方(移动端)/右侧(桌面端)：截图展示 */}
                    <div className="w-full md:w-1/2 flex justify-center md:order-2">
                        <ScreenshotDisplay
                            src="https://i.postimg.cc/dVgPbtb9/image.png"
                            alt="食光机小程序临期救急站界面截图"
                            caption="临期救急站界面 - 实际小程序截图"
                            maxHeight={650}
                        />
                    </div>

                    {/* 下方(移动端)/左侧(桌面端)：功能说明 */}
                    <div className="w-full md:w-1/2 md:order-1">
                        <div className="mb-6">
                            <h3 className="text-xl font-serif font-semibold mb-4 text-truffle">临期食材管理</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-wheat text-white rounded-full flex items-center justify-center">1</span>
                                    <p className="text-gray-700"><span className="font-medium">智能提醒</span>：系统自动识别即将过期的食材并高亮显示</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-wheat text-white rounded-full flex items-center justify-center">2</span>
                                    <p className="text-gray-700"><span className="font-medium">剩余保质期</span>：清晰显示每种临期食材的剩余保质期天数</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-wheat text-white rounded-full flex items-center justify-center">3</span>
                                    <p className="text-gray-700"><span className="font-medium">食材分类</span>：根据保质期长短自动将食材分为"紧急"和"注意"两类</p>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-serif font-semibold mb-4 text-truffle">创意菜谱推荐</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-avocado text-white rounded-full flex items-center justify-center">1</span>
                                    <p className="text-gray-700"><span className="font-medium">智能匹配</span>：系统优先推荐使用临期食材的创意菜谱</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-avocado text-white rounded-full flex items-center justify-center">2</span>
                                    <p className="text-gray-700"><span className="font-medium">快速浏览</span>：上下滑动浏览更多基于临期食材的菜谱推荐</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-avocado text-white rounded-full flex items-center justify-center">3</span>
                                    <p className="text-gray-700"><span className="font-medium">查看详情</span>：点击菜谱卡片，跳转至详细的制作步骤和营养信息</p>
                                </li>
                            </ul>
                        </div>

                        <div className="p-4 bg-truffle/5 rounded-lg border border-truffle/10">
                            <h4 className="font-medium text-truffle flex items-center gap-2">
                                <svg className="w-5 h-5 text-avocado" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                减少浪费小贴士
                            </h4>
                            <p className="text-gray-600 mt-2">
                                每个月全球有近1/3的食物被浪费，合理利用临期食材不仅能节约家庭支出，更是对环境保护的重要贡献。建议每周至少查看一次临期救急站，将临期食材优先纳入烹饪计划中。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpiringFoodRescueSection; 