import NotifNavbar from "./NotifNavbar";
import NotifBody from "./NotifBody";

export default function Notif({ posts }) {
  return (
    <div className="container">
      <>
        <NotifNavbar />
        {posts.map((posts) => (
          <NotifBody key={posts.id} posts={posts} />
        ))}
      </>
    </div>
  );
}
