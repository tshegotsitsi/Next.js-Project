import { Fragment } from "react";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/event/event-list";
import EventsSearch from "../../components/events/events-search"; // Ensure correct path

function AllEventsPage() {
  const events = getAllEvents();
  return (
    <Fragment>
      <EventsSearch />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
