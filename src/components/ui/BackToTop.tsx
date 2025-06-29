import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // 监听滚动事件，决定是否显示按钮
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // 滚动到顶部的函数
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // 使用Portal将按钮直接挂载到body
    return createPortal(
        isVisible && (
            <button
                onClick={scrollToTop}
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#4A2F2B',
                    color: 'white',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    cursor: 'pointer',
                    zIndex: 9999,
                    transition: 'all 0.2s ease-in-out'
                }}
                aria-label="返回顶部"
            >
                <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                </svg>
            </button>
        ),
        document.body
    );
};

export default BackToTop; 