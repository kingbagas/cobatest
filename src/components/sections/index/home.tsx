import React from 'react';
import Image from 'next/image';
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title';
import CopyBlock from '../../blocks/about.copy';
import BadgesBlock from '../../blocks/about.badges';
import about from '../../../styles/scss/sections/index/about.module.scss';
import content from '../../../content/index/hero.json';

export default function About() {
    return (
        <Section classProp={about.section}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle
                    title="About Me"
                    preTitle="Synopsis"
                    subTitle={`
                    Sejak saya berumur 5 tahun, keinginan saya untuk mempelajari hal-hal baru dimulai dengan mempelajari komputer. Tenggelam dalam coding, saya mengasah keterampilan saya dan mencari solusi inovatif. Kecintaan terhadap penciptaan telah membentuk karier saya, mendorong keinginan saya untuk mewujudkan proyek yang berdampak dan menakjubkan. Saya berusaha untuk menciptakan pengalaman yang luar biasa dan mengesankan.`}
                />
                <section className={about.content}>
                    <div className={about.image}>
                        <Image src="/img/gambar.jpg" width={740} height={400} alt="Fauzi Bagaswara" loading="eager" />
                    </div>
                    <div className={about.copy}>
                        <CopyBlock
                            title="Softskills"
                            containerClass={about.container}
                            iconClass={about.icon}
                            icon="fas" // Tambahkan properti 
                            copy={`Dengan keahlian di bidang desain dan teknis, saya adalah pengembang yang handal dalam menyediakan solusi berkualitas tinggi. Saya juga memiliki kemampuan kepemimpinan dan manajemen waktu yang kuat, serta mampu melakukan banyak tugas sekaligus. Saya selalu mencari peluang untuk memperluas pengetahuan saya dan tetap terkini dengan tren industri terbaru. Dengan semangat untuk menciptakan aplikasi yang inovatif dan efisien, saya berkomitmen untuk memberikan nilai tambah dan kesuksesan dalam setiap proyek pengembangan.`}
                        />
                        <CopyBlock
                            title="Development and Projects"
                            containerClass={about.container}
                            iconClass={about.icon}
                            icon="fab" // Tambahkan properti icon 
                            copy={`Pengembangan dan pelaksanaan proyek adalah hasrat saya. Saya telah berhasil mengatasi tantanga serta  ide melalui pengkodean dan mengubah konsep menjadi solusi yang fungsional dan kuat. Dengan perencanaan yang cermat, alur kerja yang efisien, dan perhatian terhadap detail, saya memastikan keberhasilan penyampaian proyek, memenuhi tujuan, dan melampaui harapan klien yang diminta.`}
                        />
                    </div>
                </section>
                <section className={about.content}>
                    <div className={about.copy}>
                        <CopyBlock
                            title="Security and Privacy"
                            containerClass={about.container}
                            iconClass={about.icon}
                            icon="fal" // Tambahkan properti icon 
                            copy={`Keamanan dan privasi adalah hal terpenting dalam pendekatan saya terhadap pembangunan. Saya memprioritaskan perlindungan data sensitif dan menerapkan langkah-langkah keamanan yang kuat. Dengan mengikuti praktik terbaik industri dan terus mengikuti perkembangan terkini mengenai ancaman yang muncul, saya memastikan bahwa informasi pengguna tetap terlindungi. Kepercayaan dan kerahasiaan adalah landasan pekerjaan saya.`}
                        />
                        <CopyBlock
                            title="Constant Learning and Improvements"
                            containerClass={about.container}
                            iconClass={about.icon}
                            icon="far"
                            copy={`Saya memiliki rasa haus yang tak terpuaskan akan pengetahuan dan hasrat untuk terus belajar dan berkembang. Mengikuti tren industri terkini dan teknologi baru memungkinkan saya untuk tetap menjadi yang terdepan. Dengan secara aktif mencari tantangan baru dan memperluas keahlian saya, saya terus-menerus mendorong batas-batas kemampuan saya.`}
                        />
                        <BadgesBlock
                            title="Research and planning"
                            containerClass={about.container}
                            list={methods} // Definisikan atau impor variabel methods sebelumnya
                            fullContainer="fullContainer"
                            block="methods"
                            icon="fingerprint"
                            copy={`Salah satu aspek yang paling menggembirakan dari proses kreatif saya adalah melakukan penelitian mendalam dan perencanaan yang cermat untuk proyek-proyek pembangunan. Dari Sistem Desain serta hingga Strategi Merek, saya menikmati kesempatan untuk mengeksplorasi berbagai titik kontak pengalaman pengguna yang interaktif. Terus berupaya untuk memperluas pengetahuan dan keterampilan saya, saya intropeksi diri dalam penelitian untuk tetap menjadi yang terdepan dalam tren industri bertujuan  untuk menciptakan pengalaman digital luar biasa yang melebihi ekspektasi dan memberikan hasil yang terukur.`} invertedColor={undefined} headerIcon={undefined}                        />
                    </div>
                </section>
            </Container>
        </Section>
    );

}

const methods = [
    { key: 'machinelearning', name: 'Machine Learning', type: 'fad', icon: 'devicon' },
    { key: 'artificialintelligence', name: 'Artificial Intelligence', type: 'fad', icon: 'devicon' },
];
