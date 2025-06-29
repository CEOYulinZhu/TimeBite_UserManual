import SectionTitle from '../ui/SectionTitle';
import ScreenshotDisplay from '../ui/ScreenshotDisplay';

const ProfileSection = () => {
    return (
        <section className="section bg-sandwhite/50">
            <div className="container-custom">
                <SectionTitle
                    title="个人中心"
                    subtitle="个性化设置与用户管理功能"
                    centered
                />

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* 左侧：截图展示 */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <ScreenshotDisplay
                            src="https://i.postimg.cc/XvhS0Nt8/image.png"
                            alt="食光机小程序个人中心界面截图"
                            caption="个人中心界面 - 实际小程序截图"
                            maxHeight={650}
                        />
                    </div>

                    {/* 右侧：功能说明 */}
                    <div className="w-full md:w-1/2">
                        <div className="mb-6">
                            <h3 className="text-xl font-serif font-semibold mb-4 text-truffle">个人信息管理</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-wheat text-white rounded-full flex items-center justify-center">1</span>
                                    <p className="text-gray-700"><span className="font-medium">个人信息设置</span>：进入"我的"页面，设置个人信息和头像</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-wheat text-white rounded-full flex items-center justify-center">2</span>
                                    <p className="text-gray-700"><span className="font-medium">饮食偏好</span>：设置个人饮食禁忌、口味喜好和特殊饮食需求</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-wheat text-white rounded-full flex items-center justify-center">3</span>
                                    <p className="text-gray-700"><span className="font-medium">家庭管理</span>：添加、编辑和切换不同家庭成员的个人设置</p>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-serif font-semibold mb-4 text-truffle">健康目标设置</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-avocado text-white rounded-full flex items-center justify-center">1</span>
                                    <p className="text-gray-700"><span className="font-medium">热量目标设置</span>：根据个人情况设置每日热量摄入目标</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-avocado text-white rounded-full flex items-center justify-center">2</span>
                                    <p className="text-gray-700"><span className="font-medium">营养元素目标</span>：自定义蛋白质、脂肪、碳水化合物等营养元素的摄入目标</p>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-serif font-semibold mb-4 text-truffle">系统设置</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-tomato text-white rounded-full flex items-center justify-center">1</span>
                                    <p className="text-gray-700"><span className="font-medium">保质期提醒时间</span>：设置食材到期前的提醒时间，避免食材浪费</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-tomato text-white rounded-full flex items-center justify-center">2</span>
                                    <p className="text-gray-700"><span className="font-medium">推送偏好</span>：自定义接收的推送消息类型，如临期提醒、菜谱推荐等</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-tomato text-white rounded-full flex items-center justify-center">3</span>
                                    <p className="text-gray-700"><span className="font-medium">系统辅助功能</span>：包括帮助与反馈、隐私政策、用户协议、关于食光机等</p>
                                </li>
                            </ul>
                        </div>

                        <div className="p-4 bg-truffle/5 rounded-lg border border-truffle/10">
                            <h4 className="font-medium text-truffle flex items-center gap-2">
                                <svg className="w-5 h-5 text-avocado" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                个性化提示
                            </h4>
                            <p className="text-gray-600 mt-2">
                                设置个人饮食偏好和健康目标后，系统会根据您的设置提供更加个性化的菜谱推荐和营养建议。家庭模式支持多个成员使用同一账号，但拥有各自的饮食设置，特别适合有不同饮食需求的家庭成员。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection; 