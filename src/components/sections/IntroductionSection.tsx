import SectionTitle from '../ui/SectionTitle';

const IntroductionSection = () => {
    return (
        <section id="introduction" className="section bg-white">
            <div className="container-custom">
                <SectionTitle
                    title="简介"
                    subtitle="了解食光机微信小程序的核心功能和价值"
                    centered
                />

                <div className="max-w-4xl mx-auto bg-sandwhite p-6 rounded-lg shadow-sm border border-gray-100">
                    <p className="text-lg leading-relaxed mb-6">
                        「食光机」是一款聚焦智能食材管理、饮食规划、营养跟踪可视化的小程序，通过拍照识别食材、临期预警与菜谱智能推荐系统，解决家庭食材浪费与饮食规划低效的痛点；基于个性化健康目标和营养报告，优化饮食结构，避免营养失衡；其创新性在于将库存管理、多成员营养适配（如过敏预警）与场景化烹饪灵感深度整合，提供从采购、烹饪、管理、分析的一站式数字饮食解决方案
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-4 bg-avocado/10 rounded-lg hover:shadow-md transition-shadow">
                            <svg className="w-10 h-10 mx-auto text-avocado mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <h3 className="font-semibold text-truffle mb-1 text-center">智能食材管理</h3>
                            <p className="text-gray-600 text-sm">AI识别食材并智能录入库存，自动跟踪保质期，临期食材智能提醒</p>
                        </div>

                        <div className="p-4 bg-wheat/10 rounded-lg hover:shadow-md transition-shadow">
                            <svg className="w-10 h-10 mx-auto text-wheat mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <h3 className="font-semibold text-truffle mb-1 text-center">个性化食谱推荐</h3>
                            <p className="text-gray-600 text-sm">基于现有食材和个人喜好，推荐适合的菜谱，包含详细的预处理、步骤和小贴士</p>
                        </div>

                        <div className="p-4 bg-tomato/10 rounded-lg hover:shadow-md transition-shadow">
                            <svg className="w-10 h-10 mx-auto text-tomato mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <h3 className="font-semibold text-truffle mb-1 text-center">营养分析</h3>
                            <p className="text-gray-600 text-sm">提供详细的饮食营养数据，设置个性化热量和营养目标，促进健康决策</p>
                        </div>

                        <div className="p-4 bg-wheat/10 rounded-lg hover:shadow-md transition-shadow">
                            <svg className="w-10 h-10 mx-auto text-wheat mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <h3 className="font-semibold text-truffle mb-1 text-center">家庭模式</h3>
                            <p className="text-gray-600 text-sm">支持切换不同家庭成员，解决多成员家庭"众口难调"问题，满足不同成员的饮食偏好</p>
                        </div>

                        <div className="p-4 bg-avocado/10 rounded-lg hover:shadow-md transition-shadow">
                            <svg className="w-10 h-10 mx-auto text-avocado mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="font-semibold text-truffle mb-1 text-center">临期提醒</h3>
                            <p className="text-gray-600 text-sm">自动提醒临期食材，减少食材浪费，并推荐合适的食谱帮助消耗临期食材</p>
                        </div>

                        <div className="p-4 bg-tomato/10 rounded-lg hover:shadow-md transition-shadow">
                            <svg className="w-10 h-10 mx-auto text-tomato mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <h3 className="font-semibold text-truffle mb-1 text-center">个性化设置</h3>
                            <p className="text-gray-600 text-sm">自定义热量目标、营养目标等个性化设置，打造专属健康饮食计划</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroductionSection; 