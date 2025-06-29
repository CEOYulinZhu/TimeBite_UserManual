import SectionTitle from '../ui/SectionTitle';
import ScreenshotDisplay from '../ui/ScreenshotDisplay';

const RecipeDetailSection = () => {
    return (
        <section className="section bg-white">
            <div className="container-custom">
                <SectionTitle
                    title="菜谱详情"
                    subtitle="全方位呈现菜品制作的每一个细节"
                    centered
                />

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* 上方(移动端)/右侧(桌面端)：截图展示 */}
                    <div className="w-full md:w-1/2 flex justify-center md:order-2">
                        <ScreenshotDisplay
                            src="https://i.postimg.cc/13RQ97M7/image.png"
                            alt="食光机小程序菜谱详情界面截图"
                            caption="菜谱详情界面 - 实际小程序截图"
                            maxHeight={650}
                        />
                    </div>

                    {/* 下方(移动端)/左侧(桌面端)：功能说明 */}
                    <div className="w-full md:w-1/2 md:order-1">
                        <div className="mb-6">
                            <h3 className="text-xl font-serif font-semibold mb-4 text-truffle">查看菜谱信息</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-wheat text-white rounded-full flex items-center justify-center">1</span>
                                    <p className="text-gray-700"><span className="font-medium">基本信息</span>：菜谱名称、简介、标签等</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-wheat text-white rounded-full flex items-center justify-center">2</span>
                                    <p className="text-gray-700"><span className="font-medium">分类浏览</span>：通过"食材"、"工具"、"预处理"、"步骤"、"小贴士"五个标签切换不同内容</p>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-serif font-semibold mb-4 text-truffle">食材清单</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-avocado text-white rounded-full flex items-center justify-center">1</span>
                                    <p className="text-gray-700"><span className="font-medium">查看所需食材</span>：分为主料、辅料和调料三类</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-avocado text-white rounded-full flex items-center justify-center">2</span>
                                    <p className="text-gray-700"><span className="font-medium">库存匹配</span>：系统会自动显示食材在库存中的状态</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-avocado text-white rounded-full flex items-center justify-center">3</span>
                                    <p className="text-gray-700"><span className="font-medium">复制食材清单</span>：一键复制所有食材清单，方便购物</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-avocado text-white rounded-full flex items-center justify-center">4</span>
                                    <p className="text-gray-700"><span className="font-medium">添加到购物清单</span>：将缺少的食材添加到购物清单中</p>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-serif font-semibold mb-4 text-truffle">烹饪指南</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-tomato text-white rounded-full flex items-center justify-center">1</span>
                                    <p className="text-gray-700"><span className="font-medium">查看工具准备</span>：所需厨房工具及替代方案</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-tomato text-white rounded-full flex items-center justify-center">2</span>
                                    <p className="text-gray-700"><span className="font-medium">预处理步骤</span>：食材的前期处理方法</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-tomato text-white rounded-full flex items-center justify-center">3</span>
                                    <p className="text-gray-700"><span className="font-medium">烹饪步骤</span>：详细的烹饪流程，配有图片说明</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-tomato text-white rounded-full flex items-center justify-center">4</span>
                                    <p className="text-gray-700"><span className="font-medium">烹饪小贴士</span>：提升烹饪效果的专业建议</p>
                                </li>
                            </ul>
                        </div>

                        <div className="p-4 bg-truffle/5 rounded-lg border border-truffle/10">
                            <h4 className="font-medium text-truffle flex items-center gap-2">
                                <svg className="w-5 h-5 text-avocado" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                智能推荐菜谱
                            </h4>
                            <p className="text-gray-600 mt-2">
                                系统根据您的食材库存和饮食偏好，智能推荐最适合您的菜谱。食谱详情页内的菜谱都经过精心筛选，确保食材新鲜、营养均衡，让您的每一餐都美味健康。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecipeDetailSection; 