import { useEffect } from "react";

export function useKeyboardEvent(
  keyDownCallback: any,
  keyUpCallBack: any,
  dependencies: any = []
) {
  useEffect(() => {
    window.addEventListener("keydown", keyDownCallback);
    window.addEventListener("keyup", keyUpCallBack);
    return () => {
      window.removeEventListener("keydown", keyDownCallback);
      window.removeEventListener("keyup", keyUpCallBack);
    };
  }, dependencies);
}
