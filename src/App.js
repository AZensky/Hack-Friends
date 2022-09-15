import { useState, useRef, useEffect } from "react";
import AccessMessage from "./AccessMessage";
import hackCode from "./sourceCode";
import "./App.css";

function App() {
  const [sourceCode, setSourceCode] = useState(hackCode);
  const [displayedCode, setDisplayedCode] = useState("");
  const [isHacked, setIsHacked] = useState(false);
  const [screenLocked, setScreenLocked] = useState(false);

  const containerRef = useRef();
  // Set up an empty paragraph element to be used as a placeholder
  const scrollRef = useRef();
  // Scroll to the bottom of the container when the displayed code changes (for when displayed code is longer than a page)
  scrollRef?.current?.scrollIntoView();

  useEffect(() => {
    // So the user doesn't have to click on the container, when the component is mounted/page is loaded, we'll focus the container for the user
    containerRef.current.focus();
  }, []);

  function runScript() {
    // When user types on keyboard, get the next 10 characters from the source code and add them to the current displayed code
    setDisplayedCode(sourceCode.slice(0, displayedCode.length + 5));
  }

  function displayMessage() {
    // If the user has typed 300 characters, display a denied message
    if (displayedCode.length > 0 && displayedCode.length % 300 === 0) {
      setScreenLocked(true);
      setIsHacked(false);
    }
    if (displayedCode.length > 0 && displayedCode.length % 900 === 0) {
      setScreenLocked(true);
      setIsHacked(true);
    }
  }

  function removeMessage() {
    setScreenLocked(false);
  }

  function handleKeyDown(e) {
    if (e.key !== "Escape") {
      if (screenLocked) return;
      else {
        runScript();
        displayMessage();
      }
    } else removeMessage();
  }

  return (
    <>
      <div
        className="container"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        ref={containerRef}
      >
        <div className="source">{displayedCode}</div>
        <p ref={scrollRef}></p>
        {screenLocked && <AccessMessage isHacked={isHacked} />}
      </div>
    </>
  );
}

export default App;
