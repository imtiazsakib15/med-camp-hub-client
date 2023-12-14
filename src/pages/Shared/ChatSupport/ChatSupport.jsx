import { useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const ChatSupport = () => {
  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };
  const onLoad = () => {
    console.log("onLoad works!");
  };

  return (
    <div>
      <button onClick={handleMinimize}></button>
      <TawkMessengerReact
        propertyId="657b1a0f07843602b802058c"
        widgetId="1hhkdrk67"
        onLoad={onLoad}
      />
    </div>
  );
};

export default ChatSupport;
