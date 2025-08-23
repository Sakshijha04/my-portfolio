
import { useEffect, useRef } from "react";

export default function ShinyRoundedSquares({ numSquares = 40, minSize = 5, maxSize = 15 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    // Create squares
    const squares = [];
    for (let i = 0; i < numSquares; i++) {
      squares.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (maxSize - minSize) + minSize,
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.4 + 0.4, // slightly brighter
        twinkleSpeed: Math.random() * 0.03 + 0.01, // stronger twinkle
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.005,
        radius: Math.random() * 3 + 2,
      });
    }

    function drawRoundedSquare(x, y, size, rotation, radius, opacity) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.moveTo(-size/2 + radius, -size/2);
      ctx.lineTo(size/2 - radius, -size/2);
      ctx.quadraticCurveTo(size/2, -size/2, size/2, -size/2 + radius);
      ctx.lineTo(size/2, size/2 - radius);
      ctx.quadraticCurveTo(size/2, size/2, size/2 - radius, size/2);
      ctx.lineTo(-size/2 + radius, size/2);
      ctx.quadraticCurveTo(-size/2, size/2, -size/2, size/2 - radius);
      ctx.lineTo(-size/2, -size/2 + radius);
      ctx.quadraticCurveTo(-size/2, -size/2, -size/2 + radius, -size/2);
      ctx.closePath();

      // Shiny effect
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.lineWidth = 1.5;
      ctx.shadowBlur = 6; // glow effect
      ctx.shadowColor = `rgba(255, 255, 255, ${opacity})`;
      ctx.stroke();

      ctx.restore();
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      squares.forEach((s) => {
        // twinkle
        s.opacity += s.twinkleSpeed;
        if (s.opacity > 0.9 || s.opacity < 0.3) s.twinkleSpeed *= -1;

        // move + rotate
        s.x += s.dx;
        s.y += s.dy;
        s.rotation += s.rotationSpeed;

        // wrap around edges
        if (s.x < 0) s.x = canvas.width;
        if (s.x > canvas.width) s.x = 0;
        if (s.y < 0) s.y = canvas.height;
        if (s.y > canvas.height) s.y = 0;

        drawRoundedSquare(s.x, s.y, s.size, s.rotation, s.radius, s.opacity);
      });

      requestAnimationFrame(draw);
    }
    draw();

    return () => window.removeEventListener("resize", resize);
  }, [numSquares, minSize, maxSize]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
