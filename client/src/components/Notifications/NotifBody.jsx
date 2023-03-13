import "./notifBody.css"

const NotifBody = ({posts}) =>{
    return(
        <div className = "body">
            <div className="info">
                <button className="personal" /*onClick={}*/>
                    <span>Your followed user {posts.username} has uploaded something new!</span><br></br>
                    <span>For the Subject {posts.subject} </span>

                </button>
                

            </div>

        </div>
    )
}
export default NotifBody;