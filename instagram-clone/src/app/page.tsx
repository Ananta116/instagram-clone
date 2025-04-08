import Sidemenu from "./components/menu";
import Wrapper from "./components/wrapper";
import InstagramPost, { IPost } from "./components/post";
import CreatePost from "./components/create";
import Profile from "./components/profile";

export default async function Home() {
  const res = await fetch("http://localhost:8000/api/posts");
  const data: { posts: IPost[] } = await res.json();

  return (
    <div className="flex">
      <Sidemenu />
      <div className="flex flex-col">
        {/* <InstagramStories /> */}
        <Wrapper>
          <div>
            {data.posts.map((item) => {
              return (
                <div key={item.id}>
                  <InstagramPost
                    id={item.id}
                    user={item.user}
                    createdAt={item.createdAt}
                    imageUrl={item.imageUrl}
                    caption={item.caption}
                  />
                </div>
              );
            })}
          </div>
        </Wrapper>
      </div>
      <div className="flex flex-col">
        <Profile />
        <CreatePost />
      </div>
    </div>
  );
}
