import AnimatedText from './index';

export function AnimatedTextExample() {
  return (
    <div className="flex flex-col gap-32 py-20">
      {/* Default H1 Text (word animation) */}
      <div>
        <p className="text-sm text-gray-500 mb-2">Default word animation (h1):</p>
        <AnimatedText 
          text="This is a heading that animates word by word" 
          className="text-5xl font-bold" 
          animationType="words"
        />
      </div>
      
      {/* Line Animation Example */}
      <div>
        <p className="text-sm text-gray-500 mb-2">Line animation:</p>
        <AnimatedText 
          text="This heading animates line by line. Here's a second line to demonstrate the effect." 
          tag="h2"
          className="text-3xl font-medium text-blue-600" 
          animationType="lines"
          delay={0.5}
          duration={1.2}
          stagger={0.2}
          mask={true}
        />
      </div>
      
      {/* Line Animation with Mask */}
      <div>
        <p className="text-sm text-gray-500 mb-2">Line animation with mask effect:</p>
        <AnimatedText 
          text="This is a masked line animation effect. It creates a nice reveal effect for each line of text as it animates into view one after another."
          tag="p"
          className="text-xl leading-relaxed" 
          stagger={0.2}
          animationType="lines"
          mask={true}
        />
      </div>
      
      {/* With reverse animation (words) */}
      <div>
        <p className="text-sm text-gray-500 mb-2">Word animation with reverse when out of view:</p>
        <AnimatedText 
          text="Watch me disappear word by word when you scroll away!" 
          tag="h3"
          className="text-2xl font-bold text-orange-600" 
          once={false}
          reverseAnimation={true}
          duration={0.8}
          reverseDuration={0.6}
          animationType="words"
        />
      </div>
      
      {/* With reverse animation (lines) */}
      <div>
        <p className="text-sm text-gray-500 mb-2">Line animation with reverse when out of view:</p>
        <AnimatedText 
          text="This text uses line animation with reverse effect. When you scroll away, the lines will animate out in reverse order. Here's a second line to show the effect." 
          tag="h3"
          className="text-2xl font-bold text-green-600" 
          once={false}
          reverseAnimation={true}
          duration={1.2}
          stagger={0.2}
          animationType="lines"
          mask={true}
        />
      </div>
      
      {/* Different timing for entry/exit */}
      <div>
        <p className="text-sm text-gray-500 mb-2">With different timing for entry/exit:</p>
        <AnimatedText 
          text="Slow to appear, quick to leave" 
          tag="h3"
          className="text-2xl font-bold text-purple-600" 
          threshold={0.8}
          once={false}
          reverseAnimation={true}
          duration={1.5}
          stagger={0.05}
          reverseDuration={0.5}
          reverseDelay={0}
        />
      </div>
      
      {/* Decorative text */}
      <div>
        <p className="text-sm text-gray-500 mb-2">Decorative span with reverse:</p>
        <AnimatedText 
          text="✨ Special Effect Text ✨" 
          tag="span"
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text" 
          duration={1.2}
          once={false}
          reverseAnimation={true}
        />
      </div>
    </div>
  );
} 