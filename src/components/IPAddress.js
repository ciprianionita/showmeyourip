"use client";
import { useEffect, useState } from "react";
import { CircleDashed } from "lucide-react";
import Flag from "react-world-flags";

export default function IPAddress() {
    const [ip, setIp] = useState(null);
    const [city, setCity] = useState(null);
    const [region, setRegion] = useState(null);
    const [countrycode, setCountryCode] = useState(null);
    const [countryname, setCountryName] = useState(null);
    const [org, setOrg] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://ipapi.co/json/")
            .then((response) => response.json())
            .then((data) => {
                setIp(data.ip);
                setCity(data.city);
                setRegion(data.region);
                setCountryCode(data.country_code);
                setCountryName(data.country_name);
                setOrg(data.org);
                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to fetch IP address");
                setLoading(false);
            });
    }, []);

    return (
        <>
            {loading ? (
                <div className="flex items-center justify-center gap-2">
                    <CircleDashed className="w-5 h-5 animate-spin text-gray-600" />
                    <span className="text-gray-600">Fetching your IP...</span>
                </div>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <>
                    <div className="bg-gray-50 py-8 px-4 rounded-xl">
                        <p className="text-4xl font-mono text-gray-800">{ip}</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-xl text-gray-800">City: {city}</p>
                        <p className="text-xl text-gray-800">
                            Region: {region}
                        </p>
                        <p className="text-xl text-gray-800">
                            Country:{" "}
                            <span className="inline-block w-6">
                                <Flag code={countrycode} />
                            </span>{" "}
                            {countrycode} | {countryname}
                        </p>
                        <p className="text-xl text-gray-800">ISP: {org}</p>
                    </div>
                </>
            )}
        </>
    );
}
