"use client";

import React, { useRef } from 'react';  
import { useChat, Message } from "ai/react";

const frequentMessages = [
    "Who was the first Khan of Kazakh Khanate?",
    "What is the cultural heritage of Kazakhstan?",
    "What is the significance of the Kazakh Khanate?",
    "How has Kazakhstan's economy evolved since independence?",
];

export default function ChatComponent() {
    const { input, handleInputChange, handleSubmit, isLoading, messages, setInput } = useChat();
    const formRef = useRef<HTMLFormElement>(null);

    const handleFrequentMessageClick = (message: string) => {
        setInput(message);
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
            <div className="flex-grow overflow-auto p-6 mb-36">
                {messages.map((message: Message) => {
                    return (
                        <div
                            className={`mx-6 my-2 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            key={message.id}
                        >
                            <div>
                                {message.role === 'assistant'
                                    ? <h3 className="text-lg font-semibold mt-2 text-[#7091e6]">KazChat</h3>
                                    : <h3 className="text-lg font-semibold mt-2 text-right text-[#3d52a0]">You</h3>
                                }
                                {message.content.split("/n").map((currentTextBlocks: string, index: number) => {
                                    if (currentTextBlocks === "") {
                                        return (
                                            <p key={message.id + index}>&nbsp;</p>
                                        );
                                    } else {
                                        return (
                                            <div className="my-2" key={message.id + index}>
                                                {message.role === 'user'
                                                    ? <p className="text-md text-right text-white bg-[#3d52a0] p-2 rounded-lg inline-block">{currentTextBlocks}</p>
                                                    : <p className="text-md text-left text-white bg-[#7091e6] p-2 rounded-lg inline-block">{currentTextBlocks}</p>
                                                }
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="p-4 bg-white fixed bottom-0 w-full">
                <form ref={formRef} className="flex items-center space-x-2" onSubmit={handleSubmit}>
                    <input
                        className="flex-grow rounded-md bg-[#3d52a0] text-white p-2"
                        placeholder={'Ask something...'}
                        value={input}
                        onChange={handleInputChange}
                    />
                    <button type="submit" className="rounded-md bg-[#3d52a0] text-white hover:bg-[#7091e6] hover:text-black transition-all p-2 font-bold">
                        Send
                    </button>
                </form>
                <div className="flex justify-center space-x-2 mt-2">
                    {frequentMessages.map((msg, index) => (
                        <button
                            key={index}
                            className="rounded-md bg-[#3d52a0] text-white hover:bg-[#7091e6] hover:text-black transition-all p-2 font-bold"
                            onClick={() => handleFrequentMessageClick(msg)}
                        >
                            {msg}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
