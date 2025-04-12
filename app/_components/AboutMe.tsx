'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
            <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
    "Nothing is ever truly hard—it just needs more time to understand." 
    This simple yet powerful idea became my personal motto during my development journey
    at university. It taught me patience, resilience, and the importance of persistence when 
    tackling complex problems. Every bug, every challenge became a puzzle waiting to be solved,
    and over time, I learned that growth as a developer comes not from avoiding difficulty, 
    but from embracing it.
</h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, I&apos;m Theodore.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                            "Be stronger and wiser than you were yesterday" <br/> 
                            The words of a full-stack Developer,
                            a dedicated problem-solver who loves learning new skills and exploring life from a philosophical, psychological and software development perspective
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                            I craft intuitive, visually engaging interfaces that provide an effortless user experience. My process centers on designing scalable, high-performance solutions that align user needs with business goals. 
                            By emphasizing efficiency, accessibility, and responsive design, 
                            I create experiences that captivate audiences and deliver measurable impact.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
