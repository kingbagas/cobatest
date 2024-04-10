// Section structure
import Section from '../../../structure/section';
import Container from '../../../structure/container';

// Section general blocks
import SectionTitle from '../../../blocks/section.title';

// Career scss
import career from '../../../../styles/scss/sections/index/career.module.scss';

export default function Education() {
    return (
        <Section classProp={`${career.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle
                    title="Education"
                    preTitle="ABOUT ME"
                    subTitle="I am currently studying programming and technology in Malang, born in a city in Jember"
                />
                <section className={career.area}>
                    <article className={career.company}>
                        <div className={career.companyContent}>
                            <span className={career.companyHeader}>
                                <h3>Indonesia - Fauzi Bagaswara</h3>
                                <h5>Malang   · East Java</h5>
                            </span>
                            <h4>Saat ini</h4>
                            <h5>Siswa Magang DI PT UNIVERSAL BIG DATA(UBIG)MALANG East Java Sebagai FULLSTACK WEB DEVELOPER </h5>
                        </div>
                        <div className={career.companyAlt}></div>
                    </article>
                </section>
            </Container>
        </Section>
    );
}
