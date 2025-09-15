'use client'

import Image from "next/image"
import { useCallback, useEffect, useRef } from "react"
import { gsap } from "gsap"

const Slider = (props: any) => {
    let { slides, autoplay, direction, speed, duration, current } = props,
        next = useRef<any>(current + 1),
        _current = useRef<any>(current)

    const sliders = useRef<any>(null),
        slider = gsap.utils.selector(sliders)

    const setSlide = useCallback(() => {

        // bullet('.list__item').forEach(bullet => {
        //     bullet.classList.remove("is__active")
        // })

        // bullet('.list__item')[next].classList.add("is__active")

        slider('.slide').forEach((slider: any) => {
            slider.style.zIndex = 1
        });

        sliders.current.children[next.current].style.zIndex = 3
        sliders.current.children[_current.current].style.zIndex = 2

        // textWrappers('.slideText').forEach(tt => {
        //     tt.style.opacity = 0
        // });

        // textWrapper.current.children[next].style.opacity = 0
        // textWrapper.current.children[current].style.opacity = 1
    }, [_current, next, slider])

    const nextSlide = useCallback(() => {
        _current.current === sliders.current.children.length - 1 ? _current.current = 0 : _current.current = next.current
        next.current === sliders.current.children.length - 1 ? next.current = 0 : next.current = _current.current + 1
    }, [])

    const getSlide = useCallback(() => {
        "next" === direction ? nextSlide() : prevSlide()
    }, [direction, nextSlide])


    const prevSlide = () => {

    }

    const tweenSlide = useCallback(() => {
        if (sliders.current != null) {
            setSlide()
            gsap.to(sliders.current.children[_current.current], {
                duration: speed,
                opacity: 0,
                ease: 'power3.inOut'
            })

            gsap.to(sliders.current.children[next.current], {
                duration: speed,
                opacity: 1,
                ease: 'power3.inOut'
            })

            // gsap.to(textWrapper.current.children[current], {
            //     duration: 2,
            //     opacity: 0,
            //     ease: 'power3.inOut'
            // })

            // gsap.to(textWrapper.current.children[next], {
            //     duration: 2,
            //     opacity: 1,
            //     ease: 'power3.inOut'
            // })
            getSlide()
        }
    }, [_current, getSlide, setSlide, next, speed])

    const play = useCallback(() => {
        tweenSlide()
        !0 === autoplay && gsap.delayedCall(duration, play)
    }, [autoplay, duration, tweenSlide])

    const startAutoplay = useCallback(() => {
        !0 === autoplay && gsap.delayedCall(duration, play)
    }, [autoplay, duration, play])

    const initSlide = useCallback(() => {
        slider('.slide').forEach((slider: any) => {
            slider.style.zIndex = 1
        })
        sliders.current.children[next.current].style.zIndex = 2
        sliders.current.children[_current.current].style.zIndex = 3
        sliders.current.children[_current.current].style.opacity = 1

        startAutoplay()
    }, [_current, next, slider, startAutoplay])

    const stopAutoplay = () => {
        autoplay = !1
        gsap.killTweensOf(play)
    }

    // const clickEvent = (e) => {
    //     bullet('.list__item').forEach((bullet, i) => {
    //         bullet.addEventListener('click', () => {
    //             direction = "next"
    //             stopAutoplay()
    //             next = i
    //             tweenSlide()
    //             current = i
    //             startAutoplay()
    //         })
    //     })
    // }

    useEffect(() => { initSlide() }, [initSlide])

    return (
        <div ref={sliders} className="w-full h-full relative overflow-hidden bg-white">
            {
                Array.from(slides).map((slide: any, i: any) => (
                    <Slide
                        source={slide.image}
                        author={slide.author}
                        key={i}
                    />
                )
                )
            }
        </div>
    )
}

const Slide = (props: any) => {
    let { source, author } = props

    return (
        <div className="slide absolute w-full h-full opacity-0">
            <div className="relative w-full h-full bg-white">
                <Image
                    src={source}
                    alt="Alt"
                    fill
                    style={{ objectFit: "cover" }}
                />
                <div className="absolute h-full w-full">
                    <Author author={author} />
                </div>
            </div>
        </div>
    )
}
const Author = (props: any) => {
    const { author } = props

    return (
        <div className="max-w-screen-xl w-full mx-auto px-4 flex h-full justify-end flex-col">
            <p className="text-white text-sm tracking-tighter opacity-75 mb-12">Image by {author}</p>
        </div>
    )
}

export default Slider