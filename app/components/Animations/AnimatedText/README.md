# AnimatedText Component

A reusable React component that animates text with GSAP when it enters the viewport, with the option to reverse the animation when it exits. This component combines framer-motion for viewport detection with GSAP for smooth text animations.

## Features

- Uses framer-motion's `useInView` hook for precise viewport detection
- GSAP animations for smooth, performant text reveal effects
- Support for both word-by-word and line-by-line animations
- Optional mask effect for clean line animations
- Support for various HTML tags (h1-h6, p, span, div)
- Configurable animation parameters for both entrance and exit animations
- Option to animate once or every time the element enters/exits the viewport
- Adjustable threshold for triggering animations

## Installation

This component requires the following dependencies:

```bash
npm install gsap @gsap/react framer-motion
```

## Usage

```jsx
import AnimatedText from '@/components/AnimatedText';

function MyComponent() {
  return (
    <div>
      {/* Word animation - animates once when in view */}
      <AnimatedText 
        text="This animates word by word" 
        className="text-4xl font-bold"
        animationType="words" 
      />
      
      {/* Line animation with mask effect */}
      <AnimatedText 
        text="This animates line by line. Each line will animate independently." 
        tag="p"
        className="text-xl" 
        animationType="lines"
        mask={true}
        stagger={0.2}
      />
      
      {/* With reverse animation when scrolling away */}
      <AnimatedText 
        text="I appear and disappear!" 
        tag="h2"
        className="text-3xl" 
        once={false}
        reverseAnimation={true}
      />
      
      {/* Custom animation timing */}
      <AnimatedText 
        text="Custom animation timing" 
        tag="p"
        className="text-xl" 
        delay={0.5}
        duration={1.2}
        stagger={0.1}
        reverseAnimation={true}
        reverseDelay={0.1}
        reverseDuration={0.8}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | (required) | The text to be animated |
| `className` | string | "" | CSS classes to apply to the element |
| `tag` | string | "h1" | HTML element to render (h1-h6, p, span, div) |
| `animationType` | string | "words" | Animation type: "words" or "lines" |
| `mask` | boolean | false | Whether to use GSAP's mask effect (works best with "lines" animation) |
| `delay` | number | 0.5 | Delay before entrance animation starts (seconds) |
| `duration` | number | 1.2 | Duration of entrance animation (seconds) |
| `stagger` | number | 0.1 | Time between each word's or line's animation (seconds) |
| `once` | boolean | true | Whether to animate only once or every time the element enters/exits the viewport |
| `threshold` | number | 0.5 | Amount of element that needs to be visible to trigger animation (0.0-1.0) |
| `reverseAnimation` | boolean | false | Whether to play reverse animation when element exits viewport |
| `reverseDelay` | number | 0.1 | Delay before reverse animation starts (seconds) |
| `reverseDuration` | number | 1.0 | Duration of reverse animation (seconds) |

## How It Works

1. The component uses framer-motion's `useInView` hook to detect when the element enters or exits the viewport
2. GSAP's SplitText plugin splits the text into words and/or lines
3. Based on the `animationType`, it animates either words or lines with a staggered reveal effect
4. If `mask` is enabled with line animation, it creates a cleaner mask-based reveal effect
5. If `reverseAnimation` is true and `once` is false, the component will play a reverse animation when the element exits the viewport
6. The component carefully manages animation states to prevent conflicts between entrance and exit animations

## Animation Types

### Word Animation
Words appear one by one in a staggered fashion. This works great for headings and short paragraphs where you want each word to have its own entrance.

### Line Animation
Text animates by line, with each line entering as a unit. Perfect for paragraphs and multi-line content. When combined with the `mask` option, it creates a clean typewriter-like reveal effect. 