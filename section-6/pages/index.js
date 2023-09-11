import { getFeaturedEvents } from '../helpers/api-util.js';
import EventList from '../components/event/event-list.js';

function HomePage(props){
  return (
        <div>
           <EventList items={props.events} />
        </div>
    );
}

export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();

    return {
        props: {
            events: featuredEvents
        }
    }
}

export default HomePage;