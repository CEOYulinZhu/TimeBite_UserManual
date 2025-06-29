import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';

// FAQ项组件
interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    toggleOpen: () => void;
}

const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => {
    return (
        <div className="border-b border-gray-200 py-4">
            <button
                onClick={toggleOpen}
                className="flex justify-between items-center w-full text-left font-medium text-lg text-truffle hover:text-avocado transition-colors"
                aria-expanded={isOpen}
            >
                <span>{question}</span>
                <svg
                    className={`w-5 h-5 text-avocado transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                    maxHeight: isOpen ? '500px' : '0',
                    opacity: isOpen ? 1 : 0,
                    visibility: isOpen ? 'visible' : 'hidden',
                    marginTop: isOpen ? '0.5rem' : '0'
                }}
            >
                <div className="text-gray-600 pb-2">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQSection = () => {
    // 常见问题列表
    const faqs = [
        {
            id: 1,
            question: "为什么菜谱推荐不准确？",
            answer: "可能是因为库存信息不完整，建议定期更新食材库存，确保系统能根据准确的食材情况推荐适合的菜谱。另外，在'我的'页面设置饮食偏好和口味喜好，可以提高推荐的精准度。"
        },
        {
            id: 2,
            question: "如何批量添加食材？",
            answer: "可以使用扫描功能一次性识别多个食材，或从购物清单一键添加。扫描功能支持同时识别多种食材，大大提高录入效率。在购物回家后，推荐一次性将所有食材摆放整齐后拍照识别。"
        },
        {
            id: 3,
            question: "营养数据从哪里来？",
            answer: "营养数据来自于您记录的餐饮计划和实际食用情况。系统会根据您的饮食记录，结合食材的营养成分数据库，计算出详细的营养摄入情况。数据库包含上万种食材的详细营养素信息。"
        },
        {
            id: 4,
            question: "如何修改食材到期日期？",
            answer: "在库存管理页面，点击食材的\"编辑\"按钮，修改到期日期。系统会根据新的到期日期自动更新食材的状态（新鲜、临期或过期）。您也可以在扫描识别页面直接设置正确的到期日期。"
        },
        {
            id: 5,
            question: "家庭模式如何使用？",
            answer: "在'我的'页面中，找到'家庭管理'选项，您可以添加多个家庭成员。每个成员可以设置不同的饮食偏好和营养目标。切换成员后，系统会根据当前成员的设置提供个性化推荐。这非常适合有特殊饮食需求的家庭成员，比如儿童、老人或有饮食禁忌的人群。"
        },
        {
            id: 6,
            question: "扫描识别准确率不高怎么办？",
            answer: "提高扫描识别准确率的几个技巧：1) 确保光线充足，避免阴影遮挡食材；2) 尽量使食材包装正面朝上或清晰可见；3) 对于多个食材，可分批拍摄提高单个识别准确度；4) 如果识别结果不准确，可以使用手动添加功能进行修正；5) 对于常用食材，系统会随着您的使用逐渐提高识别准确率。"
        },
        {
            id: 7,
            question: "一键购物清单如何使用？",
            answer: "一键购物清单功能可以基于您的食材库存状态和使用频率，自动生成需要购买的食材清单。在首页点击'一键补货'按钮即可生成。系统会优先推荐即将用完的常用食材和补充临期食材的替代品。您可以手动编辑清单，删除不需要的项目或添加其他食材。完成购买后，可一键将清单中的食材添加到库存中。"
        },
        {
            id: 8,
            question: "可以自定义食材过期提醒时间吗？",
            answer: "可以。在'我的'页面中，找到'保质期设置'，您可以自定义提醒时间。"
        }
    ];

    // 状态管理 - 跟踪哪个FAQ项是打开的，默认没有打开
    const [openFaqId, setOpenFaqId] = useState<number | null>(null);

    // 切换FAQ项的打开/关闭状态
    const toggleFaq = (id: number) => {
        setOpenFaqId(openFaqId === id ? null : id);
    };

    return (
        <section id="faq" className="section bg-white">
            <div className="container-custom">
                <SectionTitle
                    title="常见问题"
                    subtitle="关于食光机小程序使用过程中的常见疑问解答"
                    centered
                />

                <div className="max-w-3xl mx-auto mt-8 bg-sandwhite/50 rounded-lg p-6 shadow-sm">
                    {faqs.map(faq => (
                        <FAQItem
                            key={faq.id}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openFaqId === faq.id}
                            toggleOpen={() => toggleFaq(faq.id)}
                        />
                    ))}

                    <div className="mt-8 p-4 bg-truffle/5 rounded-lg border border-truffle/10">
                        <h4 className="font-medium text-truffle flex items-center gap-2">
                            <svg className="w-5 h-5 text-avocado" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            使用提示
                        </h4>
                        <p className="text-gray-600 mt-2">
                            如果您在使用过程中遇到上述未能解答的问题，可以通过"我的"-"帮助与反馈"功能提交您的疑问，我们的客服团队会尽快为您解答。同时，我们会持续更新产品功能，提升用户体验。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
