import React from "react";
import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard"
import Data from './announcements.model.js'

function Announcements() {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center">
        {Data.map((data,i)=>{
          return <AnnouncementCard title={Data[i].title} subject={Data[i].subject} date={Data[i].date} photoUrl={Data[i].photoUrl} />
        })
        }
      </div>
    </>
  );
}

export default Announcements;
