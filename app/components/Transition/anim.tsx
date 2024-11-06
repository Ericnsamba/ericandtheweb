export const perspective = {
    initial: {
        scale: 1,
        y: 0,
        opacity: 1
    },
    enter: {
        scale: 1,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1]
        }
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
        y: 0,
        transition: {
            duration: 1.5,
            ease: [0.76, 0, 0.24, 1]
        }
    },
    exit: {
        y: 0,
        transition: {
            duration: 1.5,
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
            duration: 0.8,
            delay: 0.2
        }
    },
    exit: {
        opacity: 1,
    }
}