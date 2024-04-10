// Utility scss
import spaces from '../../styles/scss/utils/spacing.module.scss';

export default function Spacing(spacing) {
    let classes = [];
    if (Array.isArray(spacing)) {
        spacing.forEach(space => {
            if (spaces[space]) {
                classes.push(spaces[space]);
            }
        });
    } else {
        if (spaces[spacing]) {
            classes.push(spaces[spacing]);
        }
    }
    return classes.join(' ');
}
