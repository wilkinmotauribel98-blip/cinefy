import { useEffect, useState } from "react";

export function useDelayedFlag(active: boolean, delay = 1000) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setVisible(active), active ? delay : 0);
    return () => clearTimeout(id);
  }, [active, delay]);

  return active && visible;
}
