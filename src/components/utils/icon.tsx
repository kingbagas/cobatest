import React, { useEffect, useState } from 'react';
import { IconName, IconPrefix, library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fas } from '@fortawesome/pro-solid-svg-icons';
// import { far } from '@fortawesome/pro-regular-svg-icons';
// import { fal } from '@fortawesome/pro-light-svg-icons';
// import { fad } from '@fortawesome/pro-duotone-svg-icons';
// import { fat } from '@fortawesome/pro-thin-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';

// // Icons
// library.add(fas, far, fal, fad, fat, fab);

interface IconProps {
    icon: [IconPrefix, IconName];
}

const Icon: React.FC<IconProps> = ({ icon }) => {
    const [stateIconKey, setIconKey] = useState<IconName>('circle-notch');

    useEffect(() => {
        const [, iconKey] = icon;
        setIconKey(iconKey);
    }, [icon]);

    return <FontAwesomeIcon icon={icon} />;
};

export default Icon;
