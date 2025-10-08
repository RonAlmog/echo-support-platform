"use client";

import { useVapi } from "@/modules/widget/hooks/use-vapi";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const {
    isSpeaking,
    isConnected,
    isConnecting,
    startCall,
    endCall,
    transcript,
  } = useVapi();

  return (
    <div className="flex flex-col items-center justify-center min-h-svh max-w-max mx-auto gap-4 p-4">
      <Button size="sm" onClick={() => startCall()}>
        Start Call
      </Button>

      <Button size="sm" onClick={() => endCall()} variant="destructive">
        End Call
      </Button>

      <p>isConnected: {isConnected ? "Yes" : "No"}</p>
      <p>isConnecting: {isConnecting ? "Yes" : "No"}</p>
      <p>isSpeaking: {isSpeaking ? "Yes" : "No"}</p>
      <p>Transcript: {JSON.stringify(transcript, null, 2)}</p>
    </div>
  );
}
