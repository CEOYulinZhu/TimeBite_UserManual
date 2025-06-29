import SectionTitle from '../ui/SectionTitle';
import ScreenshotDisplay from '../ui/ScreenshotDisplay';

const NutritionAnalysisSection = () => {
    return (
        <section className="section bg-white">
            <div className="container-custom">
                <SectionTitle
                    title="营养分析"
                    subtitle="科学分析饮食营养，助您实现健康目标"
                    centered
                />

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* 上方(移动端)/右侧(桌面端)：截图展示 */}
                    <div className="w-full md:w-1/2 flex justify-center md:order-2">
                        <ScreenshotDisplay
                            src="https://i.postimg.cc/nc7LRgjg/image.png"
                            alt="食光机小程序营养分析界面截图"
                            caption="营养分析界面 - 实际小程序截图"
                            maxHeight={650}
                        />
                    </div>

                    {/* 下方(移动端)/左侧(桌面端)：功能说明 */}
                    <div className="w-full md:w-1/2 md:order-1">
                        <div className="mb-6">
                            <h3 className="text-xl font-serif font-semibold mb-4 text-truffle">时间范围选择</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-wheat text-white rounded-full flex items-center justify-center">1</span>
                                    <p className="text-gray-700"><span className="font-medium">选择时间范围</span>：可选择"今日"、"本周"或"本月"查看不同时间段的营养摄入</p>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-serif font-semibold mb-4 text-truffle">营养摄入概览</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-avocado text-white rounded-full flex items-center justify-center">1</span>
                                    <p className="text-gray-700"><span className="font-medium">三大营养素比例</span>：显示蛋白质、脂肪、碳水化合物的摄入比例</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-avocado text-white rounded-full flex items-center justify-center">2</span>
                                    <p className="text-gray-700"><span className="font-medium">热量摄入趋势</span>：图表展示选定时间段内的热量摄入变化</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-avocado text-white rounded-full flex items-center justify-center">3</span>
                                    <p className="text-gray-700"><span className="font-medium">左右滑动</span>：查看更多营养分析图表</p>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-serif font-semibold mb-4 text-truffle">营养素详情</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-tomato text-white rounded-full flex items-center justify-center">1</span>
                                    <p className="text-gray-700"><span className="font-medium">详细营养数据</span>：展示各类营养素的摄入量与目标完成度</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-tomato text-white rounded-full flex items-center justify-center">2</span>
                                    <p className="text-gray-700"><span className="font-medium">来源分析</span>：点击某项营养素，查看其主要来源食材</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-tomato text-white rounded-full flex items-center justify-center">3</span>
                                    <p className="text-gray-700"><span className="font-medium">营养建议</span>：基于当前饮食习惯，提供个性化的营养改善建议</p>
                                </li>
                            </ul>
                        </div>

                        <div className="p-4 bg-truffle/5 rounded-lg border border-truffle/10">
                            <h4 className="font-medium text-truffle flex items-center gap-2">
                                <svg className="w-5 h-5 text-avocado" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                健康提示
                            </h4>
                            <p className="text-gray-600 mt-2">
                                定期查看营养分析报告，了解自己饮食中的营养不足和过剩情况，有助于调整饮食结构，实现均衡营养。建议设置个人营养目标，系统将根据您的目标提供更精准的营养建议。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NutritionAnalysisSection; 