import SectionTitle from '../ui/SectionTitle';
import ScreenshotDisplay from '../ui/ScreenshotDisplay';

const MealPlanningSection = () => {
    return (
        <section className="section bg-sandwhite/50">
            <div className="container-custom">
                <SectionTitle
                    title="食谱计划"
                    subtitle="科学规划一周一日三餐，告别'今天吃什么'的困扰"
                    centered
                />

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* 左侧：截图展示 */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <ScreenshotDisplay
                            src="https://i.postimg.cc/QNSDvbx8/image.jpg"
                            alt="食光机小程序餐饮计划界面截图"
                            caption="餐饮计划界面 - 实际小程序截图"
                            maxHeight={650}
                        />
                    </div>

                    {/* 右侧：功能说明 */}
                    <div className="w-full md:w-1/2">
                        <div className="mb-6">
                            <h3 className="text-xl font-serif font-semibold mb-4 text-truffle">日期选择</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-wheat text-white rounded-full flex items-center justify-center">1</span>
                                    <p className="text-gray-700"><span className="font-medium">查看日期</span>：滑动顶部日期选择器，选择要查看的日期</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-wheat text-white rounded-full flex items-center justify-center">2</span>
                                    <p className="text-gray-700"><span className="font-medium">当日计划</span>：默认显示当天的早餐、午餐和晚餐计划</p>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-serif font-semibold mb-4 text-truffle">管理餐饮计划</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-avocado text-white rounded-full flex items-center justify-center">1</span>
                                    <p className="text-gray-700"><span className="font-medium">添加食谱</span>：点击空白餐饮计划卡，从推荐菜谱中选择添加</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-avocado text-white rounded-full flex items-center justify-center">2</span>
                                    <p className="text-gray-700"><span className="font-medium">查看详情</span>：点击已添加的食谱卡片，查看食谱详情</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-avocado text-white rounded-full flex items-center justify-center">3</span>
                                    <p className="text-gray-700"><span className="font-medium">编辑替换</span>：点击食谱卡片上的编辑图标，更换其他食谱</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-avocado text-white rounded-full flex items-center justify-center">4</span>
                                    <p className="text-gray-700"><span className="font-medium">删除食谱</span>：点击食谱卡片上的删除图标，移除该餐食谱</p>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-serif font-semibold mb-4 text-truffle">批量操作</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-tomato text-white rounded-full flex items-center justify-center">1</span>
                                    <p className="text-gray-700"><span className="font-medium">生成购物清单</span>：根据计划生成所需食材的购物清单</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-tomato text-white rounded-full flex items-center justify-center">2</span>
                                    <p className="text-gray-700"><span className="font-medium">分享食谱计划</span>：将当前或本周的食谱计划分享给亲友</p>
                                </li>
                            </ul>
                        </div>

                        <div className="p-4 bg-truffle/5 rounded-lg border border-truffle/10">
                            <h4 className="font-medium text-truffle flex items-center gap-2">
                                <svg className="w-5 h-5 text-avocado" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                时间管理小贴士
                            </h4>
                            <p className="text-gray-600 mt-2">
                                建议提前一周规划餐饮计划，可以更有效地安排采购清单，减少食材浪费。周末可以花15分钟规划下周的用餐计划，将为您节省大量平日决策时间。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MealPlanningSection; 