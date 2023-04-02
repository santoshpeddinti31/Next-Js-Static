//our domain.com

import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://previews.123rf.com/images/hamara/hamara2207/hamara220700172/189183186-silhouette-of-soldier-with-india-flag-and-flying-birds-on-a-background-the-sunset-or-the-sunrise.jpg",
    address: "Some address 5, 13434 some city",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://previews.123rf.com/images/hamara/hamara2207/hamara220700172/189183186-silhouette-of-soldier-with-india-flag-and-flying-birds-on-a-background-the-sunset-or-the-sunrise.jpg",
    address: "Some address 10, 13434 some city",
    description: "This is a second meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   //fetch data from an API
//   // this a server side rendering method SSR

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // this is a SSG purpose like static genrate site

  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
