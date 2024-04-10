// Core packages
import Badges from '../../../utils/badge.list';

// Section structure
import Section from '../../../structure/section';
import Container from '../../../structure/container';

// Section general blocks
import SectionTitle from '../../../blocks/section.title';

// Career scss
import career from '../../../../styles/scss/sections/index/career.module.scss';
import Education from "./education";

export default function Career() {
	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Experience"
					preTitle="Karir"
					subTitle="Saya seorang WebDeveloper Full Stack,  di bidang pengembangan proyek. Tujuan utama saya adalah untuk meningkatkan keterampilan dan memperluas pengetahuan saya untuk mendapatkan pengalaman berharga dalam pengembangan proyek yang kompleks"
				/>
				<section className={career.area}>
					<div className={career.position}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Full Stack Web Developer</h3>
								<h4> · Present</h4>
							</span>
						</div>
						<div className={career.companyAlt}></div>
						<Badges list={fullStack} block="stack" fullContainer="fullContainer" color={undefined}/>
					</div>
				</section>
			</Container>
			<Education/>
		</Section>
	);
}

const fullStack = [
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
	{ key: 'nodejs', name: 'NodeJS', type: 'devicon' },
	{ key: 'react', name: 'React', type: 'devicon' },
	{ key: 'nextjs', name: 'NextJS', type: 'devicon' },
	{ key: 'php', name: 'Laravel', type: 'devicon' },
	{ key: 'html5', name: 'HTML5', type: 'devicon' },
	{ key: 'css3', name: 'CSS3', type: 'devicon' },
	{ key: 'sass', name: 'SASS', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
	{ key: 'mysql', name: 'MySQL', type: 'devicon' },
	{ key: 'mongodb', name: 'MongoDB', type: 'devicon' },
	{ key: 'python', name: 'Python', type: 'devicon' },
	{ key: 'django', name: 'Django', type: 'devicon' },
	{ key: 'typescript', name: 'TypeScript', type: 'devicon' },
	{ key: 'jquery', name: 'jQuery', type: 'devicon' },
	{ key: 'tailwindcss', name: 'TailwindCSS', type: 'devicon' },
	{ key: 'bootstrap', name: 'Bootstrap', type: 'devicon' },
	{ key: 'npm', name: 'NPM', type: 'devicon' },
	{ key: "firebase", name: "Firebase", type: "devicon" },
];
