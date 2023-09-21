import { useRef } from 'react';
import { useLayoutEffect } from 'react';
import { gsap, Linear } from 'gsap';
import "../../assets/style/RotateTextAnimate.css"

function RotateTextAnimate() {
    const comp = useRef();
    useLayoutEffect(() => {
        let tl = gsap.timeline({ repeat: -1, defaults: { ease: Linear, duration: 2, delay: 1 } });
        tl.to(".marquee_track", { yPercent: -100 });
        tl.to(".marquee_track", { yPercent: -200 });
        tl.to(".marquee_track", { yPercent: -300 });
    }, []);
    // tl.to(".marquee_track", { ease: "expo.Out", duration:1 });
    return (
        <div className='sliding-inner'>
            <div className="marquee">
                <div className="marquee_track">
                    <div className="marquee_item">
                        <h4>
                            <span>Go</span>
                            <span className='text-textColor'> Beyond</span>
                        </h4>
                    </div>
                    <div className="marquee_item">
                        <h4>
                            <span>Imbibe</span>
                            <span className='text-textColor'> Ideas</span>
                        </h4>
                    </div>
                    <div className="marquee_item">
                        <h4>
                            <span>Refine</span>
                            <span className='text-textColor'> Career</span>
                        </h4>
                    </div>
                    {/* <div class="marquee_item">
                        <h4>
                            <span>Go</span>
                            <span className='text-textColor'> Beyond</span>
                            <span className='text-dotcolor'>.</span>
                        </h4>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
export default RotateTextAnimate;