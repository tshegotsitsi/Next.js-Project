function UserProfilePage(props) {
    return <h1>{props.username}</h1>
}


export default UserProfilePage;

export  async function getSeverSideProps(context);{
    return {
        props: {
            username: 'Tshego'
        }
    };
}