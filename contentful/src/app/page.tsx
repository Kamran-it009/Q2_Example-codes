async function getBlogs() {
  const res = await fetch(
    "https://cdn.contentful.com/spaces/fsfswzwrtaao/entries?access_token=rwxVWvKJNQcu_AR_lUZFQQN6MmJR4B8VzWcCRoP9Ozk&content_type=bloggingWebsite"
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const blogs = await getBlogs();
  console.log(blogs.item);
  return (
    <div>
      {blogs.items.map((item: any) => (
        <div className="mt-10 flex justify-center bg-green-400  w-auto h-auto">
          <ul>
            <li className="text-xl">{item.fields.blogTitle}</li>
            <li className="text-sm">{item.fields.date}</li>
            <li>{item.fields.description}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
