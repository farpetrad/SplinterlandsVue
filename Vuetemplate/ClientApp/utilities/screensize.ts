import { reactive } from 'vue'

interface IScreensize {
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
}

export default IScreensize;

export const screenSize = reactive<IScreensize>({
    sm: false,
    md: false,
    lg: false,
    xl: false,
});

(function () {
    const handleResize = () => {
        screenSize.sm = window.matchMedia("screen and (max-width:767px)").matches;
        screenSize.md = window.matchMedia("screen and (min-width:768px) and (max-width:991px)").matches;
        screenSize.lg = window.matchMedia("screen and (min-width: 992px) and (max-width:1199px)").matches;
        screenSize.xl = window.matchMedia("screen and (min-width:1200px)").matches;
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    window.onunload = () => { window.removeEventListener('resize', handleResize) };
})()
