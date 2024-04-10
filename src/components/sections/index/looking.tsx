import React from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import looking from '../../../styles/scss/sections/index/looking.module.scss';
import section from '../../../styles/scss/blocks/section.title.module.scss';

export default function Looking() {
    return (
        <Section classProp={`${looking.section} borderBottom`}>
            <Container classProp={`${section.title} ${looking.container}`} spacing={['verticalXXXLrg']}>
                <h4>I m currently looking for Jobs.</h4>
                <h2 className={looking.json}>Jobs : &#123;</h2>
                <h2 className={looking.jsonSub}><span className={looking.highlight}>Full Stack Developer</span>,</h2>
                <h2 className={looking.jsonSub}><span className={looking.highlight2}>Malang East Java</span></h2>
                <h2 className={looking.json}>&#125;</h2>
                <h4>I am very interested in a product-based position where I can help create a business Service or website</h4>
            </Container>
        </Section>
    );
}
