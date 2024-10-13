export const slideIn = {
    initial: {
        scaleY: 0
    },
    enter: {
        scaleY: 0
    },
    exit: { scaleY: 1 },
    transition: {
        duration: 2,
        ease: [0.22, 1, 0.36, 1]
    }
}

export const slideOut = {
    initial: {
        scaleY: 1
    },
    enter: {
        scaleY: 0
    },
    exit: { scaleY: 0 },
    transition: {
        duration: 2,
        ease: [0.22, 1, 0.36, 1]
    }
}

export const perspective = {
    initial: {
        scale: 1,
        y: 0,
    },
    enter: {
        scale: 1,
        y: 0,
    },
    exit: {
        scale: 0.9,
        y: -150,
        opacity: 0.5,
        transition: {
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1]
        }
    }
}

export const slide = {
    initial: {
        y: "100vh",
    },
    enter: {
        y: "100vh"
    },
    exit: {
        y: 0,
        transition: {
            duration: 1,
            ease: [0.76, 0, 0.24, 1]
        }
    }
}

export const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1,
        transition: {
            duration: 0.5
        }
    },
    exit: {
        opacity: 1
    }
}