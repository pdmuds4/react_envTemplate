import Getpost from "../getpost";

function AppPage() {
  const post = Getpost("/");
  if (!post) return null;
  
  return (
    <div>
      <p>{post.message}</p>
    </div>
  );
}

export default AppPage;
