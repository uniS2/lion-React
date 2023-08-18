import { useEffect, useState } from "react";
// vue - composable function : import { ref, onMounted, onUnmounted } from 'vue'

const initialMousePosition = { x: 0, y: 0};

export default function useMouse() {
  const [mousePosition, setMousePosition] = useState(initialMousePosition);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.pageX,
        y: e.pageY
      })
    }

    // 구독(subscription)
    globalThis.addEventListener('mousemove', handleMouseMove);  // 일부 브라우저에서 cleanUp을 자동으로 해주는거같지만 완벽하지 않고 모르기 때문에 클린업은 해주어야!
    const clearnIntervalId = setInterval(() => console.count(), 300);

    // 구독 해지(unsubscription)
    // 클린업 - vue:unmout
    return () => {
      globalThis.removeEventListener('mousemove', handleMouseMove);
      clearInterval(clearnIntervalId);
    };
  }, []);

  return mousePosition; // { x, y }
}