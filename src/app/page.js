import Image from "next/image";
import IPAddress from "@/components/IPAddress";
import BrowserInfo from "@/components/BrowserInfo";

export default function Home() {
    return (
        <main className="w-full min-h-screen bg-white p-6">
            <div className="max-w-2xl mx-auto pt-4 space-y-8">
                <Image
                    src="/logo.png"
                    width={192}
                    height={192}
                    quality={95}
                    alt="duck detective logo"
                    className="mx-auto"
                />
                <div className="text-center space-y-6">
                    <h1 className="text-3xl font-semibold text-gray-900">
                        Your IP Address
                    </h1>
                    <IPAddress />
                    <BrowserInfo />
                    <div className="pt-6 space-y-4 text-left">
                        <h2 className="text-xl font-medium text-gray-800">
                            What is this?
                        </h2>
                        <p className="text-gray-600">
                            This tool helps you quickly find out your current IP
                            address. An IP address is your device's unique
                            identifier on the internet, like a digital home
                            address that helps websites know where to send the
                            information you request.
                        </p>
                        <h2 className="text-xl font-medium text-gray-800">
                            How it works
                        </h2>
                        <p className="text-gray-600">
                            When you visit this page, we automatically detect
                            and display your IP address using a secure API. This
                            information is not stored and is only displayed to
                            you. Your IP address may change if you connect to a
                            different network or use a VPN.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
