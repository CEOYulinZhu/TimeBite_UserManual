import SectionTitle from '../ui/SectionTitle';
import ScreenshotDisplay from '../ui/ScreenshotDisplay';

const ScanningSection = () => {
    return (
        <section className="section bg-white">
            <div className="container-custom">
                <SectionTitle
                    title="食材识别与录入"
                    subtitle="智能识别食材，省去手动输入的麻烦"
                    centered
                />

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* 上方(移动端)/左侧(桌面端)：截图展示 */}
                    <div className="w-full md:w-1/2 flex justify-center md:order-2">
                        <ScreenshotDisplay
                            src="https://i.postimg.cc/8CQ1pYVW/image.jpg"
                            alt="食光机小程序食材扫描与识别界面截图"
                            caption="食材扫描与识别界面 - 实际小程序截图"
                            maxHeight={650}
                        />
                    </div>

                    {/* 下方(移动端)/右侧(桌面端)：功能说明 */}
                    <div className="w-full md:w-1/2 md:order-1">
                        <div className="mb-6">
                            <h3 className="text-xl font-serif font-semibold mb-4 text-truffle">启动扫描</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-wheat text-white rounded-full flex items-center justify-center">1</span>
                                    <p className="text-gray-700"><span className="font-medium">启动相机</span>：点击"启动相机"按钮开始拍照识别</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-wheat text-white rounded-full flex items-center justify-center">2</span>
                                    <p className="text-gray-700"><span className="font-medium">从相册选择</span>：点击"相册选择"按钮，从手机相册中选择食材图片</p>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-serif font-semibold mb-4 text-truffle">食材识别</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-avocado text-white rounded-full flex items-center justify-center">1</span>
                                    <p className="text-gray-700"><span className="font-medium">拍照识别</span>：对准食材拍照，系统将自动识别图片中的食材</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-avocado text-white rounded-full flex items-center justify-center">2</span>
                                    <p className="text-gray-700"><span className="font-medium">识别结果</span>：显示识别出的食材列表，包含名称、置信度等信息</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-avocado text-white rounded-full flex items-center justify-center">3</span>
                                    <p className="text-gray-700"><span className="font-medium">手动调整</span>：可调整食材的数量、单位和保质期</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-avocado text-white rounded-full flex items-center justify-center">4</span>
                                    <p className="text-gray-700"><span className="font-medium">手动添加</span>：若系统未能识别某些食材，可通过"手动添加食材"功能补充</p>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-serif font-semibold mb-4 text-truffle">菜谱推荐</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-tomato text-white rounded-full flex items-center justify-center">1</span>
                                    <p className="text-gray-700"><span className="font-medium">即时推荐</span>：系统根据识别出的食材自动推荐匹配的菜谱</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-tomato text-white rounded-full flex items-center justify-center">2</span>
                                    <p className="text-gray-700"><span className="font-medium">查看详情</span>：点击推荐的菜谱卡片，查看该菜谱的详细做法</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-tomato text-white rounded-full flex items-center justify-center">3</span>
                                    <p className="text-gray-700"><span className="font-medium">录入库存</span>：点击"录入食材库"按钮，将识别的食材添加至库存中</p>
                                </li>
                            </ul>
                        </div>

                        <div className="p-4 bg-truffle/5 rounded-lg border border-truffle/10">
                            <h4 className="font-medium text-truffle flex items-center gap-2">
                                <svg className="w-5 h-5 text-avocado" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                使用建议
                            </h4>
                            <p className="text-gray-600 mt-2">
                                购物回家后直接使用扫描功能，可以一次性录入多个食材，大大提高食材管理效率。对于包装食品，推荐使用相机拍摄包装上的保质期信息，以便系统准确判断食材状态。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScanningSection; 