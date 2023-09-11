function UserProfilePage(props) {
    return <h1>{props.username}</h1>
}


export default UserProfilePage;

export  async function getSeverSideProps(context) {
    const { params, req, res } = context;

    
    return {
        props: {
            username: 'Tshego'
        }
    };
}