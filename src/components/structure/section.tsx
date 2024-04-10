// Section structure scss
import React from "react";
import sections from '../../styles/scss/structure/section.module.scss';

/**
 * Structural Component
 *
 * Section / Container / Componenents / Blocks / Utils
 * returns Section structure
 */
interface SectionProps {
    classProp?: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ classProp, children }) => {
    const _class = classProp ? classProp : '';

    return (
        <div className={`${sections.default} ${_class}`}>
            {children}
        </div>
    );
};

export default Section;
