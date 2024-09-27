import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase"; // Ensure this is the correct path to your Firebase setup
import { Button } from "./Button";

export function Recentbar() {
    const [activityData, setActivityData] = useState([]);

    // Fetch data from Firebase on component mount
    useEffect(() => {
        const fetchActivityData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "attendance")); // Replace with your collection name
                const data = querySnapshot.docs.map(doc => doc.data());

                console.log("Fetched Data: ", data); // Log the fetched data

                if (data.length > 0) {
                    setActivityData(data); // Set the fetched data to the state
                } else {
                    console.log("No data found in the collection.");
                }
            } catch (error) {
                console.error("Error fetching data from Firebase: ", error);
            }
        };

        fetchActivityData();
    }, []);

    // Function to open Google Maps with given coordinates
    const openLocationInGoogleMaps = (latitude, longitude) => {
        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        window.open(url, "_blank");
    };

    return (
        <div className="h-[31rem] my-4 overflow-y-scroll">
            <div className="flex flex-col gap-3 py-4">
                {activityData.length > 0 ? (
                    activityData.map((data, index) => (
                        <div key={index} className="flex justify-around items-center bg-gray mx-3 p-2 py-4 font-semibold rounded-md hover:bg-light-blue2">
                            <div className="flex gap-3 items-center">
                                <div className="bg-red-800 w-1 h-14 rounded-md"></div>
                                <div className="bg-light-blue text-blue-600 font-bold rounded-full w-14 h-14 p-4">
                                    {`${data.Fname[0]}${data.Lname[0]}`}
                                </div>
                                <div>{`${data.Fname} ${data.Lname}`}</div>
                            </div>
                            <div className="flex gap-[110px] items-center">
                                <div className="relative  w-20  left-16">{new Date(data.check_in.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                                <div className="relative left-10 w-20">    {new Date(data.check_out.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                                <div className="w-20 relative left-14">00:00 HRS</div>
                                <div className="w-48">
                                    <div className="relative left-10">Longitude: {data.check_in_location.longitude}</div>
                                    <div className="relative left-10">Latitude: {data.check_in_location.latitude}</div>
                                    <div className="relative left-10">

                                    <Button 
                                        label={"Open Location"}
                                        width="10rem"
                                        onClick={() => openLocationInGoogleMaps(data.check_in_location.latitude, data.check_in_location.longitude)}
                                        
                                    />
                                    </div>
                                </div>
                                <div className="w-48">
                                    <div>Longitude: {data.check_out_location.longitude}</div>
                                    <div>Latitude: {data.check_out_location.latitude}</div>
                                    <Button
                                        label={"Open Location"}
                                        width="10rem"
                                        onClick={() => openLocationInGoogleMaps(data.check_out_location.latitude, data.check_out_location.longitude)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No activity data available.</p>
                )}
            </div>
        </div>
    );
}
