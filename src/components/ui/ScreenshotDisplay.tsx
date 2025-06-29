import React from 'react';

interface ScreenshotDisplayProps {
    src: string;
    alt: string;
    caption?: string;
    maxHeight?: number;
    maxWidth?: number;
}

/**
 * 通用截图展示组件
 * 提供美观、一致的方式显示应用截图，带白色背景、圆角和阴影效果
 */
const ScreenshotDisplay: React.FC<ScreenshotDisplayProps> = ({
    src,
    alt,
    caption,
    maxHeight = 630,
    maxWidth = 280
}) => {
    return (
        <div className="relative w-full" style={{ maxWidth: `${maxWidth}px` }}>
            <div className="bg-white rounded-3xl shadow-xl p-3 border border-gray-200">
                <div className="rounded-2xl overflow-hidden" style={{ maxHeight: `${maxHeight}px` }}>
                    <img
                        src={src}
                        alt={alt}
                        className="w-auto h-auto object-contain mx-auto"
                        style={{ maxHeight: `${maxHeight - 20}px` }}
                    />
                </div>
            </div>
            {caption && (
                <span className="block text-center mt-4 text-sm text-gray-600">{caption}</span>
            )}
        </div>
    );
};

export default ScreenshotDisplay; 