"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import LoopSlider from ".";
import Mesh from "../../assets/image/Difference/bg.svg";
import Frame from "../../assets/image/Difference/frame.svg";
import Phone from "../../assets/image/Difference/phone.svg";
import { bg_section, image, innovate_section, phone_frame, phone_video, phoneContainer, secondDiv, smart_div, tempDiv, video_image, word_content, word_div, wrapper, wrapper_firstDiv } from "./index.module.css";

const Difference = () => {

    const parentRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isTab, setIsTab] = useState(false)
    const { scrollYProgress } = useScroll({
        target: parentRef,
        offset: ["start end", "end center"]
    })

    const fastY = useTransform(scrollYProgress, [0, 1], ["-20px", "360px"])
    const mobileFastY = useTransform(scrollYProgress, [0, 1], ["-80px", "90px"])
    const tabFastY = useTransform(scrollYProgress, [0, 1], ["-80px", "40px"])
    const smallY = useTransform(scrollYProgress, [0, 1], ["-10px", "270px"])
    const mobileSmallY = useTransform(scrollYProgress, [0, 1], ["-30px", "120px"])
    const tabSmallY = useTransform(scrollYProgress, [0, 1], ["-10px", "120px"])

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
        if (window.innerWidth > 768 && window.innerWidth <= 1024) {
            setIsTab(true);
        } else {
            setIsTab(false);
        }
    }, []);

    return (
        <div className={innovate_section} >

            <div className={bg_section}>
                <Image src={Mesh} alt="background" className={image} />
            </div>


            <div className={word_div} ref={parentRef}  >
                <motion.div style={{ y: isMobile ? mobileFastY : isTab ? tabFastY : fastY }} className={wrapper_firstDiv} >
                    <WordSeparate word="EXPERIENCE" />
                    <WordSeparate word="THE" />
                </motion.div>

                <motion.div style={{ y: isMobile ? mobileFastY : isTab ? tabFastY : fastY }} className={wrapper_firstDiv}  >
                    <WordSeparate word="DIFFERENCE" />
                </motion.div>

                <motion.div style={{ y: isMobile ? mobileSmallY : isTab ? tabSmallY : smallY }} className={smart_div} >
                    <span> {`{`} </span>
                    <span> SMART </span>
                    <span> DEVELOPMENT </span>
                    <span> {`}`} </span>
                </motion.div>
            </div>


            <div className={secondDiv} >
                <LoopSlider />
                <div className={tempDiv} ></div>

                <div style={{ position: "relative" }} >
                    <div className={phoneContainer} >
                        <Image className={image} alt="phone" src={Phone} />

                        {/* Video layer - positioned to cover phone screen area */}
                        <div className={phone_video}>
                            <video autoPlay muted loop className={video_image}>
                                <source src="https://res.cloudinary.com/dq6ubifli/video/upload/v1754983884/loop_pfj5bn.mp4" type="video/mp4" />
                            </video>
                            {/* <Image src={Video} alt="Video content" className={image} /> */}
                        </div>

                        {/* Frame layer - creates phone frame illusion on top */}
                        <div className={phone_frame}>
                            <Image src={Frame} alt="Phone frame" className={image} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Difference

const WordSeparate = ({ word }) => {
    return (
        <div className={wrapper} >
            {word.split("").map((w, i) => (
                <div className={word_content} key={i} > {w} </div>
            ))
            }
        </div>
    )
}