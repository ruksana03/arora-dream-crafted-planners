import { useEffect, useState } from "react";
import ShowEventCard from "./ShowEventCard";


const ShowEvents = () => {
    const [events, setEvents] = useState([]);
    const [dataLength, setDataLength] = useState(5);

    useEffect(() => {
        fetch('events.json')
            .then(res => res.json())
            .then(data => setEvents(data));
    }, [])

    return (
        <div>
            <div className="mx-4 mt-8 text-xl font-semibold text-[#878787]  lg:flex justify-between">
                <h1 className="">5 search result from {events.length} events</h1>
              <div className="flex justify-between lg:gap-4">
              <div>Years: <select>
                    
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                </select>
                </div>
                <div>Month: <select>
                    
                    <option>Sep</option>
                    <option>Oct</option>
                    <option>Nov</option>
                </select>
                </div>
              </div>
               
            </div>
            <div className=" mt-8">
                {
                    events.slice(0, dataLength).map(event => <ShowEventCard key={event.id} event={event}></ShowEventCard>)
                }
            </div>
            <div className="mt-6 mb-24 text-center">
                <div className={dataLength === events.length ? 'hidden' : ''}>
                    {/* <Link to='/jobs'> */}
                    <button onClick={() => setDataLength(events.length)} className="btn bg-gradient-to-r from-[#FF5107] from-10% via-[#FF5107] via-30% to-[#FF9B23] to-90% text-white font-extrabold text-lg ">See All Events</button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
};

export default ShowEvents;