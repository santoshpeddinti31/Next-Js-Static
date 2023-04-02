import MeetupDetails from "../../components/meetups/MeetupDetails";
function MeetupDetail() {
  return (
    <MeetupDetails
      image="https://previews.123rf.com/images/hamara/hamara2207/hamara220700172/189183186-silhouette-of-soldier-with-india-flag-and-flying-birds-on-a-background-the-sunset-or-the-sunrise.jpg"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="This is a first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data fro a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://previews.123rf.com/images/hamara/hamara2207/hamara220700172/189183186-silhouette-of-soldier-with-india-flag-and-flying-birds-on-a-background-the-sunset-or-the-sunrise.jpg",
        title: "First Meetup",
        id: meetupId,
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
      },
    },
  };
}
export default MeetupDetail;
