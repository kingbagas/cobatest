// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges'
import CopyBlock from '../../blocks/about.copy'

// Section scss
import technical from '../../../styles/scss/sections/index/about.module.scss'


export default function Technical() {
    return (
        <Section classProp={`${technical.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle
                    title="Technical"
                    preTitle="Hard Skills"
                    subTitle="As a creative technologist, I craft intuitive digital experiences using a diverse set of tools and languages."
                />
                <section className={`${technical.content} ${technical.container}`}>
                    <div className={technical.copy}>
                        <CopyBlock
                            title="Logical Thinking"
                            icon="fas" 
                            copy="Dengan dasar yang kuat dalam desain dan pengembangan, saya menggunakan pemikiran logis untuk mendekati setiap proyek. Saya membawa perspektif unik, selalu mencari solusi inovatif dan tetap terkini dengan tren industri terbaru."
                            iconClass={technical.icon}
                            containerClass={technical.container}
                        />

                        <BadgesBlock
                            title="Software I love now "
                            copy="Saya adalah programmer autodidak dengan minat besar dalam pengembangan proyek. Saya memiliki pemahaman yang kuat dan intuitif tentang desain antarmuka perangkat lunak terbaik di dunia. Saya senang bekerja dengan alat seperti VS Code dan perangkat lunak "
                            list={software}
                            block="software"
                            fullContainer="fullContainer"
                            icon="grid-2-plus"
                            containerClass={technical.container}
                            headerIcon={technical.icon} invertedColor={undefined} />

                        <BadgesBlock
                            title="Technologies I loved build"
                            copy="Saya adalah pemecah masalah yang bersemangat, menikmati menciptakan solusi inovatif melalui pemrograman. Mulai dari front-end hingga back-end, saya senang menantang batas kemungkinan"
                            list={tech}
                            block="tech"
                            fullContainer="fullContainer"
                            icon="laptop-code"
                            containerClass={technical.container}
                            headerIcon={technical.icon} invertedColor={undefined} />

                    </div>
                    <div className={`${technical.image} ${technical.technicalSvg}`}>
                        <Image src="/img/dataism-24.svg" width={477} height={1111} alt="data string background" loading="eager" />
                    </div>
                </section>
            </Container>
            {/* <SectionGridBg gridSize={4}/> */}
        </Section>
    )
}

const software = [
    { key: 'figma', name: 'Figma', type: 'devicon' },
    { key: 'jetbrains', name: 'Jetbrains', type: 'devicon' },
    { key: 'vscode', name: 'VSCode', type: 'devicon' },
    { key: 'androidstudio', name: 'Flutter', type: 'devicon' },
]

const tech = [
    { key: 'javascript', name: 'JavaScript', type: 'devicon' },
    { key: 'nodejs', name: 'NodeJS', type: 'devicon' },
    { key: 'react', name: 'React', type: 'devicon' },
    { key: 'nextjs', name: 'NextJS', type: 'devicon' },
    { key: 'php', name: 'PHP', type: 'devicon' },
    { key: 'html5', name: 'HTML5', type: 'devicon' },
    { key: 'css3', name: 'CSS3', type: 'devicon' },
    { key: 'sass', name: 'SASS', type: 'devicon' },
    { key: 'git', name: 'Git', type: 'devicon' },
    { key: 'mysql', name: 'MySQL', type: 'devicon' },
    { key: 'mongodb', name: 'MongoDB', type: 'devicon' },
    { key: 'python', name: 'Python', type: 'devicon' },
    { key: 'java', name: 'Java', type: 'devicon' },
    { key: 'django', name: 'Django', type: 'devicon' },
    { key: 'typescript', name: 'TypeScript', type: 'devicon' },
    { key: 'jquery', name: 'jQuery', type: 'devicon' },
    { key: 'kotlin', name: 'dart', type: 'devicon' },
    { key: 'tailwind', name: 'TailwindCSS', type: 'devicon' },
    { key: 'bootstrap', name: 'Bootstrap', type: 'devicon' },
    { key: 'npm', name: 'npm', type: 'devicon' },
    { key: 'android', name: 'Android', type: 'devicon' },
    { key: 'firebase', name: 'Firebase', type: 'devicon' },
];
