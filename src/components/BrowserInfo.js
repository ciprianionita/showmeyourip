"use client";
import { useState, useEffect } from "react";

export default function BrowserInfo() {
    const [browserInfo, setBrowserInfo] = useState({
        browser: "",
        engine: "",
        os: "",
        architecture: "",
        gpu: "",
        screenResolution: "",
        viewportSize: "",
        userAgent: "",
        languages: "",
        cookiesEnabled: false,
        doNotTrackEnabled: false,
        javascriptEnabled: true,
    });

    useEffect(() => {
        // Detect browser, engine, and OS
        const userAgent = navigator.userAgent;
        let browser = "Unknown";
        let engine = "Unknown";

        if (navigator.brave !== undefined) {
            browser = "Brave";
            engine = "Blink";
        } else if (userAgent.includes("Edg")) {
            browser = "Edge";
            engine = "Blink";
        } else if (userAgent.includes("Chrome")) {
            browser = "Chrome";
            engine = "Blink";
        } else if (userAgent.includes("Firefox")) {
            browser = "Firefox";
            engine = "Gecko";
        } else if (userAgent.includes("Safari")) {
            browser = "Safari";
            engine = "WebKit";
        } else if (userAgent.includes("Edge")) {
            browser = "Edge";
            engine = "Blink";
        } else if (userAgent.includes("Trident")) {
            browser = "Internet Explorer";
            engine = "Trident";
        }

        const os =
            navigator.userAgentData === undefined
                ? navigator.platform
                : navigator.userAgentData.platform;
        const architecture =
            navigator.userAgent.includes("WOW64") ||
            navigator.userAgent.includes("Win64")
                ? "64-bit"
                : "32-bit";

        const screenResolution = `${window.screen.width}x${window.screen.height}`;
        const viewportSize = `${window.innerWidth}x${window.innerHeight}`;
        const languages =
            navigator.languages.join(", ") || [navigator.language].join(", ");
        const cookiesEnabled = navigator.cookieEnabled;
        const doNotTrackEnabled = navigator.doNotTrack === "1" ? true : false;

        const getGPUInfo = () => {
            try {
                const canvas = document.createElement("canvas");
                const gl =
                    canvas.getContext("webgl") ||
                    canvas.getContext("experimental-webgl");
                if (!gl) return "Unavailable";

                const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
                return debugInfo
                    ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
                    : "Unknown";
            } catch (e) {
                return "Unavailable";
            }
        };

        const gpu = getGPUInfo();

        setBrowserInfo({
            browser,
            engine,
            os,
            architecture,
            gpu,
            screenResolution,
            viewportSize,
            userAgent,
            languages,
            cookiesEnabled,
            doNotTrackEnabled,
            javascriptEnabled: true, // Since this is JavaScript code, it's obviously enabled
        });
    }, []);

    return (
        <div className="text-l text-gray-800">
            <strong>Browser Information</strong>
            <ul>
                <li>Browser: {browserInfo.browser}</li>
                <li>Engine: {browserInfo.engine}</li>
                <li>
                    Operating System: {browserInfo.os} (
                    {browserInfo.architecture})
                </li>
                <li>GPU: {browserInfo.gpu}</li>
                <li>Screen Resolution: {browserInfo.screenResolution}</li>
                <li>Viewport Size: {browserInfo.viewportSize}</li>
                <li>User-Agent: {browserInfo.userAgent}</li>
                <li>Languages: {browserInfo.languages}</li>
                <li>
                    Cookies Enabled: {browserInfo.cookiesEnabled ? "Yes" : "No"}
                </li>
                <li>
                    Do Not Track Enabled:{" "}
                    {browserInfo.doNotTrackEnabled ? "Yes" : "No"}
                </li>
                <li>
                    JavaScript Enabled:{" "}
                    {browserInfo.javascriptEnabled ? "Yes" : "No"}
                </li>
            </ul>
        </div>
    );
}
