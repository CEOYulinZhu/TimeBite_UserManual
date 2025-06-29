import SectionTitle from '../ui/SectionTitle';
import ScreenshotDisplay from '../ui/ScreenshotDisplay';

const InventoryManagementSection = () => {
    return (
        <section className="section bg-sandwhite/50">
            <div className="container-custom">
                <SectionTitle
                    title="食材库存管理"
                    subtitle="灵活高效地管理您的食材库存"
                    centered
                />

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* 左侧：截图展示 */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <ScreenshotDisplay
                            src="https://i.postimg.cc/bJCtGPgd/20250330141007.jpg"
                            alt="食光机小程序库存管理界面截图"
                            caption="库存管理界面 - 实际小程序截图"
                            maxHeight={650}
                        />
                    </div>

                    {/* 右侧：功能说明 */}
                    <div className="w-full md:w-1/2">
                        <div className="mb-6">
                            <h3 className="text-xl font-serif font-semibold mb-4 text-truffle">查看库存</h3>
                            <p className="text-gray-600 mb-4">
                                库存管理页面提供了食材的详细信息，用户可以轻松查看和管理不同状态的食材。
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-avocado text-white rounded-full flex items-center justify-center">1</span>
                                    <p className="text-gray-700"><span className="font-medium">分类查看</span>：通过"全部"、"新鲜食材"、"临期食材"、"过期食材"四个标签切换不同类别</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-avocado text-white rounded-full flex items-center justify-center">2</span>
                                    <p className="text-gray-700"><span className="font-medium">统计信息</span>：页面顶部展示总食材数量以及各状态食材的数量</p>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-serif font-semibold mb-4 text-truffle">食材操作</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-tomato text-white rounded-full flex items-center justify-center">1</span>
                                    <p className="text-gray-700"><span className="font-medium">编辑食材</span>：点击食材卡片上的"编辑"按钮，可修改食材的数量和到期日期</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-tomato text-white rounded-full flex items-center justify-center">2</span>
                                    <p className="text-gray-700"><span className="font-medium">删除食材</span>：点击食材卡片上的"删除"按钮，从库存中移除该食材</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-tomato text-white rounded-full flex items-center justify-center">3</span>
                                    <p className="text-gray-700"><span className="font-medium">添加食材</span>：点击页面底部的"添加食材"按钮，手动添加新食材到库存中</p>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-6 p-4 bg-truffle/5 rounded-lg border border-truffle/10">
                            <h4 className="font-medium text-truffle flex items-center gap-2">
                                <svg className="w-5 h-5 text-avocado" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                提示
                            </h4>
                            <p className="text-gray-600 mt-2">
                                定期整理食材库存可以帮助您更好地计划饮食，减少食材浪费。建议每次购物后立即更新库存，确保推荐的准确性。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InventoryManagementSection; 