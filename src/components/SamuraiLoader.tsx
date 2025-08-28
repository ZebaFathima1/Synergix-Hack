import { useEffect, useState } from "react";

interface SamuraiLoaderProps {
  onLoadComplete: () => void;
}

const SamuraiLoader = ({ onLoadComplete }: SamuraiLoaderProps) => {
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showSamuraiText, setShowSamuraiText] = useState(false);

  useEffect(() => {
    const phases = [
      { duration: 1000, text: "Awakening the Digital Samurai..." },
      { duration: 1500, text: "Forging Cyber Katana..." },
      { duration: 1200, text: "Channeling Hackathon Spirit..." },
      { duration: 800, text: "SYNERGIX Loading Complete" }
    ];

    let currentPhase = 0;
    let progressValue = 0;

    // Show samurai text after initial delay
    setTimeout(() => setShowSamuraiText(true), 500);

    const updateProgress = () => {
      if (currentPhase < phases.length) {
        const increment = 25; // 100 / 4 phases
        progressValue += 0.5;
        
        if (progressValue >= (currentPhase + 1) * increment) {
          currentPhase++;
          setPhase(currentPhase);
        }
        
        setProgress(Math.min(progressValue, 100));

        if (progressValue < 100) {
          setTimeout(updateProgress, 30);
        } else {
          setTimeout(onLoadComplete, 500);
        }
      }
    };

    updateProgress();
  }, [onLoadComplete]);

  const phases = [
    "Awakening the Digital Samurai...",
    "Forging Cyber Katana...",
    "Channeling Hackathon Spirit...",
    "SYNERGIX Loading Complete"
  ];

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background with Matrix Effect */}
      <div className="absolute inset-0 gradient-hero opacity-80"></div>
      
      {/* Matrix Rain */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-matrix-rain"
            style={{
              left: `${(i * 3.33) % 100}%`,
              height: '300px',
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${2 + (i % 3)}s`
            }}
          />
        ))}
      </div>
      
      {/* Floating Particles with Different Sizes */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute bg-primary rounded-full animate-particle-drift opacity-40"
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{ 
          backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Scanning Lines */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-cyber-scan" 
             style={{ top: '30%' }} />
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-cyber-scan" 
             style={{ top: '70%', animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Main Samurai Symbol with Enhanced Animation */}
        <div className="mb-8 animate-scale-in">
          <div className="relative">
            {showSamuraiText && (
              <>
                <h1 className="text-8xl font-bold text-primary text-glow mb-2 animate-samurai-meditation relative">
                  侍
                  {/* Holographic flicker overlay */}
                  <div className="absolute inset-0 text-8xl font-bold text-primary-glow animate-hologram-flicker opacity-20">
                    侍
                  </div>
                </h1>
                
                {/* Energy rings around samurai symbol */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border border-primary/30 rounded-full animate-energy-pulse" style={{ animationDelay: '0s' }} />
                  <div className="absolute w-40 h-40 border border-primary/20 rounded-full animate-energy-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute w-48 h-48 border border-primary/10 rounded-full animate-energy-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </>
            )}
          </div>
          
          <h2 className="text-4xl font-bold text-foreground mb-2 animate-slide-in-left" style={{ animationDelay: '0.8s' }}>
            <span className="animate-text-shimmer bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_auto] bg-clip-text text-transparent">
              SYNERGIX
            </span>
          </h2>
          <p className="text-muted-foreground text-sm tracking-wider animate-fade-in" style={{ animationDelay: '1s' }}>
            HACKATHON 2024
          </p>
        </div>

        {/* Enhanced Katana Animation */}
        <div className="relative mb-8 h-24 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Enhanced Katana Blade with Shine Effect */}
            <div className="relative w-40 h-1 overflow-hidden rounded-full">
              <div className="w-full h-full bg-gradient-to-r from-muted via-foreground to-primary animate-katana-draw rounded-full shadow-glow"></div>
              {/* Blade shine effect */}
              <div className="absolute inset-0 w-8 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-blade-shine" />
            </div>
            
            {/* Multiple Slash Effects */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-0.5 bg-primary/60 animate-samurai-slash" />
              <div className="absolute w-28 h-0.5 bg-primary/40 animate-samurai-slash" style={{ animationDelay: '0.3s' }} />
              <div className="absolute w-24 h-0.5 bg-primary/30 animate-samurai-slash" style={{ animationDelay: '0.6s' }} />
            </div>

            {/* Spark effects */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`spark-${i}`}
                  className="absolute w-1 h-1 bg-primary rounded-full animate-particle-drift"
                  style={{
                    left: `${40 + Math.random() * 20}%`,
                    top: `${45 + Math.random() * 10}%`,
                    animationDelay: `${1 + Math.random()}s`,
                    animationDuration: '2s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Loading Progress */}
        <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="w-full bg-muted rounded-full h-3 mb-4 overflow-hidden relative">
            <div 
              className="h-full bg-gradient-primary transition-all duration-300 ease-out shadow-glow relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              {/* Progress shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-blade-shine" />
            </div>
            {/* Progress pulse indicator */}
            <div 
              className="absolute top-0 h-full w-1 bg-primary-glow animate-glow-pulse"
              style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
            />
          </div>
          
          {/* Enhanced Progress Text */}
          <div className="text-sm text-muted-foreground mb-2 font-mono">
            <span className="animate-text-shimmer bg-gradient-to-r from-muted-foreground via-primary to-muted-foreground bg-[length:200%_auto] bg-clip-text text-transparent">
              {progress.toFixed(0)}% Complete
            </span>
          </div>
        </div>

        {/* Phase Text with Typewriter Effect */}
        <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
          <p className="text-primary font-medium h-6 animate-text-shimmer bg-gradient-to-r from-primary via-primary-glow to-primary bg-[length:200%_auto] bg-clip-text text-transparent">
            {phases[Math.min(phase, phases.length - 1)]}
          </p>
        </div>

        {/* Enhanced Cyberpunk Elements */}
        <div className="absolute -bottom-10 -left-10 w-32 h-32 border-l-2 border-t-2 border-primary/30 animate-fade-in">
          <div className="w-4 h-4 border border-primary animate-energy-pulse absolute -top-2 -left-2" />
        </div>
        <div className="absolute -top-10 -right-10 w-32 h-32 border-r-2 border-b-2 border-primary/30 animate-fade-in">
          <div className="w-4 h-4 border border-primary animate-energy-pulse absolute -bottom-2 -right-2" />
        </div>
        
        {/* Enhanced Honor Quote with Fade-in */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-slide-in-up" style={{ animationDelay: '2s' }}>
          <p className="text-xs text-muted-foreground italic opacity-70 font-mono tracking-wider animate-hologram-flicker">
            "Code with Honor, Hack with Precision"
          </p>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-2" />
        </div>
      </div>
    </div>
  );
};

export default SamuraiLoader;